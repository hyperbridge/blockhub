<template>
    <Layout navigationKey="settings">
        <Settings />
    </Layout>
</template>

<script>
export default {
    head() {
        return {
            title: `Settings | BlockHub`,
            meta: [
                { hid: 'description', name: 'description', content: `BlockHub settings` },
                { hid: 'keywords', name: 'keywords', content: 'settings, config, configuration, blockchain, game, indie, developer' }
            ]
        }
    },
    components: {
        'Settings': () => import('@ericmuyser/hyper-ui').then(m => m.Settings)
    }
}
</script>
