<template>
    <div>
        <div
            id="fixed-panel"
            class="fixed-panel invert">
            <div class="fixed-panel__content scroll">
                <template v-if="developerMode">
                    <h5 v-darklaunch="'REALMS'">
                        Your Realms
                    </h5>

                    <c-button
                        v-for="(realm, index) in realms"
                        :key="`realm${realm.id}`"
                        v-darklaunch="'REALMS'"
                        status="none"
                        :to="`/realm/${realm.id}`">
                        <span class="icon icon-letter-circle">{{ realm.name.slice(0) }}</span>
                        <span class="text">{{ realm.name }}</span>
                    </c-button>

                    <c-button
                        v-darklaunch="'REALMS'"
                        status="none"
                        to="/profile/1/realms">
                        See More...
                    </c-button>

                    <hr v-darklaunch="'REALMS'">

                    <h5 v-if="developerMode && products.length">
                        Your Products
                    </h5>

                    <c-button
                        v-for="(product) in products"
                        :key="`product${product.id}`"
                        status="none"
                        :to="`/product/${product.id}`">
                        <span class="icon icon-letter-circle">{{ product.value.slice(0, 1) }}</span>
                        <span class="text">{{ product.value }}</span>
                    </c-button>

                    <c-button
                        v-if="developerMode && products.length > 3"
                        status="none"
                        to="/business/products">
                        See More...
                    </c-button>

                    <hr v-if="developerMode && products.length">

                    <h5><i class="fas fa-code" /> Developer</h5>

                    <c-button
                        status="none"
                        to="/business">
                        <span class="icon fas fa-list-alt" />
                        <span class="text">My Content</span>
                    </c-button>
                    <c-button
                        v-darklaunch="'PAYMENTS'"
                        status="none"
                        to="/business/developer/payment">
                        <span class="icon fas fa-info-circle" />
                        <span class="text">Payment Settings</span>
                    </c-button>
                    <c-button
                        v-darklaunch="'REALMS'"
                        status="none"
                        to="/business/realm/new">
                        <span class="icon fa fa-plus" />
                        <span class="text">New Realm</span>
                    </c-button>
                    <c-button
                        status="none"
                        to="/business/product/new">
                        <span class="icon fa fa-plus" />
                        <span class="text">New Game</span>
                    </c-button>
                    <c-button
                        status="none"
                        to="/business/project/new">
                        <span class="icon fa fa-plus" />
                        <span class="text">New Crowdfund</span>
                    </c-button>

                    <hr>
                </template>

                <div v-if="signedIn">
                    <c-button
                        status="plain"
                        tag="button"
                        to="/account"
                        class="text-left"
                        size="md"
                        icon="user">
                        Account
                    </c-button>
                    <c-button
                        status="plain"
                        tag="button"
                        to="/account/profiles"
                        class="text-left"
                        size="md"
                        icon="id-card">
                        Profiles
                    </c-button>
                    <c-button
                        v-darklaunch="'WALLETS'"
                        status="plain"
                        tag="button"
                        to="/account/wallets"
                        class="text-left"
                        size="md"
                        icon="credit-card">
                        Wallets
                    </c-button>

                    <hr>

                    <c-button
                        status="plain"
                        tag="button"
                        to="/profile/1"
                        class="text-left"
                        size="md"
                        icon="user">
                        Current Profile
                    </c-button>
                    <c-button
                        status="plain"
                        tag="button"
                        to="/settings/activity"
                        class="text-left"
                        size="md"
                        icon="list-alt">
                        Activity Log
                    </c-button>
                    <c-button
                        v-darklaunch="'CONTACTS'"
                        status="plain"
                        tag="button"
                        to="/profile/1/contacts"
                        class="text-left"
                        size="md"
                        icon="users">
                        Contacts
                    </c-button>

                    <hr>

                    <c-button
                        status="plain"
                        to="/settings"
                        class="text-left"
                        size="md"
                        tag="button"
                        icon="cog">
                        Settings
                    </c-button>

                    <c-button
                        status="plain"
                        tag="button"
                        to="/account/signout"
                        class="text-left"
                        size="md"
                        icon="sign-out-alt">
                        Sign Out
                    </c-button>

                    <hr>
                </div>

                <c-button
                    status="plain"
                    to="/sitemap"
                    tag="button"
                    class="text-left"
                    size="md"
                    icon="list-alt">
                    Sitemap
                </c-button>

                <div
                    v-if="!developerMode"
                    class="developer-banner">
                    <div class="img">
                        <img
                            src="/static/img/block-sdk.png">
                    </div>
                    <div class="text">
                        <h3>Are you a developer?</h3>
                        <p>Start developing for blockchain with BlockHub SDK</p>
                        <c-button
                            status="info"
                            to="/developer#apply"
                            iconHide>
                            Start Developing
                        </c-button>
                        <c-button
                            status="dark"
                            to="/help/topic/0/article/developer-program"
                            iconHide>
                            Learn More
                        </c-button>
                    </div>
                </div>

                <div class="d-flex justify-content-start">
                    <div
                        v-if="!developerMode"
                        class="dev-block become_dev active">
                        <h5><i class="fas fa-code" />Become Developer</h5>
                        <ul>
                            <li>
                                <c-button
                                    status="none"
                                    to="/developer#apply">
                                    <i class="fas fa-list-alt" />
                                    Apply Now
                                </c-button>
                            </li>
                            <li>
                                <c-button
                                    status="none"
                                    to="/developer#faq">
                                    <i class="fas fa-info-circle" />
                                    Developer FAQ
                                </c-button>
                            </li>
                        </ul>
                    </div>
                </div>

                <div
                    v-if="showPreviewPanel"
                    class="preview-panel col-12 mt-4">
                    <div>
                        <c-button @click="toggleDesktopMode()">
                            Desktop Mode {{ desktopMode ? 'ON' : 'OFF' }}
                        </c-button>
                        <c-button @click="rotateOperatingSystem()">
                            Operating System {{ operatingSystem === 'mac' ? 'MAC' : (operatingSystem === 'windows' ? 'WINDOWS' : 'LINUX' ) }}
                        </c-button>
                        <c-button @click="rotateEnvironmentMode()">
                            Environment Mode {{ environmentMode ? environmentMode.toUpperCase() : 'NOT FOUND' }}
                        </c-button>
                        <c-button @click="toggleSignedIn()">
                            Signed {{ signedIn ? 'IN' : 'OUT' }}
                        </c-button>
                        <c-button @click="$store.state.application.account.isVerified = !$store.state.application.account.isVerified">
                            Account {{ $store.state.application.account.isVerified ? 'VERIFIED' : 'NOT VERIFIED' }}
                        </c-button>
                        <c-button @click="toggleDeveloperMode()">
                            Developer Mode {{ developerMode ? 'ON' : 'OFF' }}
                        </c-button>
                        <c-button @click="rotateEditorMode()">
                            Editor Mode {{ $store.state.application.editorMode.toUpperCase() }}
                        </c-button>
                        <c-button @click="toggleDarklaunchOverride()">
                            Darklaunch Override {{ $store.state.application.darklaunchOverride ? 'ON' : 'OFF' }}
                        </c-button>
                        <c-button @click="toggleSimulator()">
                            Simulator {{ simulatorMode ? 'ON' : 'OFF' }}
                        </c-button>

                        <br><br>
                    </div>
                    <div>
                        <c-button @click="importSeedData()">
                            Import Seed Data
                        </c-button>
                        <c-button @click="resetSeedData()">
                            Reset Seed Data
                        </c-button>
                        <br><br>
                    </div>
                    <div>
                        <c-button @click="$store.state.application.connection.auto = !$store.state.application.connection.auto">
                            Auto Connect is {{ $store.state.application.connection.auto ? 'ON' : 'OFF' }}
                        </c-button>
                        <c-button @click="$store.state.application.connection.internet = !$store.state.application.connection.internet">
                            Internet is {{ $store.state.application.connection.internet ? 'CONNECTED' : 'DISCONNECTED' }}
                        </c-button>
                        <c-button @click="$store.state.application.connection.datasource = !$store.state.application.connection.datasource">
                            Datasource is {{ $store.state.application.connection.datasource ? 'CONNECTED' : 'DISCONNECTED' }}
                        </c-button>
                        <c-button
                            v-if="desktopMode"
                            @click="$store.state.application.connection.operator = !$store.state.application.connection.operator">
                            Operator is {{ $store.state.application.connection.operator ? 'CONNECTED' : 'DISCONNECTED' }}
                        </c-button>
                        <c-button
                            v-if="desktopMode"
                            @click="$store.state.application.connection.ethereum = !$store.state.application.connection.ethereum">
                            Ethereum is {{ $store.state.application.connection.ethereum ? 'CONNECTED' : 'DISCONNECTED' }}
                        </c-button>
                        <br><br>
                    </div>
                    <div>
                        <c-button @click="saveSettings()">
                            Save Settings
                        </c-button>
                        <c-button @click="resetSettings()">
                            Reset Settings
                        </c-button>
                        <br><br>
                    </div>
                    <div
                        v-if="desktopMode"
                        hidden>
                        <input
                            ref="desktopMessage"
                            type="text">
                        <c-button @click="sendDesktopMessage">
                            Send Message To Desktop
                        </c-button>
                    </div>
                    <div
                        v-if="developerMode"
                        hidden>
                        <h4>Darklaunch Manager</h4>
                        <select
                            id="darklaunch-editor"
                            class="form-control"
                            multiple="multiple">
                            <option
                                v-for="(flag) in $store.state.application.darklaunchFlags"
                                :key="flag.code"
                                :selected="$store.state.application.account.darklaunchFlags.map(flag => flag.enabled ? flag.code : null).includes(flag.code)">
                                {{ flag.code }} - {{ flag.description }}
                            </option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div
            id="backdrop"
            class="backdrop"
            data-action="fixedpanel-toggle" />
    </div>
