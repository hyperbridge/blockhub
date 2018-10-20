<template>
    <div class="navigation" id="navigation-default">
        <c-sidebar-menu
            title="CROWD FUNDING"
            sub_title="General"
            mClass="margin-bottom-20"
            :links="links.general"
        />
    </div>
</template>

<script>
export default {
    components: {
        'c-sidebar-menu': (resolve) => require(['@/ui/components/sidebar-menu/index'], resolve),
        'c-searcher': (resolve) => require(['@/ui/components/searcher'], resolve)
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
