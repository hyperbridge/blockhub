<template>
    <Layout navigationKey="product">
        <div class="row">
            <div class="col-12">
                <Block title="Collections">
                    <div class="collections-container">
                        <div
                            v-for="(item, index) in collections"
                            v-if="index < 6"
                            :key="index"
                            class="collections-container__item">
                            <CollectionItem :item="item" />
                        </div>
                    </div>
                    <Pagination
                        v-if="collections.length > 6"
                        :pages="8" />
                </Block>
            </div>
        </div>
    </Layout>
</template>

<script>
export default {
    components: {
        'ContentNavigation': () => import('@ericmuyser/hyper-ui').then(m => m.ContentNavigation),
        'CollectionItem': () => import('@ericmuyser/hyper-ui').then(m => m.CollectionItem),
        'Pagination': () => import('@ericmuyser/hyper-ui').then(m => m.Pagination)
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
