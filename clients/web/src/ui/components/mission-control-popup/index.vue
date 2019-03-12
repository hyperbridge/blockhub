<template>
    <c-basic-popup :activated="activated" @close="activated = false">

        <template slot="body">
            <div class="c-grid-container">
                <div class="c-grid__wrapper">
                    <div class="c-grid__top position-relative">
                        <div class="c-grid">
                            <c-icon v-for="(item, index) in items"
                                :color="item"
                                :key="index"
                                :index="index"
                                :withButton="true"
                                :href="item.href"
                                :to="item.to"
                                :image="item.image"
                                :text="item.text"
                                :eventKey="item.eventKey"
                                :eventValue="item.eventValue"
                                :textColor="item.textColor"
                                :icon="item.icon"
                                :unread="item.unread"
                                :removable="item.removable"
                                :percent="item.percent"
                                :active="item.active"
                                class="margin-bottom-10 border-none"
                                style="display: inline-block; margin-right: 10px;"
                                @remove="remove()" />
                        </div>
                    </div>
                </div>
            </div>
        </template>

    </c-basic-popup>
</template>

<script>
    export default {
        components: {
            'c-icon': (resolve) => require(['@/ui/components/shortcut-icon'], resolve),
            'c-basic-popup': (resolve) => require(['@/ui/components/popups/basic'], resolve),
        },
        props: {
            activated: Boolean,
        },
        data() {
            return {
                items: [
                    {
                        "r": null,
                        "g": null,
                        "b": null,
                        "image": "/static/img/icons/twitch.png",
                        "eventKey": "application/activateModal",
                        "eventValue": "connect-network",
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
                        "eventValue": "connect-network",
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
                        "eventValue": "connect-network",
                        "unread": false,
                        "text": "Go to BlockHub",
                        "sort": 3,
                        "removable": false
                    },
                    {
                        "r": null,
                        "g": null,
                        "b": null,
                        "image": "/static/img/icons/instagram.png",
                        "eventKey": "application/activateModal",
                        "eventValue": "connect-network",
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
                        "eventValue": "connect-network",
                        "unread": false,
                        "text": "Go to Youtube",
                        "sort": 6,
                        "removable": false
                    }
                ],
                fixedItems: [],
            }
        },
        computed: {
        },
    }
</script>

<style lang="scss" scoped>
    .c-grid {
        margin-top: 10px;
        position: relative;
    }

    .c-grid__wrapper {
        display: flex;
        height: 100%;
        width: 100%;
        flex-direction: column;
        justify-content: space-between;
    }

    .c-grid__top {
        margin-top: 0;
        overflow-y: auto;
        overflow-x: hidden;
        margin-bottom: 10px;
        &::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0) !important;
            border: 0 none !important;
            display: none;
        }

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
        width: 100%;
        height: 100%;
        &::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0) !important;
            border: 0 none !important;
        }
    }
</style>


<style lang="scss" scoped>
    .mission-control{
        display: inline-flex;
    }
</style>
