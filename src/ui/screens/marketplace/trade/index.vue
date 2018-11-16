<template>
    <div>
        <!-- <button class="create-offer-btn">Create new offer</button> -->
        <c-block-menu :links="links">
            <c-spinner v-if="loading"/>
            <router-view v-else :transactions="results"/>
        </c-block-menu>
    </div>
</template>

<script>
    import transactionsData from '@/db/api/asset-transactions';
    import moment from 'moment';

    export default {
        components: {
            'c-block-menu': (resolve) => require(['@/ui/components/block/menu'], resolve),
            'c-spinner': (resolve) => require(['@/ui/components/spinner'], resolve),
        },
        data() {
            return {
                links: [
                    { title: 'Manager', to: '/marketplace/trade' },
                    { title: 'Explorer', to: { name: 'Marketplace Trade Explorer' }},
                    { title: 'History', to: { name: 'Marketplace Trade History' }},
                    { title: 'Settings', to: { name: 'Marketplace Trade Settings' }}
                ],
                results: [],
                loading: true
            }
        },
        computed: {
            identity() {
                return this.$store.getters['application/identity'];
            }
        },
        methods: {
            async loadData() {
                this.loading = true;
                await new Promise(r => setTimeout(r, 2000));
                this.results = transactionsData
                    .filter(trx => trx.you.id == this.identity.id)
                    .map(trx => ({ ...trx, createdAt: moment() }));
                this.loading = false;
            }
        },
        watch: {
            'identity.id': {
                handler: 'loadData',
                immediate: true
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
        // box-shadow: inset 0 0 20px -4px rgb(96, 155, 252);
        font-size: 16px;
        // font-weight: 500;
    }
</style>

