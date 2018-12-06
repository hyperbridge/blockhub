const { authenticate } = require('@feathersjs/authentication').hooks
const populateProfile = require('../../hooks/populate-profile')

const create = function(options = {}) {
    return async context => {
        // // Throw an error if we didn't get a text
        if (!context.data.value) {
            throw new Error('A message must have value')
        }

        const profile = context.params.profile

        const value = context.data.value
            // Messages can't be longer than 400 characters
            .substring(0, 400)

        if (!profile.id) {
            throw new Error('A message must have a profile')
        }

        context.data = {
            value,
            ownerId: profile.id
        }

        return context
    }
}


export const before = {
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [create()],
    update: [],
    patch: [],
    remove: []
}

export const after = {
    all: [populateProfile()],
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