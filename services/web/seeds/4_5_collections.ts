import Collection from '../src/models/collection'

export const data = [
    {
        status: 'active',
        name: 'Collection 1',
        createdAt: '2018-12-19T17:20:00.437+09:00',
        meta: {
            author: 'Nevine Acotanza',
            background: null,
            assets: [
                1,
                2,
                3,
                4,
                5
            ],
            estimatedValue: 34562
        }
    },
    {
        status: 'active',
        name: 'Collection 2',
        createdAt: '2018-12-19T17:20:00.437+09:00',
        meta: {
            author: 'Danial Lugo',
            background: null,
            assets: [
                1, 2, 3, 4, 5
            ],
            estimatedValue: 34562
        }
    },
    {
        status: 'active',
        name: 'Collection 3',
        createdAt: '2018-12-19T17:20:00.437+09:00',
        meta: {
            author: 'Yvenide Belizaire',
            background: null,
            assets: [
                1, 2, 3
            ],
            estimatedValue: 34562
        }
    },
    {
        status: 'active',
        name: 'Collection 4',
        createdAt: '2018-12-19T17:20:00.437+09:00',
        meta: {
            author: 'Yvenide Belizaire',
            background: null,
            assets: [
                6, 7, 3, 4, 5
            ],
            estimatedValue: 34562
        }
    },
    {
        status: 'active',
        name: 'Collection 5',
        createdAt: '2018-12-19T17:20:00.437+09:00',
        meta: {
            author: 'Melanie Nash',
            background: null,
            assets: [
                5, 6, 7, 8
            ],
            estimatedValue: 34562
        }
    },
]

export const seed = async function (knex): Promise<any> {
    console.log('[BlockHub] Seeding collections')

    await knex('collections').del()

    await Collection
        .query(knex)
        .upsertGraph(data)
}
