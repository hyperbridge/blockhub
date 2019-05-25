<template>
    <div id="app" :class="{ 'disable-animations': !disableAnimations }">
        <c-render-condition :type="renderCondition">
            <router-view></router-view>

            <c-drawer />
        </c-render-condition>

        <vue-snotify></vue-snotify>
    </div>
</template>

<script>
    import axios from 'axios'
    import Vue from 'vue'
    import * as DB from '@/db'

    export default {
        name: 'app',
        props: ['data'],
        components: {
            'c-render-condition': (resolve) => require(['@/ui/components/render-condition'], resolve),
            'c-drawer': (resolve) => require(['@/ui/components/drawer'], resolve),
            'c-sidebar-menu-link': (resolve) => require(['@/ui/components/sidebar-menu/menu_item'], resolve)
        },
        data() {
            return {
                renderCondition: 'none',
            }
        },
        computed: {
            disableAnimations() { return this.$store.state.application.settings.client.animations }
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

                axios({
                    method: 'get',
                    url: sheetUrl
                })
                .then((res) => {
                    this.entries = res.data.feed.entry
                    try {
                        for (let i in this.entries) {
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
                .catch((err) => {
                    console.log('Could not contact external state service. Please contact support with this error: ' + JSON.stringify(err))
                })
            },
            sendDesktopMessage() {
                if (!window.isElectron) {
                    return alert('Not on desktop')
                }

                window.BlockHub.Bridge.sendCommand('ping', this.$refs.desktopMessage.value)
                window.BlockHub.Bridge.on('pong', (event, msg) => console.log('Message from desktop: ', msg) )
            }
        },
        mounted() {
            this.getExternalState()
            this.ensureDesktopWelcome()
        },
        created() {
            this.$store.state.application.signedIn = false

            this.$nextTick(() => {
                if (this.$route.meta.renderCondition) {
                    this.renderCondition = this.$route.meta.renderCondition
                } else if (this.$route.meta.permission === 'signedIn') {
                    this.renderCondition = 'user'
                } else if (this.$route.meta.permission === 'developerMode') {
                    this.renderCondition = 'user'
                } else {
                    this.renderCondition = 'initialized'
                }
            })
        },
        watch: {
            '$route'(to, from) {
                $('body').removeClass('show-sidebar')
                $('[data-action="fixedpanel-toggle"] span').removeClass('fa-times').addClass('fa-bars')

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
            '$store.state.auth.user'(newVal) {
                if (this.$store.state.application.signedIn && newVal === undefined) {
                    this.$store.state.application.signedIn = false
                } else {
                    this.$store.state.application.signedIn = true

                    this.$store.state.application.account = {
                        ...this.$store.state.application.account,
                        ...this.$store.state.auth.user
                    }

                    this.$api(`/application/state`).find().then((res) => {
                        this.$store.commit('application/updateState', res)
                    })
                }
            },
            '$store.state.application.activeProfile.role'(newVal) {
                if (newVal === 'developer') {
                    this.$store.state.application.developerMode = true
                }
            }
        }
    }
</script>
