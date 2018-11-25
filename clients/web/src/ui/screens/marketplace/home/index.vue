<template>
    <div>
        <h2 class="text-align-center margin-bottom-10">Picks of the week</h2>
        <!-- <carousel-3d-v2 :items="assets">
            <template slot-scope="props">
                <c-asset-store-card
                    v-for="item in props.items" :key="item.id"
                    :asset="item"
                />
            </template>
        </carousel-3d-v2> -->
        <div class="carousel-wrapper">
            <c-carousel-3d
                :items="assets"
                :limitTo="3"
            >
                <!-- <transition-group name="simple" class="carousel-3d__content" tag="div" slot-scope="props">
                    <c-asset-store-card
                        v-for="(item, index) in props.items"
                        :class="props.css[index]"
                        :key="item.id"
                        :asset="item"
                    />
                </transition-group> -->
                <template slot-scope="props">
                    <router-link
                        v-for="(item, index) in props.items"
                        :class="props.css[index]"
                        :key="item.id"
                        :to="`/marketplace/asset/${item.id}`"
                    >
                        <c-asset-store-card
                            :asset="item"
                        />
                    </router-link>
                </template>
            </c-carousel-3d>
        </div>
        <c-block title="Recently sold" class="margin-bottom-40">
            <c-asset-list :assets="recentlySold" :transition="true"/>
        </c-block>
        <c-block title="Explore available assets" noGutter onlyContentBg bgGradient>
            <c-content-navigation :items="assets" class="assets-block">
                <c-asset-list
                    slot-scope="props"
                    :assets="props.items"
                />
            </c-content-navigation>
        </c-block>
    </div>
</template>

<script>
export default {
    components: {
        'c-asset-preview': (resolve) => require(['@/ui/components/asset/preview-basic'], resolve),
        'c-asset-list': (resolve) => require(['@/ui/components/asset/list'], resolve),
        'c-content-navigation': (resolve) => require(['@/ui/components/content-navigation'], resolve),
        'c-block': (resolve) => require(['@/ui/components/block/index'], resolve),
        'c-asset-store-card': (resolve) => require(['@/ui/components/asset/store-card'], resolve),
        'c-carousel-3d': (resolve) => require(['@/ui/components/carousel-3d'], resolve),
        'carousel-3d-v2': (resolve) => require(['@/ui/components/carousel-3d/v2'], resolve),
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
            return this.$store.getters['assets/assetsArray'];
        }
    },
    mounted() {
        const { assets, counter } = this;
        this.recentlySold = assets.slice(0, counter);
        const rand = num => Math.floor(Math.random() * num);

        this.interval = setInterval(() => {
            this.recentlySold.splice(0, 1);

            if (this.counter === assets.length - 1) {
                this.counter = 1;
            }

            this.recentlySold.push(assets[this.counter]);
            this.counter++;
        }, 2000);
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
