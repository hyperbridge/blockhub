<template>
    <c-layout navigationKey="storeNavigation">
        <div class="content" id="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <h3>New Releases</h3>
                    </div>
                    <div class="col-3" v-for="(item, index) in products" v-bind:key="index">
                        <div class="card">
                            <a :href="`/#/product/${item.id}`" style="padding: 10px;"><img class="card-img-top" :src="item.images.mediumTileUrl" /></a>
                            <div class="card-body">
                                <h4 class="card-title"><a :href="`/#/product/${item.id}`">{{ item.name }}</a></h4>
                                <p class="card-text">{{ item.shortDescription }} </p>

                                <div class="product__tag" v-for="(tag, index) in item.authorTags" v-bind:key="index">
                                    <a href="#" class="card-link" @click="filterTag(tag)">{{ tag }}</a>
                                </div>
                            </div>
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
    },
    methods: {
        filterTag(tagName) {
            alert(tagName)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
