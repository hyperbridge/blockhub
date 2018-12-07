const Objection = require('objection')
const Rating = require('../build/src/models/rating').default
const ratings = require('./data/ratings')

exports.seed = function (knex) {
    return Rating
        .query(knex)
        .upsertGraph(ratings)
}
