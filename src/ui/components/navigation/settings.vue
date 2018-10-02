<template>
    <div class="navigation" id="navigation-default">
        <c-sidebar-menu
            title="SETTINGS"
            sub_title="General"
            :links="links.settings"
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
                    settings: [
                        { to: { path: '/settings' }, title: 'All Settings' },
                        { to: { path: '/settings/client' }, title: 'Client' },
                        { to: { path: '/settings/activity' }, title: 'Activity Log' }
                    ]
                }
            }
        }
    }
</script>
