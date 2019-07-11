import { DiscussionType } from '../../models/discussion'

const { authenticate } = require('@feathersjs/authentication').hooks

const fillMessage = async function (message, context): Promise<any> {
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

const fillOne = function (options = {}): any {
    return async context => {
        context.data = fillMessage(context.data, context)
        return context
    }
}

const fillAll = function (options = {}): any {
    return async context => {
        context.result.data = await Promise.all(context.result.data.map(message => fillMessage(message, context)))

        return context
    }
}

const validageChatMessage = function (options = {}): any {
    return async context => {
        const { app, data } = context

        if (!data.discussionId) throw new Error('You must provice discussionId')
        if (!data.ownerId) throw new Error('You must provice ownerId')

        const discussion = await app.service('discussions').get(data.discussionId)

        if (discussion.type != DiscussionType.Chat && discussion.type != DiscussionType.Both) {
            throw new Error('You can only submit data to chat discussions')
        }

        if (data.value.length == 0) throw new Error('Message should contain somthing')
    }
}

const create = function (options = {}): any {
    return async context => {
        const { app, data } = context
        console.log('Message creation request: ', data)

        const account = context.params.user

        if (!account.id) {
            throw new Error('A message must have a account')
        }

        const { name, value, meta } = context.data

        const owner = await app.service('profiles').get(data.ownerId)

        if (owner.accountId !== account.id) {
            throw new Error('Message must be owned by a profile of authenticated account')
        }

        // Override the original data (so that people can't submit additional stuff)
        context.data = {
            name,
            value,
            meta,
            ownerId: owner.id
        }

        return context
    }
}

const publishMessage = function (options = {}): any {
    return async context => {
        const { app, method, result, params } = context

        const messages = method === 'find' ? result.data : [result]

        await Promise.all(messages.map(async message => {
            const user = await app.service('profiles').get(message.ownerId, params)

            message.owner = user
        }))

        return context
    }
}


const validatePermission = function (options = {}): any {
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
    create: [authenticate('jwt'), validageChatMessage(), create()],
    update: [authenticate('jwt'), validatePermission(), validageChatMessage()],
    patch: [authenticate('jwt'), validatePermission(), validageChatMessage()],
    remove: [authenticate('jwt'), validatePermission(), validageChatMessage()]
}

export const after = {
    all: [],
    find: [fillAll(), publishMessage()],
    get: [fillOne()],
    create: [publishMessage()],
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
