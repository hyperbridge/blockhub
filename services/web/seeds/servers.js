const Objection = require('objection')
const Server = require('../build/src/models/server').default
const servers = require('./data/servers')

exports.seed = function (knex) {
    return Server
        .query(knex)
        .upsertGraph(servers)
}
