import { resolve as resolvePath } from 'path';
import { expect } from 'chai';
import bash from 'vamtiger-bash';
import getFolderContent from 'vamtiger-get-directory-content';
import { DistTag, FolderName } from '../types';

const { source: distTag } = DistTag;
const { node_modules } = FolderName;
const vamtigerPostinstall = resolvePath(
    __dirname,
    '../..',
    'build',
    'vamtiger-postinstall'
);
const workingDirectory = resolvePath(
    __dirname,
    '../..',
    'node_modules',
    'vamtiger-browser-method'
)
const testNodeModules = resolvePath(
    workingDirectory,
    'node_modules'
);
const removeNodeModules = `rm -rf ${testNodeModules}`;
const postinstallDistTag = `node ${vamtigerPostinstall} --distTag ${distTag}`;
const bashOptions = {
    cwd: workingDirectory
};

describe.only('vamtiger-postinstall', function () {
    before(async function () {
        await bash(removeNodeModules);

        let output = await bash(postinstallDistTag, bashOptions);

        console.log(output);
    });

    after(async function () {
        await bash(removeNodeModules);
    });

    it('dist-tag', async function () {
        const folderContent = await getFolderContent(workingDirectory).then(folderContent => new Set(folderContent));

        expect(folderContent.has(node_modules)).to.be.true;
    });
});