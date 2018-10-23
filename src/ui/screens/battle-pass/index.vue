<template>
    <c-layout navigationKey="store">
            <div class="container-fluid">
                <c-infinite-content :list="list" />
                <p>No battle passes yet. Stay tuned!</p>
            </div>
    </c-layout>
</template>

<script>
export default {
    components: {
        'c-layout': (resolve) => require(['@/ui/layouts/default'], resolve),
        'c-infinite-content': (resolve) => require(['@/ui/components/infinite-content'], resolve),
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
