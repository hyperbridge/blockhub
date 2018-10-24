<template>
    <div>

        <h4>Saved filters</h4>
        <c-searcher
            @input="phrase = $event"
            :results="assetsFiltered"
            :delay="400"
        >
            <div slot-scope="props">
                <c-asset-preview
                    :asset="props.result"
                    horizontal
                    size="sm"
                    @click.native="newFilter.asset = props.result; phrase = ''"
                />
            </div>
        </c-searcher>
        <h4></h4>

        <c-asset-preview
            v-if="newFilter.asset"
            :asset="newFilter.asset"
            horizontal
            size="sm"
        />

        <h3>Search for assets with:</h3>
        <div class="filter-box">
            <p>Phrase:
                <span v-if="newFilter.phrase">
                    ({{ newFilter.phrase }})
                </span>
            </p>
            <c-input v-model="newFilter.phrase"/>
        </div>
        <div class="filter-box">
            <p>Minimum price: ({{ newFilter.priceMin }})</p>
            <c-range-slider
                v-model="newFilter.priceMin"
                :max="25"
                @input="debounceUpdate({ priceMin: Number($event) })"
            />
        </div>
        <div class="filter-box">
            <p>Maximum price: ({{ newFilter.priceMax }})</p>
            <c-range-slider v-model="newFilter.priceMax"/>
        </div>
        <c-button
            status="info"
            icon_hid
            size="md"
            @click="createFilter()"
        >
            Create filter
        </c-button>

        <select name="Select saved filter" v-model="choosenFilter">
            <option
                v-for="(filter, index) in filters"
                :value="filter.id"
                :key="index"
            >
                [{{ index+1 }}] {{ filter.phrase }} - {{ filter.priceMin }} -> {{ filter.priceMax }}
            </option>
            <option disabled>You have no filters saved</option>
            <option :value="null">Disable filters</option>
        </select>

        {{ choosenFilter }}
        <div v-if="choosenFilter">
            <c-option-tag
                v-if="activeFilter.phrase"
                title="PHRASE:"
                :text="activeFilter.phrase"
                @delete="updateFilter({ phrase: '' })"
            />
            <c-option-tag
                v-if="activeFilter.priceMin || activeFilter.priceMax"
                title="PRICE:"
            >
                <c-option-tag
                    v-if="activeFilter.priceMin"
                    title="MIN:"
                    :text="activeFilter.priceMin"
                    @delete="updateFilter({ priceMin: 0 })"
                    isChildren
                />
                <c-option-tag
                    v-if="activeFilter.priceMax"
                    title="MAX:"
                    :text="activeFilter.priceMax"
                    @delete="updateFilter({ priceMax: 0 })"
                    isChildren
                />
            </c-option-tag>
        </div>


        <c-block title="Filtered assets" class="assets-wrapper">
            <c-asset-list :assets="filteredAssets" :transition="true"/>
        </c-block>
    </div>
</template>

<script>
    import { debouncer } from '@/mixins';

    export default {
        components: {
            'c-block': (resolve) => require(['@/ui/components/block/index'], resolve),
            'c-asset-list': (resolve) => require(['@/ui/components/asset/list'], resolve),
            'c-searcher': (resolve) => require(['@/ui/components/searcher'], resolve),
            'c-asset-preview': (resolve) => require(['@/ui/components/asset/preview-basic'], resolve),
            'c-range-slider': (resolve) => require(['@/ui/components/range-slider/pure'], resolve),
            'c-option-tag': (resolve) => require(['@/ui/components/option-tag'], resolve)
        },
        mixins: [debouncer],
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
                id: 2
            }
        },
        methods: {
            createFilter() {

                this.$store.dispatch('assets/create', { prop: 'filters', data: this.newFilter });
                this.newFiler = { phrase: '', priceMin: 0, priceMax: 0 };
            },
            updateFilter(data) {
                console.log('CALLED')
                if (this.activeFilter) {
                    const { id } = this.activeFilter;
                    this.$store.dispatch('assets/update', { id, data, prop: 'filters' });
                }
            },
            debounceUpdate(data) {
                console.log(data)
                this.debounce(() => this.updateFilter(data), 400);
                // this.timeout = setTimeout(() => this.updateFilter(data), 250);
            }
        },
        computed: {
            assets() {
                return this.$store.getters['assets/assetsArray'];
            },
            filters() {
                return this.$store.state.assets.filters;
                return this.$store.getters['assets/filters'];
            },
            assetsFiltered() {
                return this.$store.getters['assets/assetsByName'](this.phrase);
            },
            activeFilter() {
                return this.filters[this.choosenFilter];
            },
            filteredAssets() {
                const filter = this.activeFilter;
                return this.$store.getters['assets/assetsByName']((filter && filter.phrase) || '')
                    .filter(({ price, ...asset }) => this.choosenFilter
                        ? price.current > filter.priceMin && price.current < filter.priceMax
                        : true
                    );
            }
        },
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

