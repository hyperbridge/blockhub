const { authenticate } = require('@feathersjs/authentication').hooks
const populateProfile = require('../../hooks/populate-profile')

const create = function(options = {}) {
    return async context => {
        const { data } = context

        // // Throw an error if we didn't get a text
        // if (!data.text) {
        //     throw new Error('A message must have a text')
        // }

        const profile = context.params.profile

        const text = context.data.text
            // Messages can't be longer than 400 characters
            .substring(0, 400)

        if (!profile.id) {
            throw new Error('A message must have a profile')
        }

        // Override the original data (so that people can't submit additional stuff)
        context.data = {
            text,
            // Set the profile id
            profileId: profile.id,
            // Add the current date
            createdAt: new Date()
        }

        // Best practise, hooks should always return the context
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