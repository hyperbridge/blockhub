<template>
    <c-layout navigationKey="settings-navigation">
        <div class="content" id="content">
            <div class="container-fluid">  
                <div class="row">
                    <div class="col-12">
                        Settings
                        <br />
                        <div class="card invert">
                            <c-heading-bar name="Log" :showArrows="false" />
                            <div class="console-log" ref="consoleLog" v-html="consoleLogMessages">
                                {{ consoleLogMessages }}
                            </div>
                        </div>
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
        'c-heading-bar': () => import('@/ui/components/heading-bar')
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
