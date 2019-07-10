import Project from '../src/models/project'

export const data = [
    {
        ownerId: 1,
        name: 'Project name',
        value: 'Project about',
        description: 'Project description'
    }
]

export const seed = function (knex): Promise<any> {
    return Project
        .query(knex)
        .upsertGraph(data)

    // // Deletes ALL existing entries
    // return knex('projects')
    //     .del()
    //     .then(function() {
    //         // Inserts seed entries
    //         return knex('projects').insert(projects)
    //     })
}
