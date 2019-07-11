const { authenticate } = require('@feathersjs/authentication').hooks

const fillCommunity = async function (community, context): any {
    return community
}

const fillOne = function (options = {}): any {
    return async context => {
        context.data = fillCommunity(context.data, context)
        return context
    }
}

const fillAll = function (options = {}): any {
    return async context => {
        context.result.data = await Promise.all(context.result.data.map(community => fillCommunity(community, context)))

        return context
    }
}

const create = function (options = {}): any {
    return async context => {
        const { app, data } = context

        console.log('Community creation request: ', data)

        const { name, value, meta } = context.data

        // Override the original data (so that people can't submit additional stuff)
        context.data = {
            name,
            value,
            meta
        }

        return context
    }
}


const validatePermission = function (options = {}): any {
    return async context => {
        const { app, data } = context

        const account = context.params.user

        const community = await app.service('communities').get(data.id)
        const profile = await app.service('profiles').get(community.ownerId)

        if (profile.accountId !== account.id) {
            throw new Error('Community must be owned by a profile of authenticated account')
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
