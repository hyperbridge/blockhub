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
            <c-range-slider v-model="newFilter.priceMin"/>
        </div>
        <div class="filter-box">
            <p>Maximum price: ({{ newFilter.priceMax }})</p>
            <c-range-slider v-model="newFilter.priceMax"/>
        </div>
        <c-button status="info" icon_hide size="md">
            Create filter
        </c-button>

        <select>
            <option v-for="(filter, index) in savedFilters" :key="index">
                {{ filter.phrase }} {{ filter.priceMax }}
            </option>
        </select>
        <c-block title="">
            <c-asset-list :assets="assets" :transition="true"/>
        </c-block>
    </div>
</template>

<script>
export default {
    components: {
        'c-block': (resolve) => require(['@/ui/components/block/index'], resolve),
        'c-asset-list': (resolve) => require(['@/ui/components/asset/list'], resolve),
        'c-searcher': (resolve) => require(['@/ui/components/searcher'], resolve),
        'c-asset-preview': (resolve) => require(['@/ui/components/asset/preview-basic'], resolve),
        'c-range-slider': (resolve) => require(['@/ui/components/range-slider/pure'], resolve)
    },
    computed: {
        assets() {
            return this.$store.getters['assets/assetsArray'];
        },
        assetsFiltered() {
            return this.$store.getters['assets/assetsByName'](this.phrase);
        }
    },
    data() {
        return {
            phrase: '',
            savedFilters: [
                { name: '', phrase: 'Skull', priceMin: 0, priceMax: 32, attributes: { shield: '' } }
            ],
            newFilter: {
                asset: null,
                phrase: '',
                priceMin: 0,
                priceMax: 0
            }
        }
    },
    methods: {
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
</style>

