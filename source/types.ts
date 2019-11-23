export enum StringConstant {
    space = ' '
}

export enum FolderName {
    node_modules = 'node_modules'
}

export enum InstallScript {
    install = 'npm install --no-audit'
}

export enum CommandlineArgument {
    distTag = 'distTag',
    copy = 'copy',
    sourceFolder = 'sourceFolder',
    pattern = 'pattern'
}

export enum DistTag {
    source = 'source'
}

export enum PackagePath {
    distTag = '_requested.fetchSpec',
    dependencies = 'dependencies',
    devDependencies = 'devDependencies'
}

export const ShortCommandlineArgument = {
    [CommandlineArgument.distTag]: 'd' as 'd',
    [CommandlineArgument.copy]: 'c' as 'c',
    [CommandlineArgument.sourceFolder]: 's' as 's',
    [CommandlineArgument.pattern]: 'p' as 'p'
};

export interface IStringObject {
    [key: string]: string;
}

export interface IPostInstallDistTag {
    distTag: string;
    workingDirectory: string;
}

export interface IGetDependencies {
    path: string;
}

export interface IPostInstallCopy {
    workingDirectory: string;
    sourceFolder: string;
    pattern: string;
}
export interface IInstall {
    workingDirectory: string;
    dependencies?: string;
}

export interface IGetPackageData {
    path: string;
}