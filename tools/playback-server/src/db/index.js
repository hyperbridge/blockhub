const fs = require('fs')
const path = require('path')
const Loki = require('lokijs')
const beautify = require('json-beautify')

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

let application = {
    config: null
}

let setInitCallback = (cb) => {
    initCallback = cb
}

let init = () => {
    const databaseInitialize = () => {
    }

    loki = new Loki(null, {
        autoload: false,
        autosave: false,
        autosaveInterval: 4000
    })

    loadDefault()

    initialized = true

    initCallback && initCallback()
}

let instance = () => {
    return loki
}

let loadDefault = () => {
    application.config = loki.addCollection('applicationConfig')
    requests = loki.addCollection('requests')

    if (Object.keys(data).length === 0) {
        data = initialData
    }

    try {
        updateCollection(application.config, data.application)
        updateCollection(requests, data.requests)
    }
    catch (e) {
        console.warn(e)
    }

    application.config.ensureId()
    application.config.ensureAllIndexes(true)

    requests.ensureId()
    // TODO: this may be needed
    //requests.ensureUniqueIndex('key')
}

const updateCollection = (collection, data) => {
    if (!data) return

    collection.data = data
}

let save = () => {
    //console.log('[BlockHub] Saving database...')

    if (!initialized) {
        console.log('[BlockHub] Cannot save, not initialized.')
        return
    }

    data.application = application.config.data
    data.requests = requests.data

    fs.writeFile(path.resolve(__dirname, './data.json'), beautify(data, null, 2, 100), 'utf8', (err) => {
        if (err) {
            return console.log('[BlockHub] Error saving database', err)
        }

        //console.log('[BlockHub] Database saved.')
    })
}

let clean = () => {
    application.config.chain().remove()
    requests.chain().remove()
}

let reload = () => {
    clean()

    loadDefault()
}

init()

module.exports = {
    init,
    requests,
    application,
    save
}
