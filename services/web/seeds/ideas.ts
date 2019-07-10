import Idea from '../src/models/idea'

export const data = [
    {
        status: 'active',
        type: 'game',
        key: 'Game idea name',
        value: 'Game idea about',
        meta: {
            description: 'Game idea description'
        }
    },
    {
        status: 'active',
        type: 'mod',
        key: 'Mod idea name',
        value: 'Mod idea about',
        meta: {
            description: 'Mod idea description'
        }
    },
    {
        status: 'active',
        type: 'item',
        key: 'Item idea name',
        value: 'Item idea about',
        meta: {
            description: 'Item idea description'
        }
    }
]

export const seed = function (knex): Promise<any> {
    return Idea
        .query(knex)
        .upsertGraph(data)
}
