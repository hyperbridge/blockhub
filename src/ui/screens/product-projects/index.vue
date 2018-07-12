<template>
    <c-layout navigationKey="product-navigation">
        <div class="content" id="content">
            <div class="container-fluid">  
                <div class="row">
                    <div class="col-12" v-if="!product">
                        Product not found
                    </div>
                    <div class="col-12" v-if="product">
                        <h1 class="title margin-top-10">{{ product.name }}</h1>
                        
                        <div class="product__tag" v-for="(tag, index) in product.authorTags" v-bind:key="index">
                            <a href="#" class="card-link" @click="filterTag(tag)">{{ tag }}</a>
                        </div>

                        <ul class="nav nav-tabs margin-bottom-50">
                            <li class="nav-item">
                                <a class="nav-link" :href="`/#/product/${product.id}`">Overview</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" :href="`/#/product/${product.id}/community`">Community</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" :href="`/#/product/${product.id}/projects`">Projects</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" :href="`/#/product/${product.id}/assets`">Assets</a>
                            </li>
                        </ul>

                        <div class="card" v-for="(project, index) in product.projects" v-bind:key="index">
                            <div class="page-heading">
                                <div class="page-heading__container">
                                    <h2 class="title">{{ project.title }}</h2>
                                    <p class="caption">Project ID: 1442, 02/2018 - 02/2018</p>
                                </div>
                            </div>
                            <div class="card-container">
                                <div class="dropdown">
                                    <div class="rw-btn rw-btn--card" data-toggle="dropdown" aria-expanded="false"><div></div></div>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <a class="dropdown-item" href="#">See details</a>
                                        <a class="dropdown-item" href="#">Download</a>
                                        <a class="dropdown-item" href="#">Edit</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#">Delete</a>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="card-inner-container">                                             
                                    <p class="text-muted margin-bottom-20">Invoice #9501 &mdash; 20 Feb, 2018</p>
                                    <div class="form-row">
                                        <div class="col-6">                                                                                                        
                                            <h3 class="margin-bottom-0">$800.00</h3>
                                            <span class="text-muted">Amount</span><br>                                                    
                                        </div>
                                        <div class="col-6 text-right">                                                    
                                            <h3 class="margin-bottom-0">24 Feb, 18</h3>
                                            <span class="text-muted">Due date</span><br>                                                    
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-7">
                                        
                                        <div class="user user--rounded user--bordered">
                                            <img src="http://via.placeholder.com/128x128">
                                            <div class="user__name">
                                                <strong>Francisco Dero</strong>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div class="col-5 text-right">
                                        <small class="text-muted">Total spent: 15h</small>
                                    </div>
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
const updateProduct = function() {
    if (!this.$store.state.marketplace.products)
        return

    const product = this.$store.state.marketplace.products[this.id]

    if (!product)
        return

    if (product.images && product.images.headerUrl)
        window.document.body.style['background-image'] = 'url(' + product.images.headerUrl + ')'
        
    return product
}

export default {
    props: ['id'],
    components: {
        'c-layout': () => import('@/ui/layouts/default')
    },
    data() {
        return {
        }
    },
    methods: {
        save() {
            this.$store.dispatch('marketplace/updateProduct', this.product)
        }
    },
    computed: {
        product: updateProduct
    },
    mounted: updateProduct,
    created: updateProduct,
    beforeDestroy() {
        window.document.body.style['background-image'] = 'url(/static/img/products/default.png)'
    }
}
</script>

<style lang="scss" scoped>

</style>

