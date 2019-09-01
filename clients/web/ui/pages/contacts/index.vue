<template>
    <Layout navigationKey="store">
        <div>Contacts coming soon</div>
    </Layout>
</template>

<script>
export default {
    components: {
    },
    data: () => ({
        wallets: []
    }),
    created() {
        this.$store.commit('application/activeModal', 'comingSoon')
    }
}
</script>

<style lang="scss" scoped>

</style>
