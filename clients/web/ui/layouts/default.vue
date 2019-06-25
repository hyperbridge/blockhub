<template>
    <div id="app" :class="{ 'disable-animations': !disableAnimations }">
        <c-render-condition :type="renderCondition">
            <div v-if="error">
                <c-error-page :error="error" />
            </div>
            <nuxt-child v-else keep-alive />

            <c-drawer />
        </c-render-condition>

        <no-ssr>
            <vue-snotify />
        </no-ssr>
    </div>
</template>

<script>
import Vue from 'vue'

import '@/css/styles.scss'
import 'swiper/dist/css/swiper.css'

export default {
    components: {
        'c-error-page': () => import('~/pages/error').then(m => m.default || m),
        'c-render-condition': () => import('~/components/render-condition').then(m => m.default || m),
        'c-drawer': () => import('~/components/drawer').then(m => m.default || m)
    },
    data() {
        const error = this.$nuxt.nuxt.err

        return {
            error,
            renderCondition: 'none'
        }
    },
    computed: {
        disableAnimations() {
            console.log(this.$store.state.application)
            return this.$store.state.application.settings.client.animations
        }
    },
    watch: {
        '$route'(to, from) {
            if (process.client) {
                this.$('body').removeClass('show-sidebar')
                this.$('[data-action="fixedpanel-toggle"] span').removeClass('fa-times').addClass('fa-bars')
            }

            this.$store.state.application.activeModal = null

            if (this.$route.meta.renderCondition) {
                this.renderCondition = this.$route.meta.renderCondition
            } else if (this.$route.meta.permission === 'signedIn') {
                this.renderCondition = 'user'
            } else if (this.$route.meta.permission === 'developerMode') {
                this.renderCondition = 'user'
            } else {
                this.renderCondition = 'initialized'
            }

            this.updateEditorMode()
            this.ensureDesktopWelcome(to)
        },
        async '$store.state.auth.user'(newVal) {
            // TODO: this is a little janky
            if (this.$store.state.application.signedIn && newVal === undefined) {
                this.$store.state.application.signedIn = false
            } else {
                this.$store.state.application.signedIn = true

                this.$store.state.application.account = {
                    ...this.$store.state.application.account,
                    ...this.$store.state.auth.user
                }

                const state = await this.$api.service('application/state').find()
                this.$store.commit('application/updateState', state)
            }
        },
        '$store.state.application.activeProfile.role'(newVal) {
            if (newVal === 'developer') {
                this.$store.state.application.developerMode = true
            }
        }
    },
    mounted() {
        this.getExternalState()
        this.ensureDesktopWelcome()

        // if (this.$store.state.auth.user) {
        //     this.$store.state.application.signedIn = true
        // } else {
        //     this.$store.state.application.signedIn = false
        // }
    },
    created() {
        if (this.$route.meta.renderCondition) {
            this.renderCondition = this.$route.meta.renderCondition
        } else if (this.$route.meta.permission === 'signedIn') {
            this.renderCondition = 'user'
        } else if (this.$route.meta.permission === 'developerMode') {
            this.renderCondition = 'user'
        } else {
            this.renderCondition = 'initialized'
        }
    },
    methods: {
        updateEditorMode() {
            // this.$store.state.application.editorMode = 'viewing'
        },
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
        getExternalState() {
            const sheetUrl = 'https://spreadsheets.google.com/feeds/list/1QBzZ7O0l3-wsdvl7PgdYKeQrv_wvuQ4FoqrDgiyxugY/1/public/values?alt=json'

            this.$axios({
                method: 'get',
                url: sheetUrl
            })
                .then(res => {
                    this.entries = res.data.feed.entry
                    try {
                        for (const i in this.entries) {
                            const entry = this.entries[i]
                            const key = entry.gsx$key.$t
                            const type = entry.gsx$type.$t
                            let value = entry.gsx$value.$t

                            if (type === 'int32') {
                                value = Number(value)
                            } else if (type === 'boolean') {
                                value = Boolean(value)
                            } else if (type === 'json') {
                                value = JSON.parse(value)
                            }

                            Vue.set(this.$store.state.application.externalState, key, value)
                        }
                    } catch (e) {
                        console.log(e)
                    }
                })
                .catch(err => {
                    console.log(`Could not contact external state service. Please contact support with this error: ${JSON.stringify(err)}`)
                })
        },
        sendDesktopMessage() {
            if (!window.isElectron) {
                return alert('Not on desktop')
            }

            this.$desktop.sendCommand('ping', this.$refs.desktopMessage.value)
            window.BlockHub.Bridge.on('pong', (event, msg) => console.log('Message from desktop: ', msg))
        }
    }
}
</script>
