<template>
    <c-layout navigationKey="settings">
        <c-block
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
        </c-block>
    </c-layout>
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
        if (this.$demo) {
            this.consoleLogMessages = `Demo session started.<br />${this.$demo.productCount} games loaded.<br />Sample collections, profiles, and marketplace data ready.<br />Changes are not saved after this tab closes.`
            return
        }
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
