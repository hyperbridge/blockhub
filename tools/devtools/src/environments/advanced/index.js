const path = require('path')
const { BrowserWindow, shell } = require('electron')

// TODO:
// show login
// show register
// show account
// show settings
// show sidebar
// show 3 OS views
// etc

const initMenu = () => {

}

const init = (devMode, showTools) => {
    let window = new BrowserWindow({
        width: 1440,
        height: 800,
        minWidth: 420,
        minHeight: 300,
        resizable: true,
        frame: true,
        show: false,
        icon: __dirname + 'static/Icon-512.icns',
        scrollBounce: true,
        backgroundColor: '#000000',
        webPreferences: {
            preload: path.join(__dirname, '../../preload.js'),
            zoomFactor: 0,
            experimentalFeatures: true,
            nodeIntegration: false,
            webSecurity: false
        }
    })

    window.webContents.on('new-window', (event, uri) => {
        event.preventDefault()
        window.webContents.loadURL(uri)
    })

    window.webContents.once('did-finish-load', () => {
        initMenu()

        window.show()
        window.focus()
    })

    // Emitted when the window is closed.
    window.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        window = null
    })

    window.on('app-command', (e, cmd) => {
        // Navigate the window back when the user hits their mouse back button
        if (cmd === 'browser-backward' && window.webContents.canGoBack()) {
            window.webContents.goBack()
        }
    })

    return window
}

const loadDefaultUri = (window) => {
    window.webContents.loadURL('http://localhost:8081/')

    window.webContents.openDevTools()
}

module.exports = {
    init,
    loadDefaultUri
}
