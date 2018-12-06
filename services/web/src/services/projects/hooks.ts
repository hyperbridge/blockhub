const { authenticate } = require('@feathersjs/authentication').hooks
const populateProfile = require('../../hooks/populate-profile')

const fillProject = function(project) {
    // project.images = {
    //     "mediumTile": "https://cnet1.cbsistatic.com/img/zSoSnjjOVxk2Hl0HOsT-nrFaYsc=/970x0/2018/04/02/068c90d1-19d9-4703-a5be-9814b2c7f8bb/fortnite-stock-image-1.jpg"
    // }

    // project.funds = {
    //     "currency": "USD",
    //     "obtained": 0,
    //     "goal": 0
    // }

    return project
}

const fillOne = function(options = {}) {
    return async context => {
        context.data = fillProject(context.data)
        return context
    }
}

const fillAll = function(options = {}) {
    return async context => {
        context.result.data = context.result.data.map((project) => {
            return fillProject(project)
        })

        return context
    }
}

const create = function(options = {}) {
    return async context => {
        const { app, data } = context

        console.log('Project creation request: ', data)

        const account = context.params.user

        if (!account.id) {
            throw new Error('A project must have a account')
        }

        const profile = await app.service('profiles').get(data.ownerId)

        if (profile.accountId !== account.id) {
            throw new Error('Project must be owned by a profile of authenticated account')
        }

        const { name, description, value, meta } = context.data

        // Override the original data (so that people can't submit additional stuff)
        context.data = {
            name,
            description,
            value,
            meta,
            //meta: context.data,
            ownerId: profile.id
        }

        return context
    }
}


const validatePermission = function(options = {}) {
    return async context => {
        const { app, data } = context

        const account = context.params.user

        const project = await app.service('projects').get(data.id)
        const profile = await app.service('profiles').get(project.ownerId)

        if (profile.accountId !== account.id) {
            throw new Error('Project must be owned by a profile of authenticated account')
        }

        return context
    }
}

export const before = {
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [create()],
    update: [validatePermission()],
    patch: [validatePermission()],
    remove: [validatePermission()]
}

export const after = {
    all: [populateProfile({ columnName: 'ownerId' })],
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


                        // : image = "project.images.mediumTile" 
                        // : description = "project.description" 
                        // : funds = "project.funds" 
                        // : parentName = "project.product && project.product.name" 
                        // : parentDeveloper = "project.product && project.product.developer" 
                        // : parentImage = "project.product && project.product.images.mediumTile"
                        // : id = "project.id"

