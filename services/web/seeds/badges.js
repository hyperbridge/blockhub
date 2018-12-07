const Objection = require('objection')
const Badge = require('../build/src/models/badge').default
const badges = require('./data/badges')

exports.seed = function (knex) {
    return Badge
        .query(knex)
        .upsertGraph(badges)
}
