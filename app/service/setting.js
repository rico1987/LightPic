import {
    userDataPath,
} from '@/service/coreService';

const fs = require('fs');
const path = require('path');

/**
 * 设置用户配置
 * @param {*} config
 */
export function setUserSettings(config) {
    fs.writeFileSync(path.join(userDataPath, 'setting.json'), JSON.stringify(config));
}

/**
 * 获取用户配置
 */
export function getUserSettings() {
    let config;
    if (fs.existsSync(path.join(userDataPath, 'setting.json'))) {
        config = JSON.parse(fs.readFileSync(path.join(userDataPath, 'setting.json'), 'utf-8'));
    } else {
        config = {
            workspacePath: '',
        };
        setUserSettings(config);
    }
    return config;
}

/**
 * 获取工作区路径
 */
export function getWorkspacePath() {
    return getUserSettings().workspacePath;
}

/**
 * 设置工作区路径
 * @param {*} workspacePath
 */
export function setWorkspacePath(workspacePath) {
    const config = getUserSettings();
    config.workspacePath = workspacePath;
    setUserSettings(config);
}
