import License from '../src/models/license'

export const data = [
    {
        status: 'active'
    }
]

export const seed = async function (knex): Promise<any> {
    await knex('licenses').del()

    await License
        .query(knex)
        .upsertGraph(data)
}
