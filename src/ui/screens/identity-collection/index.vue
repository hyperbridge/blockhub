<template>
    <c-layout navigationKey="product">
            <div class="container-fluid">
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
            </div>
    </c-layout>
</template>

<script>
    export default {
        components: {
            'c-layout': (resolve) => require(['@/ui/layouts/default'], resolve),
            'c-content-navigation': (resolve) => require(['@/ui/components/content-navigation'], resolve),
            'c-block': (resolve) => require(['@/ui/components/block'], resolve),
            'c-collection-item': (resolve) => require(['@/ui/components/collection/item'], resolve),
            'c-pagination': (resolve) => require(['@/ui/components/pagination'], resolve)
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
