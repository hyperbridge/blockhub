<template>
    <Layout navigationKey="account">
        <div class="row">
            <div class="col-12">
                <Block
                    title="Account Backup"
                    class="margin-bottom-30"
                    :noGutter="true"
                    :bgGradient="true"
                    :onlyContentBg="true">
                    <div class="row">
                        <div
                            class="topics-list col-3"
                            @click="exportAccountFile">
                            <TopicItem
                                icon="fas fa-save"
                                class="padding-10">
                                Download File
                            </TopicItem>
                        </div>
                    </div>
                </Block>
            </div>
        </div>
    </Layout>
</template>

<script>
export default {
    components: {
        'TopicItem': () => import('@ericmuyser/hyper-ui').then(m => m.TopicItem)
    },
    methods: {
        exportAccountFile() {
            this.$desktop.sendCommand('exportAccountFileRequest')
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
