<template>
    <div class="tooltip-universal__wrapper">
        <div
            class="tooltip-universal__content"
            @mouseover="show_tooltip = true"
            @mouseout="show_tooltip = false"
        >
            <slot/>
            <i v-if="!icon_hide" class="fas fa-question-circle"></i>
        </div>
        <div class="tooltip-universal" :class="position" v-if="show_tooltip">
            <slot name="tooltip">
                <div class="tooltip-universal__default" :class="[position, theme, default_class]">
                    <h4 v-if="title">{{ title }}</h4>
                    {{ text }}
                </div>
            </slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'tooltip-universal',
    props: {
        position: {
            type: String,
            default: 'top',
            validator(val) {
                return ['top', 'right', 'bottom', 'left'].includes(val);
            }
        },
        text: String,
        title: String,
        theme: {
            type: String,
            default: 'light',
            validator(val) {
                return ['light', 'dark'].includes(val);
            }
        },
        icon_hide: Boolean,
        default_class: String
    },
    data() {
        return {
            show_tooltip: false
        }
    }
}
</script>

<style lang="scss" scoped>
    .tooltip-universal__content {
        position: relative;
        .fa-question-circle {
            position: absolute;
            font-size: 10px;
            top: 0;
            right: -12px;
        }
    }

    .tooltip-universal__wrapper {
        position: relative;
        display: inline-flex;
    }

    $distance: 10px;
    $triangle: 15px;
    $triangleHalf: $triangle / 2;
    $triangleDist: $triangleHalf + 2;

    .tooltip-universal {
        position: absolute;
        z-index: 999;
        animation: slide-fade .15s ease;
        &.top {
            bottom: calc(100% + #{$distance});
        }
        &.right {
            left: calc(100% + #{$distance});
        }
        &.bottom {
            top: calc(100% + #{$distance});
        }
        &.left {
            right: calc(100% + #{$distance});
        }
    }

    .tooltip-universal__default {
        padding: 10px;
        border-radius: 8px;
        box-shadow: 0 0 5px rgba(28, 32, 50, .6);
        min-width: 140px;
        h4 {
            margin-top: 0;
            margin-bottom: 5px;
        }
        &.dark {
            background-color: #1c2032;
            &:before {
                background-color: #1C2032;
            }
        }
        &.light {
            background-color: #5D75F7;
            &:before {
                background-color: #5D75F7;
            }
        }
        &.top:before {
            bottom: $triangleHalf * -1;
            left: $triangleDist;
        }
        &.right:before {
            left: $triangleHalf * -1;
            top: $triangleDist;
        }
        &.bottom:before {
            top: $triangleHalf * -1;
            left: $triangleDist;
        }
        &.left:before {
            right: $triangleHalf * -1;
            top: $triangleDist;
        }
        &:before {
            width: $triangle;
            height: $triangle;
            position: absolute;
            content: "";
            transform: rotate(45deg);
        }
    }

    @keyframes slide-fade {
        from {
            opacity: 0;
            transform: translateY(-5px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>

