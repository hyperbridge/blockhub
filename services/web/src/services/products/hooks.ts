const { authenticate } = require('@feathersjs/authentication').hooks
const populateProfile = require('../../hooks/populate-profile')

const composeItem = function(product) {
    // product.images = {
    //     "mediumTile": "https://cnet1.cbsistatic.com/img/zSoSnjjOVxk2Hl0HOsT-nrFaYsc=/970x0/2018/04/02/068c90d1-19d9-4703-a5be-9814b2c7f8bb/fortnite-stock-image-1.jpg"
    // }

    // product.funds = {
    //     "currency": "USD",
    //     "obtained": 0,
    //     "goal": 0
    // }

    return product
}

const fillOne = function(options = {}) {
    return async context => {
        context.data = composeItem(context.data)
        return context
    }
}

const fillAll = function(options = {}) {
    return async context => {
        context.result.data = context.result.data.map((product) => {
            return composeItem(product)
        })

        return context
    }
}

const create = function(options = {}) {
    return async context => {
        const { app, data } = context

        console.log('Product creation request: ', data)

        const account = context.params.user

        if (!account.id) {
            throw new Error('Account required')
        }

        if (data.ownerId) {
            throw new Error('Owner required')
        }

        const profile = await app.service('profiles').get(data.ownerId)

        if (profile.accountId !== account.id) {
            throw new Error('Product must be owned by a profile of authenticated account')
        }

        const { name, description, value, meta } = context.data

        // Override the original data (so that people can't submit additional stuff)
        context.data = {
            name,
            description,
            value,
            meta,
            //meta: context.data,
            ownerId: profile.id
        }

        return context
    }
}


const validatePermission = function(options = {}) {
    return async context => {
        const { app, data } = context

        const account = context.params.user

        const product = await app.service('products').get(data.id)
        const profile = await app.service('profiles').get(product.ownerId)

        if (profile.accountId !== account.id) {
            throw new Error('Product must be owned by a profile of authenticated account')
        }

        return context
    }
}

export const before = {
    all: [],
    find: [],
    get: [],
    create: [authenticate('jwt'), create()],
    update: [authenticate('jwt'), validatePermission()],
    patch: [authenticate('jwt'), validatePermission()],
    remove: [authenticate('jwt'), validatePermission()]
}

export const after = {
    all: [populateProfile({ columnName: 'ownerId' })],
    find: [fillAll()],
    get: [fillOne()],
    create: [],
    update: [],
    patch: [],
    remove: []
}

export const error = {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
}