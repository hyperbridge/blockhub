import Model from '../../models/product'
import createService = require('feathers-objection')
import hooks = require('./hooks')

export default function(app) {
    const paginate = app.get('paginate')

    const options = {
        model: Model,
        id: 'id',
        name: 'products',
        paginate: {
            default: 10,
            max: 25,
            ...paginate
        },
        allowedEager: 'tags',
        allowedUpsert: 'tags'
        // namedEagerFilters: {
        //     all: function (builder) {
        //         builder.where('done', false)
        //     }
        // },
    }

    app.use('/products', createService(options))

    const service = app.service('/products')

    service.hooks(hooks)
}


// /api/games / owned
//     / api / games / recent
//     / api / game / { id } / stats
//     / api / game / { id } / achievements