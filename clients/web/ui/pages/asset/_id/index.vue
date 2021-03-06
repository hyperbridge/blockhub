<template>
    <Layout navigationKey="asset">
        <div class="container-fluid">
            <div
                v-if="!asset"
                class="row">
                <div class="col-12">
                    Asset not found
                </div>
            </div>
            <div
                v-if="asset"
                class="row">
                <div class="col-12 col-lg-8 col-xl-9 margin-bottom-15">
                    <div class="asset-head">
                        <div class="asset-head__asset-title">
                            <div class="title-thumb">
                                <Img
                                    :src="asset.image" />
                            </div>
                            <div class="title-text">
                                <h1>{{ asset.name }}</h1>
                                <span><strong>{{ asset.gameName }}</strong></span>
                                <span class="company">{{ asset.productName }}</span>
                            </div>
                        </div>
                        <div class="asset-head__icons">
                            <div class="icon_item">
                                <div class="icon">
                                    <i class="fas fa-box" />
                                </div>
                                <div class="info">
                                    <div class="h5 mb-0 font-weight-bold">
                                        {{ asset.inventoryCount | numeralFormat('0 a') }}
                                    </div>
                                    <p class="p-0">
                                        Your Inventory
                                    </p>
                                </div>
                            </div>
                            <div class="icon_item">
                                <div class="icon">
                                    <i class="fas fa-shopping-basket" />
                                </div>
                                <div class="info">
                                    <div class="h5 mb-0 font-weight-bold">
                                        {{ asset.existingCount | numeralFormat('0.0 a') }}
                                    </div>
                                    <p class="p-0">
                                        For Sale
                                    </p>
                                </div>
                            </div>
                            <div class="icon_item">
                                <div class="icon">
                                    <i class="fas fa-globe" />
                                </div>
                                <div class="info">
                                    <div class="h5 mb-0 font-weight-bold">
                                        {{ asset.forSaleCount | numeralFormat('0.0 a') }}
                                    </div>
                                    <p class="p-0">
                                        Existing
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 d-none d-lg-block col-lg-4 col-xl-3 margin-bottom-15">
                    <div class="asset-head__company-logo">
                        <Img
                            src="https://i.imgur.com/BngHC98.png"
                            class="img-fluid" />
                    </div>
                </div>

                <ModelObj
                    src="../../static/assets-3d/sylvanas/Sylvanas.obj"
                    mtl="../../static/assets-3d/sylvanas/Sylvanas.mtl"
                    :backgroundAlpha="0" />

                <div class="col-12 col-lg-6 margin-top-15 margin-bottom-15">
                    <Block
                        title="Attributes"
                        class="h-100"
                        :noGutter="true"
                        :onlyContentBg="true"
                        :bgGradient="true">
                        <template slot="additional-action">
                            <a
                                href="#"
                                class="font-weight-bold text-uppercase text-white">
                                Game View
                            </a>
                            <a
                                href="#"
                                class="font-weight-bold text-uppercase text-white ml-4">
                                Chart
                            </a>
                        </template>

                        <div class="metadata__table padding-bottom-10">
                            <div
                                v-for="(value, prop, index) in asset.metadata"
                                :key="index"
                                class="item-row">
                                <div class="item-label">
                                    <i class="fas fa-file" />
                                    {{ prop | space | upperFirstChar }}
                                </div>
                                <div class="item-description">
                                    <ul
                                        v-if="typeof value === 'object'"
                                        class="margin-0">
                                        <li
                                            v-for="(value, prop, index) in value"
                                            :key="index">
                                            {{ prop | space | upperFirstChar }}: {{ value }}
                                        </li>
                                    </ul>
                                    <span v-else>
                                        {{ value }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Block>
                </div>

                <div class="col-12 col-lg-6 margin-top-15 margin-bottom-15">
                    <Block
                        title="Sales"
                        class="h-100"
                        noGutter
                        onlyContentBg
                        bgGradient
                        showActions>
                        <template slot="additional-action">
                            <a
                                href="#"
                                class="font-weight-bold text-uppercase text-white">
                                History
                            </a>
                            <a
                                href="#"
                                class="font-weight-bold text-uppercase text-white ml-4">
                                Chart
                            </a>
                        </template>
                        <div v-if="sales" />
                        <p v-else>
                            Nothing to show for now
                        </p>
                    </Block>
                </div>

                <div class="col-12 margin-top-15 margin-bottom-15">
                    <Block
                        title="Offers"
                        class="padding-bottom-0"
                        noGutter
                        onlyContentBg
                        bgGradient
                        showActions>
                        <template slot="additional-action">
                            <HeadingBarFields
                                name="Rarity"
                                icon="trophy" />
                            <HeadingBarFields
                                name="Value"
                                icon="dollar" />
                        </template>
                        <ContentNavigation
                            :items="asset.offersList"
                            :setLimits="4">
                            <div
                                slot-scope="props"
                                class="offers__list">
                                <div
                                    v-for="(item, index) in props.items"
                                    :key="index"
                                    class="list-item">
                                    <div class="item-name-img">
                                        <Img :src="item.image" />
                                        <h4>{{ item.name }}</h4>
                                    </div>
                                    <div class="item-company text-center">
                                        {{ item.company_name }}
                                    </div>
                                    <div class="item-info">
                                        <span class="userName">
                                            {{ item.userName }}
                                        </span>
                                        <span class="price">
                                            $ {{ item.price.current }}
                                        </span>
                                        <a
                                            v-if="item.price.current"
                                            href="#"
                                            class="btn btn-success float-right">
                                            <Icon name="cart-plus" />
                                            Proceed to Purchase
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <template
                                slot="left-content"
                                class="text-left">
                                <strong>245345</strong> Available on the market
                            </template>
                            <template
                                slot="right-content"
                                class="text-right">
                                <strong>319</strong> On the list
                                <a
                                    href="#"
                                    class="text-white mx-2">
                                    <i class="fas fa-reply" />
                                </a>
                                <a
                                    href="#"
                                    class="text-white">
                                    <i class="fas fa-bookmark" />
                                </a>
                            </template>
                        </ContentNavigation>
                    </Block>
                </div>

                <div class="col-12 margin-top-15 margin-bottom-15">
                    <Block
                        class="padding-bottom-0"
                        title="Yours Inventory"
                        noGutter
                        onlyContentBg
                        bgGradient>
                        <ContentNavigation
                            :items="asset.inventoryList"
                            :setLimits="4">
                            <div
                                slot-scope="props"
                                class="my-assets__list">
                                <div
                                    v-for="(item, index) in props.items"
                                    :key="index"
                                    class="item">
                                    <Button
                                        status="plain"
                                        @click="openPopup(item)">
                                        <i class="fas fa-external-link-alt" />
                                    </Button>
                                    <div class="item_thumb">
                                        <Img :src="item.image" />
                                    </div>
                                    <div class="item_info">
                                        <h5>{{ item.name }}</h5>
                                        <span class="price">
                                            $ {{ item.price.current }}
                                        </span>
                                        <div class="switcher">
                                            <Toggle
                                                label="Accept offers"
                                                :checked="item.acceptOffers"
                                                size="sm"
                                                labelPosition="left"
                                                @change="$store.commit('assets/negateValue', {
                                                    id: item.id,
                                                    iprop: 'acceptOffers'
                                                })"
                                                @changev2="$store.commit('assets/negateValue', {
                                                    ['id'+item.id]: 'acceptOffers'
                                                })" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ContentNavigation>
                    </Block>
                </div>

                <div class="col-12 margin-top-15 margin-bottom-15">
                    <Block
                        title="Collections Containing this Item"
                        class="pb-0"
                        noGutter
                        onlyContentBg
                        bgGradient>
                        <ContentNavigation
                            v-if="asset.collections.length"
                            :items="asset.collections"
                            :setLimits="3">
                            <div
                                slot-scope="props"
                                class="collections-container">
                                <div
                                    v-for="(item, index) in props.items"
                                    :key="index"
                                    class="item">
                                    <CollectionItem :item="item" />
                                </div>
                            </div>
                        </ContentNavigation>
                        <p v-else>
                            Nothing to show for now
                        </p>
                    </Block>
                </div>
            </div>
        </div>
        <Popup
            :activated="show_popup"
            :width="550"
            @close="closePopup">
            <AssetPopup
                slot="customContent"
                :asset="tmpItem" />
        </Popup>
    </Layout>
