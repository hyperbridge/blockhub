<template>
    <div class="navigation" id="navigation-default">
        <c-sidebar-menu
            title="FUNDING"
            sub_title="General"
            mClass="margin-bottom-20"
            :links="[{ to: { path: '/projects', title: 'All projects' } }]"
        >
            <template name="link" slot-scope="{ link }">
                {{ link.title }}
                <c-icon
                    v-if="link.to.path === '/projects'"
                    name="home"
                />
            </template>
        </c-sidebar-menu>
    </div>
</template>

<script>
export default {
    components: {
        'c-sidebar-menu': (resolve) => require(['@/ui/components/sidebar-menu/index'], resolve),
        'c-searcher': (resolve) => require(['@/ui/components/searcher'], resolve)
    }
}
</script>

<style lang="scss" scoped>

</style>
