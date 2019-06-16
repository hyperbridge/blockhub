const { authenticate } = require('@feathersjs/authentication').hooks

const fillDiscussion = async function(discussion, context) {

    return discussion
}

const fillOne = function(options = {}) {
    return async context => {
        context.data = fillDiscussion(context.data, context)
        return context
    }
}

const fillAll = function(options = {}) {
    return async context => {
        context.result.data = await Promise.all(context.result.data.map((discussion) => {
            return fillDiscussion(discussion, context)
        }))

        return context
    }
}

const create = function(options = {}) {
    return async context => {
        const { app, data } = context

        console.log('Discussion creation request: ', data)

        const account = context.params.user

        if (!account.id) {
            throw new Error('A discussion must have a account')
        }

        const community = await app.service('communities').get(data.community.id)

        if (!community) {
            throw new Error('A discussion must have a community')
        }

        const owner = await app.service('profiles').get(data.owner.id)

        if (owner.accountId !== account.id) {
            throw new Error('Discussion must be owned by a profile of authenticated account')
        }

        const { key, name, value, meta } = context.data

        console.log(owner)

        // Override the original data (so that people can't submit additional stuff)
        context.data = {
            key,
            name,
            value,
            meta
        }

        context.relations = {
            owner,
            community
        }

        return context
    }
}

const afterCreate = function(options = {}) {
    return async context => {
        const { app, data, relations, result } = context

        console.log('After discussion creation request: ', result, relations)

        const { owner, community } = relations

        result.community = community
        result.owner = owner

        await app.service('discussions').update(result.id, result, {
            relate: [
                'community',
                'owner'
            ]
        })

        return context
    }
}

const validatePermission = function(options = {}) {
    return async context => {
        const { app, data } = context

        const account = context.params.user

        // const discussion = await app.service('discussions').find({
        //     query: {
        //         'discussions.id': data.id,
        //         $eager: '[owner]',
        //         $joinEager: '[owner]'
        //     }
        // })
        // console.log(222, discussion)
        // if (discussion.owner.accountId !== account.id) {
        //     throw new Error('Discussion must be owned by a profile of authenticated account')
        // }

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
    create: [afterCreate()],
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