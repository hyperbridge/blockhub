<template>
    <c-layout navigationKey="product-navigation">
        <div class="content" id="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <c-block title="Items">
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
        components: {
            'c-layout': () => import('@/ui/layouts/default'),
            'c-content-navigation': () => import('@/ui/components/content-navigation'),
            'c-block': () => import('@/ui/components/block'),
            'c-collection-item': () => import('@/ui/components/collection/item'),
            'c-pagination': () => import('@/ui/components/pagination')
        },
        data() {
            return {
            }
        },
        computed: {
            collections: function () {
                return this.$store.state.marketplace.collections
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>
