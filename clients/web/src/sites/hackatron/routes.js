export default [
    {
        path: '/',
        name: 'Home',
        component: (resolve) => require(['@/ui/screens/home'], resolve)
    },
    {
        path: "*",
        name: 'Not Found',
        component: (resolve) => require(['@/ui/screens/not-found'], resolve)
    }
]