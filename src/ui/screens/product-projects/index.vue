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

                        <c-tags-list :tags="product.author_tags" v-if="!editing"></c-tags-list>

                        <ul class="nav nav-tabs margin-bottom-50 justify-content-between">
                            <li class="nav-item">
                                <router-link :to="`/product/${product.id}`" class="nav-link">Overview</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="`/product/${product.id}/community`" class="nav-link">Community</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="`/product/${product.id}/projects`" class="nav-link active">Projects</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="`/product/${product.id}/assets`" class="nav-link">Assets</router-link>
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
                                <c-button status="info" icon_hide>Submit Project</c-button>
                            </div>
                        </div>
                    </div>

                    <div class="col-12">
                        <c-block title="Top 3 Submissions" :noGutter="true" :bgGradient="true" :onlyContentBg="true">
                            <c-project-card
                                v-for="(project, index) in projects"
                                :key="index"
                                :project="project"
                                :showGame="false"
                            />
                        </c-block>
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

    if (product.images.preview && product.images.preview.length) {
        const header = window.document.getElementById('header-bg');
        header.style['background-image'] = 'url(' + product.images.preview[0] + ')';
        header.style['background-size'] = 'cover';
    }

    if (!product.projects)
        product.projects = []

    return product
}

export default {
    props: ['id'],
    components: {
        'c-layout': (resolve) => require(['@/ui/layouts/default'], resolve),
        'c-tags-list': (resolve) => require(['@/ui/components/tags'], resolve),
        'c-block': (resolve) => require(['@/ui/components/block'], resolve),
        'c-project-card': (resolve) => require(['@/ui/components/project/card'], resolve)
    },
    data() {
        return {
            projects: [
                {
                    description: 'Add new desert canyon themed area with 15 new monsters, 4 bosses and 2 dungeons.',
                    img: 'https://cnet1.cbsistatic.com/img/zSoSnjjOVxk2Hl0HOsT-nrFaYsc=/970x0/2018/04/02/068c90d1-19d9-4703-a5be-9814b2c7f8bb/fortnite-stock-image-1.jpg',
                    funds: {
                        currency: 'USD',
                        obtained: 2834,
                        goal: 5000
                    }
                },
                {
                    description: 'Add new desert canyon themed area with 15 new monsters, 4 bosses and 2 dungeons.',
                    img: 'https://cnet1.cbsistatic.com/img/zSoSnjjOVxk2Hl0HOsT-nrFaYsc=/970x0/2018/04/02/068c90d1-19d9-4703-a5be-9814b2c7f8bb/fortnite-stock-image-1.jpg',
                    funds: {
                        currency: 'USD',
                        obtained: 1234,
                        goal: 16000
                    }
                }

            ]
        }
    },
    methods: {
        save() {
            this.$store.dispatch('marketplace/updateProduct', this.product)
        }
    },
    computed: {
        product: updateProduct,
        editing() {
            if (!this.$store.state.marketplace.editor_mode) {
                for (let key in this.activeElement) {
                    this.activeElement[key] = false
                }
            }
            return this.$store.state.marketplace.editor_mode === 'editing'
        },
    },
    mounted: updateProduct,
    created: updateProduct,
    beforeDestroy() {
        window.document.getElementById('header-bg').style['background-image'] = 'url(/static/img/products/default.png)'
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

    .project-card__container {
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
    }
    .project-card__item {
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
        .item-action{
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
</style>

