<template>
    <!-- PAGE WRAPPER -->
    <div class="page page--w-header page--w-container">
        <!-- PAGE HEADER -->
        <transition name="slideDown" v-if="initialized">
            <c-header :isLoader="loadingState"/>
        </transition>
        <!-- //END PAGE HEADER -->

        <!-- PAGE CONTENT WRAPPER -->
        <div class="page__content page__content-invert invert" id="page-content">
            <!-- PAGE ASIDE PANEL -->
                <div class="page-aside invert left-sidebar" id="page-aside">
                    <transition name="slideLeft" v-if="initialized">
                        <component v-if="navigationComponent" v-bind:is="`c-${navigationComponent}`"></component>
                    </transition>
                </div>
            <!-- //END PAGE ASIDE PANEL -->

            <slot v-if="is_connected"></slot>

            <div class="content" id="content" v-if="!is_connected">
                <div class="loader-block loading loading--w-spinner" v-if="!is_connected">
                    <div class="loader-block__container">
                        <div>
                            <div class="loading-spinner"></div>
                            <p class="loader-block__message">{{ user_submitted_connection_message.message }}</p>
                            <p class="loader-block__user">Submitted by <a
                                :href="`/#/identity/${user_submitted_connection_message.user.id}`">@{{
                                user_submitted_connection_message.user.name }}</a></p>
                        </div>

                        <h1 class="loader-block__status-code" v-if="connection_status.code">ERROR {{
                            connection_status.code }}</h1>

                        <div class="loader-block__status-message">
                            <p>{{ connection_status.message }}</p>
                            <div>Internet Connection <span class="fa"
                                                           :class="{'fa-check-circle': $store.state.network.connection.internet, 'fa-times-circle': !$store.state.network.connection.internet }"></span>
                            </div>
                            <div>Server Connection <span class="fa"
                                                         :class="{'fa-check-circle': $store.state.network.connection.datasource, 'fa-times-circle': !$store.state.network.connection.datasource }"></span>
                            </div>
                        </div>

                        <div class="loader-block__links">
                            <p>Connection problems? Let us know!</p>
                            <a href="https://twitter.com/hyperbridge"><span class="fab fa-twitter"></span> Tweet Us</a>
                            <a href="https://hyperbridge.org/status"><span class="fas fa-globe-americas"></span> Server
                                Status</a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- SIDEPANEL -->
            <transition name="slideRight" v-if="initialized">
                <c-sidepanel>
                <c-swiper :options="panelOption" ref="mySwiper">
                    <c-slide v-if="desktop_mode">
                        <div class="item">
                            <h3>NOTIFICATION</h3>

                            <div class="slide-chooser">
                                <c-button status="plain" icon-hide @click="showSlide('notification')" class="active"
                                          v-if="desktop_mode">
                                    <i class="fa fa-bell"/>
                                </c-button>
                                <c-button status="plain" icon-hide @click="showSlide('messages')"
                                          style="box-shadow: none" v-if="desktop_mode">
                                    <i class="fa fa-envelope"/>
                                </c-button>
                                <c-button status="plain" icon-hide @click="showSlide('updates')"
                                          style="box-shadow: none" v-if="desktop_mode">
                                    <i class="fa fa-star"/>
                                </c-button>
                                <c-button status="plain" icon-hide @click="showSlide('top_lists')"
                                          style="box-shadow: none">
                                    <i class="fa fa-trophy"/>
                                </c-button>
                            </div>

                            <div class="navigation">
                                <div v-if="notifs.length > 0">
                                    <c-notification v-for="(notif, index) in notifs" @showPopup="showNotifPopup(notif)"
                                                    :key="index" :notification="notif"/>
                                </div>
                                <div v-else>All clear. Good work!</div>
                            </div>

                        </div>
                    </c-slide>
                    <c-slide v-if="desktop_mode">
                        <div class="item">
                            <h3>MESSAGES</h3>

                            <div class="slide-chooser">
                                <c-button status="plain" icon-hide @click="showSlide('notification')"
                                          style="box-shadow: none" v-if="desktop_mode">
                                    <i class="fa fa-bell"/>
                                </c-button>
                                <c-button status="plain" icon-hide @click="showSlide('messages')" class="active"
                                          v-if="desktop_mode">
                                    <i class="fa fa-envelope"/>
                                </c-button>
                                <c-button status="plain" icon-hide @click="showSlide('updates')"
                                          style="box-shadow: none" v-if="desktop_mode">
                                    <i class="fa fa-star"/>
                                </c-button>
                                <c-button status="plain" icon-hide @click="showSlide('top_lists')"
                                          style="box-shadow: none">
                                    <i class="fa fa-trophy"/>
                                </c-button>
                            </div>

                            <div class="navigation">
                                <div class="messages-action">
                                    <a href="#3" class="btn">Quick Send</a>
                                    <a href="#3" class="btn">Go to Messages</a>
                                </div>
                                <ul class="message-list">
                                    <li class="message-list__item">
                                        <i class="fas fa-reply"></i>
                                        <h5>Username, 2 days ago:</h5>
                                        <p>Maybe I ought to crank Morley Safer's poutine,
                                            eh, that should to start them up.</p>
                                    </li>
                                    <li class="message-list__item">
                                        <i class="fas fa-reply"></i>
                                        <h5>Username, 2 days ago:</h5>
                                        <p>Maybe I ought to crank Morley Safer's poutine,
                                            eh, that should to start them up.</p>
                                    </li>
                                    <li class="message-list__item">
                                        <i class="fas fa-reply"></i>
                                        <h5>Username, 2 days ago:</h5>
                                        <p>Maybe I ought to crank Morley Safer's poutine,
                                            eh, that should to start them up.</p>
                                    </li>
                                    <li class="message-list__item">
                                        <i class="fas fa-reply"></i>
                                        <h5>Username, 2 days ago:</h5>
                                        <p>Maybe I ought to crank Morley Safer's poutine,
                                            eh, that should to start them up.</p>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </c-slide>
                    <c-slide v-if="desktop_mode">
                        <div class="item">
                            <h3>UPDATES</h3>

                            <div class="slide-chooser">
                                <c-button status="plain" icon-hide @click="showSlide('notification')"
                                          style="box-shadow: none" v-if="desktop_mode">
                                    <i class="fa fa-bell"/>
                                </c-button>
                                <c-button status="plain" icon-hide @click="showSlide('messages')"
                                          style="box-shadow: none" v-if="desktop_mode">
                                    <i class="fa fa-envelope"/>
                                </c-button>
                                <c-button status="plain" icon-hide @click="showSlide('updates')" class="active"
                                          v-if="desktop_mode">
                                    <i class="fa fa-star"/>
                                </c-button>
                                <c-button status="plain" icon-hide @click="showSlide('top_lists')"
                                          style="box-shadow: none">
                                    <i class="fa fa-trophy"/>
                                </c-button>
                            </div>

                            <div class="navigation">
                                <ul>
                                    <li class="title">TOP 5</li>
                                    <li>
                                        <a href="/#/product/1">
                                            <span class="text">BlockHub v1.0.15</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/#/product/1">
                                            <span class="text">With the last update, we bring lorem ipsum dolor sit amet and check the changelog.</span>
                                        </a>
                                    </li>
                                    <li>
                                        <br/>
                                        <button class="btn btn-outline-info btn-sm"
                                                style="color: #fff;border: 2px solid #fff;"><span
                                            class="icon fa fa-sync"/> Relaunch
                                        </button>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </c-slide>
                    <c-slide>
                        <div class="item">
                            <h3>TOP LISTS</h3>

                            <div class="slide-chooser">
                                <c-button status="plain" icon-hide @click="showSlide('notification')"
                                          style="box-shadow: none" v-if="desktop_mode">
                                    <i class="fa fa-bell"/>
                                </c-button>
                                <c-button status="plain" icon-hide @click="showSlide('messages')"
                                          style="box-shadow: none" v-if="desktop_mode">
                                    <i class="fa fa-envelope"/>
                                </c-button>
                                <c-button status="plain" icon-hide @click="showSlide('updates')"
                                          style="box-shadow: none" v-if="desktop_mode">
                                    <i class="fa fa-star"/>
                                </c-button>
                                <c-button status="plain" icon-hide @click="showSlide('top_lists')" class="active">
                                    <i class="fa fa-trophy"/>
                                </c-button>
                            </div>

                            <div class="navigation">
                                <ul>
                                    <li class="title">TOP 5</li>
                                    <li>
                                        <a href="/#/product/1">
                                            <span class="text">Joe's Adventure</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/#/product/1">
                                            <span class="text">The Mission</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/#/product/1">
                                            <span class="text">Gym with Tim</span>
                                        </a>
                                    </li>
                                    <li class="more">
                                        <a href="/#/">
                                            <span class="text">MORE...</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="navigation">
                                <ul>
                                    <li class="title">TOP FREE</li>
                                    <li>
                                        <a href="/#/product/1">
                                            <span class="text">Joe's Adventure</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/#/product/1">
                                            <span class="text">The Mission</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/#/product/1">
                                            <span class="text">Gym with Tim</span>
                                        </a>
                                    </li>
                                    <li class="more">
                                        <a href="/#/">
                                            <span class="text">MORE...</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="navigation">
                                <ul>
                                    <li class="title">TOP RATED</li>
                                    <li>
                                        <a href="/#/product/1">
                                            <span class="text">Joe's Adventure</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/#/product/1">
                                            <span class="text">The Mission</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/#/product/1">
                                            <span class="text">Gym with Tim</span>
                                        </a>
                                    </li>
                                    <li class="more">
                                        <a href="/#/">
                                            <span class="text">MORE...</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </c-slide>
                </c-swiper>
            </c-sidepanel>
            </transition>
            <!-- //END SIDEPANEL -->

            <div class="status-bar" hidden>
                {{ connection_status.message }}
            </div>

            <c-unlock-popup :activated="unlock_modal_active" @close="closePopup" ref="unlock_modal_active"></c-unlock-popup>
            <c-send-funds-popup :activated="send_funds_modal_active" @close="closePopup" ref="send_funds_modal_active"></c-send-funds-popup>
            <c-login-popup :activated="login_modal_active" @close="closePopup" ref="login_modal_active"></c-login-popup>
            <c-purchase-popup :activated="purchase_modal_active" @close="closePopup" ref="purchase_modal_active"></c-purchase-popup>

            <c-popup :activated="notifPopup.show_popup"
                     :title="notifPopup.title"
                     :type="notifPopup.type"
                     :sub_title="notifPopup.text"
                     @close="closeNotifPopup"
                     v-if="notifPopup"
                     ref="notifpopup">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ligula elit. Praesent sit amet tellus
                    malesuada, condimentum sem ut, laoreet ex. Maecenas elementum, velit eu porta lobortis, est nunc
                    vehicula neque, id sodales urna purus eget purus. Nam vel orci turpis. Duis vestibulum ac nibh vel
                    vehicula.
                </p>
            </c-popup>

            <c-cookie-policy v-if="!desktop_mode" />
        </div>
        <!-- //END PAGE CONTENT -->

    </div>
    <!-- //END PAGE WRAPPER -->
