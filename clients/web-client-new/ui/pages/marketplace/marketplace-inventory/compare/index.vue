<template>
    <div>
        <h2>Compare assets</h2>
        <c-asset-comparison
            :assets="selectedAssets"
            @addMore="addMore = true"
            @delete="negateValue" />
        <c-modal
            v-if="addMore"
            title="Select assets to compare"
            @close="addMore = false">
            <c-asset-grid
                slot="body"
                :assets="assets"
                @click="negateValue" />
        </c-modal>
    </div>
</template>

<script>
export default {
    components: {
        'c-asset-comparison': () => import('~/components/asset-comparison').then(m => m.default || m),
        'c-modal': () => import('~/components/modal').then(m => m.default || m),
        'c-asset-grid': () => import('~/components/assets-grid-inventory').then(m => m.default || m)
    },
    props: ['assets'],
    data() {
        return {
            addMore: false
        }
    },
    computed: {
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
