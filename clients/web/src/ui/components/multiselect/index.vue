<template>
    <multiselect v-bind="object">

    </multiselect>
</template>

<script>
    import Multiselect from 'vue-multiselect'
    import 'vue-multiselect/dist/vue-multiselect.min.css'

    export default {
        props: {
        },
        components: {
            'multiselect': Multiselect,
        },
    }
</script>

<style>

</style>