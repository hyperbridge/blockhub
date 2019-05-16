<template>
    <span class="c-button-arrows">
        <c-icon
            name="caret-up"
            :class="[
                { 'up': colored },
                { 'active' : activeUp === true },
                size
            ]"
            @click="$emit('clickUp')"
        />
        <slot/>
        <c-icon
            name="caret-down"
            :class="[
                { 'down': colored },
                { 'active' : activeUp === false },
                size
            ]"
            @click="$emit('clickDown')"
        />
    </span>
</template>

<script>
export default {
    name: 'button-arrows',
    props: {
        size: {
            type: String,
            default: 'md',
            validator(val) {
                return ['sm', 'md', 'lg', 'xl'].includes(val);
            }
        },
        colored: Boolean,
        activeUp: {
            type: Boolean,
            default: undefined
        }
    }
}
</script>

<style lang="scss" scoped>
    .c-button-arrows {
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-width: 15px;
        .fas {
            cursor: pointer;
            &.sm {
                font-size: 14px;
                line-height: 10px;
            }
            &.md {
                font-size: 18px;
                line-height: 13px;
            }
            &.lg {
                font-size: 22px;
                line-height: 12px;
            }
            &.xl {
                font-size: 26px;
                line-height: 14px;
            }
        }
        .fas:not(:hover):not(.active) {
            color: rgba(255,255,255,.6);
        }
        .active:before {
            text-shadow: 0 0 5px rgba(255,255,255, .85);
        }
        .up:hover {
            color: #43C981;
        }
        .down:hover {
            color: #F75D5D;
        }
    }
</style>

