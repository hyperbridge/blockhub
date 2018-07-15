<template>
    <c-layout navigationKey="store-navigation">
        <div class="content" id="content">
            <div class="container-fluid">  
                <div class="row">
                    <div class="col-12">
                        <a href="/#/developer/new-product">New Product</a>
                    </div>
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
export default {
    components: {
        'c-layout': () => import('@/ui/layouts/default')
    },
    data() {
        return {
        }
    },
    methods: {
    }
}
</script>

<style lang="scss" scoped>

</style>
