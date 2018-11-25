<template>
    <c-layout navigationKey="store">
            <div class="container-fluid">
                <h2>Your Stash</h2>
                <p>Here you'll find all your games, items, etc.</p>
                <c-infinite-content :list="list" />
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
    }
}
</script>

<style lang="scss" scoped>

</style>
