const pkg = require('./package')


module.exports = {
  mode: 'universal',
  dev: process.env.NODE_ENV !== 'production',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  srcDir: 'ui',

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
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

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    './modules/init'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    vendor: [
    ],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
    extractCSS: {
      allChunks: true
    }
  }
}
