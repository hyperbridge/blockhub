<template>
    <div>
        <h2 class="text-align-center margin-bottom-10">
            Picks of the week
        </h2>
        <!-- <Carousel3dv2 :items="assets">
            <template slot-scope="props">
                <AssetStoreCard
                    v-for="item in props.items" :key="item.id"
                    :asset="item"
                />
            </template>
        </Carousel3dv2> -->
        <div class="carousel-wrapper">
            <Carousel3d
                :items="assets"
                :limitTo="3">
                <!-- <transition-group name="simple" class="carousel-3d__content" tag="div" slot-scope="props">
                    <AssetStoreCard
                        v-for="(item, index) in props.items"
                        :class="props.css[index]"
                        :key="item.id"
                        :asset="item"
                    />
                </transition-group> -->
                <template slot-scope="props">
                    <nuxt-link
                        v-for="(item, index) in props.items"
                        :key="item.id"
                        :class="props.css[index]"
                        :to="`/marketplace/asset/${item.id}`">
                        <AssetStoreCard
                            v-for="(item) in props.items"
                            :key="item.id"
                            :class="item.css"
                            :assetName="item.name"
                            :assetPriceCurrent="item.price.current"
                            :assetTags="item.tags"
                            :assetImage="item.image" />
                    </nuxt-link>
                </template>
            </Carousel3d>
        </div>
        <Block
            title="Recently sold"
            class="margin-bottom-40">
            <AssetList
                :assets="recentlySold"
                :transition="true" />
        </Block>
        <Block
            title="Explore available assets"
            noGutter
            onlyContentBg
            bgGradient>
            <ContentNavigation
                :items="assets"
                class="assets-block">
                <AssetList
                    slot-scope="props"
                    :assets="props.items" />
            </ContentNavigation>
        </Block>
    </div>
</template>

<script>
export default {
    components: {
        'AssetPreview': () => import('@ericmuyser/hyper-ui').then(m => m.AssetPreview),
        'AssetList': () => import('@ericmuyser/hyper-ui').then(m => m.AssetList),
        'ContentNavigation': () => import('@ericmuyser/hyper-ui').then(m => m.ContentNavigation),
        'Block': () => import('@ericmuyser/hyper-ui').then(m => m.Block),
        'AssetStoreCard': () => import('@ericmuyser/hyper-ui').then(m => m.AssetStoreCard),
        'Carousel3d': () => import('@ericmuyser/hyper-ui').then(m => m.Carousel3d),
        'Carousel3dv2': () => import('@ericmuyser/hyper-ui').then(m => m.Carousel3dv2)
    },
    data() {
        return {
            recentlySold: [],
            counter: 4,
            interval: null
        }
    },
    computed: {
        assets() {
            return this.$store.getters['assets/assetsArray']
        }
    },
    mounted() {
        const { assets, counter } = this
        this.recentlySold = assets.slice(0, counter)
        const rand = num => Math.floor(Math.random() * num)

        this.interval = setInterval(() => {
            this.recentlySold.splice(0, 1)

            if (this.counter === assets.length - 1) {
                this.counter = 1
            }

            this.recentlySold.push(assets[this.counter])
            this.counter++
        }, 2000)
    }
}
</script>

<style lang="scss" scoped>
    .assets-block {
        min-height: 706px;
    }
    .sold-list-move {
        transition: transform 1s;
    }
    .carousel-wrapper {
        padding-top: 10px;
        background: #ffffff15;
        margin-bottom: 40px;
        background: radial-gradient(ellipse at top, rgba(255,255,255,.07), transparent 50%);
    }
    .carousel-3d__transition {
        &-enter, &-leave-to {
            opacity: 0;
            transform: translateY(30px);
        }
        &-leave-active {
            position: absolute;
            width: 100%;
        }
    }
</style>
