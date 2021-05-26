const { app, BrowserWindow } = require('electron');
const fs = require('fs');
const os = require('os');
const storage = require('electron-json-storage');
function createWindow() {
    const win = new BrowserWindow({
        height: 800,
        width: 950,
        minHeight:800,
        minWidth:800,
        fullscreenable:false,
        fullscreen:false,
        autoHideMenuBar: true,
        resizable: false,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        },
        title: 'My App'
    });

    win.setTitle('BankGUI-ElectronJS');
    win.loadFile('index.html');
    win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
storage.setDataPath(os.tmpdir());
storage.set('foobar', { foo: 'bar' }, function(error) {
    if (error) throw error;
  });
  console.log(require('electron').app.getPath('userData'));
