import Model from '../../models/realm'
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
        }
    }

    app.use('/realms', createService(options))

    const service = app.service('/realms')

    service.hooks(hooks)
}