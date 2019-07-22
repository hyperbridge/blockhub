import Asset from '../src/models/asset'

export const data = [
    {
        status: 'active',
        meta: {}
    }
]

export const seed = async function (knex): Promise<any> {
    console.log('[BlockHub] Seeding assets')

    await knex('assets').del()

    await Asset
        .query(knex)
        .upsertGraph(data)
}
