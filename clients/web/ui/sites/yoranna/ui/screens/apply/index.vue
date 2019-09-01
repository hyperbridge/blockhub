<template>
    <Layout>
        Testttt
    </Layout>
</template>

<script>
    export default {
        components: {
            'Layout': () => import('~/sites/yoranna/ui/layouts/default').then(m => m.default),
        },
        data() {
            return {
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>