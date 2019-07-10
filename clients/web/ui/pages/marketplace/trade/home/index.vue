<template>
    <article class="trade-block">
        <nav class="trade-block__nav">
            <ul class="trade-block__menu-list reset-list">
                <li
                    v-for="(title, index) in ['received', 'sent', 'closed']"
                    :key="index">
                    <a
                        class="menu-list__item"
                        :class="{ 'menu-list__item--active': activeTab === index + 1}"
                        @click="activeTab = index + 1">
                        {{ title | upperFirstChar }}
                        <c-tag-count :number="offersCount[title]" />
                    </a>
                </li>
            </ul>
        </nav>
        <c-tabs
            :activeTabProp="activeTab"
            disableMenu>
            <c-tab
                v-for="(offers, offersKey, index) in offers"
                :key="offersKey"
                :tabId="index + 1"
                class="trade-block__offers-tab">
                <c-trade-offer
                    v-for="offer in offers"
                    :key="offer.id"
                    :offer="offer"
                    @wasSeen="offer.new = false" />
                <p v-if="!offers.length">
                    No offers were found
                </p>
            </c-tab>
        </c-tabs>
    </article>
</template>

<script>
export default {
    components: {
        'c-tabs': () => import('~/components/tab/tabs-universal').then(m => m.default || m),
        'c-tab': () => import('~/components/tab/tab-universal').then(m => m.default || m),
        'c-trade-offer': () => import('~/components/trade-offer').then(m => m.default || m),
        'c-tag-count': () => import('~/components/tags/count').then(m => m.default || m)
    },
    data() {
        return {
            activeTab: 1
        }
    },
    computed: {
        transactions() {
            return this.$route.params.transactions
        },
        transactionsX() {
            return
            return this.$store.getters['assets/transactionsArray']
        },
        userId() {
            return this.$store.state.application.account.id
        },
        offers() {
            const { userId } = this
            return this.transactions.reduce((offers, trx) => {
                const target = !trx.accepted
                    ? trx.createdBy == userId ? 'sent' : 'received'
                    : 'closed'

                offers[target].push(trx)
                return offers
            }, { received: [], sent: [], closed: [] })
        },
        offersCount() {
            return Object.entries(this.offers).reduce((count, [name, offers]) =>
                ({ ...count, [name]: offers.length })
            , { received: 0, sent: 0, closed: 0 })
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

