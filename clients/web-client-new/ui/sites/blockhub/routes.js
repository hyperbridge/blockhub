
const appVersion = '0.8.0'


export default [
    {
        path: '/',
        name: 'Home',
        component: () => import('~/pages/home').then(m => m.default || m)
    },
    {
        path: '/company',
        name: 'About Company',
        component: () => import('~/pages/about').then(m => m.default || m)
    },
    {
        path: '/unlock',
        name: 'Unlock',
        component: () => import('~/pages/unlock').then(m => m.default || m),
        meta: {
            auth: false,
            breadcrumb: false
        }
    },
    {
        path: '/welcome',
        name: 'Welcome',
        component: () => import('~/pages/welcome').then(m => m.default || m),
        meta: {
            auth: false,
            breadcrumb: false
        }
    },
    {
        path: '/terms',
        name: 'Terms & Conditions',
        component: () => import('~/pages/terms').then(m => m.default || m)
    },
    {
        path: '/privacy',
        name: 'Privacy Policy',
        component: () => import('~/pages/privacy').then(m => m.default || m)
    },
    {
        path: '/streams',
        name: 'Streams',
        component: () => import('~/pages/streams').then(m => m.default || m)
    },,
    {
        path: '/stream/:id',
        name: 'Stream',
        props: true,
        component: () => import('~/pages/stream-single').then(m => m.default || m)
    },
    {
        path: '/stash',
        name: 'Stash',
        component: () => import('~/pages/stash').then(m => m.default || m)
    },
    {
        path: '/sitemap',
        name: 'Sitemap',
        component: () => import('~/pages/sitemap').then(m => m.default || m)
    },
    {
        path: '/go/:code',
        name: 'Go',
        props: true,
        component: () => import('~/pages/go').then(m => m.default || m),
        meta: {
            breadcrumb: false
        }
    },
    {
        path: '/help/:id/article/:slug/:info',
        name: 'Help article',
        props: true,
        component: () => import('~/pages/help-article').then(m => m.default || m)
    },
    {
        path: '/help/:id/article/:slug',
        name: 'Help article',
        props: true,
        component: () => import('~/pages/help-article').then(m => m.default || m)
    },
    {
        path: '/help/:id',
        name: 'Topic',
        props: true,
        component: () => import('~/pages/help-topic').then(m => m.default || m)
    },
    {
        path: '/help',
        name: 'Help',
        component: () => import('~/pages/help').then(m => m.default || m),
        meta: {
            breadcrumb: false
        }
    },
    {
        path: '/support',
        name: 'Support',
        component: () => import('~/pages/support').then(m => m.default || m)
    },
    {
        path: '/news',
        name: 'News',
        component: () => import('~/pages/news').then(m => m.default || m)
    },
    {
        path: '/denied',
        name: 'Denied',
        component: () => import('~/pages/denied').then(m => m.default || m),
        meta: {
            breadcrumb: false
        }
    },
    {
        path: '/token',
        name: 'Token',
        component: () => import('~/pages/token').then(m => m.default || m),
        meta: {
            breadcrumb: false
        }
    },
    {
        path: '/plans',
        name: 'Plans',
        component: () => import('~/pages/plans').then(m => m.default || m),
        meta: {
            breadcrumb: false
        }
    },
    {
        path: '/redeem',
        name: 'Redeem',
        component: () => import('~/pages/redeem').then(m => m.default || m)
    },
    {
        path: '/store',
        name: 'Store',
        component: () => import('~/pages/store').then(m => m.default || m)
    },
    {
        path: '/store/cart',
        name: 'Store Cart',
        component: () => import('~/pages/store-cart').then(m => m.default || m),
        meta: {
            auth: true
        }
    },
    {
        path: '/store/checkout',
        name: 'Store Checkout',
        component: () => import('~/pages/store-checkout').then(m => m.default || m),
        meta: {
            auth: true
        }
    },
    {
        path: '/store/invoices',
        name: 'Store Invoices',
        component: () => import('~/pages/store-invoices').then(m => m.default || m),
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
        component: () => import('~/pages/store-invoice').then(m => m.default || m),
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
        component: () => import('~/pages/collections').then(m => m.default || m)
    },
    {
        path: '/collection/:id',
        name: 'Collection',
        props: true,
        component: () => import('~/pages/collection').then(m => m.default || m)
    },
    {
        path: '/account',
        name: 'Account',
        component: () => import('~/pages/account').then(m => m.default || m),
        meta: {
            auth: true,
            permission: 'signedIn'
        }
    },
    {
        path: '/account/signup',
        name: 'Sign Up',
        component: () => import('~/pages/account-signup').then(m => m.default || m),
        meta: {
            auth: false,
            breadcrumb: false
        }
    },
    {
        path: '/account/signin',
        name: 'Sign In',
        component: () => import('~/pages/account-signin').then(m => m.default || m),
        meta: {
            auth: false,
            breadcrumb: false
        }
    },
    {
        path: '/account/signout',
        name: 'Sign Out',
        component: () => import('~/pages/account-signout').then(m => m.default || m),
        meta: {
            auth: true,
            permission: 'signedIn'
        }
    },
    {
        path: '/account/backup',
        name: 'Account Backup',
        component: () => import('~/pages/account-backup').then(m => m.default || m),
        meta: {
            breadcrumb: false
        }
    },
    {
        path: '/account/verification',
        name: 'Account Verification',
        component: () => import('~/pages/account-verification').then(m => m.default || m),
        meta: {
            breadcrumb: false
        }
    },
    {
        path: '/account/verification/callback',
        name: 'Account Verification',
        component: () => import('~/pages/account-verification-callback').then(m => m.default || m),
        meta: {
            breadcrumb: false
        }
    },
    {
        path: '/account/wallets',
        name: 'Wallets',
        component: () => import('~/pages/account-wallets').then(m => m.default || m),
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
        component: () => import('~/pages/account-profiles').then(m => m.default || m),
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
        component: () => import('~/pages/kyc').then(m => m.default || m),
        meta: {
            breadcrumb: false
        }
    },
    {
        path: '/wallet/:id',
        name: 'Wallet',
        props: true,
        component: () => import('~/pages/wallet-overview').then(m => m.default || m)
    },
    {
        path: '/wallet/:id/transactions',
        name: 'Transactions',
        props: true,
        component: () => import('~/pages/wallet-transactions').then(m => m.default || m)
    },
    {
        path: '/transaction/:id',
        name: 'Transaction',
        props: true,
        component: () => import('~/pages/transaction-overview').then(m => m.default || m)
    },
    {
        path: '/profile/:id',
        name: 'Profile',
        props: true,
        component: () => import('~/pages/profile').then(m => m.default || m),
        meta: {
            breadcrumb: false
        }
    },
    {
        path: '/profile/:id/contacts',
        name: 'Contacts',
        props: true,
        component: () => import('~/pages/profile-contacts').then(m => m.default || m)
    },
    {
        path: '/profile/:id/projects',
        name: 'Crowdfunds',
        props: true,
        component: () => import('~/pages/profile-projects').then(m => m.default || m)
    },
    {
        path: '/profile/:id/licenses',
        name: 'Licenses',
        props: true,
        component: () => import('~/pages/profile-licenses').then(m => m.default || m)
    },
    {
        path: '/profile/:id/assets',
        name: 'Assets',
        props: true,
        component: () => import('~/pages/profile-assets').then(m => m.default || m)
    },
    {
        path: '/profile/:id/collections',
        name: 'Collections',
        props: true,
        component: () => import('~/pages/profile-collection').then(m => m.default || m)
    },
    {
        path: '/settings',
        name: 'Settings',
        component: () => import('~/pages/settings').then(m => m.default || m),
        meta: {
            auth: true
        }
    },
    {
        path: '/settings/profile',
        name: 'Profile',
        component: () => import('~/pages/settings-profile').then(m => m.default || m),
        meta: {
            auth: true
        }
    },
    {
        path: '/settings/protocol',
        name: 'Protocol Settings',
        component: () => import('~/pages/settings-protocol').then(m => m.default || m),
        meta: {
            auth: true
        }
    },
    {
        path: '/settings/darklaunch',
        name: 'Darklaunch Settings',
        component: () => import('~/pages/settings-darklaunch').then(m => m.default || m),
        meta: {
            auth: true
        }
    },
    {
        path: '/settings/activity',
        name: 'Activity Settings',
        component: () => import('~/pages/settings-activity').then(m => m.default || m),
        meta: {
            auth: true
        }
    },
    {
        path: '/settings/debug',
        name: 'Debug Settings',
        component: () => import('~/pages/settings-debug').then(m => m.default || m),
        meta: {
            auth: true
        }
    },
    {
        path: '/settings/game-scanner',
        name: 'Game Scanner',
        component: () => import('~/pages/settings-game-scanner').then(m => m.default || m),
        meta: {
            auth: true
        }
    },
    {
        path: '/settings/extensions',
        name: 'Extensions',
        component: () => import('~/pages/settings-extensions').then(m => m.default || m),
        meta: {
            auth: true
        }
    },
    {
        path: '/monitor',
        name: 'Monitor',
        component: () => import('~/pages/monitor').then(m => m.default || m)
    },
    {
        path: '/verification-assistant',
        name: 'Verification Assistant',
        component: () => import('~/pages/verification-assistant').then(m => m.default || m)
    },
    {
        path: '/developer',
        name: 'Developer Program',
        component: () => import('~/pages/developer').then(m => m.default || m),
        meta: {
        }
    },
    {
        path: '/developer/apply',
        name: 'Developer Application',
        component: () => import('~/pages/developer-application').then(m => m.default || m),
        meta: {
            permission: 'signedIn'
        }
    },
    {
        path: '/developer/new-product',
        name: 'New Product',
        component: () => import('~/pages/product').then(m => m.default || m),
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
        component: () => import('~/pages/product').then(m => m.default || m),
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
        component: () => import('~/pages/product').then(m => m.default || m),
        meta: {
            section: 'overview'
        }
    },
    {
        path: '/product/:id/community',
        name: 'Product Community',
        props: true,
        component: () => import('~/pages/product').then(m => m.default || m),
        meta: {
            section: 'community'
        }
    },
    {
        path: '/product/:id/projects',
        name: 'Product Crowdfunds',
        props: true,
        component: () => import('~/pages/product').then(m => m.default || m),
        meta: {
            section: 'projects'
        }
    },
    {
        path: '/product/:id/assets',
        name: 'Product Assets',
        props: true,
        component: () => import('~/pages/product').then(m => m.default || m),
        meta: {
            section: 'assets'
        }
    },
    {
        path: '/community',
        name: 'Community',
        component: () => import('~/pages/community').then(m => m.default || m),
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
        component: () => import('~/pages/community-forums').then(m => m.default || m)
    },
    {
        path: '/community/forum/:id',
        name: 'Community Forum',
        props: true,
        component: () => import('~/pages/community-forum').then(m => m.default || m),
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
        component: () => import('~/pages/community-discussion').then(m => m.default || m)
    },
    {
        path: '/chat',
        name: 'Chat',
        component: () => import('~/pages/chat').then(m => m.default || m)
    },
    {
        path: '/assets',
        name: 'Assets',
        props: true,
        component: () => import('~/pages/assets').then(m => m.default || m)
    },
    {
        path: '/asset/:id',
        name: 'Asset',
        props: true,
        component: () => import('~/pages/asset-overview').then(m => m.default || m)
    },
    {
        path: '/browser',
        name: 'Browser',
        component: () => import('~/pages/browser').then(m => m.default || m)
    },
    {
        path: '/republic',
        name: 'Republic',
        component: () => import('~/pages/republic').then(m => m.default || m)
    },
    {
        path: '/republic/citizenship',
        name: 'Republic Citizenship',
        component: () => import('~/pages/republic-citizenship').then(m => m.default || m)
    },
    {
        path: '/republic/district/create',
        name: 'Create District',
        component: () => import('~/pages/republic-district').then(m => m.default || m)
    },
    {
        path: '/ideas',
        name: 'Ideas',
        component: () => import('~/pages/ideas').then(m => m.default || m),
        breadcrumb: [
            { title: 'Home' },
            { title: 'Ideas' }
        ]
    },
    {
        path: '/idea/new',
        name: 'Idea',
        props: true,
        component: () => import('~/pages/idea').then(m => m.default || m),
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
        component: () => import('~/pages/idea').then(m => m.default || m),
        meta: {
            section: 'overview'
        }
    },
    {
        path: '/games',
        name: 'Games',
        component: () => import('~/pages/games').then(m => m.default || m),
        breadcrumb: [
            { title: 'Home' },
            { title: 'Games' }
        ]
    },
    {
        path: '/projects',
        name: 'Crowdfunds',
        component: () => import('~/pages/projects').then(m => m.default || m),
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
        component: () => import('~/pages/project').then(m => m.default || m),
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
        component: () => import('~/pages/project').then(m => m.default || m),
        meta: {
            section: 'overview'
        }
    },
    {
        path: '/project/:id/bounties',
        name: 'Crowdfund Bounties',
        props: true,
        component: () => import('~/pages/project').then(m => m.default || m),
        meta: {
            section: 'bounties'
        }
    },
    {
        path: '/project/:id/contributors',
        name: 'Crowdfund Contributors',
        props: true,
        component: () => import('~/pages/project-contributors').then(m => m.default || m)
    },
    {
        path: '/project/:id/discussion',
        name: 'Crowdfund Discussion',
        props: true,
        component: () => import('~/pages/project-discussion').then(m => m.default || m)
    },
    {
        path: '/project/:id/milestones',
        name: 'Crowdfund Milestones',
        props: true,
        component: () => import('~/pages/project').then(m => m.default || m),
        meta: {
            section: 'milestones'
        }
    },
    {
        path: '/project/:id/updates',
        name: 'Crowdfund Updates',
        props: true,
        component: () => import('~/pages/project').then(m => m.default || m),
        meta: {
            section: 'updates'
        }
    },
    {
        path: '/project/:projectID/updates/:postID',
        name: 'Crowdfund Updates Post',
        props: true,
        component: () => import('~/pages/project-updates/post').then(m => m.default || m)
    },
    {
        path: '/project/:id/community',
        name: 'Crowdfund Community',
        props: true,
        component: () => import('~/pages/project').then(m => m.default || m),
        meta: {
            section: 'community'
        }
    },
    {
        path: '/battlepass/:id',
        name: 'Battle Pass',
        props: true,
        component: () => import('~/pages/battle-pass').then(m => m.default || m)
    },
    {
        path: '/curators',
        name: 'Curators',
        component: () => import('~/pages/curators').then(m => m.default || m)
    },
    {
        path: '/curator/application',
        name: 'Curator Application',
        props: true,
        component: () => import('~/pages/curator-application').then(m => m.default || m),
        meta: {
            auth: true,
            permission: 'signedIn'
        }
    },
    {
        path: '/curator/:id',
        name: 'Curator',
        props: true,
        component: () => import('~/pages/curator-overview').then(m => m.default || m)
    },
    {
        path: '/download',
        name: 'Download',
        component: () => import('~/pages/download').then(m => m.default || m),
        meta: {
            breadcrumb: false
        }
    },
    {
        path: '/realms',
        name: 'Realms',
        component: () => import('~/pages/realms').then(m => m.default || m)
    },
    {
        path: '/footer',
        name: 'Footer',
        component: () => import('~/pages/footer').then(m => m.default || m)
    },
    {
        path: '/realm/:id',
        name: 'Realm',
        props: true,
        component: () => import('~/pages/realm').then(m => m.default || m),
        meta: {
            breadcrumb: false
        }
    },
    {
        path: '/unknown',
        name: 'Unknown Layers',
        component: () => import('~/pages/unknown').then(m => m.default || m)
    },
    {
        path: '/search',
        name: 'Search',
        component: () => import('~/pages/search').then(m => m.default || m)
    },
    {
        path: '/discussion',
        name: 'Discussion',
        props: true,
        component: () => import('~/pages/discussion').then(m => m.default || m)
    },
    {
        path: '/meta',
        name: 'Meta',
        component: () => import('~/pages/meta').then(m => m.default || m)
    },
    {
        path: '/meta/presets',
        name: 'Presets',
        component: () => import('~/pages/meta-presets').then(m => m.default || m)
    },
    {
        path: '/updates',
        name: 'Updates',
        component: () => import('~/pages/updates').then(m => m.default || m)
    },
    {
        path: '/updates/:id',
        name: 'Update',
        props: true,
        component: () => import('~/pages/updates').then(m => m.default || m)
    },
    {
        path: '/chest',
        name: 'Chest',
        component: () => import('~/pages/chest').then(m => m.default || m)
    },
    {
        path: '/launcher',
        name: 'Launcher',
        component: () => import('~/pages/launcher').then(m => m.default || m)
    },,
    {
        path: '/quick-import',
        name: 'Quick import',
        component: () => import('~/pages/quick-import').then(m => m.default || m)
    },
    {
        path: '/admin',
        name: 'Admin',
        component: () => import('~/pages/business').then(m => m.default || m),
        meta: {
            area: 'business'
        },
        children: [
            {
                path: '',
                name: 'Admin',
                component: () => import('~/pages/admin-home').then(m => m.default || m),
                meta: {
                    title: 'Admin',
                    breadcrumb: [
                        { path: '/admin', title: 'Dashboard' }
                    ]
                }
            }
        ]
    },
    {
        path: '/business/realm/:id',
        name: 'Realm',
        props: true,
        component: () => import('~/pages/business-realm').then(m => m.default || m),
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
        component: () => import('~/pages/business-product').then(m => m.default || m),
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
        component: () => import('~/pages/business-project').then(m => m.default || m),
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
        component: () => import('~/pages/business-asset').then(m => m.default || m),
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
        component: () => import('~/pages/business-idea').then(m => m.default || m),
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
        component: () => import('~/pages/business-products').then(m => m.default || m),
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
        component: () => import('~/pages/business-projects').then(m => m.default || m),
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
        component: () => import('~/pages/business').then(m => m.default || m),
        meta: {
            area: 'business',
            permission: 'signedIn'
        },
        children: [
            {
                path: '',
                name: 'Business',
                component: () => import('~/pages/business-home').then(m => m.default || m),
                meta: {
                    title: 'Business',
                    permission: 'signedIn',
                    breadcrumb: [
                        { to: '/business', title: 'Dashboard' }
                    ]
                }
            },
            {
                path: 'release-history/:id',
                name: 'Release History',
                props: true,
                component: () => import('~/pages/business-release-history').then(m => m.default || m),
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
                component: () => import('~/pages/business-new-release').then(m => m.default || m),
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
                component: () => import('~/pages/business-release-page').then(m => m.default || m),
                meta: {
                    title: 'Release Page',
                    permission: 'signedIn',
                    breadcrumb: [
                        { to: '/release-page', title: 'Dashboard' },
                        { title: 'Release page' }
                    ]
                }
            }
        ]
    },
    {
        path: '/marketplace',
        component: () => import('~/pages/marketplace').then(m => m.default || m),
        children: [
            {
                path: '',
                name: 'Marketplace',
                component: () => import('~/pages/marketplace/home').then(m => m.default || m)
            },
            {
                path: 'trade',
                component: () => import('~/pages/marketplace/trade').then(m => m.default || m),
                children: [
                    {
                        path: '',
                        name: 'Marketplace Trade Manager',
                        component: () => import('~/pages/marketplace/trade/home').then(m => m.default || m)
                    },
                    {
                        path: 'explorer',
                        name: 'Marketplace Trade Explorer',
                        component: () => import('~/pages/marketplace/trade/explorer').then(m => m.default || m)
                    },
                    {
                        path: 'history',
                        name: 'Marketplace Trade History',
                        component: () => import('~/pages/marketplace/trade/history').then(m => m.default || m)
                    },
                    {
                        path: 'settings',
                        name: 'Marketplace Trade Settings',
                        component: () => import('~/pages/marketplace/trade/settings').then(m => m.default || m)
                    },
                    {
                        path: ':id',
                        name: 'Marketplace Trade',
                        component: () => import('~/pages/marketplace/trade/_id').then(m => m.default || m),
                        props: true,
                        children: [
                            {
                                path: '',
                                name: 'Marketplace Trade Offer',
                                component: () => import('~/pages/marketplace/trade/_id/offer').then(m => m.default || m)
                            },
                            {
                                path: 'chat',
                                name: 'Marketplace Trade Chat',
                                component: () => import('~/pages/marketplace/trade/_id/chat').then(m => m.default || m)
                            }
                        ]
                    }
                ]
            },
            {
                path: 'assets',
                name: 'Marketplace Assets',
                component: () => import('~/pages/marketplace/offers').then(m => m.default || m),
                children: [
                    // {
                    //     path: ':id',
                    //     name: 'Matketplace Asset Offers',
                    //     component: () => import('~/pages/marketplace/offers/_id').then(m => m.default || m)
                    // }
                ]
            },
            {
                path: 'asset/:assetId',
                name: 'Marketplace Asset',
                component: () => import('~/pages/marketplace/offers/_id').then(m => m.default || m),
                props: true,
                children: [
                    {
                        path: '',
                        name: 'Marketplace Asset Offers',
                        component: () => import('~/pages/marketplace/offers/_id/offers').then(m => m.default || m)
                    },
                    {
                        path: 'offer/:offerId',
                        name: 'Marketplace Asset Offer',
                        component: () => import('~/pages/marketplace/offers/_id/_id').then(m => m.default || m),
                        props: true
                    }
                ]
            },
            {
                path: 'prospectors',
                name: 'Marketplace Prospectors',
                component: () => import('~/pages/marketplace/prospectors').then(m => m.default || m)
            },
            {
                path: 'search',
                name: 'Marketplace Search',
                component: () => import('~/pages/marketplace/search').then(m => m.default || m)
            }
        ]
    },
    {
        path: '/marketplace/inventory',
        name: 'Marketplace Inventory',
        component: () => import('~/pages/marketplace-inventory').then(m => m.default || m),
        children: [
            {
                path: '',
                component: () => import('~/pages/marketplace-inventory/main').then(m => m.default || m)
            },
            {
                path: 'compare',
                name: 'Compare Assets',
                component: () => import('~/pages/marketplace-inventory/compare').then(m => m.default || m)
            }
        ]
    },
    {
        path: '/item-navigator',
        name: 'Item Navigator',
        props: true,
        component: () => import('~/pages/item-navigator').then(m => m.default || m)
    },
    {
        path: '/tests',
        name: 'Tests',
        component: () => import('~/pages/tests').then(m => m.default || m)
    },
    {
        path: '/purchase-receipt',
        name: 'Purchase Receipt',
        component: () => import('~/pages/store/receipt').then(m => m.default || m)
    },
    {
        path: '/achievements',
        name: 'Achievements',
        component: () => import('~/pages/achievements').then(m => m.default || m)
    },
    {
        path: '/features',
        name: 'Features',
        component: () => import('~/pages/features').then(m => m.default || m)
    },
    {
        path: '/videos',
        name: 'Test Screen for video',
        component: () => import('~/pages/video').then(m => m.default || m)
    },
    {
        path: '/article-page',
        name: 'Single Article Page',
        component: () => import('~/pages/article-page').then(m => m.default || m)
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
        path: '*',
        name: 'Not Found',
        component: () => import('~/pages/not-found').then(m => m.default || m)
    }
]
