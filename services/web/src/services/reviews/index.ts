import Model from '../../models/review'
import createService = require('feathers-objection')
import hooks = require('./hooks')

export default function (app): any {
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

    app.use('/reviews', createService(options))

    const service = app.service('/reviews')

    service.hooks(hooks)
}
