<template>
    <div>
        <h2>Compare assets</h2>
        <c-asset-comparison
            :assets="selectedAssets"
            @addMore="addMore = true"
            @delete="negateValue"
        />
        <c-modal
            v-if="addMore"
            @close="addMore = false"
            title="Select assets to compare"
        >
            <c-asset-grid
                :assets="assets"
                @click="negateValue"
                slot="body"
            />
        </c-modal>
    </div>
</template>

<script>
    export default {
        props: ['assets'],
        components: {
            'c-block': () => import('~/components/block').then(m => m.default || m),
            'c-asset-comparison': () => import('~/components/asset-comparison').then(m => m.default || m),
            'c-modal': () => import('~/components/modal').then(m => m.default || m),
            'c-asset-grid': () => import('~/components/assets-grid-inventory').then(m => m.default || m),
        },
        data() {
            return {
                addMore: false
            }
        },
        methods: {
            negateValue({ id }, iprop = 'selected') {
                this.$store.commit('assets/negateValue', { id, iprop });
            }
        },
        computed: {
            selectedAssets() {
                return this.$store.getters['assets/selectedAssets'];
            }
        }
    }
</script>

<style>

</style>
