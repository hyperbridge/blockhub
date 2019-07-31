<template>
    <Layout
        navigationKey="help"
        :showLeftPanel="false"
        :showRightPanel="false">
        <div class="row">
            <div class="col-12 mb-4">
                <PrivacyBlock />
            </div>
        </div>
    </Layout>
</template>

<script>
export default {
    head() {
        return {
            title: `Privacy Policy | BlockHub`,
            meta: [
                { hid: 'description', name: 'description', content: 'BlockHub privacy policy and how we keep your data safe' },
                { hid: 'keywords', name: 'keywords', content: 'privacy, data, data rights, blockchain' }
            ]
        }
    },
    components: {
        'PrivacyBlock': () => import('@ericmuyser/hyper-ui').then(m => m.PrivacyBlock)
    }
}
</script>

<style lang="scss" scoped>
</style>
