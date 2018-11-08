// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import moment from 'moment'
import Snotify, { SnotifyPosition } from 'vue-snotify'
import { Picker, Emoji } from 'emoji-mart-vue'
import VueCurrencyFilter from 'vue-currency-filter'
import VueNumerals from 'vue-numerals'
import app from './app'
import router from './router'
import store, { initializer } from './store'
import migrations from './db/migrations'
import './filters'
import './components'
import './directives'
import './prototypes'

import './css/styles.scss'


const debounce = require('debounce')

Vue.config.productionTip = false

Vue.use(Snotify, {
  toast: {
    position: SnotifyPosition.leftBottom
  }
});

Vue.use(VueNumerals);
Vue.component('picker', Picker)
Vue.component('emoji', Emoji)
Vue.use(VueCurrencyFilter,
    {
        symbol : '$',
        thousandsSeparator: '.',
        fractionCount: 2,
        fractionSeparator: ',',
        symbolPosition: 'front',
        symbolSpacing: true
    })


const data = {
  user: 'something'
}

const dataString = JSON.stringify(data).replace(/"/g, "'")


const notifyError = debounce(function (message) {
  if (!message) return

  if (message.indexOf('Error') !== -1) {
    BlockHub.Bridge.sendCommand('error', { message: message.slice(0, 250) })
  }

  if (message.indexOf('TypeError') !== -1) {
    BlockHub.Notifications.error(message, 'UI Error', {
      timeout: 5000,
      pauseOnHover: true
    })
  }
}, 500)

const overrideConsoleLog = () => {
  window.consoleLogMessages = []

  var oldLog = console.log
  console.log = function (message) {
    window.consoleLogMessages.push(message)

    notifyError(message.toString())

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


// overrideConsoleLog() TODO: later

initializer().then(() => {
  console.log('[BlockHub] Loading app...')

  /* eslint-disable no-new */
  BlockHub.Vue = new Vue({
      el: '#app',
      router,
      store,
      mixins: [migrations],
      template: `<app :data="${dataString}" />`,
      components: {
        'app': app
      }
  })

  BlockHub.Notifications = BlockHub.Vue.$snotify
})
