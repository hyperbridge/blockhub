<template>
    <div
        class="navigator-item"
        :class="{
            'navigator-item--first-row': !isChildren,
            'navigator-item--first': index === 0,
            'navigator-item--last': index === listLength - 1
        }"
        @mouseover="hovered = true"
        @mouseout="hovered = false"
    >
        <!-- <c-icon name="angle-right" v-if="isChildren"/> -->
        <div class="navigator-item__content">
            <span class="fa fa-angle-right"></span>
            <button
                v-if="!item.evolvesTo.length && hovered"
                class="navigator-item__btn navigator-item__btn--right"
            >
                <c-icon name="plus"/>
            </button>

            <button
                v-if="index === listLength - 1 && hovered"
                class="navigator-item__btn navigator-item__btn--bottom"
            >
                <c-icon name="plus"/>
            </button>
            <!-- {{ hovered }} hovered -->
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
    import { debouncer } from '@/mixins';

    export default {
        name: 'navigator-item',
        props: {
            item: Object,
            isChildren: Boolean,
            index: Number,
            listLength: Number
        },
        mixins: [debouncer],
        data() {
            return {
                hovered: false
            }
        },
        methods: {
            handleHover(status) {
                this.debounce(() => { this.hovered = true }, 50);
            }
        }
    }
</script>

<style lang="scss" scoped>
    // $line-color: #cacaca;
    $line-color: #a3a3a3;
    $line-size: 2px;
    %line-style {
        // border: 1px solid #4e4e4e;
        // background: #bebebe;
    }
    $margin: 30px;
    $size: 70px;
    $center: $margin + $size/2;

    .navigator-item {
        display: flex;
        position: relative;

        &:after {
            position: absolute;
            font-family: 'Font Awesome 5 Free';
            font-weight: 900;
            font-size: 15px;
            content: "\F061";
            content: "\f105";
            top: calc(#{$center} - 8.5px);
            left: $margin/2;
            color: $line-color;
        }

        &:before {
            content: "";
            position: absolute;
            height: $line-size;
            background: yellow;
            background: $line-color;
            width: $margin / 2 + 4px;
            top: $center;
            left: 0;
            z-index: -1;
            @extend %line-style !optional;
        }

    }
    .navigator-item__content {
        width: 70px;
        height: 70px;
        background: red;
        margin: 30px;
        position: relative;
        &:hover {
            .navigator-item__btn {
                display: block;
            }
        }
    }
    .navigator-item__btn {
        $btn-size: 35px;
        position: absolute;
        border: 2px dotted #fff;
        width: $btn-size;
        height: $btn-size;
        background: rgba(255,255,255,.2);
        border-radius: 50%;
        color: #fff;
        cursor: pointer;
        // display: none;
        animation: pop-in .2s ease;
        &--right {
            right: -$btn-size - 5px;
            top: calc(50% - #{$btn-size/2});
        }
        &--bottom {
            bottom: -$btn-size - 5px;
            left: calc(50% - #{$btn-size/2});
        }
        @keyframes pop-in {
            0% {
                opacity: 0;
                transform: scale(0);
            }
            60% {
                opacity: 1;
                transform: scale(1.1);
            }
            100% {
                opacity: 1;
                transform: scale(1);
            }
        }
    }
    .navigator-item__sub-navigators {
        position: relative;
        &.sub-navigators__line {
            &:before {
                position: absolute;
                content: "";
                height: calc(100% - #{$center * 2});
                top: $center;
                background: blue;
                width: $line-size;
                background: $line-color;
                @extend %line-style !optional;
            }
            &:after {
                position: absolute;
                content: "";
                height: $line-size;
                width: 30px;
                background: green;
                background: $line-color;
                left: -30px;
                top: $center;
                background: linear-gradient(to right,#fff, #{$line-color});
                box-shadow: -15px 0 30px 1px rgb(196, 227, 255);
                z-index: -1;
                @extend %line-style !optional;
            }
        }
    }

    .navigator-item--first-row {
        &:before, &:after {
            display: none;
        }
    }
</style>