</template>

<script>
import { ModelObj } from 'vue-3d-model'

export default {
    head() {
        return {
            title: `${this.asset.name}`,
            meta: [
                { hid: 'description', name: 'description', content: `BlockHub asset` },
                { hid: 'keywords', name: 'keywords', content: 'asset, blockchain, game, indie, developer' }
            ]
        }
    },
    components: {
        'HeadingBarFields': () => import('@ericmuyser/hyper-ui').then(m => m.HeadingBarFields),
        'CollectionItem': () => import('@ericmuyser/hyper-ui').then(m => m.CollectionItem),
        'Popup': () => import('@ericmuyser/hyper-ui').then(m => m.Popup),
        'AssetPopup': () => import('@ericmuyser/hyper-ui').then(m => m.AssetPopup),
        'ContentNavigation': () => import('@ericmuyser/hyper-ui').then(m => m.ContentNavigation),
        ModelObj
    },
    data() {
        return {
            totalOwned: 3,
            show_popup: false,
            tmpItem: {},
            sales: false, // ToDo
            assetId: this.id
        }
    },
    async asyncData({ params, store, error }) {
        await store.dispatch('assets/find', {
            query: {
                id: Number(params.id)
            }
        })

        const asset = store.getters['assets/get'](params.id)

        if (!asset) return error({ statusCode: 404, message: 'Asset not found' })

        return {
            asset,
            breadcrumbLinks: [
                { to: { path: '/' }, title: 'Home' },
                { to: { path: `/assets/${asset.id}` }, title: asset.name }
            ]
        }
    },
    methods: {
        numberFormat(value) {
            return Math.log(value) / Math.log(10)
        },
        closePopup() {
            this.show_popup = false
            this.tmpItem = {}
        },
        openPopup(obj) {
            this.tmpItem = obj
            this.show_popup = true
        }
    }
}
</script>

