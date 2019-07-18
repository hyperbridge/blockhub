
require('dotenv').config()
import hello from 'hellojs/dist/hello.all.js'

const {
    GOOGLE_CLIENT_ID: googleClientID,
    GOOGLE_CLIENT_SECRET: googleClientSecret,
    SOCIAL_LOGIN_REDIRECT_URI:redirectUri,
    OAUTH_PROXY:oauthProxy
} = process.env

// START setup hellojs
hello.init({
    google: googleClientID,
    github: googleClientSecret
}, { 
    redirect_uri: redirectUri
}, {
    oauth_proxy: oauthProxy
});

import Vue from 'vue'

export default () => {
    const plugin = {
        install(Vue) {
            Vue.mixin({
                created() {
                    this.$hello = hello
                }
            })
        }
    }

    Vue.use(plugin)
}