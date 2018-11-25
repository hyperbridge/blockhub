const { authenticate } = require('@feathersjs/authentication').hooks
const { allowNull, wildcardsInLike } = require('../../hooks')

export const before = {
    all: [],
    find: [authenticate('jwt'), allowNull(), wildcardsInLike()],
    get: [authenticate('jwt')],
    create: [authenticate('jwt')],
    update: [authenticate('jwt')],
    patch: [authenticate('jwt')],
    remove: [authenticate('jwt')]
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
