<template>
    <c-input-searcher
        @input="searchFor"
    />
</template>

<script>
    export default {
        props: {
            searchFor: Function
        }
    }
</script>

<style>

</style>
