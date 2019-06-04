<template>
    <c-block title="Traded Assets"
             :noGutter="true"
             :bgGradient="true"
             :onlyContentBg="true">
        <div v-if="items.length > 0">
            <div class="traded-assets__filter">
                <slot name="filter" />
            </div>
            <ul class="traded-assets__list">
                <li v-for="(item, index) in items"
                    :key="index"
                    class="traded-assets__item">
                    <c-button status="none"
                              :to="`/asset/${item.id}`">
                        <c-img :src="item.image_data" />
                    </c-button>
                </li>
            </ul>
            <c-button status="outline-white"
                      :to="assetsPath">
                Go To Assets
            </c-button>
        </div>
        <div v-else>
            <h4>No frequently traded assets yet.</h4>
        </div>
    </c-block>
</template>

<script>
export default {
    name: 'FrequentlyTradedAssets',
    components: {
        'c-block': () => import('~/components/block').then(m => m.default || m)
    },
    props: {
        items: Array,
        assetsPath: String
    }
}
</script>

<style lang="scss" scoped>

    .traded-assets__list {
        padding: 0;
        display: block;
        width: 100%;
        overflow: hidden;
        margin: 10px -10px;
    }

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
</style>
