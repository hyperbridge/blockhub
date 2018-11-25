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
                default: 'bold'
            },
            colorShadow:{
                type: String,
                default: '#f60'
            }
        },
        computed:{
            textShadow(){
                if ( Number(this.fontSize) <= 18 )
                    return '0px 0px 5px' + this.colorShadow + ', 0px 0px 5px' + this.colorShadow
                else if ( Number(this.fontSize) <= 28 )
                    return '0px 0px 10px' + this.colorShadow + ', 0px 0px 10px' + this.colorShadow + ', 0px 0px 10px' + this.colorShadow
                else
                    return '0px 0px 10px' + this.colorShadow + ', 0px 0px 10px' + this.colorShadow + ', 0px 0px 10px' + this.colorShadow + ', 0px 0px 10px' + this.colorShadow
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
