import { IGetPackageData } from './types';
import getPackageData from 'vamtiger-require';

export default async function({path: packageDataPath}: IGetPackageData) {
    const packageData = getPackageData({
        path: packageDataPath
    });

    return packageData;
}