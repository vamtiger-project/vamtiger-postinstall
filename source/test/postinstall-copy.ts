import { resolve as resolvePath } from 'path';
import { expect } from 'chai';
import createFolder from 'vamtiger-create-directory';
import createFile from 'vamtiger-create-file';
import bash from 'vamtiger-bash';
import copy from '../postinstall-copy';

const mockFolderName = 'postinstall-copy-mock-data';
const mockDataFolder = resolvePath(
    __dirname,
    mockFolderName
);
const packageJsonPath = resolvePath(
    mockDataFolder,
    'package.json'
);
const packageJsonMainPath = resolvePath(
    mockDataFolder,
    'index.js'
);
const sourceFolder = __dirname;
const pattern = 'postinstall';
const packageJson = JSON.stringify({
    name: 'postinstall-copy',
    version: '0.0.1',
    description: '',
    main: 'index.js',
    scripts: {
        test: 'echo \'Error: no test specified\' && exit 1'
    },
    author: '',
    license: 'MIT'
});
const removeMockDataFolder = `rm -rf ${mockDataFolder}`;

describe('postinstall-copy', function () {
    before(async function () {
        await bash(removeMockDataFolder);
        await createFolder(mockDataFolder);

        await Promise.all([
            createFile(packageJsonMainPath, ''),
            createFile(packageJsonPath, packageJson),
        ]);
    });

    after(async function () {
        await bash(removeMockDataFolder);
    })

    it('copy files', async function () {
        const postInstallCopy = await copy({
            workingDirectory: mockDataFolder,
            sourceFolder,
            pattern
        });

        expect(postInstallCopy).to.be.true;
    })
});