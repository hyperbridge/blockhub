import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/screens/home'),
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/screens/home'),
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
      path: '/identity/:id',
      name: 'Identity',
      props: true,
      component: () => import('@/screens/identity-overview')
    },
    {
      path: '/identity/:id/contacts',
      name: 'Identity Contacts',
      component: () => import('@/screens/identity-contacts')
    },
    {
      path: '/identity/:id/projects',
      name: 'Identity Projects',
      component: () => import('@/screens/identity-projects')
    },
    {
      path: '/identity/:id/assets',
      name: 'Identity Assets',
      component: () => import('@/screens/identity-assets')
    },
    {
      path: '/identity/:id/contacts',
      name: 'Identity Contacts',
      component: () => import('@/screens/identity-contacts')
    },
    {
      path: '/invoice/:id',
      name: 'Invoice',
      component: () => import('@/screens/invoice-overview')
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
      path: '/project/:id/bounties',
      name: 'Project Bounties',
      component: () => import('@/screens/project-bounties')
    },
    {
      path: '/project/:id/contributors',
      name: 'Project Contributors',
      component: () => import('@/screens/project-contributors')
    },
    {
      path: '/project/:id/discussion',
      name: 'Project Discussion',
      component: () => import('@/screens/project-discussion')
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
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   get_data_from_server(to.fullPath).then(component => {
//     if (to.matched.length === 0) {
//       // the target route doesn't exist yet
//       router.addRoutes({ path: to.path, component: component })
//       next(to.fullPath)
//       return
//     } else {
//       // the route and component are known and data is available
//       next()
//     }
//   })
// })

export default router
