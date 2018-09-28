import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

Vue.use(Router)

const appVersion = '0.2.0'

const router = new Router({
    //mode: 'history',
    scrollBehavior: () => ({y: 0}),
    linkActiveClass: 'is-active',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: (resolve) => require(['@/ui/screens/home'], resolve)
        },
        {
            path: '/home',
            name: 'Home',
            component: (resolve) => require(['@/ui/screens/home'], resolve)
        },
        {
            path: '/sitemap',
            name: 'Sitemap',
            component: (resolve) => require(['@/ui/screens/sitemap'], resolve)
        },
        {
            path: '/help',
            name: 'Help',
            component: (resolve) => require(['@/ui/screens/help'], resolve)
        },
        {
            path: '/help/:id',
            name: 'Topic',
            props: true,
            component: (resolve) => require(['@/ui/screens/help-topic'], resolve)
        },
        {
            path: '/help/:id/article/:slug',
            name: 'Help article',
            props: true,
            component: (resolve) => require(['@/ui/screens/help-article'], resolve)
        },
        {
            path: '/support',
            name: 'Support',
            component: (resolve) => require(['@/ui/screens/support'], resolve)
        },
        {
            path: '/changelog',
            name: 'Changelog',
            component: (resolve) => require(['@/ui/screens/changelog'], resolve)
        },
        {
            path: '/news',
            name: 'News',
            component: (resolve) => require(['@/ui/screens/news'], resolve)
        },
        {
            path: '/store',
            name: 'Store',
            component: (resolve) => require(['@/ui/screens/store'], resolve)
        },
        {
            path: '/store/cart',
            name: 'Store Cart',
            component: (resolve) => require(['@/ui/screens/store-cart'], resolve)
        },
        {
            path: '/store/checkout',
            name: 'Store Checkout',
            component: (resolve) => require(['@/ui/screens/store-checkout'], resolve)
        },
        {
            path: '/store/invoices',
            name: 'Store Invoices',
            component: (resolve) => require(['@/ui/screens/store-invoices'], resolve)
        },
        {
            path: '/store/invoice/:id',
            name: 'Store Invoice',
            component: (resolve) => require(['@/ui/screens/store-invoice'], resolve)
        },
        {
            path: '/account',
            name: 'Account',
            component: (resolve) => require(['@/ui/screens/account'], resolve)
        },
        {
            path: '/account/signup',
            name: 'Sign Up',
            component: (resolve) => require(['@/ui/screens/account-signup'], resolve)
        },
        {
            path: '/account/signin',
            name: 'Sign In',
            component: (resolve) => require(['@/ui/screens/account-signin'], resolve)
        },
        {
            path: '/account/signout',
            name: 'Sign Out',
            component: (resolve) => require(['@/ui/screens/account-signout'], resolve)
        },
        {
            path: '/account/verification',
            name: 'Account Verification',
            component: (resolve) => require(['@/ui/screens/account-verification'], resolve)
        },
        {
            path: '/account/wallets',
            name: 'Wallets',
            component: (resolve) => require(['@/ui/screens/account-wallets'], resolve)
        },
        {
            path: '/account/new-wallet',
            name: 'New Wallet',
            component: (resolve) => require(['@/ui/screens/account-new-wallet'], resolve)
        },
        {
            path: '/account/identities',
            name: 'Identities',
            component: (resolve) => require(['@/ui/screens/account-identities'], resolve)
        },
        {
            path: '/account/new-identity',
            name: 'New Identity',
            component: (resolve) => require(['@/ui/screens/account-new-identity'], resolve)
        },
        {
            path: '/wallet/:id',
            name: 'Wallet',
            props: true,
            component: (resolve) => require(['@/ui/screens/wallet-overview'], resolve)
        },
        {
            path: '/wallet/:id/transactions',
            name: 'Transactions',
            props: true,
            component: (resolve) => require(['@/ui/screens/wallet-transactions'], resolve)
        },
        {
            path: '/transaction/:id',
            name: 'Transaction',
            props: true,
            component: (resolve) => require(['@/ui/screens/transaction-overview'], resolve)
        },
        {
            path: '/identity/:id',
            name: 'Identity',
            props: true,
            component: (resolve) => require(['@/ui/screens/identity-overview'], resolve)
        },
        {
            path: '/identity/:id/contacts',
            name: 'Identity Contacts',
            props: true,
            component: (resolve) => require(['@/ui/screens/identity-contacts'], resolve)
        },
        {
            path: '/identity/:id/projects',
            name: 'Identity Projects',
            props: true,
            component: (resolve) => require(['@/ui/screens/identity-projects'], resolve)
        },
        {
            path: '/identity/:id/licenses',
            name: 'Identity licenses',
            props: true,
            component: (resolve) => require(['@/ui/screens/identity-licenses'], resolve)
        },
        {
            path: '/identity/:id/assets',
            name: 'Identity Assets',
            props: true,
            component: (resolve) => require(['@/ui/screens/identity-assets'], resolve)
        },
        {
            path: '/identity/:id/collections',
            name: 'Identity Collections',
            props: true,
            component: (resolve) => require(['@/ui/screens/identity-collection'], resolve)
        },
        {
            path: '/settings',
            name: 'Settings',
            component: (resolve) => require(['@/ui/screens/settings'], resolve)
        },
        {
            path: '/settings/profile',
            name: 'Profile',
            component: (resolve) => require(['@/ui/screens/settings-profile'], resolve)
        },
        {
            path: '/settings/client',
            name: 'Client Settings',
            component: (resolve) => require(['@/ui/screens/settings-client'], resolve)
        },
        {
            path: '/settings/activity',
            name: 'Activity Settings',
            component: (resolve) => require(['@/ui/screens/settings-activity'], resolve)
        },
        {
            path: '/settings/debug',
            name: 'Debug Settings',
            component: (resolve) => require(['@/ui/screens/settings-debug'], resolve)
        },
        {
            path: '/developer',
            name: 'Developer Area',
            component: (resolve) => require(['@/ui/screens/developer'], resolve)
        },
        {
            path: '/developer/new-product',
            name: 'New Product',
            component: (resolve) => require(['@/ui/screens/product-overview'], resolve),
            props: {id: 'new'}
        },
        {
            path: '/product/:id',
            name: 'Product',
            props: true,
            component: (resolve) => require(['@/ui/screens/product-overview'], resolve)
        },
        {
            path: '/product/:id/community',
            name: 'Product Community',
            props: true,
            component: (resolve) => require(['@/ui/screens/product-community'], resolve)
        },
        {
            path: '/product/:id/projects',
            name: 'Product Projects',
            props: true,
            component: (resolve) => require(['@/ui/screens/product-projects'], resolve)
        },
        {
            path: '/product/:id/assets',
            name: 'Product Assets',
            props: true,
            component: (resolve) => require(['@/ui/screens/product-assets'], resolve)
        },
        {
            path: '/community',
            name: 'Community',
            component: (resolve) => require(['@/ui/screens/community'], resolve)
        },
        {
            path: '/community/chat',
            name: 'Chat',
            component: (resolve) => require(['@/ui/screens/community-chat'], resolve)
        },
        {
            path: '/assets',
            name: 'Assets',
            props: true,
            component: (resolve) => require(['@/ui/screens/assets'], resolve)
        },
        {
            path: '/asset/:id',
            name: 'Asset',
            props: true,
            component: (resolve) => require(['@/ui/screens/asset-overview'], resolve)
        },
        {
            path: '/republic',
            name: 'Republic',
            component: (resolve) => require(['@/ui/screens/republic'], resolve)
        },
        {
            path: '/republic/citizenship',
            name: 'Republic Citizenship',
            component: (resolve) => require(['@/ui/screens/republic-citizenship'], resolve)
        },
        {
            path: '/republic/district/create',
            name: 'Create District',
            component: (resolve) => require(['@/ui/screens/republic-district'], resolve)
        },
        {
            path: '/projects',
            name: 'Projects',
            component: (resolve) => require(['@/ui/screens/projects'], resolve)
        },
        {
            path: '/project/:id',
            name: 'Project',
            props: true,
            component: (resolve) => require(['@/ui/screens/project-overview'], resolve)
        },
        {
            path: '/project/:id/bounties',
            name: 'Project Bounties',
            props: true,
            component: (resolve) => require(['@/ui/screens/project-bounties'], resolve)
        },
        {
            path: '/project/:id/contributors',
            name: 'Project Contributors',
            props: true,
            component: (resolve) => require(['@/ui/screens/project-contributors'], resolve)
        },
        {
            path: '/project/:id/discussion',
            name: 'Project Discussion',
            props: true,
            component: (resolve) => require(['@/ui/screens/project-discussion'], resolve)
        },
        {
            path: '/project/:id/milestones',
            name: 'Project Milestones',
            props: true,
            component: (resolve) => require(['@/ui/screens/project-milestones'], resolve)
        },
        {
            path: '/project/:id/updates',
            name: 'Project Updates',
            props: true,
            component: (resolve) => require(['@/ui/screens/project-updates'], resolve)
        },
        {
            path: '/project/:projectID/updates/:postID',
            name: 'Project Updates Post',
            props: true,
            component: (resolve) => require(['@/ui/screens/project-updates/post'], resolve)
        },
        {
            path: '/project/:id/community',
            name: 'Project Community',
            props: true,
            component: (resolve) => require(['@/ui/screens/project-community'], resolve)
        },
        {
            path: '/curators',
            name: 'Curators',
            component: (resolve) => require(['@/ui/screens/curators'], resolve)
        },
        {
            path: '/curator/:id',
            name: 'Curator',
            props: true,
            component: (resolve) => require(['@/ui/screens/curator-overview'], resolve)
        },
        {
            path: '/download',
            name: 'Download Page',
            component: (resolve) => require(['@/ui/screens/download'], resolve)
        },
        {
            path: '/realm/:id',
            name: 'Realm',
            component: (resolve) => require(['@/ui/screens/realm'], resolve)
        },
        {
            path: '/unknown',
            name: 'Unknown Layers',
            component: (resolve) => require(['@/ui/screens/unknown'], resolve)
        },
        {
            path: '/search/:tags',
            name: 'Search Page',
            component: (resolve) => require(['@/ui/screens/search'], resolve)
        },
        {
            path: '/collection/:id',
            name: 'Collection Page',
            props: true,
            component: (resolve) => require(['@/ui/screens/collection'], resolve)
        },
        {
            path: '/download/desktop/mac',
            beforeEnter(to, from, next) {
                window.location = `https://github.com/hyperbridge/blockhub-desktop-client/releases/download/v${appVersion}/BlockHub-v${appVersion}.dmg`
            }
        },
        {
            path: '/download/desktop/windows',
            beforeEnter(to, from, next) {
                window.location = `https://github.com/hyperbridge/blockhub-desktop-client/releases/download/v${appVersion}/BlockHub-v${appVersion}-win.zip`
            }
        },
        {
            path: '/download/desktop/windows-32bit',
            beforeEnter(to, from, next) {
                window.location = `https://github.com/hyperbridge/blockhub-desktop-client/releases/download/v${appVersion}/BlockHub-v${appVersion}-win-ia32.zip`
            }
        },
        {
            path: '/download/desktop/linux',
            beforeEnter(to, from, next) {
                window.location = `https://github.com/hyperbridge/blockhub-desktop-client/releases/download/v${appVersion}/BlockHub-v${appVersion}-linux.zip`
            }
        },
        {
            path: '/download/desktop/linux-64bit',
            beforeEnter(to, from, next) {
                window.location = `https://github.com/hyperbridge/blockhub-desktop-client/releases/download/v${appVersion}/BlockHub-v${appVersion}-linux.zip`
            }
        },
        {
            path: '/download/desktop/linux-32bit',
            beforeEnter(to, from, next) {
                window.location = `https://github.com/hyperbridge/blockhub-desktop-client/releases/download/v${appVersion}/BlockHub-v${appVersion}-linux-ia32.zip`
            }
        },
        {
            path: '/download/desktop/linux-64bit-debian',
            beforeEnter(to, from, next) {
                window.location = `https://github.com/hyperbridge/blockhub-desktop-client/releases/download/v${appVersion}/BlockHub-v${appVersion}-linux-ia32.zip`
            }
        },
        {
            path: '/download/desktop/linux-32bit-debian',
            beforeEnter(to, from, next) {
                window.location = `https://github.com/hyperbridge/blockhub-desktop-client/releases/download/v${appVersion}/BlockHub-v${appVersion}-linux-ia32.zip`
            }
        },
        {
            path: "*",
            component: (resolve) => require(['@/ui/screens/not-found'], resolve)
        }
    ]
})

router.afterEach((to, from) => {
    // Complete the animation of the route progress bar.
    $('body').removeClass('screen-loading')
})

export const Auth = {
  loggedIn() {
    return true
  },
  accessGate(permission = false) {
    const privileges = store.getters['network/privileges']
    if (!permission) {
      return true
    }
    return !!privileges && !!privileges.find(p => {
      return p === permission
    })
  }
}


router.beforeEach((to, from, next) => {
    $('body').addClass('screen-loading')

  if (!Auth.loggedIn() && !!to.meta.auth) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  }

  if (!Auth.accessGate(to.meta.permission)) {
    next('/')
    throw new Error("Oops! You don't seem to have access to that page.")
  }

  next()
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
