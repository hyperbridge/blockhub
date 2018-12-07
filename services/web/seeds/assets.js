const Objection = require('objection')
const Asset = require('../build/src/models/asset').default
const assets = require('./data/assets')

exports.seed = function (knex) {
    return Asset
        .query(knex)
        .upsertGraph(assets)
}
