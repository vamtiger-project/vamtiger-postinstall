import bash from 'vamtiger-bash';
import getFolderContent from 'vamtiger-get-directory-content';
import { IInstall, InstallScript, FolderName } from './types';

const { install, installDev } = InstallScript;
const { node_modules } = FolderName;

export default async function ({ workingDirectory, dependencies, devDependencies }: IInstall) {
    const folderContent = await getFolderContent(workingDirectory)
        .then(folderContent => new Set(folderContent));
    const bashOptions = {
        cwd: workingDirectory
    };
    const installDependencies = dependencies && `${install} ${dependencies}` || `${installDev} ${devDependencies}`;

    console.log(installDependencies);
    !folderContent.has(node_modules) && await bash(installDependencies, bashOptions);
}