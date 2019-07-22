export const path = '/products'

export const config = store => ({
    paginate: true,
    instanceDefaults: {},
    state: {
        newReleases: [],
        featuredProducts: [],
        saleProducts: [],
        frontpageProducts: [],
        topSellingProducts: [],
        upcomingProducts: []
    },
    getters: {},
    mutations: {
        newReleases (state, payload) { state.newReleases = payload },
        featuredProducts (state, payload) { state.featuredProducts = payload },
        saleProducts (state, payload) { state.saleProducts = payload },
        frontpageProducts (state, payload) { state.frontpageProducts = payload },
        topSellingProducts (state, payload) { state.topSellingProducts = payload },
        upcomingProducts (state, payload) { state.upcomingProducts = payload }
    },
    actions: {
        async newReleases (store, payload) {
            const data = (await store.dispatch('find', {
                query: {
                    'type': 'game',
                    'internalTags.name': 'Released',
                    '$joinRelation': 'internalTags',
                    '$eager': 'internalTags',
                    '$sort[releaseDate]': -1,
                    '$limit': 20
                }
            })).data

            store.commit('newReleases', data)
        },
        async featuredProducts (store, payload) {
            const data = (await store.dispatch('find', {
                query: {
                    'type': 'game',
                    'internalTags.name': 'Featured',
                    '$joinRelation': 'internalTags',
                    '$eager': 'internalTags',
                    '$sort[updatedAt]': -1,
                    '$limit': 20
                }
            })).data

            store.commit('featuredProducts', data)
        },
        async saleProducts (store, payload) {
            const data = (await store.dispatch('find', {
                query: {
                    'type': 'game',
                    'internalTags.name': 'Featured',
                    '$joinRelation': 'internalTags',
                    '$eager': 'internalTags',
                    '$sort[updatedAt]': -1,
                    '$limit': 20
                }
            })).data

            store.commit('saleProducts', data)
        },
        async frontpageProducts (store, payload) {
            const data = (await store.dispatch('find', {
                query: {
                    'type': 'game',
                    'internalTags.name': 'Frontpage',
                    '$joinRelation': 'internalTags',
                    '$eager': 'internalTags',
                    '$sort[updatedAt]': -1,
                    '$limit': 3
                }
            })).data

            store.commit('frontpageProducts', data)
        },
        async topSellingProducts (store, payload) {
            const data = (await store.dispatch('find', {
                query: {
                    'type': 'game',
                    'internalTags.name': 'Top Seller',
                    '$joinRelation': 'internalTags',
                    '$eager': 'internalTags',
                    '$sort[updatedAt]': -1,
                    '$limit': 3
                }
            })).data

            store.commit('topSellingProducts', data)
        },
        async upcomingProducts (store, payload) {
            const data = (await store.dispatch('find', {
                query: {
                    'type': 'game',
                    'internalTags.name': 'Upcoming',
                    '$joinRelation': 'internalTags',
                    '$eager': 'internalTags',
                    '$sort[updatedAt]': -1,
                    '$limit': 3
                }
            })).data

            store.commit('upcomingProducts', data)
        }
    }
})
