<template>
    <c-business-layout>
        <router-view />
    </c-business-layout>
</template>

<script>
    export default {
        components: {
            'c-business-layout': () => import('~/layouts/business').then(m => m.default || m)
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
