<template>
    <div
        class="navigator-item"
        :class="{
            'navigator-item--first': index === 0,
            'navigator-item--last': index === listLength - 1
        }"
    >
        <div class="navigator-item__content">
            {{ item.id }}
            {{ isChildren && 'child' }}
            {{ index }} {{ listLength }} {{ item.evolvesTo.length }}
        </div>
        <div class="navigator-item__sub-navigators">
            <navigator-item
                v-for="(subItem, index) in item.evolvesTo"
                :index="index"
                :key="index"
                :item="subItem"
                :isChildren="true"
                :listLength="item.evolvesTo.length"
            />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'navigator-item',
        props: {
            item: Object,
            isChildren: Boolean,
            index: Number,
            listLength: Number
        }
    }
</script>

<style lang="scss" scoped>
    .navigator-item {
        display: flex;
        position: relative;

        &:before {
            content: "";
            position: absolute;
            width: 2px;
            background: yellow;
            height: 100%;
            left: 30px + 70px/2;
            z-index: -1;
        }

        &.navigator-item--first:before {
            height: 70px;
            bottom: 0;
        }

        &.navigator-item--last:before {
            height: 70px;
        }

    }
    .navigator-item__content {
        width: 70px;
        height: 70px;
        background: red;
        margin: 30px;
    }
</style>
