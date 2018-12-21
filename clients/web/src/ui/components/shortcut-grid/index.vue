<template>
    <div class="c-grid-container" :style="containerStyle">
        <div class="c-grid__wrapper">
            <div class="c-grid__top position-relative" :class="{'margin-bottom-30' : hasNew}">
                <div class="c-grid" :style="gridStyle">
                    <GridItem v-for="v in list"
                              :key="v.index"
                              :index="v.index"
                              :sort="v.sort"
                              :draggable="draggable"
                              :drag-delay="dragDelay"
                              :row-count="rowCount"
                              :cell-width="cellWidth"
                              :cell-height="cellHeight"
                              :window-width="windowWidth"
                              :row-shift="rowShift"
                              @dragstart="onDragStart"
                              @dragend="onDragEnd"
                              @drag="onDrag"
                              @click="click"
                    >
                        <slot name="cell"
                              :item="v.item"
                              :index="v.index"
                              :sort="v.sort"
                              :remove="() => { removeItem(v) }"
                        >
                        </slot>
                    </GridItem>
                </div>
            </div>
            <div class="c-grid__has-new" v-if="hasNew">
                new <i class="fas fa-long-arrow-alt-down"></i>
            </div>
            <div class="c-grid__bottom position-relative">
                <div class="c-grid__bottom-divider">
                </div>
                <c-icon v-for="(item, index) in fixedItems"
                        :color="item"
                        :index="index"
                        :with-button="true"
                        :link="item.link"
                        :image="item.image"
                        :text="item.text"
                        :eventKey="item.eventKey"
                        :eventValue="item.eventValue"
                        :icon="item.icon"
                        :removable="item.removable"
                        :percent="item.percent"
                        :active="item.active"
                        class="margin-bottom-10 border-none"
                        @remove="remove()"/>
            </div>
        </div>
    </div>
</template>

