<template>
    <c-layout navigationKey="product">
        <div class="row">
            <div class="col-12">
                <c-block title="Collections">
                    <div class="collections-container">
                        <div
                            v-for="(item, index) in collections"
                            v-if="index < 6"
                            :key="index"
                            class="collections-container__item">
                            <c-collection-item :item="item" />
                        </div>
                    </div>
                    <c-pagination
                        v-if="collections.length > 6"
                        :pages="8" />
                </c-block>
            </div>
        </div>
    </c-layout>
</template>

<script>
export default {
    components: {
        'c-content-navigation': () => import('~/components/content-navigation').then(m => m.default || m),
        'c-collection-item': () => import('~/components/collection/item').then(m => m.default || m),
        'c-pagination': () => import('~/components/pagination').then(m => m.default || m)
    },
    computed: {
        collections() {
            return this.$store.state.marketplace.collections
        }
    }
}
</script>

<style lang="scss" scoped>
    .collections-container{
        display: flex;
        margin: 0 -8px;
        flex-wrap: wrap;
    }
    .collections-container__item{
        width: calc( 100%/3 );
        padding: 8px;
    }
</style>
