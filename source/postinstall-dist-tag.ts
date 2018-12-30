import { resolve as resolvePath } from 'path';
import getPackageData from './get-package-data';
import getDependencies from './get-dependencies';
import install from './install';
import { IPostInstallDistTag, PackagePath } from './types';

const { distTag: distTagPath } = PackagePath;

export default async function ({ distTag, workingDirectory }: IPostInstallDistTag) {
    const packagePath = resolvePath(
        workingDirectory,
        'package'
    );
    const packageDistTagPath = `${packagePath}.${distTagPath}`;
    const packageDistTag = await getPackageData({
        path: packageDistTagPath
    }).catch(() => '') as string;
    const dependencies = distTag === packageDistTag && getDependencies({
        path: packagePath
    });

    if (dependencies) {
        await install({
            workingDirectory,
            dependencies 
        });
    }
}