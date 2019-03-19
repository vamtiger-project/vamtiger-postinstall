import getPackageData from 'vamtiger-require';
import { IGetDependencies, PackagePath, IStringObject, StringConstant } from './types';

const { devDependencies: dependenciesPath } = PackagePath;
const { space } = StringConstant;

export default function ({ path: packagePath}: IGetDependencies) {
    const currentDependenciesPath = `${packagePath}.${dependenciesPath}`;
    const dependencies = getPackageData({
        path: currentDependenciesPath
    }) as IStringObject;
    const installDependencies = Object
        .keys(dependencies)
        .map(dependency => dependency)
        .join(space);

    return installDependencies;
}