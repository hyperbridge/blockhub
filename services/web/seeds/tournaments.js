const Objection = require('objection')
const Tournament = require('../build/src/models/tournament').default
const tournaments = require('./data/tournaments')

exports.seed = function (knex) {
    return Tournament
        .query(knex)
        .upsertGraph(tournaments)
}
