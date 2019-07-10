import Leaderboard from '../src/models/leaderboard'

export const data = [
    {
        status: 'active'
    }
]

export const seed = function (knex): Promise<any> {
    return Leaderboard
        .query(knex)
        .upsertGraph(data)
}
