import bash from 'vamtiger-bash';
import getFolderContent from 'vamtiger-get-directory-content';
import { IInstall, InstallScript, FolderName } from './types';

const { install } = InstallScript;
const { node_modules } = FolderName;

export default async function ({ workingDirectory, dependencies, devDependencies }: IInstall) {
    const bashOptions = {
        cwd: workingDirectory
    };
    const installDependencies = dependencies && `${install} ${dependencies}` || `${install} ${devDependencies}`;

    console.log(installDependencies);
    await bash(installDependencies, bashOptions);
}