const { authenticate } = require('@feathersjs/authentication').hooks

const fillMessage = async function (message, context) {
    // Throw an error if we didn't get a text
    if (!message.value) {
        throw new Error('A message must have value')
    }

    return {
        ...message,
        value: message.value
            // Messages can't be longer than 1000 characters
            .substring(0, 1000)
    }
}

const fillOne = function (options = {}) {
    return async context => {
        context.data = fillMessage(context.data, context)
        return context
    }
}

const fillAll = function (options = {}) {
    return async context => {
        context.result.data = await Promise.all(context.result.data.map((message) => {
            return fillMessage(message, context)
        }))

        return context
    }
}

const create = function (options = {}) {
    return async context => {
        const { app, data } = context

        console.log('Message creation request: ', data)

        const account = context.params.user

        if (!account.id) {
            throw new Error('A message must have a account')
        }

        const discussion = await app.service('discussions').get(data.discussionId)

        if (data.discussionId !== discussion.id) {
            throw new Error('A message must have a discussion')
        }

        const owner = await app.service('profiles').get(data.ownerId)

        if (owner.accountId !== account.id) {
            throw new Error('Message must be owned by a profile of authenticated account')
        }

        const { name, value, meta } = context.data

        console.log(owner)

        // Override the original data (so that people can't submit additional stuff)
        context.data = {
            name,
            value,
            meta,
            //meta: context.data,
            owner: owner
        }

        return context
    }
}


const validatePermission = function (options = {}) {
    return async context => {
        const { app, data } = context

        const account = context.params.user

        const message = await app.service('messages').get(data.id)
        const profile = await app.service('profiles').get(message.ownerId)

        if (profile.accountId !== account.id) {
            throw new Error('Message must be owned by a profile of authenticated account')
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