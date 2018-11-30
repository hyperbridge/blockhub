import Model from '../../models/profile'
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
        allowedEager: 'account'
    }

    app.use('/profiles', createService(options))

    app.use('/profiles/:id/convert', {
        async update(id, data, params) {
            const { role } = data

            const result = await app.service('/profiles').get(id)

            result.name = role

            return result
        }
    })

    app.service('/profiles').hooks(hooks)
    app.service('/profiles/:id/convert').hooks(hooks)
}