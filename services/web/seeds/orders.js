const Objection = require('objection')
const Order = require('../build/src/models/order').default
const orders = require('./data/orders')

exports.seed = function (knex) {
    return Order
        .query(knex)
        .upsertGraph(orders)
}
