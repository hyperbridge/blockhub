<template>
    <div class="landing__block-title-shadow">
        <component :is="tag" :style="{ 'color': color, 'font-size': fontSize + 'px', 'font-weight': fontWeight, 'text-shadow' : textShadow }">
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
        },
        computed:{
            textShadow(){
                return '0px 0px 15px' + this.colorShadow + ', 0px 0px 15px' + this.colorShadow + ', 0px 0px 15px' + this.colorShadow + ', 0px 0px 15px' + this.colorShadow
            }
        }
    }
</script>

<style lang="scss" scoped>
    .landing__block-title-shadow{
        margin-bottom: 15px;
        h2{
            padding: 0;
            margin: 0;
        }
    }
</style>
