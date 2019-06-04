<template>
    <div class="navigation">
        <c-sidebar-menu
            title="SETTINGS"
            subTitle="General"
            :links="links.settings" />
    </div>
</template>

<script>
export default {
    components: {
        'c-sidebar-menu': () => import('~/components/sidebar-menu').then(m => m.default || m),
        'c-searcher': () => import('~/components/searcher').then(m => m.default || m)
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
