<template>
    <div class="metro-grid">
        <slot />
    </div>
</template>

<script>
    export default {
        props:{
            gutter: {
                type: [ String, Number ],
                default: 15
            },
            itemInRow: {
                type: [ String, Number ],
                default: 4
            },
        }
    }
</script>

<style lang="scss">
    .metro-grid{
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        align-items: stretch;
    }
</style>
