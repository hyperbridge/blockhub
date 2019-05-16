
const appVersion = '0.8.0'


export default [
    {
        path: '/',
        name: 'Home',
        component: (resolve) => require(['@/pages/home'], resolve)
    },
    {
        path: '/company',
        name: 'About Company',
        component: (resolve) => require(['@/pages/about'], resolve)
    },
    {
        path: '/unlock',
        name: 'Unlock',
        component: (resolve) => require(['@/pages/unlock'], resolve),
        meta: {
            auth: false,
            breadcrumb: false
        }
    },
    {
        path: '/welcome',
        name: 'Welcome',
        component: (resolve) => require(['@/pages/welcome'], resolve),
        meta: {
            auth: false,
            breadcrumb: false
        }
    },
    {
        path: '/terms',
        name: 'Terms & Conditions',
        component: (resolve) => require(['@/pages/terms'], resolve)
    },
    {
        path: '/privacy',
        name: 'Privacy Policy',
        component: (resolve) => require(['@/pages/privacy'], resolve)
    },
    {
        path: '/streams',
        name: 'Streams',
        component: (resolve) => require(['@/pages/streams'], resolve)
    },,
    {
        path: '/stream/:id',
        name: 'Stream',
        props: true,
        component: (resolve) => require(['@/pages/stream-single'], resolve)
    },
    {
        path: '/stash',
        name: 'Stash',
        component: (resolve) => require(['@/pages/stash'], resolve)
    },
    {
        path: '/sitemap',
        name: 'Sitemap',
        component: (resolve) => require(['@/pages/sitemap'], resolve)
    },
    {
        path: '/go/:code',
        name: 'Go',
        props: true,
        component: (resolve) => require(['@/pages/go'], resolve),
        meta: {
            breadcrumb: false
        }
    },
    {
        path: '/help/:id/article/:slug/:info',
        name: 'Help article',
        props: true,
        component: (resolve) => require(['@/pages/help-article'], resolve)
    },
    {
        path: '/help/:id/article/:slug',
        name: 'Help article',
        props: true,
        component: (resolve) => require(['@/pages/help-article'], resolve)
    },
    {
        path: '/help/:id',
        name: 'Topic',
        props: true,
        component: (resolve) => require(['@/pages/help-topic'], resolve)
    },
    {
        path: '/help',
        name: 'Help',
        component: (resolve) => require(['@/pages/help'], resolve),
        meta: {
            breadcrumb: false
        }
    },
    {
        path: '/support',
        name: 'Support',
        component: (resolve) => require(['@/pages/support'], resolve)
    },
    {
        path: '/news',
        name: 'News',
        component: (resolve) => require(['@/pages/news'], resolve)
    },
    {
        path: '/denied',
        name: 'Denied',
        component: (resolve) => require(['@/pages/denied'], resolve),
        meta: {
            breadcrumb: false
        }
    },
    {
        path: '/token',
        name: 'Token',
        component: (resolve) => require(['@/pages/token'], resolve),
        meta: {
            breadcrumb: false
        }
    },
    {
        path: '/plans',
        name: 'Plans',
        component: (resolve) => require(['@/pages/plans'], resolve),
        meta: {
            breadcrumb: false
        }
    },
    {
        path: '/redeem',
        name: 'Redeem',
        component: (resolve) => require(['@/pages/redeem'], resolve)
    },
    {
        path: '/store',
        name: 'Store',
        component: (resolve) => require(['@/pages/store'], resolve)
    },
    {
        path: '/store/cart',
        name: 'Store Cart',
        component: (resolve) => require(['@/pages/store-cart'], resolve),
        meta: {
            auth: true
        }
    },
    {
        path: '/store/checkout',
        name: 'Store Checkout',
        component: (resolve) => require(['@/pages/store-checkout'], resolve),
        meta: {
            auth: true
        }
    },
    {
        path: '/store/invoices',
        name: 'Store Invoices',
        component: (resolve) => require(['@/pages/store-invoices'], resolve),
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
        component: (resolve) => require(['@/pages/store-invoice'], resolve),
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
        component: (resolve) => require(['@/pages/collections'], resolve)
    },
    {
        path: '/collection/:id',
        name: 'Collection',
        props: true,
        component: (resolve) => require(['@/pages/collection'], resolve)
    },
    {
        path: '/account',
        name: 'Account',
        component: (resolve) => require(['@/pages/account'], resolve),
        meta: {
            auth: true,
            permission: 'signedIn'
        }
    },
    {
        path: '/account/signup',
        name: 'Sign Up',
        component: (resolve) => require(['@/pages/account-signup'], resolve),
        meta: {
            auth: false,
            breadcrumb: false
        }
    },
    {
        path: '/account/signin',
        name: 'Sign In',
        component: (resolve) => require(['@/pages/account-signin'], resolve),
        meta: {
            auth: false,
            breadcrumb: false
        }
    },
    {
        path: '/account/signout',
        name: 'Sign Out',
        component: (resolve) => require(['@/pages/account-signout'], resolve),
        meta: {
            auth: true,
            permission: 'signedIn'
        }
    },
    {
        path: '/account/backup',
        name: 'Account Backup',
        component: (resolve) => require(['@/pages/account-backup'], resolve),
        meta: {
            breadcrumb: false
        }
    },
    {
        path: '/account/verification',
        name: 'Account Verification',
        component: (resolve) => require(['@/pages/account-verification'], resolve),
        meta: {
            breadcrumb: false
        }
    },
    {
        path: '/account/verification/callback',
        name: 'Account Verification',
        component: (resolve) => require(['@/pages/account-verification-callback'], resolve),
        meta: {
            breadcrumb: false
        }
    },
    {
        path: '/account/wallets',
        name: 'Wallets',
        component: (resolve) => require(['@/pages/account-wallets'], resolve),
        meta: {
            auth: true,
            permission: 'signedIn',
            breadcrumb: [
                { title: 'Home' },
                { title: 'Account' },
                { title: 'Wallets' }
            ]
        }
    },
    {
        path: '/account/profiles',
        name: 'Profiles',
        component: (resolve) => require(['@/pages/account-profiles'], resolve),
        meta: {
            permission: 'signedIn',
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
        component: (resolve) => require(['@/pages/kyc'], resolve),
        meta: {
            breadcrumb: false
        }
    },
    {
        path: '/wallet/:id',
        name: 'Wallet',
        props: true,
        component: (resolve) => require(['@/pages/wallet-overview'], resolve)
    },
    {
        path: '/wallet/:id/transactions',
        name: 'Transactions',
        props: true,
        component: (resolve) => require(['@/pages/wallet-transactions'], resolve)
    },
    {
        path: '/transaction/:id',
        name: 'Transaction',
        props: true,
        component: (resolve) => require(['@/pages/transaction-overview'], resolve)
    },
    {
        path: '/profile/:id',
        name: 'Profile',
        props: true,
        component: (resolve) => require(['@/pages/profile'], resolve),
        meta: {
            breadcrumb: false
        }
    },
    {
        path: '/profile/:id/contacts',
        name: 'Contacts',
        props: true,
        component: (resolve) => require(['@/pages/profile-contacts'], resolve)
    },
    {
        path: '/profile/:id/projects',
        name: 'Crowdfunds',
        props: true,
        component: (resolve) => require(['@/pages/profile-projects'], resolve)
    },
    {
        path: '/profile/:id/licenses',
        name: 'Licenses',
        props: true,
        component: (resolve) => require(['@/pages/profile-licenses'], resolve)
    },
    {
        path: '/profile/:id/assets',
        name: 'Assets',
        props: true,
        component: (resolve) => require(['@/pages/profile-assets'], resolve)
    },
    {
        path: '/profile/:id/collections',
        name: 'Collections',
        props: true,
        component: (resolve) => require(['@/pages/profile-collection'], resolve)
    },
    {
        path: '/settings',
        name: 'Settings',
        component: (resolve) => require(['@/pages/settings'], resolve),
        meta: {
            auth: true
        }
    },
    {
        path: '/settings/profile',
        name: 'Profile',
        component: (resolve) => require(['@/pages/settings-profile'], resolve),
        meta: {
            auth: true
        }
    },
    {
        path: '/settings/protocol',
        name: 'Protocol Settings',
        component: (resolve) => require(['@/pages/settings-protocol'], resolve),
        meta: {
            auth: true
        }
    },
    {
        path: '/settings/darklaunch',
        name: 'Darklaunch Settings',
        component: (resolve) => require(['@/pages/settings-darklaunch'], resolve),
        meta: {
            auth: true
        }
    },
    {
        path: '/settings/activity',
        name: 'Activity Settings',
        component: (resolve) => require(['@/pages/settings-activity'], resolve),
        meta: {
            auth: true
        }
    },
    {
        path: '/settings/debug',
        name: 'Debug Settings',
        component: (resolve) => require(['@/pages/settings-debug'], resolve),
        meta: {
            auth: true
        }
    },
    {
        path: '/settings/game-scanner',
        name: 'Game Scanner',
        component: (resolve) => require(['@/pages/settings-game-scanner'], resolve),
        meta: {
            auth: true
        }
    },
    {
        path: '/settings/extensions',
        name: 'Extensions',
        component: (resolve) => require(['@/pages/settings-extensions'], resolve),
        meta: {
            auth: true
        }
    },
    {
        path: '/monitor',
        name: 'Monitor',
        component: (resolve) => require(['@/pages/monitor'], resolve)
    },
    {
        path: '/verification-assistant',
        name: 'Verification Assistant',
        component: (resolve) => require(['@/pages/verification-assistant'], resolve)
    },
    {
        path: '/developer',
        name: 'Developer Program',
        component: (resolve) => require(['@/pages/developer'], resolve),
        meta: {
        }
    },
    {
        path: '/developer/apply',
        name: 'Developer Application',
        component: (resolve) => require(['@/pages/developer-application'], resolve),
        meta: {
            permission: 'signedIn'
        }
    },
    {
        path: '/developer/new-product',
        name: 'New Product',
        component: (resolve) => require(['@/pages/product'], resolve),
        props: {
            id: 'new'
        },
        meta: {
            section: 'overview',
            permission: 'developerMode'
        }
    },
    {
        path: '/product/new',
        name: 'Product',
        props: true,
        component: (resolve) => require(['@/pages/product'], resolve),
        props: {
            id: 'new'
        },
        meta: {
            section: 'overview',
            auth: true,
            permission: 'signedIn'
        }
    },
    {
        path: '/product/:id',
        name: 'Product',
        props: true,
        component: (resolve) => require(['@/pages/product'], resolve),
        meta: {
            section: 'overview'
        }
    },
    {
        path: '/product/:id/community',
        name: 'Product Community',
        props: true,
        component: (resolve) => require(['@/pages/product'], resolve),
        meta: {
            section: 'community'
        }
    },
    {
        path: '/product/:id/projects',
        name: 'Product Crowdfunds',
        props: true,
        component: (resolve) => require(['@/pages/product'], resolve),
        meta: {
            section: 'projects'
        }
    },
    {
        path: '/product/:id/assets',
        name: 'Product Assets',
        props: true,
        component: (resolve) => require(['@/pages/product'], resolve),
        meta: {
            section: 'assets'
        }
    },
    {
        path: '/community',
        name: 'Community',
        component: (resolve) => require(['@/pages/community'], resolve),
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
        component: (resolve) => require(['@/pages/community-forums'], resolve)
    },
    {
        path: '/community/forum/:id',
        name: 'Community Forum',
        props: true,
        component: (resolve) => require(['@/pages/community-forum'], resolve),
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
        component: (resolve) => require(['@/pages/community-discussion'], resolve)
    },
    {
        path: '/chat',
        name: 'Chat',
        component: (resolve) => require(['@/pages/chat'], resolve)
    },
    {
        path: '/assets',
        name: 'Assets',
        props: true,
        component: (resolve) => require(['@/pages/assets'], resolve)
    },
    {
        path: '/asset/:id',
        name: 'Asset',
        props: true,
        component: (resolve) => require(['@/pages/asset-overview'], resolve)
    },
    {
        path: '/browser',
        name: 'Browser',
        component: (resolve) => require(['@/pages/browser'], resolve)
    },
    {
        path: '/republic',
        name: 'Republic',
        component: (resolve) => require(['@/pages/republic'], resolve)
    },
    {
        path: '/republic/citizenship',
        name: 'Republic Citizenship',
        component: (resolve) => require(['@/pages/republic-citizenship'], resolve)
    },
    {
        path: '/republic/district/create',
        name: 'Create District',
        component: (resolve) => require(['@/pages/republic-district'], resolve)
    },
    {
        path: '/ideas',
        name: 'Ideas',
        component: (resolve) => require(['@/pages/ideas'], resolve),
        breadcrumb: [
            { title: 'Home' },
            { title: 'Ideas' }
        ]
    },
    {
        path: '/idea/new',
        name: 'Idea',
        props: true,
        component: (resolve) => require(['@/pages/idea'], resolve),
        props: {
            id: 'new'
        },
        meta: {
            section: 'overview',
            auth: true,
            permission: 'signedIn'
        }
    },
    {
        path: '/idea/:id',
        name: 'Idea',
        props: true,
        component: (resolve) => require(['@/pages/idea'], resolve),
        meta: {
            section: 'overview'
        }
    },
    {
        path: '/games',
        name: 'Games',
        component: (resolve) => require(['@/pages/games'], resolve),
        breadcrumb: [
            { title: 'Home' },
            { title: 'Games' }
        ]
    },
    {
        path: '/projects',
        name: 'Crowdfunds',
        component: (resolve) => require(['@/pages/projects'], resolve),
        meta: {
        },
        breadcrumb: [
            { title: 'Home' },
            { title: 'Crowdfunds' }
        ]
    },
    {
        path: '/project/new',
        name: 'Crowdfund',
        props: true,
        component: (resolve) => require(['@/pages/project'], resolve),
        props: {
            id: 'new'
        },
        meta: {
            section: 'overview',
            auth: true,
            permission: 'signedIn'
        }
    },
    {
        path: '/project/:id',
        name: 'Crowdfund',
        props: true,
        component: (resolve) => require(['@/pages/project'], resolve),
        meta: {
            section: 'overview'
        }
    },
    {
        path: '/project/:id/bounties',
        name: 'Crowdfund Bounties',
        props: true,
        component: (resolve) => require(['@/pages/project'], resolve),
        meta: {
            section: 'bounties'
        }
    },
    {
        path: '/project/:id/contributors',
        name: 'Crowdfund Contributors',
        props: true,
        component: (resolve) => require(['@/pages/project-contributors'], resolve)
    },
    {
        path: '/project/:id/discussion',
        name: 'Crowdfund Discussion',
        props: true,
        component: (resolve) => require(['@/pages/project-discussion'], resolve)
    },
    {
        path: '/project/:id/milestones',
        name: 'Crowdfund Milestones',
        props: true,
        component: (resolve) => require(['@/pages/project'], resolve),
        meta: {
            section: 'milestones'
        }
    },
    {
        path: '/project/:id/updates',
        name: 'Crowdfund Updates',
        props: true,
        component: (resolve) => require(['@/pages/project'], resolve),
        meta: {
            section: 'updates'
        }
    },
    {
        path: '/project/:projectID/updates/:postID',
        name: 'Crowdfund Updates Post',
        props: true,
        component: (resolve) => require(['@/pages/project-updates/post'], resolve)
    },
    {
        path: '/project/:id/community',
        name: 'Crowdfund Community',
        props: true,
        component: (resolve) => require(['@/pages/project'], resolve),
        meta: {
            section: 'community'
        }
    },
    {
        path: '/battlepass/:id',
        name: 'Battle Pass',
        props: true,
        component: (resolve) => require(['@/pages/battle-pass'], resolve)
    },
    {
        path: '/curators',
        name: 'Curators',
        component: (resolve) => require(['@/pages/curators'], resolve)
    },
    {
        path: '/curator/application',
        name: 'Curator Application',
        props: true,
        component: (resolve) => require(['@/pages/curator-application'], resolve),
        meta: {
            auth: true,
            permission: 'signedIn'
        }
    },
    {
        path: '/curator/:id',
        name: 'Curator',
        props: true,
        component: (resolve) => require(['@/pages/curator-overview'], resolve)
    },
    {
        path: '/download',
        name: 'Download',
        component: (resolve) => require(['@/pages/download'], resolve),
        meta: {
            breadcrumb: false
        }
    },
    {
        path: '/realms',
        name: 'Realms',
        component: (resolve) => require(['@/pages/realms'], resolve)
    },
    {
        path: '/footer',
        name: 'Footer',
        component: (resolve) => require(['@/pages/footer'], resolve)
    },
    {
        path: '/realm/:id',
        name: 'Realm',
        props: true,
        component: (resolve) => require(['@/pages/realm'], resolve),
        meta: {
            breadcrumb: false
        }
    },
    {
        path: '/unknown',
        name: 'Unknown Layers',
        component: (resolve) => require(['@/pages/unknown'], resolve)
    },
    {
        path: '/search',
        name: 'Search',
        component: (resolve) => require(['@/pages/search'], resolve)
    },
    {
        path: '/discussion',
        name: 'Discussion',
        props: true,
        component: (resolve) => require(['@/pages/discussion'], resolve)
    },
    {
        path: '/meta',
        name: 'Meta',
        component: (resolve) => require(['@/pages/meta'], resolve)
    },
    {
        path: '/meta/presets',
        name: 'Presets',
        component: (resolve) => require(['@/pages/meta-presets'], resolve)
    },
    {
        path: '/updates',
        name: 'Updates',
        component: (resolve) => require(['@/pages/updates'], resolve)
    },
    {
        path: '/updates/:id',
        name: 'Update',
        props: true,
        component: (resolve) => require(['@/pages/updates'], resolve)
    },
    {
        path: '/chest',
        name: 'Chest',
        component: (resolve) => require(['@/pages/chest'], resolve)
    },
    {
        path: '/launcher',
        name: 'Launcher',
        component: (resolve) => require(['@/pages/launcher'], resolve)
    },,
    {
        path: '/quick-import',
        name: 'Quick import',
        component: (resolve) => require(['@/pages/quick-import'], resolve)
    },
    {
        path: '/admin',
        name: 'Admin',
        component: (resolve) => require(['@/pages/business'], resolve),
        meta: {
            area: 'business',
        },
        children: [
            {
                path: '',
                name: 'Admin',
                component: (resolve) => require(['@/pages/admin-home'], resolve),
                meta: {
                    title: 'Admin',
                    breadcrumb: [
                        { path: '/admin', title: 'Dashboard' },
                    ]
                }
            }
        ]
    },
    {
        path: '/business/realm/:id',
        name: 'Realm',
        props: true,
        component: (resolve) => require(['@/pages/business-realm'], resolve),
        meta: {
            title: 'Realm',
            permission: 'signedIn',
            breadcrumb: [
                { to: '/business', title: 'Dashboard' },
                { to: '/business/realms', title: 'Realms' },
                { title: 'Realm' }
            ]
        }
    },
    {
        path: '/business/product/:id',
        name: 'Product',
        props: true,
        component: (resolve) => require(['@/pages/business-product'], resolve),
        meta: {
            title: 'Product',
            permission: 'signedIn',
            breadcrumb: [
                { to: '/business', title: 'Dashboard' },
                { to: '/business/products', title: 'Products' },
                { title: 'Product' }
            ]
        }
    },
    {
        path: '/business/project/:id',
        name: 'Crowdfund',
        props: true,
        component: (resolve) => require(['@/pages/business-project'], resolve),
        meta: {
            title: 'Crowdfund',
            permission: 'signedIn',
            breadcrumb: [
                { to: '/business', title: 'Dashboard' },
                { to: '/business/projects', title: 'Crowdfunds' },
                { title: 'Crowdfund' }
            ]
        }
    },
    {
        path: '/business/asset/:id',
        name: 'Asset',
        props: true,
        component: (resolve) => require(['@/pages/business-asset'], resolve),
        meta: {
            title: 'Asset',
            permission: 'signedIn',
            breadcrumb: [
                { to: '/business', title: 'Dashboard' },
                { to: '/business/assets', title: 'Assets' },
                { title: 'Asset' }
            ]
        }
    },
    {
        path: '/business/idea/:id',
        name: 'Idea',
        props: true,
        component: (resolve) => require(['@/pages/business-idea'], resolve),
        meta: {
            title: 'Idea',
            permission: 'signedIn',
            breadcrumb: [
                { to: '/business', title: 'Dashboard' },
                { to: '/business/ideas', title: 'Ideas' },
                { title: 'Idea' }
            ]
        }
    },
    {
        path: '/business/products',
        name: 'Products',
        component: (resolve) => require(['@/pages/business-products'], resolve),
        meta: {
            title: 'Products',
            permission: 'signedIn',
            breadcrumb: [
                { to: '/business', title: 'Dashboard' },
                { title: 'Products' }
            ]
        }
    },
    {
        path: '/business/projects',
        name: 'Crowdfunds',
        component: (resolve) => require(['@/pages/business-projects'], resolve),
        meta: {
            title: 'Crowdfunds',
            permission: 'signedIn',
            breadcrumb: [
                { to: '/business', title: 'Dashboard' },
                { title: 'Crowdfunds' }
            ]
        }
    },
    {
        path: '/business',
        name: 'Business',
        component: (resolve) => require(['@/pages/business'], resolve),
        meta: {
            area: 'business',
            permission: 'signedIn',
        },
        children: [
            {
                path: '',
                name: 'Business',
                component: (resolve) => require(['@/pages/business-home'], resolve),
                meta: {
                    title: 'Business',
                    permission: 'signedIn',
                    breadcrumb: [
                        { to: '/business', title: 'Dashboard' },
                    ]
                }
            },
            {
                path: 'release-history/:id',
                name: 'Release History',
                props: true,
                component: (resolve) => require(['@/pages/business-release-history'], resolve),
                meta: {
                    title: 'Release History',
                    permission: 'signedIn',
                    breadcrumb: [
                        { to: '/business', title: 'Dashboard' },
                        { title: 'Release History' }
                    ]
                }
            },
            {
                path: 'new-release',
                name: 'Add New Release',
                props: true,
                component: (resolve) => require(['@/pages/business-new-release'], resolve),
                meta: {
                    title: 'Add New Release',
                    permission: 'signedIn',
                    breadcrumb: [
                        { to: '/business', title: 'Dashboard' },
                        { title: 'Add New Release' }
                    ]
                }
            },
            {
                path: 'release-page/:id',
                name: 'Release page',
                props: true,
                component: (resolve) => require(['@/pages/business-release-page'], resolve),
                meta: {
                    title: 'Release Page',
                    permission: 'signedIn',
                    breadcrumb: [
                        { to: '/release-page', title: 'Dashboard' },
                        { title: 'Release page' }
                    ]
                }
            },
        ]
    },
    {
        path: '/marketplace',
        component: (resolve) => require(['@/pages/marketplace'], resolve),
        children: [
            {
                path: '',
                name: 'Marketplace',
                component: (resolve) => require(['@/pages/marketplace/home'], resolve),
            },
            {
                path: 'trade',
                component: (resolve) => require(['@/pages/marketplace/trade'], resolve),
                children: [
                    {
                        path: '',
                        name: 'Marketplace Trade Manager',
                        component: (resolve) => require(['@/pages/marketplace/trade/home'], resolve),
                    },
                    {
                        path: 'explorer',
                        name: 'Marketplace Trade Explorer',
                        component: (resolve) => require(['@/pages/marketplace/trade/explorer'], resolve)
                    },
                    {
                        path: 'history',
                        name: 'Marketplace Trade History',
                        component: (resolve) => require(['@/pages/marketplace/trade/history'], resolve),
                    },
                    {
                        path: 'settings',
                        name: 'Marketplace Trade Settings',
                        component: (resolve) => require(['@/pages/marketplace/trade/settings'], resolve),
                    },
                    {
                        path: ':id',
                        name: 'Marketplace Trade',
                        component: (resolve) => require(['@/pages/marketplace/trade/_id'], resolve),
                        props: true,
                        children: [
                            {
                                path: '',
                                name: 'Marketplace Trade Offer',
                                component: (resolve) => require(['@/pages/marketplace/trade/_id/offer'], resolve)
                            },
                            {
                                path: 'chat',
                                name: 'Marketplace Trade Chat',
                                component: (resolve) => require(['@/pages/marketplace/trade/_id/chat'], resolve)
                            }
                        ]
                    },
                ]
            },
            {
                path: 'assets',
                name: 'Marketplace Assets',
                component: (resolve) => require(['@/pages/marketplace/offers'], resolve),
                children: [
                    // {
                    //     path: ':id',
                    //     name: 'Matketplace Asset Offers',
                    //     component: (resolve) => require(['@/pages/marketplace/offers/_id'], resolve)
                    // }
                ]
            },
            {
                path: 'asset/:assetId',
                name: 'Marketplace Asset',
                component: (resolve) => require(['@/pages/marketplace/offers/_id'], resolve),
                props: true,
                children: [
                    {
                        path: '',
                        name: 'Marketplace Asset Offers',
                        component: (resolve) => require(['@/pages/marketplace/offers/_id/offers'], resolve),
                    },
                    {
                        path: 'offer/:offerId',
                        name: 'Marketplace Asset Offer',
                        component: (resolve) => require(['@/pages/marketplace/offers/_id/_id'], resolve),
                        props: true
                    }
                ]
            },
            {
                path: 'snipers',
                name: 'Marketplace Prospectors',
                component: (resolve) => require(['@/pages/marketplace/snipers'], resolve),
            },
            {
                path: 'search',
                name: 'Marketplace Search',
                component: (resolve) => require(['@/pages/marketplace/search'], resolve),
            }
        ]
    },
    {
        path: '/marketplace/inventory',
        name: 'Marketplace Inventory',
        component: (resolve) => require(['@/pages/marketplace-inventory'], resolve),
        children: [
            {
                path: '',
                component: (resolve) => require(['@/pages/marketplace-inventory/main'], resolve),
            },
            {
                path: 'compare',
                name: 'Compare Assets',
                component: (resolve) => require(['@/pages/marketplace-inventory/compare'], resolve),
            }
        ]
    },
    {
        path: '/item-navigator',
        name: 'Item Navigator',
        props: true,
        component: (resolve) => require(['@/pages/item-navigator'], resolve)
    },
    {
        path: '/tests',
        name: 'Tests',
        component: (resolve) => require(['@/pages/tests'], resolve)
    },
    {
        path: '/purchase-receipt',
        name: 'Purchase Receipt',
        component: (resolve) => require(['@/pages/purchase-receipt'], resolve)
    },
    {
        path: '/achievements',
        name: 'Achievements',
        component: (resolve) => require(['@/pages/achievements'], resolve)
    },
    {
        path: '/features',
        name: 'Features',
        component: (resolve) => require(['@/pages/features'], resolve)
    },
    {
        path: '/videos',
        name: 'Test Screen for video',
        component: (resolve) => require(['@/pages/video'], resolve)
    },
    {
        path: '/article-page',
        name: 'Single Article Page',
        component: (resolve) => require(['@/pages/article-page'], resolve)
    },
    {
        path: '/download/desktop/mac',
        beforeEnter(to, from, next) {
            window.location = `https://github.com/hyperbridge/blockhub/releases/download/v${appVersion}/BlockHub-${appVersion}.dmg`
        }
    },
    {
        path: '/download/desktop/windows',
        beforeEnter(to, from, next) {
            window.location = `https://github.com/hyperbridge/blockhub/releases/download/v${appVersion}/BlockHub-Setup-${appVersion}.exe`
        }
    },
    {
        path: '/download/desktop/windows-32bit',
        beforeEnter(to, from, next) {
            window.location = `https://github.com/hyperbridge/blockhub/releases/download/v${appVersion}/BlockHub-Setup-${appVersion}.exe`
        }
    },
    {
        path: '/download/desktop/linux',
        beforeEnter(to, from, next) {
            window.location = `https://github.com/hyperbridge/blockhub/releases/download/v${appVersion}/blockhub-desktop-client-${appVersion}-x86_64.AppImage`
        }
    },
    {
        path: '/download/desktop/linux-64bit',
        beforeEnter(to, from, next) {
            window.location = `https://github.com/hyperbridge/blockhub/releases/download/v${appVersion}/blockhub-desktop-client-${appVersion}.tar.gz`
        }
    },
    {
        path: '/download/desktop/linux-32bit',
        beforeEnter(to, from, next) {
            window.location = `https://github.com/hyperbridge/blockhub/releases/download/v${appVersion}/blockhub-desktop-client-${appVersion}-ia32.tar.gz`
        }
    },
    {
        path: '/download/desktop/linux-64bit-debian',
        beforeEnter(to, from, next) {
            window.location = `https://github.com/hyperbridge/blockhub/releases/download/v${appVersion}/blockhub-desktop-client_${appVersion}_amd64.deb`
        }
    },
    {
        path: '/download/desktop/linux-32bit-debian',
        beforeEnter(to, from, next) {
            window.location = `https://github.com/hyperbridge/blockhub/releases/download/v${appVersion}/blockhub-desktop-client_${appVersion}_i386.deb`
        }
    },
    {
        path: "*",
        name: 'Not Found',
        component: (resolve) => require(['@/pages/not-found'], resolve)
    }
]
