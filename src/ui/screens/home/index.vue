<template>
    <c-layout navigationKey="store">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 mb-4">
                        <c-banner :imgSrc="'/static/img/banners/banner-3.png'" link="/#/token">
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <h3 class="text-yellow">Launch Sale</h3>
                                    <p>BlockHub will begin selling the HBX token on November 10, 2018</p>
                                </div>
                                <div class="banner-action">
                                    <c-button tag="div" tatus="info" icon_hide size="lg" href="/#/token">JOIN NOW</c-button>
                                </div>
                            </div>
                        </c-banner>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12 mb-4" v-if="!desktop_mode">
                        <c-welcome-box />
                    </div>
                    <div class="col-12 mb-4" v-if="showPreviewPanel">
                        <div class="card invert">
                            <div class="card-body">
                                <h4>Play around with the future of BlockHub:</h4>
                                <div>
                                    <c-button @click="toggleDesktopMode()">Desktop Mode {{ desktop_mode ? 'ON' : 'OFF' }}</c-button>
                                    <c-button @click="rotateOperatingSystem()">Operating System {{ operating_system === 'mac' ? 'MAC' : (operating_system === 'windows' ? 'WINDOWS' : 'LINUX' ) }}</c-button>
                                    <c-button @click="rotateEnvironmentMode()">Environment Mode {{ environment_mode.toUpperCase() }}</c-button>
                                    <c-button @click="toggleSignedIn()">Signed {{ signed_in ? 'IN' : 'OUT' }}</c-button>
                                    <c-button @click="$store.state.application.account.is_verified = !$store.state.application.account.is_verified">Account {{ $store.state.application.account.is_verified ? 'VERIFIED' : 'NOT VERIFIED' }}</c-button>
                                    <c-button @click="toggleDeveloperMode()">Developer Mode {{ developer_mode ? 'ON' : 'OFF' }}</c-button>
                                    <c-button @click="rotateEditorMode()">Editor Mode {{ $store.state.application.editor_mode.toUpperCase() }}</c-button>
                                    <c-button @click="toggleSimulator()">Simulator {{ simulator_mode ? 'ON' : 'OFF' }}</c-button>
                                    <br /><br />
                                </div>
                                <div>
                                    <c-button @click="importSeedData()">Import Seed Data</c-button>
                                    <c-button @click="resetSeedData()">Reset Seed Data</c-button>
                                    <br /><br />
                                </div>
                                <div>
                                    <c-button @click="$store.state.application.connection.auto = !$store.state.application.connection.auto">Auto Connect is {{ $store.state.application.connection.auto ? 'ON' : 'OFF' }}</c-button>
                                    <c-button @click="$store.state.application.connection.internet = !$store.state.application.connection.internet">Internet is {{ $store.state.application.connection.internet ? 'CONNECTED' : 'DISCONNECTED' }}</c-button>
                                    <c-button @click="$store.state.application.connection.datasource = !$store.state.application.connection.datasource">Datasource is {{ $store.state.application.connection.datasource ? 'CONNECTED' : 'DISCONNECTED' }}</c-button>
                                    <c-button @click="$store.state.application.connection.operator = !$store.state.application.connection.operator" v-if="desktop_mode">Operator is {{ $store.state.application.connection.operator ? 'CONNECTED' : 'DISCONNECTED' }}</c-button>
                                    <c-button @click="$store.state.application.connection.ethereum = !$store.state.application.connection.ethereum" v-if="desktop_mode">Ethereum is {{ $store.state.application.connection.ethereum ? 'CONNECTED' : 'DISCONNECTED' }}</c-button>
                                    <br /><br />
                                </div>
                                <div>
                                    <c-button @click="saveSettings()">Save Settings</c-button>
                                    <c-button @click="resetSettings()">Reset Settings</c-button>
                                    <br /><br />
                                </div>
                                <div v-if="desktop_mode">
                                    <input ref="desktopMessage" type="text" />
                                    <c-button @click="sendDesktopMessage()">Send Message To Desktop</c-button>
                                </div>
                                <div v-if="developer_mode">
                                    <h4>Darklaunch Manager</h4>
                                    <select id="darklaunch-editor" class="form-control" multiple="multiple">
                                        <option v-for="(flag, index) in $store.state.application.darklaunch_flags"
                                            :key="index"
                                            :selected="$store.state.application.account.darklaunch_flags.map(flag => flag.enabled ? flag.code : null).includes(flag.code)"
                                        >
                                            {{ flag.code }} - {{ flag.description }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <c-infinite-content :list="list" />
            </div>

            <c-custom-modal title="BlockHub Preview" v-if="showWelcomeModal" @close="closeModal">
                <div class="help-modal__content" slot="modal_body" style="max-width: 500px">
                    <h4 class="h2 mb-3">Welcome</h4>
                    <p>Welcome to the the nightly BlockHub Preview Build. All features are enabled, with or without bugs. Gotta catch 'em all! 🐛</p>
                    <p>These features are still in active development, and may not functional properly and may not make it into production.</p>
                    <p>Enjoy your stay, and send us your feedback!</p>
                    <p hidden>We're a platform built by the community, for the community.</p>
                    <p hidden><a href="/#/help" target="_blank">Check out the BlockHub crowdfund</a></p>
                </div>
                <div slot="modal_footer" class="text-right w-100">
                    <c-button size="md" @click="closeModal">Got it</c-button>
                </div>
            </c-custom-modal>
    </c-layout>
</template>


<script>
import { mapGetters } from 'vuex'


const updateLandingImage = function() {
    const frontpage_product = this.$store.state.marketplace.frontpage_product

    if (frontpage_product && frontpage_product.images) {
        const header = window.document.getElementById('header-bg');
        const randomImage = Math.floor(Math.random() * frontpage_product.images.preview.length);
        header.style['background-image'] = 'url(' + frontpage_product.images.preview[randomImage] + ')';
        header.style['background-size'] = 'cover';
    }
}

export default {
    components: {
        'c-banner': (resolve) => require(['@/ui/components/banner/simple'], resolve),
        'c-custom-modal': (resolve) => require(['@/ui/components/modal/custom'], resolve),
        'c-download-block': (resolve) => require(['@/ui/components/download-block'], resolve),
        'c-welcome-box': (resolve) => require(['@/ui/components/welcome-box'], resolve)
    },
    data() {
        return {
            showWelcomeModal: this.$store.state.application.environment_mode === 'preview',
            showPreviewPanel: ['preview', 'staging', 'local'].includes(this.$store.state.application.environment_mode)
        }
    },
    computed: {
        ...mapGetters({
            assets: 'marketplace/assetsArray'
        }),
        list() {
            const result = []

            if (this.$store.state.marketplace.frontpage_product && this.$store.state.marketplace.frontpage_product.id) {
                result.push({
                    type: 'frontpage_product',
                    data: this.$store.state.marketplace.frontpage_product
                })
            }
            if ( this.$store.state.marketplace.featured_products.length ) {
                result.push({
                    type: 'featured_product_gallery',
                    data: {
                        title: 'Featured',
                        ref: 'featured_product_gallery_sl',
                        swiper: this.$refs.featured_product_gallery_sl && this.$refs.featured_product_gallery_sl.swiper,
                        products: this.$store.state.marketplace.featured_products,
                        slides:[
                            {
                                image:  {
                                    src:  this.$store.state.marketplace.featured_products[0].images.preview[0],
                                    position: 'center'
                                },
                                logo: {
                                    src:  this.$store.state.marketplace.featured_products[0].images.icon,
                                    position: 'left bottom',
                                    size: 'lg',
                                },
                                title:  this.$store.state.marketplace.featured_products[0].name,
                                buttonText: 'Check it out',
                                id:  this.$store.state.marketplace.featured_products[0].id
                            },
                            {
                                image:  {
                                    src:  this.$store.state.marketplace.featured_products[1].images.preview[0],
                                    position: 'center'
                                },
                                logo: {
                                    src:  this.$store.state.marketplace.featured_products[1].images.icon,
                                    position: 'left bottom',
                                    size: 'lg',
                                },
                                title:  this.$store.state.marketplace.featured_products[1].name,
                                buttonText: 'Check it out',
                                id:  this.$store.state.marketplace.featured_products[1].id
                            },
                            {
                                image:  {
                                    src:  this.$store.state.marketplace.featured_products[2].images.preview[0],
                                    position: 'center'
                                },
                                logo: {
                                    src:  this.$store.state.marketplace.featured_products[2].images.icon,
                                    position: 'left bottom',
                                    size: 'lg',
                                },
                                title:  this.$store.state.marketplace.featured_products[2].name,
                                buttonText: 'Check it out',
                                id:  this.$store.state.marketplace.featured_products[2].id
                            }
                        ]
                    }
                })
            }

            result.push({
                type: 'collections_list',
                data: {
                    collections_list: this.$store.state.marketplace.collections,
                    ref: 'collections_sl',
                    swiper: this.$refs.collections_sl && this.$refs.collections_sl.swiper,
                }
            })

            result.push({
                type: 'product_slider',
                data: {
                    title: 'New Releases',
                    slidesPerView: 3,
                    products: this.$store.state.marketplace.new_products
                }
            })

            result.push({
                type: 'banners',
                data: {
                    banners: [
                        {
                            type: 3,
                            class: 'col-12 col-md-7 col-lg-8',
                            image: '/static/img/banners/banner-3.png',
                            title: 'Item Marketplace',
                            subtitle: 'All-in-one spot for games assets',
                            buttonText: 'GAME ON',
                            link: '/#/marketplace'
                        },
                        {
                            type: 4,
                            class: 'col-12 col-md-5 col-lg-7',
                            image: '/static/img/banners/banner-4.png',
                            title: 'Top Collections',
                            subtitle: 'Our community has curated the best ones for you',
                            link: '/#/collections'
                        },
                    ]
                }
            })

            result.push({
                type: 'games_explorer',
                data: {}
            })

            result.push({
                type: 'product_slider',
                data: {
                    title: 'Summer Sale',
                    slidesPerView: 3,
                    products: this.$store.state.marketplace.sale_products
                }
            })

            result.push({
                type: 'asset_grid',
                data: {
                    assets: this.assets
                }
            })

            result.push({
                type: 'curator_reviews',
                data: {
                    title: 'From our curators',
                    ref: 'curator_reviews_sl',
                    swiper: this.$refs.curator_reviews_sl && this.$refs.curator_reviews_sl.swiper,
                    options: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                        breakpoints: {
                            768: {
                                slidesPerView: 1,
                                spaceBetween: 0
                            },
                        }
                    },
                    reviews: this.$store.state.marketplace.curator_reviews
                }
            })

            const groupBy = function(xs, key) {
                return xs.reduce(function(rv, x) {
                    if (!x[key]) return rv;
                    (rv[x[key]] = rv[x[key]] || []).push(x);
                    return rv;
                }, {}) || null;
            };
            
            result.push({
                type: 'product_news',
                data: {
                    headings: Object.values(groupBy(this.$store.state.marketplace.posts, 'target_id')).map(post => {
                        if (post[0].target_type === 'product') {
                            const target = this.$store.state.marketplace.products[post[0].target_id]

                            return {
                                image: target.images.medium_tile,
                                title: target.name,
                                developer: target.developer
                            }
                        } else {
                            return undefined
                        }
                    }),
                    lists: Object.values(groupBy(this.$store.state.marketplace.posts, 'target_id'))
                }
            })

            result.push({
                type: 'trending_projects_row',
                data: {
                    title: 'Trending Crowdfunds',
                    options: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                        breakpoints: {
                            768: {
                                slidesPerView: 1,
                                spaceBetween: 0
                            },
                        }
                    },
                    projects: this.$store.state.funding.trending_projects
                }
            })

            result.push({
                type: 'game_series',
                data: {
                    list: this.$store.state.marketplace.game_series,
                    showNumber: 3
                }
            })

            return result
        },
        // products() {
        //     if (this.$store.state.cache.screens['/store'] && this.$store.state.cache.screens['/store'].products)
        //         return this.$store.state.cache.screens['/store'].products

        //     return this.$store.state.marketplace.products
        // },
        signed_in() {
            return this.$store.state.application.signed_in
        },
        simulator_mode() {
            return this.$store.state.application.simulator_mode
        },
        desktop_mode() {
            return this.$store.state.application.desktop_mode
        },
        developer_mode() {
            return this.$store.state.application.developer_mode
        },
        operating_system() {
            return this.$store.state.application.operating_system
        },
        environment_mode() {
            return this.$store.state.application.environment_mode
        }
    },
    methods: {
        toggleDesktopMode() {
            this.$store.state.application.desktop_mode = !this.$store.state.application.desktop_mode
        },
        toggleSignedIn() {
            this.$store.state.application.signed_in = !this.$store.state.application.signed_in
        },
        toggleDeveloper() {
            this.$store.state.application.is_developer = !this.$store.state.application.is_developer
        },
        toggleDeveloperMode() {
            this.$store.state.application.developer_mode = !this.$store.state.application.developer_mode
        },
        toggleSimulator() {
            this.$store.commit('application/setSimulatorMode', !this.$store.state.application.simulator_mode)
        },
        rotateEditorMode() {
            if (this.$store.state.application.editor_mode === 'editing') {
                this.$store.state.application.editor_mode = 'viewing'
            } else if (this.$store.state.application.editor_mode === 'viewing') {
                this.$store.state.application.editor_mode = 'publishing'
            } else {
                this.$store.state.application.editor_mode = 'editing'
            }
        },
        rotateOperatingSystem() {
            if (this.$store.state.application.operating_system === 'mac') {
                this.$store.state.application.operating_system = 'windows'
            } else if (this.$store.state.application.operating_system === 'windows') {
                this.$store.state.application.operating_system = 'linux'
            } else {
                this.$store.state.application.operating_system = 'mac'
            }
        },
        rotateEnvironmentMode() {
            if (this.$store.state.application.environment_mode === 'production') {
                this.$store.state.application.environment_mode = 'staging'
            } else if (this.$store.state.application.environment_mode === 'staging') {
                this.$store.state.application.environment_mode = 'beta'
            } else if (this.$store.state.application.environment_mode === 'beta') {
                this.$store.state.application.environment_mode = 'preview'
            } else if (this.$store.state.application.environment_mode === 'preview') {
                this.$store.state.application.environment_mode = 'local'
            } else {
                this.$store.state.application.environment_mode = 'production'
            }
        },
        importSeedData() {
            window.BlockHub.importSeedData()
        },
        resetSeedData() {
            window.BlockHub.resetSeedData()
        },
        saveSettings() {
            window.BlockHub.saveDatabase()
        },
        resetSettings() {
            window.resetSettings()
        },
        closeModal() {
            this.showWelcomeModal = false
        },
        sendDesktopMessage() {
            if (!window.isElectron) {
                return alert('Not on desktop')
            }

            BlockHub.Bridge.sendCommand('ping', this.$refs.desktopMessage.value)
            BlockHub.Bridge.on('pong', (event, msg) => console.log('Message from desktop: ', msg) )
        }
    },
    mounted() {
        updateLandingImage.call(this)
    },
    created() {
        updateLandingImage.call(this)
    },
    beforeDestroy() {
        window.document.getElementById('header-bg').style['background-image'] = 'url(/static/img/backgrounds/1.jpg)'
    }
}
</script>


<style lang="scss">
    /*Crutch to work OWL fine*/
    /*Fixing content and OWL width*/
    .page__content > .content {
        width: calc(100% - 500px);
    }

    /**/
    /**/
    .main-banner {
        padding: 10px;
        border-radius: 5px;
        background: rgba(0, 0, 0, .1);
    }

</style>
