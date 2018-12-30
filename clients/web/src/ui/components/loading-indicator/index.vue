<template>
    <div class="loading-process" style="position: relative" v-if="enabled">
        <div class="loading loading--w-spinner"><div><div class="loading-spinner"></div></div></div>
    </div>
</template>

<script>
    export default {
        props: ['enabled']
    }
</script>

<style lang="scss" scoped>
    .loading-process {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .loading {
        background: transparent !important;
    }
</style>
