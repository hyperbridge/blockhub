<template>
    <div>
        <p v-if="isLoading">
            Loading ...
        </p>
        <div v-else>
            <c-block
                title="Created auction prospectors"
                noGutter
                onlyContentBg
                bgGradient>
                <table class="prospectors-table">
                    <thead>
                        <th>ID</th>
                        <th>Asset</th>
                        <th>Minimum price</th>
                        <th>Maximum price</th>
                        <th>Expiration date</th>
                        <th>Edit</th>
                    </thead>
                    <tbody>
                        <tr
                            v-for="[id, prosp] in prospectors"
                            :key="id">
                            <template v-if="edited.id != prosp.id">
                                <td>{{ id }}</td>
                                <td>
                                    <c-asset-preview
                                        :asset="prosp.asset"
                                        size="sm" />
                                </td>
                                <td>{{ prosp.priceMin }} $</td>
                                <td>{{ prosp.priceMax }} $</td>
                                <td>{{ prosp.expDate | timeAgo }}</td>
                                <td>
                                    <c-button
                                        status="info"
                                        icon="edit"
                                        @click="setEdited(prosp)">
                                        Edit
                                    </c-button>
                                </td>
                            </template>
                            <template v-else>
                                <td>{{ id }}</td>
                                <td>
                                    <c-asset-preview
                                        :asset="prosp.asset"
                                        size="sm" />
                                </td>
                                <td>
                                    <c-input
                                        v-model="edited.priceMin"
                                        class="edit-input" />
                                </td>
                                <td>
                                    <c-input
                                        v-model="edited.priceMax"
                                        class="edit-input" />
                                </td>
                                <td>
                                    <c-datepicker
                                        v-model="edited.expDate"
                                        input-class="form-control form-calendar__text edit-input"
                                        calendar-class="form-calendar" />
                                </td>
                                <td>
                                    <c-button
                                        status="warning"
                                        iconHide
                                        @click="edited = {}">
                                        Cancel
                                    </c-button>
                                    <c-button
                                        status="danger"
                                        @click="$store.dispatch(
                                            'delete',
                                            ['assets/prospectors', id]
                                        )">
                                        Delete
                                    </c-button>
                                    <c-button
                                        status="success"
                                        @click="$store.dispatch(
                                            'update',
                                            ['assets/prospectors', id, edited]
                                        ); edited = {}">
                                        Save
                                    </c-button>
                                </td>
                            </template>
                        </tr>
                    </tbody>
                </table>
            </c-block>

            <c-block
                title="Create new auction prospector"
                noGutter
                onlyContentBg
                bgGradient>
                <template v-if="errors.length">
                    <p>Correct following error(s):</p>
                    <ul>
                        <li
                            v-for="(error, index) in errors"
                            :key="index">
                            {{ error }}
                        </li>
                    </ul>
                </template>

                <c-tabs
                    tabText="Step"
                    class="margin-bottom-100"
                    :setActiveTab="activeStep"
                    @click="createProspector">
                    <c-tab :tabId="1">
                        <p>Select asset that you are going to buy</p>
                        <c-content-navigation
                            :items="assetsArray"
                            :setLimits="10">
                            <c-asset-grid
                                slot-scope="props"
                                :assets="props.items"
                                @click="newProspector.asset = $event; activeStep = 2" />
                        </c-content-navigation>
                    </c-tab>

                    <c-tab :tabId="2">
                        <h4 class="text-align-center">
                            Selected asset:
                        </h4>
                        <c-asset-preview-price
                            :asset="newProspector.asset"
                            class="margin-auto margin-bottom-30 half-width" />
                        <p>Select minimum price</p>
                        <div class="flex-center-between margin-bottom-20">
                            <c-range-slider
                                v-model="newProspector.priceMin"
                                class="half-width margin-right-20"
                                :max="getPrice(newProspector.asset, 'min')" />
                            <c-input
                                v-model="newProspector.priceMin"
                                class="half-width" />
                        </div>
                        <p>Select maximum price</p>
                        <div class="flex-center-between margin-bottom-20">
                            <c-range-slider
                                v-model="newProspector.priceMax"
                                class="half-width margin-right-20"
                                :max="getPrice(newProspector.asset, 'max')" />
                            <c-input
                                v-model="newProspector.priceMax"
                                class="half-width" />
                        </div>
                        <p>Select expiration date</p>
                        <div class="flex-center margin-bottom-40">
                            <c-datepicker
                                v-model="newProspector.expDate"
                                placeholder="Expiration date"
                                input-class="form-control form-calendar__text"
                                calendar-class="form-calendar" />
                        </div>
                        <div class="flex-center-between">
                            <c-button
                                status="warning"
                                icon="trash-alt"
                                size="lg"
                                @click="resetCreation()">
                                Cancel
                            </c-button>
                            <c-button
                                status="success"
                                size="lg"
                                @click="createProspector()">
                                Create
                            </c-button>
                        </div>
                    </c-tab>
                </c-tabs>
            </c-block>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        'c-block': () => import('~/components/block/index').then(m => m.default || m),
        'c-range-slider': () => import('~/components/range-slider/pure').then(m => m.default || m),
        'c-asset-preview': () => import('~/components/asset/preview-basic').then(m => m.default || m),
        'c-asset-preview-price': () => import('~/components/asset-preview').then(m => m.default || m),
        'c-asset-grid': () => import('~/components/assets-grid-inventory').then(m => m.default || m),
        'c-content-navigation': () => import('~/components/content-navigation').then(m => m.default || m),
        'c-datepicker': () => import('vuejs-datepicker').then(m => m.default || m)
    },
    data() {
        return {
            newProspector: {
                asset: null,
                priceMin: 0,
                priceMax: 0,
                expDate: ''
            },
            edited: {},
            activeStep: 1,
            errors: [],
            isLoading: true
        }
    },
    computed: {
        profileId() {
            return this.$route.params.profileId
        },
        prospectors() {
            return this.$store.getters['assets/prospectors']
        },
        assets() {
            return this.$store.getters['assets/assets']
        },
        assetsArray() {
            return this.$store.getters['assets/assetsArray']
        },
        prospectors() {
            return this.$store.getters['assets/prospectorsMap']
                .filter(([id, prosp]) => prosp.user.id == this.profileId)
        },
        profile() {
            return this.$store.state.application.activeProfile
        }
    },
    watch: {
        profileId: {
            handler: 'getProspectors',
            immediate: true
        }
    },
    methods: {
        createProspector(tabId) {
            const { activeStep } = this
            const { asset, ...rest } = this.newProspector
            this.errors = []
            const push = msg => this.errors.push(msg)

            if (activeStep === 1) {
                if (asset == null) push('Select an asset first.')
                else this.activeStep = 2
            } else if (tabId && tabId < activeStep) {
                this.activeStep = tabId
            } else if (Object.values(rest).some(val => !val)) {
                const { priceMin, priceMax, expDate } = rest
                if (!priceMin) push('Invalid minimum price range.')
                if (!priceMax) push('Invalid maximum price range.')
                if (!expDate) push('Invalid expiration date.')
            } else {
                this.$store.dispatch('create', [
                    'assets/prospectors', {
                        ...this.newProspector,
                        user: this.profile
                    }
                ])
                this.$snotify.success('Auction prospector has been successfully created', 'Created')
                this.resetCreation()
            }
        },
        setEdited(prospector) {
            this.edited = { ...prospector }
        },
        resetCreation() {
            this.activeStep = 1
            this.newProspector = {
                asset: null,
                priceMin: 0,
                priceMax: 0,
                expDate: ''
            }
            this.errors = []
        },
        getPrice: (asset, target) => asset && Math.round(asset.price[target] * 2),
        async getProspectors() {
            this.isLoading = true
            await new Promise(r => setTimeout(r, 1000))
            this.isLoading = false
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "@/css/helpers/mixins.scss";

    .prospectors-table {
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

<style lang="scss">
    .form-calendar {
        background-color: #27273A !important;
        border-color: rgba(255,255,255,.2) !important;
        box-shadow: 0 0 15px rgba(1, 1, 1, .35);
        .up:hover, .up:focus {
            color: black !important;
        }
    }
    .form-calendar__text, .form-calendar__text:focus {
        background-color: #303049 !important;
    }
</style>


