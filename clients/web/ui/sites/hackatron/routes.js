export default [
    {
        path: '/',
        name: 'Home',
        component: () => import('~/pages/home').then(m => m.default)
    },
    {
        path: "*",
        name: 'Not Found',
        component: () => import('~/pages/not-found').then(m => m.default)
    }
]