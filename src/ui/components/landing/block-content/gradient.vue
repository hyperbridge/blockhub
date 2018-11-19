<template>
    <div class="landing-gradient-block">
        <slot />
    </div>
</template>

<script>
    export default {
        name: 'gradient-block',
    }
</script>

<style lang="scss">
    @mixin gradient_center ($start_color, $center_color ,$end_color) {
        /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#2989d8+50,5ea72b+50,5ea72b+50&0+0,1+45,1+53,0+100 */
        background: -moz-linear-gradient(left, $start_color 0%, $center_color 50%, $end_color 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(left, $start_color 0%, $center_color 50%, $end_color 100%); /* Chrome10-25,Safari5.1-6 */
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='$start_color', endColorstr='$center_color', GradientType=1); /* IE6-9 */
    }
    .landing-gradient-block{
        padding: 20px 60px;
        display: inline-flex;
        flex-direction: column;
        text-align: center;
        position: relative;
        text-shadow: 0 0 3px rgba(0, 0, 0, .5);
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
</style>
