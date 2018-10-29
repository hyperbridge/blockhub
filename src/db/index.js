import Loki from 'lokijs'

const data = require('./data')

let loki = null
let initCallback = null
let initialized = false

export let application = {
    config: null
}

export let marketplace = {
    config: null,
    products: null,
    assets: null,
    posts: null
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

        if (loki.getCollection('applicationConfig')) {
            application.config = loki.getCollection('applicationConfig')
            marketplace.config = loki.getCollection('marketplaceConfig')
            marketplace.products = loki.getCollection('marketplaceProducts')
            marketplace.assets = loki.getCollection('marketplaceAssets')
            marketplace.posts = loki.getCollection('marketplacePosts')
            funding.projects = loki.getCollection('fundingProjects')
            funding.config = loki.getCollection('fundingConfig')
        } else {
            let applicationConfigData = application.config.data
            let marketplaceConfigData = marketplace.config.data
            let marketplaceProductsData = marketplace.products.data
            let marketplaceAssetsData = marketplace.assets.data
            let marketplacePostsData = marketplace.posts.data
            let fundingProjectsData = funding.projects.data
            let fundingConfigData = funding.config.data

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

        initCallback()
    })
}

export const instance = () => {
    return loki
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
    application.config.chain().remove()
    marketplace.config.chain().remove()
    marketplace.products.chain().remove()
    marketplace.assets.chain().remove()
    marketplace.posts.chain().remove()
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