</template>


<script>
    import 'swiper/dist/css/swiper.css'

    import {swiper, swiperSlide} from 'vue-awesome-swiper'

    export default {
        props: [
            'navigationKey'
        ],
        components: {
            'c-header': (resolve) => require(['@/ui/components/headers/basic'], resolve),
            'c-popup': (resolve) => require(['@/ui/components/popups'], resolve),
            'c-wallet-navigation': (resolve) => require(['@/ui/components/navigation/wallet'], resolve),
            'c-account-navigation': (resolve) => require(['@/ui/components/navigation/account'], resolve),
            'c-settings-navigation': (resolve) => require(['@/ui/components/navigation/settings'], resolve),
            'c-help-navigation': (resolve) => require(['@/ui/components/navigation/help'], resolve),
            'c-funding-navigation': (resolve) => require(['@/ui/components/navigation/funding'], resolve),
            'c-store-navigation': (resolve) => require(['@/ui/components/navigation/store'], resolve),
            'c-asset-navigation': (resolve) => require(['@/ui/components/navigation/asset'], resolve),
            'c-product-navigation': (resolve) => require(['@/ui/components/navigation/product'], resolve),
            'c-project-navigation': (resolve) => require(['@/ui/components/navigation/project'], resolve),
            'c-notification': (resolve) => require(['@/ui/components/notification/index.vue'], resolve),
            'c-unlock-popup': (resolve) => require(['@/ui/components/unlock-popup/index.vue'], resolve),
            'c-login-popup': (resolve) => require(['@/ui/components/login-popup/index.vue'], resolve),
            'c-send-funds-popup': (resolve) => require(['@/ui/components/send-funds-popup/index.vue'], resolve),
            'c-purchase-popup': (resolve) => require(['@/ui/components/purchase-popup/index.vue'], resolve),
            'c-sidepanel': (resolve) => require(['@/ui/components/sidepanel'], resolve),
            'c-cookie-policy': (resolve) => require(['@/ui/components/cookie-policy'], resolve),
            'c-swiper': swiper,
            'c-slide': swiperSlide
        },
        computed: {
            is_connected() {
                return this.$store.state.network.connection.internet && this.$store.state.network.connection.datasource
            },
            connection_status() {
                return this.$store.state.network.connection.status
            },
            user_submitted_connection_message() {
                return this.$store.state.network.user_submitted_connection_messages[0]
            },
            swiper() {
                return this.$refs.mySwiper.swiper
            },
            unlock_modal_active() {
                return this.$store.state.network.active_modal === 'unlock'
            },
            send_funds_modal_active() {
                return this.$store.state.network.active_modal === 'send-funds'
            },
            login_modal_active() {
                return this.$store.state.network.active_modal === 'login'
            },
            purchase_modal_active() {
                return this.$store.state.network.active_modal === 'purchase'
            },
            notifs() {
                return this.$store.state.network.account.notifications
            },
            desktop_mode() {
                return this.$store.state.marketplace.desktop_mode
            }
        },
        data() {
            return {
                navigationComponent: this.navigationKey || false,
                loadingState: true,
                initialized: BlockHub.initialized,
                panelOption: {
                    spaceBetween: 10,
                    loop: false,
                },
                notifPopup: {}
            }
        },
        updated() {
        },
        methods: {
            showSlide(sl) {
                switch (sl) {
                    case 'notification':
                        this.swiper.slideTo(0, 1000, false);
                        break;
                    case 'messages':
                        this.$el.classList.add("active");
                        this.swiper.slideTo(1, 1000, false);
                        break;
                    case 'updates':
                        this.$el.classList.add("active");
                        this.swiper.slideTo(2, 1000, false);
                        break;
                    case 'top_lists':
                        this.$el.classList.add("active");
                        this.swiper.slideTo(3, 1000, false);
                        break;
                }

            },
            closePopup() {
                this.$store.state.network.active_modal = null
            },
            closeNotifPopup() {
                this.notifPopup = {};
            },
            showNotifPopup(ntf) {
                this.notifPopup = ntf;
                this.notifPopup.show_popup = true;
                console.log(this.notifPopup)
            }
        },
        mounted: function () {
            this.$nextTick(() => {
                this.loadingState = false
                setTimeout(() => {
                    document.getElementById('startup-loader').style.display = 'none'

                    this.initialized = BlockHub.initialized = true
                }, 3000) // TODO: remove arbitrary delay
            })
        }
    }
