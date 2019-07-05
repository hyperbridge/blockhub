import Vote from '../../models/vote'
import Node from '../../models/node'

const { authenticate } = require('@feathersjs/authentication').hooks

const create = function(options = {}) {

    return async context => {
        const { app, data } = context
        
        console.log('Vote creation request: ', data)

        if (!data.accountId) {
            throw new Error('A vote must have a account')
        }

        const profile = await app.service('profiles').get(data.ownerId)
        

        if (profile.accountId !== data.accountId) {
            throw new Error('Vote must be owned by a profile of authenticated account')
        }

        const { key, name, value, meta,ratingId,objectType,objectId } = context.data


        // Override the original data (so that people can't submit additional stuff)
        context.data = {
            key,
            name,
            value,
            meta,
            ratingId
        }

        context.relations = {
            profile
        }
        context.params = {
            objectType ,
            objectId
        }

        return context
    }
}

const afterCreate = function(options = {}) {
    return async context => {

        const { app, data, relations, result,params } = context

        console.log('After Vote creation request: ', result, relations)

        const { profile } = relations

        let parent = new Node();
        parent.fromVoteId = result.id; 
        parent[`to${params.objectType}Id`] = params.objectId;
        parent.relationKey = `vote${params.objectType}`;
        
        console.log('toProductId',`to${params.objectType}Id`);
        console.log('parent',parent);

        await Node.query().insert(parent)

        return context
    }
}

const validatePermission = function(options = {}) {
    return async context => {
        const { app, data } = context
        console.log('data',data)

        // const vote = await app.service('votes').find({
        //     query: {
        //         'votes.id': data.ownerId,
        //         $eager: '[owner]',
        //         $joinEager: '[owner]'
        //     }
        // })

        // if (vote.owner.accountId !== data.accountId) {
        //     throw new Error('Vote must be owned by a profile of authenticated account')
        // }
        return context
    }
}

export const before = {
    all: [],
    find: [],
    get: [],
    create: [create()],
    update: [ validatePermission()],
    patch: [ validatePermission()],
    remove: [ validatePermission()]
}

export const after = {
    all: [],
    find: [],
    get: [],
    create: [afterCreate()],
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