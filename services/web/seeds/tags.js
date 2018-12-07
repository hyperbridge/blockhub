const Objection = require('objection')
const Tag = require('../build/src/models/tag').default
const tags = require('./data/tags')

exports.seed = function (knex) {
    return Tag
        .query(knex)
        .upsertGraph(tags)
}
