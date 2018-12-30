import getPackageData from 'vamtiger-require';
import { IGetDependencies, PackagePath, IStringObject, StringConstant } from './types';

const { dependencies: dependenciesPath, devDependencies: devDependenciesPath } = PackagePath;
const { space } = StringConstant;

export default function ({ path: packagePath}: IGetDependencies) {
    const currentDependenciesPath = `${packagePath}.${dependenciesPath}`;
    const dependencies = getPackageData({
        path: currentDependenciesPath
    }) as IStringObject;
    const installDependencies = Object
        .keys(dependencies)
        .map(dependency => `${dependency}@${dependencies[dependency]}`)
        .join(space);

    return installDependencies;
}