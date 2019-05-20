<template>
    <c-layout>
        <router-view />
    </c-layout>
</template>

<script>
    export default {
        components: {
            'c-layout': () => import('~/components/business-layout').then(m => m.default || m)
        },
        data() {
            return {
                loadingState: true,
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>
