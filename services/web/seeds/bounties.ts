import Bounty from '../src/models/bounty'

export const data = [
    {
        status: 'active'
    }
]

export const seed = function (knex): Promise<any> {
    return Bounty
        .query(knex)
        .upsertGraph(data)
}
