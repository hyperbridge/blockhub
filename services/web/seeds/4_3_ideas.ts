import Idea from '../src/models/idea'
import Community from '../src/models/community'
import Rating from '../src/models/rating'
import Profile from '../src/models/profile'

export const seed = async function (knex): Promise<any> {
    console.log('[BlockHub] Seeding ideas')

    const community = await Community.query(knex).where('value', 'New to BlockHub').first()
    const rating = await Rating.query(knex).findById(1)
    const owner = await Profile.query(knex).findById(1)

    const data = [
        {
            status: 'active',
            type: 'game',
            key: 'Game idea name',
            value: 'Game idea about',
            owner,
            community,
            //rating,
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
            owner,
            community,
            //rating,
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
            owner,
            community,
            //rating,
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

    await knex('ideas').del()

    await Idea
        .query(knex)
        .upsertGraph(data, {
            relate: true
        })
}
