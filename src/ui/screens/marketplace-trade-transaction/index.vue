<template>
    <c-layout>
        <div class="content" id="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        Marketplace
                        <h2>Trade transaction</h2>
                        <c-block :title="'Transaction: ' + $route.params.tradeId">
                            <div class="my-inventory">
                                <div class="assets-grid">
                                    <div
                                        v-for="asset in 6"
                                        :key="asset"
                                        class="assets-grid__asset"
                                    >

                                    </div>
                                </div>
                                <div class="inventory-explorer">
                                    <h2>My inventory</h2>
                                    <c-list
                                        :items="assets"
                                    >
                                        <template slot-scope="{ item }">

                                        </template>
                                    </c-list>
                                </div>
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

    export default {
        components: {
            'c-block': (resolve) => require(['@/ui/components/block'], resolve),
            'c-list': (resolve) => require(['@/ui/components/list'], resolve)
        },
        computed: {
            ...mapGetters({
                'assets': 'marketplace/assetsArray'
            }),
            assetss() {
                return this.$store.getters['marketplace/assetsArray'];
            }
        }
    }
</script>

<style lang="scss" scoped>
    .my-inventory {
        display: flex;
    }
    .assets-grid {
        background: rgba(1,1,1,.1);
        box-shadow: 0 0 20px 0 rgba(1,1,1,.25);
        border: 1px solid rgba(255,255,255,.1);
        border-radius: 4px;
        display: flex;
        flex-wrap: wrap;
        padding: 5px;
        margin-right: 30px;
    }
    .assets-grid__asset {
        width: 100px;
        height: 100px;
        margin: 5px;
        background: rgba(1,1,1,.2);
        border: 1px solid rgba(255,255,255,.25);
    }
</style>
