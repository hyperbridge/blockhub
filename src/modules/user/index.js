import cookie from 'cookie';

let timeout = null;

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
                state.settings[key] = payload[key];
            }
        },
        UPDATE_SETTINGS (state, property) {
            state.settings[property] = !state.settings[property];
        }
    },
    actions: {
        loadSettings({ commit, state, rootState }) {
            if (rootState.network.signed_in) {

            } else {
                const cookies = cookie.parse(document.cookie);
                const settingsCookies = {};

                for (let key in cookies) {
                    if (key.includes('settings_')) {
                        const [,cookieName] = key.split('_')
                        settingsCookies[cookieName] = cookies[key] == 'true';
                    }
                }

                commit('LOAD_SETTINGS', settingsCookies);
            }
        },
        updateSettings({ commit, state, rootState }, property) {
            commit('UPDATE_SETTINGS', property);

            clearTimeout(timeout);
            timeout = setTimeout(() => {
                if (rootState.network.signed_in) {

                } else {
                    document.cookie = cookie.serialize('settings_' + property, state.settings[property], { maxAge: 60 * 60 * 24 * 7 });
                }
            }, 1000);
        }
    }
}
