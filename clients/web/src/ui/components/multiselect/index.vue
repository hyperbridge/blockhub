<template>
    <c-multiselect v-bind="object">

    </c-multiselect>
</template>

<script>
    import Multiselect from 'vue-multiselect'
    import 'vue-multiselect/dist/vue-multiselect.min.css'

    export default {
        props: {
        },
        components: {
            'c-multiselect': Multiselect,
        },
    }
</script>

<style>

</style>