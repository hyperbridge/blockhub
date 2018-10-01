import Loki from 'lokijs'

const data = require('./data')

let loki = null
let initCallback = null
let initialized = false

export let network = {
    config: null
}

export let marketplace = {
    config: null,
    products: null,
    assets: null
}

export let funding = {
    projects: null
}

export let setInitCallback = (cb) => {
    initCallback = cb
}

export const init = () => {

    const databaseInitialize = () => {
    }

    const idbAdapter = (new Loki()).getIndexedAdapter()

    loki = window.loki = new Loki('main.db', {
        adapter: new idbAdapter('main.db'),
        autoload: false,
        //autoloadCallback: databaseInitialize,
        autosave: true,
        autosaveInterval: 4000
    })

    window.closeLokiDatabase = function() {
        loki.close()
    }

    loadDefault()

    loki.loadDatabase({}, (result) => {
        console.log('[BlockHub] Database loaded from IndexedDB')

        if (loki.getCollection('networkConfig')) {
            network.config = loki.getCollection('networkConfig')
            marketplace.config = loki.getCollection('marketplaceConfig')
            marketplace.products = loki.getCollection('marketplaceProducts')
            marketplace.assets = loki.getCollection('marketplaceAssets')
            funding.projects = loki.getCollection('fundingProjects')
            funding.config = loki.getCollection('fundingConfig')
        } else {
            let networkConfigData = network.config.data
            let marketplaceConfigData = marketplace.config.data
            let marketplaceProductsData = marketplace.products.data
            let marketplaceAssetsData = marketplace.assets.data
            let fundingProjectsData = funding.projects.data
            let fundingConfigData = funding.config.data

            network.config.chain().remove()
            marketplace.config.chain().remove()
            marketplace.products.chain().remove()
            marketplace.assets.chain().remove()
            funding.projects.chain().remove()
            funding.config.chain().remove()

            network.config = loki.addCollection('networkConfig')
            marketplace.config = loki.addCollection('marketplaceConfig')
            marketplace.products = loki.addCollection('marketplaceProducts')
            marketplace.assets = loki.addCollection('marketplaceAssets')
            funding.config = loki.addCollection('fundingConfig')
            funding.projects = loki.addCollection('fundingProjects')

            network.config.data = networkConfigData
            marketplace.config.data = marketplaceConfigData
            marketplace.products.data = marketplaceProductsData
            marketplace.assets.data = marketplaceAssetsData
            funding.projects.data = fundingProjectsData
            funding.config.data = fundingConfigData
            
            network.config.ensureId()
            network.config.ensureAllIndexes(true)

            marketplace.config.ensureId()
            marketplace.config.ensureAllIndexes(true)

            funding.config.ensureId()
            funding.config.ensureAllIndexes(true)
        }

        initialized = true

        initCallback()
    })
}

export const instance = () => {
    return loki
}

export const loadDefault = () => {
    network.config = loki.addCollection('networkConfigDefault')
    marketplace.config = loki.addCollection('marketplaceConfigDefault')
    marketplace.products = loki.addCollection('marketplaceProductsDefault')
    marketplace.assets = loki.addCollection('marketplaceAssetsDefault')
    funding.config = loki.addCollection('fundingConfigDefault')
    funding.projects = loki.addCollection('fundingProjectsDefault')

    data.marketplace.id = '1'
    data.funding.id = '1'
    data.network.id = '1'

    try {
        updateCollection(network.config, data.network)
        updateCollection(marketplace.config, data.marketplace)
        updateCollection(marketplace.products, data.marketplace.products)
        updateCollection(marketplace.assets, data.marketplace.assets)
        updateCollection(funding.projects, data.funding.projects)
        updateCollection(funding.config, data.funding)
    }
    catch (e) {
        console.warn(e)
    }
}

export const save = () => {
    if (!initialized) {
        return
    }

    loki.saveDatabase(function (err) {
        if (err) {
            console.log(err)
            return
        }
        
        console.log("[BlockHub] Database saved.")
    })
}

export const clean = () => {
    network.config.chain().remove()
    marketplace.config.chain().remove()
    marketplace.products.chain().remove()
    marketplace.assets.chain().remove()
    funding.projects.chain().remove()
    funding.config.chain().remove()
}

const updateCollection = (collection, data) => {
    let obj = collection.findObject({ 'id': data.id })

    if (obj) {
        collection.update(data)
    } else {
        collection.insert(data)
    }
}

export const reload = () => {
    clean()

    loadDefault()
}

export const toObject = () => {
    return {
    }
}

init()