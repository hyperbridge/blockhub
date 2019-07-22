import BattlePass from '../src/models/battlepass'

export const data = [
    {
        status: 'active',
        meta: {}
    }
]

export const seed = async function (knex): Promise<any> {
    console.log('[BlockHub] Seeding battlepasses')

    await knex('battlepasses').del()

    await BattlePass
        .query(knex)
        .upsertGraph(data)
}
