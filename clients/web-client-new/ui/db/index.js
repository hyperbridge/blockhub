import Loki from 'lokijs'

const data = require('./data')

let loki = null
let initCallback = null
let initialized = false

export let store = {}

export const setInitCallback = cb => {
    initCallback = cb
}

export const instance = () => loki

export const updateCollection = (collection, data) => {
    const obj = collection.findObject({ 'id': data.id })

    if (obj && obj.$loki) {
        collection.update(data)
    } else {
        data.$loki = undefined
        collection.insert(data)
    }
}

export const loadDefault = () => {
    store = loki.addCollection('storeDefault')

    try {
        updateCollection(store, data)
    } catch (e) {
        console.warn(e)
    }
}

export const init = () => {
    const databaseInitialize = () => {
    }

    if (typeof indexedDB === 'undefined') {
        loki = new Loki(null, {
            autoload: false,
            autosave: false,
            autosaveInterval: 4000
        })
    } else {
        const idbAdapter = (new Loki()).getIndexedAdapter()

        loki = new Loki('main.db', {
            adapter: new idbAdapter('main.db'),
            autoload: false,
            // autoloadCallback: databaseInitialize,
            autosave: true,
            autosaveInterval: 4000
        })
    }

    // window.closeLokiDatabase = function() {
    //     loki.close()
    // }

    loadDefault()

    const loadDatabase = () => {
        console.log('[BlockHub] Database loaded')

        let configFound = loki.getCollection('store')

        // If not desktop mode, then wipe and reload (fresh data)
        if (process.client && !window.isElectron && window.BlockHub.getMode() !== 'local' && configFound) {
            console.log('[BlockHub] Production config detected. Clearing database.')

            // if (window.closeLokiDatabase) {
            //     window.closeLokiDatabase()
            // }

            const req = indexedDB.deleteDatabase('LokiCatalog')

            req.onsuccess = function onsuccess() {
                // alert("Deleted settings successfully. The page will now reload.")
                window.location = window.location.href.replace(window.location.hash, '')
            }
            req.onerror = function onerror() {
                // alert("ERR 301: Couldn't delete database")
            }
            req.onblocked = function onblocked() {
                // alert("ERR 302: Couldn't delete database due to the operation being blocked.")
            }

            configFound = false
        }

        if (configFound) {
            store = loki.getCollection('store')
        } else {
            const storeData = store.data

            store.chain().remove()

            store = loki.addCollection('store')

            store.data = storeData

            store.ensureId()
            store.ensureAllIndexes(true)
        }

        initialized = true

        initCallback && initCallback()

        loki.close()
    }

    if (process.client) {
        loki.loadDatabase({}, loadDatabase)
    } else {
        loadDatabase()
    }
}

export const save = () => {
    if (!process.client) return
    if (!initialized) return

    loki.loadDatabase({}, () => {
        loki.saveDatabase(err => {
            if (err) {
                console.log(err)
            }

            // console.log('[BlockHub] Database saved.')
        })

        loki.close()
    })
}

export const clean = () => {
    store.chain().remove()
}

export const reload = () => {
    clean()

    loadDefault()
}

export const toObject = () => ({})
