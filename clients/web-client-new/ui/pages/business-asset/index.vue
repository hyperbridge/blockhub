<template>
    <c-layout>
        WIP
    </c-layout>
</template>

<script>
    import 'vue-multiselect/dist/vue-multiselect.min.css'

    export default {
        props: {
            id: [String, Number]
        },
        components: {
            'c-layout': () => import('~/components/business-layout').then(m => m.default || m),
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
        },
    }
</script>

<style lang="scss">
.note-editor.note-frame .note-editing-area .note-editable {
    background: #30314d !important;
    color: #fff;
}
</style>
