<template>
    <div>
        <h2>Create new asset auction sniper</h2>

        <c-tabs tabText="Step" class="margin-bottom-70" :setActiveTab="activeStep" @click="createSniper">

            <c-tab :tab_id="1">
                <p>Select asset from market that you are going to buy</p>
                <c-content-navigation :items="assets" :setLimits="10">
                    <c-asset-grid
                        slot-scope="props"
                        :assets="props.items"
                        @click="newSniper.asset = $event.id; activeStep = 2"
                    />
                </c-content-navigation>
            </c-tab>

            <c-tab :tab_id="2">
                <!-- Selected asset... -->
                <p>Select minimum price</p>
                <div class="flex-center-between margin-bottom-20">
                    <c-range-slider v-model="newSniper.priceMin" class="half-width margin-right-20"/>
                    <c-input v-model="newSniper.priceMin" class="half-width"/>
                </div>
                <p>Select maximum price</p>
                <div class="flex-center-between">
                    <c-range-slider v-model="newSniper.priceMax" class="half-width margin-right-20"/>
                    <c-input v-model="newSniper.priceMax" class="half-width"/>
                </div>
            </c-tab>

        </c-tabs>

        <h2>Created snipers</h2>
        <table>
            <thead>
                <th>ID</th>
                <th>Asset</th>
                <th>Minimum price</th>
                <th>Maximum price</th>
                <th>Expiration date</th>
            </thead>
            <tbody>
                <tr v-for="sniper in snipers" :key="sniper.id">
                    <td>{{ sniper.id }}</td>
                    <td><c-asset-preview :asset="sniper.asset"/></td>
                    <td>{{ sniper.priceMin }} $</td>
                    <td>{{ sniper.priceMax }} $</td>
                    <td>{{ sniper.expDate }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        components: {
            'c-range-slider': (resolve) => require(['@/ui/components/range-slider/pure'], resolve),
            'c-asset-preview': (resolve) => require(['@/ui/components/asset/preview-basic'], resolve),
            'c-asset-grid': (resolve) => require(['@/ui/components/assets-grid-inventory'], resolve),
            'c-content-navigation': (resolve) => require(['@/ui/components/content-navigation'], resolve),
            'c-tab': (resolve) => require(['@/ui/components/tab/tab-universal'], resolve),
            'c-tabs': (resolve) => require(['@/ui/components/tab/tabs-universal'], resolve)
        },
        data() {
            return {
                newSniper: {
                    asset: null,
                    priceMin: 0,
                    priceMax: 0,
                    expDate: ''
                },
                activeStep: 1,
                invalidVals: []
            }
        },
        methods: {
            createSniper(tabId) {
                const { activeStep } = this;
                const { priceMin, priceMax, expDate } = this.newSniper;
                const invalidVals = Object.values(this.newSniper).filter(val => !val);

                if (activeStep === 1) {

                } else {
                    if (tabId <= activeStep) {
                        this.activeStep = tabId;
                    }
                }

                if (invalidVals.length) {

                } else {
                    const newSniper = {
                        id: Math.floor(Math.random() * 100),
                        ...this.newSniper
                    };
                    this.$store.dispatch('assets/create', newSniper);
                }
            }
        },
        computed: {
            snipers() {
                return [];
            },
            assets() {
                return this.$store.getters['assets/assetsArray'];
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>

