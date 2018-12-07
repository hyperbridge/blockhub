const Objection = require('objection')
const Community = require('../build/src/models/idea').default
const communities = require('./data/communities')

exports.seed = function (knex) {
    return Community
        .query(knex)
        .upsertGraph(communities)
}
