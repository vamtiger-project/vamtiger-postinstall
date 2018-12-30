export * from '../node_modules/tslib/tslib';
import { CommandlineArgument, ShortCommandlineArgument } from './types';
import Args from 'vamtiger-argv/build/main';
import postInstallDistTags from './postinstall-dist-tag';

const { cwd: getWorkingDirectory } = process;
const workingDirectory = getWorkingDirectory();
const args = new Args();
const { distTag: distTagArg } = CommandlineArgument;
const { distTag: shortDistTagArg } = ShortCommandlineArgument;
const distTag = args.get(distTagArg || shortDistTagArg);

if (distTag) {
    postInstallDistTags({ workingDirectory, distTag })
        .catch(console.warn);
}