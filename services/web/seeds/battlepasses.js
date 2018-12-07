const Objection = require('objection')
const BattlePass = require('../build/src/models/battlepass').default
const battlepasses = require('./data/battlepasses')

exports.seed = function (knex) {
    return BattlePass
        .query(knex)
        .upsertGraph(battlepasses)
}
