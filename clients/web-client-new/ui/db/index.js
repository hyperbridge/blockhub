import Loki from 'lokijs'

const data = require('./data')

let loki = null
let initCallback = null
let initialized = false

export const application = {
    config: null
}

export const marketplace = {
    config: null,
    products: null,
    assets: null,
    posts: null
}

export const funding = {
    projects: null
}

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
    application.config = loki.addCollection('applicationConfigDefault')
    marketplace.config = loki.addCollection('marketplaceConfigDefault')
    marketplace.products = loki.addCollection('marketplaceProductsDefault')
    marketplace.assets = loki.addCollection('marketplaceAssetsDefault')
    marketplace.posts = loki.addCollection('marketplacePostsDefault')
    funding.config = loki.addCollection('fundingConfigDefault')
    funding.projects = loki.addCollection('fundingProjectsDefault')

    data.marketplace.id = '1'
    data.funding.id = '1'
    data.application.id = '1'

    try {
        updateCollection(application.config, data.application)
        updateCollection(marketplace.config, data.marketplace)
        updateCollection(marketplace.products, data.marketplace.products)
        updateCollection(marketplace.assets, data.marketplace.assets)
        updateCollection(marketplace.posts, data.marketplace.posts)
        updateCollection(funding.projects, data.funding.projects)
        updateCollection(funding.config, data.funding)
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

        let configFound = loki.getCollection('applicationConfig')

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
            application.config = loki.getCollection('applicationConfig')
            marketplace.config = loki.getCollection('marketplaceConfig')
            marketplace.products = loki.getCollection('marketplaceProducts')
            marketplace.assets = loki.getCollection('marketplaceAssets')
            marketplace.posts = loki.getCollection('marketplacePosts')
            funding.projects = loki.getCollection('fundingProjects')
            funding.config = loki.getCollection('fundingConfig')
        } else {
            const applicationConfigData = application.config.data
            const marketplaceConfigData = marketplace.config.data
            const marketplaceProductsData = marketplace.products.data
            const marketplaceAssetsData = marketplace.assets.data
            const marketplacePostsData = marketplace.posts.data
            const fundingProjectsData = funding.projects.data
            const fundingConfigData = funding.config.data

            application.config.chain().remove()
            marketplace.config.chain().remove()
            marketplace.products.chain().remove()
            marketplace.assets.chain().remove()
            marketplace.posts.chain().remove()
            funding.projects.chain().remove()
            funding.config.chain().remove()

            application.config = loki.addCollection('applicationConfig')
            marketplace.config = loki.addCollection('marketplaceConfig')
            marketplace.products = loki.addCollection('marketplaceProducts')
            marketplace.assets = loki.addCollection('marketplaceAssets')
            marketplace.posts = loki.addCollection('marketplacePosts')
            funding.config = loki.addCollection('fundingConfig')
            funding.projects = loki.addCollection('fundingProjects')

            application.config.data = applicationConfigData
            marketplace.config.data = marketplaceConfigData
            marketplace.products.data = marketplaceProductsData
            marketplace.assets.data = marketplaceAssetsData
            marketplace.posts.data = marketplacePostsData
            funding.projects.data = fundingProjectsData
            funding.config.data = fundingConfigData

            application.config.ensureId()
            application.config.ensureAllIndexes(true)
            marketplace.config.ensureId()
            marketplace.config.ensureAllIndexes(true)
            funding.config.ensureId()
            funding.config.ensureAllIndexes(true)
        }

        initialized = true

        initCallback && initCallback()
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

    loki.saveDatabase(err => {
        if (err) {
            console.log(err)
            return
        }

        console.log('[BlockHub] Database saved.')
    })
}

export const clean = () => {
    application.config.chain().remove()
    marketplace.config.chain().remove()
    marketplace.products.chain().remove()
    marketplace.assets.chain().remove()
    marketplace.posts.chain().remove()
    funding.projects.chain().remove()
    funding.config.chain().remove()
}

export const reload = () => {
    clean()

    loadDefault()
}

export const toObject = () => ({})
