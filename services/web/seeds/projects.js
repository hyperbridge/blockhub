const Objection = require('objection')
const Project = require('../build/src/models/project').default
const projects = require('./data/projects')

exports.seed = function(knex) {
    Objection.Model.knex(knex)

    return Project
        .query()
        .upsertGraph(projects)

    // // Deletes ALL existing entries
    // return knex('projects')
    //     .del()
    //     .then(function() {
    //         // Inserts seed entries
    //         return knex('projects').insert(projects)
    //     })
}
