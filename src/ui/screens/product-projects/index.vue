<template>
    <c-layout navigationKey="product-navigation">
        <div class="content" id="content">
            <div class="container-fluid">
                <div class="row" v-if="!product">
                    <div class="col-12">
                        Product not found
                    </div>
                </div>
                <div class="row" v-if="product">
                    <div class="col-12">
                        <h1 class="title margin-top-10">{{ product.name }}</h1>

                        <c-tags-list :tags="product.author_tags"></c-tags-list>

                        <ul class="nav nav-tabs margin-bottom-20 justify-content-between">
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
                    </div>
                    <div class="col-12">
                        <div class="filter d-flex justify-content-between">
                            <div class="form-group">
                                <div class="input-group input-group-sm">
                                    <input type="text" class="form-control" placeholder="Search" aria-label="Search">
                                    <div class="input-group-append">
                                        <span class="input-group-text">
                                            <i class="fas fa-search"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <a href="#3" class="btn btn-sm btn-info text-uppercase font-weight-bold">Submit
                                    Project</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-12">
                        <div class="card-container">
                            <h3>Top 3 Submissions</h3>
                            <div class="card">
                                <img
                                    src="https://cnet1.cbsistatic.com/img/zSoSnjjOVxk2Hl0HOsT-nrFaYsc=/970x0/2018/04/02/068c90d1-19d9-4703-a5be-9814b2c7f8bb/fortnite-stock-image-1.jpg"/>
                                <div class="description">
                                    Add new desert canyon themed area with 15 new monsters, 4 bosses and 2 dungeons.
                                </div>
                                <div class="progress-container">
                                    <div class="progress progress-bar-vertical">
                                        <div class="progress-bar bg-success" role="progressbar"
                                             aria-valuenow="40"
                                             aria-valuemin="0" aria-valuemax="100"
                                             style="height: 40%">
                                            <span class="sr-only">40% Complete</span>
                                        </div>
                                    </div>
                                    <div class="progress-info">
                                        <strong class="w-100">
                                            Obtained Funds
                                        </strong>
                                        <span>
                                        $4,726 of $ 11,000
                                        </span>
                                    </div>
                                </div>
                                <div class="card-action">
                                    <a href="#3" class="btn btn-sm btn-info">Participate</a>
                                    <a href="#3" class="btn btn-sm btn-success">Donate Funds</a>
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
    const updateProduct = function () {
        if (!this.$store.state.marketplace.products)
            return

        const product = this.$store.state.marketplace.products[this.id]

        if (!product)
            return

        if (product.images && product.images.header)
            window.document.body.style['background-image'] = 'url(' + product.images.header + ')'

        return product
    }

    export default {
        props: ['id'],
        components: {
            'c-layout': () => import('@/ui/layouts/default'),
            'c-tags-list': () => import('@/ui/components/product-tags')
        },
        data() {
            return {}
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
    .filter {
        margin-bottom: 10px;
        .input-group {
            border-color: rgba(0, 0, 0, .7);
            border-radius: 5px;
            overflow: hidden;
            .input-group-append {
                margin: 0;
                .input-group-text {
                    border: none;
                }
            }
            input {
                border: none;
                &:active,
                &:focus {
                    border: unset;
                    box-shadow: none;
                }
            }
        }
    }

    .progress-container {
        position: relative;
        padding-left: 20px;
        .progress-bar-vertical {
            width: 5px;
            position: absolute;
            left: 0;
            top: 4px;
            bottom: 4px;
            display: flex;
            align-items: flex-end;
            margin: 0;
            float: left;
            border-radius: 0;
            background: #fff;
            height: auto;
            .progress-bar {
                width: 100%;
                height: 0;
                -webkit-transition: height 0.6s ease;
                -o-transition: height 0.6s ease;
                transition: height 0.6s ease;
            }
        }
        .progress-info{
            font-size: 14px;
            strong{
                display: inline-block;
                width: 100%;
            }
        }
    }

    .card-container {
        background: rgba(0, 0, 0, .13);
        padding: 5px;
        border-radius: 5px;
        display: flex;
        align-items: stretch;
        flex-wrap: wrap;
        margin-bottom: 30px;
        border: 1px solid rgba(255, 255, 255, .1);
        h3{
            width: 100%;
            font-size: 21px;
            margin: 5px 10px 10px;
        }
        .card {
            background: rgba(0, 0, 0, .13);
            padding: 15px;
            border-radius: 5px;
            width: calc(100%/3 - 20px);
            margin: 10px;
            border: 1px solid rgba(255, 255, 255, .1);
            img {
                width: 100%;
                height: 170px;
                object-fit: cover;
                border-radius: 5px;
            }
            .description {
                margin: 15px 0;
                font-weight: bold;
                font-size: 16px;
            }
            .card-action{
                display: flex;
                justify-content: flex-end;
                align-items: center;
                flex-wrap: wrap;
                margin-top: 15px;
                a{
                    margin-left: 10px;
                    font-weight: bold;
                    text-transform: uppercase;
                }
            }
        }
    }
</style>

