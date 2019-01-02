export default [
    {
        path: '/',
        name: 'Home',
        component: (resolve) => require(['@/projects/cryptoreviews/ui/screens/home'], resolve)
    },
    {
        path: "*",
        name: 'Not Found',
        component: (resolve) => require(['@/ui/screens/not-found'], resolve)
    }
]