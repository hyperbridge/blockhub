import Model from '../../models/product'
import createService = require('feathers-objection')
import hooks = require('./hooks')

export default function (app): any {
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
        allowedEager: '[tags.^,internalTags.^,vote.^]',
        allowedUpsert: '[tags]'
        // namedEagerFilters: {
        //     all: function (builder) {
        //         builder.where('done', false)
        //     }
        // },
    }

    app.use('/products', createService(options))

    const service = app.service('/products')

    // app.use('/products/vote/check', {
    //     async find(params) {
    //         const { objectId } = params.query;

    //         console.log('[service=/products/vote/check, action=find]')
    //         console.log(params)


    //         const object = await app.service('products').find({
    //             query: {
    //                 'products.id': objectId,
    //                 $eager: '[vote]',
    //             }
    //         })

    //         console.log(object.data[0])
    //         return
    //     }
    // })

    service.hooks(hooks)
}


// /api/games / owned
//     / api / games / recent
//     / api / game / { id } / stats
//     / api / game / { id } / achievements
