const { authenticate } = require('@feathersjs/authentication').hooks

const fillRating = function (rating) {
    return rating
}

const fillOne = function (options = {}) {
    return async context => {
        context.data = fillRating(context.data)
        return context
    }
}

const fillAll = function (options = {}) {
    return async context => {
        context.result.data = context.result.data.map((rating) => {
            return fillRating(rating)
        })

        return context
    }
}

const create = function (options = {}) {
    return async context => {
        const { app, data } = context

        console.log('Rating creation request: ', data)

        const { name, value, meta } = context.data

        // Override the original data (so that people can't submit additional stuff)
        context.data = {
            name,
            value,
            meta,
            //meta: context.data,
            //ownerId: profile.id
        }

        return context
    }
}


const validatePermission = function (options = {}) {
    return async context => {
        const { app, data } = context

        const account = context.params.user

        const rating = await app.service('ratings').get(data.id)
        const profile = await app.service('profiles').get(rating.ownerId)

        if (profile.accountId !== account.id) {
            throw new Error('Rating must be owned by a profile of authenticated account')
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
    all: [],
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
