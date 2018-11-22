import Model from '../../models/message'
const createService = require('feathers-objection')
const hooks = require('./hooks')

export default function(app) {
    const paginate = app.get('paginate')

    const options = {
        name: 'messages',
        model: Model,
        id: 'id',
        paginate: {
            default: 10,
            max: 25,
            ...paginate
        }
    }

    app.use('messages', createService(options))

    const service = app.service('messages')

    service.hooks(hooks)
    // // Set up our before hooks
    // service.before(hooks.before)

    // // Set up our after hooks
    // service.after(hooks.after)
}