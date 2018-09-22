<template>
    <c-layout navigationKey="settings-navigation">
        <div class="content" id="content">
            <c-block class="margin-bottom-30" title="Client Settings">
                <div class="row">
                    <div class="col-12 col-md-6 col-lg-6">
                        <div class="settings_item">
                            <c-switch />
                            <div class="text">
                                <h4>Open BlockHub on system startup</h4>
                                <p>Turn on if you want the application to load automatically
                                when you turn on your computer</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-6">
                        <div class="settings_item">
                            <c-switch />
                            <div class="text">
                                <h4>Show system warnings</h4>
                                <p>Queues for games that mickey nex to Ogopogo in freezie Serviette, eh?</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-6">
                        <div class="settings_item">
                            <c-switch />
                            <div class="text">
                                <h4>Enable Ethereum connection</h4>
                                <p>Turn on if you want the application to enable Ethereum connection</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-6">
                        <div class="settings_item">
                            <c-switch
                                :value="settings.client.pagination"
                                @change="updateClientSettings('pagination')"
                            />
                            <div class="text">
                                <h4>Pagination Mode</h4>
                                <p>Turn on if you want to switch between <i>pagination</i> or <i>load more</i> navigation mode</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-6">
                        <div class="settings_item">
                            <c-switch
                                :value="systemPermissions"
                                @change="requestNotifPerm()"
                            />
                            <div class="text">
                                <h4>System notifications</h4>
                                <p>Enable system notifications from BlockHub App</p>
                            </div>
                        </div>
                    </div>
                </div>
            </c-block>
            <c-block class="margin-bottom-30" title="Performance Settings">
                <div class="row">
                    <div class="col-12 col-md-6 col-lg-6">
                        <div class="settings_item">
                            <c-switch
                                @change="updateClientSettings('animations')"
                                :value="settings.client.animations"
                            />
                            <div class="text">
                                <h4>Enable animations</h4>
                                <p>Turn on if you want to enable animations and transitions</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-6">
                        <div class="settings_item">
                            <c-switch
                                @change="updateClientSettings('autoplay')"
                                :value="settings.client.autoplay"
                            />
                            <div class="text">
                                <h4>Enable autoplay</h4>
                                <p>Turn on if you want to play videos automatically</p>
                            </div>
                        </div>
                    </div>
                    <c-benchmark
                        :settings="settings"
                        class="col-12 d-flex justify-content-between align-items-center"
                    />
                </div>
            </c-block>
            <c-block class="margin-bottom-30" title="Advanced">
                <div class="row">
                    <div class="col-12 d-flex justify-content-between align-items-center">
                        <div>
                            Advanced settings can be managed here. These are primarily for developers @BlockHub.
                            <br /><strong>Warning:</strong> Only use these if you know what you're doing.
                        </div>
                        <div>
                            <c-button @click="clearDatabase" status="warning">DELETE DATABASE</c-button>
                        </div>
                    </div>
                </div>
            </c-block>
        </div>
    </c-layout>
</template>

<script>
import { mapMutations } from 'vuex';
import { debouncer } from '@/mixins';

export default {
    components: {
        'c-layout': (resolve) => require(['@/ui/layouts/default'], resolve),
        'c-block': (resolve) => require(['@/ui/components/block'], resolve),
        'c-benchmark': (resolve) => require(['@/ui/components/benchmark'], resolve)
    },
    mixins: [debouncer],
    data() {
        return {
            systemPermissions: false
        }
    },
    methods: {
        ...mapMutations(['UPDATE_CLIENT_SETTINGS']),
        updateClientSettings(prop) {
            this.$store.commit('network/UPDATE_CLIENT_SETTINGS', prop);
            this.debounce(() => {
                window.BlockHub.db.save();
            });
        },
        clearDatabase() {debugger
            let DBDeleteRequest = window.indexedDB.deleteDatabase("LokiCatalog")

            DBDeleteRequest.onerror = function(event) {
                console.log("Error deleting database.")
            }

            DBDeleteRequest.onsuccess = function(event) {
                console.log("Database deleted successfully.")

                console.log(event.result) // should be undefined
            }
        },
        async requestNotifPerm() {
            const permission = await Notification.requestPermission();
            if (permission === 'granted') this.systemPermissions = true;
        }
    },
    mounted() {
        this.systemPermissions = Notification.permission === 'granted';
    },
    computed: {
        settings() {
            return this.$store.state.network.account.settings;
        }
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
        justify-content: flex-start;
        align-items: flex-start;
        color: #C6C6D6;
        margin-bottom: 30px;
        .switch{
            margin: 1px 10px 0 0;
            padding: 0;
        }
        .text{
            h4{
                font-size: 21px;
                color: #C6C6D6;
                font-weight: bold;
                margin-bottom: 5px;
            }
        }
    }
</style>
