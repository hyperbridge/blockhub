<template>
    <div>
        <c-messages-bar :messages="errors" />
        <h4>Saved filters</h4>
        <c-searcher
            :results="assetsFiltered"
            :delay="400"
            @input="phrase = $event">
            <div slot-scope="props">
                <c-asset-preview
                    :asset="props.result"
                    horizontal
                    size="sm"
                    @click.native="newFilter.asset = props.result; phrase = ''" />
            </div>
        </c-searcher>
        <h4 />

        <c-asset-preview
            v-if="newFilter.asset"
            :asset="newFilter.asset"
            horizontal
            size="sm" />

        <h3>Search for assets with:</h3>
        <div class="filter-box">
            <p>
                Phrase:
                <span v-if="newFilter.phrase">
                    ({{ newFilter.phrase }})
                </span>
            </p>
            <c-input v-model="newFilter.phrase" />
        </div>
        <div class="filter-box">
            <p>Minimum price: ({{ newFilter.priceMin }})</p>
            <c-range-slider
                v-model="newFilter.priceMin"
                :max="25" />
        </div>
        <div class="filter-box">
            <p>Maximum price: ({{ newFilter.priceMax }})</p>
            <c-range-slider v-model="newFilter.priceMax" />
        </div>
        <c-button
            status="info"
            icon_hid
            size="md"
            @click="createFilter()">
            Create filter
        </c-button>

        <select
            v-model="selectedFilterId"
            name="Select saved filter">
            <option
                v-for="(filter, index) in filters"
                :key="index"
                :value="filter.id">
                [{{ index+1 }}] {{ filter.phrase }} - {{ filter.priceMin }} -> {{ filter.priceMax }}
            </option>
            <option disabled>
                You have no filters saved
            </option>
            <option :value="null">
                Disable filters
            </option>
        </select>

        {{ selectedFilterId }}
        <div v-if="choosenFilter">
            <c-option-tag
                v-if="activeFilter.phrase"
                title="PHRASE:"
                :text="activeFilter.phrase"
                @delete="updateFilter({ phrase: '' })" />
            <c-option-tag
                v-if="activeFilter.priceMin || activeFilter.priceMax"
                title="PRICE:">
                <c-option-tag
                    v-if="activeFilter.priceMin"
                    title="MIN:"
                    :text="activeFilter.priceMin"
                    isChildren
                    @delete="updateFilter({ priceMin: 0 })" />
                <c-option-tag
                    v-if="activeFilter.priceMax"
                    title="MAX:"
                    :text="activeFilter.priceMax"
                    isChildren
                    @delete="updateFilter({ priceMax: 0 })" />
            </c-option-tag>
        </div>

        <c-button @click="autofilter = { name: 'SilverBird' }">
            Map element
        </c-button>

        <c-button
            v-show="selectedFilterId"
            status="info"
            icon="edit"
            @click="editedFilter = selectedFilterId">
            Edit selected filter
        </c-button>

        <c-modal
            v-if="editedFilter"
            @close="editedFilter = null">
            <div slot="body">
                <div class="filter-box">
                    <p>
                        Phrase:
                        <span>
                            ({{ selectedFilter.phrase }})
                        </span>
                    </p>
                    <c-input
                        :value="selectedFilter.phrase"
                        @change="selectedFilter = { phrase: $event.target.value }" />
                </div>
                <div class="filter-box">
                    <p>Minimum price: ({{ selectedFilter.priceMin }})</p>
                    <c-range-slider
                        v-xmodel.number.debounce-10="selectedFilter.priceMin"
                        :max="25" />
                </div>
            </div>
        </c-modal>


        <c-block
            title="Filtered assets"
            class="assets-wrapper">
            <c-asset-list
                :assets="filteredAssets"
                :transition="true" />
        </c-block>
    </div>
</template>

<script>
import { debounce } from '@/mixins'
import { mapElement } from '@/util/store-helpers'

export default {
    components: {
        'c-block': () => import('~/components/block/index').then(m => m.default || m),
        'c-asset-list': () => import('~/components/asset/list').then(m => m.default || m),
        'c-searcher': () => import('~/components/searcher').then(m => m.default || m),
        'c-asset-preview': () => import('~/components/asset/preview-basic').then(m => m.default || m),
        'c-range-slider': () => import('~/components/range-slider/pure').then(m => m.default || m),
        'c-option-tag': () => import('~/components/option-tag').then(m => m.default || m),
        'c-modal': () => import('~/components/modal').then(m => m.default || m),
        'c-messages-bar': () => import('~/components/message-bar/wrapper').then(m => m.default || m)
    },
    mixins: [debounce],
    data() {
        return {
            phrase: '',
            savedFilters: [
                { name: '', phrase: 'Skull', priceMin: 0, priceMax: 32, attributes: { shield: '' } }
            ],
            newFilter: {
                phrase: '',
                priceMin: 0,
                priceMax: 0
            },
            choosenFilter: null,
            autofilterId: 3,
            selectedFilterId: null,
            editedFilter: null,
            timeout2: null,
            errors: [
                'Minimum price cannot be bigger than maximum.'
            ]
        }
    },
    methods: {
        runIt(e) {
            console.log(e)
        },
        createFilter() {
            this.$store.dispatch('assets/create', { prop: 'filters', data: this.newFilter })
            this.newFiler = { phrase: '', priceMin: 0, priceMax: 0 }
        },
        updateFilter(data) {
            console.log('CALLED')
            if (this.activeFilter) {
                const { id } = this.activeFilter
                this.$store.dispatch('assets/update', { id, data, prop: 'filters' })
            }
        },
        debounceUpdate(data) {
            console.log(data)
            this.debounce(() => this.updateFilter(data), 400)
            // this.timeout = setTimeout(() => this.updateFilter(data), 250);
        }
    },
    computed: {
        assets() {
            return this.$store.getters['assets/assetsArray']
        },
        filters() {
            return this.$store.state.assets.filters
            return this.$store.getters['assets/filters']
        },
        assetsFiltered() {
            return this.$store.getters['assets/assetsByName'](this.phrase)
        },
        activeFilter() {
            return this.filters[this.choosenFilter]
        },
        filteredAssets() {
            const filter = this.activeFilter
            return this.$store.getters['assets/assetsByName']((filter && filter.phrase) || '')
                .filter(({ price, ...asset }) => this.choosenFilter
                    ? price.current > filter.priceMin && price.current < filter.priceMax
                    : true)
        },
        ...mapElement({
            name: 'selectedFilter',
            prop: 'filters',
            module: 'assets'
        })
    }
}
</script>

<style lang="scss" scoped>
    .filter-box {
        padding: 8px;
        border-radius: 4px;
        background: rgba(255,255,255,.05);
        margin-bottom: 10px;
    }
    .assets-wrapper {
        margin: 40px 0;
        min-height: 450px;
    }
</style>

