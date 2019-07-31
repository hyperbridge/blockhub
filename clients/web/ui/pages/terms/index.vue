<template>
    <Layout
        navigationKey="help"
        :showLeftPanel="false"
        :showRightPanel="false">
        <div class="row">
            <div class="col-12 mb-4">
                <TermsBlock />
            </div>
        </div>
    </Layout>
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
        'TermsBlock': () => import('@ericmuyser/hyper-ui').then(m => m.TermsBlock)
    }
}
</script>

<style lang="scss" scoped>
</style>
