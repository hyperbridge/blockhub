<template>
    <div>
        <Messages-bar :messages="errors" />
        <h4>Saved filters</h4>
        <Searcher
            :results="assetsFiltered"
            :delay="400"
            @input="phrase = $event">
            <div slot-scope="props">
                <AssetPreview
                    :asset="props.result"
                    horizontal
                    size="sm"
                    @click.native="newFilter.asset = props.result; phrase = ''" />
            </div>
        </Searcher>
        <h4 />

        <AssetPreview
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
            <Input v-model="newFilter.phrase" />
        </div>
        <div class="filter-box">
            <p>Minimum price: ({{ newFilter.priceMin }})</p>
            <RangeSlider
                v-model="newFilter.priceMin"
                :max="25" />
        </div>
        <div class="filter-box">
            <p>Maximum price: ({{ newFilter.priceMax }})</p>
            <RangeSlider v-model="newFilter.priceMax" />
        </div>
        <Button
            status="info"
            icon_hid
            size="md"
            @click="createFilter()">
            Create filter
        </Button>

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
            <OptionTag
                v-if="activeFilter.phrase"
                title="PHRASE:"
                :text="activeFilter.phrase"
                @delete="updateFilter({ phrase: '' })" />
            <OptionTag
                v-if="activeFilter.priceMin || activeFilter.priceMax"
                title="PRICE:">
                <OptionTag
                    v-if="activeFilter.priceMin"
                    title="MIN:"
                    :text="activeFilter.priceMin"
                    isChildren
                    @delete="updateFilter({ priceMin: 0 })" />
                <OptionTag
                    v-if="activeFilter.priceMax"
                    title="MAX:"
                    :text="activeFilter.priceMax"
                    isChildren
                    @delete="updateFilter({ priceMax: 0 })" />
            </OptionTag>
        </div>

        <Button @click="autofilter = { name: 'SilverBird' }">
            Map element
        </Button>

        <Button
            v-show="selectedFilterId"
            status="info"
            icon="edit"
            @click="editedFilter = selectedFilterId">
            Edit selected filter
        </Button>

        <Modal
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
                    <Input
                        :value="selectedFilter.phrase"
                        @change="selectedFilter = { phrase: $event.target.value }" />
                </div>
                <div class="filter-box">
                    <p>Minimum price: ({{ selectedFilter.priceMin }})</p>
                    <RangeSlider
                        v-xmodel.number.debounce-10="selectedFilter.priceMin"
                        :max="25" />
                </div>
            </div>
        </Modal>


        <Block
            title="Filtered assets"
            class="assets-wrapper">
            <AssetList
                :assets="filteredAssets"
                :transition="true" />
        </Block>
    </div>
</template>

<script>
import { debounce } from '@/mixins'

// TODO: simplify this shit
export default {
    components: {
        'Block': () => import('@ericmuyser/hyper-ui').then(m => m.Block),
        'AssetList': () => import('@ericmuyser/hyper-ui').then(m => m.AssetList),
        'Searcher': () => import('@ericmuyser/hyper-ui').then(m => m.Searcher),
        'AssetPreview': () => import('@ericmuyser/hyper-ui').then(m => m.AssetPreview),
        'RangeSlider': () => import('@ericmuyser/hyper-ui').then(m => m.RangeSlider),
        'OptionTag': () => import('@ericmuyser/hyper-ui').then(m => m.OptionTag),
        'Modal': () => import('@ericmuyser/hyper-ui').then(m => m.Modal),
        'Messages-bar': () => import('@ericmuyser/hyper-ui').then(m => m.Messages-bar)
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
        }
        // TODO
        // ...mapElement({
        //     name: 'selectedFilter',
        //     prop: 'filters',
        //     module: 'assets'
        // })
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

