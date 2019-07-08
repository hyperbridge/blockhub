const path = require('path')
const fs = require('fs')
const url = require('url')
const cors = require('cors')
const https = require('https')
const express = require('express')
const jetpack = require('fs-jetpack')
const filenamify = require('filenamify')
const { app, BrowserWindow, ipcMain, session, Menu } = require('electron')
const DB = require('./db')
const Environments = require('./environments')
const HttpsProxyAgent = require('./https-proxy-agent')
const config = require('./config')
const argv = require('minimist')(process.argv.slice(2))
//const Tray = require('./tray'

let currentEnv = null
let requestPositions = {}
let currentTestName = 'default'

const onException = (err) => {
    console.log('[BlockHub] Exception', err)

    if (!err) {
        return
    }

    // if (tray && tray.webContents) {
    //     tray.webContents.send('command', JSON.stringify({
    //         key: 'systemError',
    //         data: err.toString().slice(0, 150)
    //     }))
    // }
}

const initProcess = () => {
    process.on('uncaughtException', onException)
    process.on('unhandledRejection', onException)

    // Load default proxy
    replaceInFile(
        /"PROXY ([^:]*):([^"]*)"/gi,
        `"PROXY ${DB.application.config.data[0].proxy.host}:${DB.application.config.data[0].proxy.port}"`,
        path.resolve(__dirname, 'proxy.pac')
    )
}

const installDarwin = () => {
    // On Mac, only protocols that are listed in `Info.plist` can be set as the
    // default handler at runtime.
    app.setAsDefaultProtocolClient('blockhub')
}

const uninstallDarwin = () => { }

const installWindows = () => {
    // Define custom protocol handler. Deep linking works on packaged versions of the application!
    app.setAsDefaultProtocolClient('blockhub')
}

const uninstallWindows = () => { }

const sendCommand = (env, key, data) => {
    console.log('[BlockHub] Sending command: ', key)

    env.main.webContents.send('command', JSON.stringify({
        env: env.id,
        key,
        data
    }))
}

const sendAdminCommand = (env, key, data) => {
    console.log('[BlockHub] Sending admin command: ', key)

    env.admin.webContents.send('command', JSON.stringify({
        env: env.id,
        key,
        data
    }))
}

const parseHeaders = (arr) => {
    const result = {}

    arr.forEach((item) => {
        const [ key, value ] = item.split(': ')
        result[key] = value.trim()
    })

    return result
}

