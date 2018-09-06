<template>
    <span class="c-btn-arrows">
        <i
            class="fas fa-caret-up"
            :class="[{ 'up': colored }, size]"
            @click="$emit('clickUp')"
        ></i>
        <slot/>
        <i
            class="fas fa-caret-down"
            :class="[{ 'down': colored }, size]"
            @click="$emit('clickDown')"
        ></i>
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

