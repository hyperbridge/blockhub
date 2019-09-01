<template>
    <div>
        <h2>Compare assets</h2>
        <AssetComparison
            :assets="selectedAssets"
            @addMore="addMore = true"
            @delete="negateValue" />
        <Modal
            v-if="addMore"
            title="Select assets to compare"
            @close="addMore = false">
            <AssetGrid
                slot="body"
                :assets="assets"
                @click="negateValue" />
        </Modal>
    </div>
</template>

<script>
export default {
    components: {
        'AssetComparison': () => import('@ericmuyser/hyper-ui').then(m => m.AssetComparison),
        'Modal': () => import('@ericmuyser/hyper-ui').then(m => m.Modal),
        'AssetGrid': () => import('@ericmuyser/hyper-ui').then(m => m.AssetGrid)
    },
    data() {
        return {
            addMore: false
        }
    },
    computed: {
        assets() {
            return this.$route.params.assets
        },
        selectedAssets() {
            return this.$store.getters['assets/selectedAssets']
        }
    },
    methods: {
        negateValue({ id }, iprop = 'selected') {
            this.$store.commit('assets/negateValue', { id, iprop })
        }
    }
}
</script>

<style>

</style>
