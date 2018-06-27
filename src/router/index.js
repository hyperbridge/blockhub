import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/ui/screens/home')
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/ui/screens/home')
    },
    {
      path: '/sitemap',
      name: 'Sitemap',
      component: () => import('@/ui/screens/sitemap')
    },
    {
      path: '/help',
      name: 'Help',
      component: () => import('@/ui/screens/help')
    },
    {
      path: '/support',
      name: 'Support',
      component: () => import('@/ui/screens/support')
    },
    {
      path: '/changelog',
      name: 'Changelog',
      component: () => import('@/ui/screens/changelog')
    },
    {
      path: '/news',
        name: 'News',
          component: () => import('@/ui/screens/news')
    },
    {
      path: '/store',
      name: 'Store',
      component: () => import('@/ui/screens/store')
    },
    {
      path: '/store/cart',
      name: 'Store Cart',
      component: () => import('@/ui/screens/store-cart')
    },
    {
      path: '/store/checkout',
      name: 'Store Checkout',
      component: () => import('@/ui/screens/store-checkout')
    },
    {
      path: '/store/invoices',
      name: 'Store Invoices',
      component: () => import('@/ui/screens/store-invoices')
    },
    {
      path: '/store/invoice/:id',
      name: 'Store Invoice',
      component: () => import('@/ui/screens/store-invoice')
    },
    {
      path: '/account',
      name: 'Account',
      component: () => import('@/ui/screens/account')
    },
    {
      path: '/account/signup',
      name: 'Sign Up',
      component: () => import('@/ui/screens/account-signup')
    },
    {
      path: '/account/signin',
      name: 'Sign In',
      component: () => import('@/ui/screens/account-signin')
    },
    {
      path: '/account/signout',
      name: 'Sign Out',
      component: () => import('@/ui/screens/account-signout')
    },
    {
      path: '/account/wallets',
      name: 'Wallets',
      component: () => import('@/ui/screens/account-wallets')
    },
    {
      path: '/account/identities',
      name: 'Identities',
      component: () => import('@/ui/screens/account-identities')
    },
    {
      path: '/wallet/:id',
      name: 'Wallet',
      props: true,
      component: () => import('@/ui/screens/wallet-overview')
    },
    {
      path: '/wallet/:id/transactions',
      name: 'Transactions',
      props: true,
      component: () => import('@/ui/screens/wallet-transactions')
    },
    {
      path: '/transaction/:id',
      name: 'Transaction',
      props: true,
      component: () => import('@/ui/screens/transaction-overview')
    },
    {
      path: '/identity/:id',
      name: 'Identity',
      props: true,
      component: () => import('@/ui/screens/identity-overview')
    },
    {
      path: '/identity/:id/contacts',
      name: 'Identity Contacts',
      props: true,
      component: () => import('@/ui/screens/identity-contacts')
    },
    {
      path: '/identity/:id/projects',
      name: 'Identity Projects',
      props: true,
      component: () => import('@/ui/screens/identity-projects')
    },
    {
      path: '/identity/:id/assets',
      name: 'Identity Assets',
      props: true,
      component: () => import('@/ui/screens/identity-assets')
    },
    {
      path: '/invoice/:id',
      name: 'Invoice',
      props: true,
      component: () => import('@/ui/screens/invoice-overview')
    },
    {
      path: '/settings',
      name: 'Settings',
      component: () => import('@/ui/screens/settings')
    },
    {
      path: '/settings/profile',
      name: 'Profile',
        component: () => import('@/ui/screens/settings-profile')
    },
    {
      path: '/settings/client',
      name: 'Client Settings',
      component: () => import('@/ui/screens/settings-client')
    },
    {
      path: '/product/:id',
      name: 'Product',
      props: true,
      component: () => import('@/ui/screens/product-overview')
    },
    {
      path: '/product/:id/community',
      name: 'Product Community',
      props: true,
      component: () => import('@/ui/screens/product-community')
    },
    {
      path: '/product/:id/projects',
      name: 'Product Projects',
      props: true,
      component: () => import('@/ui/screens/product-projects')
    },
    {
      path: '/product/:id/assets',
      name: 'Product Assets',
      props: true,
      component: () => import('@/ui/screens/product-assets')
    },
    {
      path: '/community',
      name: 'Community',
      component: () => import('@/ui/screens/community')
    },
    {
      path: '/community/chat',
      name: 'Chat',
      component: () => import('@/ui/screens/community-chat')
    },
    {
      path: '/republic',
      name: 'Republic',
      component: () => import('@/ui/screens/republic')
    },
    {
      path: '/republic/citizenship',
      name: 'Republic Citizenship',
      component: () => import('@/ui/screens/republic-citizenship')
    },
    {
      path: '/republic/district/create',
      name: 'Create District',
      component: () => import('@/ui/screens/republic-district')
    },
    {
      path: '/projects',
      name: 'Projects',
      component: () => import('@/ui/screens/projects')
    },
    {
      path: '/project/:id',
      name: 'Project',
      props: true,
      component: () => import('@/ui/screens/project-overview')
    },
    {
      path: '/project/:id/bounties',
      name: 'Project Bounties',
      props: true,
      component: () => import('@/ui/screens/project-bounties')
    },
    {
      path: '/project/:id/contributors',
      name: 'Project Contributors',
      props: true,
      component: () => import('@/ui/screens/project-contributors')
    },
    {
      path: '/project/:id/discussion',
      name: 'Project Discussion',
      props: true,
      component: () => import('@/ui/screens/project-discussion')
    },
    {
      path: '/curators',
      name: 'Curators',
      component: () => import('@/ui/screens/curators')
    },
    {
      path: '/curator/:id',
      name: 'Curator',
      props: true,
      component: () => import('@/ui/screens/curator-overview')
    },
    {
      path: "*",
      component: () => import('@/ui/screens/not-found')
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
