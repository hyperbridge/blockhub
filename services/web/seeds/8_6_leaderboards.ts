import Leaderboard from '../src/models/leaderboard'

export const data = [
    {
        status: 'active'
    }
]

export const seed = async function (knex): Promise<any> {
    await knex('leaderboards').del()

    await Leaderboard
        .query(knex)
        .upsertGraph(data)
}
