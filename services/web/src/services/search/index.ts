import createService = require('feathers-objection')
import hooks = require('./hooks')
import Product from 'src/models/product'
import { filterQuery } from '@feathersjs/commons'

const OPERATORS = [
    '$or',
    '$and',
    '$lt',
    '$lte',
    '$gt',
    '$gte',
    '$like',
    '$ilike',
    '$eager',
    '$joinEager',
    '$joinRelation',
    '$pick',
    '$modify',
    '$relation',
    '$recursive',
    '$allRecursive'
]

const OPERATORS_MAP = {
    $lt: '<',
    $lte: '<=',
    $gt: '>',
    $gte: '>=',
    $like: 'like',
    $ilike: 'ilike'
}

export default function(app) {
    const paginate = app.get('paginate')

    const options = {
        name: 'search',
        paginate: {
            default: 10,
            max: 25,
            ...paginate
        }
    }

    app.use('/search', {
        async find(params) {
            console.log('[service=/search, action=find]')

            console.log(params.query)

            const query = {}

            if (params.query.name) {
                query['name'] = {
                    $ilike: '%' + params.query.name.$eq + '%'
                }
            }

            const projects = await app.service('/projects').find({ query })

            return {
                projects
            }
        }
    })

    const service = app.service('/search')

    service.hooks(hooks)
}
