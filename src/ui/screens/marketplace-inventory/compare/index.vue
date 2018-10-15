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
                slot="modal_body"
                @click="negateValue"
            />
        </c-modal>
    </div>
</template>

<script>
    import assets from '@/db/seed/assets';

    export default {
        props: ['assets'],
        components: {
            'c-block': (resolve) => require(['@/ui/components/block'], resolve),
            'c-asset-comparison': (resolve) => require(['@/ui/components/asset-comparison'], resolve),
            'c-modal': (resolve) => require(['@/ui/components/modal/custom'], resolve),
            'c-asset-grid': (resolve) => require(['@/ui/components/assets-grid-inventory'], resolve),
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
