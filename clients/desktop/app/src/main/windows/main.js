import path from 'path'
import express from 'express'
import { app, BrowserWindow, Menu, ipcMain, shell, webFrame } from 'electron'

const config = require('../../config')


export let window = null

export const initMenu = () => {
    let template = null

    if (process.platform === 'darwin') {
        const navigate = (path) => window.webContents.send('command', JSON.stringify({ key: 'navigate', data: path }))
        template = [
            {
                label: 'BlockHub',
                submenu: [
                    {
                        label: 'About BlockHub ' + app.getVersion(),
                        selector: 'orderFrontStandardAboutPanel:'
                    },
                    {
                        type: 'separator'
                    },
                    {
                        label: 'Preferences...',
                        accelerator: 'Command+,',
                        click() { navigate('/settings') }
                    },
                    {
                        type: 'separator'
                    },
                    {
                        type: 'separator'
                    },
                    {
                        label: 'Services',
                        submenu: []
                    },
                    {
                        type: 'separator'
                    },
                    {
                        label: 'Hide BlockHub',
                        accelerator: 'Command+H',
                        selector: 'hide:'
                    },
                    {
                        label: 'Hide Others',
                        accelerator: 'Command+Shift+H',
                        selector: 'hideOtherApplications:'
                    },
                    {
                        label: 'Show All',
                        selector: 'unhideAllApplications:'
                    },
                    {
                        type: 'separator'
                    },
                    {
                        label: 'Quit',
                        accelerator: 'Command+Q',
                        click() {
                            app.quit()
                        }
                    }
                ]
            },
            {
                label: 'Edit',
                submenu: [
                    {
                        label: 'Undo',
                        accelerator: 'Command+Z',
                        selector: 'undo:'
                    },
                    {
                        label: 'Redo',
                        accelerator: 'Shift+Command+Z',
                        selector: 'redo:'
                    },
                    {
                        type: 'separator'
                    },
                    {
                        label: 'Cut',
                        accelerator: 'Command+X',
                        selector: 'cut:'
                    },
                    {
                        label: 'Copy',
                        accelerator: 'Command+C',
                        selector: 'copy:'
                    },
                    {
                        label: 'Paste',
                        accelerator: 'Command+V',
                        selector: 'paste:'
                    },
                    {
                        label: 'Select All',
                        accelerator: 'Command+A',
                        selector: 'selectAll:'
                    }
                ]
            },
            {
                label: 'View',
                submenu:
                process.env.NODE_ENV === 'development'
                    ? [
                        {
                            label: 'Reload',
                            accelerator: 'Command+R',
                            click() {
                                window.webContents.reload()
                            }
                        },
                        {
                            label: 'Toggle Full Screen',
                            accelerator: 'Ctrl+Command+F',
                            click() {
                                Windows.main.setFullScreen(!Windows.main.isFullScreen())
                            }
                        },
                        {
                            label: 'Toggle Developer Tools',
                            accelerator: 'Alt+Command+I',
                            click() {
                                Windows.main.toggleDevTools()
                            }
                        }
                    ]
                    : [
                        {
                            label: 'Toggle Full Screen',
                            accelerator: 'Ctrl+Command+F',
                            click() {
                                Windows.main.setFullScreen(!Windows.main.isFullScreen())
                            }
                        }
                    ]
            },
            {
                label: 'Store',
                submenu: [
                    {
                        label: 'Overview',
                        accelerator: 'Command+1',
                        click() { navigate('/account') }
                    },
                    {
                        label: 'Search',
                        accelerator: 'Command+T,',
                        click() { navigate('/search') }
                    },
                    {
                        label: 'Crowdfunds',
                        click() { navigate('/projects') }
                    },
                    {
                        label: 'Realms',
                        click() { navigate('/realms') }
                    },
                    {
                        label: 'Curators',
                        click() { navigate('/curators') }
                    },
                    {
                        label: 'Collections',
                        click() { navigate('/collections') }
                    },
                    {
                        label: 'Items',
                        click() { navigate('/items') }
                    }
                ]
            },
            {
                label: 'Community',
                submenu: [
                    {
                        label: 'Overview',
                        accelerator: 'Command+2',
                        click() { navigate('/community') }
                    },
                    {
                        label: 'Forums',
                        click() { navigate('/community/forums') }
                    },
                ]
            },
            {
                label: 'Account',
                submenu: [
                    {
                        label: 'Overview',
                        accelerator: 'Command+3',
                        click() { navigate('/account') }
                    },
                    {
                        label: 'Stash',
                        click() { navigate('/stash') }
                    },
                    {
                        label: 'profiles',
                        click() { navigate('/account/profiles') }
                    },
                    {
                        label: 'Settings',
                        click() { navigate('/settings') }
                    },
                    {
                        label: 'Logs',
                        click() { navigate('/settings/activity') }
                    },
                    {
                        label: 'Apply to be Developer',
                        click() { navigate('/developer/apply') }
                    },
                ]
            },
            {
                label: 'Window',
                submenu: [
                    {
                        label: 'Minimize',
                        accelerator: 'Command+M',
                        selector: 'performMiniaturize:'
                    },
                    {
                        label: 'Close',
                        accelerator: 'Command+W',
                        selector: 'performClose:'
                    },
                    {
                        type: 'separator'
                    },
                    {
                        label: 'Bring All to Front',
                        selector: 'arrangeInFront:'
                    }
                ]
            },
            {
                label: 'Help',
                submenu: [
                    {
                        label: 'General Help',
                        click() { navigate('/help') }
                    },
                    {
                        label: 'Learn More',
                        click() {
                            shell.openExternal('https://hyperbridge.org/blockhub')
                        }
                    },
                    {
                        label: 'Documentation',
                        click() {
                            shell.openExternal(
                                'https://github.com/hyperbridge/blockhub/blob/master/README.md'
                            )
                        }
                    },
                    {
                        label: 'Community Discussions',
                        click() {
                            shell.openExternal(
                                'https://github.com/hyperbridge/blockhub/issues'
                            )
                        }
                    },
                    {
                        label: 'Search Issues',
                        click() {
                            shell.openExternal(
                                'https://github.com/hyperbridge/blockhub/issues'
                            )
                        }
                    }
                ]
            }
        ]

        Menu.setApplicationMenu(Menu.buildFromTemplate(template))
    } else {
        template = [
            {
                label: '&File',
                submenu: [
                    {
                        label: '&Open',
                        accelerator: 'Ctrl+O'
                    },
                    {
                        label: '&Close',
                        accelerator: 'Ctrl+W',
                        click() {
                            Windows.main.close()
                        }
                    }
                ]
            },
            {
                label: '&View',
                submenu:
                process.env.NODE_ENV === 'development'
                    ? [
                        {
                            label: '&Reload',
                            accelerator: 'Ctrl+R',
                            click() {
                                window.webContents.reload()
                            }
                        },
                        {
                            label: 'Toggle &Full Screen',
                            accelerator: 'F11',
                            click() {
                                Windows.main.setFullScreen(!Windows.main.isFullScreen())
                            }
                        },
                        {
                            label: 'Toggle &Developer Tools',
                            accelerator: 'Alt+Ctrl+I',
                            click() {
                                Windows.main.toggleDevTools()
                            }
                        }
                    ]
                    : [
                        {
                            label: 'Toggle &Full Screen',
                            accelerator: 'F11',
                            click() {
                                Windows.main.setFullScreen(!Windows.main.isFullScreen())
                            }
                        }
                    ]
            },
            {
                label: 'Help',
                submenu: [
                    {
                        label: 'Learn More',
                        click() {
                            shell.openExternal('https://hyperbridge.org/blockhub')
                        }
                    },
                    {
                        label: 'Documentation',
                        click() {
                            shell.openExternal(
                                'https://github.com/hyperbridge/blockhub/blob/master/README.md'
                            )
                        }
                    },
                    {
                        label: 'Community Discussions',
                        click() {
                            shell.openExternal(
                                'https://github.com/hyperbridge/blockhub/issues'
                            )
                        }
                    },
                    {
                        label: 'Search Issues',
                        click() {
                            shell.openExternal(
                                'https://github.com/hyperbridge/blockhub/issues'
                            )
                        }
                    }
                ]
            }
        ]

        Menu.setApplicationMenu(Menu.buildFromTemplate(template))
    }
}

