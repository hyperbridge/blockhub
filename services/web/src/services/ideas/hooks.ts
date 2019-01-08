const { authenticate } = require('@feathersjs/authentication').hooks

const beforeCreate = function(options = {}) {
    return async context => {
        return context
    }
}

const beforeUpdate = function(options = {}) {
    return async context => {
        console.log('[service=ideas, hook=beforeCreate]')

        let found = false

        for (let i in context.params.user.profiles) {
            const profile = context.params.user.profiles[i]

            if (context.data.ownerId === profile.id) {
                found = true
                break
            }
        }

        if (!found) {
            throw new Error('You dont have access to do that')
        }

        context.data.ownerId = context.params.ownerId

        return context
    }
}

const afterUpdate = function(options = {}) {
    return async context => {
        context.result = {
            ...context.result,
            ...context.data // why not send the whole thing?
        }

        return context
    }
}

const accessGate = function(options = {}) {
    return async context => {
        //console.log(context)
        const { app, method, result, params } = context
        const items = method === 'find' ? result.data : [result]
        let account = params.user

        if (!account.id) {
            throw new Error('You dont have access to do that')
        }

        await Promise.all(items.map(async item => {
            if (method === 'create') {
            }
            else if (method === 'update') {
            }

            if (!item) {
                throw new Error('Idea not found')
            }
        }))

        return context
    }
}

export const before = {
    all: [],
    find: [],
    get: [],
    create: [authenticate('jwt'), beforeCreate()],
    update: [authenticate('jwt'), beforeUpdate()],
    patch: [authenticate('jwt')],
    remove: [authenticate('jwt')]
}

export const after = {
    all: [],
    find: [],
    get: [],
    create: [accessGate(), afterUpdate()],
    update: [accessGate(), afterUpdate()],
    patch: [accessGate()],
    remove: [accessGate()]
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
