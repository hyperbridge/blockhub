import Model from '../../models/community'
import createService = require('feathers-objection')
import hooks = require('./hooks')

export default function(app) {
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
        allowedInsert: '[owner]',
        allowedEager: '[owner, discussions]',
        allowedUpsert: '[owner]'
    }

    app.use('/communities', createService(options))

    const service = app.service('/communities')

    service.hooks(hooks)
}
