<template>
    <c-layout navigationKey="meta">
        <div class="row">
            <div class="col-12">
                Vote for presets
                Global or specific keys
            </div>
        </div>
    </c-layout>
</template>

<script>
export default {
    components: {
    },
    created() {
        this.$store.commit('application/activeModal', 'comingSoon')
    }
}
</script>

<style lang="scss" scoped>

</style>
