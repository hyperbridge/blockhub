import License from '../src/models/license'

export const data = [
    {
        status: 'active',
        meta: {}
    }
]

export const seed = async function (knex): Promise<any> {
    console.log('[BlockHub] Seeding licenses')

    await knex('licenses').del()

    await License
        .query(knex)
        .upsertGraph(data)
}
