import Vue from 'vue'
import url from 'url'
import feathersClient from '~/framework/feathers-client'

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

    const client = feathersClient(origin, storage)

    // Set feathers instance on app
    // This way we can use it in middleware and pages asyncData/fetch
    app.feathers = client

    const feathersPlugin = {
        install(Vue, options) {
            Vue.mixin({
                created() {
                    // access to the client anywhere
                    this.$feathers = client

                    // Setting up the services
                    this.$services = client.services
                }
            })
        }
    }

    Vue.use(feathersPlugin)
}
