import fs from 'fs'
import path from 'path'
import Loki from 'lokijs'
import beautify from 'json-beautify'

const getData = () => {
    if (fs.existsSync('./src/db/data.json')) {
        return require('./data.json')
    } else {
        fs.writeFile('./src/db/data.json', '{}', 'utf8')

        return {}
    }
}

let data = getData()
let initialData = require('./data.initial.json')

let loki = null
let initCallback = null
let initialized = false

export let application = {
    config: null
}

export let marketplace = {
    config: null,
    products: null,
    assets: null
}

export let funding = {
    projects: null,
    config: null
}

export let setInitCallback = (cb) => {
    initCallback = cb
}

export const init = () => {
    console.log('[BlockHub] Initializing database...')
    
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

export const instance = () => {
    return loki
}

export const loadDefault = () => {
    application.config = loki.addCollection('applicationConfig')
    marketplace.config = loki.addCollection('marketplaceConfig')
    marketplace.products = loki.addCollection('marketplaceProducts')
    marketplace.assets = loki.addCollection('marketplaceAssets')
    funding.projects = loki.addCollection('fundingProjects')
    funding.config = loki.addCollection('fundingConfig')

    if (Object.keys(data).length === 0) {
        data = initialData
    }

    try {
        updateCollection(application.config, data.application)
        updateCollection(marketplace.config, data.marketplace)
        updateCollection(marketplace.products, data.marketplace[0].products)
        updateCollection(marketplace.assets, data.marketplace[0].assets)
        updateCollection(funding.config, data.funding)
        updateCollection(funding.projects, data.funding[0].projects)
    }
    catch (e) {
        console.warn(e)
    }

    application.config.ensureId()
    application.config.ensureAllIndexes(true)

    marketplace.config.ensureId()
    marketplace.config.ensureAllIndexes(true)

    funding.config.ensureId()
    funding.config.ensureAllIndexes(true)
}

export const save = () => {
    console.log('[BlockHub] Saving database...')

    if (!initialized) {
        console.log('[BlockHub] Cannot save, not initialized.')
        return
    }

    data.application = application.config.data
    data.marketplace = marketplace.config.data
    data.marketplace[0].products = marketplace.products.data
    data.marketplace[0].assets = marketplace.assets.data
    data.funding = funding.config.data
    data.funding[0].projects = funding.projects.data

    fs.writeFile('./src/db/data.json', beautify(data, null, 2, 100), 'utf8', (err) => {
        if (err) {
            return console.log('[BlockHub] Error saving database', err)
        }

        console.log('[BlockHub] Database saved.')
    })
}

export const clean = () => {
    application.config.chain().remove()
    marketplace.config.chain().remove()
    marketplace.products.chain().remove()
    marketplace.assets.chain().remove()
    funding.projects.chain().remove()
    funding.config.chain().remove()
}

const updateCollection = (collection, data) => {
    if (!data) return
    
    collection.data = data
  // let obj = collection.findObject({
  //   'id': data.id
  // })

  // if (obj) {
  //   collection.update(data)
  // } else {
  //   collection.insert(data)
  // }
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