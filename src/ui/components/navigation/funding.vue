
<template>
    <div class="navigation" id="navigation-default">

        <c-sidebar-menu title="FUNDING" sub_title="General" mClass="margin-bottom-20">
            <c-sidebar-menu-link url="/#/projects" icon="fa fa-home" link_text="All Projects" />
        </c-sidebar-menu>

    </div>
</template>

<script>
export default {
    components: {
        'c-sidebar-menu-link': (resolve) => require(['@/ui/components/sidebar-menu/menu_item'], resolve),
        'c-sidebar-menu': (resolve) => require(['@/ui/components/sidebar-menu/index'], resolve),
        'c-searcher': (resolve) => require(['@/ui/components/searcher'], resolve)
    }
}
</script>

<style lang="scss" scoped>

</style>
