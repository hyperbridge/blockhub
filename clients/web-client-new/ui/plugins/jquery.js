import Vue from 'vue'
import jQuery from 'jquery'
window.jQuery = window.$ = jQuery


export default () => {
    const plugin = {
        install(Vue) {
            Vue.mixin({
                created() {
                    this.$ = jQuery
                    this.$jquery = jQuery
                }
            })
        }
    }

    Vue.use(plugin)
}
