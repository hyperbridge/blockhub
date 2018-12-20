import path from 'path'
import { app, BrowserWindow, Menu, ipcMain, shell, webFrame, session } from 'electron'

import * as DB from '../db'
import * as Security from '../framework/security'
import * as DesktopBridge from '../framework/bridge'
import * as PeerService from '../framework/peer-service'
import * as Wallet from '../framework/wallet'
import * as Windows from './windows'
import * as Updater from './updater'


const config = require('../config')


// Initial settings
// Disable peer relaying by default (until we're somewhat stable)
// Disable chaos monkey by default (until we're somewhat stable)
PeerService.config.RELAY = false

let argv = require('minimist')(process.argv.slice(2))

let deeplinkUri = null

export const onException = (err) => {
    console.log('[BlockHub] Exception', err)

    if (!Windows.main.window || !err) {
        return
    }

    DesktopBridge.sendCommand('systemError', err.toString().slice(0, 150))
}

export const initProcess = () => {
    process.on('uncaughtException', onException)
    process.on('unhandledRejection', onException)
}

export const installDarwin = () => {
    // On Mac, only protocols that are listed in `Info.plist` can be set as the
    // default handler at runtime.
    app.setAsDefaultProtocolClient('blockhub')

    // File handlers are defined in `Info.plist`.
}

export const uninstallDarwin = () => { }


export const installWindows = () => {
// Define custom protocol handler. Deep linking works on packaged versions of the application!
    app.setAsDefaultProtocolClient('blockhub')
}

export const uninstallWindows = () => { }


export const log = (msg, msg2, msg3) => {
    console.log(msg, msg2, msg3)

    if (Windows.main && Windows.main.webContents) {
        // Anything executed my be sanitized
        const windowMsg = Security.sanitize(msg)

        Windows.main.webContents.executeJavaScript(`console.log("${windowMsg}")`)
    }
}

export const initApp = () => {
    const powerSaveBlocker = require('electron').powerSaveBlocker
    powerSaveBlocker.start('prevent-app-suspension')

    app.commandLine.appendSwitch('page-visibility')
    app.commandLine.appendSwitch('disable-web-security')
    app.commandLine.appendSwitch('disable-renderer-backgrounding')
    app.commandLine.appendSwitch('disable-background-timer-throttling')
    app.commandLine.appendSwitch('force-color-profile', 'srgb')

    if (process.platform === 'darwin') {
        installDarwin()
    }

    if (process.platform === 'win32') {
        installWindows()
    }

    const isSecondInstance = app.makeSingleInstance(function (commandLine, workingDirectory) {
        log('[BlockHub] Two app instances found. Closing duplicate.')

        // Protocol handler for win32
        // argv: An array of the second instance’s (command line / deep linked) arguments
        if (process.platform == 'win32') {
            // Keep only command line / deep linked arguments
            deeplinkUri = commandLine.slice(1)
            log("[BlockHub] app.makeSingleInstance # " + deepLinkUri)
        }


        // Someone tried to run a second instance, we should focus our window.
        if (Windows.main) {
            if(Windows.main.isMinimized()) {
                Windows.main.restore()
            }

            Windows.main.focus()
        }
    })

    if (isSecondInstance) {
        app.quit()
    }

    app.on('window-all-closed', () => {
        // don't quit the app before the updater can do its thing
        if (!Updater.isRestartingForUpdate) {
            app.quit()
        }
    })

    app.on('activate', function () {
        if (Windows.main && config.IS_PRODUCTION) {
            Windows.main.show()
        }

        if (process.platform === 'darwin') {
            // On OS X it's common to re-create a window in the app when the
            // dock icon is clicked and there are no other windows open.
            if (!Windows.main) {
                Windows.main.init()
            }
        }
    })

    app.on('window-all-closed', () => {
        log('[BlockHub] All windows closed. Quitting.')
        app.quit()
    })

    // Mac only
    if (process.platform === 'darwin') {
        app.on('open-url', (event, uri) => {
            event.preventDefault()

            deeplinkUri = Security.sanitize(uri)

            log('[BlockHub] open-url # ' + deeplinkUri)

            // TODO: we need to validate all routing for potentially malicious behaviour
            if (deeplinkUri.startsWith('go')) {

            } else {
                const baseUrl = config.IS_PRODUCTION ? 'https://blockhub.gg/' : 'http://localhost:8000/' //'http://localhost:9999/' : 'http://localhost:8000/'
                Windows.main.webContents.loadURL(baseUrl + deeplinkUri)
            }
        })
    }

    if (process.platform === 'win32') {
        deeplinkUri = process.argv.slice(1)
    }

    app.setName('BlockHub')
    // SSL/TSL: this is the self signed certificate support
    app.on('certificate-error', (event, webContents, url, error, certificate, callback) => {
        // On certificate error we disable default behaviour (stop loading the page)
        // and we then say "it is all fine - true" to the callback
        console.log("Insecure cert: ", url)

        if (url.slice(0, 22) === 'https://localhost:9999') {
            event.preventDefault()
            callback(true)
        }
    })

    app.on('ready', () => {
        session.defaultSession.webRequest.onBeforeRequest({}, (details, callback) => {
            if (details.url.indexOf('7accc8730b0f99b5e7c0702ea89d1fa7c17bfe33') !== -1) {
                callback({ redirectURL: details.url.replace('7accc8730b0f99b5e7c0702ea89d1fa7c17bfe33', '57c9d07b416b5a2ea23d28247300e4af36329bdc') })
            } else {
                callback({ cancel: false })
            }
        })

        //DB.init()
        Windows.main.init(deeplinkUri, !config.IS_PRODUCTION, argv.tools)
        DesktopBridge.init(Windows.main.window.webContents).then(() => {})
        Updater.checkForUpdates()
    })
}

export const initWallet = () => {
    Wallet.ethereum.activeNetwork = config.IS_PRODUCTION ? 'ropsten' : 'local'
}

export const initUpdater = () => {
    // Just place this code at the entry point of your application:
    // const updater = require('electron-simple-updater');
    // updater.init('https://raw.githubusercontent.com/hyperbridge/blockhub-desktop-client/master/updates.json');
    Updater.init(config.IS_PRODUCTION)
}

export const initIPC = () => {
    ipcMain.on('command', (event, msg) => {
        log('[BlockHub] Received command from web', msg) // msg from web page

        const cmd = JSON.parse(msg)

        DesktopBridge.runCommand(cmd).then(() => {})
    })

}


export const init = () => {
    initProcess()
    initIPC()
    initWallet()
    initApp()
    initUpdater()
}

if (!global.electronInitialized) {
    init()

    global.electronInitialized = true
}
