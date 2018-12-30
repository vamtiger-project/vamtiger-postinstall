export enum StringConstant {
    space = ' '
}

export enum FolderName {
    node_modules = 'node_modules'
}

export enum NpmScript {
    install = 'npm i'
}

export enum CommandlineArgument {
    distTag = 'distTag'
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
    [CommandlineArgument.distTag]: 'd'
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

export interface IInstall {
    workingDirectory: string;
    dependencies: string;
}