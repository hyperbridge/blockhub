<template>
    <ul class="list-container">
        <li v-for="(item, index) in items" :key="index">
            <slot name="item" :item="item">
                <a
                    @click="$emit('click', item)"
                    class="item__link"
                    :class="{ 'item_link--active': item.selected | item.active }"
                >
                    <slot :item="item">
                        {{ item.name }}
                    </slot>
                </a>
            </slot>
            <slot name="sublist"/>
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'list',
        props: {
            items: Array
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
        background: rgba(0, 0, 0, 0.3);
        border-radius: 4px;
    }
    /deep/ .item__link {
        display: block;
        padding: 10px;
        cursor: pointer;
        user-select: none;
        &:hover:not(.item_link--active) {
            background: rgba(255,255,255,.025);
        }
    }
    /deep/ .item_link--active {
        background: rgba(1,1,1,.12);
        text-shadow: 0 0 6px rgba(255,255,255, .4);
    }
</style>
