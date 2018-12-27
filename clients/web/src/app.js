// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import moment from 'moment'
import Snotify, { SnotifyPosition } from 'vue-snotify'
import { Picker, Emoji } from 'emoji-mart-vue'
import VueCurrencyFilter from 'vue-currency-filter'
import VueNumerals from 'vue-numerals'
import VueI18n from 'vue-i18n'
import VueDraggable from 'vue-draggable'
import Popover from 'vue-js-popover'

import './globals'
import store, { initializer } from './store'
import router from './router'
import feathersClient from './api/feathers-client'
import * as DB from '@/db'
import * as mixins from '@/mixins'
import ui from '@/ui/app'
import localeData from '@/db/seed/locale-data.json'
import './filters'
import './components'
import './directives'
import './prototypes'


import './css/styles.scss'

window.BlockHub.WebClient = feathersClient


const debounce = require('debounce')

Vue.config.productionTip = false

Vue.use(mixins.title)

Vue.use(Popover)

Vue.use(VueDraggable)

Vue.use(Snotify, {
    toast: {
        position: SnotifyPosition.rightTop,
        titleMaxLength: 24
    }
})

Vue.use(VueNumerals)
Vue.component('picker', Picker)
Vue.component('emoji', Emoji)
Vue.use(VueCurrencyFilter,
    {
        symbol : '$',
        thousandsSeparator: '.',
        fractionCount: 2,
        fractionSeparator: ',',
        symbolPosition: 'front',
        symbolSpacing: true
    })


const data = {
    user: 'something'
}

const dataString = JSON.stringify(data).replace(/"/g, "'")


const notifyError = debounce(function (message) {
    if (!message) return

    if (message.indexOf('Error') !== -1) {
        if (store.state.application.account.settings.client.system_warnings) {
            window.BlockHub.Bridge.sendCommand('error', { message: message.slice(0, 250) })
        }
    }

    if (message.indexOf('TypeError') !== -1) {
        if (store.state.application.account.settings.client.system_warnings) {
            window.BlockHub.Notification.error(message, 'UI Error', {
                timeout: 5000,
                pauseOnHover: true
            })
        }
    }
}, 500)

const overrideConsoleLog = () => {
    window.consoleLogMessages = []

    let oldLog = console.log
    console.log = function (message) {
        window.consoleLogMessages.push(message)

        notifyError(message.toString())

        oldLog.apply(console, arguments)
    }

    let oldWarn = console.log
    console.warn = function (message) {
        window.consoleLogMessages.push('Warn: ' + message)

        oldWarn.apply(console, arguments)
    }

    let oldError = console.log
    console.error = function (message) {
        window.consoleLogMessages.push('Error: ' + message)

        oldError.apply(console, arguments)
    }
}

//window.addEventListener('hashchange', () => { $('body').addClass('screen-loading') }, false)

// overrideConsoleLog() TODO: later
export function createApp() {
    return new Promise((resolve) => {
        DB.init()

        initializer().then(() => {
            console.log('[BlockHub] Loading app...')

            const [language] = (
                window.navigator &&
                window.navigator.language &&
                window.navigator.language.split('-')
            ) || 'en'

            /* eslint-disable no-new */
            const app = window.BlockHub.Vue = new Vue({
                //el: '#app',
                router,
                store,
                mixins: [],
                template: `<app :data="${dataString}" />`,
                components: {
                    'app': ui
                },
                //     i18n: new VueI18n({
                //         locale,
                //         messages: localeData
                //     })
            })

            window.BlockHub.Notification = window.BlockHub.Vue.$snotify

            // expose the app, the router and the store.
            // note we are not mounting the app here, since bootstrapping will be
            // different depending on whether we are in a browser or on the server.
            resolve({ app, router, store })
        })
    })
}


