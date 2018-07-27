<template>
    <c-layout navigationKey="store-navigation">
        <div class="content" id="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12" v-if="!product">
                        Product not found
                    </div>
                    <div class="col-12" v-if="product">
                        <h1 class="title margin-top-10">{{ product.name }}</h1>

                        <c-tags-list :tags="product.author_tags" v-if="!editor_mode"></c-tags-list>

                        <ul class="nav nav-tabs margin-bottom-50 justify-content-between">
                            <li class="nav-item">
                                <a class="nav-link" :href="`/#/product/${product.id}`">Overview</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" :href="`/#/product/${product.id}/community`">Community</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" :href="`/#/product/${product.id}/projects`">Projects</a>
                            </li>
                            <li class="nav-item pr-0">
                                <a class="nav-link" :href="`/#/product/${product.id}/assets`">Assets</a>
                            </li>
                        </ul>
                        <div class="card">
                            <div class="card-body">
                                <div class="icon">
                                    <i class="fas fa-map-pin"></i>
                                </div>
                                <div class="text">
                                    This post has been pinned and the title is a single line of text
                                </div>
                                <div class="statistic">
                                    <div class="rating down">
                                        <i class="fas fa-chevron-down"></i>
                                        87
                                    </div>
                                    <div class="user">
                                        <span class="time">25 min</span>
                                        <img src="https://www.shareicon.net/data/128x128/2015/09/20/104335_avatar_512x512.png" />
                                        <span class="name">Sakatoshi</span>
                                    </div>
                                    <div class="comments_count">
                                        <i class="fas fa-comment"></i>
                                        320
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <div class="icon">
                                    <i class="fas fa-lock"></i>
                                </div>
                                <div class="text">
                                    The previous title doesn't have it's single line aligned
                                    vertically because XD does not have this functionality.
                                </div>
                                <div class="statistic">
                                    <div class="rating up">
                                        <i class="fas fa-chevron-up"></i>
                                        103
                                    </div>
                                    <div class="user">
                                        <span class="time">3 min</span>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaeGUxfoKhj7XC5BMdwz8dQ9QbavjCMgk6ZXkn2biteSN1c7nL" />
                                        <span class="name">Nakatochi</span>
                                    </div>
                                    <div class="comments_count">
                                        <i class="fas fa-comment"></i>
                                        894391
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <div class="icon">
                                    <i class="fas fa-star"></i>
                                </div>
                                <div class="text">
                                    Actually all the boxes with the titles here are the same size
                                </div>
                                <div class="statistic">
                                    <div class="rating up">
                                        <i class="fas fa-chevron-up"></i>
                                        103
                                    </div>
                                    <div class="user">
                                        <span class="time">3 min</span>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaeGUxfoKhj7XC5BMdwz8dQ9QbavjCMgk6ZXkn2biteSN1c7nL" />
                                        <span class="name">Nakatochi</span>
                                    </div>
                                    <div class="comments_count">
                                        <i class="fas fa-comment"></i>
                                        894391
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <div class="icon">
                                    <i class="fas fa-comments"></i>
                                </div>
                                <div class="text">
                                    Actually all the boxes with the titles here are the same size
                                </div>
                                <div class="statistic">
                                    <div class="rating up">
                                        <i class="fas fa-chevron-up"></i>
                                        103
                                    </div>
                                    <div class="user">
                                        <span class="time">3 min</span>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaeGUxfoKhj7XC5BMdwz8dQ9QbavjCMgk6ZXkn2biteSN1c7nL" />
                                        <span class="name">Nakatochi</span>
                                    </div>
                                    <div class="comments_count">
                                        <i class="fas fa-comment"></i>
                                        894391
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

    if (product.images && product.images.header)
        window.document.body.style['background-image'] = 'url(' + product.images.header + ')'

    return product
}

export default {
    props: ['id'],
    components: {
        'c-layout': () => import('@/ui/layouts/default'),
        'c-tags-list': () => import('@/ui/components/product-tags'),
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
    .card{
        background: rgba(0, 0, 0, .16);
        border: 1px solid rgba(112, 112, 112, .7);
        margin-bottom: 15px;
        border-radius: 5px;
        .card-body{
            color: #fff;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .icon{
            width: 40px;
            height: 40px;
            margin-right: 15px;
            line-height: 40px;
            text-align: center;
            background: rgba(0, 0, 0, .13);
            font-size: 18px;
            .fa-map-pin{
                color: #5D75F7;
            }
            .fa-lock{
                color: #F75D5D;
            }
            .fa-star{
                color: #FADC72;
            }
            .fa-comments{
                color: #3D3E5D;
            }
        }
        .text{
            width: calc( 70% - 70px );
            font-weight: bold;
            font-size: 16px;
        }
        .statistic{
            width: 30%;
            min-width: 250px;
            margin-left: 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .rating{
                width: 40px;
                text-align: center;
                i{
                    margin-right: 5px;
                }
                &.down{
                    color: #F75D5D;
                }
                &.up{
                    color: #43C981;
                }
            }
            .user{
                text-align: center;
                img{
                    width: 20px;
                    height: 20px;
                    border-radius: 100%;
                    margin: 0 5px;
                    float: unset;
                }
            }
            .comments_count{
                width: 60px;
                text-align: left;
                i{
                    margin-right: 5px;
                }
            }
        }
    }
</style>
