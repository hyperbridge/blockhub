<template>
    <Layout>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    Marketplace
                    <h2>Trade</h2>
                    <Block>
                        <div class="trade-block">
                            <nav class="trade-block__nav">
                                <h3>Offers</h3>
                                <ul class="trade-block__menu-list reset-list">
                                    <li
                                        v-for="(title, index) in ['received', 'sent', 'closed']"
                                        :key="index">
                                        <a
                                            class="menu-list__item"
                                            :class="{ 'menu-list__item--active': activeTab === index + 1}"
                                            @click="activeTab = index + 1">
                                            {{ title | upperFirstChar }}
                                            <TagCount :number="offers[title].length" />
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                            <Tabs
                                :activeTabProp="activeTab"
                                disableMenu>
                                <Tab
                                    v-for="(offers, offersKey, index) in offers"
                                    :key="offersKey"
                                    :tabId="index + 1"
                                    class="trade-block__offers-tab">
                                    <TradeOffer
                                        v-for="offer in offers"
                                        :key="offer.id"
                                        :offer="offer"
                                        @wasSeen="offer.new = false" />
                                    <p v-if="!offers.length">
                                        No offers were found
                                    </p>
                                </Tab>
                            </Tabs>
                        </div>
                    </Block>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script>
export default {
    components: {
        'Block': () => import('@ericmuyser/hyper-ui').then(m => m.Block),
        'TradeOffer': () => import('@ericmuyser/hyper-ui').then(m => m.TradeOffer),
        'TagCount': () => import('@ericmuyser/hyper-ui').then(m => m.TagCount)
    },
    data() {
        return {
            activeTab: 1
        }
    },
    computed: {
        notifsCount() {
            /* WIP */
            return {
                received: this.offers.received.filter(offer => offer.new).length,
                sent: this.offers.sent.filter(offer => offer.new).length
            }
        },
        offers() {
            const { transactions } = this.$store.state.assets
            return transactions.reduce((offers, transaction) => {
                const { createdBy, status } = transaction
                const target = createdBy !== 1
                    ? status === 'closed'
                        ? 'closed'
                        : 'received'
                    : 'sent'
                offers[target].push(transaction)
                return offers
            }, { received: [], sent: [], closed: [] })
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
        }
    }
    .trade-block__offers-tab {
        padding: 20px;
    }
</style>
