<template>
    <c-layout
        navigationKey="help"
        :showLeftPanel="false"
        :showRightPanel="false">
        <div class="row">
            <div class="col-12 mb-4">
                <c-terms-block />
            </div>
        </div>
    </c-layout>
</template>

<script>
export default {
    head() {
        return {
            title: `Terms & Conditions | BlockHub`,
            meta: [
                { hid: 'description', name: 'description', content: `BlockHub terms` },
                { hid: 'keywords', name: 'keywords', content: 'terms, blockchain, game, indie, developer' }
            ]
        }
    },
    components: {
        'c-terms-block': () => import('~/components/terms-block').then(m => m.default || m)
    }
}
</script>

<style lang="scss" scoped>
</style>
