
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
            'c-sidebar-menu-link': (resolve) => require(['@/ui/components/sidebar-menu/menu_item'], resolve),
            'c-sidebar-menu': (resolve) => require(['@/ui/components/sidebar-menu/index'], resolve),
            'c-searcher': (resolve) => require(['@/ui/components/searcher'], resolve)
        },
        data() {
            return {}
        }
    }
</script>
