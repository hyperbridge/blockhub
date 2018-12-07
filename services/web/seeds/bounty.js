const Objection = require('objection')
const Bounty = require('../build/src/models/bounty').default
const bounties = require('./data/bounties')

exports.seed = function (knex) {
    return Bounty
        .query(knex)
        .upsertGraph(bounties)
}
