<template>
    <div style="height: 100%;">
        <a class="shortcut-sidebar__grid" href="#" @click.prevent="showGrid" hidden></a>
        <c-grid
            :center="false"
            :draggable="true"
            :sortable="true"
            :items="items"
            :fixedItems="fixedItems"
            :cellWidth="50"
            :cellHeight="65"
            :gridWidth="200"
            @change="change"
            @remove="remove"
            @click="click"
            @sort="sort"
        >
            <template slot="cell" scope="props">
                <c-icon :color="props.item"
                        :index="props.index"
                        :withButton="true"
                        :image="props.item.image"
                        :text="props.item.text"
                        :link="props.item.link"
                        :eventKey="props.item.eventKey"
                        :eventValue="props.item.eventValue"
                        :textColor="props.item.textColor"
                        :icon="props.item.icon"
                        :removable="props.item.removable"
                        :unread="props.item.unread"
                        :percent="props.item.percent"
                        :active="props.item.active"
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
                selected: null,
                fixedItems: [
                    {
                        "r": null,
                        "g": null,
                        "b": null,
                        "image": "/static/img/icons/twitch.png",
                        "eventKey": "application/activateModal",
                        "eventValue": "coming-soon",
                        "unread": false,
                        "text": "Go to Twitch",
                        "sort": 1,
                        "removable": false
                    },
                    {
                        "r": null,
                        "g": null,
                        "b": null,
                        "image": "/static/img/icons/discord.png",
                        "eventKey": "application/activateModal",
                        "eventValue": "coming-soon",
                        "unread": false,
                        "text": "Go to Discord",
                        "sort": 2,
                        "removable": false
                    },
                    {
                        "r": null,
                        "g": null,
                        "b": null,
                        "image": "/static/img/icons/steam.png",
                        "eventKey": "application/activateModal",
                        "eventValue": "coming-soon",
                        "unread": false,
                        "text": "Go to Steam",
                        "sort": 3,
                        "removable": false
                    },
                    {
                        "r": null,
                        "g": null,
                        "b": null,
                        "image": "/static/img/icons/instagram.png",
                        "eventKey": "application/activateModal",
                        "eventValue": "coming-soon",
                        "unread": false,
                        "text": "Go to Instagram",
                        "sort": 5,
                        "removable": false
                    },
                    {
                        "r": null,
                        "g": null,
                        "b": null,
                        "image": "/static/img/icons/youtube.png",
                        "eventKey": "application/activateModal",
                        "eventValue": "coming-soon",
                        "unread": false,
                        "text": "Go to Youtube",
                        "sort": 6,
                        "removable": false
                    }
                ]
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
        border: 1px dashed rgba(255, 255, 255, 0.4);
        background-image: url(/static/img/icons/grid.png);
        background-size: 70%;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        margin-top: 10px;
        width: 50px;
        height: 50px;
        display: block;
        margin-bottom: 10px;
        border-radius: 10px;
        box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.07);
    }
    .fixed-shortcuts{
        margin-top: auto;
    }
</style>
