
import hello from 'hellojs/dist/hello.all.js'

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