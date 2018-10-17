<template>
    <div>
        <div class="margin-bottom-40">
            <c-asset-store-card :asset="assets[0]"/>
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

        this.interval = setInterval(() => {
            if (assets[this.counter]) {
                this.recentlySold.splice(0, 1);
                this.recentlySold.push(assets[this.counter]);
                this.counter++;
            } else {
                clearInterval(this.interval);
            }
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
</style>
