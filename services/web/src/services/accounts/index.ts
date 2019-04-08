import Model from '../../models/account'
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

    app.use('/accounts', createService(options))

    // TODO
    app.use('/accounts/self', {
        async update(id, data, params) {
            const { role } = data

            // const result = await app.service('/accounts').get(id)

            // result.name = role

            // return result
        }
    })

    const service = app.service('accounts')

    service.hooks(hooks)
}