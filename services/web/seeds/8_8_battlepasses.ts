import BattlePass from '../src/models/battlepass'

export const data = [
    {
        status: 'active'
    }
]

export const seed = async function (knex): Promise<any> {
    await knex('battlepasses').del()

    await BattlePass
        .query(knex)
        .upsertGraph(data)
}
