export default [
    {
        path: '/',
        name: 'index',
        component: () => import('~/sites/cryptoreviews/ui/screens/home').then(m => m.default || m)
    }
]
