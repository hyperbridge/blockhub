<template>
    <c-layout navigationKey="store">
        <div class="row">
            <h2>Your Stash</h2>
            <p>Here you'll find all your games, items, etc.</p>
            <c-infinite-content :list="list" />
        </div>
    </c-layout>
</template>

<script>
export default {
    head() {
        return {
            title: `Stash | BlockHub`,
            meta: [
                { hid: 'description', name: 'description', content: `BlockHub stash combines everything you love together` },
                { hid: 'keywords', name: 'keywords', content: 'stash, blockchain, game, indie, developer' }
            ]
        }
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
