
const appVersion = '0.8.0'


export default [
    {
        path: '/',
        name: 'Home',
        component: (resolve) => require(['@/ui/screens/home'], resolve)
    },
    {
        path: '/unlock',
        name: 'Unlock',
        component: (resolve) => require(['@/ui/screens/unlock'], resolve),
        meta: {
            auth: false,
            breadcrumb: false
        }
    },
    {
        path: '/welcome',
        name: 'Welcome',
        component: (resolve) => require(['@/ui/screens/welcome'], resolve),
        meta: {
            auth: false,
            breadcrumb: false
        }
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
        component: (resolve) => require(['@/ui/screens/go'], resolve),
        meta: {
            breadcrumb: false
        }
    },
    {
        path: '/help/:id/article/:slug/:info',
        name: 'Help article',
        props: true,
        component: (resolve) => require(['@/ui/screens/help-article'], resolve)
    },
    {
        path: '/help/:id/article/:slug',
        name: 'Help article',
        props: true,
        component: (resolve) => require(['@/ui/screens/help-article'], resolve)
    },
    {
        path: '/help/:id',
        name: 'Topic',
        props: true,
        component: (resolve) => require(['@/ui/screens/help-topic'], resolve)
    },
    {
        path: '/help',
        name: 'Help',
        component: (resolve) => require(['@/ui/screens/help'], resolve),
        meta: {
            breadcrumb: false
        }
    },
    {
        path: '/support',
        name: 'Support',
        component: (resolve) => require(['@/ui/screens/support'], resolve)
    },
    {
        path: '/news',
        name: 'News',
        component: (resolve) => require(['@/ui/screens/news'], resolve)
    },
    {
        path: '/token',
        name: 'Token',
        component: (resolve) => require(['@/ui/screens/token'], resolve),
        meta: {
            breadcrumb: false
        }
    },
    {
        path: '/plans',
        name: 'Plans',
        component: (resolve) => require(['@/ui/screens/plans'], resolve),
        meta: {
            breadcrumb: false
        }
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
        name: 'Collection',
        props: true,
        component: (resolve) => require(['@/ui/screens/collection'], resolve)
    },
    {
        path: '/account',
        name: 'Account',
        component: (resolve) => require(['@/ui/screens/account'], resolve),
        meta: {
            auth: true,
            permission: 'signedIn'
        }
    },
    {
        path: '/account/signup',
        name: 'Sign Up',
        component: (resolve) => require(['@/ui/screens/account-signup'], resolve),
        meta: {
            auth: false,
            breadcrumb: false
        }
    },
    {
        path: '/account/signin',
        name: 'Sign In',
        component: (resolve) => require(['@/ui/screens/account-signin'], resolve),
        meta: {
            auth: false,
            breadcrumb: false
        }
    },
    {
        path: '/account/signout',
        name: 'Sign Out',
        component: (resolve) => require(['@/ui/screens/account-signout'], resolve),
        meta: {
            auth: true,
            permission: 'signedIn'
        }
    },
    {
        path: '/account/backup',
        name: 'Account Backup',
        component: (resolve) => require(['@/ui/screens/account-backup'], resolve),
        meta: {
            breadcrumb: false
        }
    },
    {
        path: '/account/verification',
        name: 'Account Verification',
        component: (resolve) => require(['@/ui/screens/account-verification'], resolve),
        meta: {
            breadcrumb: false
        }
    },
    {
        path: '/account/verification/callback',
        name: 'Account Verification',
        component: (resolve) => require(['@/ui/screens/account-verification-callback'], resolve),
        meta: {
            breadcrumb: false
        }
    },
    {
        path: '/account/wallets',
        name: 'Wallets',
        component: (resolve) => require(['@/ui/screens/account-wallets'], resolve),
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
        component: (resolve) => require(['@/ui/screens/account-profiles'], resolve),
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
        component: (resolve) => require(['@/ui/screens/kyc'], resolve),
        meta: {
            breadcrumb: false
        }
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
        path: '/profile/:id',
        name: 'Profile',
        props: true,
        component: (resolve) => require(['@/ui/screens/profile-overview'], resolve),
        meta: {
            breadcrumb: false
        }
    },
    {
        path: '/profile/:id/contacts',
        name: 'Contacts',
        props: true,
        component: (resolve) => require(['@/ui/screens/profile-contacts'], resolve)
    },
    {
        path: '/profile/:id/projects',
        name: 'Crowdfunds',
        props: true,
        component: (resolve) => require(['@/ui/screens/profile-projects'], resolve)
    },
    {
        path: '/profile/:id/licenses',
        name: 'Licenses',
        props: true,
        component: (resolve) => require(['@/ui/screens/profile-licenses'], resolve)
    },
    {
        path: '/profile/:id/assets',
        name: 'Assets',
        props: true,
        component: (resolve) => require(['@/ui/screens/profile-assets'], resolve)
    },
    {
        path: '/profile/:id/collections',
        name: 'Collections',
        props: true,
        component: (resolve) => require(['@/ui/screens/profile-collection'], resolve)
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
        path: '/settings/extensions',
        name: 'Extensions',
        component: (resolve) => require(['@/ui/screens/settings-extensions'], resolve),
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
        path: '/verification-assistant',
        name: 'Verification Assistant',
        component: (resolve) => require(['@/ui/screens/verification-assistant'], resolve)
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
        path: '/developer/apply',
        name: 'Developer Application',
        component: (resolve) => require(['@/ui/screens/developer-application'], resolve),
        meta: {
            permission: 'signedIn'
        }
    },
    {
        path: '/developer/new-product',
        name: 'New Product',
        component: (resolve) => require(['@/ui/screens/product'], resolve),
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
        component: (resolve) => require(['@/ui/screens/product'], resolve),
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
        name: 'Product Crowdfunds',
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
        path: '/chat',
        name: 'Chat',
        component: (resolve) => require(['@/ui/screens/chat'], resolve)
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
        path: '/browser',
        name: 'Browser',
        component: (resolve) => require(['@/ui/screens/browser'], resolve)
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
        path: '/ideas',
        name: 'Ideas',
        component: (resolve) => require(['@/ui/screens/ideas'], resolve),
        breadcrumb: [
            { title: 'Home' },
            { title: 'Ideas' }
        ]
    },
    {
        path: '/idea/new',
        name: 'Idea',
        props: true,
        component: (resolve) => require(['@/ui/screens/idea'], resolve),
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
        component: (resolve) => require(['@/ui/screens/idea'], resolve),
        meta: {
            section: 'overview'
        }
    },
    {
        path: '/games',
        name: 'Games',
        component: (resolve) => require(['@/ui/screens/games'], resolve),
        breadcrumb: [
            { title: 'Home' },
            { title: 'Games' }
        ]
    },
    {
        path: '/projects',
        name: 'Crowdfunds',
        component: (resolve) => require(['@/ui/screens/projects'], resolve),
        meta: {
            renderCondition: 'authenticated'
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
        component: (resolve) => require(['@/ui/screens/project'], resolve),
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
        component: (resolve) => require(['@/ui/screens/project'], resolve),
        meta: {
            section: 'overview'
        }
    },
    {
        path: '/project/:id/bounties',
        name: 'Crowdfund Bounties',
        props: true,
        component: (resolve) => require(['@/ui/screens/project'], resolve),
        meta: {
            section: 'bounties'
        }
    },
    {
        path: '/project/:id/contributors',
        name: 'Crowdfund Contributors',
        props: true,
        component: (resolve) => require(['@/ui/screens/project-contributors'], resolve)
    },
    {
        path: '/project/:id/discussion',
        name: 'Crowdfund Discussion',
        props: true,
        component: (resolve) => require(['@/ui/screens/project-discussion'], resolve)
    },
    {
        path: '/project/:id/milestones',
        name: 'Crowdfund Milestones',
        props: true,
        component: (resolve) => require(['@/ui/screens/project'], resolve),
        meta: {
            section: 'milestones'
        }
    },
    {
        path: '/project/:id/updates',
        name: 'Crowdfund Updates',
        props: true,
        component: (resolve) => require(['@/ui/screens/project'], resolve),
        meta: {
            section: 'updates'
        }
    },
    {
        path: '/project/:projectID/updates/:postID',
        name: 'Crowdfund Updates Post',
        props: true,
        component: (resolve) => require(['@/ui/screens/project-updates/post'], resolve)
    },
    {
        path: '/project/:id/community',
        name: 'Crowdfund Community',
        props: true,
        component: (resolve) => require(['@/ui/screens/project'], resolve),
        meta: {
            section: 'community'
        }
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
        path: '/curator/application',
        name: 'Curator Application',
        props: true,
        component: (resolve) => require(['@/ui/screens/curator-application'], resolve),
        meta: {
            auth: true,
            permission: 'signedIn'
        }
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
        component: (resolve) => require(['@/ui/screens/download'], resolve),
        meta: {
            breadcrumb: false
        }
    },
    {
        path: '/realms',
        name: 'Realms',
        component: (resolve) => require(['@/ui/screens/realms'], resolve)
    },
    {
        path: '/footer',
        name: 'Footer',
        component: (resolve) => require(['@/ui/screens/footer'], resolve)
    },
    {
        path: '/realm/:id',
        name: 'Realm',
        props: true,
        component: (resolve) => require(['@/ui/screens/realm'], resolve),
        meta: {
            breadcrumb: false
        }
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
        path: '/meta/presets',
        name: 'Presets',
        component: (resolve) => require(['@/ui/screens/meta-presets'], resolve)
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
        component: (resolve) => require(['@/ui/screens/chest'], resolve)
    },
    {
        path: '/launcher',
        name: 'Launcher',
        component: (resolve) => require(['@/ui/screens/launcher'], resolve)
    },,
    {
        path: '/quick-import',
        name: 'Quick import',
        component: (resolve) => require(['@/ui/screens/quick-import'], resolve)
    },
    {
        path: '/admin',
        name: 'Admin',
        component: (resolve) => require(['@/ui/screens/business'], resolve),
        meta: {
            area: 'business',
        },
        children: [
            {
                path: '',
                name: 'Admin',
                component: (resolve) => require(['@/ui/screens/admin-home'], resolve),
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
        path: '/business/product/:id',
        name: 'Product',
        props: true,
        component: (resolve) => require(['@/ui/screens/business-product'], resolve),
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
        component: (resolve) => require(['@/ui/screens/business-project'], resolve),
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
        path: '/business',
        name: 'Business',
        component: (resolve) => require(['@/ui/screens/business'], resolve),
        meta: {
            area: 'business',
            permission: 'signedIn',
        },
        children: [
            {
                path: '',
                name: 'Business',
                component: (resolve) => require(['@/ui/screens/business-home'], resolve),
                meta: {
                    title: 'Business',
                    permission: 'signedIn',
                    breadcrumb: [
                        { to: '/business', title: 'Dashboard' },
                    ]
                }
            },
            {
                path: 'products',
                name: 'All Products',
                component: (resolve) => require(['@/ui/screens/business-products'], resolve),
                meta: {
                    title: 'All Products',
                    permission: 'signedIn',
                    breadcrumb: [
                        { to: '/business', title: 'Dashboard' },
                        { title: 'All Products' }
                    ]
                }
            },
            {
                path: 'projects',
                name: 'All Crowdfunds',
                component: (resolve) => require(['@/ui/screens/business-projects'], resolve),
                meta: {
                    title: 'All Crowdfunds',
                    permission: 'signedIn',
                    breadcrumb: [
                        { to: '/business', title: 'Dashboard' },
                        { title: 'All Crowdfunds' }
                    ]
                }
            },
            {
                path: 'release-history/:id',
                name: 'Release History',
                props: true,
                component: (resolve) => require(['@/ui/screens/business-release-history'], resolve),
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
                component: (resolve) => require(['@/ui/screens/business-new-release'], resolve),
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
                component: (resolve) => require(['@/ui/screens/business-release-page'], resolve),
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
        component: (resolve) => require(['@/ui/screens/marketplace'], resolve),
        children: [
            {
                path: '',
                name: 'Marketplace',
                component: (resolve) => require(['@/ui/screens/marketplace/home'], resolve),
            },
            {
                path: 'trade',
                component: (resolve) => require(['@/ui/screens/marketplace/trade'], resolve),
                children: [
                    {
                        path: '',
                        name: 'Marketplace Trade Manager',
                        component: (resolve) => require(['@/ui/screens/marketplace/trade/home'], resolve),
                    },
                    {
                        path: 'explorer',
                        name: 'Marketplace Trade Explorer',
                        component: (resolve) => require(['@/ui/screens/marketplace/trade/explorer'], resolve)
                    },
                    {
                        path: 'history',
                        name: 'Marketplace Trade History',
                        component: (resolve) => require(['@/ui/screens/marketplace/trade/history'], resolve),
                    },
                    {
                        path: 'settings',
                        name: 'Marketplace Trade Settings',
                        component: (resolve) => require(['@/ui/screens/marketplace/trade/settings'], resolve),
                    },
                    {
                        path: ':id',
                        name: 'Marketplace Trade',
                        component: (resolve) => require(['@/ui/screens/marketplace/trade/_id'], resolve),
                        props: true,
                        children: [
                            {
                                path: '',
                                name: 'Marketplace Trade Offer',
                                component: (resolve) => require(['@/ui/screens/marketplace/trade/_id/offer'], resolve)
                            },
                            {
                                path: 'chat',
                                name: 'Marketplace Trade Chat',
                                component: (resolve) => require(['@/ui/screens/marketplace/trade/_id/chat'], resolve)
                            }
                        ]
                    },
                ]
            },
            {
                path: 'assets',
                name: 'Marketplace Assets',
                component: (resolve) => require(['@/ui/screens/marketplace/offers'], resolve),
                children: [
                    // {
                    //     path: ':id',
                    //     name: 'Matketplace Asset Offers',
                    //     component: (resolve) => require(['@/ui/screens/marketplace/offers/_id'], resolve)
                    // }
                ]
            },
            {
                path: 'asset/:assetId',
                name: 'Marketplace Asset',
                component: (resolve) => require(['@/ui/screens/marketplace/offers/_id'], resolve),
                props: true,
                children: [
                    {
                        path: '',
                        name: 'Marketplace Asset Offers',
                        component: (resolve) => require(['@/ui/screens/marketplace/offers/_id/offers'], resolve),
                    },
                    {
                        path: 'offer/:offerId',
                        name: 'Marketplace Asset Offer',
                        component: (resolve) => require(['@/ui/screens/marketplace/offers/_id/_id'], resolve),
                        props: true
                    }
                ]
            },
            {
                path: 'snipers',
                name: 'Marketplace Prospectors',
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
        path: '/item-navigator',
        name: 'Item Navigator',
        props: true,
        component: (resolve) => require(['@/ui/screens/item-navigator'], resolve)
    },
    {
        path: '/tests',
        name: 'Tests',
        component: (resolve) => require(['@/ui/screens/tests'], resolve)
    },
    {
        path: '/purchase-receipt',
        name: 'Purchase Receipt',
        component: (resolve) => require(['@/ui/screens/purchase-receipt'], resolve)
    },
    {
        path: '/achievements',
        name: 'Achievements',
        component: (resolve) => require(['@/ui/screens/achievements'], resolve)
    },
    {
        path: '/features',
        name: 'Features',
        component: (resolve) => require(['@/ui/screens/features'], resolve)
    },
    {
        path: '/videos',
        name: 'Test Screen for video',
        component: (resolve) => require(['@/ui/screens/video'], resolve)
    },
    {
        path: '/article-page',
        name: 'Single Article Page',
        component: (resolve) => require(['@/ui/screens/article-page'], resolve)
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
        component: (resolve) => require(['@/ui/screens/not-found'], resolve)
    }
]
