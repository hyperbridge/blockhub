<template>
    <c-layout navigationKey="store">
        <p>Browser</p>
    </c-layout>
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
