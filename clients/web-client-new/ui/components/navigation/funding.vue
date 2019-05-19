<template>
    <div class="navigation">
        <c-sidebar-menu
            title="CROWD FUNDING"
            subTitle="General"
            mClass="margin-bottom-20"
            :links="links.general"
        />
    </div>
</template>

<script>
export default {
    components: {
        'c-sidebar-menu': () => import('~/components/sidebar-menu').then(m => m.default || m),
        'c-searcher': () => import('~/components/searcher').then(m => m.default || m)
    },
    data() {
        return {
            links: {
                general: [
                    { to: { path: '/projects' }, title: 'All projects' }
                ]
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
