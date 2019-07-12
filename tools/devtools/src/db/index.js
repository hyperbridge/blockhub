const fs = require('fs')
const path = require('path')
const JSON = require('circular-json')
const Loki = require('lokijs')
const beautify = require('json-beautify')
const Environments = require('../environments')
const config = require('../config')
const { app } = require('electron')

const getData = () => {
    if (fs.existsSync(path.resolve(__dirname, './data.json'))) {
        return require('./data.json')
    } else {
        fs.writeFile(path.resolve(__dirname, './data.json'), '{}', 'utf8')

        return {}
    }
}

let data = getData()
let initialData = require('./data.initial.json')
let loki = null
let initCallback = null
let initialized = false
let requests = null

initialData.requests = []

const application = {
    config: null
}

const setInitCallback = (cb) => {
    initCallback = cb
}

const init = () => {
    loki = new Loki(null, {
        autoload: false,
        autosave: false,
        autosaveInterval: 4000
    })

    loadDefault()

    initialized = true

    initCallback && initCallback()
}

const instance = () => {
    return loki
}

const loadDefault = () => {
    application.config = loki.addCollection('applicationConfig')
    requests = loki.addCollection('requests')

    if (Object.keys(data).length === 0) {
        data = initialData
    }

    try {
        updateCollection(application.config, data.application)
        updateCollection(requests, data.requests)
    } catch (e) {
        console.warn(e)
    }

    application.config.ensureId()
    application.config.ensureAllIndexes(true)

    requests.ensureId()
    requests.prepareFullDocIndex()
    // TODO: this may be needed
    //requests.ensureUniqueIndex('key')
}

const updateCollection = (collection, data) => {
    if (!data) return

    collection.data = data
}

const save = () => {
    //console.log('[Hyperbridge] Saving database...')

    if (!initialized) {
        console.log('[Hyperbridge] Cannot save, not initialized.')
        return
    }

    data.application = JSON.parse(JSON.stringify(application.config.data))
    data.requests = JSON.parse(JSON.stringify(requests.data))

    for (let env of data.application[0].environments) {
        delete env.main
        delete env.admin
    }

    for (let request of data.requests) {
        if (request.meta) request.meta.created = 0
        if (request.headers && request.headers) {
            delete request.headers['date']
            delete request.headers['x-kong-proxy-latency']
            delete request.headers['x-kong-upstream-latency']
        }
    }

    if (Environments.admin.window && Environments.admin.window.webContents) {
        Environments.admin.window.webContents.send('command', JSON.stringify({
            key: 'systemError',
            data: config.IS_PRODUCTION ? path.resolve(app.getPath('exe'), '../data.json') : path.resolve(__dirname, './data.json')
        }))
    }

    const appFilepath = config.IS_PRODUCTION ? path.resolve(__dirname, './data.json') : path.resolve(__dirname, './data.json')
    fs.truncate(appFilepath, 0, () => {
        fs.writeFile(appFilepath, beautify(data, null, 2, 100), 'utf8', (err) => {
            if (err) {
                return console.log('[Hyperbridge] Error saving database', err)
            }

            if (Environments.admin.window && Environments.admin.window.webContents) {
                Environments.admin.window.webContents.send('command', JSON.stringify({
                    key: 'systemError',
                    data: err
                }))
            }
            //console.log('[Hyperbridge] Database saved.')
        })
    })

    // Save a copy in the original source dir
    const apiServerFilepath = path.resolve(__dirname, config.IS_PRODUCTION ? '../../../../../../../../api-server/src/db/data.json' : '../../../api-server/src/db/data.json')
    fs.truncate(apiServerFilepath, 0, () => {
        fs.writeFile(apiServerFilepath, beautify(data, null, 2, 100), { encoding: 'utf8', flag: 'w' }, (err) => {
            if (err) {
                return console.log('[Hyperbridge] Error saving database', err)
            }

            //console.log('[Hyperbridge] Database saved.')
        })
    })
}

const clean = () => {
    application.config.chain().remove()
    requests.chain().remove()
}

const reload = () => {
    clean()

    loadDefault()
}

init()

module.exports = {
    requests,
    application,
    setInitCallback,
    init,
    instance,
    loadDefault,
    save,
    clean,
    reload
}
