const { authenticate } = require('@feathersjs/authentication').hooks

const beforeCreate = function (options = {}): any {
    return async context => {
        context.data.accountId = context.params.user.id

        return context
    }
}

const beforeUpdate = function (options = {}): any {
    return async context => context

}

const afterUpdate = function (options = {}): any {
    return async context => {
        context.result = {
            name: context.data.name,
            avatar: context.data.avatar
        }

        return context
    }
}

const accessGate = function (options = {}): any {
    return async context => {
        // console.log(context)
        const { app, method, result, params } = context
        const items = method === 'find' ? result.data : [result]
        const account = params.user

        if (!account.id) {
            throw new Error('You dont have access to do that')
        }

        await Promise.all(items.map(async item => {
            if (method === 'create') {
            } else if (method === 'update') {
            }

            if (!item) {
                throw new Error('Badge not found')
            }

            if (item.accountId !== account.id) {
                throw new Error('You dont have access to do that')
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
    create: [accessGate()],
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
