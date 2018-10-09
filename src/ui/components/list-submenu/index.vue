<template>
    <ul class="list-container" :class="{ 'list-container--parent': isParent }">
        <li v-for="(list, title, index) in items" :key="index">
            <slot name="item">
                <a
                    @click="itemClick(title, list[0])"
                    class="item__link"
                    :class="{
                        'item_link--active': title > 100
                    }"
                >
                    <slot :list="list">
                        <c-icon
                            name="arrow-right"
                            class="arrow"
                            :class="{ 'arrow--opened': title === subItem }"
                        />
                        <span
                            class="title"
                            :class="{ 'title--opened': title === subItem }"
                        >
                            {{ title }}
                        </span>
                    </slot>
                </a>
            </slot>
            <transition name="slide-in-top">
                <slot
                    v-if="subItem === title"
                    name="sublist"
                    :sublist="list"
                />
            </transition>
        </li>
    </ul>
</template>

<script>
    export default {
        props: ['items', 'isParent'],
        data() {
            return {
                subItem: null
            }
        },
        methods: {
            itemClick(title, item) {
                this.$emit('click', item);
                if (this.subItem && this.subItem === title) this.subItem = null;
                else this.subItem = title;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .list-container {
        margin: 0;
        padding: 0;
        max-height: 250px;
        list-style-type: none;
        overflow-y: auto;
        background: rgba(36, 37, 59, .8);
        background: #27283D;
        background: rgba(39, 40, 61, .8);
        border-radius: 4px;
        margin-left: 5px;
        &.list-container--parent {
            height: 250px;
        }
    }
    /deep/ .item__link {
        display: block;
        padding: 10px;
        cursor: pointer;
        user-select: none;
        &:hover:not(.item_link--active):not(.item__link-opened) {
            background: rgba(255,255,255,.025);
        }
    }
    .item__link-opened {
        @extend .item__link;
        background: rgba(1,1,1,.1);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    /deep/ .item_link--active {
        background: rgba(1,1,1,.12);
        text-shadow: 0 0 6px rgba(255,255,255, .4);
    }

    .title {
        display: inline-block;
        transition: transform .2s ease;
        &.title--opened {
            transform: translateX(15px);
        }
    }
    .arrow {
        transition: transform .2s ease;
        transform: translateX(-30px);
        &.arrow--opened {
            transform: translateX(5px);
        }

    }

    @keyframes arrow {
        0% {
            transform: translateX(0);
            opacity: 0;
        }
        25% {
            opacity: 1;
        }
        75% {
            opacity: 1;
        }
        100% {
            transform: translateX(100px);
            opacity: 0;
        }
    }

</style>
