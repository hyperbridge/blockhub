<template>
    <div class="landing__block-title">
        <component :is="tag" :style="{ 'color': color, 'font-size': fontSize + 'px', 'font-weight': fontWeight}">
            <slot />
        </component>
    </div>
</template>

<script>
    export default {
        name: 'title-simple',
        props: {
            tag:{
                type: String,
                default: 'h2'
            },
            fontSize: {
                type: [Number, String],
                default: 28
            },
            color:{
                type: String,
                default: "#fff"
            },
            fontWeight:{
                type: String,
                default: 'normal'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .landing__block-title{
        h2{
            text-shadow: 0 3px 6px rgba(0, 0, 0, .4);
            padding: 0;
            margin: 0;
        }
    }
</style>
