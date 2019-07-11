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

export default function (app): any {
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
        async find (params) {
            console.log('[service=/search, action=find]')

            console.log(params.query)

            const query: any = {}

            if (params.query.name) {
                query.name = {
                    $ilike: `%${  params.query.name.$eq  }%`
                }
            }

            // TODO: support queries below
            // if (phrase.length) query.name = { '$eq': phrase }
            // if (selectedTags.length) query.tags = { '$contains': selectedTags.map(tag => tag.value) }
            // if (selectedGenres.length) query.genres = { '$contains': selectedGenres.map(tag => tag.name) }
            // // if (selectedLanguages.length) query['languageSupport'] = {
            // //     '$contains': { name: selectedLanguages.map(lang => lang.name) }
            // // }
            // if (price.min || price.max) query.price = { '$between': [price.min, price.max | 300] }
            // if (communitySize) query.communitySize = { '$between': [communitySize, 999999999] }
            // if (activeUsers) query.activeUsers = { '$between': [activeUsers, 999999999] }

            const projects = await app.service('/projects').find({ query })

            return {
                projects
            }
        }
    })

    const service = app.service('/search')

    service.hooks(hooks)
}
