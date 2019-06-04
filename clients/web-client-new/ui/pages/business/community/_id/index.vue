<template>
    <c-layout>
        <c-model-editor serviceKey="communities" />

        <template slot="menu">
            ...
        </template>
    </c-layout>
</template>

<script>
export default {
    components: {
        'c-layout': () => import('~/components/business-layout').then(m => m.default || m),
        'c-model-editor': () => import('~/components/model-editor').then(m => m.default || m)
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
