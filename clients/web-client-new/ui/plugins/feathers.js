import Vue from 'vue'
import url from 'url'
import feathersClient from '~/api/feathers-client'

export default ({ app }) => {
    let origin = null
    let storage = null

    if (process.server) {
        origin = process.env.NODE_ENV !== 'production' ? `http://localhost:9001` : 'https://api.blockhub.gg'

        storage = {
            getItem() { },
            setItem() { },
            removeItem() { }
        }
    }

    let client = feathersClient(origin, storage)

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