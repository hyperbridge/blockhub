const Objection = require('objection')
const Node = require('../build/src/models/node').default
const nodes = require('./data/nodes')

exports.seed = function (knex) {
    return Node
        .query(knex)
        .upsertGraph(nodes)
}
