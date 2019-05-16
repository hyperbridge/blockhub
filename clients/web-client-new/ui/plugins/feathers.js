import Vue from 'vue'
import url from 'url'
import feathersClient, { browserClient } from '~/api/feathers-client'

export default ({ app }) => {
    let client = null

    if (process.browser) {
        client = browserClient
    } else {
        console.log(process.env.NODE_ENV)
        const origin = process.env.NODE_ENV !== 'production' ? `http://localhost:9001` : 'https://api.blockhub.gg'

        const storage = {
            getItem() { },
            setItem() { },
            removeItem() { }
        }

        client = feathersClient(origin, storage)
    }

    // Set feathers instance on app
    // This way we can use it in middleware and pages asyncData/fetch
    app.feathers = client

    const feathersPlugin = {
        install(Vue, options) {
            Vue.mixin({
                created: function () {
                    // access to the client anywhere
                    this.$feathers = client
                    this.$api = client

                    // Setting up the services
                    this.$services = client.services
                }
            })
        }
    }

    Vue.use(feathersPlugin)
}