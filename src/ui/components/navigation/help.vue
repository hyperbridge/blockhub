<template>
    <div class="navigation" id="navigation-default">

        <c-sidebar-menu title="HELP" sub_title="General" mClass="margin-bottom-20">
            <c-sidebar-menu-link url="/#/help/building-communities" link_text="Building Communities" />
            <c-sidebar-menu-link url="/#/help/suggesting-features" link_text="Suggesting Features" />
        </c-sidebar-menu>

    </div>
</template>

<script>
    export default {
        components: {
            'c-sidebar-menu-link': (resolve) => require(['@/ui/components/sidebar-menu/menu_item']),
            'c-sidebar-menu': (resolve) => require(['@/ui/components/sidebar-menu/index']),
            'c-searcher': (resolve) => require(['@/ui/components/searcher'])
        },
        data() {
            return {}
        }
    }
</script>

<style lang="scss" scoped>

</style>
