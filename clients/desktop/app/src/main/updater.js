import path from 'path'
import { autoUpdater } from 'electron-updater'
import * as DesktopBridge from '../framework/bridge'

// These are required for the updater to work
const electron = require('electron')
const autoUpdate = electron.autoUpdater

export let isProduction = false
export let isRestartingForUpdate = false
export let isCheckingForUpdate = false
export let isUpdateAvailable = false
export let isDownloadingUpdate = false
export let updateDownloaded = false
export let updateVersion = null
export let updateReleaseName = null
export let updateReleaseNotes = null
export let _cancelToken = null

export const checkForUpdates = () => {
    autoUpdater.checkForUpdates()
}

export const installAndRelaunch = () => {
    if (!isProduction || !updateDownloaded) {
        return
    }

    isRestartingForUpdate = true

    autoUpdater.autoInstallOnAppQuit = true // Leave this here just incase. Workaround for https://github.com/electron-userland/electron-builder/issues/3269

    let promise = autoUpdater.quitAndInstall(false, true)
    
    if (promise) {
        promise.catch((err) => {
            console.log('[BlockHub] Error during quitAndInstall', err)
        })
    }
    
}

export const init = (prod) => {
    isProduction = prod

    if (!isProduction) {
        autoUpdater.updateConfigPath = path.join(__dirname, '../../dev-app-update.yml')
    }

    autoUpdater.on('checking-for-update', () => {
        isCheckingForUpdate = true

        DesktopBridge.sendCommand('checkingForUpdate')
    })

    autoUpdater.on('update-not-available', () => {
        isCheckingForUpdate = false
        isUpdateAvailable = false

        DesktopBridge.sendCommand('updateNotAvailable')
    })

    autoUpdater.on('update-available', (updateInfo) => {
        isCheckingForUpdate = false
        isUpdateAvailable = true
        updateVersion = updateInfo.version
        updateReleaseName = updateInfo.releaseName
        updateReleaseNotes = updateInfo.releaseNotes

        DesktopBridge.sendCommand('updateAvailable', updateInfo)
    })

    autoUpdater.on('update-downloaded', (path) => {
        updateDownloaded = true
        _cancelToken = null;

        DesktopBridge.sendCommand('updateDownloaded', path)

        installAndRelaunch()
    })

    autoUpdater.on('error', (errorInfo) => {
        if (isDownloadingUpdate) {
            DesktopBridge.sendCommand('downloadError', errorInfo)
        } else {
            DesktopBridge.sendCommand('error', errorInfo)
        }

        isCheckingForUpdate = false
        isDownloadingUpdate = false
    })

    autoUpdater.on('download-progress', (progress) => {
        DesktopBridge.sendCommand('downloadProgress', progress)
    })

    // DesktopBridge.on('quitAndInstall', () => {
    //     // when receiving a quitAndInstall signal, quit and install the new version ;)
    //     autoUpdater.quitAndInstall()
    // })
}