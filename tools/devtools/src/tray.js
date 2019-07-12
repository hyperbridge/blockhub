const path = require('path')
const { Tray } = require('electron')

const Positioner = require('electron-positioner')

export default function (trayWindow) {
    let icon = path.join(__dirname, './icons/logo-white.png')
    
    let trayIcon = new Tray(icon)
    trayIcon.setHighlightMode('always')
    trayIcon.setToolTip('BlockHub DevTools')
    
    trayIcon.on('click', (e, bounds) => {
        if (trayWindow.isVisible() ) {
            trayWindow.show()
            trayWindow.focus()
            //trayWindow.hide()
        } else {
            // let positioner = new Positioner(trayWindow)
            // // positioner.move('trayCenter', bounds)
            // positioner.move('trayBottomRight', bounds)
            trayWindow.show()
            trayWindow.focus()
        }
    })
}