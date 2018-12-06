const projects = require('./data/projects')
const Profile = require('../build/src/models/profile').default

exports.seed = function(knex) {
    Profile
        .query()
        .upsertGraph({
            id: 2,
            value: 'Test',

        });
    // // Deletes ALL existing entries
    // return knex('projects')
    //     .del()
    //     .then(function() {
    //         // Inserts seed entries
    //         return knex('projects').insert(projects)
    //     })
}
