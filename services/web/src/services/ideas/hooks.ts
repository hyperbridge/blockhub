const { authenticate } = require('@feathersjs/authentication').hooks

const fillIdea = async function(idea, context) {

    return idea
}

const fillOne = function(options = {}) {
    return async context => {
        context.data = fillIdea(context.data, context)
        return context
    }
}

const fillAll = function(options = {}) {
    return async context => {
        context.result.data = await Promise.all(context.result.data.map((idea) => {
            return fillIdea(idea, context)
        }))

        return context
    }
}

const create = function(options = {}) {
    return async context => {
        const { app, data } = context

        console.log('Idea creation request: ', data)

        const account = context.params.user

        if (!account.id) {
            throw new Error('A idea must have a account')
        }

        const owner = await app.service('profiles').get(data.ownerId)

        if (owner.accountId !== account.id) {
            throw new Error('Idea must be owned by a profile of authenticated account')
        }

        const { name, value, meta } = context.data

        console.log(owner)

        // Override the original data (so that people can't submit additional stuff)
        context.data = {
            name,
            value,
            meta,
            //meta: context.data,
            owner: owner,
            community: {
                owner: owner,
                currentActiveUsers: 10,
                monthlyActiveUsers: 10,
                dailyActiveUsers: 10
            },
        }

        return context
    }
}


const validatePermission = function(options = {}) {
    return async context => {
        const { app, data } = context

        const account = context.params.user

        const idea = await app.service('ideas').get(data.id)
        const profile = await app.service('profiles').get(idea.ownerId)

        if (profile.accountId !== account.id) {
            throw new Error('Idea must be owned by a profile of authenticated account')
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