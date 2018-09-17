<template>
    <span class="c-btn-arrows">
        <c-icon
            name="caret-up"
            :class="[{ 'up': colored }, size]"
            @click="$emit('clickUp')"
        />
        <slot/>
        <c-icon
            name="caret-down"
            :class="[{ 'down': colored }, size]"
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
            default: 'md'
        },
        colored: Boolean
    }
}
</script>

<style lang="scss" scoped>
    .c-btn-arrows {
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-width: 35px;
        .fas {
            cursor: pointer;
            &.sm {
                font-size: 14px;
            }
            &.md {
                font-size: 18px;
            }
            &.lg {
                font-size: 22px;
            }
            &.xl {
                font-size: 26px;
            }
        }
        .fas:not(:hover) {
            color: rgba(255,255,255,.6);
        }
        .up:hover {
            color: #43C981;
        }
        .down:hover {
            color: #F75D5D;
        }
    }
</style>

