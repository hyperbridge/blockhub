import Model from '../../models/message'
import createService = require('feathers-objection')
import hooks = require('./hooks')

export default async function(app) {
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
            relate: true
        },
        createUseUpsertGraph: true,
        allowedInsert: '[owner, discussion]',
        allowedEager: '[owner, discussion]',
        allowedUpsert: '[owner, discussion]'
    }

    app.use('/messages', createService(options))

    const service = app.service('/messages')

    service.hooks(hooks)
}
