<template>
    <div class="simple-list-item">
        <a :href="link">
            <slot />
        </a>
    </div>
</template>

<script>
    export default {
        name: 'simple-list-item',
        props:['link']
    }
</script>

<style lang="scss" scoped>
    .simple-list-item{
        padding: 5px 0;
        width: 100%;
        a{
            color: #fff;
        }
    }
</style>
