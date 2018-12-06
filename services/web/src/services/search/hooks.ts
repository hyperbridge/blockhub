const { authenticate } = require('@feathersjs/authentication').hooks

const validatePermission = function(options = {}) {
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
    create: [],
    update: [validatePermission()],
    patch: [validatePermission()],
    remove: [validatePermission()]
}

export const after = {
    all: [],
    find: [],
    get: [],
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
