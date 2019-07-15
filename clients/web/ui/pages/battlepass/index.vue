<template>
    <c-layout navigationKey="store">
        <div class="container-fluid">
            <c-infinite-content :list="list" />
            <p>No battle passes yet. Stay tuned!</p>
        </div>
    </c-layout>
</template>

<script>
export default {
    head() {
        return {
            title: `Battle Passes | BlockHub`,
            meta: [
                { hid: 'description', name: 'description', content: `BlockHub Battle Passes` },
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
        this.$store.commit('application/activeModal', 'coming-soon')
    }
}
</script>

<style lang="scss" scoped>

</style>
