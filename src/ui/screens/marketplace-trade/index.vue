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
                                        <li
                                            v-for="(title, index) in ['received', 'sent', 'closed']"
                                            :key="index"
                                        >
                                            <a
                                                class="menu-list__item"
                                                :class="{ 'menu-list__item--active': activeTab === index + 1}"
                                                @click="activeTab = index + 1"
                                            >
                                                {{ title | upperFirstChar }}
                                                <span
                                                    v-if="notifsCount[title]"
                                                    class="item__notif-count"
                                                >
                                                    {{ notifsCount[title] }}
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                                <c-tabs :active_tab_prop="activeTab" disableMenu>
                                    <c-tab
                                        v-for="(offers, offersKey, index) in offers"
                                        :key="offersKey"
                                        :tab_id="index + 1"
                                        class="trade-block__offers-tab"
                                    >
                                        <c-trade-offer
                                            v-for="offer in offers"
                                            :key="offer.id"
                                            :offer="offer"
                                            @wasSeen="offer.new = false"
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
                        { id: 1, author, new: true, assets: { their: [assets[2], assets[1]] , yours: [assets[0], assets[4]] }, date: "2018-10-04T04:09:00.000Z" },
                        { id: 2, author, new: true, assets: { their: [assets[2], assets[1]] , yours: [assets[0], assets[4]] }, date: "2018-10-03T04:09:00.000Z" },
                        { id: 3, author, assets: { their: [assets[2], assets[1]] , yours: [assets[0], assets[4]] }, date: "2018-10-01T04:09:00.000Z" },
                        { id: 4, author, assets: { their: [assets[2], assets[1]] , yours: [assets[0], assets[4]] }, date: "2018-09-25T04:09:00.000Z" }
                    ],
                    sent: [
                        { id: 1, author, new: true, assets: { their: [assets[2], assets[1]] , yours: [assets[0], assets[4]] }, date: "2018-10-04T04:09:00.000Z" },
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
            }),
            notifsCount() {
                return {
                    received: this.offers.received.filter(offer => offer.new).length,
                    sent: this.offers.sent.filter(offer => offer.new).length,
                }
            }
        }
    }
</script>

<style lang="scss" scoped>


    .trade-block {
        display: flex;
    }
    .trade-block__nav {
        min-width: 150px;
        .menu-list__item {
            padding: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-radius: 6px;
            cursor: pointer;
            margin-bottom: 5px;
            &:hover:not(.menu-list__item--active) {
                background: rgba(255,255,255,.001);
            }
            &.menu-list__item--active, {
                background: rgba(1,1,1,.2);
                &:hover {
                   background: rgba(1,1,1,.1);
                }
            }
            .item__notif-count {
                background: rgba(255,255,255,.1);
                border-radius: 4px;
                width: 18px;
                height: 18px;
                font-size: 13px;
                text-align: center;
            }
        }
    }
    .trade-block__offers-tab {
        padding: 20px;
    }


</style>
