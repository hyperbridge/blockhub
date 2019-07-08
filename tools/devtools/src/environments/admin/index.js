const path = require('path')
const url = require('url')
const { BrowserWindow }  = require('electron')

const init = () => {
    let window = new BrowserWindow({
        show: true,
        height: 700,
        width: 400,
        transparent: true,
        frame: false,
        resizable: false,
        webPreferences: {
            preload: path.join(__dirname, '../../preload.js'),
            nodeIntegration: true,
            webSecurity: false
        }
    })

    window.loadURL(url.format({
        pathname: path.join(__dirname, './index.html'),
        protocol: 'file',
        slashes: true
    }))

    window.on('blur', () => {
    })

    return window
}

module.exports = {
    init
}