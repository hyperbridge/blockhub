import Vue from 'vue'
import { Picker, Emoji } from 'emoji-mart-vue'

export default () => {
    Vue.component('picker', Picker)
    Vue.component('emoji', Emoji)
}
