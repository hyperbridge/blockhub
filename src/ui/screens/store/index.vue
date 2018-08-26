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

                    <div class="products-grid-wrapper">
                        <c-game-card-dynamic
                            v-for="(game, index) in demo_products"
                            :key="index"
                            :game="game"
                            :index="index"
                            @hover="game.hover=$event"
                        />
                    </div>


                    <!-- <c-game-card
                        v-for="(game, index) in new_products.slice(0,1)"
                        :key="index"
                        :game="game"
                    /> -->

                </div>

                <div class="row product-grid">
                    <div class="col-12">
                        <c-heading-bar name="Summer Sale" :showArrows="true" :showBackground="true" />
                    </div>

                    <c-game-card
                        v-for="(game, index) in sale_products"
                        :key="index"
                        :game="game"
                    />
                </div>

                <div class="row product-grid">
                    <div class="col-12">
                        <c-heading-bar name="Crowdfund Projects" more="/#/projects" :showArrows="false" :showBackground="true" />
                    </div>

                    <c-game-card
                        v-for="(game, index) in projects"
                        :key="index"
                        :game="game"
                    />
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
        'c-heading-bar': () => import('@/ui/components/heading-bar'),
        'c-game-card': () => import('@/ui/components/store/game-card'),
        'c-game-card-dynamic': () => import('@/ui/components/store/game-card-dynamic')
    },
    data() {
        return {
            demo_products: [
                {
                    id: "8",
                    name: "Gothic® 3",
                    content: "<strong>A nameless hero becomes a legend!</strong><br><br>\t\t\t\t\tMyrtana, a world in upheaval: overrun by orcs from the dark lands in the north, King Rhobar is defending Vengard, the former stronghold of the humans, with his last troop of followers. Chaos reigns without: rebels are offering resistance, and the Hashishin of the south are openly collaborating with the orcs.<br><br>\t\t\t\t\tRumours that the nameless hero of Khorinis is on his way to the mainland spawn both hope and worry. Whose side will he take? Who will feel his wrath, who enjoy his favor? Only one thing is sure: his deeds are going to change Myrtana forever...<br><br>\t\t\t\t\tLiberation or annihilitaion &#x2013; the fate of the world of Gothic lies in your hands! Create your own individual gaming experience through different solution paths.<br><br>\t\t\t\t\tDynamic, action-packed combat system: choose between Fast Attacks, deadly whirlwind close combat, or shooting from a distance.<br>\t\t\t\t\tImmerse yourself in the most colorful and authentic fantasy world of all time &#x2013; Myrtana awaits you!<br><br>\t\t\t\t\t<ul><li>Specially designed easy combat system<br>\t\t\t\t\t</li><li>Clear main goals&#x2014;story driven yet dictated by player&#x2019;s choice<br>\t\t\t\t\t</li><li>Huge free&#x2013;roaming world&#x2014;virtually no boundaries<br>\t\t\t\t\t</li><li>Advanced human behavior AI for hundreds of individual characters with full audio dialogues<br>\t\t\t\t\t</li><li>Countless side&#x2013;quests for the player to choose from<br>\t\t\t\t\t</li><li>Over 50 different monsters and animals and dozens of human enemies<br>\t\t\t\t\t</li><li>Over 50 different powerful spells and over a hundred different weapons<br>\t\t\t\t\t</li><li>Unique class&#x2013;free character development</li></ul>",
                    images: {
                        header: "/static/img/products/gothic-3/gothic-3-01.jpg",
                        medium_tile: "/static/img/products/gothic-3/g2-med-tile.png",
                        main: "/static/img/products/gothic-3/gothic-3-03.jpg",
                        preview: [
                            "/static/img/products/gothic-3/gothic-3-02.jpg",
                            "/static/img/products/gothic-3/gothic-3-05.jpg",
                            "/static/img/products/gothic-3/gothic-3-06.jpg"
                        ]
                    },
                    author: "Piranha Bytes",
                    videos: ["/static/videos/products/gothic-3/gothic-3-01.mp4"],
                    author_tags: ["RPG","Open World","Fantasy","Action","Atmospheric","Third Person"],
                    hover: false
                },
                {
                    id: "9",
                    name: "Gothic® 2",
                    content: "<strong>A nameless hero becomes a legend!</strong><br><br>\t\t\t\t\tMyrtana, a world in upheaval: overrun by orcs from the dark lands in the north, King Rhobar is defending Vengard, the former stronghold of the humans, with his last troop of followers. Chaos reigns without: rebels are offering resistance, and the Hashishin of the south are openly collaborating with the orcs.<br><br>\t\t\t\t\tRumours that the nameless hero of Khorinis is on his way to the mainland spawn both hope and worry. Whose side will he take? Who will feel his wrath, who enjoy his favor? Only one thing is sure: his deeds are going to change Myrtana forever...<br><br>\t\t\t\t\tLiberation or annihilitaion &#x2013; the fate of the world of Gothic lies in your hands! Create your own individual gaming experience through different solution paths.<br><br>\t\t\t\t\tDynamic, action-packed combat system: choose between Fast Attacks, deadly whirlwind close combat, or shooting from a distance.<br>\t\t\t\t\tImmerse yourself in the most colorful and authentic fantasy world of all time &#x2013; Myrtana awaits you!<br><br>\t\t\t\t\t<ul><li>Specially designed easy combat system<br>\t\t\t\t\t</li><li>Clear main goals&#x2014;story driven yet dictated by player&#x2019;s choice<br>\t\t\t\t\t</li><li>Huge free&#x2013;roaming world&#x2014;virtually no boundaries<br>\t\t\t\t\t</li><li>Advanced human behavior AI for hundreds of individual characters with full audio dialogues<br>\t\t\t\t\t</li><li>Countless side&#x2013;quests for the player to choose from<br>\t\t\t\t\t</li><li>Over 50 different monsters and animals and dozens of human enemies<br>\t\t\t\t\t</li><li>Over 50 different powerful spells and over a hundred different weapons<br>\t\t\t\t\t</li><li>Unique class&#x2013;free character development</li></ul>",
                    images: {
                        header: "/static/img/products/gothic-3/gothic-3-01.jpg",
                        medium_tile: "/static/img/products/gothic-3/g3-med-tile.png",
                        main: "/static/img/products/gothic-3/gothic-3-03.jpg",
                        preview: [
                            "/static/img/products/gothic-3/gothic-3-02.jpg",
                            "/static/img/products/gothic-3/gothic-3-05.jpg",
                            "/static/img/products/gothic-3/gothic-3-06.jpg"
                        ]
                    },
                    author: "Piranha Bytes",
                    videos: ["/static/videos/products/gothic-3/gothic-3-01.mp4"],
                    author_tags: ["RPG","Open World","Fantasy","Action","Atmospheric","Third Person"],
                    hover: false
                },
                {
                    id: "9",
                    name: "Gothic® 1",
                    content: "<strong>A nameless hero becomes a legend!</strong><br><br>\t\t\t\t\tMyrtana, a world in upheaval: overrun by orcs from the dark lands in the north, King Rhobar is defending Vengard, the former stronghold of the humans, with his last troop of followers. Chaos reigns without: rebels are offering resistance, and the Hashishin of the south are openly collaborating with the orcs.<br><br>\t\t\t\t\tRumours that the nameless hero of Khorinis is on his way to the mainland spawn both hope and worry. Whose side will he take? Who will feel his wrath, who enjoy his favor? Only one thing is sure: his deeds are going to change Myrtana forever...<br><br>\t\t\t\t\tLiberation or annihilitaion &#x2013; the fate of the world of Gothic lies in your hands! Create your own individual gaming experience through different solution paths.<br><br>\t\t\t\t\tDynamic, action-packed combat system: choose between Fast Attacks, deadly whirlwind close combat, or shooting from a distance.<br>\t\t\t\t\tImmerse yourself in the most colorful and authentic fantasy world of all time &#x2013; Myrtana awaits you!<br><br>\t\t\t\t\t<ul><li>Specially designed easy combat system<br>\t\t\t\t\t</li><li>Clear main goals&#x2014;story driven yet dictated by player&#x2019;s choice<br>\t\t\t\t\t</li><li>Huge free&#x2013;roaming world&#x2014;virtually no boundaries<br>\t\t\t\t\t</li><li>Advanced human behavior AI for hundreds of individual characters with full audio dialogues<br>\t\t\t\t\t</li><li>Countless side&#x2013;quests for the player to choose from<br>\t\t\t\t\t</li><li>Over 50 different monsters and animals and dozens of human enemies<br>\t\t\t\t\t</li><li>Over 50 different powerful spells and over a hundred different weapons<br>\t\t\t\t\t</li><li>Unique class&#x2013;free character development</li></ul>",
                    images: {
                        header: "/static/img/products/gothic-3/gothic-3-01.jpg",
                        medium_tile: "/static/img/products/gothic-3/g2-med-tile.png",
                        main: "/static/img/products/gothic-3/gothic-3-03.jpg",
                        preview: [
                            "/static/img/products/gothic-3/gothic-3-02.jpg",
                            "/static/img/products/gothic-3/gothic-3-05.jpg",
                            "/static/img/products/gothic-3/gothic-3-06.jpg"
                        ]
                    },
                    author: "Piranha Bytes",
                    videos: [],
                    author_tags: ["RPG","Open World","Fantasy","Action","Atmospheric","Third Person"],
                    hover: false
                }
            ]
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
    p{
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

.products-grid-wrapper {
    margin-top: 20px;
    margin-bottom: 40px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    width: 100%;
}

.products-grid-wrapper:hover {
    .product-grid__item {
        transform: translateX(-15%);
    }

    .product-grid__item:hover {
		transform: scale(1.3);
        ~ .product-grid__item {
		    transform: translateX(15%);
        }
	}
}
</style>

