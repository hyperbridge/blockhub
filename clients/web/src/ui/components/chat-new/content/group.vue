<template>
    <div class="group-content">
        <div class="group-content__msgs-list">
            <slot />
        </div>
        <div class="chat__user-list">

        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    .group-content{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
    }
    .group-content__msgs-list{
        height: 100%;
        overflow-y: auto;
        overflow-x: hidden;
    }
</style>