const loadEnvironment = (key, state = {}) => {
    console.log('[BlockHub] Loading env: ' + key)

    let env = null
    let main = null
    let isMainBeingReplaced = currentEnv && currentEnv.main.closed

    if (key === 'gsdg_front') {
    } else if (key === 'gsdg_intra') {
    } else {
        key = 'gsdg_front'
    }

    main = Environments[key].init(!config.IS_PRODUCTION, argv.tools)

    if (isMainBeingReplaced) {
        env = currentEnv

        env.main = main
    } else {
        // Load admin window
        let admin = Environments.admin.init(!config.IS_PRODUCTION, argv.tools)
        let id = Object.values(DB.application.config.data[0].environments).length

        env = {
            id,
            key,
            main,
            admin,
            uri: null,
            proxy: {
                host: DB.application.config.data[0].proxy.host,
                port: DB.application.config.data[0].proxy.port
            },
            resolution: 'desktop',
            expanded: true,
            authCallback: null,
            playbackMode: false,
            recordingMode: false,
            overrideCors: true,
            overrideHeaders: true,
            isAdminMoving: false,
            isFocusing: false,
            mainWindowWidth: 1200,
            mainWindowHeight: 800,
            adminWindowWidth: 400,
            adminWindowHeight: 700,
            mainWindowX: null,
            mainWindowY: null,
            adminWindowX: null,
            adminWindowY: null,
            ...state
        }

        env.admin.webContents.once('did-finish-load', () => {
            sendAdminCommand(env, 'init', {
                key,
                state: env
            })
        })

        env.admin.on('focus', () => {
            if (env.isFocusing) return

            currentEnv = env

            if (env.main) {
                //env.main.show()
                //env.main.focus()
            }
        })

        DB.application.config.data[0].environments[env.id] = currentEnv = env
        DB.save()

        console.log('[BlockHub] Environment created: ', env)
    }

    const repositionAdminWindow = () => {
        if (!env.admin) return

        let adminBounds = env.admin.getBounds()
        let mainBounds = env.main.getBounds()

        env.main.setPosition(adminBounds.x - mainBounds.width, adminBounds.y)
        env.main.show()

        env.adminWindowWidth = adminBounds.width
        env.adminWindowHeight = adminBounds.height
        env.adminWindowX = adminBounds.x
        env.adminWindowY = adminBounds.y

        DB.save()
    }

    const repositionMainWindow = () => {
        if (!env.admin) return

        if (env.isAdminMoving) {
            env.isAdminMoving = false
            return
        }

        let adminBounds = env.admin.getBounds()
        let mainBounds = env.main.getBounds()

        env.admin.setPosition(mainBounds.x + mainBounds.width, mainBounds.y)
        env.admin.show()

        env.mainWindowWidth = mainBounds.width
        env.mainWindowHeight = mainBounds.height
        env.mainWindowX = mainBounds.x
        env.mainWindowY = mainBounds.y

        DB.save()
    }

    env.main.on('move', repositionMainWindow)

    env.main.on('resize', repositionMainWindow)

    env.main.on('closed', () => {
        env.main.closed = true
    })

    env.main.on('focus', () => {
        if (env.isFocusing) return

        currentEnv = env

        env.isFocusing = true
        //env.admin.show()
        //env.admin.focus()

        setTimeout(() => env.isFocusing = false, 100)
    })

    env.main.webContents.on('login', (event, request, authInfo, callback) => {
        event.preventDefault()

        env.authCallback = callback

        sendAdminCommand(env, 'showAuth')

        env.admin.show()
    })

    env.main.webContents.on('did-finish-load', (e) => {
        env.uri = env.main.webContents.getURL()

        DB.save()
    })

    env.main.webContents.once('did-finish-load', () => {
        sendCommand(env, 'init')
    })

    env.main.webContents.on('context-menu', (e, props) => {
        const { x, y, editFlags } = props
		const hasText = props.selectionText.trim().length > 0
		const can = type => editFlags[`can${type}`] && hasText

        Menu.buildFromTemplate([
            {
                label: 'Back',
                click: () => {
                    env.main.webContents.executeJavaScript("window.history.back()")
                }
            },
            {
                label: 'Forward',
                click: () => {
                    env.main.webContents.executeJavaScript("window.history.forward()")
                }
            },
            {
                label: 'Reload',
                click: () => {
                    env.main.webContents.reload()
                }
            },
            {
                label: 'Hard Reload',
                role: 'forcereload'
            },
            {
				label: 'Cut',
				role: can('Cut') ? 'cut' : '',
				enabled: can('Cut'),
				visible: props.isEditable
            },
            {
                label: 'Copy',
				role: can('Copy') ? 'copy' : '',
				enabled: can('Copy'),
				visible: props.isEditable || hasText
            },
            {
                label: 'Paste',
				label: 'Paste',
				role: editFlags.canPaste ? 'paste' : '',
				enabled: editFlags.canPaste,
				visible: props.isEditable
            },
            {
                type: 'separator'
            },
            {
                label: 'Clear Cache',
                click: () => {
                    env.main.webContents.session.clearCache(() => {})
                }
            },
            {
                label: 'Clear Cookies',
                click: () => {
                    env.main.webContents.session.clearStorageData([], () => {})
                }
            },
            {
                label: 'Clear All Data',
                click: () => {
                    const fs = require('fs-extra')
                    const appName = app.getName()
                    const getAppPath = path.join(app.getPath('appData'), appName)

                    fs.unlink(getAppPath, () => {
                        // callback
                        alert("App data cleared. Relaunching.")
                        // You should relaunch the app after clearing the app settings.
                        app.relaunch()
                        app.exit()
                    })
                }
            },
            {
                type: 'separator'
            },
            {
                label: 'Inspect',
                click() {
                    env.main.inspectElement(x, y)
                }
            }
        ]).popup(env.main)
    })

    env.main.webContents.session.webRequest.onBeforeSendHeaders({ urls: [] }, (details, callback) => {
        if (env.overrideHeaders) {
            details.requestHeaders['User-Agent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36'

            if (details.url.indexOf('https://blockhub.gg') !== -1) {
                details.requestHeaders['Referer'] = 'https://blockhub.gg'

                console.log('[BlockHub] Referer override: blockhub.gg -> blockhub.gg')
            }

            callback({
                cancel: false,
                requestHeaders: details.requestHeaders
            })
        } else {
            callback({
                cancel: false
            })
        }
    })

    env.main.webContents.session.webRequest.onHeadersReceived({ urls: [] }, (details, callback) => {
        if (env.overrideCors && details.responseHeaders['Origin'] === 'blockhub.gg') {
            console.log('[BlockHub] CORS override for: blockhub.gg')

            callback({
                cancel: false,
                responseHeaders: {
                    ...details.responseHeaders,
                    'Access-Control-Allow-Origin': 'localhost:8081',
                    'Access-Control-Allow-Headers':  'withCredentials, Content-Type, Access-Control-Allow-Origin',
                    'Access-Control-Allow-Credentials': 'true'
                }
            })
        } else {
            callback({
                cancel: false
            })
        }
    })

    env.main.setSize(env.mainWindowWidth, env.mainWindowHeight)

    if (env.mainWindowX && env.mainWindowY) {
        env.main.setPosition(env.mainWindowX, env.mainWindowY)
    } else {
        env.main.center()
    }

    // Start the admin beside the window
    let bounds = env.main.getBounds()
    env.admin.setSize(env.adminWindowWidth, env.adminWindowHeight)

    if (env.adminWindowX && env.adminWindowY) {
        env.admin.setPosition(env.adminWindowX, env.adminWindowY)
    } else {
        env.admin.setPosition(bounds.x + bounds.width, bounds.y)
    }

    setAdminExpanded(env, env.expanded)
    repositionAdminWindow(env)

    if (!isMainBeingReplaced) {
        env.admin.on('move', () => {
            repositionAdminWindow(env)

            env.isAdminMoving = true
        })
    }

    env.main.webContents.session.setProxy({
        pacScript: path.normalize(__dirname + '/proxy.pac')
    }, () => {
        if (env.uri) {
            env.main.webContents.loadURL(env.uri)
        } else {
            Environments[key].loadDefaultUri(env.main)
        }
    })

    return env
}

const setTestName = (name) => {
    currentTestName = name
}

const setAdminExpanded = (env, expanded) => {
    if (expanded) {
        env.adminWindowWidth = 400
        env.adminWindowHeight = 700

        env.admin.setSize(env.adminWindowWidth, env.adminWindowHeight)
        env.admin.setContentSize(env.adminWindowWidth, env.adminWindowHeight)

        env.expanded = true
    } else {
        env.adminWindowWidth = 50
        env.adminWindowHeight = 700

        env.admin.setSize(env.adminWindowWidth, env.adminWindowHeight)
        env.admin.setContentSize(env.adminWindowWidth, env.adminWindowHeight)

        env.expanded = false
    }
}

const restoreEnvironment = (env) => {
    console.log('[BlockHub] Restoring environment')

    loadEnvironment(env.key, env)
}

const loadResolution = (env, resolution) => {
    if (resolution === 'mobile') {
        env.main.setSize(480, 800)
        env.main.setContentSize(480, 800)
    } else if (resolution === 'tablet') {
        env.main.setSize(1024, 768)
        env.main.setContentSize(1024, 768)
    } else if (resolution === 'desktop') {
        env.main.setSize(1200, 800)
        env.main.setContentSize(1200, 800)
    }

    let bounds = env.main.getBounds()
    env.admin.setPosition(bounds.x + bounds.width, bounds.y)

    env.resolution = resolution
}

const initPlaybackServer = () => {
    const app = express()
    app.use(cors({
        credentials: true
    }))

    const server = app.listen(9000, () => console.log('[BlockHub] Playback server is running on port 9000'))

    app.get('*', function (req, res) {
        const url = 'https://blockhub.gg' + req.url

        if (currentEnv.playbackMode && !currentEnv.recordingMode) {
            console.log('[BlockHub] API playback searching for saved request: ' + url)
            //console.log(DB.requests.data[0])

            const originalReq = DB.requests.findOne({
                url,
                testName: currentTestName
            })

            if (originalReq) {
                console.log('[BlockHub] Playing back request for: ' + url)
                //console.log(originalReq.data)

                if (originalReq.data) {
                    res.send(originalReq.data.body)
                } else {
                    res.send(originalReq.data)
                }

                return
            }
        }

        console.log('[BlockHub] Sending request for real content: ' + url)

        const agent = new HttpsProxyAgent({
            proxyHost: currentEnv.proxy.host,
            proxyPort: currentEnv.proxy.port
        })

        const options = {
            agent: agent,
            hostname: 'blockhub.gg',
            port: 443,
            path: req.url,
            method: req.method,
            headers: {
                ...req.headers,
                'host': 'blockhub.gg',
                'origin': 'https://blockhub.gg',
                'referer': 'https://blockhub.gg',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36'
            }
        }

        //console.log(options)

        const apiRequest = https.request(options, (response) => {
            let body = ""
            response.on('data', function (chunk) {
                body += chunk // accumlate each chunk
            })

            response.on('end', function () {
                if (currentEnv.recordingMode) {
                    const position = requestPositions[currentTestName]++
                    const key = position + currentTestName

                    const additionalData = {
                        key,
                        position,
                        testName: currentTestName,
                        url: response.url,
                        statusCode: response.statusCode,
                        headers: parseHeaders(response.headers),
                        data: { body }
                    }

                    let oldRequest = DB.requests.findOne({ key })

                    if (oldRequest) {
                        Object.assign(oldRequest, additionalData)
                        DB.requests.update(oldRequest)
                    } else {
                        DB.requests.insert(additionalData)
                    }
                }

                for (let x in response.headers['set-cookie']) {
                    response.headers['set-cookie'][x] = response.headers['set-cookie'][x].replace('domain=.golf.blockhub.co.jp;', '').replace('secure; httponly', '')
                }

                res.writeHeader(response.statusCode, {
                    ...response.headers,
                    'Access-Control-Allow-Origin': 'localhost:8081',
                    'Access-Control-Allow-Headers': 'withCredentials, Content-Type, Access-Control-Allow-Origin',
                    'Access-Control-Allow-Credentials': 'true'
                })

                res.end(body)
            })
        })

        apiRequest.on('error', (error) => {
            console.log('[BlockHub] Error API request: ', error)

            const position = requestPositions[currentTestName]++
            const key = position + currentTestName

            const additionalData = {
                key,
                position,
                testName: currentTestName,
                url: cmd.data.url,
                error
            }

            let oldRequest = DB.requests.findOne({ key })

            if (oldRequest) {
                Object.assign(oldRequest, additionalData)
                DB.requests.update(oldRequest)
            } else {
                DB.requests.insert(additionalData)
            }
        })

        apiRequest.end()
    })
}

const loadEnvironments = () => {
    if (Object.keys(DB.application.config.data[0].environments).length) {
        for (let env of DB.application.config.data[0].environments) {
            restoreEnvironment(env)
        }
    } else {
        loadEnvironment(argv.env)
    }
}

const initApp = () => {
    const powerSaveBlocker = require('electron').powerSaveBlocker
    powerSaveBlocker.start('prevent-app-suspension')

    app.commandLine.appendSwitch('page-visibility')
    app.commandLine.appendSwitch('disable-web-security')
    app.commandLine.appendSwitch('ignore-certificate-errors')
    app.commandLine.appendSwitch('disable-renderer-backgrounding')
    app.commandLine.appendSwitch('disable-background-timer-throttling')
    app.commandLine.appendSwitch('force-color-profile', 'srgb')

    if (process.platform === 'darwin') {
        installDarwin()
    }

    if (process.platform === 'win32') {
        installWindows()
    }

    app.setName('BlockHub')

    app.on('activate', function () {
        if (mainWindow && config.IS_PRODUCTION) {
            mainWindow.show()
        }

        if (process.platform === 'darwin') {
            // On OS X it's common to re-create a window in the app when the
            // dock icon is clicked and there are no other windows open.
            if (!mainWindow) {
                mainWindow.init()
            }
        }
    })

    app.on('window-all-closed', () => {
        console.log('[BlockHub] All windows closed. Quitting.')

        //trayIcon.destroy()
        app.quit()
    })

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
        BrowserWindow.addDevToolsExtension(path.resolve(__dirname, '../extensions/ljjemllljcmogpfapbkkighbhhppjdbg/5.0.0.4_0/'))

        session.defaultSession.webRequest.onBeforeRequest({}, (details, callback) => {
            if (currentEnv.playbackMode && details.url.indexOf('blockhub.gg') !== -1) {
                //&& details.url.indexOf('/premium/auth') === -1) {
                callback({ redirectURL: details.url.replace('https://blockhub.gg/', 'http://localhost:9000/') })
            } else if (details.url.indexOf('something') !== -1) {
                callback({ redirectURL: details.url.replace('something', 'something else') })
            } else {
                callback({ cancel: false })
            }
        })

        DB.init()

        loadEnvironments()
    })
}

