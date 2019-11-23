export * from '../node_modules/tslib/tslib';
import { CommandlineArgument, ShortCommandlineArgument } from './types';
import Args from 'vamtiger-argv/build/main';
import postinstallDistTags from './postinstall-dist-tag';
import postinstallCopy from './postinstall-copy';

const { cwd } = process;
const workingDirectory = cwd();
const args = new Args();
const distTag = args.get(CommandlineArgument.distTag || CommandlineArgument.distTag);
const copy = args.get(CommandlineArgument.copy || CommandlineArgument.copy);
const sourceFolder = args.get(CommandlineArgument.sourceFolder || CommandlineArgument.sourceFolder);
const pattern = args.get(CommandlineArgument.pattern || CommandlineArgument.pattern);
const copyParams = copy && sourceFolder && pattern && sourceFolder !== workingDirectory && {
    workingDirectory,
    sourceFolder,
    pattern
};


if (distTag) {
    postinstallDistTags({ workingDirectory, distTag })
        .catch(console.warn);
} else if (copyParams) {
    postinstallCopy(copyParams)
        .catch(console.warn);
}