<template>
    <div
        class="option-tag"
        :class="[
            isChildren ? 'option-tag--shadow' : 'option-tag--margin',
            { 'option-tag--light': isParent }
        ]">
        <span v-if="title"
              class="option-tag__title">
            {{ title }}
        </span>
        {{ text }}
        <slot />
        <c-icon
            v-if="!hideButton"
            name="times-circle"
            class="option-tag__del-btn"
            @click="$emit('delete')" />
    </div>
</template>

<script>
export default {
    name: 'OptionTag',
    props: {
        title: [String, Number],
        text: [String, Number],
        isParent: {
            type: Boolean,
            default() {
                return Boolean(this.$slots.default && this.$slots.default.length)
            }
        },
        isChildren: Boolean,
        hideButton: Boolean
    }
}
</script>

<style lang="scss" scoped>
    .option-tag {
        color: #30304B;
        background: #fae17d;
        border-radius: 8px;
        padding: 5px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        font-weight: bold;
        &:not(:last-child) {
            margin-right: 8px;
        }
        &.option-tag--margin {
            margin-bottom: 8px;
        }
        &.option-tag--shadow {
            box-shadow: 0 0 10px 0 rgba(1,1,1,.5);
            margin: 4px 8px 4px 0;
        }
        &.option-tag--light {
            color: #fff;
            background: rgba(255,255,255,.15);
            > .option-tag__del-btn:hover {
                color: rgba(255, 255, 255, .4);
            }
        }
    }
    .option-tag__title {
        margin-right: 5px;
    }
    .option-tag__del-btn {
        margin-left: 5px;
        font-size: 16px;
        cursor: pointer;
        &:hover {
            color: #45456c;
        }
    }
</style>
