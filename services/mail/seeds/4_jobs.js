
exports.seed = async function (knex) {
    await knex('jobs').del()

    return knex('jobs').insert([
        {
            jobId: 1,
            applicationId: 1,
            createdBy: 1,
            meta: JSON.stringify({
            })
        }
    ])
}
