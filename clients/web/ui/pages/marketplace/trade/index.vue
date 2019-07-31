<template>
    <div>
        <!-- <button class="create-offer-btn">Create new offer</button> -->
        <Block-menu :links="links">
            <Spinner v-if="isLoading" />
            <router-view
                v-else
                :transactions="transactions" />
        </Block-menu>
    </div>
</template>

<script>
// import transactionsData from '@/db/api/asset-transactions';
import moment from 'moment'

export default {
    components: {
        'Block-menu': () => import('@ericmuyser/hyper-ui').then(m => m.Block-menu),
        'Spinner': () => import('@ericmuyser/hyper-ui').then(m => m.Spinner)
    },
    data() {
        return {
            links: [
                { title: 'Manager', to: '/marketplace/trade' },
                { title: 'Explorer', to: { name: 'Marketplace Trade Explorer' } },
                { title: 'History', to: { name: 'Marketplace Trade History' } },
                { title: 'Settings', to: { name: 'Marketplace Trade Settings' } }
            ],
            results: [],
            isLoading: true
        }
    },
    computed: {
        profileId() {
            return this.$route.params.profileId
        },
        transactions() {
            return Object.values(this.$store.getters['assets/transactions'])
                .filter(trx => trx.you.id == this.profileId)
        }
    },
    watch: {
        profileId: {
            handler: 'loadData',
            immediate: true
        }
    },
    methods: {
        async loadData() {
            this.isLoading = true
            await new Promise(r => setTimeout(r, 1000))
            // this.results = transactionsData
            //     .map(trx => ({ ...trx, createdAt: moment() }));
            this.isLoading = false
        }
    }
}
</script>

<style lang="scss" scoped>
    .create-offer-btn {
        background: linear-gradient(to right,#65C7F7, #0052D4);
        border: 1px solid rgba(255,255,255,.4);
        padding: 20px 40px;
        width: 100%;
        max-width: 500px;
        color: #fff;
        margin: 0 auto;
        cursor: pointer;
        border-radius: 6px;
        outline: none;
        margin-bottom: 30px;
        font-size: 16px;
    }
</style>

