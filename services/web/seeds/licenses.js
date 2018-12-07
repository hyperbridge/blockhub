const Objection = require('objection')
const License = require('../build/src/models/license').default
const licenses = require('./data/licenses')

exports.seed = function (knex) {
    return License
        .query(knex)
        .upsertGraph(licenses)
}
