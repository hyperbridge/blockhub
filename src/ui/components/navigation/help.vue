<template>
    <div class="navigation" id="navigation-default">

        <c-sidebar-menu title="HELP" sub_title="General" mClass="margin-bottom-20">
            <c-sidebar-menu-link url="/#/help" link_text="All Sections &amp; Topics" />
            <c-sidebar-menu-link url="/#/help/changelog" link_text="Changelog" />
            <c-sidebar-menu-link url="/#/help/common-issues" link_text="Common Issues" />
            <c-sidebar-menu-link url="/#/help/trending-articles" link_text="Trending Articles" />
            <c-sidebar-menu-link url="/#/help/support" link_text="Support" />
        </c-sidebar-menu>
        <c-sidebar-menu sub_title="Sections" mClass="margin-bottom-20" sub_icon="fas fa-question-circle">
            <c-sidebar-menu-link url="/#/help/0" link_text="General Platform Features" />
        </c-sidebar-menu>
        <c-sidebar-menu sub_title="Trending articles" mClass="margin-bottom-20" sub_icon="fas fa-question-circle">
            <c-sidebar-menu-link url="/#/help/building-communities" link_text="Building Communities" />
            <c-sidebar-menu-link url="/#/help/suggesting-features" link_text="Suggesting Features" />
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
