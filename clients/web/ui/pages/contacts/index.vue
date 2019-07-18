<template>
    <c-layout navigationKey="store">
        <div>Contacts coming soon</div>
    </c-layout>
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
