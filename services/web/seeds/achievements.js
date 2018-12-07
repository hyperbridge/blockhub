const Objection = require('objection')
const Achievement = require('../build/src/models/achievement').default
const achievements = require('./data/achievements')

exports.seed = function (knex) {
    return Achievement
        .query(knex)
        .upsertGraph(achievements)
}
