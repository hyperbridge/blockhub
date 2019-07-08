<template>
    <div id="app" :class="{ 'disable-animations': !disableAnimations }">
        <c-render-condition :type="renderCondition">
            <div v-if="nuxtError">
                <c-error-page :isError="error" />
            </div>
            <nuxt-child v-else keep-alive />
        </c-render-condition>

        <no-ssr>
            <c-drawer />
            <vue-snotify />
        </no-ssr>

        <div
            id="startup-loader"
            class="startup-loader">
            <div class="startup-loader__container">
                <div>
                    <div class="startup-loader__spinner" />
                    <p class="startup-loader__message" />
                    <p class="startup-loader__user">
                        Submitted by <a
                            href="#"
                            target="_blank" />
                    </p>
                </div>
                <p class="startup-loader__status-message">
                    Launching...
                </p>
                <div
                    id="critical-error"
                    class="startup-loader__links">
                    <p>Connection problems? Let us know!</p> <a href="https://twitter.com/hyperbridge"><span
                        class="fab fa-twitter" /> Tweet Us</a> <a href="https://hyperbridge.org/status"><span
                        class="fas fa-globe-americas" /> Server Status</a>
                    <br><br>
                    <button @click="window.goHome()">
                        Try Home
                    </button>
                    <button @click="window.resetSettings()">
                        Reset Settings
                    </button>
                    <button @click="window.location = 'https://hyperbridge.org/#contact'">
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
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
        const nuxtError = this.$nuxt.nuxt.err
        return {
            nuxtError,
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
        this.startupLoader()
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
        startupLoader() {
            window.goHome = function goHome() {
                window.location = '/'
            }

            window.resetSettings = function resetSettings() {
                if (window.closeLokiDatabase) {
                    window.closeLokiDatabase()
                }

                const req = indexedDB.deleteDatabase('LokiCatalog')
                req.onsuccess = function onsuccess() {
                // alert("Deleted settings successfully. The page will now reload.");
                    window.location = window.location.href.replace(window.location.hash, '')
                }
                req.onerror = function onerror() {
                // alert("ERR 301: Couldn't delete database");
                }
                req.onblocked = function onblocked(event) {
                // alert("ERR 302: Couldn't delete database due to the operation being blocked.");
                    window.location = window.location.href.replace(window.location.hash, '')
                }
            }

            function isWhiteSpace(coords) {
                const element = document.elementFromPoint(coords.x, coords.y)
                const whitespace = $(document).add('body, html, #business-app, #app, #header-bg, #startup-loader, #critical-error, #left-bg, #right-bg, .startup-loader__container')

                return whitespace.get().indexOf(element) > -1 ? true : false
            }

            function bootChecker() {
                if (typeof $ == 'undefined') return setTimeout(bootChecker, 1000)

                // If any of these randomly chosen coordinates is not a bottom layer element, then assume loading occurred properly
                const isLoaded = !isWhiteSpace({ x: 50, y: 50 })

                if (isLoaded) {
                    $('#startup-loader, #critical-error').hide()
                    return setTimeout(bootChecker, 1 * 1000)
                }

                $('.startup-loader__status-message').text('An error occurred. Please try again in a few minutes.')
                $('#startup-loader, #critical-error').show()

                return setTimeout(bootChecker, 1000)
            }

            setTimeout(bootChecker, 15 * 1000)

            function setStatusMessage() {
                if (typeof $ == 'undefined') return setTimeout(setStatusMessage, 100)

                const userSubmittedConnectionMessages = [
                    {
                        'id': 1,
                        'message': 'wubba lubba dub dubbbb',
                        'user': {
                            'id': 1,
                            'name': 'fr0stbyte'
                        }
                    },
                    {
                        'id': 2,
                        'message': 'LOADING SIMULATION',
                        'user': {
                            'id': 2,
                            'name': 'GymTim'
                        }
                    },
                    {
                        'id': 3,
                        'message': 'Leeroooooy Jeeeenkiiiiins!',
                        'user': {
                            'id': 1,
                            'name': 'fr0stbyte'
                        }
                    },
                    {
                        'id': 4,
                        'message': 'Well, at least I have chicken!',
                        'user': {
                            'id': 1,
                            'name': 'fr0stbyte'
                        }
                    },
                    {
                        'id': 6,
                        'message': 'Your lack of faith is disturbing',
                        'user': {
                            'id': 1,
                            'name': 'fr0stbyte'
                        }
                    },
                    {
                        'id': 7,
                        'message': "Many whelps. Handle it! Who was that!? That's a 50 DKP minus!!",
                        'user': {
                            'id': 1,
                            'name': 'fr0stbyte'
                        }
                    },
                    {
                        'id': 8,
                        'message': 'Maybe Elon was right about AI',
                        'user': {
                            'id': 1,
                            'name': 'fr0stbyte'
                        }
                    },
                    {
                        'id': 9,
                        'message': 'I can dance all day, try to hit me, come on, try to hit me',
                        'user': {
                            'id': 1,
                            'name': 'fr0stbyte'
                        }
                    },
                    {
                        'id': 10,
                        'message': "My hands are shaking, but I'm still shooting, still getting headshots like BOOM headshot BOOM HEADSHOT!",
                        'user': {
                            'id': 1,
                            'name': 'fr0stbyte'
                        }
                    },
                    {
                        'id': 11,
                        'message': 'Drinking too much will make chuck sick',
                        'user': {
                            'id': 4,
                            'name': 'Spyder'
                        }
                    },
                    {
                        'id': 12,
                        'message': 'The cake is a lie.',
                        'user': {
                            'id': 5,
                            'name': 'JordoBrooks'
                        }
                    }
                ]

                const message = userSubmittedConnectionMessages[Math.floor(Math.random() * Math.floor(userSubmittedConnectionMessages.length))]

                $('.startup-loader__message').html(message.message)
                $('.startup-loader__user a').html(message.user.name)
                $('.startup-loader__user a').attr('href', `#/profile/${message.user.id}`)
                $('.startup-loader__user').show()
                $('.startup-loader').show()
            }

            setStatusMessage()
        },
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

<style>


body {
    overflow-x: hidden;
    margin: 0px;
    padding: 0px;
    -ms-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Barlow', sans-serif;
    font-size: 13px;
    line-height: 20px;
    color: #323c47;
    background: #30314c;
    -webkit-font-smoothing: subpixel-antialiased; /* fix for blur? */
    text-rendering:optimizeSpeed; /* fix for blur? */
}


/*Try to fix scrollable div height problems*/
/*html, body, #app, .page {*/
    /*min-height: 100vh;*/
 /*}*/
html, body{
    min-height: 100vh;
}

*, *::before, *::after {
    box-sizing: border-box;
}


p {
    margin-bottom: 10px;
}

a {
    color: #5abaf9;
    text-decoration: none;
    background-color: transparent;
}


#__nuxt {
    z-index: 2;
    position: relative;
}