export const isSafeURL = (url) => {
    return url.startsWith('http:') || url.startsWith('https:')
}

export const isBlockHubURL = (url) => {
    return url.startsWith('https://localhost') || url.startsWith('http://localhost') || url.startsWith('https://blockhub.gg')
}

export const ensureLinksOpenInBrowser = (event, url) => {
    if (isSafeURL(url) && !isBlockHubURL(url)) {
        event.preventDefault()
        shell.openExternal(url)
    }
}

export const init = (deeplinkUri, devMode, showTools) => {
    window = new BrowserWindow({
        width: 1440,
        height: 800,
        minWidth: 420,
        minHeight: 300,
        resizable: true,
        frame: false,
        show: false,
        icon: __dirname + 'static/Icon-512.icns',
        scrollBounce: true,
        backgroundColor: '#30314c',
        webPreferences: {
            preload: path.join(__dirname, '../preload.js'),
            zoomFactor: 0,
            experimentalFeatures: true,
            nodeIntegration: false,
            webSecurity: false
        }
    })


    window.webContents.session.webRequest.onBeforeSendHeaders({ urls: [] }, (details, callback) => {
        details.requestHeaders['Origin'] = 'https://blockhub.gg'
        details.requestHeaders['Referer'] = 'https://blockhub.gg'

        callback({ cancel: false, requestHeaders: details.requestHeaders })
    })

    window.webContents.on('will-navigate', ensureLinksOpenInBrowser)
    window.webContents.on('new-window', ensureLinksOpenInBrowser)


    window.webContents.once('did-finish-load', () => {
        initMenu()
        window.setMenu(null)
        window.setTitle('BlockHub')

        //if (config.IS_PRODUCTION) {
        window.show()
        window.focus()
        //}
    })

    if (devMode) {
        window.webContents.loadURL('http://localhost:8000/')
    } else {
        // const fs = require('fs')

        // const options = {
        //     key: fs.readFileSync(path.join(__dirname, './key.pem')),
        //     cert: fs.readFileSync(path.join(__dirname, './cert.pem')),
        //     requestCert: false,
        //     rejectUnauthorized: false
        // }

        // const https = require('https')
        //const http = require('http')

        // const app = express()

        // app.use('/static', express.static(path.join(__dirname, '/../../../web/static')))
        // app.get('/', function (req, res) {
        //     res.sendFile(path.join(__dirname + '/../../../web/index.html'))
        // })

        // //const server = https.createServer(options, app).listen(9999, () => console.log('App is running on port 9999'))
        // const server = app.listen(9999, () => console.log('App is running on port 9999'))

        // window.loadURL('http://localhost:9999/')
        
        //window.loadURL(`file://${__dirname}/../../../web/index.html`)

        window.loadURL('https://blockhub.gg/')
    }

    if (showTools) {
        window.webContents.openDevTools({ mode: "detach" })
    }

    // Emitted when the window is closed.
    window.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        window = null
    })


    // window.on('ready-to-show', function () {
    //     mainWindow.show()
    //     mainWindow.focus()
    // })
    // window.once('ready-to-show', () => {
    //     window.webContents.setZoomFactor(1.01);
    // })

    // window.webContents.on('context-menu', (e, props) => {
    //     const { x, y } = props

    //     Menu.buildFromTemplate([
    //         {
    //             label: 'Inspect element',
    //             click() {
    //                 window.inspectElement(x, y)
    //             }
    //         }
    //     ]).popup(window)
    // })

    window.on('app-command', (e, cmd) => {
        // Navigate the window back when the user hits their mouse back button
        if (cmd === 'browser-backward' && window.webContents.canGoBack()) {
            window.webContents.goBack()
        }
    })
}