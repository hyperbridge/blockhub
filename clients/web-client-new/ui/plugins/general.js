import Vue from 'vue'

import moment from 'moment'
import Snotify, { SnotifyPosition } from 'vue-snotify'
import { Picker, Emoji } from 'emoji-mart-vue'
import VueCurrencyFilter from 'vue-currency-filter'

// import vuexI18n from 'vuex-i18n/dist/vuex-i18n.umd.js'

import '@/css/styles.scss'


export default (context, inject) => {
    const debounce = require('debounce')

    Vue.config.productionTip = false

    Vue.use(Snotify, {
        toast: {
            position: SnotifyPosition.rightTop,
            titleMaxLength: 24
        }
    })

    if (process.browser) {
        const VueNumerals = require('vue-numerals')
        const Popover = require('vue-js-popover')
        //const VueDraggable = require('vue-draggable')


        //Vue.use(VueDraggable)
        Vue.use(VueNumerals)
        Vue.use(Popover)
    }

    Vue.component('picker', Picker)
    Vue.component('emoji', Emoji)

    Vue.use(VueCurrencyFilter,
        {
            symbol: '$',
            thousandsSeparator: '.',
            fractionCount: 2,
            fractionSeparator: ',',
            symbolPosition: 'front',
            symbolSpacing: true
        })

    /*
    const translations = {
        global: {
            en: {
                "content": "This is some {type} content",
                "Start building your collection today, share it and save it!": "Start building your collection today, share it and save it!",
                "Get Started": "Get Started"
            }
        },
        'blockhub.gg': {
            en: {
                "Start building your collection today, share it and save it!": "Start building your collection today, share it and save it for the rest of your lifetime. It's yours - on the blockchain.",
            }
        },
        'thor.gg': {
            en: {
            }
        }
    }

    Vue.use(vuexI18n.plugin, context.store, {
        moduleName: 'i18n',
        onTranslationNotFound(locale, key) {
            return translations.global[key]
        }
    })

    const initTranslations = () => {
        Vue.i18n.add('en', translations.global)

        const host = process.browser ? window.location.hostname.replace('www.', '').replace('.local', '').split(':')[0] : context.req.headers.host

        if (translations[host]) {
            Vue.i18n.add('en', translations[host].en)
        }

        Vue.i18n.set('en')
    }

    initTranslations()
    */
}
