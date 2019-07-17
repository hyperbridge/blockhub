
exports.seed = async function (knex) {
    await knex('roles').del()

    return knex('roles').insert([
        {
            roleId: 1,
            applicationId: 1,
            name: 'God',
            description: null
        },
        {
            roleId: 2,
            applicationId: 1,
            name: 'Dev',
            description: null
        }
    ])
}
