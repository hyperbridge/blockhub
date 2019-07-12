const { authenticate } = require('@feathersjs/authentication').hooks

const fillTag = function (tag): any {
    return tag
}

const fillOne = function (options = {}): any {
    return async context => {
        context.data = fillTag(context.data)
        return context
    }
}

const fillAll = function (options = {}): any {
    return async context => {
        context.result.data = context.result.data.map(tag => fillTag(tag))

        return context
    }
}

const create = function (options = {}): any {
    return async context => {
        const { app, data } = context

        console.log('Tag creation request: ', data)

        // Throw an error if we didn't get a text
        if (!data.value) {
            throw new Error('A tag must have a value')
        }

        // The authenticated account
        const account = context.params.user

        if (!account.id) {
            throw new Error('Must be authenticated')
        }

        const { value, meta } = context.data

        // Override the original data (so that people can't submit additional stuff)
        context.data = {
            value,
            meta
        }

        // Best practise, hooks should always return the context
        return context
    }
}


const validatePermission = function (options = {}): any {
    return async context => {
        const { app, data } = context

        const account = context.params.user

        const tag = await app.service('tags').get(data.id)

        return context
    }
}

export const before = {
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [create()],
    update: [validatePermission()],
    patch: [validatePermission()],
    remove: [validatePermission()]
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
