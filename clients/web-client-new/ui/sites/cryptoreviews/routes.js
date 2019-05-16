export default [
    {
        path: '/',
        name: 'Home',
        component: (resolve) => require(['@/sites/cryptoreviews/ui/screens/home'], resolve)
    },
    {
        path: "*",
        name: 'Not Found',
        component: (resolve) => require(['@/pages/not-found'], resolve)
    }
]