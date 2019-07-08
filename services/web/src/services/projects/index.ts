import Model from '../../models/project'
import createService = require('feathers-objection')
import hooks = require('./hooks')

export default function(app) {
    const paginate = app.get('paginate')

    const options = {
        name: 'projects',
        model: Model,
        id: 'id',
        paginate: {
            default: 10,
            max: 25,
            ...paginate
        },
        allowedEager: '[tags,vote]',
        allowedUpsert: 'tags,'
        // namedEagerFilters: {
        //     all: function (builder) {
        //         builder.where('done', false)
        //     }
        // },
    }

    app.use('/projects', createService(options))

    const service = app.service('/projects')

    service.hooks(hooks)
}
