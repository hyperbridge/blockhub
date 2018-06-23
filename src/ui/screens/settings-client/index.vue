<template>
    <c-layout navigationKey="settingsNavigation">
        <div class="content" id="content">
            <div class="container-fluid">  
                <div class="row">
                    <div class="col-12">
                    </div>
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
export default {
    components: {
        'c-layout': () => import('@/ui/layouts/default')
    },
    data() {
        return {}
    },
    computed: {
        product() {
            const product = this.$store.state.marketplace.entities.products['1']

            if (product.images && product.images.headerUrl)
                window.document.body.style['background-image'] = 'url(' + product.images.headerUrl + ')'
            
            return product
        }
    },
    beforeDestroy() {
        window.document.body.style['background-image'] = 'url(/static/img/products/default.png)'
    }
}
</script>

<style lang="scss" scoped>

</style>
