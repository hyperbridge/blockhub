const Objection = require('objection')
const Message = require('../build/src/models/message').default
const messages = require('./data/messages')

exports.seed = function (knex) {
    return Message
        .query(knex)
        .upsertGraph(messages)
}
