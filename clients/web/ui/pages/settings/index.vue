<template>
    <c-layout navigationKey="settings">
        <c-settings />
    </c-layout>
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
        'c-settings': () => import('~/components/settings').then(m => m.default || m)
    }
}
</script>
