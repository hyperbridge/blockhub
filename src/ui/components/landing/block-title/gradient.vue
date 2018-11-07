<template>
    <div class="landing__block-title-gradient" :class="gradientDirection">
        <component :is="tag" :style="{ 'color': color, 'font-size': fontSize + 'px', 'font-weight': fontWeight }">
            <slot />
        </component>
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
                default: 'normal'
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
    .landing__block-title-gradient{
        margin-bottom: 15px;
        &.left-align{
            padding: 4px 40px 4px 10px;
            border-radius: 2px 0 0 2px;
            display: inline-flex;
            /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#5ea72b+0,7db9e8+98&1+0,0+76 */
            background: -moz-linear-gradient(left, rgba(94,167,43,1) 0%, rgba(118,181,190,0) 76%, rgba(125,185,232,0) 98%); /* FF3.6-15 */
            background: -webkit-linear-gradient(left, rgba(94,167,43,1) 0%,rgba(118,181,190,0) 76%,rgba(125,185,232,0) 98%); /* Chrome10-25,Safari5.1-6 */
            background: linear-gradient(to right, rgba(94,167,43,1) 0%,rgba(118,181,190,0) 76%,rgba(125,185,232,0) 98%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#5ea72b', endColorstr='#007db9e8',GradientType=1 ); /* IE6-9 */
        }
        &.center-align{
            padding: 4px 40px;
            border-radius: 2px 0 0 2px;
            display: block;
            text-align: center;
            /*margin: 0 auto;*/
            /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#2989d8+50,5ea72b+50,5ea72b+50&0+0,1+45,1+53,0+100 */
            background: -moz-linear-gradient(left, rgba(94,167,43,0) 0%, rgba(94,167,43,1) 45%, rgba(94,167,43,1) 50%, rgba(94,167,43,1) 53%, rgba(94,167,43,0) 100%); /* FF3.6-15 */
            background: -webkit-linear-gradient(left, rgba(94,167,43,0) 0%,rgba(94,167,43,1) 45%,rgba(94,167,43,1) 50%,rgba(94,167,43,1) 53%,rgba(94,167,43,0) 100%); /* Chrome10-25,Safari5.1-6 */
            background: linear-gradient(to right, rgba(94,167,43,0) 0%,rgba(94,167,43,1) 45%,rgba(94,167,43,1) 50%,rgba(94,167,43,1) 53%,rgba(94,167,43,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#005ea72b', endColorstr='#005ea72b',GradientType=1 ); /* IE6-9 */
        }
        &.right-align{
            padding: 4px 10px 4px 40px;
            border-radius: 0 2px 2px 0;
            display: inline-flex;
            text-align: right;
            /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#5ea72b+0,7db9e8+98&1+0,0+76 */
            background: -moz-linear-gradient(right, rgba(94,167,43,1) 0%, rgba(118,181,190,0) 76%, rgba(125,185,232,0) 98%); /* FF3.6-15 */
            background: -webkit-linear-gradient(right, rgba(94,167,43,1) 0%,rgba(118,181,190,0) 76%,rgba(125,185,232,0) 98%); /* Chrome10-25,Safari5.1-6 */
            background: linear-gradient(to left, rgba(94,167,43,1) 0%,rgba(118,181,190,0) 76%,rgba(125,185,232,0) 98%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#5ea72b', endColorstr='#007db9e8',GradientType=1 ); /* IE6-9 */
        }
        h2{
            text-shadow: 1px 1px 3px rgba(0, 0, 0, .8);
            padding: 0;
            margin: 0;
        }
    }
</style>
