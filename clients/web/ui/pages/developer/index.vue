<template>
    <Layout navigationKey="store">
        <div class="row">
            <div class="col-12">
                <Block
                    title="Learn more"
                    class="margin-bottom-30"
                    :noGutter="true"
                    :bgGradient="true"
                    :onlyContentBg="true">
                    Learn
                </Block>
            </div>
            <div class="col-12">
                <Block
                    title="FAQ"
                    class="margin-bottom-30"
                    :noGutter="true"
                    :bgGradient="true"
                    :onlyContentBg="true">
                    FAQ
                </Block>
            </div>
            <div class="col-12">
                <Block
                    title="Apply"
                    class="margin-bottom-30"
                    :noGutter="true"
                    :bgGradient="true"
                    :onlyContentBg="true">
                    Apply
                </Block>
            </div>
        </div>
    </Layout>
</template>

<script>
export default {
    components: {
        'TopicItem': () => import('@ericmuyser/hyper-ui').then(m => m.TopicItem)
    }
}
</script>

<style lang="scss" scoped>

</style>
