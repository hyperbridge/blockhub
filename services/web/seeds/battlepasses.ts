import BattlePass from '../src/models/battlepass'

export const data = [
    {
        status: 'active'
    }
]

export const seed = function (knex): Promise<any> {
    return BattlePass
        .query(knex)
        .upsertGraph(data)
}
