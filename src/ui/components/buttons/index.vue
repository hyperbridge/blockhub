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
        style="font-size: 14px"
        :style="{ 'font-size': fontSize + 'px' }"
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
            },
            fontSize: {
                type: String
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
    @mixin gradient( $first, $second ) {
        background: $first; /* Old browsers */
        background: -moz-linear-gradient(top, $first 0%, $second 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(top, $first 0%, $second 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to bottom, $first 0%, $second 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='$first', endColorstr='$second', GradientType=0); /* IE6-9 */
    }

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
        transition: all 200ms ease-in-out;
        span{
            white-space: nowrap;
        }
        &.plain {
            box-shadow: unset;
            margin: 0 2px;
            padding: 0;
        }
        &.underline {
            box-shadow: unset;
            padding: 0 !important;
            margin: 0;
            color: #fece00 !important;
            border-bottom: 1px solid #fece00;
            border-radius: 0;
            font-weight: normal;
            background: none !important;

            &:hover {
                background: none !important;
                color: #fff !important;
                border-bottom: 1px solid #fff;
            }
        }
        &.no-shadow {
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
            margin-right: 5px;
            width: auto;
            height: auto;
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
        &.c-btn-xs {
            padding: 0px 5px;
            font-size: 12px;
        }
        &.c-btn-sm {
            padding: 1px 5px;
            font-size: 13px;
        }
        &.c-btn-md {
            padding: 3px 10px;
            font-size: 16px;
        }
        &.c-btn-lg {
            padding: 5px 13px;
            font-size: 18px;
            i {
                margin-right: 10px;
            }
        }
        &.c-btn-xl {
            padding: 0px 15px;
            line-height: 40px;
            font-size: 18px;
            i {
                margin-right: 10px;
            }
        }

        $statusColors: (
            default: (#fff, #3D3E5D, #3D3E5D, #A2A3BE),
            plain: (transparent, #fff, transparent, #ddd),
            info: (#5D75F7, #fff, #5165d5, #30304B),
            success: (#5EA72B, #fff, #559727, #30304B),
            danger: (#F75D5D, #fff, #de5454, #30304B),
            warning: (#FADC72, #3D3E5D, #efd26d, #32334c),
            share: (#43B4C9, #fff, #3b9fb1, #32334c),
            support: (#43C981, #fff, #3db876, #30304B),
            dark: (#3D3E5D, #fff, #2e2f47, #fff),
        );

        @each $status, $colorSet in $statusColors {
            &.#{$status} {
                background-color: nth($colorSet, 1);
                color: nth($colorSet, 2);
                &:not([disabled]):hover {
                    background: nth($colorSet, 3);
                    color: nth($colorSet, 4);
                    text-decoration: none;
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
            outline-white: (#fff, #000),
        );

        @each $status, $colorSet in $outlineColor {
            &.#{$status} {
                background: transparent;
                color: nth($colorSet, 1);
                border: 2px solid nth($colorSet, 1);
                &:not([disabled]):hover {
                    background: nth($colorSet, 1);
                    color: nth($colorSet, 2);
                }
            }

            $gradientColor: (
                gradient-info: (#42a1ec, #0070c9, #2189db, #fff),
                gradient-success: (#5EA72B, #4c8027, #579b28, #fff),
                gradient-danger: (#e3c868, #b8a02a, #d3ba61, #fff),
                gradient-warning: (rgba(174,52,63,1), rgba(141,42,51,1), rgb(186, 56, 67), #fff),
            );
            @each $status, $colorSet in $gradientColor {
                &.#{$status} {
                    @include gradient(nth($colorSet, 1), nth($colorSet, 2));
                    border: 2px solid nth($colorSet, 3);
                    color: nth($colorSet, 4);
                    &:not([disabled]):hover {
                        background: nth($colorSet, 3);
                        color: nth($colorSet, 4);
                    }
                }

                &[disabled] {
                    background: #bfbfbf !important;
                }

                &.disabled {
                    background: #bfbfbf !important;
                }
            }
        }
    }
</style>
