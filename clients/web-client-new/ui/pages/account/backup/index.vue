<template>
    <c-layout navigationKey="account">
        <div class="row">
            <div class="col-12">
                <c-block
                    title="Account Backup"
                    class="margin-bottom-30"
                    :noGutter="true"
                    :bgGradient="true"
                    :onlyContentBg="true">
                    <div class="row">
                        <div
                            class="topics-list col-3"
                            @click="exportAccountFile">
                            <c-topic-item
                                icon="fas fa-save"
                                class="padding-10">
                                Download File
                            </c-topic-item>
                        </div>
                    </div>
                </c-block>
            </div>
        </div>
    </c-layout>
</template>

<script>
export default {
    components: {
        'c-topic-item': () => import('~/components/help/topic-item').then(m => m.default || m)
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
