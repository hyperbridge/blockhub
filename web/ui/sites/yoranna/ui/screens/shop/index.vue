<template>
    <c-layout>
        Testttt
    </c-layout>
</template>

<script>
    import * as DB from '@/db'

    export default {
        components: {
            'c-layout': () => import('~/sites/yoranna/ui/layouts/default').then(m => m.default || m),
        },
        data() {
            return {
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>