const Objection = require('objection')
const Suggestion = require('../build/src/models/suggestion').default
const suggestions = require('./data/suggestions')

exports.seed = function (knex) {
    return Suggestion
        .query(knex)
        .upsertGraph(suggestions)
}
