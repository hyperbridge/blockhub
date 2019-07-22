import { hooks } from '@feathersjs/authentication'
import { validateSchema } from 'feathers-hooks-common'
import * as Ajv from 'ajv'

import Node from '../../models/node'
import Collection from '../../models/collection'


const fillCollection = async function (collection): Promise<any> {
    collection.resources = await Node.query().where({
        fromCollectionId: collection.id,
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

        return context
    }
}

export const before = {
    all: [],
    find: [],
    get: [],
    // @ts-ignore
    create: [hooks.authenticate('jwt'), create(), validateSchema(Collection.jsonSchema, Ajv)],
    update: [hooks.authenticate('jwt'), validatePermission()],
    patch: [hooks.authenticate('jwt'), validatePermission()],
    remove: [hooks.authenticate('jwt'), validatePermission()]
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
