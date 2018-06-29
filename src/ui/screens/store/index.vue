<template>
    <c-layout navigationKey="storeNavigation">
        <div class="content" id="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <h3>New Releases</h3>
                    </div>
                    <div class="col-3" v-for="(item, index) in products" v-bind:key="index">
                        <div class="card invert">
                            <a :href="`/#/product/${item.id}`"><img class="card-img-top" :src="item.images.mediumTileUrl" /></a>
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
.col-3 {
    padding: 0 5px;
}

.card {
    border: 1px solid rgba(0, 0, 0, 0.03);
    box-shadow: 0 0 2px rgba(255, 255, 255, 0.1);
}

.card > a {
    padding: 7px;
}

.card-title a {
    color: #fff;
    font-family: Barlow, sans-serif;
    font-weight: bold;
    font-size: 20px;
}

.card-link {
    color: #C6C6D6;
    background: #3D3E5D;
    border-radius: 4px;
    padding: 0px 6px;
    font-size: 13px;
}
</style>
