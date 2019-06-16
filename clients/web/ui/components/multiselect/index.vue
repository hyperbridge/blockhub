<template>
    <c-multiselect v-bind="object" />
</template>

<script>
import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.min.css'

export default {
    components: {
        'c-multiselect': Multiselect
    },
    props: {
    }
}
</script>

<style>

</style>
