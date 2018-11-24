import Model from '../../models/profile'
import createService = require('feathers-objection')
import hooks = require('./hooks')

export default function (app) {
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

    app.use('profiles', createService(options))

    const service = app.service('profiles')

    service.hooks(hooks)
}