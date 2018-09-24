<template>
    <div
        class="option-tag"
        :class="[ isNested ? 'option-tag--shadow' : 'option-tag--margin']"
    >
        <span v-if="title" class="option-tag__title">
            {{ title }}
        </span>
        {{ text }}
        <slot/>
        <c-icon
            v-if="!hideButton"
            name="times"
            class="option-tag__del-btn"
            @click="$emit('delete')"
        />
    </div>
</template>

<script>
    export default {
        name: 'option-tag',
        props: {
            title: String,
            text: String,
            isNested: Boolean,
            hideButton: Boolean
        }
    }
</script>

<style lang="scss" scoped>
    .option-tag {
        background: rgba(251, 225, 125, .9);
        border-radius: 3px;
        padding: 5px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        color: #000;
        &:not(:last-child) {
            margin-right: 8px;
        }
        &.option-tag--margin {
            margin-bottom: 8px;
        }
        &.option-tag--shadow {
            box-shadow: 0 0 10px 0 rgba(1,1,1,.3);
            margin: 4px 8px 4px 0;
        }
    }
    .option-tag__title {
        margin-right: 7px;
        font-weight: 500;
    }
    .option-tag__del-btn {
        background: rgba(1,1,1,.4);
        color: #fff;
        margin-left: 6px;
        width: 18px;
        height: 18px;
        cursor: pointer;
        border-radius: 50%;
        position: relative;
        &:hover {
            background: rgba(1,1,1,.6);
        }
        &:before {
            position: absolute;
            top: 3px;
            left: 4.5px;
        }
    }
</style>
