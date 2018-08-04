const remoteApp = require('electron').remote.app;
const electron = require('electron');

export const userDataPath = remoteApp.getPath('userData');

export const appName = remoteApp.getName();

export const { dialog } = electron.remote;

export const { shell } = electron;
