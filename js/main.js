const { app, BrowserWindow } = require('electron');
function createWindow() {
    const win = new BrowserWindow({
        height: 800,
        width: 950,
        minHeight:800,
        minWidth:800,
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