import bash from 'vamtiger-bash';
import getFolderContent from 'vamtiger-get-directory-content';
import { IInstall, NpmScript, FolderName } from './types';

const { install } = NpmScript;
const { node_modules } = FolderName;

export default async function ({ workingDirectory, dependencies }: IInstall) {
    const folderContent = await getFolderContent(workingDirectory)
        .then(folderContent => new Set(folderContent));
    const bashOptions = {
        cwd: workingDirectory
    };
    const installDependencies = `${install} ${dependencies}`;

    console.log(installDependencies);
    !folderContent.has(node_modules) && await bash(installDependencies, bashOptions);
}