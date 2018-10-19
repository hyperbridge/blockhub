import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

Vue.use(Router)

const appVersion = '0.6.1'

const router = new Router({
    //mode: 'history',
    scrollBehavior: (to, from, savedPosition) => to.name === 'Search' && from.name === 'Search'
        ? savedPosition
        : ({ y: 0 })
    ,
    linkActiveClass: 'is-active',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: (resolve) => require(['@/ui/screens/home'], resolve)
        },
        {
            path: '/unlock',
            name: 'Unlock',
            component: (resolve) => require(['@/ui/screens/unlock'], resolve)
        },
        {
            path: '/welcome',
            name: 'Welcome',
            component: (resolve) => require(['@/ui/screens/welcome'], resolve)
        },
        {
            path: '/terms',
            name: 'Terms & Conditions',
            component: (resolve) => require(['@/ui/screens/terms'], resolve)
        },
        {
            path: '/privacy',
            name: 'Privacy Policy',
            component: (resolve) => require(['@/ui/screens/privacy'], resolve)
        },
        {
            path: '/streams',
            name: 'Streams',
            component: (resolve) => require(['@/ui/screens/streams'], resolve)
        },
        {
            path: '/stash',
            name: 'Stash',
            component: (resolve) => require(['@/ui/screens/stash'], resolve)
        },
        {
            path: '/sitemap',
            name: 'Sitemap',
            component: (resolve) => require(['@/ui/screens/sitemap'], resolve)
        },
        {
            path: '/go/:code',
            name: 'Go',
            props: true,
            component: (resolve) => require(['@/ui/screens/go'], resolve)
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
            path: '/token',
            name: 'Token',
            component: (resolve) => require(['@/ui/screens/token'], resolve)
        },
        {
            path: '/redeem',
            name: 'Redeem',
            component: (resolve) => require(['@/ui/screens/redeem'], resolve)
        },
        {
            path: '/store',
            name: 'Store',
            component: (resolve) => require(['@/ui/screens/store'], resolve)
        },
        {
            path: '/store/cart',
            name: 'Store Cart',
            component: (resolve) => require(['@/ui/screens/store-cart'], resolve),
            meta: {
                auth: true
            }
        },
        {
            path: '/store/checkout',
            name: 'Store Checkout',
            component: (resolve) => require(['@/ui/screens/store-checkout'], resolve),
            meta: {
                auth: true
            }
        },
        {
            path: '/store/invoices',
            name: 'Store Invoices',
            component: (resolve) => require(['@/ui/screens/store-invoices'], resolve),
            meta: {
                auth: true,
                breadcrumb: [
                    { title: 'Store' },
                    { title: 'Store Invoices' }
                ]
            }
        },
        {
            path: '/store/invoice/:id',
            name: 'Store Invoice',
            props: true,
            component: (resolve) => require(['@/ui/screens/store-invoice'], resolve),
            meta: {
                auth: true,
                breadcrumb: [
                    { title: 'Store' },
                    { title: 'Store Invoices' },
                    { title: 'Store Invoice' }
                ]
            }
        },
        {
            path: '/collections',
            name: 'Collections',
            component: (resolve) => require(['@/ui/screens/collections'], resolve)
        },
        {
            path: '/collection/:id',
            name: 'Collection Page',
            props: true,
            component: (resolve) => require(['@/ui/screens/collection'], resolve)
        },
        {
            path: '/account',
            name: 'Account',
            component: (resolve) => require(['@/ui/screens/account'], resolve),
            meta: {
                auth: true,
                permission: 'signed_in'
            }
        },
        {
            path: '/account/signup',
            name: 'Sign Up',
            component: (resolve) => require(['@/ui/screens/account-signup'], resolve),
            meta: {
                permission: 'desktop_mode'
            }
        },
        {
            path: '/account/signin',
            name: 'Sign In',
            component: (resolve) => require(['@/ui/screens/account-signin'], resolve),
            meta: {
                permission: 'desktop_mode'
            }
        },
        {
            path: '/account/signout',
            name: 'Sign Out',
            component: (resolve) => require(['@/ui/screens/account-signout'], resolve),
            meta: {
                auth: true,
                permission: 'signed_in'
            }
        },
        {
            path: '/account/verification',
            name: 'Account Verification',
            component: (resolve) => require(['@/ui/screens/account-verification'], resolve)
        },
        {
            path: '/account/verification/callback',
            name: 'Account Verification',
            component: (resolve) => require(['@/ui/screens/account-verification-callback'], resolve)
        },
        {
            path: '/account/wallets',
            name: 'Wallets',
            component: (resolve) => require(['@/ui/screens/account-wallets'], resolve),
            meta: {
                auth: true,
                permission: 'signed_in',
                breadcrumb: [
                    { title: 'Home' },
                    { title: 'Account' },
                    { title: 'Wallets' }
                ]
            }
        },
        {
            path: '/account/identities',
            name: 'Profiles',
            component: (resolve) => require(['@/ui/screens/account-identities'], resolve),
            meta: {
                permission: 'signed_in',
                breadcrumb: [
                    { title: 'Home' },
                    { title: 'Account' },
                    { title: 'Profiles' }
                ]
            }
        },
        {
            path: '/kyc',
            name: 'KYC',
            component: (resolve) => require(['@/ui/screens/kyc'], resolve)
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
            name: 'Profile',
            props: true,
            component: (resolve) => require(['@/ui/screens/identity-overview'], resolve)
        },
        {
            path: '/identity/:id/contacts',
            name: 'Profile Contacts',
            props: true,
            component: (resolve) => require(['@/ui/screens/identity-contacts'], resolve)
        },
        {
            path: '/identity/:id/projects',
            name: 'Profile Projects',
            props: true,
            component: (resolve) => require(['@/ui/screens/identity-projects'], resolve)
        },
        {
            path: '/identity/:id/licenses',
            name: 'Profile licenses',
            props: true,
            component: (resolve) => require(['@/ui/screens/identity-licenses'], resolve)
        },
        {
            path: '/identity/:id/assets',
            name: 'Profile Assets',
            props: true,
            component: (resolve) => require(['@/ui/screens/identity-assets'], resolve)
        },
        {
            path: '/identity/:id/collections',
            name: 'Profile Collections',
            props: true,
            component: (resolve) => require(['@/ui/screens/identity-collection'], resolve)
        },
        {
            path: '/settings',
            name: 'Settings',
            component: (resolve) => require(['@/ui/screens/settings'], resolve),
            meta: {
                auth: true
            }
        },
        {
            path: '/settings/profile',
            name: 'Profile',
            component: (resolve) => require(['@/ui/screens/settings-profile'], resolve),
            meta: {
                auth: true
            }
        },
        {
            path: '/settings/protocol',
            name: 'Protocol Settings',
            component: (resolve) => require(['@/ui/screens/settings-protocol'], resolve),
            meta: {
                auth: true
            }
        },
        {
            path: '/settings/darklaunch',
            name: 'Darklaunch Settings',
            component: (resolve) => require(['@/ui/screens/settings-darklaunch'], resolve),
            meta: {
                auth: true
            }
        },
        {
            path: '/settings/activity',
            name: 'Activity Settings',
            component: (resolve) => require(['@/ui/screens/settings-activity'], resolve),
            meta: {
                auth: true
            }
        },
        {
            path: '/settings/debug',
            name: 'Debug Settings',
            component: (resolve) => require(['@/ui/screens/settings-debug'], resolve),
            meta: {
                auth: true
            }
        },
        {
            path: '/settings/game-scanner',
            name: 'Game Scanner',
            component: (resolve) => require(['@/ui/screens/settings-game-scanner'], resolve),
            meta: {
                auth: true
            }
        },
        {
            path: '/monitor',
            name: 'Monitor',
            component: (resolve) => require(['@/ui/screens/monitor'], resolve)
        },
        {
            path: '/developer',
            name: 'Developer Area',
            component: (resolve) => require(['@/ui/screens/developer'], resolve),
            meta: {
                auth: true
            }
        },
        {
            path: '/developer/new-product',
            name: 'New Product',
            component: (resolve) => require(['@/ui/screens/product'], resolve),
            props: {
                id: 'new'
            }
        },
        {
            path: '/product/:id',
            name: 'Product',
            props: true,
            component: (resolve) => require(['@/ui/screens/product'], resolve),
            meta: {
                section: 'overview'
            }
        },
        {
            path: '/product/:id/community',
            name: 'Product Community',
            props: true,
            component: (resolve) => require(['@/ui/screens/product'], resolve),
            meta: {
                section: 'community'
            }
        },
        {
            path: '/product/:id/projects',
            name: 'Product Projects',
            props: true,
            component: (resolve) => require(['@/ui/screens/product'], resolve),
            meta: {
                section: 'projects'
            }
        },
        {
            path: '/product/:id/assets',
            name: 'Product Assets',
            props: true,
            component: (resolve) => require(['@/ui/screens/product'], resolve),
            meta: {
                section: 'assets'
            }
        },
        {
            path: '/community',
            name: 'Community',
            component: (resolve) => require(['@/ui/screens/community'], resolve),
            meta: {
                breadcrumb: [
                    { title: 'Home' },
                    { title: 'Community' }
                ]
            }
        },
        {
            path: '/community/forums',
            name: 'Community Forums',
            component: (resolve) => require(['@/ui/screens/community-forums'], resolve)
        },
        {
            path: '/community/forum/:id',
            name: 'Community Forum',
            props: true,
            component: (resolve) => require(['@/ui/screens/community-forum'], resolve),
            meta: {
                breadcrumb: [
                    { title: 'Home' },
                    { title: 'Community' },
                    { title: 'Community Forum' }
                ]
            }
        },
        {
            path: '/community/discussion/:id',
            name: 'Community Discussion',
            props: true,
            component: (resolve) => require(['@/ui/screens/community-discussion'], resolve)
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
            name: 'Crowdfunds',
            component: (resolve) => require(['@/ui/screens/projects'], resolve),
            breadcrumb: [
                { title: 'Home' },
                { title: 'Crowdfunds' }
            ]
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
            path: '/battlepass/:id',
            name: 'Battle Pass',
            props: true,
            component: (resolve) => require(['@/ui/screens/battle-pass'], resolve)
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
            name: 'Download',
            component: (resolve) => require(['@/ui/screens/download'], resolve)
        },
        {
            path: '/realms',
            name: 'Realms',
            component: (resolve) => require(['@/ui/screens/realms'], resolve)
        },
        {
            path: '/realm/:id',
            name: 'Realm',
            props: true,
            component: (resolve) => require(['@/ui/screens/realm'], resolve)
        },
        {
            path: '/unknown',
            name: 'Unknown Layers',
            component: (resolve) => require(['@/ui/screens/unknown'], resolve)
        },
        {
            path: '/search',
            name: 'Search',
            component: (resolve) => require(['@/ui/screens/search'], resolve)
        },
        {
            path: '/discussion',
            name: 'Discussion',
            props: true,
            component: (resolve) => require(['@/ui/screens/discussion'], resolve)
        },
        {
            path: '/meta',
            name: 'Meta',
            component: (resolve) => require(['@/ui/screens/meta'], resolve)
        },
        {
            path: '/updates',
            name: 'Updates',
            component: (resolve) => require(['@/ui/screens/updates'], resolve)
        },
        {
            path: '/updates/:id',
            name: 'Update',
            props: true,
            component: (resolve) => require(['@/ui/screens/updates'], resolve)
        },
        {
            path: '/chest',
            name: 'Chest',
            props: true,
            component: (resolve) => require(['@/ui/screens/chest'], resolve)
        },
        {
            path: '/business',
            name: 'Business',
            props: true,
            component: (resolve) => require(['@/ui/screens/business'], resolve)
        },
        {
            path: '/marketplace',
            name: 'Marketplace',
            component: (resolve) => require(['@/ui/screens/marketplace'], resolve),
            children: [
                {
                    path: '',
                    name: 'Marketplace Home',
                    component: (resolve) => require(['@/ui/screens/marketplace/home'], resolve),
                },
                {
                    path: 'snipers',
                    name: 'Marketplace Snipers',
                    component: (resolve) => require(['@/ui/screens/marketplace/snipers'], resolve),
                },
                {
                    path: 'search',
                    name: 'Marketplace Search',
                    component: (resolve) => require(['@/ui/screens/marketplace/search'], resolve),
                }
            ]
        },
        {
            path: '/marketplace/inventory',
            name: 'Marketplace Inventory',
            component: (resolve) => require(['@/ui/screens/marketplace-inventory'], resolve),
            children: [
                {
                    path: '',
                    component: (resolve) => require(['@/ui/screens/marketplace-inventory/main'], resolve),
                },
                {
                    path: 'compare',
                    name: 'Compare Assets',
                    component: (resolve) => require(['@/ui/screens/marketplace-inventory/compare'], resolve),
                }
            ]
        },
        {
            path: '/marketplace/trade',
            name: 'Marketplace Trade',
            component: (resolve) => require(['@/ui/screens/marketplace-trade'], resolve)
        },
        {
            path: '/marketplace/trade/:tradeId',
            name: 'Marketplace Trade Transaction',
            component: (resolve) => require(['@/ui/screens/marketplace-trade-transaction'], resolve)
        },
        {
            path: '/download/desktop/mac',
            beforeEnter(to, from, next) {
                window.location = `https://github.com/hyperbridge/blockhub-desktop-client/releases/download/v${appVersion}/BlockHub-${appVersion}.dmg`
            }
        },
        {
            path: '/download/desktop/windows',
            beforeEnter(to, from, next) {
                window.location = `https://github.com/hyperbridge/blockhub-desktop-client/releases/download/v${appVersion}/BlockHub-Setup-${appVersion}.exe`
            }
        },
        {
            path: '/download/desktop/windows-32bit',
            beforeEnter(to, from, next) {
                window.location = `https://github.com/hyperbridge/blockhub-desktop-client/releases/download/v${appVersion}/BlockHub-Setup-${appVersion}.exe`
            }
        },
        {
            path: '/download/desktop/linux',
            beforeEnter(to, from, next) {
                window.location = `https://github.com/hyperbridge/blockhub-desktop-client/releases/download/v${appVersion}/blockhub-desktop-client-${appVersion}-x86_64.AppImage`
            }
        },
        {
            path: '/download/desktop/linux-64bit',
            beforeEnter(to, from, next) {
                window.location = `https://github.com/hyperbridge/blockhub-desktop-client/releases/download/v${appVersion}/blockhub-desktop-client-${appVersion}.tar.gz`
            }
        },
        {
            path: '/download/desktop/linux-32bit',
            beforeEnter(to, from, next) {
                window.location = `https://github.com/hyperbridge/blockhub-desktop-client/releases/download/v${appVersion}/blockhub-desktop-client-${appVersion}-ia32.tar.gz`
            }
        },
        {
            path: '/download/desktop/linux-64bit-debian',
            beforeEnter(to, from, next) {
                window.location = `https://github.com/hyperbridge/blockhub-desktop-client/releases/download/v${appVersion}/blockhub-desktop-client_${appVersion}_amd64.deb`
            }
        },
        {
            path: '/download/desktop/linux-32bit-debian',
            beforeEnter(to, from, next) {
                window.location = `https://github.com/hyperbridge/blockhub-desktop-client/releases/download/v${appVersion}/blockhub-desktop-client_${appVersion}_i386.deb`
            }
        },
        {
            path: "*",
            name: 'Not Found',
            component: (resolve) => require(['@/ui/screens/not-found'], resolve)
        }
    ]
});

router.afterEach((to, from) => {
    // Complete the animation of the route progress bar.
    $('body').removeClass('screen-loading')
})

export const Auth = {
  loggedIn() {
    return store.state.application.signed_in
  },
  accessGate(permission = false) {
    const privileges = store.getters['application/privileges']
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
      path: '/account/signin',
      query: { redirect: to.fullPath }
    })
    return
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
