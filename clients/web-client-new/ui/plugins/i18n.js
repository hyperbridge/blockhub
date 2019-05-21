import Vue from 'vue'
import VueI18n from 'vue-i18n'
import vuexI18n from 'vuex-i18n/dist/vuex-i18n.umd.js'


//Vue.use(VueI18n)

export default (context, inject) => {
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

        const host = process.client ? window.location.hostname.replace('www.', '').replace('.local', '').split(':')[0] : context.req.headers.host

        if (translations[host]) {
            Vue.i18n.add('en', translations[host].en)
        }

        Vue.i18n.set('en')
    }

    initTranslations()
}