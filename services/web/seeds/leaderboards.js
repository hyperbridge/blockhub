const Objection = require('objection')
const Leaderboard = require('../build/src/models/leaderboard').default
const leaderboards = require('./data/leaderboards')

exports.seed = function (knex) {
    return Leaderboard
        .query(knex)
        .upsertGraph(leaderboards)
}
