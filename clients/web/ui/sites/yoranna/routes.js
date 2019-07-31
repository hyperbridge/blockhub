export default [
    {
        path: '/',
        name: 'Home',
        component: () => import('~/sites/yoranna/ui/screens/home').then(m => m.default)
    },
    {
        path: '*',
        name: 'Not Found',
        component: () => import('~/pages/not-found').then(m => m.default)
    }
]

/* Routes

/ Home
/learn Learn More
/team Team
/apply Apply
/shop Shop
/community Community


*/
