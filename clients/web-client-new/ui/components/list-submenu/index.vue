<template>
    <ul
        class="list-container"
        :class="{ 'list-container--parent': isParent }">
        <li
            v-for="(list, title, index) in items"
            :key="index">
            <slot name="item">
                <a
                    class="item__link"
                    :class="{
                        'item_link--active': title > 100
                    }"
                    @click="itemClick(title, list[0])">
                    <slot :list="list">
                        <div class="item__container">
                            <span>
                                <slot name="item-content">
                                    <c-icon
                                        name="arrow-right"
                                        class="arrow"
                                        :class="{ 'arrow--opened': title === subItem }" />
                                    <span
                                        class="title"
                                        :class="{ 'title--opened': title === subItem }">
                                        {{ title }}
                                    </span>
                                </slot>
                            </span>
                            <c-tag-count :number="listLength(list)" />
                        </div>
                    </slot>
                </a>
            </slot>
            <transition name="slide-in-top">
                <slot
                    v-if="subItem === title"
                    name="sublist"
                    :sublist="list" />
            </transition>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'ListSubmenu',
    components: {
        'c-tag-count': () => import('~/components/tags/count').then(m => m.default || m)
    },
    props: {
        items: [Object, Array],
        isParent: Boolean
    },
    data() {
        return {
            subItem: null
        }
    },
    methods: {
        itemClick(title, item) {
            this.$emit('click', item)
            if (this.subItem && this.subItem === title) this.subItem = null
            else this.subItem = title
        },
        listLength(list) {
            return Object.keys(list).length
            const { length } = Object.keys(list)
            return length > 0 ? length : 0
        }
    }
}
</script>

<style lang="scss" scoped>
    .list-container {
        margin: 0;
        max-height: 250px;
        list-style-type: none;
        overflow-y: auto;
        background: rgba(39, 40, 61, .8);
        border-radius: 4px;
        padding: 0;
        &:not(.list-container--parent) {
            margin-left: 5px;
        }
        &.list-container--parent {
            height: 250px;
        }
    }
    /deep/ .item__link {
        display: block;
        padding: 10px;
        cursor: pointer;
        user-select: none;
        color: rgba(255,255,255,.1);
        &:hover:not(.item_link--active):not(.item__link-opened) {
            background: rgba(255,255,255,.025);
        }
    }
    .item__link--opened {
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
            transform: translateX(10px);
        }
    }
    .arrow {
        transition: transform .2s ease;
        transform: translateX(-25px);
        &.arrow--opened {
            transform: translateX(5px);
        }
    }

    .item__container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>
