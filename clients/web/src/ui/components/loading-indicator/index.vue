<template>
    <div class="padding-40 loading-process" style="position: relative" v-if="enabled">
        <div class="loading loading--w-spinner"><div><div class="loading-spinner"></div></div></div>
    </div>
</template>

<script>
    export default {
        props: ['enabled']
    }
</script>

<style lang="scss" scoped>
</style>
