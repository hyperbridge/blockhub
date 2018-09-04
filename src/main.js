// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import moment from 'moment'
import Snotify, { SnotifyPosition } from 'vue-snotify'
import app from './app'
import router from './router'
import store, { initializer } from './store'
import VueCarousel from 'vue-carousel';
import './filters.js';

Vue.config.productionTip = false

Vue.use(Snotify, {
  toast: {
    position: SnotifyPosition.rightBottom
  }
})

Vue.use(VueCarousel);

import './css/styles.scss'

const data = {
  user: 'something'
}

const dataString = JSON.stringify(data).replace(/"/g, "'")

Vue.component('c-layout', () => import('@/ui/layouts/default'));
Vue.component('c-heading-bar', () => import('@/ui/components/heading-bar'));
Vue.component('c-button', () => import('@/ui/components/button'));


const overrideConsoleLog = () => {
  window.consoleLogMessages = []

  var oldLog = console.log
  console.log = function (message) {
    window.consoleLogMessages.push(message)

    oldLog.apply(console, arguments)
  }

  var oldWarn = console.log
  console.warn = function (message) {
    window.consoleLogMessages.push('Warn: ' + message)

    oldWarn.apply(console, arguments)
  }

  var oldError = console.log
  console.error = function (message) {
    window.consoleLogMessages.push('Error: ' + message)

    oldError.apply(console, arguments)
  }
}

//window.addEventListener('hashchange', () => { $('body').addClass('screen-loading') }, false);


overrideConsoleLog()

initializer().then(() => {
  console.log('[BlockHub] Loading app...')

  /* eslint-disable no-new */
  new Vue({
      el: '#app',
      router,
      store,
      template: `<app :data="${dataString}" />`,
      components: {
        'app': app
      },
  })

})
