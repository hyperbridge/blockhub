import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/screens/home'),
    },
    {
      path: '/account/wallets',
      name: 'Wallets',
      component: () => import('@/screens/wallets'),
    },
  ],
})
