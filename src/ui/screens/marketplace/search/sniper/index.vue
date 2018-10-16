<template>
    <div>
        <h2>Create new asset auction sniper</h2>

        <c-tabs tabText="Step" class="margin-bottom-100" :setActiveTab="activeStep" @click="createSniper">

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

        <h2>Created auction snipers</h2>
        <table class="snipers-table">
            <thead>
                <th>ID</th>
                <th>Asset</th>
                <th>Minimum price</th>
                <th>Maximum price</th>
                <th>Expiration date</th>
                <th>Edit</th>
            </thead>
            <tbody>
                <tr v-for="(sniper, id) in snipers" :key="id">
                    <template v-if="edited.id !== sniper.id">
                        <td>{{ id }}</td>
                        <td><c-asset-preview :asset="sniper.asset" size="sm"/></td>
                        <td>{{ sniper.priceMin }} $</td>
                        <td>{{ sniper.priceMax }} $</td>
                        <td>{{ sniper.expDate | timeAgo }}</td>
                        <td>
                            <c-button
                                status="info"
                                icon="edit"
                                @click="setEdited(sniper)"
                            >Edit</c-button>
                        </td>
                    </template>
                    <template v-else>
                        <td>{{ id }}</td>
                        <td>{{ edited.asset.name }}</td>
                        <td><c-input v-model="edited.priceMin" class="edit-input"/></td>
                        <td><c-input v-model="edited.priceMax" class="edit-input"/></td>
                        <td><c-input v-model="edited.expDate" class="edit-input"/></td>
                        <td>
                            <c-button status="warning" @click="edited = {}">Cancel</c-button>
                            <c-button status="danger" @click="deleteSniper(id)">Delete</c-button>
                            <c-button status="success" @click="updateSniper(id)">Save</c-button>
                        </td>
                    </template>
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
                edited: {},
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
            },
            setEdited(sniper) {
                this.edited = { ...sniper };
            },
            updateSniper(id) {
                const { edited } = this;
                this.$store.commit('assets/update', {
                    id,
                    prop: 'snipers',
                    data: { ...edited, asset: edited.asset.id }
                });
                this.edited = {};
            },
            deleteSniper(id) {
                this.$store.commit('assets/delete', { id, prop: 'snipers' });
            }
        },
        computed: {
            snipers() {
                return this.$store.getters['assets/snipers'];
            },
            assets() {
                return this.$store.getters['assets/assetsArray'];
            }
        }
    }
</script>

<style lang="scss" scoped>
    .snipers-table {
        width: 100%;
        margin-bottom: 50px;
        th, td {
            text-align: center;
            padding: 5px 0;
        }
        tr:nth-child(even) td {
            background: rgba(1,1,1,.05);
        }
        .edit-input {
            width: 80px;
        }
    }
</style>

