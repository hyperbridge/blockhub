const Objection = require('objection')
const Review = require('../build/src/models/review').default
const reviews = require('./data/reviews')

exports.seed = function (knex) {
    return Review
        .query(knex)
        .upsertGraph(reviews)
}
