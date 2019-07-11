import Realm from '../src/models/realm'

export const data = [
    {
        status: 'active'
    }
]

export const seed = async function (knex): Promise<any> {
    await knex('realms').del()

    await Realm
        .query(knex)
        .upsertGraph(data)
}
