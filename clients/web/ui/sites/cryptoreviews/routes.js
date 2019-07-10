export default [
    {
        path: '/',
        name: 'Home',
        component: () => import('~/sites/cryptoreviews/ui/screens/home').then(m => m.default || m)
    },
    {
        path: '*',
        name: 'Not Found',
        component: () => import('~/pages/not-found').then(m => m.default || m)
    }
]
