<template>
    <Layout navigationKey="store">
        <div>Access denied</div>
    </Layout>
</template>

<script>
export default {
    head() {
        return {
            title: `Denied | BlockHub`,
            meta: [
                { hid: 'description', name: 'description', content: `Permission denied` },
                { hid: 'keywords', name: 'keywords', content: 'permission, denied, blockchain, game, indie, developer' }
            ]
        }
    },
    components: {
    },
    data: () => ({
        wallets: []
    }),
    created() {
    }
}
</script>

<style lang="scss" scoped>

</style>
