<template>
    <c-layout>
        <div class="content" id="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        New Releases
                        https://user-images.githubusercontent.com/156768/41747321-68cd7682-7562-11e8-95b6-477bbd6829f3.png
                    </div>
                    
                    <div class="col-3" v-for="(item, index) in products" v-bind:key="index">
                        {{ item.id }}
                        {{ item.name }}
                        <img :src="item.images.mediumTileUrl" />
                        <div class="product__tag" v-for="(tag, index) in item.authorTags" v-bind:key="index">
                            {{ tag }}
                        </div>
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
        products() {
            const products = this.$store.state.marketplace.entities.products

            return products
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
