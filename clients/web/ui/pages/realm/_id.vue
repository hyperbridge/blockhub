<template>
    <Layout :breadcrumbLinks="false">
        <div class="row page-header margin-bottom-30">
            <div class="col-10 col-md-3">
                <div class="logo">
                    <Img
                        class="img-fluid"
                        :src="realm.meta.images.logo" />
                </div>
            </div>
            <div class="col-12 col-md-3 mb-4 mb-md-0">
                <div class="widget--box">
                    <h3>Widget Title</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer gravida in dui tempus mattis. Class aptent taciti sociosqu ad
                        litora torquent per conubia nostra, per inceptos himenaeos.
                    </p>
                </div>
            </div>
            <div class="col--12 col-md-3 mb-4 mb-md-0">
                <div class="widget--box">
                    <h3>Widget Title</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer gravida in dui tempus mattis. Class aptent taciti sociosqu ad
                        litora torquent per conubia nostra, per inceptos himenaeos.
                    </p>
                </div>
            </div>
            <div class="col--12 col-md-3 mb-4 mb-md-0">
                <div class="widget--box">
                    <h3>Widget Title</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer gravida in dui tempus mattis. Class aptent taciti sociosqu ad
                        litora torquent per conubia nostra, per inceptos himenaeos.
                    </p>
                </div>
            </div>
            <div class="col-12">
                <ul class="nav">
                    <li class="nav-item active">
                        <nuxt-link
                            :to="`/realm/${realm.id}`"
                            class="nav-link">Home</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link
                            :to="`/realm/${realm.id}/news`"
                            class="nav-link">News</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link
                            :to="`/realm/${realm.id}/community`"
                            class="nav-link">Community</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link
                            :to="`/realm/${realm.id}/games`"
                            class="nav-link">Games</nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
        <nuxt-child :realm="realm" />
    </Layout>
</template>

<script>
function hexToRgb(hex) {
    const bigint = parseInt(hex, 16)
    const r = (bigint >> 16) & 255
    const g = (bigint >> 8) & 255
    const b = bigint & 255

    return `${r},${g},${b}`
}

export default {
    head() {
        return {
            title: `${this.realm.name}`,
            meta: [
                { hid: 'description', name: 'description', content: 'BlockHub realms are where you keep up with game studios' },
                { hid: 'keywords', name: 'keywords', content: 'realms, game studios, gaming, game, indie, developer' }
            ]
        }
    },
    components: {
        'HeadingBar': () => import('@ericmuyser/hyper-ui').then(m => m.HeadingBar),
        'SimpleGameGrid': () => import('@ericmuyser/hyper-ui').then(m => m.SimpleGameGrid),
        'GameGrid': () => import('@ericmuyser/hyper-ui').then(m => m.GameGrid),
        'FeaturedAssets': () => import('@ericmuyser/hyper-ui').then(m => m.FeaturedAssets)
    },
    data() {
        return {
            css: {
                bodyBgColor: null,
                headerBg: {},
                headerBgLayer1: {},
                headerBgLayer2: {}
            }
        }
    },
    computed: {
    },
    async asyncData({ params, store, error }) {
        const realm = (await store.dispatch('realms/find', {
            query: {
                id: Number(params.id)
            }
        })).data[0]

        if (!realm) return error({ statusCode: 404, message: 'Realm not found' })

        return {
            realm
        }
    },
    mounted() {
        this.$nextTick(() => {
            if (process.client) return

            this.css.bodyBgColor = document.body.style.backgroundColor
            this.css.headerBg = this.$('#header-bg')[0].style
            this.css.headerBgLayer1 = this.$('.header-bg__layer-1')[0].style
            this.css.headerBgLayer2 = this.$('.header-bg__layer-2')[0].style

            document.body.style.backgroundColor = this.realm.meta.theme.backgroundColor
            this.$('#header-bg').css({ 'background-image': `url(${this.realm.meta.images.background})`, 'background-size': this.realm.meta.theme.header.backgroundSize || 'cover' })
            this.$('.header-bg__layer-1').css({ 'background': `linear-gradient(to bottom, rgba(${hexToRgb(this.realm.meta.theme.backgroundColor.slice(1))}, 0.34) 0%, rgba(${hexToRgb(this.realm.meta.theme.backgroundColor.slice(1))}, 1) 100%)` })
            this.$('.header-bg__layer-2').css({ 'position': 'fixed', 'background': 'rgba(255, 255, 255, 0.2)', 'height': '48px' })
            this.$('.app-header__shadow').hide()
            this.$('#page-aside').hide()
        })
    },
    beforeDestroy() {
        if (process.client) return

        document.body.style.backgroundColor = this.css.bodyBgColor

        this.$('#header-bg')[0].style = this.css.headerBg
        this.$('.header-bg__layer-1')[0].style = this.css.headerBgLayer1
        this.$('.header-bg__layer-2')[0].style = this.css.headerBgLayer2
        this.$('.app-header__shadow').show()
        this.$('#page-aside').show()
    },
    created() {
        // this.$store.commit('application/activeModal', 'comingSoon')
    }
}
</script>

<style lang="scss" scoped>
    .page-header {
        .logo {
            img {
                max-width: 150px;
                @media (max-width: 767px) {
                    max-width: 300px;
                    margin-bottom: 30px;
                }
            }
        }
    }

    .nav {
        margin: 40px 0 20px;
        li {
            margin-right: 60px;
            a {
                font-size: 21px;
                color: #fff;
                opacity: .65;
                padding: 5px 0 5px 0;
            }
            &.active,
            &:hover {
                a {
                    opacity: 1;
                }
            }
        }
    }

</style>


