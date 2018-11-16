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
        <div class="page__content page__content-invert invert" :class="{'make-it-blur': bluredBg}" id="page-content">
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
                <c-breadcrumb :links="breadcrumbLinksData" ref="breadcrumb" v-if="is_connected && showBreadcrumbs" />
                <div class="container-fluid">
                    <slot v-if="is_connected" />
                </div>
            </div>

            <!-- SIDEPANEL -->
            <transition name="slideRight" style="max-width: 250px" v-if="initialized && showRightPanel">
                <c-sidepanel class="right-sidebar" :navigationKey="navigationKey" />
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
            <c-claim-popup :activated="claim_modal_active" @close="closePopup" ref="claim_modal_active"></c-claim-popup>

            <c-basic-popup
                :activated="$store.state.application.editor_mode === 'editing' && !$store.state.application.account.settings.client['hide_editor_welcome_modal/' + $router.currentRoute.fullPath]"
                @close="$store.commit('application/UPDATE_CLIENT_SETTINGS', 'hide_editor_welcome_modal/' + $router.currentRoute.fullPath, true)"
                style="text-align: left;"
            >
                <div class="h4" slot="header">Welcome to the editor</div>
                <template slot="body">
                    <p v-if="!voteCasted">
                        The goal of BlockHub is everything is editable and curatable through community vote. Like a super-charged Wikipedia-style entertainment platform. But we aren't quite there yet! So for now, you can cast votes the old school way.
                    </p>
                    <p v-if="!voteCasted">
                        Want this to be the next section we make editable? 
                        <br />
                        <c-button class="underline" @click="vote">Cast your vote by clicking here!</c-button>
                    </p>
                    <p v-if="voteCasted">
                        Your vote has been cast. Thank you!
                    </p>
                </template>
                <p slot="footer">
                    Need help? <c-button status="plain" href="/#/help">Check the Help Center</c-button>
                </p>
            </c-basic-popup>


            <c-basic-popup
                :activated="$store.state.application.active_modal === 'coming-soon'"
                @close="$store.state.application.active_modal = null"
                style="text-align: left;"
            >
                <div class="h4" slot="header">Coming Soon</div>
                <template slot="body">
                    <p>
                        Stealth mode engage! <br />
                        &nbsp; &nbsp; &lt;explosion&gt; &nbsp; <br />
                        &nbsp; &nbsp; &nbsp; &nbsp; Dang, didn't work.<br /><br />
                        Okay, you caught us. So, we're still working on this feature, but we'll have it out as quick as a mage getting pwned by a warrior in a melee battle!
                        <br /><br />
                    </p>
                    <p>We believe in transparency and community-driven development, so why don't you check out the <a href="https://preview.blockhub.gg">Preview Build</a> and let us know what you think!<p>
                    <p>To make things simple, hold ALT and click anywhere to send us feedback/bug reports!</p>
                </template>
                <p slot="footer">
                </p>
            </c-basic-popup>


            <c-basic-popup
                :activated="$store.state.application.active_modal === 'token-contract'"
                @close="$store.state.application.active_modal = null"
                style="text-align: left;"
            >
                <div class="h4" slot="header">Token Purchase Contract Address</div>
                <template slot="body">
                    <div class="input-group mb-4">
                        <input type="text" class="form-control" ref="input" value="0xebf0027ef3b4b7a742a148cddb0f2b14e5d8f0e9" />
                    </div>
                    <p>You should confirm the contract address <a href="https://t.me/hyperbridgechat" target="_blank">in our Telegram</a>.</p>
                </template>
                <p slot="footer">
                </p>
            </c-basic-popup>

            <c-basic-popup
                :activated="$store.state.application.active_modal === 'report'"
                @close="$store.state.application.active_modal = null"
                style="text-align: left;"
            >
                <div class="h4" slot="header">Feedback/Report</div>
                <template slot="body">
                    <p>
                        Our goal are BlockHub is to be hyper-focused on our community needs. That's why we've created this handy way for you to give us feedback or report issues. Simply hold ALT and click somewhere. It will send us the location of what you're looking at. Report a problem or suggest something at the click of a button! So, what's up?
                    </p>
                    <br />
                    <div class="form-group">
                        <input type="text" class="form-control" ref="reportText" placeholder="Report..." @keyup.enter="sendReport()" v-focus />
                    </div>
                    <br />
                    <p><em>Hit ENTER when done</em></p>
                </template>
                <p slot="footer">
                </p>
            </c-basic-popup>

            <c-basic-popup
                :activated="$store.state.application.active_modal === 'propose-idea'"
                @close="$store.commit('application/activateModal', null)"
            >
                <div class="h4" slot="header">Propose Idea</div>
                <template slot="body">
                    <div v-if="chosenIdentity && chosenIdentity.curator_id">
                        <p>Great, you're a curator. <c-button class="underline" href="/#/project/new">Click here to continue</c-button>.</p>
                    </div>
                    <div v-else>
                        <p>
                            To propose ideas you must sign up for a Curator Profile. Don't worry, the process is simple!
                        </p>
                        <p hidden>
                            Tell people about yourself<br />
                            <textarea></textarea>
                        </p>
                        <c-user-card
                            class="col-8 margin-auto"
                            :user="chosenIdentity"
                            :previewMode="true"
                            :class="{ 'default': true }"
                        />
                        <br />
                        <c-button class="underline" @click="$store.commit('application/showProfileChooser', true)">Choose Different Profile</c-button>

                        <br /><br />

                        <c-button class="c-btn-lg outline-white margin-top-20" @click="$store.commit('application/convertCurator', { identity: chosenIdentity })">Convert to Curator</c-button>
                    </div>
                </template>
                <p slot="footer">
                    Need help? <c-button status="plain" href="/#/help">Check the Help Center</c-button>
                </p>
            </c-basic-popup>

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

        <a id="powered-by" ref="poweredBy" href="https://hyperbridge.org" target="_blank" v-if="!desktop_mode"><img src="/static/img/powered-by-hyperbridge.png" /></a>

        <!--<transition name="slideDown">-->
            <c-profile-chooser v-if="profile_chooser && signed_in" />
        <!--</transition>-->
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
            showBreadcrumbs: {
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
                default: () => ([])
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
            'c-welcome-popup': (resolve) => require(['@/ui/components/welcome-popup/index.vue'], resolve),
            'c-download-popup': (resolve) => require(['@/ui/components/download-popup/index.vue'], resolve),
            'c-unlock-popup': (resolve) => require(['@/ui/components/unlock-popup/index.vue'], resolve),
            'c-claim-popup': (resolve) => require(['@/ui/components/claim-popup/index.vue'], resolve),
            'c-login-popup': (resolve) => require(['@/ui/components/login-popup/index.vue'], resolve),
            'c-send-funds-popup': (resolve) => require(['@/ui/components/send-funds-popup/index.vue'], resolve),
            'c-purchase-popup': (resolve) => require(['@/ui/components/purchase-popup/index.vue'], resolve),
            'c-basic-popup': (resolve) => require(['@/ui/components/popups/basic.vue'], resolve),
            'c-user-card': (resolve) => require(['@/ui/components/user-card'], resolve),
            'c-clock': (resolve) => require(['@/ui/components/clock/index.vue'], resolve),
            'c-sidepanel': (resolve) => require(['@/ui/components/sidepanel'], resolve),
            'c-cookie-policy': (resolve) => require(['@/ui/components/cookie-policy'], resolve),
            'c-load-more': (resolve) => require(['@/ui/components/buttons/load-more.vue'], resolve),
            'c-swiper': swiper,
            'c-slide': swiperSlide,
            'c-profile-chooser': (resolve) => require(['@/ui/components/profile-chooser'], resolve),
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
                slimMode: false,
                mobileMode: false,
                bluredBg: false,
                voteCasted: false,
                reportCoords: null,
                breadcrumbLinksData: this.breadcrumbLinks
            }
        },
        computed: {
            is_connected() {
                return this.$store.state.application.connection.internet && this.$store.state.application.connection.datasource
            },
            chosenIdentity() {
                return this.$store.state.application.account.identities.find(identity => identity.id == this.$store.state.application.account.current_identity.id)
            },
            connection_status() {
                return this.$store.state.application.connection.status
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
            claim_modal_active() {
                return this.$store.state.application.active_modal === 'claim'
            },
            download_modal_active() {
                return this.$store.state.application.active_modal === 'download'
            },
            welcome_modal_active() {
                return this.$store.state.application.active_modal === 'welcome'
            },
            desktop_mode() {
                return this.$store.state.application.desktop_mode
            },
            signed_in() {
                return this.$store.state.application.signed_in
            },
            current_identity() {
                return this.$store.state.application.account && this.$store.state.application.account.current_identity
            },
            dynamicLinks() {
                const [empty, ...links] = this.$route.path.split('/');
                // const names = links.filter()
                const names = links;

                return names.map((name, i) => ({
                    title: this.$options.filters.upperFirstChar(name),
                    to: names.reduce((to, name, index) => (index < i + 1) ? to += '/' + name : to, '')
                }));
            },
            profile_chooser() {
                return this.$store.state.application.profile_chooser
            }
        },
        updated() {
            this.user_submitted_connection_message = this.$store.state.application.user_submitted_connection_messages[Math.floor(Math.random() * Math.floor(this.$store.state.application.user_submitted_connection_messages.length))]
        },
        methods: {
            onSwipeLeft() {
                this.showRightPanel = true
            },
            onSwipeRight() {
                this.showLeftPanel = true
            },
            vote() {
                this.$store.commit('application/entry', { key: 'editable_page', value: window.location.hash, user: this.$store.state.application.account.public_address })
                this.voteCasted = true
            },
            sendReport() {
                if (this.reportCoords) {
                    const getPathTo = (element) => {
                        if (element.tagName == 'HTML')
                            return '/html[1]';
                        if (element===document.body)
                            return '/html[1]/body[1]';

                        var ix= 0;
                        var siblings= element.parentNode.childNodes;
                        for (var i= 0; i<siblings.length; i++) {
                            var sibling= siblings[i];
                            if (sibling===element)
                                return getPathTo(element.parentNode)+'/'+element.tagName.toLowerCase()+'['+(ix+1)+']';
                            if (sibling.nodeType===1 && sibling.tagName===element.tagName)
                                ix++;
                        }
                    }

                    const cmd = {
                        key: 'report',
                        data: {
                            coords: { x: this.reportCoords.x, y: this.reportCoords.y },
                            path: this.$router.currentRoute.fullPath,
                            element: getPathTo(document.elementFromPoint(this.reportCoords.x, this.reportCoords.y)),
                            message: this.$refs.reportText.value
                        }
                    }

                    this.$store.commit('application/entry', { key: 'report', value: JSON.stringify(cmd), user: this.$store.state.application.account.public_address })
                }

                this.$store.commit('application/activateModal', null)
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
            scrollSidebarDown() {
                $('#scroll_sidebar').animate({scrollTop: '+=100', duration: '150'});
                this.checkScrollButton()
            },
            scrollSidebarUp() {
                $('#scroll_sidebar').animate({scrollTop: '-=500', duration: '150'});
                this.checkScrollButton()
            },
            checkScrollButton() {
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
                if (this.breadcrumbLinksData.length === 0) {
                    if (this.$route.meta.breadcrumb) {
                        this.breadcrumbLinksData = this.$route.meta.breadcrumb
                    } else if (this.$route.meta.breadcrumb === false) {
                        this.breadcrumbLinksData = []
                    } else {
                        if (this.$route.name !== 'Home') {
                            this.breadcrumbLinksData = [
                                { to: { path: '/' }, title: 'Home' },
                                { to: { path: this.$route.path }, title: this.$route.name }
                            ]
                        }
                    }
                }
            },
            handleResize(event) {
                if ( document.documentElement.clientWidth < 768 ){
                    this.mobileMode = true
                } else {
                    this.mobileMode = false
                }
                    // this.showRightPanel = false;
                    // this.showLeftPanel = false;
            }
        },
        created() {
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

            setTimeout(() => {
                $(this.$refs.poweredBy).fadeOut(400)
            }, 10 * 1000)

            const fractionCountMap = {
                'BTC': 6,
                'ETH': 6,
                'DAI': 2
            }

            this.$CurrencyFilter.setConfig({
                symbol: this.$store.state.application.account.currency.symbol,
                thousandsSeparator: ',',
                fractionCount: fractionCountMap[this.$store.state.application.account.currency.code] || 2,
                fractionSeparator: '.',
                symbolPosition: 'front',
                symbolSpacing: true
            })

            window.onmousemove = function (e) {
                if (e.altKey) {
                    document.body.style.cursor = 'crosshair'
                } else {
                    document.body.style.cursor = 'default'
                }
            }

            $(document).on('click', (e) => {
                if (e.altKey) {
                    e.preventDefault();

                    this.reportCoords = {
                        x: e.clientX,
                        y: e.clientY
                    }

                    this.$store.state.application.active_modal = 'report'

                    return false;
                }

                return true;
            });
        },
        watch: {
            '$route'() {
                this.updateBreadcrumbLinks()
            },
            profile_chooser(){
                if (this.signed_in)
                    if (this.profile_chooser)
                        this.bluredBg = true
                    else
                        this.bluredBg = false
            }
        }
    }
</script>

<style lang="scss" scoped>
    [v-cloak] {
        display: none;
    }
    .make-it-blur{
        filter: blur(5px);

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

    #powered-by {
        position: fixed;
        bottom: 10px;
        right: 10px;
        width: 200px;
        height: 50px;
        opacity: 0.85;
        z-index: 100;


        animation: badgeGlimmer ease-out;
        animation-fill-mode: forwards;
        animation-duration: 1s;
        animation-delay: .2s
    }

    @keyframes badgeGlimmer {
        0% {
            left: -100%;
            opacity: .3
        }

        100% {
            left: 200%;
            opacity: 1
        }
    }

    .cookie-policy {
        display: none !important;
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
        @media (max-width: 1400px) {
            flex-direction: column;
            a:nth-child(1){
                margin-bottom: 10px;
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
            /*flex: 0 0 100%;*/
            /*max-width: 100%;*/
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
    .right-sidebar,
    .left-sidebar{
        z-index: 98;
    }

    @media (max-width: 575px) {
        #content {
            padding-top: 50px;
        }
    }

    @media (max-width: 768px) {
        .clock, .version {
            display: none;
        }
    }

    @media (max-width: 991px) {

    }

    @media (max-width: 1200px) {
        .page .page__content{
            padding-top: 50px!important;
        }
        .right-sidebar,
        .left-sidebar{
            background: #30314b!important;
            min-height: 100%;
            top: 0!important;
            padding-top: 120px;
            display: none!important;
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

<style lang="scss">
    .swiper-button-prev,
    .swiper-button-next{
        user-select: none;
        outline: none;
        box-shadow: none;
    }
</style>
