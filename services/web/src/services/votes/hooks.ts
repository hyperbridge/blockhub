import Vote from '../../models/vote'
import Node from '../../models/node'

const { authenticate } = require('@feathersjs/authentication').hooks

const create = function(options = {}) {

    return async context => {
        const { app, data } = context;
        
        console.log('Vote creation request: ', data);

        if (!data.ownerId) {
            throw new Error('A vote must have a profile');
        }

        const owner = await app.service('profiles').get(data.ownerId);

        const { key, name, value, meta, ratingId, objectType, objectId, ownerId } = context.data;

        // Override the original data (so that people can't submit additional stuff)
        context.data = {
            key,
            name,
            value,
            meta,
            ratingId,
        }

        context.relations = {
            owner,
        }
        context.params = {
            objectType ,
            objectId,
            ownerId,
        }

        return context
    }
}

const afterCreate = function(options = {}) {
    return async context => {

        const { app, data, result,params,relations } = context;
        const { owner } = relations;

        console.log('After vote creation request: ', result)

        let parentObject = new Node();
        parentObject.fromVoteId = result.id; 
        parentObject[`to${params.objectType}Id`] = params.objectId;
        parentObject.relationKey = 'vote';
        let object = await Node.query().insert(parentObject);

        console.log('Vote object check',object)

        let parentOwner = new Node();
        parentOwner.fromVoteId = result.id; 
        parentOwner.toProfileId = params.ownerId;
        parentOwner.relationKey = 'owner';
        object = await Node.query().insert(parentOwner);

        console.log('Vote owner check',object)

        return context
    }
}

const validatePermission = function(options = {}) {

    return async context => {
        const { app, data,id } = context;
        console.log('Vote Validateion request',data);

        const vote = await app.service('votes').find({
            query: {
                'votes.id': id,
                $eager: '[owner]',
            }
        })
        console.log("Validation check vote owner",vote.data[0].owner)
        console.log('vote.data[0].owner.id',vote.data[0].owner.id)
        console.log('profile.id',vote.data[0].owner.id)
        console.log('params.ownerId',data.ownerId)
        const profile = await app.service('profiles').get(vote.data[0].owner.id);
        if (profile.id !== data.ownerId) {
            throw new Error('Vote must be owned by a user with profile')
        }
        
        return context
    }
}

export const before = {
    all: [],
    find: [],
    get: [],
    create: [authenticate('jwt'), create()],
    update: [authenticate('jwt'),validatePermission()],
    patch: [authenticate('jwt'), validatePermission()],
    remove: [authenticate('jwt'), validatePermission()]
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