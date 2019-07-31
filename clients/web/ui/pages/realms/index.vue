<template>
    <Layout navigationKey="store" :breadcrumbLinks="breadcrumbLinks">
        <Block
            :noGutter="true"
            :bgGradient="true"
            :onlyContentBg="true">
            <HeadingBar
                slot="title"
                class="mb-0"
                name="Browse All Realms" />
            <div class="row">
                <Loading
                    :enabled="!realms.length"
                    size="lg" />
                <MetroGrid
                    v-if="realms.length"
                    class="w-100">
                    <MetroItem
                        v-for="(realm, index) in realms"
                        :key="realm.id"
                        :image="realm.meta.images.logo"
                        width="25%"
                        :fullImage=" index == 1 ? true : false">
                        <Button
                            class="h4 font-weight-bold"
                            :to="`/realm/${realm.id}`">
                            {{ realm.name }}
                        </Button>
                        <div>
                            {{ realm.name }}
                        </div>
                    </MetroItem>
                </MetroGrid>
            </div>
        </Block>
    </Layout>
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
        'MetroGrid': () => import('@ericmuyser/hyper-ui').then(m => m.MetroGrid),
        'MetroItem': () => import('@ericmuyser/hyper-ui').then(m => m.MetroItem)
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
