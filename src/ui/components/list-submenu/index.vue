<template>
    <ul class="list-container">
        <li
            v-if="subItem"
            @click="subItem = null"
            class="item__link-opened"
        >
            {{ subItem }}
            <c-icon name="arrow-left"/>
        </li>
        <li
            v-if="!subItem"
            v-for="(subList, title) in items"
            :key="title+2"
            @click="subItem = title"
            class="item__link"
        >
            {{ title }}
        </li>
        <li
            v-for="(item, title) in items[subItem]"
            :key="item.id"
            v-else
            class="item__link"
        >
            {{ title }} <span >{{ items[subItem][title].length }}</span>
        </li>
    </ul>
</template>

<script>
    export default {
        props: ['items'],
        data() {
            return {
                subItem: null
            }
        }
    }
</script>

<style lang="scss" scoped>
    .list-container {
        margin: 0;
        padding: 0;
        max-height: 160px;
        list-style-type: none;
        overflow-y: auto;
        background: rgba(36, 37, 59, .8);
        background: #27283D;
        border-radius: 4px;
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
</style>
