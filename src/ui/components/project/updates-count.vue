<template>
    <div class="updates-count">
        <slot />
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    .updates-count{
        display: inline-flex;
        padding: 3px 8px;
        /*background: rgba(0, 0, 0, .2);*/
        background: #43C981;
        color: #30304B;
        border-radius: 14px;
        font-weight: bold;
        min-width: 25px;
        text-align: center;
        font-size: 15px;
        margin-left: 5px;
    }
</style>
