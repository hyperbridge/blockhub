export default [
    {
        path: '/',
        name: 'Home',
        component: (resolve) => require(['@/sites/yoranna/ui/screens/home'], resolve)
    },
    {
        path: "*",
        name: 'Not Found',
        component: (resolve) => require(['@/pages/not-found'], resolve)
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