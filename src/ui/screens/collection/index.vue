<template>
    <c-layout navigationKey="product-navigation">
        <div class="content" id="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <c-block title="Items">
                            <c-assets-grid :list="collection.assets" />
                            <c-pagination :pages="8" />
                        </c-block>
                    </div>
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
    export default {
        props: ['id'],
        components: {
            'c-layout': () => import('@/ui/layouts/default'),
            'c-content-navigation': () => import('@/ui/components/content-navigation'),
            'c-block': () => import('@/ui/components/block'),
            'c-pagination': () => import('@/ui/components/pagination'),
            'c-assets-grid': () => import('@/ui/components/assets-grid')
        },
        data() {
            return {
            }
        },
        computed: {
            collection: function () {
                return this.$store.state.marketplace.collections[this.id - 1]
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>
