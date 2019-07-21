import Realm from '../src/models/realm'

export const data = [
    {
        status: 'active',
        key: 'my-realm',
        name: `My Realm`,
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
    },
    {
        status: 'active',
        key: 'blockhub',
        name: `BlockHub`,
        meta: {
            "revision": 0,
            "created": 1531430916082,
            "version": 0,
            "description": "Realm description",
            "tags": [
                "studio"
            ],
            "theme": {
                "backgroundColor": "#3F2797",
                "header": {
                    "backgroundSize": "cover"
                }
            },
            "images": {
                "background": "/img/realms/1/bg.png",
                "logo": "/img/realms/1/logo.png",
                "news": "/img/realms/1/news.png",
                "follow": "/img/realms/1/follow.png"
            },
            "nav": {
                "items": [
                    {
                        "title": "Home"
                    },
                    {
                        "title": "News"
                    },
                    {
                        "title": "Community"
                    },
                    {
                        "title": "Crowdfunds"
                    }
                ]
            },
            "widgets": [
                {
                    "code": "news",
                    "data": [
                        {
                            "title": "something"
                        }
                    ]
                }
            ]
        }
    },
    {
        status: 'active',
        key: 'hyperbridge',
        name: `Hyperbridge`,
        meta: {
            "theme": {
                "backgroundColor": "#0086FF",
                "header": {
                    "backgroundSize": "contain"
                }
            },
            "images": {
                "background": "/img/realms/2/bg.png",
                "logo": "/img/realms/2/logo.png",
                "news": "/img/realms/2/news.png",
                "follow": "/img/realms/2/follow.png"
            },
            "nav": {
                "items": [
                    {
                        "title": "Home"
                    },
                    {
                        "title": "News"
                    },
                    {
                        "title": "Community"
                    },
                    {
                        "title": "Crowdfunds"
                    }
                ]
            },
            "widgets": [
                {
                    "code": "news",
                    "data": [
                        {
                            "title": "something"
                        }
                    ]
                }
            ]
        }
    },
    {
        status: 'active',
        key: 'blizzard',
        value: `Blizzard`,
        meta: {
            "theme": {
                "backgroundColor": "#2878C0",
                "header": {
                    "backgroundSize": "contain"
                }
            },
            "images": {
                "background": "/img/realms/3/bg.png",
                "logo": "/img/realms/3/logo.png",
                "news": "/img/realms/3/news.png",
                "follow": "/img/realms/3/follow.png"
            },
            "nav": {
                "items": [
                    {
                        "title": "Home"
                    },
                    {
                        "title": "News"
                    },
                    {
                        "title": "Community"
                    },
                    {
                        "title": "Crowdfunds"
                    }
                ]
            },
            "widgets": [
                {
                    "code": "news",
                    "data": [
                        {
                            "title": "something"
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
