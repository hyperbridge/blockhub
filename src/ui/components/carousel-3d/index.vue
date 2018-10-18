<template>
    <div class="carousel-3d">
        <c-icon name="arrow-left" @click="focusedItem--"/>
        <div class="carousel-3d__content">
            <slot :items="visibleItems"/>
        </div>
        <c-icon name="arrow-right" @click="focusedItem++"/>
    </div>
</template>

<script>
    export default {
        props: {
            limitTo: {
                type: Number,
                default: 3
            },
            items: Array
        },
        data() {
            return {
                focusedItem: 1
            }
        },
        methods: {
        },
        computed: {
            visItemsOld() {
                return 4;
                const { items, focusItem } = this;
                const visible = [];

                visible.push(items[focustItem - 1]);
                visible.push(items[focusItem]);
                visible.push(items[focusItem + 1]);

                return items.slice(focusItem - 1, focusItem + 2);
            },
            focusItems() {
                return 4;
                const slicer = (array, start = 0, end = array.length) => array
                    .filter((item, index) => {
                        const { length } = array;

                        const started = start >= 0
                        ? start
                        : array[length + start]

                        if (start < 0) return index >= started || index <= end;
                        else return index >= started && index <= end;
                    });

                const { focusItem } = this;
                const focused = focusItem
                return [focusItem, focusItem + 1, focusItem + 2];
            },
            visibleItems() {
                const { items, focusedItem, limitTo } = this;
                const { length } = items;

                let focused = focusedItem % length;
                if (focused < 0) focused = length + focused;

                const itemsPerSide = (limitTo - 1) / 2;

                const start = focused - itemsPerSide < 0
                    ? items.slice(length - itemsPerSide, length)
                    : items.slice(focused - itemsPerSide, focused)

                const end = focused + 1 === length
                    ? items.slice(0, itemsPerSide)
                    : items.slice(focused + 1, focused + 1 + itemsPerSide)

                return [...start, items[focused], ...end];
            }
        }
    }
</script>

<style lang="scss" scoped>
    .carousel-3d {
        display: flex;
        align-items: center;
        // justify-content:
    }
    .carousel-3d__content {
        display: flex;
    }
</style>
