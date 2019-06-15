<template>
    <c-layout
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
    </c-layout>
</template>

<script>
export default {
    components: {
        'c-content-navigation': () => import('~/components/content-navigation').then(m => m.default || m),
        'c-heading-bar': () => import('~/components/heading-bar').then(m => m.default || m),
        'c-heading-bar-fields': () => import('~/components/heading-bar/additional-action').then(m => m.default || m),
        'c-pagination': () => import('~/components/pagination').then(m => m.default || m),
        'c-assets-grid': () => import('~/components/assets-grid').then(m => m.default || m)
    },
    async asyncData({ params, store }) {
        await store.dispatch('communities/find', {
            query: {
                id: Number(params.id)
            }
        })

        const community = store.getters['communities/get'](params.id)

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
