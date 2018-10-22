<template>
    <!-- PAGE WRAPPER -->
    <div class="page page--w-header page--w-container" :class="{'page__with-left-sidebar': showLeftPanel, 'page__with-right-sidebar': showRightPanel }">
        <!-- PAGE HEADER -->
        <transition name="slideDown" v-if="initialized">
            <c-header :isLoader="loadingState" v-if="!slimMode" />
            <c-slim-header :isLoader="loadingState" v-if="slimMode" :title="headerText" />
        </transition>
        <!-- //END PAGE HEADER -->

        <!-- PAGE CONTENT WRAPPER -->
        <div class="page__content page__content-invert invert" id="page-content">
            <div class="loader-block" v-if="!is_connected">
                <div class="loader-block__container">
                    <div class="loader-block__spinner"></div>

                    <p class="loader-block__message">{{ user_submitted_connection_message.message }}</p>
                    <p class="loader-block__user">Submitted by <a
                        :href="`/#/identity/${user_submitted_connection_message.user.id}`">@{{ user_submitted_connection_message.user.name }}</a></p>

                    <h1 class="loader-block__status-code" v-if="connection_status.code">ERROR {{ connection_status.code }}</h1>

                    <div class="loader-block__status-message" v-if="connection_status.message">
                        <p hidden>{{ connection_status.message }}</p>
                        <div>Internet Connection <span class="fa"
                            :class="{'fa-check-circle': $store.state.application.connection.internet, 'fa-times-circle': !$store.state.application.connection.internet }"></span>
                        </div>
                        <div>Server Connection <span class="fa"
                            :class="{'fa-check-circle': $store.state.application.connection.datasource, 'fa-times-circle': !$store.state.application.connection.datasource }"></span>
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
            
            <!-- PAGE ASIDE PANEL -->
            <div class="page-aside invert left-sidebar" style="max-width: 250px" id="page-aside" v-if="showLeftPanel">
                <!--<transition name="slideLeft" v-if="initialized">-->
                <div class="left-sidebar__content" id="scroll_sidebar" ref="scroll_sidebar">
                    <component v-if="navigationComponent" v-bind:is="`c-${navigationComponent}-navigation`" ref="scroll_sidebar_content" :title="navigationTitle"></component>
                </div>
                <c-load-more @click="scrollSidebarDown" :fixed="true" v-if="scrollMoreDirection == 'down'">
                    <div class="load-more-slot">
                        More
                        <i class="fas fa-sort-down"></i>
                    </div>
                </c-load-more>
                <c-load-more @click="scrollSidebarUp" :fixed="true" v-if="scrollMoreDirection == 'up'">
                    <div class="load-more-slot">
                        <i class="fas fa-sort-up"></i>
                        Up
                    </div>
                </c-load-more>
                <!--</transition>-->
            </div>
            <!-- //END PAGE ASIDE PANEL -->

            <div class="content" :class="{'w-100': !showRightPanel && !showLeftPanel}" id="content">
                <c-breadcrumb :links="breadcrumbLinks" ref="breadcrumb" v-if="is_connected" />
                <div class="container-fluid">
                    <slot v-if="is_connected" />
                </div>
            </div>

            <!-- SIDEPANEL -->
            <transition name="slideRight" style="max-width: 250px" v-if="initialized && showRightPanel">
                <c-sidepanel>
                    <c-swiper :options="panelOption" ref="mySwiper">
                    <c-slide v-if="signed_in">
                        <div class="item">
                            <h3>NOTIFICATION</h3>

                            <div class="slide-chooser">
                                <c-button status="plain" icon-hide @click="showSlide('notification')" class="active"
                                          v-if="signed_in">
                                    <i class="fa fa-bell"/>
                                </c-button>
                                <c-button status="plain" icon-hide @click="showSlide('messages')"
                                          style="box-shadow: none" v-if="signed_in">
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
                    <c-slide v-if="signed_in">
                        <div class="item">
                            <h3>MESSAGES</h3>

                            <div class="slide-chooser">
                                <c-button status="plain" icon-hide @click="showSlide('notification')"
                                          style="box-shadow: none" v-if="signed_in">
                                    <i class="fa fa-bell"/>
                                </c-button>
                                <c-button status="plain" icon-hide @click="showSlide('messages')" class="active"
                                          v-if="signed_in">
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
                                    <!--<a href="#3" class="btn">Quick Send</a>-->
                                    <!--<a href="#3" class="btn">Go to Messages</a>-->
                                    <c-button status="info" icon="angle-double-right" size="sm">Quick Send</c-button>
                                    <c-button status="info" icon="envelope" size="sm">View All</c-button>
                                </div>
                                <div class="message-list">
                                    <c-message v-for="(msg, index) in messages" :key="index" :msg="msg" />
                                </div>
                            </div>

                        </div>
                    </c-slide>
                    <c-slide v-if="desktop_mode">
                        <div class="item">
                            <h3>UPDATES</h3>

                            <div class="slide-chooser">
                                <c-button status="plain" icon-hide @click="showSlide('notification')"
                                          style="box-shadow: none" v-if="signed_in">
                                    <i class="fa fa-bell"/>
                                </c-button>
                                <c-button status="plain" icon-hide @click="showSlide('messages')"
                                          style="box-shadow: none" v-if="signed_in">
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
                                    <template v-for="(update,  index) in updates">
                                        <li class="title" :key="`title-${index}`">
                                            <a :href="update.link">
                                                <span class="text">{{ update.title }}</span>
                                            </a>
                                        </li>
                                        <li :key="`info-${index}`">
                                            <span class="text">{{ update.info }}</span>
                                        </li>
                                    </template>
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
                    <c-slide v-if="this.navigationKey === 'store'">
                        <div class="item">
                            <h3>TOP LISTS</h3>

                            <div class="slide-chooser">
                                <c-button status="plain" icon-hide @click="showSlide('notification')"
                                          style="box-shadow: none" v-if="signed_in">
                                    <i class="fa fa-bell"/>
                                </c-button>
                                <c-button status="plain" icon-hide @click="showSlide('messages')"
                                          style="box-shadow: none" v-if="signed_in">
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
                                    <li v-for="(product, index) in $store.state.marketplace.top_5" :key="index">
                                        <a :href="`/#/product/${product.id}`">
                                            <span class="text">{{ product.name }}</span>
                                        </a>
                                    </li>
                                    <li class="more">
                                        <a href="/#/search">
                                            <span class="text">MORE...</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="navigation">
                                <ul>
                                    <li class="title">TOP FREE</li>
                                    <li v-for="(product, index) in $store.state.marketplace.top_free" :key="index">
                                        <a :href="`/#/product/${product.id}`">
                                            <span class="text">{{ product.name }}</span>
                                        </a>
                                    </li>
                                    <li class="more">
                                        <a href="/#/search">
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

            <c-welcome-popup :activated="welcome_modal_active" @close="closePopup" ref="welcome_modal_active"></c-welcome-popup>
            <c-download-popup :activated="download_modal_active" @close="closePopup" ref="download_modal_active"></c-download-popup>
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

            <c-clock v-if="desktop_mode" />

            <div class="version" v-if="desktop_mode">v{{ $store.state.application.version }}</div>
        </div>
        <!-- //END PAGE CONTENT -->

    </div>
    <!-- //END PAGE WRAPPER -->
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import { debouncer } from '@/mixins'

    import 'swiper/dist/css/swiper.css'

    export default {
        props: {
            navigationKey: {
                type: String,
                required: false
            },
            navigationTitle: {
                type: String,
                required: false
            },
            showLeftPanel: {
                type: Boolean,
                default: true,
                required: false
            },
            showRightPanel: {
                type: Boolean,
                default: true,
                required: false
            },
            headerText: {
                type: String,
                default: 'BlockHub',
                required: false
            },
            breadcrumbLinks: {
                type: Array,
                default: () => ([]),
                required: false
            }
        },
        mixins: [debouncer],
        components: {
            'c-header': (resolve) => require(['@/ui/components/headers/basic'], resolve),
            'c-slim-header': (resolve) => require(['@/ui/components/headers/slim'], resolve),
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
            'c-clock': (resolve) => require(['@/ui/components/clock/index.vue'], resolve),
            'c-welcome-popup': (resolve) => require(['@/ui/components/welcome-popup/index.vue'], resolve),
            'c-download-popup': (resolve) => require(['@/ui/components/download-popup/index.vue'], resolve),
            'c-unlock-popup': (resolve) => require(['@/ui/components/unlock-popup/index.vue'], resolve),
            'c-login-popup': (resolve) => require(['@/ui/components/login-popup/index.vue'], resolve),
            'c-send-funds-popup': (resolve) => require(['@/ui/components/send-funds-popup/index.vue'], resolve),
            'c-purchase-popup': (resolve) => require(['@/ui/components/purchase-popup/index.vue'], resolve),
            'c-sidepanel': (resolve) => require(['@/ui/components/sidepanel'], resolve),
            'c-cookie-policy': (resolve) => require(['@/ui/components/cookie-policy'], resolve),
            'c-message': (resolve) => require(['@/ui/components/message'], resolve),
            'c-load-more': (resolve) => require(['@/ui/components/buttons/load-more.vue'], resolve),
            'c-swiper': swiper,
            'c-slide': swiperSlide
        },
        computed: {
            is_connected() {
                return this.$store.state.application.connection.internet && this.$store.state.application.connection.datasource
            },
            connection_status() {
                return this.$store.state.application.connection.status
            },
            swiper() {
                return this.$refs.mySwiper.swiper
            },
            unlock_modal_active() {
                return this.$store.state.application.active_modal === 'unlock'
            },
            send_funds_modal_active() {
                return this.$store.state.application.active_modal === 'send-funds'
            },
            login_modal_active() {
                return this.$store.state.application.active_modal === 'login'
            },
            purchase_modal_active() {
                return this.$store.state.application.active_modal === 'purchase'
            },
            download_modal_active() {
                return this.$store.state.application.active_modal === 'download'
            },
            welcome_modal_active() {
                return this.$store.state.application.active_modal === 'welcome'
            },
            notifs() {
                return this.$store.state.application.account.notifications
            },
            updates() {
                return this.$store.state.application.updates
            },
            desktop_mode() {
                return this.$store.state.application.desktop_mode
            },
            signed_in() {
                return this.$store.state.application.signed_in
            },
            current_identity() {
                return this.$store.state.application.account && this.$store.state.application.account.identities.find(identity => identity.id == this.$store.state.application.account.current_identity.id)
            },
            messages() {
                return this.current_identity && this.current_identity.messages
            }
        },
        data() {
            return {
                navigationComponent: this.navigationKey || false,
                loadingState: true,
                initialized: BlockHub.initialized,
                user_submitted_connection_message: this.$store.state.application.user_submitted_connection_messages[Math.floor(Math.random() * Math.floor(this.$store.state.application.user_submitted_connection_messages.length))],
                panelOption: {
                    spaceBetween: 0,
                    loop: false,
                },
                notifPopup: {},
                scrollMoreDirection: null,
                slimMode: false
            }
        },
        updated() {
            this.user_submitted_connection_message = this.$store.state.application.user_submitted_connection_messages[Math.floor(Math.random() * Math.floor(this.$store.state.application.user_submitted_connection_messages.length))]
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
                this.$store.state.application.active_modal = null
            },
            closeNotifPopup() {
                this.notifPopup = {};
            },
            showNotifPopup(ntf) {
                this.notifPopup = ntf;
                this.notifPopup.show_popup = true;
            },
            scrollSidebarDown(){
                $('#scroll_sidebar').animate({scrollTop: '+=100', duration: '150'});
                this.checkScrollButton()
            },
            scrollSidebarUp(){
                $('#scroll_sidebar').animate({scrollTop: '-=500', duration: '150'});
                this.checkScrollButton()
            },
            checkScrollButton(){
                try {
                    if ($('#scroll_sidebar').children().height() > $('#scroll_sidebar').height()) {
                        // Change the scroll direction when it hits the last 10px of the sidebar
                        if(($('#scroll_sidebar').scrollTop() + $('#scroll_sidebar').innerHeight()) >= ($('#scroll_sidebar')[0].scrollHeight - 10)) {
                            this.scrollMoreDirection = 'up';
                        }
                        else {
                            this.scrollMoreDirection = 'down';
                        }
                    } else {
                        this.scrollMoreDirection = null
                    }
                } catch(e) {

                }
            },
            updateBreadcrumbLinks() {
                if (this.breadcrumbLinks.length === 0) {
                    if (this.$route.meta.breadcrumb) {
                        this.breadcrumbLinks = this.$route.meta.breadcrumb
                    } else if (this.$route.meta.breadcrumb === false) {
                        this.breadcrumbLinks = []
                    } else {
                        if (this.$route.name !== 'Home') {
                            this.breadcrumbLinks = [
                                { to: { path: '/' }, title: 'Home' },
                                { to: { path: this.$route.path }, title: this.$route.name }
                            ]
                        }
                    }
                }
            },
            handleResize(event) {
                if ( document.documentElement.clientWidth < 768 )
                    this.slimMode = true
                    // console.log(true)
                else
                    this.slimMode = false
                    // console.log(false)
            }
        },
        created(){
            window.addEventListener('resize', this.handleResize())
            this.handleResize();
        },
        mounted() {
            this.updateBreadcrumbLinks()
            this.$nextTick(() => {
                this.loadingState = false
                setTimeout(() => {
                    document.getElementById('startup-loader').style.display = 'none'

                    this.initialized = BlockHub.initialized = true

                    // check sidebar button
                    $(this.$refs.scroll_sidebar).scroll(() => {
                        this.debounce(() => {
                            this.checkScrollButton()
                        }, 250)
                    })
                }, 1000) // TODO: remove arbitrary delay

                setInterval(() => {
                    this.checkScrollButton()
                }, 500)
            })
        },
        watch: {
            '$route'() {
                this.updateBreadcrumbLinks()
            }
        }
    }
