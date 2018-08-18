import * as setting from './setting';

const fs = require('fs');
const path = require('path');
const randomize = require('randomatic');
const traverse = require('traverse');

export function setWorkspaceInfo(workspaceInfo) {
    const workspacePath = setting.getWorkspacePath();
    fs.writeFileSync(path.join(workspacePath, 'workspace.json'), JSON.stringify(workspaceInfo));
}

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

export function getWorkspaceRootFolders() {
    const { folders } = getWorkspaceInfo();
    return folders;
}

export function getFolderInfo(id) {
    const workspacePath = setting.getWorkspacePath();
    let folderInfo;
    if (fs.existsSync(path.join(workspacePath, 'images', id, 'metadata.json'))) {
        folderInfo = JSON.parse(fs.readFileSync(path.join(workspacePath, 'images', id, 'metadata.json'), 'utf-8'));
    } else {
        folderInfo = null;
    }
    return folderInfo;
}

export function addWorkspaceFolder(folderInfo) {
    const workspaceInfo = getWorkspaceInfo();
    const { folders } = workspaceInfo;
    const workspacePath = setting.getWorkspacePath();
    const id = randomize('Aa0', 25);
    const realPath = path.join(workspacePath, 'images', id);
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
            modificationTime: new Date().getTime(),
            children: [],
        });
    }
    setWorkspaceInfo(workspaceInfo);
    return true;
}

export function renameFolder(id, name) {
    const workspaceInfo = getWorkspaceInfo();
    let { folders } = workspaceInfo;
    // eslint-disable-next-line
    folders = traverse(folders).map(function () {
        if (this.node.id === id) {
            this.node.name = name;
        }
    });
    workspaceInfo.folders = folders;
    setWorkspaceInfo(workspaceInfo);
}

export function setIconColor(id, color) {
    
}
