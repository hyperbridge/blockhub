import Node from '../../models/node'

const { authenticate } = require('@feathersjs/authentication').hooks
const Collection = require('../../models/collection').default
const Ajv = require('ajv')
const { validateSchema } = require('feathers-hooks-common')

const fillCollection = async function (collection): Promise<any> {
    collection.resources = await Node.query().where({
        fromCollectionId: collection.id,
        toProductId: 4,
        relationKey: 'resource'
    })

    return collection
}

const fillOne = function (options = {}): any {
    return async context => {
        context.data = await fillCollection(context.data)
        return context
    }
}

const fillAll = function (options = {}): any {
    return async context => {
        context.result.data = await Promise.all(context.result.data.map(collection => fillCollection(collection)))

        return context
    }
}

const create = function (options = {}): any {
    return async context => {
        const { app, data } = context

        console.log('Collection creation request: ', data)

        const { key, name, value, meta, owner } = context.data

        // Override the original data (so that people can't submit additional stuff)
        context.data = {
            key,
            name,
            value,
            meta,
            owner: {
                id: owner.id
            }
        }
console.log('bbb', context.data) 
        return context
    }
}


const validatePermission = function (options = {}): any {
    return async context => {
        const { app, data } = context

        const account = context.params.user

        const collection = await app.service('collections').get(data.id)
        const profile = await app.service('profiles').get(collection.ownerId)

        if (profile.accountId !== account.id) {
            throw new Error('Collection must be owned by a profile of authenticated account')
        }
console.log('sss', context)
context.id = Number(context.id)
context.data.value='sss'
        return context
    }
}

export const before = {
    all: [],
    find: [],
    get: [],
    create: [authenticate('jwt'), create(), validateSchema(Collection.jsonSchema, Ajv)],
    update: [authenticate('jwt'), validatePermission()],
    patch: [authenticate('jwt'), validatePermission()],
    remove: [authenticate('jwt'), validatePermission()]
}

export const after = {
    all: [],
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
