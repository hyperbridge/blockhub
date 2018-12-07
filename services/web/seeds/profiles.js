const Objection = require('objection')
const Profile = require('../build/src/models/profile').default
const profiles = require('./data/profiles')

exports.seed = function (knex) {
    return Profile
        .query(knex)
        .upsertGraph(profiles)
}