</script>

<style lang="scss" scoped>
    [v-cloak] {
        display: none;
    }
    .content{
        padding: 20px;
        .container-fluid{
            padding: 0!important;
        }
    }
    .version {
        position: fixed;
        bottom: 10px;
        right: 24px;
        font-size: 16px;
        font-family: 'Barlow', sans-serif;
        color: rgba(255, 255, 255, 0.2);
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
        margin-bottom: 50px;

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

    .clock {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: -1;
    }

    .loader-block {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0px;
        top: 0px;
        z-index: 20;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #dfdfe9;
        background: rgba(0, 0, 0, 0.3);
    }

    .loader-block .loader-block__container {
        width: 100%;
        height: 100%;
        position: relative;
        text-align: center;
        padding-top: 100px;
        font-size: 14px;
    }

    .loader-block .loader-block__spinner {
        left: 0px;
        top: 0px;
        width: 20px;
        height: 20px;
        animation: rotate 500ms infinite linear;
        position: relative;
        zoom: 4;
        margin: 0 auto;
        &:before{
            position: absolute;
            left: 3px;
            top: 3px;
            content: " ";
            width: 14px;
            height: 14px;
            border: 2px solid #fff;
            border-right-color: transparent;
            border-radius: 7px;
        }
    }

    .loader-block__message {
        color: #fff;
        font-size: 20px;
        font-style: italic;
        text-transform: uppercase;
        margin: 40px auto 10px;
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
            color: #fff;

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
        overflow: hidden;
        height: calc(100% - 100px);
        .load-more-slot{
            display: inline-flex;
            flex-direction: column;
            align-items: center;
            line-height: 18px;
        }

        &:before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 246px;
            height: 100px;
            z-index: 1;
            background: linear-gradient(to top, rgba(48, 49, 77, 1) 60%, rgba(48, 49, 77, 0) 100%);
            transform: rotate(0deg);
            pointer-events: none;
        }
        
        &:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 246px;
            height: 182px;
            z-index: 1;
            background: url("../../../assets/img/left-fade.png") bottom left no-repeat;
            background-size: 100% auto;
            pointer-events: none;
        }

        .navigation {
            padding-bottom: 80px;
        }
    }
    .left-sidebar__content{
        overflow-y: scroll;
        overflow-x: hidden;
        height: calc(100% - 40px);
    }
    .col-lg-6{
        @media (max-width: 1500px){
            flex: 0 0 100%;
            max-width: 100%;
        }
    }

    
    .content {
        width: 100%;
        padding-top: 0;
        margin: 0 auto;
    }

    .page__with-left-sidebar .content, .page__with-right-sidebar .content {
        width: calc(100% - 250px);
        margin: 0 0 0 auto;
    }

    .page__with-left-sidebar.page__with-right-sidebar .content {
        width: calc(100% - 500px);
        margin: 0 auto;
    }




    @media (max-width: 575px) {

    }

    @media (max-width: 768px) {
    }

    @media (max-width: 991px) {

    }

    @media (max-width: 1200px) {
        .page .page__content{
            padding-top: 50px!important;
        }
        #page-aside, #page-sidepanel {
            display: none;
        }
        .content {
            width: 100%!important;
            .container-fluid{
                padding: 20px;
            }
        }

    }
    @media (max-width: 1400px) {
        .page-aside,
        .page-sidepanel{
            width: 200px!important;
        }
        .page-aside .navigation{
            padding-left: 15px;
        }
        .page-sidepanel{
            padding-right: 15px;
            .page-sidepanel{
                width: 100%!important;
            }
        }
        .content {
            width: 100%;
        }

        .page__with-left-sidebar .content, .page__with-right-sidebar .content {
            width: calc(100% - 200px);
            margin: 0 0 0 auto;
        }

        .page__with-left-sidebar.page__with-right-sidebar .content {
            width: calc(100% - 400px);
            margin: 0 auto;
        }
        .load-more.fixed{
            width: 180px!important;
            margin: 10px!important;
            span{
                font-size: 14px!important;
            }
        }
    }
</style>
