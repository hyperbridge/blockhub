import Realm from '../src/models/realm'

export const data = [
    {
        status: 'active',
        key: 'my-realm',
        value: `My Realm`,
        meta: {
            revision: 0,
            created: 1531430916082,
            version: 0,
            description: `Realm description`,
            tags: [
                'studio'
            ],
            theme: {
                backgroundColor: '#3F2797',
                header: {
                    backgroundSize: 'cover'
                }
            },
            images: {
                background: '/img/realms/1/bg.png',
                logo: '/img/realms/1/logo.png',
                news: '/img/realms/1/news.png',
                follow: '/img/realms/1/follow.png'
            },
            nav: {
                items: [
                    {
                        title: `Home`
                    },
                    {
                        title: `News`
                    },
                    {
                        title: `Community`
                    },
                    {
                        title: `Crowdfunds`
                    }
                ]
            },
            widgets: [
                {
                    code: 'news',
                    data: [
                        {
                            title: `something`
                        }
                    ]
                }
            ]
        }
    }
]

export const seed = async function (knex): Promise<any> {
    console.log('[BlockHub] Seeding realms')

    await knex('realms').del()

    await Realm
        .query(knex)
        .upsertGraph(data)
}
