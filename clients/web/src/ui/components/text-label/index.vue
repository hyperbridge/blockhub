<template>
    <span class="c-text-label" :class="['label-type-' + type]" :style="{ 'background-color': bgColor, 'color' : fontColor }">
        <slot />
    </span>
</template>

<script>
    export default {
        name: 'text-label',
        props:{
            bgColor: String,
            fontColor: String,
            type: {
                type: String,
                default: 'default'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .c-text-label{
        padding: 0.20em 0.5em;
        border-radius: 3px;
        $labelColor: (
            info: (#5D75F7, #fff),
            success: (#5EA72B, #fff),
            danger: (#F75D5D, #fff),
            warning: (#FADC72, #30304B),
            white: (#fff, #000),
            default: (#3D3E5D, #fff),
        );

        @each $type, $colorSet in $labelColor {
            &.label-type-#{$type} {
                background: nth($colorSet, 1);
                color: nth($colorSet, 2);
            }
        }
    }
</style>
