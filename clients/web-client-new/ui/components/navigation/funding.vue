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
        'c-sidebar-menu': (resolve) => require(['@/components/sidebar-menu'], resolve),
        'c-searcher': (resolve) => require(['@/components/searcher'], resolve)
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
