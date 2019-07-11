import Idea from '../src/models/idea'

export const data = [
    {
        status: 'active',
        type: 'game',
        key: 'Game idea name',
        value: 'Game idea about',
        meta: {
            description: 'Game idea description',
            revision: 0,
            created: 1531430916082,
            version: 0,
            images: {},
            tags: [
                "game"
            ],
            supportEmail: "",
            twitterUsername: "",
            shareText: "",
            comments: [],
            contributors: [],
            moderators: [],
            community: {}
        }
    },
    {
        status: 'active',
        type: 'mod',
        key: 'Mod idea name',
        value: 'Mod idea about',
        meta: {
            description: 'Mod idea description',
            revision: 0,
            created: 1531430916082,
            version: 0,
            images: {},
            tags: [
                "game"
            ],
            supportEmail: "",
            twitterUsername: "",
            shareText: "",
            comments: [],
            contributors: [],
            moderators: [],
            community: {}
        }
    },
    {
        status: 'active',
        type: 'item',
        key: 'Item idea name',
        value: 'Item idea about',
        meta: {
            description: 'Item idea description',
            revision: 0,
            created: 1531430916082,
            version: 0,
            images: {},
            tags: [
                "game"
            ],
            supportEmail: "",
            twitterUsername: "",
            shareText: "",
            comments: [],
            contributors: [],
            moderators: [],
            community: {}
        }
    }
]

export const seed = async function (knex): Promise<any> {
    await knex('ideas').del()

    await Idea
        .query(knex)
        .upsertGraph(data)
}
