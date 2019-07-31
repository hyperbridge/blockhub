<template>
    <Layout navigationKey="settings">
        <Block
            title="Activity Log"
            :noGutter="true"
            :onlyContentBg="true"
            :bgGradient="true">
            <div
                ref="consoleLog"
                class="console-log"
                v-html="consoleLogMessages">
                {{ consoleLogMessages }}
            </div>
        </Block>
    </Layout>
</template>

<script>
export default {
    data() {
        return {
            consoleLogMessages: '',
            consoleLogInterval: null
        }
    },
    created() {
        this.consoleLogInterval = setInterval(() => {
            this.consoleLogMessages = window.consoleLogMessages.join('<br />')
            this.$forceUpdate()
            this.$refs.consoleLog.scrollTop = this.$refs.consoleLog.scrollHeight
        }, 1000)
    },
    beforeDestroy() {
        clearInterval(this.consoleLogInterval)
    }
}
</script>

<style lang="scss" scoped>
    .console-log {
        width: 100%;
        height: 500px;
        overflow-y: scroll;
        padding: 20px 20px 60px 20px;
    }
</style>