</script>

<style lang="scss">

    .owl-controls {
        display: none !important;
    }

    .owl-carousel .owl-stage {
        transition: unset !important;
    }

</style>

<style lang="scss" scoped>
    [v-cloak] {
        display: none;
    }

    .page-sidepanel {
        text-align: right;
        padding-right: 30px;
    }

    .navigation {
        margin-bottom: 50px;
    }

    .navigation .text {
        float: right;
    }

    .slide-chooser {
        margin-bottom: 10px;

        .c-btn {
            background: transparent;
            opacity: 0.5;
            color: #fff;
            padding: 6px 6px;

            &.active {
                opacity: 1;
            }

            &:hover {
                background: transparent;
                opacity: 1;
            }

            span {
                font-size: 16px;
            }
        }
    }

    .status-bar {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 10px;
        background: #48171D;
        border-top: 2px solid #48171D;
        color: #fff;
    }

    .loader-block .loader-block__container {
        width: 100%;
        height: 100%;
        position: relative;
        text-align: center;
        padding-top: 100px;
        font-size: 14px;
    }

    .loader-block .loading-spinner {
        position: relative;
        zoom: 4;
        margin: 0 auto;
    }

    .loader-block__message {
        color: #fff;
        font-size: 20px;
        font-style: italic;
        text-transform: uppercase;
        margin-top: 40px;
    }

    .loader-block__user {
        color: #999;
        text-transform: uppercase;

        a {
            color: #ddd;
            font-weight: bold;
        }
    }

    .loader-block__status-code {
        margin-top: 80px;
    }

    .loader-block__status-message {
        color: #ddd;
        font-size: 16px;
        margin-top: 30px;

        p {
            text-transform: uppercase;
            margin-bottom: 20px;
        }

        div {
            margin: 5px 0;
        }
    }

    .loader-block__links {
        position: absolute;
        bottom: 30px;
        left: 0;
        text-align: center;
        width: 100%;
        font-size: 16px;

        p {
            color: #999;
        }

        a {
            margin-right: 20px;
            font-size: 18px;
            font-weight: bold;

            span {
                color: #fff;
                margin-right: 5px;
            }
        }
    }

    .messages-action {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        a {
            padding: 3px;
            background: #5D75F7;
            border-radius: 3px;
            color: #fff;
            font-size: 14px;
            &:hover {
                background: #5065d4;
            }
        }
    }

    .message-list__item {
        background: rgba(0, 0, 0, .5);
        border-radius: 5px;
        padding: 6px;
        color: #fff;
        text-align: left;
        position: relative;
        margin-bottom: 10px;
        &:last-child {
            margin-bottom: 0;
        }
        h5 {
            max-width: calc(100% - 20px);
        }
        i {
            position: absolute;
            top: 6px;
            right: 6px;
            font-size: 16px;
            color: #fff;
        }
    }

    .page .page__content {
        padding-top: 100px;
        position: relative;
        .page-aside,
        .page-sidepanel {
            top: 100px;
        }
    }

    .left-sidebar {
        overflow-x: auto;
        height: calc(100% - 100px);
        padding-bottom: 20px;
    }
    .col-lg-6{
        @media (max-width: 1500px){
            flex: 0 0 100%;
            max-width: 100%;
        }
    }
</style>
