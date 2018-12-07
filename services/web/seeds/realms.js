const Objection = require('objection')
const Realm = require('../build/src/models/realm').default
const realms = require('./data/realms')

exports.seed = function (knex) {
    return Realm
        .query(knex)
        .upsertGraph(realms)
}
