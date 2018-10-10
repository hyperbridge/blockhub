<template>
    <div>
        <h2>Explore</h2>
        <c-assets-grid-inventory
            :assets="assets"
            @click="previewAsset = $event"
        />
        <div v-if="previewAsset" class="preview-asset">
            {{ previewAsset.name }}
        </div>
    </div>
</template>

<script>
    export default {
        props: ['assets'],
        components: {
            'c-assets-grid-inventory': (resolve) => require(['@/ui/components/assets-grid-inventory'], resolve),
        },
        data() {
            return {
                previewAsset: null
            }
        }
    }
</script>

<style lang="scss" scoped>
    .preview-asset {
        background: #1D1E2E;
    }
</style>
