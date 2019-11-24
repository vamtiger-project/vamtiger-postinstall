import { resolve as resolvePath, dirname, basename } from 'path';
import { IPostInstallCopy } from './types';
import getFolderContent from 'vamtiger-get-directory-content';
import copy from 'vamtiger-copy-file';
import getPathData from 'vamtiger-get-path-data';

export default async function ({workingDirectory, sourceFolder: currentSourceFolder, pattern}: IPostInstallCopy) {
    const sourceFileName = new RegExp(pattern, 'i');
    const mainPath = require.resolve(workingDirectory);
    const sourcePath = require.resolve(currentSourceFolder);
    const [mainPathData, sourcePathData] = await Promise.all([
        getPathData(mainPath),
        getPathData(sourcePath),
    ]);
    const mainFolder = mainPathData.isDirectory() && mainPath || dirname(mainPath);
    const sourceFolder = sourcePathData.isDirectory() && sourcePath || dirname(sourcePath);
    const sourceFolderEntryPaths = await getFolderContent(sourceFolder)
        .then(entries => entries.map(entry => resolvePath(sourceFolder, entry)));
    const sourceFolderEntryPathData = await Promise.all(sourceFolderEntryPaths.map(async sourceFolderEntryPath => ({
        sourceFolderEntryPath,
        pathData: await getPathData(sourceFolderEntryPath)
    })));
    const sourceFolderEntryFiles = sourceFolderEntryPathData
        .map(({sourceFolderEntryPath, pathData}) => pathData.isFile() && basename(sourceFolderEntryPath) || '')
        .filter(sourceFolderEntryFile => sourceFolderEntryFile && sourceFolderEntryFile.match(sourceFileName));
    const copyParams = sourceFolderEntryFiles.map(sourceFolderEntryFile => ({
        source: resolvePath(sourceFolder, sourceFolderEntryFile),
        destination: resolvePath(mainFolder, sourceFolderEntryFile)
    }));

    await Promise.all(copyParams.map(copy));

    return true;
}