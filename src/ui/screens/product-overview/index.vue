<template>
    <c-layout navigationKey="product-navigation">
        <div class="content" id="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12" v-if="!product">
                        Product not found
                    </div>
                    <div class="col-12" v-if="product">
                        <h1 class="title margin-top-10 margin-bottom-15">{{ product.name }}</h1>

                        <c-tags-list :tags="product.author_tags"></c-tags-list>

                        <ul class="nav nav-tabs margin-bottom-50 justify-content-between">
                            <li class="nav-item">
                                <a class="nav-link active" :href="`/#/product/${product.id}`">Overview</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" :href="`/#/product/${product.id}/community`">Community</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" :href="`/#/product/${product.id}/projects`">Projects</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" :href="`/#/product/${product.id}/assets`">Assets</a>
                            </li>
                        </ul>

                        <div class="row">
                            <div class="col-7">
                                <c-screen-gallery></c-screen-gallery>

                                <c-sale-box
                                    :sale_box="product.sale_box"
                                    v-if="product.sale_box"
                                ></c-sale-box>

                                <c-plan-list></c-plan-list>

                                <div class="main-content" v-html="product.content">
                                    {{ product.content }}
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="card invert" v-if="product.funding">
                                    <div class="card-body">
                                        <h2 class="title">Crowndfunding campaign</h2>
                                        <div class="crowndfunding-campaign">
                                            <div class="crowndfunding-campaign__progress">
                                                <div v-for="(stage, index) in product.funding.stages" :key="index"
                                                     :class="stage.status"
                                                     class="crowndfunding-campaign__progress-stage">
                                                    <i class="fas fa-check" v-if="stage.status === 'done'"></i>
                                                    <i class="fas fa-clock" v-if="stage.status === 'in_progress'"></i>
                                                    <span class="stage_line"></span>
                                                    <span class="name">{{ stage.text}}</span>
                                                </div>
                                            </div>
                                            <div class="crowndfunding-campaign__info">
                                                <div class="funded">
                                                    <div class="text">114% Funded</div>
                                                    $ {{ product.funding.funded_amount }}
                                                </div>
                                                <div class="goal">
                                                    <div class="text">Goal</div>
                                                    $ {{ product.funding.goal_amount }}
                                                </div>
                                                <div class="spent-blk">
                                                    <div class="progress progress-bar-vertical">
                                                        <div class="progress-bar bg-success" role="progressbar"
                                                             :aria-valuenow="product.funding.spent_amount['percent']"
                                                             aria-valuemin="0" aria-valuemax="100"
                                                             :style="{ height: product.funding.spent_amount['percent'] + '%' }">
                                                            <span class="sr-only">{{ product.funding.spent_amount['percent'] }}% Complete</span>
                                                        </div>
                                                    </div>
                                                    <div class="text">Spent</div>
                                                    $ {{ product.funding.spent_amount['amount'] }}
                                                </div>
                                                <div class="locked-blk">
                                                    <div class="progress progress-bar-vertical">
                                                        <div class="progress-bar bg-success" role="progressbar"
                                                             :aria-valuenow="product.funding.locked_amount['percent']"
                                                             aria-valuemin="0" aria-valuemax="100"
                                                             :style="{ height: product.funding.locked_amount['percent'] + '%' }">
                                                            <span class="sr-only">{{ product.funding.locked_amount['percent'] }}% Complete</span>
                                                        </div>
                                                    </div>
                                                    <div class="text">Locked</div>
                                                    $ {{ product.funding.locked_amount['amount'] }}
                                                </div>
                                                <div class="overflow-blk">
                                                    <div class="progress progress-bar-vertical">
                                                        <div class="progress-bar bg-success" role="progressbar"
                                                             :aria-valuenow="product.funding.overflow_amount['percent']"
                                                             aria-valuemin="0" aria-valuemax="100"
                                                             :style="{ height: product.funding.overflow_amount['percent'] + '%' }">
                                                            <span class="sr-only">{{ product.funding.overflow_amount['percent'] }}% Complete</span>
                                                        </div>
                                                    </div>
                                                    <div class="text">Overflow</div>
                                                    $ {{ product.funding.overflow_amount['amount'] }}
                                                </div>
                                            </div>
                                            <div class="crowndfunding-campaign__action">
                                                <a href="#3" class="follow_link">
                                                    <i class="fas fa-check"></i>
                                                    Follow
                                                </a>
                                                <a href="#3" class="share_link">
                                                    <i class="fas fa-share"></i>
                                                    Share
                                                </a>
                                                <a href="#3" class="support_link">
                                                    <i class="fas fa-life-ring"></i>
                                                    Support
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card invert milestones-blk" v-if="product.milestones">
                                    <div class="card-body">
                                        <h2 class="title">Milestones</h2>
                                        <ul class="milestones-blk__list">
                                            <li v-for="(item, index) in product.milestones"
                                                v-bind:class="{ done: item.status }" :key="index">
                                                <div class="step_number" v-if="item.step_number">
                                                    {{ item.step_number}}
                                                </div>
                                                <div class="status_done" v-else>
                                                    <i class="fas fa-check"></i>
                                                </div>
                                                <div class="text">
                                                    {{ item.text}}
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="card invert rating-blk" v-if="product.rating">
                                    <div class="card-body">
                                        <h2 class="title">Rating</h2>
                                        <ul class="rating-blk__list">
                                            <li v-for="(item, index) in product.rating" :key="index">
                                                <div class="rating-blk__info">
                                                    <span class="rating-blk__name">{{ item.name }}</span>
                                                    <span class="rating-blk__number">{{ item.number }}</span>
                                                </div>
                                                <span class="rating-blk__stars">
                                                    <i class="fas fa-star" v-for="num in Math.floor(item.number)" :key="num"></i>
                                                    <i class="fas fa-star-half"
                                                       v-if="Number.isInteger(item.number) === false"></i>
                                                </span>
                                            </li>
                                        </ul>
                                        <a href="#reviews" class="btn btn-outline-white">See Full Reviews</a>
                                        <a href="#reviews" class="btn btn-outline-white">Rate the game</a>
                                    </div>
                                </div>

                                <div class="card invert traded-assets" v-if="product.assets_data">
                                    <div class="card-body">
                                        <h2 class="title">Frequently Traded Assets</h2>
                                        <div class="traded-assets__filter">
                                            <div class="dropdown">
                                                <a class="btn btn-secondary dropdown-toggle" href="#" role="button"
                                                   id="mostMenuLink" data-toggle="dropdown" aria-haspopup="true"
                                                   aria-expanded="false">
                                                    Most valuable
                                                </a>
                                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                    <a class="dropdown-item" href="#">Action</a>
                                                    <a class="dropdown-item" href="#">Another action</a>
                                                    <a class="dropdown-item" href="#">Something else here</a>
                                                </div>
                                            </div>
                                            <div class="dropdown">
                                                <a class="btn btn-secondary dropdown-toggle" href="#" role="button"
                                                   id="rarityMenuLink" data-toggle="dropdown" aria-haspopup="true"
                                                   aria-expanded="false">
                                                    Rarity
                                                </a>
                                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                    <a class="dropdown-item" href="#">Action</a>
                                                    <a class="dropdown-item" href="#">Another action</a>
                                                    <a class="dropdown-item" href="#">Something else here</a>
                                                </div>
                                            </div>
                                        </div>
                                        <ul class="traded-assets__list">
                                            <li class="traded-assets__item" v-for="(item, index) in product.frequently_traded_assets" :key="index">
                                                <a :href="`/#/asset/${item.id}`">
                                                    <img :src="item.image_data" />
                                                </a>
                                            </li>
                                        </ul>
                                        <a :href="`/#/product/${product.id}/assets`" class="btn btn-outline-white">Go To Assets</a>
                                    </div>
                                </div>

                                <div class="card invert community-spotlight" v-if="product.community">
                                    <div class="card-body">
                                        <h2 class="title">Community Spotlight
                                            <a href="#3" class="title-icon">
                                                <i class="fas fa-comments"></i>
                                                <i class="fas fa-arrow-up"></i>
                                            </a>
                                        </h2>
                                        <ul class="community-spotlight__list">
                                            <li v-for="(item, index) in product.community.discussions" :key="index">
                                                <a :href="item.link">
                                                    <span class="community-spotlight__name">{{ item.name }}</span>
                                                    <span class="community-spotlight__count">{{ item.count }}</span>
                                                </a>
                                            </li>
                                        </ul>
                                        <a :href="`/#/product/${product.id}/community`" class="btn btn-outline-white">Go To Forums</a>
                                    </div>
                                </div>

                                <div class="card invert system-requirements" v-if="product.system_requirements_data">
                                    <div class="card-body">
                                        <h2 class="title">System Requirements <i class="fas fa-laptop title-icon"></i>
                                        </h2>
                                        <div class="system-requirements__item"
                                             v-for="(item, index) in product.system_requirements_data" :key="index">
                                            <h6>{{ item.system }} <i :class="item.icon"></i></h6>
                                            <p>{{ item.requirements }}</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="card transparent languages-blk" v-if="product.language_support">
                                    <div class="card-body">
                                        <h2 class="title">Languages <i class="fas fa-laptop title-icon"></i></h2>
                                        <ul class="languages-list">
                                            <li class="languages-list__item"
                                                v-for="(item, index) in product.language_support"
                                                :key="index">
                                                <span class="languages-list__name">{{ item.name }}</span>
                                                <span class="languages-list__icon">
                                                    <i class="fas fa-closed-captioning"
                                                       v-if="item.closed_captioning"></i>
                                                    <i class="fas fa-audio-description"
                                                       v-if="item.audio_description"></i>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {{ product.author }}
                        {{ product.images }}

                        <div v-html="product.content"></div>

                        <input type="text" name="name" v-model.lazy="product.name"/>

                        <button class="btn" @click="save()">Save</button>
                        view:
                        https://user-images.githubusercontent.com/156768/41747362-8f17d1e8-7562-11e8-8c42-72a78233f921.png
                        create:
                        https://user-images.githubusercontent.com/156768/41747248-230a0142-7562-11e8-919f-41d8dd97cea6.png
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

        if (product.images && product.images.header_url)
            window.document.body.style['background-image'] = 'url(' + product.images.header_url + ')'

        return product
    }

    export default {
        props: ['id'],
        components: {
            'c-layout': () => import('@/ui/layouts/default'),
            'c-plan-list': () => import('@/ui/components/game-plans/list'),
            'c-screen-gallery': () => import('@/ui/components/screen-gallery/gallery'),
            'c-sale-box': () => import('@/ui/components/sale-box/box'),
            'c-tags-list': () => import('@/ui/components/product-tags')
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
    .product__tag {
        margin-bottom: 25px;
        .tag-link {
            background: #fbe17d;
            border-radius: 3px;
            padding: 2px 5px;
            margin-right: 8px;
            color: #000;
            text-transform: lowercase;
            font-size: 13px;
            font-weight: bold;
            &:hover {
                text-decoration: none;
                background: #d8c26c;
            }
            &:last-child {
                margin: 0;
            }
        }
    }

    .main-content {
        margin-top: 15px;
        padding: 15px;
        border-radius: 5px;
        border: 1px solid rgba(255, 255, 255, 0.07);
        overflow: hidden;
        color: #C6C6D6;
        font-size: 14px;
        h2 {
            font-size: 21px;
            margin-bottom: 30px;
        }
        p {
            margin-bottom: 20px;
        }
        img{
            max-width: 100%;
            height: auto;
        }
        &.with_bg{
            color: #1C2032;
            background: #FEEBCE;
        }
    }

    .card {
        background: rgba(0, 0, 0, .13);
        border: 1px solid rgba(70, 70, 70, 0.5);
        border-radius: 5px;
        margin-bottom: 15px;
        h2 {
            color: #fff;
            font-size: 21px;
            text-align: left;
            margin-bottom: 15px;
            font-weight: bold;
            .title-icon {
                float: right;
                vertical-align: text-bottom;
                font-size: 15px;
                margin-top: 6px;
                color: #fff;
                text-decoration: none;
            }
        }
        .card-body {
            padding: 10px;
        }
        &.transparent {
            border: none;
            background: transparent;
        }
    }

    .crowndfunding-campaign__progress {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        flex-wrap: nowrap;
        overflow: hidden;
        margin: 10px -6%;
    }
    .crowndfunding-campaign__progress-stage {
        width: 50%;
        text-align: center;
        span {
            display: inline-block;
            width: 100%;
            position: relative;
            text-transform: uppercase;
            font-weight: bold;
            overflow: hidden;
            &.stage_line{
                background: #3D691F;
                height: 15px;
                float: left;
            }
            &.name{
                padding-top: 15px;
                &:after {
                    position: absolute;
                    top: 5px;
                    width: 2px;
                    content: "";
                    height: 8px;
                    left: calc( 50% - 1px );
                    display: inline-block;
                    background: #fff;
                }
            }
        }
        i {
            margin-bottom: 7px;
            font-size: 10px;
            display: block;
            width: 100%;
        }
        &:first-child {
            .stage_line {
                border-radius: 5px 0 0 5px;
                width: 65%;
                float: right;
            }
            &.in_progress {
                .stage_line {
                    &:after {
                        left: 25%;
                    }
                }
            }
        }
        &:last-child {
            .stage_line {
                border-radius: 0 5px 5px 0;
                width: 65%;
                float: left;
            }
            &.in_progress {
                .stage_line {
                    &:after {
                        left: 75%;
                    }
                }
            }
        }
        &.done {
            span {
                &:before {
                    background: #3D691F;
                }
            }
            i {
                color: #3D691F;
            }
        }
        &.in_progress {
            .stage_line {
                &:after {
                    position: absolute;
                    background: #5EA72B;
                    height: 100%;
                    left: 0%;
                    right: 0;
                    content: "";
                    display: inline-block;
                }
            }
            i {
                color: #FADC72;
            }
        }
        &.awaiting {
            .stage_line {
                background: #5EA72B;
            }
        }
    }
    .crowndfunding-campaign__info {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: 10px 0;
        .funded,
        .goal {
            background: rgba(0, 0, 0, 0.16);
            border-radius: 5px;
            width: calc(50% - 5px);
            padding: 10px;
            color: #fff;
            font-size: 18px;
            .text {
                font-size: 14px;
                font-weight: bold;
                margin-bottom: 5px;
                text-transform: uppercase;
            }
        }
        .spent-blk,
        .locked-blk,
        .overflow-blk {
            width: 32%;
            margin-top: 10px;
            font-size: 15px;
            position: relative;
            .text {
                font-weight: bold;
                margin-bottom: 4px;
            }
            .progress-bar-vertical {
                width: 5px;
                min-height: calc( 100% - 7px );
                display: flex;
                align-items: flex-end;
                margin: 4px 8px 3px 0;
                float: left;
                border-radius: 0;
                background: #fff;
                .progress-bar {
                    width: 100%;
                    height: 0;
                    -webkit-transition: height 0.6s ease;
                    -o-transition: height 0.6s ease;
                    transition: height 0.6s ease;
                }
            }
        }
    }
    .crowndfunding-campaign__action{
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
        margin-top: 15px;
        a{
            width: 31%;
            border-radius: 5px;
            color: #fff;
            font-size: 13px;
            text-transform: uppercase;
            text-align: center;
            box-shadow: 0 1px 3px rgba(0, 0, 0, .16);
            line-height: 24px;
            font-weight: bold;
            text-decoration: none;
            i{
                margin-right: 5px;
                font-size: 16px;
            }
            &.follow_link{
                background: #436CC9;
                &:hover{
                    background: #314e92;
                }
            }
            &.share_link{
                background: #43B4C9;
                &:hover{
                    background: #348b9b;
                }
            }
            &.support_link{
                background: #43C981;
                &:hover{
                    background: #2e8b59;
                }
            }
        }
    }

    .milestones-blk__list {
        padding: 0;
        margin: 0;
        li {
            list-style: none;
            font-size: 14px;
            font-weight: bold;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 5px 5px 5px 0;
            border-radius: 5px;
            box-shadow: 0 3px 6px rgba(0, 0, 0, .16);
            background: #27283E;
            margin-bottom: 10px;
            &:last-child {
                margin-bottom: 0;
            }
            &.done {
                border: 2px solid #5EA72B;
            }
            .text {
                flex-basis: calc(100% - 40px);
                text-align: left;
            }
            .step_number {
                flex-basis: 40px;
                text-align: center;
                font-size: 22px;
            }
            .status_done {
                flex-basis: 40px;
                text-align: center;
                font-size: 22px;
                color: #5EA72B;
            }
        }
    }

    .rating-blk__list {
        padding: 0;
        li {
            list-style: none;
            display: block;
            overflow: hidden;
            font-size: 14px;
            margin-bottom: 8px;
            color: #fff;
            .rating-blk__info {
                display: inline-block;
                float: left;
                width: calc(100% - 90px);
                .rating-blk__name {
                    float: left;
                    width: 80%;
                    font-weight: bold;
                }
                .rating-blk__number {
                    float: right;
                    width: 20%;
                    text-align: right;
                }
            }
            .rating-blk__stars {
                float: right;
                text-align: left;
                width: 80px;
            }
        }
    }
    a.btn-outline-white {
        font-size: 12px;
        text-transform: uppercase;
        color: #fff;
        border: 1px solid #fff;
        border-radius: 5px;
        font-weight: bold;
        display: inline-block;
        float: left;
        line-height: 24px;
        padding: 0 8px;
        width: auto;
        margin: 5px 10px 3px 0;
        &:last-child {
            margin-right: 0;
        }
        &:hover {
            background: #fff;
            color: #000;
            text-decoration: none;
        }
    }

    .traded-assets {
        a.btn-outline-white {
            font-size: 12px;
            text-transform: uppercase;
            color: #fff;
            border: 1px solid #fff;
            border-radius: 5px;
            font-weight: bold;
            display: inline-block;
            float: left;
            line-height: 24px;
            padding: 0 8px;
            width: auto;
            margin: 5px 10px 3px 0;
            &:last-child {
                margin-right: 0;
            }
            &:hover {
                background: #fff;
                color: #000;
                text-decoration: none;
            }
        }
    }
    .traded-assets__filter {
        .dropdown {
            display: inline-block;
            float: left;
            margin-right: 20px;
            &:last-child {
                margin-right: 0;
            }
            a.dropdown-toggle {
                padding: 0;
                background: transparent;
                border: none;
                font-size: 11px;
                text-transform: uppercase;
                &:active,
                &:focus {
                    box-shadow: none;
                    border: none;
                    background: transparent;
                }
                &:after {
                    margin-left: 18px;
                }
            }
            .dropdown-menu {
                .dropdown-item {
                    padding-left: 15px;
                    &:after {
                        display: none;
                    }
                }
            }
        }
    }
    .traded-assets__list {
        padding: 0;
        display: block;
        width: 100%;
        overflow: hidden;
        margin: 10px -10px;
        .traded-assets__item {
            list-style: none;
            display: inline-block;
            float: left;
            width: 25%;
            padding: 10px;
            img {
                /*height: 60px;*/
                width: auto;
                max-width: 100%;
                max-height: 100%;
            }
        }
    }

    .community-spotlight {
        a.btn-outline-white {
            font-size: 12px;
            text-transform: uppercase;
            color: #fff;
            border: 1px solid #fff;
            border-radius: 5px;
            font-weight: bold;
            display: inline-block;
            float: left;
            line-height: 24px;
            padding: 0 8px;
            width: auto;
            margin: 5px 10px 3px 0;
            &:last-child {
                margin-right: 0;
            }
            &:hover {
                background: #fff;
                color: #000;
                text-decoration: none;
            }
        }
    }
    .community-spotlight__list {
        padding: 0;
        margin: 10px 0;
        display: block;
        width: 100%;
        overflow: hidden;
        li {
            display: block;
            width: 100%;
            overflow: hidden;
            margin: 5px 0;
            padding-right: 20px;
            position: relative;
            &:after {
                position: absolute;
                right: 0px;
                top: 1px;
                bottom: 0;
                width: 20px;
                content: "\f086";
                font-family: 'Font Awesome 5 Free';
                color: #fff;
                text-align: right;
            }
            a {
                color: #fff;
            }
        }
    }
    .community-spotlight__name {
        float: left;
        max-width: 70%;
        font-weight: bold;
    }
    .community-spotlight__count {
        float: right;
        max-width: 30px;
    }

    .system-requirements__item {
        display: block;
        width: 100%;
        margin-bottom: 10px;
        background: rgba(0, 0, 0, .13);
        border: 1px solid rgba(70, 70, 70, 0.5);
        border-radius: 5px;
        padding: 5px;
        position: relative;
        &:last-child {
            margin-bottom: 0;
        }
        h6 {
            font-weight: bold;
            font-size: 14px;
            padding-bottom: 0;
            i {
                float: right;
            }
        }
        p {
            margin: 0;
        }
    }

    .languages-list {
        padding: 0;
    }
    .languages-list__item {
        list-style: none;
        display: block;
        margin: 5px 0;
        width: 100%;
        overflow: hidden;
    }
    .languages-list__name {
        float: left;
        max-width: 80%;
        font-size: 14px;
        font-weight: bold;
    }
    .languages-list__icon {
        float: right;
        max-width: 20%;
        text-align: right;
        i {
            margin-right: 5px;
            &:last-child {
                margin-right: 0;
            }
        }
    }
</style>
