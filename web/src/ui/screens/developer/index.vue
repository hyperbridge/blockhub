<template>
    <c-layout navigationKey="store">
            <div class="container-fluid">  
                <div class="row">
                    <div class="col-12">
                        <c-block title="Developer Area" class="margin-bottom-30" :noGutter="true" :bgGradient="true" :onlyContentBg="true">
                            <div class="row">
                                <div class="topics-list col-3">
                                    <c-topic-item
                                        link="#/business/product/new"
                                        icon="fas fa-window-restore"
                                        class="padding-10">
                                        New Product
                                    </c-topic-item>
                                </div>
                            </div>
                        </c-block>
                    </div>
                </div>
            </div>
    </c-layout>
</template>

<script>
export default {
    components: {
        'c-topic-item': (resolve) => require(['@/ui/components/help/topic-item'], resolve),
    }
}
</script>

<style lang="scss" scoped>

</style>
