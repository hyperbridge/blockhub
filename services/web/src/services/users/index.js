import Model from '../../models/user'
const createService = require('feathers-objection')
const hooks = require('./hooks')

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

    app.use('users', createService(options))

    const service = app.service('users')

    service.hooks(hooks)
    // // Set up our before hooks
    // service.before(hooks.before)

    // // Set up our after hooks
    // service.after(hooks.after)
}