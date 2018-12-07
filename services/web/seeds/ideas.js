const Objection = require('objection')
const Idea = require('../build/src/models/idea').default
const ideas = require('./data/ideas')

exports.seed = function (knex) {
    return Idea
        .query(knex)
        .upsertGraph(ideas)
}
