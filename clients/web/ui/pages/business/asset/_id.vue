<template>
    <Layout>
        WIP
    </Layout>
</template>

<script>
export default {
    components: {
        'Layout': () => import('@ericmuyser/hyper-ui').then(m => m.Layout)
    },
    props: {
        id: [String, Number]
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
.note-editor.note-frame .note-editing-area .note-editable {
    background: #30314d !important;
    color: #fff;
}
</style>
