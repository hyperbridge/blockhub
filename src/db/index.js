import Loki from 'lokijs'

const data = require('./data')

let loki = null
let initCallback = null

export let account = null

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
        console.log('[BlockHub] Database loaded from IndexedDB')

        if (loki.getCollection('account')) {
            account = loki.getCollection('account')
            network.config = loki.getCollection('networkConfig')
            marketplace.config = loki.getCollection('marketplaceConfig')
            marketplace.products = loki.getCollection('marketplaceProducts')
            marketplace.assets = loki.getCollection('marketplaceAssets')
            funding.projects = loki.getCollection('fundingProjects')
        } else {
            let accountData = account.data
            let networkConfigData = network.config.data
            let marketplaceConfigData = marketplace.config.data
            let marketplaceProductsData = marketplace.products.data
            let marketplaceAssetsData = marketplace.assets.data
            let fundingProjectsData = funding.projects.data

            account.chain().remove()
            network.config.chain().remove()
            marketplace.config.chain().remove()
            marketplace.products.chain().remove()
            marketplace.assets.chain().remove()
            funding.projects.chain().remove()

            account = loki.addCollection('account')
            network.config = loki.addCollection('networkConfig')
            marketplace.config = loki.addCollection('marketplaceConfig')
            marketplace.products = loki.addCollection('marketplaceProducts')
            marketplace.assets = loki.addCollection('marketplaceAssets')
            funding.projects = loki.addCollection('fundingProjects')

            account.data = accountData
            network.config.data = networkConfigData
            marketplace.config.data = marketplaceConfigData
            marketplace.products.data = marketplaceProductsData
            marketplace.assets.data = marketplaceAssetsData
            funding.projects.data = fundingProjectsData

            account.ensureId()
            account.ensureAllIndexes(true)

            network.config.ensureId()
            network.config.ensureAllIndexes(true)

            marketplace.config.ensureId()
            marketplace.config.ensureAllIndexes(true)
        }

        initCallback()
    }

    const idbAdapter = (new Loki()).getIndexedAdapter()

    loki = new Loki('main.db', {
        adapter: new idbAdapter('main.db'),
        autoload: true,
        autoloadCallback: databaseInitialize,
        autosave: true,
        autosaveInterval: 4000
    })

    loadDefault()
}

export const instance = () => {
    return loki
}

export const loadDefault = () => {
    account = loki.addCollection('accountDefault')
    network.config = loki.addCollection('networkConfigDefault')
    marketplace.config = loki.addCollection('marketplaceConfigDefault')
    marketplace.products = loki.addCollection('marketplaceProductsDefault')
    marketplace.assets = loki.addCollection('marketplaceAssetsDefault')
    funding.projects = loki.addCollection('fundingProjectsDefault')

    data.marketplace.id = '1'

    try {
        updateCollection(network.config, data.network)
        updateCollection(marketplace.config, data.marketplace)
        updateCollection(marketplace.products, data.marketplace.products)
        updateCollection(marketplace.assets, data.marketplace.assets)
        updateCollection(funding.projects, data.funding.projects)
    }
    catch (e) {
        console.warn(e)
    }
}

export const save = () => {
    loki.saveDatabase(function (err) {
        if (err) {
            console.log(err)
        }
        else {
            console.log("[BlockHub] Database saved.")
        }
    })
}

export const clean = () => {
    account.chain().remove()
    network.config.chain().remove()
    marketplace.config.chain().remove()
    marketplace.products.chain().remove()
    marketplace.assets.chain().remove()
    funding.projects.chain().remove()
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