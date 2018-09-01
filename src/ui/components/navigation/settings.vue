
<template>
    <div class="navigation" id="navigation-default">

        <c-sidebar-menu title="SETTINGS" sub_title="General" >
            <c-sidebar-menu-link url="/#/settings/client" link_text="Client" />
            <c-sidebar-menu-link url="/#/fa fa-home" link_text="Profile" icon="fa fa-home"/>
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
