import Model from '../../models/log'
import createService = require('feathers-objection')
import hooks = require('./hooks')

export default function (app): any {
    const paginate = app.get('paginate')

    const options = {
        name: 'logs',
        model: Model,
        id: 'id',
        paginate: {
            default: 10,
            max: 25,
            ...paginate
        }
    }

    app.use('/logs', createService(options))

    const service = app.service('/logs')

    service.hooks(hooks)
}
