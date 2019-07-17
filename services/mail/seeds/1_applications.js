
exports.seed = async function (knex) {
    await knex('applications').del()

    return knex('applications').insert([
        {
            applicationId: 1,
            name: 'App 1'
        },
        {
            applicationId: 2,
            name: 'App 2'
        }
    ])
}
