const Objection = require('objection')
const Offer = require('../build/src/models/offer').default
const offers = require('./data/offers')

exports.seed = function (knex) {
    return Offer
        .query(knex)
        .upsertGraph(offers)
}
