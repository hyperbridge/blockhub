const { authenticate } = require('@feathersjs/authentication').hooks
const populateUser = require('../../hooks/populate-user')

const fillProject = function(project) {
    project.images = {
        "medium_tile": "https://cnet1.cbsistatic.com/img/zSoSnjjOVxk2Hl0HOsT-nrFaYsc=/970x0/2018/04/02/068c90d1-19d9-4703-a5be-9814b2c7f8bb/fortnite-stock-image-1.jpg"
    }

    project.funds = {
        "currency": "USD",
        "obtained": 7613,
        "goal": 8500
    }

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
        const { data } = context

        console.log('Project creation request: ', data)

        // Throw an error if we didn't get a text
        if (!data.name) {
            throw new Error('A project must have a name')
        }

        // The authenticated user
        const user = context.params.user

        // The actual project text
        const { name, description } = context.data

        if (!user.id) {
            throw new Error('A project must have a user')
        }

        // Override the original data (so that people can't submit additional stuff)
        context.data = {
            name,
            description,
            //meta: context.data,
            // Set the user id
            ownerId: user.id,
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
    all: [populateUser({ columnName: 'ownerId' })],
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


                        // : image = "project.images.medium_tile" 
                        // : description = "project.description" 
                        // : funds = "project.funds" 
                        // : parentName = "project.product && project.product.name" 
                        // : parentDeveloper = "project.product && project.product.developer" 
                        // : parentImage = "project.product && project.product.images.medium_tile"
                        // : id = "project.id"

