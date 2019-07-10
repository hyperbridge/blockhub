import Realm from '../src/models/realm'

export const data = [
    {
        status: 'active'
    }
]

export const seed = function (knex): Promise<any> {
    return Realm
        .query(knex)
        .upsertGraph(data)
}
