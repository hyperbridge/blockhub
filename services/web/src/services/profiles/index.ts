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

    app.use('/profile/:id/convert', {
        async update(id, data, params) {
            console.log(55, arguments)
            const { role } = data

            console.log(id, data, params)

            const result = await app.service('/profiles').get(id)

            result.name = 'sss'

            return result
        }
    })

    app.service('/profiles').hooks(hooks)
    //app.service('/profile/:id/convert').hooks(hooks)
}