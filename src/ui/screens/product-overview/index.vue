<template>
    <c-layout>
        <div class="content" id="content">
            <div class="container-fluid">  
                <div class="row">
                    <div class="col-12">
                        {{ product.name }}
                        {{ product.content }}
                        {{ product.author }}
                        {{ product.images }}
                        
                        view: https://user-images.githubusercontent.com/156768/41747362-8f17d1e8-7562-11e8-8c42-72a78233f921.png
                        create: https://user-images.githubusercontent.com/156768/41747248-230a0142-7562-11e8-919f-41d8dd97cea6.png
                    </div>
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
export default {
    props: ['id'],
    components: {
        'c-layout': () => import('@/ui/layouts/default')
    },
    data() {
        return {}
    },
    computed: {
        product() {
            const product = this.$store.state.marketplace.entities.products[this.id]

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
