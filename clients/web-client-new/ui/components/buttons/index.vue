<template>
    <component
        :is="tag"
        :href="href"
        :target="target"
        :class="[
            'c-button', 'c-button--' + size, status,
            { 'swap-direction': swapDirection },
            { 'full': full },
            { 'centered': centered },
            { 'doubled': doubled },
            { 'no-shadow' : !shadow }
        ]"
        style="font-size: 14px"
        :style="{ 'font-size': fontSize + 'px' }"
        @mouseover="mouseover"
        @click="click">
        <i
            v-if="(icon || injectFilter.length) && !iconHide"
            class="icon fas"
            :class="[
                icon ? 'fa-' + icon : injectFilter,
                swapOrder ? 'swap-order' : ''
            ]" />
        <router-link v-if="to"
                     tag="span"
                     :to="to">
            <slot />
        </router-link>
        <slot v-if="!to" />
    </component>
</template>

<script>
import { Howl } from 'howler'

export default {
    props: {
        tag: {
            type: String,
            default: 'a'
        },
        to: {
            type: String,
            default: ''
        },
        href: {
            type: String,
            default: 'javascript:;'
        },
        target: {
            type: String,
            default: '_self'
        },
        icon: String,
        iconHide: Boolean,
        status: {
            type: String,
            default: 'default'
        },
        swapOrder: Boolean,
        swapDirection: Boolean,
        doubled: Boolean,
        full: {
            type: Boolean,
            default: false
        },
        centered: {
            type: Boolean,
            default: false
        },
        reload: {
            type: Boolean,
            default: false
        },
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
        injectFilter() {
            return this.$options.filters.statusIcon(this.status)
        }
    },
    methods: {
        mouseover() {
            if (!this.$store.state.application.settings.client.sounds || !this.$store.state.application.settings.client.ui_interaction_sounds) return

            const sound = new Howl({
                src: ['/sounds/information.mp3']
            })

            sound.play()
        },
        click() {
            if (this.reload) {
                window.location = window.location.origin + this.to
                return
            }

            this.$store.dispatch('application/setEditorMode', 'viewing')
            // this.$store.commit('application/activateModal', null)

            if (this.$store.state.application.settings.client.sounds && this.$store.state.application.settings.client.ui_interaction_sounds) {
                const sound = new Howl({
                    src: ['/sounds/ask.mp3']
                })

                sound.play()
            }

            this.$emit('click')
        }
    }
}
</script>

