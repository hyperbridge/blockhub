<template>
    <c-layout navigationKey="store-navigation">
        <div class="content" id="content">
            <div class="container-fluid">
                <div class="row justify-content-center frontpage-product" v-if="frontpage_product">
                    <div class="col-12 col-lg-6 frontpage-product__slider" v-if="frontpage_product.images">
                        <img :src="frontpage_product.images.medium_tile" />
                    </div>
                    <div class="col-12 col-lg-6 frontpage-product__info">
                        <h2><a :href="`/#/product/${frontpage_product.id}`">{{ frontpage_product.name }}</a></h2>
                        <p>{{ frontpage_product.short_description }}</p>
                        <c-tags :tags="frontpage_product.author_tags"></c-tags>
                        <div class="frontpage-product__footer">
                            <div class="price-list">
                                <div class="price old_price" v-if="frontpage_product.old_price">
                                    {{ frontpage_product.old_price }}
                                    <span>usd</span>
                                </div>
                                <div class="price">
                                    {{ frontpage_product.price }}
                                    <span>usd</span>
                                </div>
                            </div>
                            <a href="#" class="btn btn-success"><i class="fas fa-cart-plus"></i> add to cart</a>
                        </div>
                    </div>
                </div>
                <div class="row product-grid">
                    <div class="col-12">
                        <c-heading-bar name="New Releases" :showArrows="true" />
                    </div>

                    <div class="col-12 col-lg-4" v-for="(item, index) in new_products" v-bind:key="index">
                        <div class="card invert product-grid__item">
                            <div class="card-body padding-0" v-if="frontpage_product.images">
                                <a :href="`/#/product/${item.id}`"><img class="card-img-top" :src="item.images.medium_tile" /></a>
                                <h4><a :href="`/#/product/${item.id}`">{{ item.name }}</a></h4>
                                <p class="card-text" hidden>{{ item.short_description }} </p>

                                <c-tags :tags="item.author_tags"></c-tags>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row product-grid">
                    <div class="col-12">
                        <c-heading-bar name="Summer Sale" :showArrows="true" :showBackground="true" />
                    </div>

                    <div class="col-12 col-lg-4" v-for="(item, index) in sale_products" v-bind:key="index">
                        <div class="card invert product-grid__item">
                            <div class="card-body padding-0" v-if="frontpage_product.images">
                                <a :href="`/#/product/${item.id}`"><img class="card-img-top" :src="item.images.medium_tile" /></a>
                                <h4><a :href="`/#/product/${item.id}`">{{ item.name }}</a></h4>
                                <p class="card-text" hidden>{{ item.short_description }} </p>

                                <c-tags :tags="item.author_tags"></c-tags>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="row product-grid">
                    <div class="col-12">
                        <c-heading-bar name="Crowdfund Projects" more="/#/projects" :showArrows="false" :showBackground="true" />
                    </div>

                    <div class="col-12 col-lg-4" v-for="(item, index) in projects" v-bind:key="index">
                        <div class="card invert product-grid__item">
                            <div class="card-body padding-0" v-if="frontpage_product.images">
                                <a :href="`/#/project/${item.id}`"><img class="card-img-top" :src="item.images.medium_tile" /></a>
                                <h4><a :href="`/#/project/${item.id}`">{{ item.name }}</a></h4>
                                <p class="card-text" hidden>{{ item.short_description }} </p>

                                <c-tags :tags="item.author_tags"></c-tags>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
const updateLandingImage = function() {
    const frontpage_product = this.$store.state.marketplace.frontpage_product

    if (frontpage_product.images && frontpage_product.images.header)
        window.document.body.style['background-image'] = 'url(' + frontpage_product.images.header + ')'
}

export default {
    components: {
        'c-layout': () => import('@/ui/layouts/default'),
        'c-tags': () => import('@/ui/components/product-tags'),
        'c-heading-bar': () => import('@/ui/components/heading-bar')
    },
    computed: {
        projects() {
            return this.$store.state.funding.projects
        },
        products() {
            if (this.$store.state.cache.screens['/store'] && this.$store.state.cache.screens['/store'].products)
                return this.$store.state.cache.screens['/store'].products

            return this.$store.state.marketplace.products
        },
        new_products() {
            return this.$store.state.marketplace.new_products
        },
        sale_products() {
            return this.$store.state.marketplace.sale_products
        },
        frontpage_product() {
            updateLandingImage.bind(this)()

            return this.$store.state.marketplace.frontpage_product
        }
    },
    methods: {
        filterTag(tagName) {
            alert(tagName)
        }
    },
    mounted: updateLandingImage,
    created: updateLandingImage,
    beforeDestroy() {
        window.document.body.style['background-image'] = 'url(/static/img/products/default.png)'
    }
}
</script>

<style lang="scss" scoped>
    .frontpage-product{
        margin-bottom: 30px;
    }
    .frontpage-product__slider{
        img{
            width: 100%;
            height: 250px;
            object-fit: cover;
        }
    }
    .frontpage-product__info{
        h2{
            font-size: 26px;
            font-weight: bold;
            margin: 0;

            a {
                color: #fff;
            }
        }
        p{
            margin: 15px 0;
        }
    }
    .frontpage-product__footer{
        .price-list{
            margin-right: 15px;
            display: inline-block;
            float: left;
            .price{
                display: inline-block;
                float: left;
                margin-right: 15px;
                font-size: 18px;
                font-weight: bold;
                text-transform: uppercase;
                line-height: 32px;
                position: relative;
                overflow: hidden;
                span{
                    font-size: 13px;
                }
                &.old_price{
                    &:before{
                        position: absolute;
                        height: 2px;
                        left: 0;
                        right: 0;
                        top: 50%;
                        width: 100%;
                        background: red;
                        content: "";
                        display: inline-block;
                        transform: rotate(20deg);
                        opacity: 0.7;
                    }
                    &:after{
                        position: absolute;
                        height: 2px;
                        left: 0;
                        right: 0;
                        top: 50%;
                        width: 100%;
                        background: red;
                        content: "";
                        display: inline-block;
                        transform: rotate(-20deg);
                        opacity: 0.7;
                    }
                }
            }
        }
        a{
            padding: 5px 10px;
            text-transform: uppercase;
            font-size: 16px;
            font-weight: bold;
            i{
                margin-right: 5px;
            }
        }
    }

    .product-grid{
        margin-top: 60px;

    }
    .product-grid__item{
        padding: 8px 6px;
        border-radius: 5px;

        &:hover {
            will-change: transform;
            transform: perspective(300px) rotateX(0deg) rotateY(0deg) scale(1.03);
            box-shadow: 0 0 35px rgba(0, 0, 0, .2);
            transition: transform 200ms cubic-bezier(0.34, 1.01, 0.8, 0.24);
        }
        
        h4{
            color: #fff;
            font-weight: bold;
            font-size: 20px;
            padding: 13px 0;
            a{
                color: #fff;
                text-decoration: none;
            }
        }
        .product-tags {
            margin-top: 10px;
            margin-bottom: 0;
        }
    }
</style>

