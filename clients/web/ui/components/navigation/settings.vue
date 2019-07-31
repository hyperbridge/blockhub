<template>
    <div class="navigation">
        <SidebarMenu
            title="SETTINGS"
            subTitle="General"
            :links="links.settings" />
    </div>
</template>

<script>
export default {
    components: {
        'SidebarMenu': () => import('@ericmuyser/hyper-ui').then(m => m.SidebarMenu)
    },
    data() {
        return {
            links: {
                settings: [
                    { to: { path: '/settings' }, title: 'Overview' },
                    { to: { path: '/settings/access' }, title: 'Access Settings' },
                    { to: { path: '/settings/protocol' }, title: 'Protocol Settings' },
                    { to: { path: '/settings/activity' }, title: 'Activity Log' }
                ]
            }
        }
    }
}
</script>
