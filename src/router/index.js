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
      path: '/account',
      name: 'Account',
      component: () => import('@/screens/account'),
    },
    {
      path: '/account/signup',
      name: 'Sign Up',
      component: () => import('@/screens/account-signup'),
    },
    {
      path: '/account/signin',
      name: 'Sign In',
      component: () => import('@/screens/account-signin'),
    },
    {
      path: '/account/wallets',
      name: 'Wallets',
      component: () => import('@/screens/account-wallets'),
    },
    {
      path: '/account/transactions',
      name: 'Transactions',
        component: () => import('@/screens/account-transactions')
    },
    {
      path: '/account/identities',
      name: 'Identities',
        component: () => import('@/screens/account-identities')
    },
    {
      path: '/contacts',
      name: 'Contacts',
        component: () => import('@/screens/contacts')
    },
    {
      path: '/store',
      name: 'Store',
      component: () => import('@/screens/store')
    },
    {
      path: '/news',
      name: 'News',
      component: () => import('@/screens/news')
    },
    {
      path: '/settings',
      name: 'Settings',
      component: () => import('@/screens/settings')
    },
    {
      path: '/settings/profile',
      name: 'Profile',
        component: () => import('@/screens/settings-profile')
    },
    {
      path: '/settings/client',
      name: 'Client Settings',
      component: () => import('@/screens/settings-client')
    },
    {
      path: '/app/:id',
      name: 'App',
      component: () => import('@/screens/app-overview')
    },
    {
      path: '/app/:id/community',
      name: 'App Community',
      component: () => import('@/screens/app-community')
    },
    {
      path: '/app/:id/projects',
      name: 'App Projects',
      component: () => import('@/screens/app-projects')
    },
    {
      path: '/app/:id/assets',
      name: 'App Assets',
      component: () => import('@/screens/app-assets')
    },
    {
      path: '/community',
      name: 'Community',
      component: () => import('@/screens/community')
    },
    {
      path: '/community/chat',
      name: 'Chat',
      component: () => import('@/screens/community-chat')
    },
    {
      path: '/republic',
      name: 'Republic',
      component: () => import('@/screens/republic')
    },
    {
      path: '/republic/citizenship',
      name: 'Republic Citizenship',
      component: () => import('@/screens/republic-citizenship')
    },
    {
      path: '/republic/district/create',
      name: 'Create District',
      component: () => import('@/screens/republic-district')
    },
    {
      path: '/users',
      name: 'Users',
      component: () => import('@/screens/users')
    },
    {
      path: '/user/:id',
      name: 'User',
      component: () => import('@/screens/user-overview')
    },
    {
      path: '/projects',
      name: 'Projects',
      component: () => import('@/screens/projects')
    },
    {
      path: '/project/:id',
      name: 'Project',
      component: () => import('@/screens/project-overview')
    },
    {
      path: '/curators',
      name: 'Curators',
      component: () => import('@/screens/curators')
    },
    {
      path: '/curator/:id',
      name: 'Curator',
      component: () => import('@/screens/curator-overview')
    },
    {
      path: '/help',
      name: 'Help',
      component: () => import('@/screens/help')
    },
    {
      path: '/support',
      name: 'Support',
      component: () => import('@/screens/support')
    }
  ]
})
