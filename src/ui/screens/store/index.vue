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

                    <c-products-cards
                        :products="demo_products"
                    />
                </div>

                <div class="row product-grid">
                    <div class="col-12">
                        <c-heading-bar name="Summer Sale" :showArrows="true" :showBackground="true" />
                    </div>

                    <c-product-card
                        v-for="(product, index) in sale_products"
                        :key="index"
                        :product="product"
                    />
                </div>

                <c-curators-reviews
                    :reviews="curators_reviews"
                />
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
        'c-tags': () => import('@/ui/components/tags'),
        'c-heading-bar': () => import('@/ui/components/heading-bar'),
        'c-product-card': () => import('@/ui/components/store/product-card'),
        'c-products-cards': () => import('@/ui/components/store/products-cards'),
        'c-curators-reviews': () => import('@/ui/components/store/curators-reviews'),
    },
    data() {
        const curator_review = {
            author: { name: 'SatoSan', img: 'https://www.shareicon.net/data/128x128/2015/09/20/104335_avatar_512x512.png' },
            rate: 4.5,
            game: { img: 'http://www.pixels-association.ch/wp-content/uploads/2017/11/no1.jpg' },
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mi arcu, viverra et efficitur luctus, tincidunt vel lacus. Morbi erat augue, posuere et sodales venenatis, tincidunt eu arcu. In sollicitudin purus quis sodales ornare. Cras tempus vestibulum elementum. Sed placerat, turpis id cursus cursus, augue enim molestie dui, elementum luctus lectus est vitae dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris vehicula mi a nunc cursus, id volutpat purus commodo. Duis consequat elementum varius. Suspendisse dui enim, rhoncus a molestie at, tristique ut urna. Praesent et consectetur dui. Pellentesque ut volutpat nunc, ut viverra nulla. Duis ultricies, sem sit amet laoreet lobortis, mauris est mollis orci, non eleifend urna leo quis lectus. Vestibulum sit amet volutpat est.',
            more_reviews: [
                {
                    rate: 3.5,
                    game: {
                        title: 'Volgar the Viking',
                        img: 'https://images-1.gog.com/54e9b9504af871d5a6ed67f9a9c439fc3a889ecd4e84d24173b10e49971db9c7.jpg'
                    }
                },
                {
                    rate: 5,
                    game: {
                        title: 'The Witcher 3: Wild Hunt',
                        img: 'http://getwallpapers.com/wallpaper/full/6/f/7/22250.jpg'
                    }
                }
            ]
        }
        return {
            demo_products: [
                {
                    id: "8",
                    name: "Gothic® 3",
                    images: {
                        header: "https://steamcdn-a.akamaihd.net/steam/apps/39500/0000004036.1920x1080.jpg?t=1533039803",
                        medium_tile: "https://steamcdn-a.akamaihd.net/steam/apps/39500/header.jpg?t=1533039803",
                        main: "https://steamcdn-a.akamaihd.net/steam/apps/39500/0000004036.1920x1080.jpg?t=1533039803",
                        preview: [
                            "https://steamcdn-a.akamaihd.net/steam/apps/39500/0000004033.1920x1080.jpg?t=1533039803",
                            "https://steamcdn-a.akamaihd.net/steam/apps/39500/0000004034.1920x1080.jpg?t=1533039803",
                            "https://steamcdn-a.akamaihd.net/steam/apps/39500/0000004035.1920x1080.jpg?t=1533039803",
                            "https://steamcdn-a.akamaihd.net/steam/apps/39500/0000004037.1920x1080.jpg?t=1533039803"
                        ]
                    },
                    author: "Piranha Bytes",
                    videos: ["https://steamcdn-a.akamaihd.net/steam/apps/901191/movie480.webm?t=1490866901"],
                    author_tags: ["RPG","Open World","Fantasy","Action","Atmospheric","Third Person"]
                },
                {
                    id: "9",
                    name: "The Witcher® 3: Wild Hunt",
                    images: {
                        header: "https://steamcdn-a.akamaihd.net/steam/apps/292030/ss_b74d60ee215337d765e4d20c8ca6710ae2362cc2.600x338.jpg?t=1529405012",
                        medium_tile: "https://steamcdn-a.akamaihd.net/steam/apps/292030/header.jpg?t=1529405012",
                        main: "https://steamcdn-a.akamaihd.net/steam/apps/292030/ss_b74d60ee215337d765e4d20c8ca6710ae2362cc2.600x338.jpg?t=1529405012",
                        preview: [
                            "https://steamcdn-a.akamaihd.net/steam/apps/292030/ss_107600c1337accc09104f7a8aa7f275f23cad096.600x338.jpg?t=1529405012",
                            "https://steamcdn-a.akamaihd.net/steam/apps/292030/ss_64eb760f9a2b67f6731a71cce3a8fb684b9af267.600x338.jpg?t=1529405012",
                            "https://steamcdn-a.akamaihd.net/steam/apps/292030/ss_eda99e7f705a113d04ab2a7a36068f3e7b343d17.600x338.jpg?t=1529405012",
                            "https://steamcdn-a.akamaihd.net/steam/apps/292030/ss_d5b80eb63c12a6484f26796f3e34410651bba068.600x338.jpg?t=1529405012"
                        ]
                    },
                    author: "CD PROJEKT RED",
                    videos: ["https://steamcdn-a.akamaihd.net/steam/apps/256658589/movie480.webm?t=1528288687"],
                    author_tags: ["RPG","Open World","Fantasy","Action","Atmospheric","Third Person"]
                },
                {
                    id: "10",
                    name: "Fallout 4",
                    images: {
                        header: "https://steamcdn-a.akamaihd.net/steam/apps/377160/ss_c6b798424a93617b4b825aea3bcd9547c0b0a5ce.1920x1080.jpg?t=1533676954",
                        medium_tile: "https://steamcdn-a.akamaihd.net/steam/apps/377160/header.jpg?t=1533676954",
                        main: "https://steamcdn-a.akamaihd.net/steam/apps/377160/ss_c6b798424a93617b4b825aea3bcd9547c0b0a5ce.1920x1080.jpg?t=1533676954",
                        preview: [
                            "https://steamcdn-a.akamaihd.net/steam/apps/377160/ss_f7861bd71e6c0c218d8ff69fb1c626aec0d187cf.1920x1080.jpg?t=1533676954",
                            "https://steamcdn-a.akamaihd.net/steam/apps/377160/ss_910437ac708aed7c028f6e43a6224c633d086b0a.1920x1080.jpg?t=1533676954",
                            "https://steamcdn-a.akamaihd.net/steam/apps/377160/ss_f649b8e57749f380cca225db5074edbb1e06d7f5.1920x1080.jpg?t=1533676954",
                            "https://steamcdn-a.akamaihd.net/steam/apps/377160/ss_c310f858e6a7b02ffa21db984afb0dd1b24c1423.1920x1080.jpg?t=1533676954"
                        ]
                    },
                    author: "Bethesda",
                    videos: ["https://steamcdn-a.akamaihd.net/steam/apps/256657338/movie480.webm?t=1447378505"],
                    author_tags: ["RPG","Open World","Fantasy","Action","Atmospheric","Third Person"]
                }
            ],
            curators_reviews: [curator_review, curator_review, curator_review]
        }
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
        },
        dynamic_preview_product() {
            return this.$store.state.marketplace.products[8];
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
    p {
        margin: 15px 0;
    }
}
.frontpage-product__footer{
    .price-list{
        margin-right: 15px;
        float: left;
        .price{
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
</style>

