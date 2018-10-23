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
        <!-- <c-input v-model=""/> -->
        <select>
            <option v-for="(filters, index) in savedFilters" :key="index">
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
        'c-asset-preview': (resolve) => require(['@/ui/components/asset/preview-basic'], resolve)
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
                asset: null
            }
        }
    },
    methods: {
    }
}
</script>

<style>

</style>
