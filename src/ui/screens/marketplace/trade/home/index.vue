<template>
    <article class="trade-block">
        <nav class="trade-block__nav">
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
                        <c-tag-count :number="offers[title].length"/>
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
                <p v-if="!offers.length">No offers were found</p>
            </c-tab>
        </c-tabs>
    </article>
</template>

<script>
    import getters from '@/store/temporary-getters';

    export default {
        components: {
            'c-tabs': (resolve) => require(['@/ui/components/tab/tabs-universal'], resolve),
            'c-tab': (resolve) => require(['@/ui/components/tab/tab-universal'], resolve),
            'c-trade-offer': (resolve) => require(['@/ui/components/trade-offer'], resolve),
            'c-tag-count': (resolve) => require(['@/ui/components/tags/count'], resolve),
        },
        data() {
            return {
                activeTab: 1,
            }
        },
        computed: {
            notifsCount() {
                return {};
                /* WIP */
                return {
                    received: this.offers.received.filter(offer => offer.new).length,
                    sent: this.offers.sent.filter(offer => offer.new).length,
                }
            },
            offers() {
                const { transactions } = this.$store.state.assets;
                return transactions.reduce((offers, transaction) => {
                    const { createdBy, status } = transaction;
                    const target = createdBy !== 1
                        ? status === 'closed'
                            ? 'closed'
                            : 'received'
                        : 'sent';
                    offers[target].push(transaction);
                    return offers;
                }, { received: [], sent: [], closed: [] });
            },
            transactions() {
                return this.$store.getters['assets/transactionsArray'];
            },
            userId() {
                return this.$store.state.application.account.id;
            },
            offers2() {
                const { userId } = this;
                return this.transactions.reduce((offers, trx) => {

                    const target = !trx.accepted
                        ? trx.createdBy == userId ? 'sent' : 'received'
                        : 'closed';

                    offers[target].push(trx);
                    return offers;
                }, { received: [], sent: [], closed: [] });
            },
            offersCount() {
                return Object.entries(this.offers2).reduce((count, [name, offers]) =>
                    ({ ...count, [name]: offers.length })
                , { received: 0, sent: 0, closed: 0 });
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

