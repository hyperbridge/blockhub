import Vue from 'vue'
import Snotify, { SnotifyPosition } from 'vue-snotify'

export default () => {
    Vue.use(Snotify, {
        toast: {
            position: SnotifyPosition.rightTop,
            titleMaxLength: 24
        }
    })
}