<script>
    import {windowSize} from '@/mixins'
    import GridItem from '@/ui/components/shortcut-grid-item'

    export default {
        mixins: [windowSize],
        components: {
            GridItem,
            'c-icon': (resolve) => require(['@/ui/components/shortcut-icon'], resolve)
        },
        props: {
            items: {
                type: Array,
                default: () => []
            },
            fixedItems: {
                type: Array,
                default: () => []
            },
            gridWidth: {
                type: Number,
                default: -1
            },
            cellWidth: {
                type: Number,
                default: 80,
            },
            cellHeight: {
                type: Number,
                default: 80
            },
            draggable: {
                type: Boolean,
                default: false
            },
            dragDelay: {
                type: Number,
                default: 0
            },
            sortable: {
                type: Boolean,
                default: false
            },
            center: {
                type: Boolean,
                default: false
            },
            hasNew: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                list: [],
            }
        },
        watch: {
            items: {
                handler: function (nextItems = []) {
                    this.list = nextItems.map((item, index) => {
                        return {
                            item,
                            index: index,
                            sort: index
                        }
                    })
                },
                immediate: true
            }
        },
        computed: {
            gridResponsiveWidth() {
                return 80;
            },

            gridHeight() {
                return Math.ceil(this.items.length / this.rowCount) *
                    this.cellHeight
            },

            gridStyle() {
                return {
                    height: this.gridHeight + 'px'
                }
            },
            containerStyle() {
                return {
                    height: window.innerHeight - 60 + 'px'
                    // height: document.getElementsByClassName('page-shortcuts').clientHeight - 60 + 'px'
                }
            },

            rowCount() {
                return Math.floor(this.gridResponsiveWidth / this.cellWidth)
            },

            rowShift() {
                if (this.center) {
                    let contentWidth = this.items.length * this.cellWidth
                    let rowShift = contentWidth < this.gridResponsiveWidth
                        ? (this.gridResponsiveWidth - contentWidth) / 2
                        : (this.gridResponsiveWidth % this.cellWidth) / 2

                    return Math.floor(rowShift)
                }

                return 0
            }
        },
        methods: {
            /* Returns merged event object */
            wrapEvent(other = {}) {
                return {
                    datetime: Date.now(),
                    items: this.getListClone(),
                    ...other
                }
            },
            /* Returns sorted clone of "list" array */
            getListClone() {
                return this.list
                    .slice(0)
                    .sort((a, b) => {
                        return a.sort - b.sort
                    })
                //  .map(v => {
                //    return { ...v.item }
                //  })
            },

            removeItem({index}) {
                let removeItem = this.list.find(v => v.index === index)
                let removeItemSort = removeItem.sort

                this.list = this.list
                    .filter(v => {
                        return v.index !== index
                    })
                    .map(v => {
                        let sort = v.sort > removeItemSort
                            ? (v.sort - 1)
                            : v.sort

                        return {...v, sort}
                    })

                this.$emit('remove', this.wrapEvent({index}))
            },

            onDragStart(event) {
                this.$emit('dragstart', this.wrapEvent(event))
            },

            onDragEnd(event) {
                this.$emit('dragend', this.wrapEvent(event))
            },

            click(event) {
                this.$emit('click', this.wrapEvent(event))
            },

            onDrag(event) {
                if (this.sortable) {
                    this.sortList(event.index, event.gridPosition)
                }

                this.$emit('drag', this.wrapEvent({event}))
            },

            sortList(itemIndex, gridPosition) {
                let targetItem = this.list.find(item => item.index === itemIndex)
                let targetItemSort = targetItem.sort

                /*
                  Normalizing new grid position
                */
                gridPosition = Math.max(gridPosition, 0)
                /*
                  If you remove this line you can drag items to positions that
                  are further than items array length
                */
                gridPosition = Math.min(gridPosition, this.list.length - 1)

                if (targetItemSort !== gridPosition) {
                    this.list = this.list.map(item => {
                        if (item.index === targetItem.index) {
                            return {
                                ...item,
                                sort: gridPosition
                            }
                        }

                        const {sort} = item

                        if (targetItemSort > gridPosition) {
                            if (sort <= targetItemSort && sort >= gridPosition) {
                                return {
                                    ...item,
                                    sort: sort + 1
                                }
                            }
                        }

                        if (targetItemSort < gridPosition) {
                            if (sort >= targetItemSort && sort <= gridPosition) {
                                return {
                                    ...item,
                                    sort: sort - 1
                                }
                            }
                        }

                        return item
                    })

                    this.$emit('sort', this.wrapEvent())
                }
            }
        }
    }
</script>

<style lang="scss">
    .c-grid {
        margin-top: 10px;
        position: relative;
    }

    .c-grid__wrapper {
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: space-between;
    }

    .c-grid__top {
        margin-top: 0;
        overflow-y: auto;
        overflow-x: hidden;
        width: 60px;
        margin-bottom: 10px;
        &::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0) !important;
            border: 0 none !important;
            display: none;
        }

    }
    .c-grid__has-new{
        display: flex;
        justify-content: space-between;
        align-items: center;
        line-height: 25px;
        height: 25px;
        width: 100%;
        padding: 0 5px;
        border-radius: 5px;
        font-size: 13px;
        color: #fff;
        font-weight: bold;
        text-transform: uppercase;
        background: rgba(239, 73, 69, .8);
        margin-top: -40px;
        z-index: 3;
    }
    .c-grid__bottom{
        /*padding-bottom: 40px;*/
        margin-top: auto;
        .border-none{
            border-color: transparent;
        }
    }

    .c-grid__bottom-divider{
        width: 70%;
        height: 4px;
        margin: 15px auto;
        position: relative;
        display: block;
        background: rgba(255, 255, 255, .2);
    }

    .c-grid-container {
        display: block;
        position: relative;
        width: 50px;
        // overflow-x: visible;
        // overflow-y: auto;
        /* padding-right: 800px; margin-right: -800px; pointer-events: none; Pretty hacky way around the overflow bug */

        &::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0) !important;
            border: 0 none !important;
        }
    }

    .c-grid_add-button {
        border: 1px dashed rgba(0, 0, 0, 1);
        background-image: url(/static/img/icons/grid.png);
        background-size: 70%;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-color: #fff;
        width: 50px;
        height: 50px;
        display: block;
        margin-bottom: 10px;
        border-radius: 10px;
        box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.07);
    }
</style>
