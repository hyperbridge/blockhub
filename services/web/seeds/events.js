const Objection = require('objection')
const Event = require('../build/src/models/event').default
const events = require('./data/events')

exports.seed = function (knex) {
    return Event
        .query(knex)
        .upsertGraph(events)
}
