<template>
    <Layout navigationKey="store">
        <div class="container-fluid">
            <InfiniteContent :list="list" />
            <p>No curators yet. Stay tuned!</p>
        </div>
    </Layout>
</template>

<script>
export default {
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
