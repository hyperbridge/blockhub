const Objection = require('objection')
const Collection = require('../build/src/models/collection').default
const collections = require('./data/collections')

exports.seed = function (knex) {
    return Collection
        .query(knex)
        .upsertGraph(collections)
}
