<template>
    <div class="navigation" id="navigation-default">
        <c-sidebar-menu
            title="SETTINGS"
            subTitle="General"
            :links="links.settings"
        />
    </div>
</template>

<script>
    export default {
        components: {
            'c-sidebar-menu': (resolve) => require(['@/ui/components/sidebar-menu'], resolve),
            'c-searcher': (resolve) => require(['@/ui/components/searcher'], resolve)
        },
        data() {
            return {
                links: {
                    settings: [
                        { to: { path: '/settings' }, title: 'Overview' },
                        { to: { path: '/settings/darklaunch' }, title: 'Darklaunch Settings' },
                        { to: { path: '/settings/protocol' }, title: 'Protocol Settings' },
                        { to: { path: '/settings/activity' }, title: 'Activity Log' }
                    ]
                }
            }
        }
    }
</script>
