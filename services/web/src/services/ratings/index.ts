import Model from '../../models/rating'
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
        allowedEager: '[owner]',
        allowedUpsert: '[owner]'
    }

    app.use('/ratings', createService(options))

    const service = app.service('/ratings')

    service.hooks(hooks)
}