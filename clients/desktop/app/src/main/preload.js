const { ipcRenderer } = require('electron')

function init() {
    // add global variables to your web page
    window.isElectron = true
    window.desktopBridge = ipcRenderer
    window.specialRequire = require
    delete window.require
    delete window.exports
    delete window.module

    // document.addEventListener('DOMContentLoaded', function() {
    //     window.desktopBridge.send('command', JSON.stringify({
    //         key: 'ready'
    //     }))
    // });
}

init()