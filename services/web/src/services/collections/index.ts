import Model from '../../models/collection'
import Node from '../../models/node'
import createService = require('feathers-objection')
import hooks = require('./hooks')

export default function (app): any {
    const paginate = app.get('paginate')

    const options = {
        model: Model,
        id: 'id',
        paginate: {
            default: 10,
            max: 25,
            ...paginate
        },
        upsertGraphOptions: {
            relate: true,
            unrelate: true,
            update: true,
            noDelete: ['owner']
        },
        createUseUpsertGraph: true,
        allowedInsert: '[owner]',
        allowedEager: '[owner, owner.^]',
        allowedUpsert: '[owner]'
    }

    app.use('/collections', createService(options))

    app.use('/collections/resource', {
        async create (data, params) {
            const node = await Node.query().insert({
                fromCollectionId: data.collectionId,
                [`to${data.resourceType}Id`]: data.resourceId,
                relationKey: 'resource',
                relationType: data.resourceType
            })

            return node
        },
        async remove (id, data, params) {
            await Node.query().where({
                fromCollectionId: data.collectionId,
                [`to${data.resourceType}Id`]: data.resourceId,
                relationKey: 'resource'
            }).delete()
        }
    })

    const service = app.service('/collections')

    service.hooks(hooks)
}
