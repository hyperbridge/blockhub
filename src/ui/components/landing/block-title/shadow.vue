<template>
    <div class="landing__block-title-shadow">
        <component :is="tag" :style="{ 'color': color, 'font-size': fontSize + 'px', 'font-weight': fontWeight, 'text-shadow':'1px 1px 25px ' + colorShadow }">
            <slot />
        </component>
    </div>
</template>

<script>
    export default {
        name: 'title-shadow',
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
            },
            colorShadow:{
                type: String,
                default: 'rgba(0, 0, 0, .4)'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .landing__block-title-shadow{
        h2{
            padding: 0;
            margin: 0;
        }
    }
</style>
