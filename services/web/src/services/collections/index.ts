import Model from '../../models/collection'
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

    const service = app.service('/collections')

    service.hooks(hooks)
}
