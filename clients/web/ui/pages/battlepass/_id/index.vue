<template>
    <Layout navigationKey="store">
        <div class="container-fluid">
            <InfiniteContent :list="list" />
            <p>No battle passes yet. Stay tuned!</p>
        </div>
    </Layout>
</template>

<script>
export default {
    head() {
        return {
            title: `Battle Pass ${this.battlepass.name} | BlockHub`,
            meta: [
                { hid: 'description', name: 'description', content: `BlockHub battle pass` },
                { hid: 'keywords', name: 'keywords', content: 'blockhub, battlepass, battle pass, blockchain, game, indie, developer' }
            ]
        }
    },
    components: {
    },
    computed: {
        list() {
            const result = []

            return result
        }
    },
    created() {
        this.$store.commit('application/activeModal', 'comingSoon')
    }
}
</script>

<style lang="scss" scoped>

</style>
