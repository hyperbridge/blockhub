const Objection = require('objection')
const Vote = require('../build/src/models/vote').default
const votes = require('./data/votes')

exports.seed = function (knex) {
    return Vote
        .query(knex)
        .upsertGraph(votes)
}
