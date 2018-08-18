import {
    userDataPath,
} from '@/service/coreService';

const fs = require('fs');
const path = require('path');

export function setUserSettings(config) {
    fs.writeFileSync(path.join(userDataPath, 'setting.json'), JSON.stringify(config));
}

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

export function getWorkspacePath() {
    return getUserSettings().workspacePath;
}

export function saveWorkspacePath(workspacePath) {
    const config = getUserSettings();
    config.workspacePath = workspacePath;
    setUserSettings(config);
}
