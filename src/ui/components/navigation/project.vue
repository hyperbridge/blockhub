
<template>
    <div class="navigation" id="navigation-default">

        <c-sidebar-menu title="GAME" sub_title="Help" sub_icon="fas fa-question-circle">
            <c-sidebar-menu-link url="/#/" link_text="Building Communities" />
            <c-sidebar-menu-link url="/#/" link_text="Suggesting Features" />
            <c-sidebar-menu-link url="/#/" link_text="Voting &amp; Curating Updates" />
            <c-sidebar-menu-link url="#3" aClass="font-weight-bold" link_text="MORE ..." />
        </c-sidebar-menu>

        <c-curator-panel />

    </div>
</template>

<script>
    export default {
        components: {
            'c-sidebar-menu-link': (resolve) => require(['@/ui/components/sidebar-menu/menu_item'], resolve),
            'c-sidebar-menu': (resolve) => require(['@/ui/components/sidebar-menu/index'], resolve),
            'c-searcher': (resolve) => require(['@/ui/components/searcher'], resolve),
            'c-curator-panel': (resolve) => require(['@/ui/components/curator-panel'], resolve),
        },
        data() {
            return {}
        }
    }
</script>

<style lang="scss" scoped>
</style>
