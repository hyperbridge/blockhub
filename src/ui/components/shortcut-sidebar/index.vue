<template>
    <div>
        <a class="shortcut-sidebar__grid" href="#" @click.prevent="showGrid"></a>
        <c-grid
            :center="false"
            :draggable="true"
            :sortable="true"
            :items="items"
            :cellWidth="60"
            :cellHeight="60"
            :gridWidth="200"
            @change="change"
            @remove="remove"
            @click="click"
            @sort="sort"
        >
            <template slot="cell" scope="props">
                <c-icon :color="props.item"
                    :index="props.index"
                    :with-button="true"
                    :link="props.item.link"
                    :image="props.item.image"
                    :text="props.item.text"
                    :eventKey="props.item.eventKey"
                    :eventValue="props.item.eventValue"
                    :icon="props.item.icon"
                    @remove="props.remove()" />
            </template>
        </c-grid>
    </div>
</template>


<script>
    const randomInt = (fr, to) => {
        return Math.round(fr + Math.random() * to)
    }

    const generateRGBColors = (count) => {
        return Array.apply(null, new Array(count)).map((none, i) => {
            return {
                r: randomInt(0, 255),
                g: randomInt(0, 255),
                b: randomInt(0, 255)
            }
        })
    }

    export default {
        props: {
            items: Array
        },
        components: {
            'c-grid': (resolve) => require(['@/ui/components/shortcut-grid'], resolve),
            'c-icon': (resolve) => require(['@/ui/components/shortcut-icon'], resolve)
        },
        data () {
            //let colors = generateRGBColors(5)
            return {
                selected: null
            }
        },
        methods: {
            showGrid() {

            },
            click ({ items, index }) {
                let value = items.find(v => v.index === index)
                this.selected = value.item
                console.log(this.selected)
            },
            change (event) {
                console.log('change', event)
            },
            remove (event) {
                this.$store.commit('application/removeShortcut', event.index)
            },
            sort (event) {
                console.log('sort', event)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .shortcut-sidebar__grid {
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