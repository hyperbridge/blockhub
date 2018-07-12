// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import app from './app'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import './css/styles.scss'

const data = {
  user: 'something'
}

const dataString = JSON.stringify(data).replace(/"/g, "'")


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
