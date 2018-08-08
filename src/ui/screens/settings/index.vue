<template>
    <c-layout navigationKey="settings-navigation">
        <div class="content" id="content">
            <c-block-1 title="Settings">
                <div class="console-log d-none" ref="consoleLog" v-html="consoleLogMessages">
                    {{ consoleLogMessages }}
                </div>
            </c-block-1>
            <c-block-1 title="Client Settings">
                <div class="row">
                    <div class="col-12 col-md-6 col-lg-6">
                        <div class="settings_item">
                            <label class="switch switch-sm">
                                <input type="checkbox" name="switch_8" checked="" value="0">
                                <span></span>
                            </label>
                            <div class="text">
                                <h4>Open BlockHub on system startup</h4>
                                <p>Turn on if you want the application to load automatically
                                when you turn on your computer</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-6">
                        <div class="settings_item">
                            <label class="switch switch-sm">
                                <input type="checkbox" name="switch_8" checked="" value="0">
                                <span></span>
                            </label>
                            <div class="text">
                                <h4>Show system warnings</h4>
                                <p>Queues for games that mickey nex to Ogopogo in freezie Serviette, eh?</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-6">
                        <div class="settings_item">
                            <label class="switch switch-sm">
                                <input type="checkbox" name="switch_8" checked="" value="0">
                                <span></span>
                            </label>
                            <div class="text">
                                <h4>Enable Ethereum connection</h4>
                                <p>Turn on if you want the application to enable Ethereum connection</p>
                            </div>
                        </div>
                    </div>
                </div>
            </c-block-1>
        </div>
    </c-layout>
</template>

<script>
export default {
    components: {
        'c-layout': () => import('@/ui/layouts/default'),
        'c-block-1': () => import('@/ui/components/block-1')
    },
    data() {
        return {
        }
    },
    created() {
    },
    beforeDestroy() {
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
    .settings_item{
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: flex-start;
        color: #C6C6D6;
        .switch{
            margin: 1px 10px 0 0;
            padding: 0;
        }
        .text{
            h4{
                font-size: 21px;
                color: #C6C6D6;
                font-weight: bold;
            }
        }
    }
</style>
