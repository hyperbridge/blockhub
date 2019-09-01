<template>
    <Layout
        navigationKey="community"
        :breadcrumbLinks="breadcrumbLinks">
        <div class="row">
            <template v-if="!community">
                <p>Not found.</p>
            </template>
            <template v-else>
                <div class="col-12 margin-bottom-40">
                    <div class="community-header">
                        <div class="community-header__name">
                            <div class="p-0 margin-bottom-5 h1 text-white">
                                {{ community.name }}
                            </div>
                            <div>
                                <strong class="mr-3">
                                    {{ assets.length }} Items
                                </strong>
                                Updated {{ timeAgo }}
                            </div>
                        </div>
                        <div class="community-header__stats">
                            <div>
                                <div class="h5 font-weight-bold m-0 p-0 text-white">
                                    Owner
                                </div>
                                {{ community.author }}
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </Layout>
</template>

<script>
export default {
    head() {
        return {
            title: `${this.community.name}`
        }
    },
    components: {
    },
    async asyncData({ params, store, error }) {
        await store.dispatch('communities/find', {
            query: {
                id: Number(params.id)
            }
        })

        const community = store.getters['communities/get'](params.id)

        if (!community) return error({ statusCode: 404, message: 'Community not found' })

        return {
            community,
            breadcrumbLinks: [
                { to: { path: '/' }, title: 'Home' },
                community && { to: { path: `/communities/${community.id}` }, title: community.name }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