const getEnv = (id) => {
    return DB.application.config.data[0].environments[id]
}

const replaceInFile = (regexpFind, replace, filename) => {
    let file = fs.createReadStream(filename, 'utf8')
    let data = ''

    file.on('data', function (chunk) {
        data += chunk
    })

    file.on('end', function () {
        fs.writeFile(filename, data.replace(regexpFind, replace), function(err) {
            if (err) {
                console.log(err)
            }
        })
    })
}

const filterAnnoyingRequest = (request) => {
    if (request.url.indexOf('images.json') !== -1) {
        return
    }

    return request
}

const saveRequest = (requestData, oldRequest) => {
    if (!filterAnnoyingRequest(requestData)) return

    let responseData = requestData.data
    let responseExtension = 'txt'

    if (requestData.meta) requestData.meta.created = 0
    if (requestData.headers && requestData.headers) {
        delete requestData.headers['date']
        delete requestData.headers['expires']
        delete requestData.headers['x-kong-proxy-latency']
        delete requestData.headers['x-kong-upstream-latency']
    }

    if (oldRequest) {
        Object.assign(oldRequest, requestData)
        DB.requests.update(oldRequest)
        requestData = { ...oldRequest }
    } else {
        DB.requests.insert(requestData)
    }

    DB.save()

    const parsedRequest = url.parse(requestData.url)
    const requestPath = requestData.url.replace(parsedRequest.protocol, '').replace(parsedRequest.host, '')
    const requestHostname = parsedRequest.hostname

    const dataFilename = currentTestName + '/' + requestHostname + '/' + filenamify(requestPath).replace(/!/gi, '/') + '-' + requestData.position + '.request.json'

    const basePath = path.resolve(__dirname, config.IS_PRODUCTION ? '../../../../../../../api-server/data' : '../../api-server/data')

    const dataPath = basePath + '/' + dataFilename

    delete requestData.testName
    delete requestData.key
    delete requestData.position
    delete requestData.data
    delete requestData.meta
    delete requestData.$loki

    jetpack.write(dataPath, requestData)


    if (requestData.headers['content-type'] === 'application/json') {
        try {
            responseData = JSON.parse(responseData.body)
            responseExtension = 'json'
        } catch (e) {

        }
    } else if (requestData.headers['content-type'].indexOf('text/html') !== -1) {
        responseData = responseData.body
        responseExtension = 'html'
    }

    if (responseData) {
        const responseFilename = dataFilename.replace('.request.json', '.response.' + responseExtension)
        const responsePath = basePath + '/' + responseFilename

        jetpack.write(responsePath, responseData)
    }
}


