
export default ({ app, router }) => {
    router.afterEach((to, from) => {
        app.$ga('set', 'page', to.fullPath)
        app.$ga('send', 'pageview')
    })
}
