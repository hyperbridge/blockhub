<template>
    <c-layout navigationKey="settings">
        <div class="content" id="content">
            <c-block title="Activity Log">
                <div class="console-log" ref="consoleLog" v-html="consoleLogMessages">
                    {{ consoleLogMessages }}
                </div>
            </c-block>
        </div>
    </c-layout>
</template>

<script>
export default {
    components: {
        'c-layout': (resolve) => require(['@/ui/layouts/default'], resolve),
        'c-block': (resolve) => require(['@/ui/components/block'], resolve)
    },
    data() {
        return {
            consoleLogMessages: '',
            consoleLogInterval: null
        }
    },
    created() {
        this.consoleLogInterval = setInterval(() => {
            this.consoleLogMessages = window.consoleLogMessages.join("<br />")
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
