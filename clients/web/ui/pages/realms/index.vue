<template>
    <c-layout navigationKey="store" :breadcrumbLinks="breadcrumbLinks">
        <c-block
            :noGutter="true"
            :bgGradient="true"
            :onlyContentBg="true">
            <c-heading-bar
                slot="title"
                class="mb-0"
                name="Browse All Realms" />
            <div class="row">
                <c-loading
                    :enabled="!realms.length"
                    size="lg" />
                <c-metro-grid
                    v-if="realms.length"
                    class="w-100">
                    <c-metro-item
                        v-for="(realm, index) in realms"
                        :key="realm.id"
                        :image="realm.meta.images.logo"
                        width="25%"
                        :fullImage=" index == 1 ? true : false">
                        <c-button
                            class="h4 font-weight-bold"
                            :to="`/realm/${realm.id}`">
                            {{ realm.name }}
                        </c-button>
                        <div>
                            {{ realm.name }}
                        </div>
                    </c-metro-item>
                </c-metro-grid>
            </div>
        </c-block>
    </c-layout>
</template>

<script>
export default {
    head() {
        return {
            title: `Realms | BlockHub`,
            meta: [
                { hid: 'description', name: 'description', content: 'BlockHub realms are where you keep up with game studios' },
                { hid: 'keywords', name: 'keywords', content: 'realms, game studios, gaming, game, indie, developer' }
            ]
        }
    },
    components: {
        'c-metro-grid': () => import('~/components/metro/grid').then(m => m.default || m),
        'c-metro-item': () => import('~/components/metro/metro-item').then(m => m.default || m)
    },
    data() {
        return {
        }
    },
    computed: {
    },
    async asyncData({ params, store }) {
        await store.dispatch('realms/find', {
            query: {
                $sort: {
                    createdAt: -1
                },
                $limit: 25
            }
        })

        const realms = store.getters['realms/list']

        return {
            realms,
            breadcrumbLinks: [
                { to: { path: '/' }, title: 'Home' },
                { to: { path: '/realms' }, title: 'Realms' }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
