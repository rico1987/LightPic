import {
    userDataPath,
} from '@/service/coreService';

const fs = require('fs');
const path = require('path');

export function getScanSettings() {
    let config;
    if (fs.existsSync(path.join(userDataPath, 'scanSetting.json'))) {
        config = JSON.parse(fs.readFileSync(path.join(userDataPath, 'scanSetting.json'), 'utf-8'));
    } else {
        config = {
            settings: [],
        };
    }
    return config;
}

export function setScanSettings(config) {
    fs.writeFileSync(path.join(userDataPath, 'scanSetting.json'), JSON.stringify(config));
}
