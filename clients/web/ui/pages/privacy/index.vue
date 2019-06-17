<template>
    <c-layout
        navigationKey="help"
        :showLeftPanel="false"
        :showRightPanel="false">
        <div class="row">
            <div class="col-12 mb-4">
                <c-privacy-block />
            </div>
        </div>
    </c-layout>
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
        'c-privacy-block': () => import('~/components/privacy-block').then(m => m.default || m)
    }
}
</script>

<style lang="scss" scoped>
</style>
