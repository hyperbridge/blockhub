<template>
    <c-layout navigationKey="store">
        <div class="container-fluid">
            <c-infinite-content :list="list" />
            <p>No curators yet. Stay tuned!</p>
        </div>
    </c-layout>
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
        this.$store.commit('application/activeModal', 'coming-soon')
    }
}
</script>

<style lang="scss" scoped>

</style>
