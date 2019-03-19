import getPackageData from 'vamtiger-require';
import { IGetDependencies, PackagePath, IStringObject, StringConstant } from './types';

const { dependencies: dependenciesPath, devDependencies: devDependenciesPath } = PackagePath;
const { space } = StringConstant;

export default function ({ path: packagePath}: IGetDependencies) {
    const currentDependenciesPath = `${packagePath}.${dependenciesPath}`;
    const currentDevDependenciesPath = `${packagePath}.${devDependenciesPath}`;
    const dependencies = getPackageData({
        path: currentDependenciesPath
    }) as IStringObject;
    const devDependencies = getPackageData({
        path: currentDevDependenciesPath
    }) as IStringObject;
    const currentDependencies = {
        ...dependencies,
        ...devDependencies
    }
    const installDependencies = Object
        .keys(currentDependencies)
        .map(dependency => dependency)
        .join(space);

    return installDependencies;
}