<template>
    <Layout navigationKey="store">
        <p>Browser</p>
    </Layout>
</template>

<script>
export default {
    components: {
    },
    computed: {
        list() {
        }
    },
    created() {
        this.$store.commit('application/activeModal', 'comingSoon')
    }
}
</script>

<style lang="scss" scoped>

</style>
