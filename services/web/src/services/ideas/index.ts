import Model from '../../models/idea'
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
            // insertMissing: true
        },
        createUseUpsertGraph: true,
        allowedInsert: '[owner.^, tags.^, community.[owner], rating.^]',
        allowedEager: '[owner.^, tags.^, community.[owner], rating.^]',
        allowedUpsert: '[owner.^, tags.^, community.[owner], rating.^]'
    }

    // app.use('/ideas', {
    //     topGameIdeas() {
    //         return [
    //             { something: 1 }
    //         ]
    //     }
    // })

    app.use('/ideas', createService(options))


    const service = app.service('/ideas')

    service.hooks(hooks)
}