<style lang="scss" scoped>
    @mixin gradient($first, $second) {
        background-image: $first !important; /* Old browsers */
        background-image: linear-gradient(to left top, $first 0%, $second 100%) !important; /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    }

    .c-button {
        display: inline-flex;
        vertical-align: top;
        position: relative;
        align-items: center;
        padding: 0px 8px;
        line-height: 24px;
        border-style: none;
        border-radius: 2px;
        text-decoration: none;
        cursor: pointer;
        font-weight: bold;
        justify-content: center;
        /*text-shadow: 0 0 2px rgba(0, 0, 0, 0.1);*/
        transition: all 200ms ease-in-out;
        span{
            white-space: nowrap;
            width: 100%;
            height: 100%;
        }
        &.full {
            display: block;
            width: 100%;
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
        &.centered {
            text-align: center;
        }
        &.c-button--xs {
            padding: 0px 5px;
            font-size: 12px;
            line-height: 22px;
        }
        &.c-button--sm {
            padding: 1px 5px;
            font-size: 13px;
            min-height: 20px;
            line-height: 20px;
        }
        &.c-button--md {
            padding: 3px 10px;
            font-size: 16px;
        }
        &.c-button--lg {
            padding: 5px 13px;
            font-size: 18px;
            i {
                margin-right: 10px;
            }
        }
        &.c-button--xl {
            padding: 0px 15px;
            line-height: 40px;
            font-size: 18px;
            i {
                margin-right: 10px;
            }
        }

        &.doubled {
            padding: 3px 11px;

            &:before {
                content: "";
                position: absolute;
                display: block;
                top: 4px;
                right: 4px;
                bottom: 4px;
                left: 4px;
                border: 1px solid;
                border-radius: 2px;
                -webkit-transition: .3s background-color,.3s border-color;
                -o-transition: .3s background-color,.3s border-color;
                transition: .3s background-color,.3s border-color;
                z-index: 1;
            }
        }

        &.none {
            font-weight: normal;
            justify-content: left;
            color: inherit;
            font-size: inherit;
            line-height: inherit;
        }

        /* background color, text color, hover background color, hover text color */
        $statusColors: (
            default: (#fff, #3D3E5D, #3D3E5D, #A2A3BE),
            success: (#5EA72B, #fff, #559727, #30304B),
            support: (#43C981, #fff, #3db876, #30304B),
            info: (#5D75F7, #fff, #5165d5, #30304B),
            share: (#43B4C9, #fff, #3b9fb1, #32334c),
            warning: (#FADC72, #3D3E5D, #efd26d, #32334c),
            danger: (#F75D5D, #fff, #de5454, #30304B),
            dark: (#3D3E5D, #fff, #2e2f47, #fff),
            verydark: (rgba(14,14,14,.9), #fff, rgba(14,14,14,.9), #fff),
            lightpurple: (rgba(68, 67, 95, 0.9), #fff, rgba(68, 67, 95, 0.9), #fff),
            plain: (transparent, #fff, transparent, #ddd),
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
                border: 1px solid nth($colorSet, 1);
                &:not([disabled]):hover {
                    background: nth($colorSet, 1);
                    color: nth($colorSet, 2);
                }
            }
        }

        $gradientColor: (
            gradient-info: (#346196, rgba(161,202,249,0), #96bce8, #2189db, #fff),
            gradient-success: (#447f53, rgba(161, 249, 192, 0), #93e5a8, #579b28, #fff),
            gradient-danger: (#79610d, rgba(161,202,249,0), #f8f9a1, #d3ba61, #fff),
            gradient-warning: (rgba(141,42,51,1), rgba(161,202,249,0), #f9a1a1, rgb(186, 56, 67), #fff),
        );

        @each $status, $colorSet in $gradientColor {
            &.#{$status} {
                background: nth($colorSet, 1) !important;
                @include gradient(nth($colorSet, 2), nth($colorSet, 3));
                /*border: 2px solid nth($colorSet, 3);*/
                border: 0 none;
                color: nth($colorSet, 5);
                &:not([disabled]):hover {
                    /*background: nth($colorSet, 4);
                    color: nth($colorSet, 5);*/
                    background: #333 !important;
                    @include gradient(nth($colorSet, 2), nth($colorSet, 3));
                }
            }
        }

        &[disabled], &.disabled {
            background: #bfbfbf !important;
        }

        $opacityColor: (
            opacity-info: (#0194ef, rgba(1,148,239,.4), #fff),
            opacity-success: (#1bb934, rgba(27,185,52,.4), #fff),
            opacity-danger: (#ffc02a, rgba(255,192,42,.4), #fff),
            opacity-warning: (#e1112c, rgba(225,17,44,.4), #fff),
        );

        @each $status, $colorSet in $opacityColor {
            &.#{$status} {
                background: nth($colorSet, 2);
                color: nth($colorSet, 3);
                border: 1px solid nth($colorSet, 1);
                &:not([disabled]):hover {
                    background: nth($colorSet, 1);
                    color: nth($colorSet, 3);
                }
            }
            &[disabled], &.disabled {
                background: #bfbfbf !important;
            }
        }

        $secondColor: (
            second-info: (#0e86ca, #00aeff, #fff),
            second-success: (#189f2d, #1bb934, #fff),
            second-danger: (#d29314, #e8bd1a, #fff),
            second-warning: (#c00f26, #e1112c, #fff),
        );

        @each $status, $colorSet in $secondColor {
            &.#{$status} {
                background: nth($colorSet, 1);
                color: nth($colorSet, 3);
                border: 1px solid nth($colorSet, 2);
                border-radius: 2px;
                font-weight: 400;
                text-shadow: 1px 1px 1px #000;
                &:not([disabled]):hover {
                    background: nth($colorSet, 2);
                    color: nth($colorSet, 3);
                }
            }
            &[disabled], &.disabled {
                background: #bfbfbf !important;
            }
        }
    }
</style>
