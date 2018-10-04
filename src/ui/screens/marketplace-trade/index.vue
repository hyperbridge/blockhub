<template>
    <c-layout>
        <div class="content" id="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        Marketplace
                        <h2>Trade</h2>
                        <c-block>
                            <div class="trade-block">
                                <nav class="trade-block__nav">
                                    <h3>Offers</h3>
                                    <ul class="trade-block__menu-list reset-list">
                                        <li>
                                            <a
                                                class="menu-list__item"
                                                @click="activeTab = 1"
                                            >Received</a>
                                        </li>
                                        <li>
                                            <a
                                                class="menu-list__item"
                                                @click="activeTab = 2"
                                            >Sent</a>
                                        </li>
                                        <li>
                                            <a
                                                class="menu-list__item"
                                                @click="activeTab = 3"
                                            >Closed</a>
                                        </li>
                                    </ul>
                                </nav>
                                <c-tabs :active_tab_prop="activeTab" disableMenu>
                                    <c-tab :tab_id="1" class="trade-block__offers-tab">
                                        <c-trade-offer
                                            v-for="offer in offers.received"
                                            :key="offer.id"
                                            :offer="offer"
                                        />
                                    </c-tab>
                                    <c-tab :tab_id="2" class="trade-block__offers-tab">
                                        <c-trade-offer
                                            v-for="offer in offers.sent"
                                            :key="offer.id"
                                            :offer="offer"
                                        />
                                    </c-tab>
                                </c-tabs>
                            </div>
                        </c-block>
                    </div>
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
    import { mapGetters } from 'vuex';
    import assets from '@/db/seed/assets';

    export default {
        components: {
            'c-block': (resolve) => require(['@/ui/components/block'], resolve),
            'c-tabs': (resolve) => require(['@/ui/components/tab/tabs-universal'], resolve),
            'c-tab': (resolve) => require(['@/ui/components/tab/tab-universal'], resolve),
            'c-trade-offer': (resolve) => require(['@/ui/components/trade-offer'], resolve),
        },
        data() {
            const author = { name: 'The mission', img: 'http://www.shareicon.net/data/128x128/2015/09/20/104335_avatar_512x512.png' };
            return {
                offers: {
                    received: [
                        { id: 1, author, assets: { their: [assets[2], assets[1]] , yours: [assets[0], assets[4]] }, date: "2018-10-04T04:09:00.000Z" },
                        { id: 2, author, assets: { their: [assets[2], assets[1]] , yours: [assets[0], assets[4]] }, date: "2018-10-03T04:09:00.000Z" },
                        { id: 3, author, assets: { their: [assets[2], assets[1]] , yours: [assets[0], assets[4]] }, date: "2018-10-01T04:09:00.000Z" },
                        { id: 4, author, assets: { their: [assets[2], assets[1]] , yours: [assets[0], assets[4]] }, date: "2018-09-25T04:09:00.000Z" }
                    ],
                    sent: [
                        { id: 1, author, assets: { their: [assets[2], assets[1]] , yours: [assets[0], assets[4]] }, date: "2018-10-04T04:09:00.000Z" },
                        { id: 2, author, assets: { their: [assets[2], assets[1]] , yours: [assets[0], assets[4]] }, date: "2018-10-03T04:09:00.000Z" },
                        { id: 3, author, assets: { their: [assets[2], assets[1]] , yours: [assets[0], assets[4]] }, date: "2018-10-01T04:09:00.000Z" },
                        { id: 4, author, assets: { their: [assets[2], assets[1]] , yours: [assets[0], assets[4]] }, date: "2018-09-25T04:09:00.000Z" }
                    ]
                },
                activeTab: 1
            }
        },
        computed: {
            ...mapGetters({
                assets: 'marketplace/assetsArray'
            })
        }
    }
</script>

<style lang="scss" scoped>


    .trade-block {
        display: flex;
    }
    .trade-block__nav {
        min-width: 150px;
        .trade-block__menu-list {

        }
        .menu-list__item {
            display: block;
            padding: 8px;
            background: rgba(255,255,255,.05);
            border-radius: 6px;
            cursor: pointer;
            margin-bottom: 5px;
            .menu-list__item--active, &:hover {
                background: rgba(255,255,255,.13);
            }
        }
    }
    .trade-block__offers-tab {
        padding: 20px;
    }


</style>
