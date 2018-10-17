<template>
    <c-layout navigationKey="product">
            <div class="container-fluid">
                <div class="row" v-if="!product">
                    <div class="col-12">
                        Product not found
                    </div>
                </div>
                <div class="row" v-if="product">
                    <div class="col-12">
                        <h1 class="title margin-top-10">{{ product.name }}</h1>

                        <c-tags-list :tags="product.developer_tags" v-if="!editing"></c-tags-list>

                        <ul class="nav nav-tabs margin-bottom-30 justify-content-between">
                            <li class="nav-item">
                                <router-link :to="`/product/${product.id}`" class="nav-link">Overview</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="`/product/${product.id}/community`" class="nav-link">Community</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="`/product/${product.id}/projects`" class="nav-link active">Crowdfunding</router-link>
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
                            <div class="row">
                                <div class="col-12 col-md-6 col-lg-3">
                                    <c-project-card
                                        v-for="(project, index) in projects"
                                        :key="index"
                                        :image="project.images.medium_tile"
                                        :description="project.description"
                                        :funds="project.funds"
                                        :productImage="product.images.medium_tile"
                                        :productName="product.name"
                                        :productDeveloper="product.developer"
                                        :showGame="false"
                                        class="margin-0 w-100"
                                    />
                                </div>
                            </div>
                        </c-block>
                    </div>
                </div>
            </div>
    </c-layout>
</template>

<script>
const updateProduct = function () {
    if (!this.product)
        return

    if (this.product.images.preview && this.product.images.preview.length) {
        const header = window.document.getElementById('header-bg');
        header.style['background-image'] = 'url(' + this.product.images.preview[0] + ')';
        header.style['background-size'] = 'cover';
    }
}

export default {
    props: ['id'],
    components: {
        'c-layout': (resolve) => require(['@/ui/layouts/default'], resolve),
        'c-tags-list': (resolve) => require(['@/ui/components/tags'], resolve),
        'c-block': (resolve) => require(['@/ui/components/block'], resolve),
        'c-project-card': (resolve) => require(['@/ui/components/project/card'], resolve)
    },
    methods: {
        save() {
            this.$store.dispatch('marketplace/updateProduct', this.product)
        }
    },
    computed: {
        product: updateProduct,
        product() {
            return this.$store.state.marketplace.products[this.id]
        },
        projects() {
            return BlockHub.DB.funding.projects.find({ 'target_id': { '$eq': this.product.id } }) || []
            //return this.product.projects ? this.product.projects.map(id => this.$store.state.funding.projects[id]) : []
        },
        editing() {
            if (!this.$store.state.application.editor_mode) {
                for (let key in this.activeElement) {
                    this.activeElement[key] = false
                }
            }
            return this.$store.state.application.editor_mode === 'editing'
        },
    },
    mounted: updateProduct,
    created: updateProduct,
    beforeDestroy() {
        window.document.getElementById('header-bg').style['background-image'] = 'url(/static/img/backgrounds/1.jpg)'
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
        padding: 15px;
        border-radius: 5px;
        width: calc(100%/3 - 20px);
        margin: 10px;
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

