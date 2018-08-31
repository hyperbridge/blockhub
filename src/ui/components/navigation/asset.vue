<template>
    <div class="navigation" id="navigation-default">

        <c-sidebar-menu title="ASSET MANAGER" mClass="margin-bottom-20">
            <c-sidebar-menu-link url="/#/" link_text="Top Pickss" />
            <c-sidebar-menu-link url="/#/" link_text="Offers" />
            <c-sidebar-menu-link url="/#/" link_text="Metadata" />
            <c-sidebar-menu-link url="/#/" link_text="Owned (13)" />
        </c-sidebar-menu>
        <c-sidebar-menu sub_title="Help" mClass="margin-bottom-20" sub_icon="fas fa-question-circle">
            <c-sidebar-menu-link url="/#/" link_text="Buying and Selling Assets" />
            <c-sidebar-menu-link url="/#/" link_text="How Top Picks are selected" />
            <c-sidebar-menu-link url="/#/" link_text="Accepting offers" />
            <c-sidebar-menu-link url="/#/" link_text="General" />
            <c-sidebar-menu-link url="/#/assets" link_text="Asset Browser" />
            <c-sidebar-menu-link url="#3" aClass="font-weight-bold" link_text="MORE ..." />
        </c-sidebar-menu>

    </div>
</template>

<script>
    export default {
        components: {
            'c-sidebar-menu-link': () => import('@/ui/components/sidebar-menu/menu_item'),
            'c-sidebar-menu': () => import('@/ui/components/sidebar-menu/index'),
            'c-searcher': () => import('@/ui/components/searcher')
        },
        data() {
            return {}
        }
    }
</script>
