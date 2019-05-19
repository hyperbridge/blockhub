import autoprefixer from 'autoprefixer';

export default {
    srcDir: 'ui',
    dev: process.env.NODE_ENV !== 'production',
    head: {
        title: 'blockhub-web-client',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'BlockHub Web Client' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    loading: { color: '#fff' },
    css: [],
    plugins: [
        { src: '~/plugins/vue-awesome-swiper', ssr: false },
        { src: '~/plugins/vue-country-flag', ssr: false },
        { src: '~/plugins/global-components' },
        { src: '~/plugins/filters' },
        { src: '~/plugins/directives' },
        { src: '~/plugins/general' },
        { src: '~/plugins/feathers' },
        { src: '~/plugins/pre-vendor.js', ssr: false },
        { src: '~/plugins/jquery', ssr: false },
        { src: '~/plugins/bootstrap', ssr: false },
        { src: '~/plugins/summernote', ssr: false },
        { src: '~/plugins/moment', ssr: false },
        { src: '~/plugins/post-vendor.js', ssr: false },
    ],
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
        './modules/init'
    ],
    axios: {
        // See https://github.com/nuxt-community/axios-module#options
    },
    build: {
        extractCSS: true,
        postcss: {
            preset: {
                autoprefixer
            }
        },
        extend(config, { isDev }) {
            if (isDev) config.output.globalObject = 'this';
        }
    }
}
