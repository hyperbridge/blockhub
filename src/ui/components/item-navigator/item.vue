<template>
    <div
        class="navigator-item"
        :class="{
            'navigator-item--first-row': !isChildren,
            'navigator-item--first': index === 0,
            'navigator-item--last': index === listLength - 1
        }"
    >
        <div class="navigator-item__content">
            {{ item.id }}
            {{ isChildren && 'child' }}
            {{ index }} {{ listLength }} {{ item.evolvesTo.length }}
        </div>
        <div
            class="navigator-item__sub-navigators"
            :class="{ 'sub-navigators__line': item.evolvesTo.length }"
        >
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

        &:after {
            position: absolute;
            font-family: 'Font Awesome 5 Free';
            font-weight: 900;
            font-size: 15px;
            content: "\F061";
            left: 8px;
            // top: calc(65px - 10px);
            top: 55px;
            // top: 0;
            // left: -30px;
        }


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
    .navigator-item__sub-navigators {
        position: relative;
        &.sub-navigators__line {
            &:before {
                position: absolute;
                content: "";
                width: 2px;
                height: calc(100% - 120px);
                top: 60px;
                background: blue;
            }
            &:after {
                position: absolute;
                content: "";
                height: 2px;
                width: 30px;
                background: green;
                left: -30px;
                top: 60px;
                box-shadow: -15px 0 30px 1px rgb(49, 156, 255);
            }
        }
    }

    .navigator-item--first-row {
        &:before, &:after {
            display: none;
        }
    }
</style>
