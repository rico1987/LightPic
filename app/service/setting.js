import {
    userDataPath,
} from '@/service/coreService';

const fs = require('fs');
const path = require('path');

export function getUserSettings() {
    let config;
    if (fs.existsSync(path.join(userDataPath, 'setting.json'))) {
        config = JSON.parse(fs.readFileSync(path.join(userDataPath, 'setting.json'), 'utf-8'));
    } else {
        config = {
            workspacePath: '',
        };
    }
    return config;
}

export function setUserSettings(config) {
    fs.writeFileSync(path.join(userDataPath, 'setting.json'), JSON.stringify(config));
}
