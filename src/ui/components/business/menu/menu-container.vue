<template>
    <div class="menu-container">
        <ul>
            <slot />
        </ul>
    </div>
</template>

<script>
    export default {
        props: ['minimized']
    }
</script>

<style lang="scss" scoped>
    ul{
        padding: 0;
        margin: 0;
        li{
            span{
                display: none;
            }
        }
    }
</style>
