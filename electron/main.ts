import { app, BrowserWindow, shell } from 'electron';
import path from 'path';
import { startExpressServer } from '../server';

const isDev = process.env.NODE_ENV === 'development';

function createWindow(): void {
  const win = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 900,
    minHeight: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
      contextIsolation: true,
      nodeIntegration: false,
    },
    title: 'Eduscope',
    autoHideMenuBar: true,
  });

  if (isDev) {
    win.loadURL('http://localhost:3000');
    win.webContents.openDevTools();
  } else {
    win.loadFile(path.join(__dirname, '../dist/index.html'));
  }

  // Ouvre les liens externes dans le navigateur système
  win.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });
}

app.whenReady().then(async () => {
  // Config database directory inside user data path
  process.env.APPDATA_PATH = app.getPath('userData');
  process.env.RUNNING_IN_ELECTRON = 'true';

  try {
    await startExpressServer(3000);
    console.log('Express local backend started successfully inside Electron.');
  } catch (err) {
    console.error('Failed to start Express backend inside Electron:', err);
  }

  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
