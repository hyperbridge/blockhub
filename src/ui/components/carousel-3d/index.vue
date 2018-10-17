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
                const { items, focusItem } = this;
                const visible = [];

                // visible.push(items[focustItem - 1])

                return items.slice(focusItem - 1, focusItem + 2);
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
