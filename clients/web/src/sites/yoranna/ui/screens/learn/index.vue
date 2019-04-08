<template>
    <c-layout>
        Testttt
    </c-layout>
</template>

<script>
    import * as DB from '@/db'

    export default {
        components: {
            'c-layout': (resolve) => require(['@/sites/yoranna/ui/layouts/default'], resolve),
        },
        data() {
            return {
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>