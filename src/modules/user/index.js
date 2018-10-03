import cookie from 'cookie'
import * as DB from '@/db'

let timeout = null
let previousProperty = ''

export default {
    state: {
        settings: {
            animations: true,
            autoplay: true,
            pagination: true
        }
    },
    mutations: {
        LOAD_SETTINGS (state, payload) {
            for (let key in payload) {
                state.settings[key] = payload[key]
            }
        },
        UPDATE_SETTINGS (state, property) {
            state.settings[property] = !state.settings[property]
        }
    },
    actions: {
        loadSettings({ commit, state, rootState }) {
            if (rootState.application.signed_in && rootState.application.account.settings) {
                const accountSettings = rootState.application.account.settings.client
                commit('LOAD_SETTINGS', accountSettings)
            } else {
                const cookies = cookie.parse(document.cookie)
                const cookiesSettings = {}

                for (let key in cookies) {
                    if (key.includes('settings_')) {
                        const [,cookieName] = key.split('_')
                        cookiesSettings[cookieName] = cookies[key] == 'true'
                    }
                }

                commit('LOAD_SETTINGS', cookiesSettings)
            }
        },
        updateSettings({ commit, state, rootState }, property) {
            commit('UPDATE_SETTINGS', property)

            if (previousProperty === property) clearTimeout(timeout)

            timeout = setTimeout(() => {
                previousProperty = property
                // WIP
                if (rootState.application.signed_in) {
                    const [accountName] = Object.keys(rootState.application.account)
                    rootState.application.account[accountName].settings.client[property] = state.settings[property]
                    DB.save()
                } else {
                    document.cookie = cookie.serialize('settings_' + property, state.settings[property], { maxAge: 60 * 60 * 24 * 7 })
                }
            }, 600)
        }
    }
}