#critical-error {
    display: none;
    padding: 10px;
    font-size: 15px;
    color: #ddd;
    width: 100%;
    margin: 0 auto;
    /* background: rgba(10, 2, 2, 0.3); */
    padding: 15px;
    border-radius: 6px;
    /* box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1); */
}

#critical-error button {
    background: transparent;
    color: #fff;
    border-radius: 4px;
    padding: 6px;
    font-size: 15px;
    border: 1px solid #fff;
}

.startup-loader {
    position: fixed;
    background: #30314c;
    z-index: 100000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
}

.startup-loader .startup-loader__container {
    width: 100%;
    height: 100%;
    position: relative;
    text-align: center;
    padding-top: 100px;
    font-size: 14px;
}

.startup-loader__message {
    color: #fff;
    font-size: 20px;
    font-style: italic;
    text-transform: uppercase;
    margin-top: 40px;
}

.startup-loader__user {
    display: none;
    color: #999;
    text-transform: uppercase;
}

.startup-loader__user a {
  color: #ddd;
  font-weight: bold;
}

.startup-loader__status-code {
    margin-top: 80px;
}

.startup-loader__status-message {
    color: #ddd;
    font-size: 16px;
    margin-top: 30px;
    text-transform: uppercase;
}

.startup-loader__links {
    display: none;
    position: absolute;
    bottom: 30px;
    left: 0;
    text-align: center;
    width: 100%;
    font-size: 16px;
}

.startup-loader__links p {
  color: #999;
}

.startup-loader__links a {
  color: #fff;
  margin-right: 20px;
  font-size: 18px;
  font-weight: bold;
}
.startup-loader__links a span {
  color: #fff;
  margin-right: 5px;
}

.startup-loader__spinner {
  position: relative;
  margin: 0 auto;
  left: 0px;
  top: 0px;
  width: 20px;
  height: 20px;
  animation: rotate 500ms infinite linear;
  zoom: 4;
  display: none;
}

.startup-loader__spinner:before {
  position: absolute;
  left: 3px;
  top: 3px;
  content: " ";
  width: 14px;
  height: 14px;
  border: 2px solid #dfdfe9;
  border-radius: 7px;
  border-right-color: transparent;
}
</style>
