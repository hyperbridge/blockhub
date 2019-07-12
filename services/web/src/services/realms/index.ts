import Model from '../../models/realm'
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
            relate: true
            // insertMissing: true
        },
        createUseUpsertGraph: true,
        allowedInsert: '[owner.^, tags.^]',
        allowedEager: '[owner.^, tags.^]',
        allowedUpsert: '[owner.^, tags.^]'
    }

    app.use('/realms', createService(options))

    const service = app.service('/realms')

    service.hooks(hooks)
}
