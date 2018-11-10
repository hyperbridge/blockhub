<template>
    <div class="landing__block-title" :class="['text-' + align ]">
        <div style="padding: 0 10px" v-if="$slots.before">
            <slot name="before" />
        </div>
        <div class="landing__block-title-gradient" :class="gradientDirection">
            <component :is="tag" :style="{ 'color': color, 'font-size': fontSize + 'px', 'font-weight': fontWeight }">
                <slot />
            </component>
        </div>
        <div style="padding: 0 10px" v-if="$slots.after">
            <slot name="after" />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'title-gradient',
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
            align:{
                type: String,
                default: 'left'
            },
            fontWeight:{
                type: String,
                default: 'bold'
            }
        },
        computed:{
            gradientDirection(){
                switch(this.align){
                    case 'left': return 'left-align';
                    case 'center': return 'center-align';
                    case 'right': return 'right-align';
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @mixin gradient ($direction, $start_color, $end_color){
        /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#5ea72b+0,7db9e8+98&1+0,0+76 */
        background: -moz-linear-gradient($direction, $start_color 0%, $end_color 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient($direction, $start_color 0%,$end_color 100%); /* Chrome10-25,Safari5.1-6 */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#5ea72b', endColorstr='#007db9e8',GradientType=1 ); /* IE6-9 */
    }
    @mixin gradient_center ($start_color, $center_color ,$end_color){
        /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#2989d8+50,5ea72b+50,5ea72b+50&0+0,1+45,1+53,0+100 */
        background: -moz-linear-gradient(left, $start_color 0%, $center_color 50%, $end_color 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(left, $start_color 0%, $center_color 50%, $end_color 100%); /* Chrome10-25,Safari5.1-6 */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='$start_color', endColorstr='$center_color',GradientType=1 ); /* IE6-9 */
    }

    .landing__block-title-gradient{
        position: relative;
        filter: drop-shadow(0 0px 15px #30314c);
        &.left-align{
            padding: 4px 40px 4px 10px;
            border-radius: 2px 0 0 2px;
            display: inline-flex;
            text-align: left;
            @include gradient (130deg, rgba(94,167,43,0), rgba(94,167,43,1));
            &:before{
                content: "";
                position: absolute;
                height: 2px;
                top: 0;
                left: 0;
                width: 100%;
                @include gradient (right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.3));
            }
        }
        &.center-align{
            padding: 4px 40px;
            border-radius: 2px 0 0 2px;
            display: block;
            text-align: center;
            position: relative;
            @include gradient_center (rgba(94,167,43,0), rgba(94,167,43,1), rgba(94,167,43,0));
            &:before{
                content: "";
                position: absolute;
                height: 2px;
                top: 0;
                left: 0;
                width: 100%;
                @include gradient_center (rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0));
            }
        }
        &.right-align{
            padding: 4px 10px 4px 40px;
            border-radius: 0 2px 2px 0;
            display: inline-flex;
            text-align: right;
            @include gradient (50deg, rgba(94,167,43,0), rgba(94,167,43,1));
            &:before{
                content: "";
                position: absolute;
                height: 2px;
                top: 0;
                left: 0;
                width: 100%;
                @include gradient (left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.3));
            }
        }
        h2{
            text-shadow: 1px 1px 3px rgba(0, 0, 0, .8);
            padding: 0;
            margin: 0;
        }
    }
</style>
