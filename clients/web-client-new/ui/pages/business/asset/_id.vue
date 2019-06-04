<template>
    <c-layout>
        WIP
    </c-layout>
</template>

<script>
export default {
    components: {
        'c-layout': () => import('~/components/business-layout').then(m => m.default || m)
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
