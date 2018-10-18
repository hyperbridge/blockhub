<template>
    <div class="carousel-3d">
        <c-icon name="arrow-left" @click="changeItem(-1)"/>
        <div class="carousel-3d__content">
            <slot :items="visibleItems"/>
        </div>
        <c-icon name="arrow-right" @click="changeItem(1)"/>
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
                focusItem: 1
            }
        },
        methods: {
            changeItem(dir) {
                const { items, focusItem } = this;

                if (dir) {
                    if (focusItem === items.length - 1) {
                        this.focusItem = 1;
                    } else {
                        this.focusItem++;
                    }
                } else {

                }
            }
        },
        computed: {
            visibleItems() {
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
            activeItems() {
                const { items, focusItem, limitTo } = this;
                const { length } = items;

                let focused = focusItem % length;
                if (focused < 0) focused *= -1;

                const itemsPerSide = (limitTo - 1) / 2;

                const start = focused - itemsPerSide < 0
                    ? assets.slice(length + focused - itemsPerSide, length)
                    : assets.slice(focused - itemsPerSide, focused);

                const end = focused + 1 >= length
                    ? assets.slice(0, length - focused)
                    : assets.slice(focused + 1, focused + itemsPerSide + 1)  ;

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
