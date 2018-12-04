<template>
    <c-layout navigationKey="store">
        <div class="row">
            <div class="col-12">
                <h2>Streams</h2>
                <c-infinite-content :list="list" />
            </div>
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
        this.$store.commit('application/activateModal', 'coming-soon')
    }
}
</script>

<style lang="scss" scoped>

</style>