const initIPC = () => {
    ipcMain.on('command', (event, msg) => {
        console.log('[BlockHub] Received command from web', msg) // msg from web page

        const cmd = JSON.parse(msg)
        const env = getEnv(cmd.env)

        if (cmd.key === 'loadUri') {
            env.main.webContents.session.setProxy({
                pacScript: path.normalize(__dirname + '/proxy.pac')
            }, () => {
                env.main.webContents.loadURL(cmd.data)
                env.main.webContents.session.resolveProxy(cmd.data, (x) => {
                    console.log('[BlockHub] Proxy for request: ' + (x === 'DIRECT' ? 'None' : x))
                })
            })
        } else if (cmd.key === 'reloadUri') {
            env.main.webContents.loadURL(env.main.webContents.getURL())

            if (env.admin && env.admin.webContents) {
                sendAdminCommand(env, 'systemError', 'Reloading: ' + env.main.webContents.getURL())
            }
        } else if (cmd.key === 'setAdminExpanded') {
            setAdminExpanded(env, cmd.data)
        } else if (cmd.key === 'setTestName') {
            setTestName(cmd.data)
        } else if (cmd.key === 'interceptedRequest') {
            if (!requestPositions[currentTestName]) {
                requestPositions[currentTestName] = 0
            }

            if (currentEnv.recordingMode) {
                const position = requestPositions[currentTestName]++
                const key = position + currentTestName

                const additionalData = {
                    key,
                    position,
                    testName: currentTestName,
                    url: cmd.data.url,
                    statusCode: cmd.data.statusCode,
                    headers: parseHeaders(cmd.data.headers),
                    data: { body: cmd.data.body }
                }

                let oldRequest = DB.requests.findOne({ key })

                saveRequest(additionalData, oldRequest)
            }
        } else if (cmd.key === 'loadEnvironment') {
            loadEnvironment(cmd.data)
        } else if (cmd.key === 'loadResolution') {
            loadResolution(env, cmd.data)
        } else if (cmd.key === 'openConsole') {
            env.main.webContents.openDevTools({ mode: 'detach' })
        } else if (cmd.key === 'auth') {
            const { username, password } = cmd.data

            console.log('[BlockHub] Authenticating with ' + username)

            env.authCallback(username, password)
        } else if (cmd.key === 'overrideHeaders') {
            env.overrideHeaders = cmd.data
        } else if (cmd.key === 'overrideCors') {
            env.overrideCors = cmd.data
        } else if (cmd.key === 'setProxy') {
            env.proxy = cmd.data

            replaceInFile(
                /"PROXY ([^:]*):([^"]*)"/gi,
                `"PROXY ${env.proxy.host}:${env.proxy.port}"`,
                path.resolve(__dirname, 'proxy.pac')
            )
        } else if (cmd.key === 'apiRecording') {
            env.recordingMode = cmd.data

            if (env.recordingMode) {
                console.log('[BlockHub] Recording enabled')
            } else {
                console.log('[BlockHub] Recording disabled')
            }
        } else if (cmd.key === 'apiPlayback') {
            env.playbackMode = cmd.data

            if (env.playbackMode) {
                console.log('[BlockHub] Playback enabled')
            } else {
                console.log('[BlockHub] Playback disabled')
            }
        } else {
            //DesktopBridge.runCommand(cmd).then(() => {})
        }

        DB.save()
    })
}

const initData = () => {
    const dataPath = path.resolve(__dirname, config.IS_PRODUCTION ? '../../../../../../../api-server/data' : '../../api-server/data')

    jetpack.remove(dataPath)
}

const init = () => {
    initData()
    initPlaybackServer()
    initProcess()
    initIPC()
    initApp()
}

init()

module.exports = {
    init,
    onException,
    initProcess,
    installDarwin,
    uninstallDarwin,
    installWindows,
    uninstallWindows,
    sendCommand,
    sendAdminCommand,
    loadEnvironment,
    loadResolution,
    initPlaybackServer,
    initApp,
    getEnv,
    initIPC
}
