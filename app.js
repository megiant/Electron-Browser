const electron = require('electron');
const path = require('path');
const url = require('url');


electron.app.on('ready', () => {
    window = new electron.BrowserWindow({
        width: 1250,
        height: 780,
        frame: false,
        titleBarStyle: 'hiddenInset'
    });
    window.loadURL(url.format({
        pathname: path.join(__dirname, 'app/index.html'),
        protocol: 'file:',
        slashes: true
    }));
})