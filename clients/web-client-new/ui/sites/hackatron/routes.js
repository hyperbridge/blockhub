export default [
    {
        path: '/',
        name: 'Home',
        component: (resolve) => require(['@/pages/home'], resolve)
    },
    {
        path: "*",
        name: 'Not Found',
        component: (resolve) => require(['@/pages/not-found'], resolve)
    }
]