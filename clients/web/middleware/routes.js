
export default function (req, res, next) {
    this.nuxt.hook('build:extendRoutes', routes => {
        return
        // routes here is an array of nuxts internal route objects.
        // On routes[x].path we find paths like '/', '/posts' etc and this is the information we're after
        console.log('dddd', routes)
        routes.push({
            path: '/',
            name: 'index',
            component: () => import('~/sites/cryptoreviews/ui/screens/home').then(m => m.default || m)
        })
        console.log('dddd', routes)
    }
}