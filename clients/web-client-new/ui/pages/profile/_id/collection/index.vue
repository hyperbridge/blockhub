<template>
    <c-layout navigationKey="product">
        <div class="row">
            <div class="col-12">
                <c-block title="Collections">
                    <div class="collections-container">
                        <div class="collections-container__item" v-for="(item, index) in collections" :key="index" v-if="index < 6">
                            <c-collection-item :item="item" />
                        </div>
                    </div>
                    <c-pagination :pages="8" v-if="collections.length > 6" />
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
        computed:{
            collections: function () {
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
