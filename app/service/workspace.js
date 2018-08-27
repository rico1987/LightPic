import * as setting from './setting';


const fs = require('fs');
const path = require('path');
const randomize = require('randomatic');
const traverse = require('traverse');

/**
 * 设置工作区信息
 * @param {*} workspaceInfo
 */
export function setWorkspaceInfo(workspaceInfo) {
    const workspacePath = setting.getWorkspacePath();
    fs.writeFileSync(path.join(workspacePath, 'workspace.json'), JSON.stringify(workspaceInfo));
}

/**
 * 获取工作区信息
 */
export function getWorkspaceInfo() {
    const workspacePath = setting.getWorkspacePath();
    let workspaceInfo;
    if (fs.existsSync(path.join(workspacePath, 'workspace.json'))) {
        workspaceInfo = JSON.parse(fs.readFileSync(path.join(workspacePath, 'workspace.json'), 'utf-8'));
    } else {
        workspaceInfo = {
            folders: [],
        };
        setWorkspaceInfo(workspaceInfo);
    }
    return workspaceInfo;
}

/**
 * 获取工作区根路径下文件夹
 */
export function getWorkspaceRootFolders() {
    const { folders } = getWorkspaceInfo();
    return folders;
}

/**
 * 从文件夹下metadata.json获取文件夹信息
 * @param {*} folderId
 */
export function getFolderInfo(folderId) {
    const workspacePath = setting.getWorkspacePath();
    let folderInfo;
    if (fs.existsSync(path.join(workspacePath, 'folders', folderId, 'metadata.json'))) {
        folderInfo = JSON.parse(fs.readFileSync(path.join(workspacePath, 'folders', folderId, 'metadata.json'), 'utf-8'));
    } else {
        folderInfo = null;
    }
    return folderInfo;
}

/**
 * 添加工作区文件夹
 * @param {*} folderInfo
 */
export function addWorkspaceFolder(folderInfo) {
    const workspaceInfo = getWorkspaceInfo();
    const { folders } = workspaceInfo;
    const workspacePath = setting.getWorkspacePath();
    const id = randomize('Aa0', 25);
    const realPath = path.join(workspacePath, 'folders', id);
    if (fs.existsSync(realPath)) {
        return false;
    }
    fs.mkdirSync(realPath);
    if (folderInfo.parentFolderId) {
        // eslint-disable-next-line
        traverse(folders).map(function () {
            if (this.node.id === folderInfo.parentFolderId) {
                this.node.children.push({
                    id,
                    name: folderInfo.name,
                    tags: folderInfo.tags,
                    iconColor: folderInfo.iconColor,
                    modificationTime: new Date().getTime(),
                    children: [],
                });
            }
        });
        workspaceInfo.folders = folders;
    } else {
        workspaceInfo.folders.push({
            id,
            name: folderInfo.name,
            tags: folderInfo.tags,
            iconColor: folderInfo.iconColor,
            modificationTime: new Date().getTime(),
            children: [],
        });
    }
    setWorkspaceInfo(workspaceInfo);
    return true;
}

/**
 * 重命名工作区文件夹
 * @param {*} folderId
 * @param {*} name
 */
export function renameFolder(folderId, name) {
    const workspaceInfo = getWorkspaceInfo();
    let { folders } = workspaceInfo;
    // eslint-disable-next-line
    folders = traverse(folders).map(function () {
        if (this.node.id === folderId) {
            this.node.name = name;
        }
    });
    workspaceInfo.folders = folders;
    setWorkspaceInfo(workspaceInfo);
}

/**
 * 设置工作区文件夹icon
 * @param {*} folderId
 * @param {*} color
 */
export function setIconColor(folderId, color) {
    const workspaceInfo = getWorkspaceInfo();
    let { folders } = workspaceInfo;
    // eslint-disable-next-line
    folders = traverse(folders).map(function () {
        if (this.node.id === folderId) {
            this.node.color = color;
        }
    });
    workspaceInfo.folders = folders;
    setWorkspaceInfo(workspaceInfo);
}

/**
 * 移除工作区文件夹
 * @param {*} folderId
 */
export function removeFolder(folderId) {
    const workspaceInfo = getWorkspaceInfo();
    let { folders } = workspaceInfo;
    const workspacePath = setting.getWorkspacePath();
    const realPath = path.join(workspacePath, 'folders', folderId);
    if (fs.existsSync(realPath)) {
        fs.rmdirSync(realPath);
    }
    // todo: 移除只在当前移除文件夹中存在的图片
    // eslint-disable-next-line
    folders = traverse(folders).map(function () {
        if (this.node.id === folderId) {
            this.remove();
        }
    });
    workspaceInfo.folders = folders;
    setWorkspaceInfo(workspaceInfo);
}


