<template>
    <Layout>
        <ModelEditor serviceKey="communities" />

        <template slot="menu">
            ...
        </template>
    </Layout>
</template>

<script>
export default {
    components: {
        'Layout': () => import('@ericmuyser/hyper-ui').then(m => m.Layout),
        'ModelEditor': () => import('@ericmuyser/hyper-ui').then(m => m.ModelEditor)
    },
    props: {
    },
    data() {
        return {
        }
    },
    computed: {
    },
    watch: {
    },
    created() {
    },
    methods: {
    }
}
</script>

<style lang="scss">

</style>