</template>

<script>
import Vue from 'vue'
import * as DB from '@/db'

export default {
    components: {
    },
    props: [],
    data() {
        return {
            showPreviewPanel: true // ['preview', 'staging', 'local'].includes(this.$store.state.application.environmentMode)
        }
    },
    computed: {
        developerMode() { return this.$store.state.application.developerMode },
        desktopMode() { return this.$store.state.application.desktopMode },
        signedIn() { return this.$store.state.application.signedIn },
        simulatorMode() { return this.$store.state.application.simulatorMode },
        operatingSystem() { return this.$store.state.application.operatingSystem },
        environmentMode() { return this.$store.state.application.environmentMode },
        realms() {
            return this.$store.getters['realms/list']
        },
        products() {
            return this.$store.getters['products/list']
        }
    },
    watch: {
    },
    updated() {
    },
    mounted() {
        this.$store.dispatch('realms/find', {
            query: {
                $sort: {
                    createdAt: -1
                },
                $limit: 25
            }
        })

        this.$store.dispatch('products/find', {
            query: {
                $sort: {
                    createdAt: -1
                },
                $limit: 25
            }
        })
    },
    created() {
        if (process.client) {
            this.$('body').off('click').on('click', "[data-action='fixedpanel-toggle']", e => {
                const btn = this.$('#sidebar-toggle-btn span')

                if (this.$('body').hasClass('show-sidebar')) {
                    this.$('body').removeClass('show-sidebar')
                    this.$(btn).removeClass('fa-times').addClass('fa-cog')
                    this.$('.snotify').show()
                } else {
                    this.$('body').addClass('show-sidebar')
                    this.$(btn).removeClass('fa-cog').addClass('fa-times')
                    this.$('.snotify').hide()
                }
            })
        }
    },
    methods: {
        ensureDesktopWelcome(to) {
            // if (this.$store.state.application.desktopMode
            // && !this.$store.state.application.signedIn
            // && (!to ? true : (
            //     to.path !== '/account/signup'
            //     && to.path !== '/account/signin'
            //     && to.path !== '/welcome'
            //     && to.path !== '/unlock'
            // ))) {
            //     this.$router.push({ path: '/welcome' })
            // }
        },
        toggleDesktopMode() {
            this.$store.state.application.desktopMode = !this.$store.state.application.desktopMode
        },
        toggleSignedIn() {
            this.$store.state.application.signedIn = !this.$store.state.application.signedIn
        },
        toggleDeveloperMode() {
            this.$store.state.application.developerMode = !this.$store.state.application.developerMode
        },
        toggleDarklaunchOverride() {
            this.$store.state.application.darklaunchOverride = !this.$store.state.application.darklaunchOverride
        },
        toggleSimulator() {
            this.$store.commit('application/setSimulatorMode', !this.$store.state.application.simulatorMode)
        },
        rotateEditorMode() {
            // if (this.$store.state.application.editorMode === 'editing') {
            //     this.$store.state.application.editorMode = 'viewing'
            // } else if (this.$store.state.application.editorMode === 'viewing') {
            //     this.$store.state.application.editorMode = 'publishing'
            // } else {
            //     this.$store.state.application.editorMode = 'editing'
            // }
        },
        rotateOperatingSystem() {
            if (this.$store.state.application.operatingSystem === 'mac') {
                this.$store.state.application.operatingSystem = 'windows'
            } else if (this.$store.state.application.operatingSystem === 'windows') {
                this.$store.state.application.operatingSystem = 'linux'
            } else {
                this.$store.state.application.operatingSystem = 'mac'
            }
        },
        rotateEnvironmentMode() {
            if (this.$store.state.application.environmentMode === 'production') {
                this.$store.commit('application/updateEnvironmentMode', 'staging')
            } else if (this.$store.state.application.environmentMode === 'staging') {
                this.$store.commit('application/updateEnvironmentMode', 'beta')
            } else if (this.$store.state.application.environmentMode === 'beta') {
                this.$store.commit('application/updateEnvironmentMode', 'preview')
            } else if (this.$store.state.application.environmentMode === 'preview') {
                this.$store.commit('application/updateEnvironmentMode', 'local')
            } else {
                this.$store.commit('application/updateEnvironmentMode', 'production')
            }
        },
        importSeedData() {
            this.$blockhub.importSeedData()
        },
        resetSeedData() {
            this.$blockhub.resetSeedData()
        },
        saveSettings() {
            this.$blockhub.saveDatabase()

            this.$blockhub.Notification.info('', 'Settings saved', {
                timeout: 2000,
                pauseOnHover: true
            })
        },
        resetSettings() {
            window.resetSettings()
        },
        sendDesktopMessage() {
            if (!window.isElectron) {
                return alert('Not on desktop')
            }

            this.$desktop.sendCommand('ping', this.$refs.desktopMessage.value)
            this.$desktop.on('pong', (event, msg) => console.log('Message from desktop: ', msg))
        }
    }
}
</script>
