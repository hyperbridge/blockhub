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
            'c-layout': (resolve) => require(['@/layouts/business'], resolve),
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
