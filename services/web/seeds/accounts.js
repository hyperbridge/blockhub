const Objection = require('objection')
const Account = require('../build/src/models/account').default
const accounts = require('./data/accounts')

exports.seed = function (knex) {
    return Account
        .query(knex)
        .upsertGraph(accounts)
}
