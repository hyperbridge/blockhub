<template>
    <component
        :is="tag"
        :href="href"
        :target="target"
        class="c-btn"
        :class="[
            status, 'c-btn-' + size ,
            { 'swap-direction': swap_direction },
            { 'no-shadow' : !shadow}
        ]"
        @click="$emit('click')"
    >
        <i
            v-if="(icon || inject_filter.length) && !icon_hide"
            class="icon fas"
            :class="[
                icon ? 'fa-' + icon : inject_filter,
                swap_order ? 'swap-order' : ''
            ]"
        ></i>
        <span>
            <slot/>
        </span>
    </component>
</template>

<script>
    export default {
        name: 'c-button',
        props: {
            tag: {
                type: String,
                default: 'a',
            },
            href: {
                type: String,
                default: 'javascript:;',
            },
            target: {
                type: String,
                default: '_self',
            },
            icon: String,
            icon_hide: Boolean,
            status: {
                type: String,
                default: 'default'
            },
            swap_order: Boolean,
            swap_direction: Boolean,
            size: {
                type: String,
                default: 'sm'
            },
            shadow: {
                type: Boolean,
                default: true
            }
        },
        computed: {
            inject_filter() {
                return this.$options.filters.statusIcon(this.status);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .c-btn {
        display: inline-flex;
        align-items: center;
        padding: 0px 8px;
        line-height: 24px;
        font-weight: bold;
        border-style: none;
        border-radius: 5px;
        box-shadow: 0 2px 3px rgba(0, 0, 0, .2);
        text-decoration: none;
        cursor: pointer;
        &.plain{
            box-shadow: unset;
            margin: 0 2px;
            padding: 0;
        }
        &.no-shadow{
            box-shadow: unset;
        }
        &:active,
        &:focus {
            outline: none;
            box-shadow: none;
        }
        .icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin-right: 3px;
        }
        .swap-order {
            order: 2;
            margin: 0 0 0 3px;
        }
        &.swap-direction {
            flex-direction: column;
            .icon {
                margin-top: 3px;
            }
        }

        &.c-btn-md{
            padding: 3px 10px;
            font-size: 16px;
        }
        &.c-btn-lg{
            padding: 5px 13px;
            font-size: 18px;
            i{
                margin-right: 10px;
            }
        }
        &.c-btn-xl{
            padding: 0px 15px;
            line-height: 40px;
            font-size: 18px;
            i{
                margin-right: 10px;
            }
        }


        $statusColors: (
            default: (#fff, #3D3E5D, #3D3E5D, #A2A3BE),
            plain: (transparent, #fff, transparent, #ddd),
            info: (#5D75F7, #fff, #586ee9, #30304B),
            success: (#5EA72B, #fff, #559727, #30304B),
            danger: (#F75D5D, #fff, #de5454, #30304B),
            warning: (#FADC72, #3D3E5D, #efd26d, #32334c),
            share: (#43B4C9, #fff, #43B4C9, #32334c),
            support: (#43C981, #fff, #43C981, #30304B),
            dark: (#3D3E5D, #fff, #3D3E5D, #fff),
        );

        @each $status, $colorSet in $statusColors {
            &.#{$status} {
                background-color: nth($colorSet, 1);
                color: nth($colorSet, 2);
                &:hover {
                    background: nth($colorSet, 3);
                    color: nth($colorSet, 4);
                }
            }
        }

        $outlineColor: (
            outline-info: (#5D75F7, #fff),
            outline-success: (#5EA72B, #fff),
            outline-danger: (#F75D5D, #fff),
            outline-warning: (#FADC72, #30304B),
            outline-share: (#43B4C9, #fff),
            outline-support: (#43C981, #fff),
        );

        @each $status, $colorSet in $outlineColor {
        &.#{$status} {
            background: transparent;
            color: nth($colorSet, 1);
            border: 2px solid nth($colorSet, 1);
            &:hover {
                background: nth($colorSet, 1);
                color: nth($colorSet, 2);
            }
        }
    }
    }
</style>
