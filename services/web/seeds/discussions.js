const Objection = require('objection')
const Discussion = require('../build/src/models/discussion').default
const discussions = require('./data/discussions')

exports.seed = function (knex) {
    return Discussion
        .query(knex)
        .upsertGraph(discussions)
}
