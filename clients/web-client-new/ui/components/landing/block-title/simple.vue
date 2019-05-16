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
                default: 'bold'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .landing__block-title{
        margin-bottom: 10px;
        text-shadow: 0 2px 3px rgba(0, 0, 0, .6);
        h1, h2, h3, h4, h5, h6{
            padding: 0;
            margin: 0;
        }
    }
</style>