<style lang="scss" scoped>
    .asset-head {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .asset-head__asset-title {
        .title-thumb {
            display: inline-block;
            float: left;
            width: 70px;
            img {
                width: 100%;
            }
        }
        .title-text {
            display: inline-block;
            float: left;
            width: auto;
            max-width: calc(100% - 100px);
            margin-left: 25px;
            min-width: 30%;
            h1 {
                width: 100%;
                padding: 0 0 5px 0;
                margin: 0;
                font-size: 30px;
            }
            span {
                font-size: 14px;
                line-height: 20px;
                &.company {
                    img {
                        height: 16px;
                        width: auto;
                        margin-right: 8px;
                    }
                }
                strong {
                    font-weight: bold;
                }
                &.count_in_wallet {
                    float: right;
                }
            }
        }
    }

    .asset-head__icons{
        margin-top: auto;
        .icon_item{
            padding: 10px 15px 10px 10px;
            background: rgba(0, 0, 0, .13);
            color: #fff;
            display: inline-flex;
            align-items: center;
            border-radius: 5px;
            width: 30%;
            margin-right: 2%;
            .icon{
                width: 44px;
                height: 44px;
                font-size: 20px;
                border: 2px solid #fff;
                line-height: 40px;
                text-align: center;
                border-radius: 100%;
                margin: auto 15px auto 5px;
            }
            @media (max-width: 767px) {
                width: 100%;
                margin: 10px 0;
            }
        }
    }

    .asset-head__company-logo {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        img {
            width: auto;
            height: auto;
            max-width: 100%;
            max-height: 100%;
        }
    }

    .collections-container{
        display: flex;
        flex-wrap: wrap;
        margin: 10px -10px 0;
        .item{
            width: calc( 100%/ 3 - 20px);
            margin: 10px;
            @media (max-width: 767px) {
                width: 100%;
            }
        }
    }

    .offers__list {
        .list-item {
            display: flex;
            width: 100%;
            justify-content: space-between;
            flex-wrap: nowrap;
            align-items: center;
            padding: 10px;
            margin-bottom: 15px;
            background: #343555;
            border-radius: 5px;
            box-shadow: 0 3px 6px rgba(0, 0, 0, .1);
            &:hover{
                box-shadow: 0 3px 6px rgba(0, 0, 0, .25);
            }
            &:last-child {
                margin: 0;
            }
            .item-name-img {
                width: 300px;
                img {
                    display: inline-block;
                    height: 30px;
                    width: auto;
                    margin-right: 10px;
                }
                h4 {
                    display: inline-block;
                    font-size: 14px;
                    font-weight: bold;
                    padding: 0;
                    margin: 0;
                    vertical-align: middle;
                }
            }
            .item-info {
                width: 300px;
                text-align: right;
                span {
                    line-height: 26px;
                    font-size: 14px;
                    margin-right: 20px;
                    &.userName {
                        font-weight: bold;
                    }
                }
                a {
                    padding: 2px 7px;
                    text-transform: uppercase;
                    font-size: 13px;
                    font-weight: bold;
                    i {
                        margin-right: 5px;
                    }
                }
            }
        }
    }

    .metadata__table {
        overflow: hidden;
        .item-row {
            display: inline-block;
            width: 100%;
            float: left;
            margin-bottom: 5px;
            &:last-child {
                margin-bottom: 0;
            }
            .item-label {
                background: #3D3E5D;
                text-transform: uppercase;
                color: #C6C6D6;
                line-height: 16px;
                padding: 3px 4px;
                display: inline-block;
                width: 20%;
                float: left;
                font-weight: bold;
                border-radius: 3px;
                min-width: 160px;
                i {
                    margin-right: 10px;
                    font-size: 15px;
                }
                @media (max-width: 767px) {
                    width: 100%;
                }
            }
            .item-description {
                line-height: 22px;
                color: #fff;
                display: inline-block;
                float: right;
                text-align: left;
                width: calc(100% - 160px);
                padding-left: 15px;
                max-width: 80%;
                @media (max-width: 767px) {
                    width: 100%;
                    max-width: unset;
                    padding: 0;
                    margin: 5px 0 10px;
                }
            }
        }
    }

    .my-assets__list {
        display: flex;
        width: 100%;
        justify-content: space-between;
        flex-wrap: wrap;
        .item {
            padding: 10px;
            background: #343555;
            border-radius: 5px;
            overflow: hidden;
            margin-bottom: 20px;
            width: 49%;
            color: #fff;
            position: relative;
            a {
                position: absolute;
                top: 10px;
                right: 10px;
                font-size: 16px;
                color: #fff;
                text-decoration: none;
            }
            .item_thumb {
                width: 50px;
                display: inline-block;
                float: left;
                img {
                    width: 100%;
                    height: auto;
                }
            }
            .item_info {
                display: inline-block;
                float: right;
                width: calc(100% - 65px);
                h5 {
                    width: 100%;
                    margin-bottom: 10px;
                    font-size: 16px;
                    font-weight: bold;
                    padding-right: 30px;
                }
                span {
                    float: left;
                    line-height: 20px;
                }
                .switcher {
                    display: inline-block;
                    float: right;
                    line-height: 20px;
                    .label {
                        margin-right: 10px;
                    }
                    .switch {
                        margin: 0;
                    }
                }
            }
            @media (max-width: 767px) {
                width: 100%;
            }
        }
    }

    .form-control-range {
        -webkit-appearance: none;
        appearance: none;
        width: 100%;
        height: 3px;
        background: #d3d3d3;
        outline: none;
        opacity: 0.7;
        margin: 10px 0;
        border-radius: 3px;
        -webkit-transition: .2s;
        transition: opacity .2s;
        &::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            border-radius: 100%;
            width: 14px;
            height: 14px;
            background: #FFFFFF;
            cursor: pointer;
            box-shadow: 0 0 2px rgba(0, 0, 0, .6);
        }

        &::-moz-range-thumb {
            width: 14px;
            height: 14px;
            background: #FFFFFF;
            cursor: pointer;
            box-shadow: 0 0 2px rgba(0, 0, 0, .6);
        }
    }
</style>
