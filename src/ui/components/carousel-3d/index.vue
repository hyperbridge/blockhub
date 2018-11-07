<template>
    <div class="carousel-3d">
        <div class="carousel-3d__content">
            <slot :items="visibleItems" :css="css"/>
        </div>
        <template v-if="items.length > limitTo">
            <c-icon
                name="arrow-circle-left"
                class="carousel-3d__btn carousel-3d__btn--left"
                @click="focusedItem--"
            />
            <c-icon
                name="arrow-circle-right"
                class="carousel-3d__btn carousel-3d__btn--right"
                @click="focusedItem++"
            />
        </template>
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
            },
            itemsV2() {
                return this.items.map(item => ({
                    ...item,
                    visible: !!this.visibleItems.filter(vitem => vitem.id === item.id).length
                }));
            },
            css() {
                const { visibleItems } = this;
                const { length } = visibleItems;
                const midIndex = (length - 1) / 2;

                return visibleItems.map((item, index) => {
                    let className = 'carousel-3d__item--';
                    if (index < midIndex) className += midIndex - index + ' left';
                    else if (index === midIndex) className += 'main';
                    else className += index - midIndex + ' right';

                    return 'carousel-3d__item ' + className;
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .carousel-3d {
        display: flex;
        align-items: center;
    }

    .carousel-3d__btn {
        cursor: pointer;
        font-size: 35px;
        color: rgba(255,255,255,.6);
        &--left {
            order: -1;
        }
    }

    /deep/.carousel-3d__item {
        // position: absolute !important;
        // transition: transform .2s ease;
        &.left {
            // transform: translateX(-50%);
        }
        &.right {
            // transform: translateX(50%);
        }
        &--main {
            // transform:
        }
        &--1 {
            // animation: fade-in .2s ease;
            transform: scale(.9);
        }
        &--2 {
            // animation: fade-in .2s ease;
            transform: scale(.8);
        }
        @keyframes fade-in {
            0% { opacity: 0; }
            100% { opacity: 1; }
        }
    }
    /deep/.carousel-3d__content {
        user-select: none;
        width: 100%;
        display: flex;
        justify-content: center;
        height: 100%;
    }

    /deep/.carousel-3d__transition {
        &-enter, &-leave-to {
            opacity: 0;
            transform: translateY(30px);
        }
        &-leave-active {
            position: absolute;
            width: 100%;
        }
    }

    .assets-list-enter, .assets-list-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }
    .assets-list-leave-active {
        position: absolute;
        width: calc(100% - 30px);
    }
</style>

