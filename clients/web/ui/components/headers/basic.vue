<template>
    <header class="app-header">
        <div class="app-header__top-bar draggable" />
        <div
            class="position-relative w-100"
            style="margin-top: -10px; zoom: 0.9;">
            <div class="app-header__bar-left">
                <div
                    v-if="desktopMode && operatingSystem === 'mac'"
                    class="mac-icons">
                    <c-button
                        status="none"
                        class="close_w"
                        @click="closeWindow" />
                    <c-button
                        status="none"
                        class="minimize"
                        @click="minimizeWindow" />
                    <c-button
                        status="none"
                        class="maximize"
                        @click="maximizeWindow" />
                </div>
                <div
                    v-if="desktopMode && operatingSystem === 'linux'"
                    class="linux-icons">
                    <c-button
                        status="none"
                        class="close_w"
                        @click="closeWindow" />
                    <c-button
                        status="none"
                        class="minimize"
                        @click="minimizeWindow" />
                    <c-button
                        status="none"
                        class="maximize"
                        @click="maximizeWindow" />
                </div>
                <div v-if="desktopMode && operatingSystem === 'windows'">
                    <a
                        v-if="!isLocked"
                        class="app-header__bar-left-link margin-right-0 margin-left-10"
                        href="javascript:;"
                        data-action="fixedpanel-toggle">
                        <span class="fas fa-bars" />
                    </a>
                </div>
                <div v-if="!desktopMode">
                    <nuxt-link
                        class="app-header__bar-left-link"
                        to="/">
                        <span
                            class="fa fa-home"
                            style="color: #000" />
                    </nuxt-link>
                    <c-button
                        status="none"
                        class="app-header__bar-left-link hide-on-mobile"
                        @click="$router.go(-1)">
                        <span
                            class="fa fa-arrow-left"
                            style="color: #000" />
                    </c-button>
                    <c-button
                        status="none"
                        class="app-header__bar-left-link hide-on-mobile"
                        @click="$router.go(+1)">
                        <span
                            class="fa fa-arrow-right"
                            style="color: #000" />
                    </c-button>
                </div>
            </div>
            <div class="app-header__shadow" />
            <nuxt-link
                class="app-header__bar-center"
                :to="isLocked ? '#' : '/'">
                <c-loading-logo :isLoading="isLoader" />
            </nuxt-link>
            <div class="app-header__bar-right">
                <div
                    v-if="desktopMode && operatingSystem === 'windows'"
                    class="windows-icons margin-right-5">
                    <c-button
                        status="none"
                        class="minimize"
                        @click.prevent="minimizeWindow" />
                    <c-button
                        status="none"
                        class="maximize"
                        @click.prevent="maximizeWindow" />
                    <c-button
                        status="none"
                        class="close_w"
                        @click.prevent="closeWindow" />
                </div>
                <div v-else>
                    <c-button
                        v-if="!isLocked"
                        status="none"
                        class="app-header__bar-left-link"
                        data-action="fixedpanel-toggle">
                        <span
                            class="fas fa-bars"
                            style="color: #000" />
                    </c-button>
                </div>
            </div>
            <div
                v-if="signedIn && developerMode"
                class="app-header__options">
                <button
                    v-if="!isViewing"
                    class="remove-btn btn btn-secondary btn-block btn--icon btn--icon-left"
                    @click="clickRemove()">
                    <img src="/img/remove-btn.png">
                    <p><span class="fa fa-trash" /> Remove</p>
                </button>
                <button
                    v-if="!isViewing"
                    class="publish-btn btn btn-secondary btn-block btn--icon btn--icon-left"
                    @click="clickPublish()">
                    <img src="/img/publish-btn.png">
                    <p><span class="fa fa-check" /> Publish</p>
                </button>
                <button
                    v-if="!isViewing"
                    class="exit-btn btn btn-secondary btn-block btn--icon btn--icon-left"
                    @click="clickExit()">
                    <p><span class="fa fa-arrow-alt-circle-left" /> Back</p>
                </button>
            </div>
            <nav
                v-if="!signedIn || (signedIn && isViewing)"
                class="app-header__nav hide-on-mobile">
                <nav class="horizontal-navigation app-header__nav-left">
                    <button
                        class="btn btn-light btn--icon"
                        data-action="horizontal-show">
                        <span class="fa fa-bars" /> Toggle navigation
                    </button>
                    <ul>
                        <li
                            v-if="!signedIn && !isLocked"
                            class="app-header__create-account-btn">
                            <c-button
                                status="none"
                                to="/account/signup"
                                class="">
                                <span class="text">CREATE ACCOUNT</span> <span class="fa fa-user-plus" />
                            </c-button>
                        </li>
                        <li
                            v-if="!desktopMode"
                            class="app-header__download-btn">
                            <c-button
                                status="none"
                                to="/download"
                                class="">
                                <span class="text">DOWNLOAD</span> <span class="fa fa-download" />
                            </c-button>
                        </li>
                        <li v-if="signedIn">
                            <c-button
                                status="none"
                                to="/">
                                <span class="icon fa fa-shopping-cart" />
                                <span class="text">Store</span>
                            </c-button>
                        </li>
                        <li
                            v-if="signedIn"
                            v-access="'chat'">
                            <c-button
                                status="none"
                                to="/chat">
                                <span class="icon fa fa-comments" />
                                <span class="text">Chat</span>
                            </c-button>
                        </li>
                        <li
                            v-if="signedIn"
                            v-access="'chest'">
                            <c-button
                                status="none"
                                to="/chest">
                                <span class="icon fa fa-box-open" />
                                <span class="text">Chest</span>
                            </c-button>
                        </li>
                        <li v-if="signedIn">
                            <c-button
                                v-access="'stream.read'"
                                status="none"
                                to="/streams">
                                <span class="icon fa fa-eye" />
                                <span class="text">Streams</span>
                                <!-- podcast  global hand-holding-heart -->
                            </c-button>
                        </li>
                        <li
                            v-if="signedIn"
                            v-access="'community'">
                            <c-button
                                status="none"
                                to="/community">
                                <span class="icon fa fa-globe-americas" />
                                <span class="text">Community</span>
                            </c-button>
                        </li>
                        <li>
                            <c-dropdown
                                class="ml-4 account-menu"
                                style="z-index: 12"
                                @show="onShowMenu"
                                @hide="onHideMenu">
                                <template slot="title">
                                    <div class="__title">
                                        <i class="fas fa-ellipsis-h" />
                                    </div>
                                </template>
                                <ul class="item-dropdown">
                                    <li>
                                        <c-button
                                            status="none"
                                            to="/company">
                                            About
                                        </c-button>
                                    </li>
                                    <li>
                                        <c-button
                                            status="none"
                                            to="/news">
                                            News
                                        </c-button>
                                    </li>
                                    <li>
                                        <c-button
                                            status="none"
                                            to="/updates">
                                            Updates
                                        </c-button>
                                    </li>
                                </ul>
                            </c-dropdown>
                        </li>
                    </ul>
                </nav>
                <nav class="horizontal-navigation app-header__nav-right">
                    <button
                        class="btn btn-light btn--icon"
                        data-action="horizontal-show">
                        <span class="fa fa-bars" /> Toggle navigation
                    </button>
                    <ul>
                        <li v-if="signedIn && developerMode && isViewing">
                            <button
                                class="edit-btn btn btn-secondary btn-block btn--icon btn--icon-left"
                                @click="clickEdit">
                                <img src="/img/edit-btn.png">
                                <p><span class="fa fa-edit" />Edit</p>
                            </button>
                        </li>
                        <li
                            v-if="!isLocked"
                            hidden>
                            <c-quick-launch
                                class="quick-launch"
                                style="margin-top: -7px;" />
                        </li>
                        <li
                            v-if="signedIn"
                            class="token">
                            <c-button
                                status="none"
                                class="mt-1"
                                to="/token">
                                <span
                                    v-if="tokenCount === null"
                                    class="token__count token__count--loading">
                                    <c-loading :enabled="true" />
                                </span>
                                <span
                                    v-if="tokenCount !== null"
                                    class="token__count">
                                    {{ tokenCount }} <span class="icon fa fa-coins" />
                                </span>
                                <span class="text">Tokens</span>
                            </c-button>
                        </li>
                        <li v-if="signedIn">
                            <c-dropdown
                                class="ml-4 account-menu mt-1"
                                style="z-index: 12"
                                @show="onShowMenu"
                                @hide="onHideMenu">
                                <template slot="title">
                                    <div class="__title">
                                        <i class="fa fa-user" />
                                        {{ activeProfile && activeProfile.name }}
                                    </div>
                                </template>
                                <ul class="item-dropdown">
                                    <li>
                                        <c-button
                                            status="none"
                                            to="/account">
                                            <i class="fas fa-user" />
                                            Account Info
                                        </c-button>
                                    </li>
                                    <li v-access="'wallet.read'">
                                        <c-button
                                            status="none"
                                            to="/account/wallets">
                                            <i class="fas fa-credit-card" />
                                            My Wallets
                                        </c-button>
                                    </li>
                                    <li v-if="activeProfile">
                                        <c-button
                                            status="none"
                                            :to="`/profile/${activeProfile.id}`">
                                            <i class="fas fa-user" />
                                            View Public Profile
                                        </c-button>
                                    </li>
                                    <li
                                        v-if="signedIn && activeProfile"
                                        v-access="'contact'">
                                        <c-button
                                            status="none"
                                            :to="`/profile/${activeProfile.id}/contacts`">
                                            <i class="fas fa-users" />
                                            Contacts
                                        </c-button>
                                    </li>
                                    <li>
                                        <c-button
                                            status="none"
                                            to="/account/profiles">
                                            <i class="fas fa-users-cog" />
                                            Profile Manager
                                        </c-button>
                                    </li>
                                    <li>
                                        <c-button
                                            status="none"
                                            @click="$store.commit('application/showProfileChooser', true)">
                                            <i class="fas fa-user-edit" />
                                            Switch Profile
                                        </c-button>
                                    </li>
                                    <li>
                                        <c-button
                                            status="none"
                                            to="/account/signout">
                                            <i class="fa fa-sign-out-alt" />
                                            Sign Out
                                        </c-button>
                                    </li>
                                    <hr>
                                    <li v-access="'chat'">
                                        <c-button
                                            status="none"
                                            to="/settings/chat">
                                            <i class="fas fa-comments" />
                                            Chat Settings
                                        </c-button>
                                    </li>
                                    <li>
                                        <c-button
                                            status="none"
                                            to="/help">
                                            <i class="fas fa-info-circle" />
                                            FAQ
                                        </c-button>
                                    </li>
                                </ul>
                            </c-dropdown>
                        </li>
                        <li v-if="!signedIn && !isLocked">
                            <c-button
                                status="none"
                                @click="$store.commit('application/activeModal', 'login')">
                                <span class="icon fa fa-sign-out-alt" />
                                <span class="text">Sign In</span>
                            </c-button>
                        </li>
                        <li
                            v-if="!isLocked && languages"
                            v-access="'languages'"
                            class="ml-3">
                            <c-language-dropdown
                                :currentLanguage="currentLanguage"
                                :languages="languages"
                                @change="selectLanguages" />
                        </li>
                        <li
                            v-if="!isLocked && currencies"
                            v-access="'currency'"
                            class="ml-2">
                            <c-currency-dropdown
                                :currentCurrency="currentCurrency"
                                :currencies="currencies"
                                @change="selectCurrency" />
                        </li>
                        <li v-if="!isLocked">
                            <c-button
                                status="none"
                                to="/help">
                                <span class="icon fa fa-question-circle" />
                                <span class="text">Help</span>
                            </c-button>
                        </li>
                    </ul>
                </nav>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    components: {
        'c-loading-logo': () => import('~/components/loading-bar/logo-loader').then(m => m.default || m),
        'c-quick-launch': () => import('~/components/quick-launch').then(m => m.default || m),
        'c-dropdown': () => import('~/components/dropdown-menu/type-4').then(m => m.default || m),
        'c-currency-dropdown': () => import('~/components/dropdown-menu/currency').then(m => m.default || m),
        'c-language-dropdown': () => import('~/components/dropdown-menu/language').then(m => m.default || m)
    },
    props: ['isLoader'],
    data() {
        return {
        }
    },
    computed: {
        languages() {
            return this.$store.state.application.languages
        },
        tokenCount() {
            if (this.$store.state.application.tokenCount === undefined) this.$store.state.application.tokenCount = 0
            return this.$store.state.application.tokenCount !== null ? this.$store.state.application.tokenCount.toLocaleString() : null
        },
        currentLanguage() {
            if (process.server) {
                return { code: 'US', name: 'English (US)' }
            }

            // Try to set based on browser language
            if (!this.account.language || !this.account.language.code) return this.languages.find(el => Boolean((navigator.language || navigator.userLanguage).toLowerCase().includes(el.code.toLowerCase())))

            // If that failed, set to default: US
            if (!this.account.language || !this.account.language.code) return this.languages.find(el => Boolean(el.code.toLowerCase().includes('us')))

            return this.account.language
        },
        currencies() {
            return this.$store.state.application.currencies
        },
        currentCurrency() {
            // Try to set currency based on language
            if (!this.account.currency || !this.account.currency.code) {
                this.account.currency = this.currencies.find(el => el.country && Boolean(el.country.includes(this.account.language.code)))
            }

            // If that failed, set to default: USD
            if (!this.account.currency || !this.account.currency.code) {
                this.account.currency = this.currencies.find(el => Boolean(el.code.toLowerCase().includes('usd')))
            }

            return this.account.currency
        },
        account() {
            return this.$store.state.application.account
        },
        activeProfile() {
            return this.$store.state.application.activeProfile
        },
        isLocked() {
            return this.$store.state.application.locked
        },
        isLoading() {
            return this.$store.state.application.loading
        },
        isViewing() {
            return this.$store.state.application.editorMode === 'viewing'
        },
        editorMode() {
            return this.$store.state.application.editorMode
        },
        developerMode() {
            return this.$store.state.application.developerMode
        },
        signedIn() {
            // return this.$store.state.application.signedIn && !!this.$store.state.auth.user
            return this.$store.state.application.signedIn
        },
        desktopMode() {
            return this.$store.state.application.desktopMode
        },
        operatingSystem() {
            return this.$store.state.application.operatingSystem
        }
    },
    methods: {
        clickEdit() {
            this.$store.dispatch('application/setEditorMode', 'editing')
        },
        clickRemove() {
            this.$store.dispatch('application/setEditorMode', 'removing')
        },
        clickPublish() {
            this.$store.dispatch('application/setEditorMode', 'publishing')
        },
        clickExit() {
            this.$store.dispatch('application/setEditorMode', 'viewing')
        },
        onShowMenu() {
            this.$('.snotify').hide()
        },
        onHideMenu() {
            this.$('.snotify').show()
        },
        signOut() {
            this.$store.dispatch('logout')

            this.isLoading = true
        },
        closeWindow() {
            const { BrowserWindow } = window.specialRequire('electron').remote
            const browserWindow = BrowserWindow.getFocusedWindow()
            browserWindow.close()
        },
        maximizeWindow() {
            // this.$desktop.sendCommand('eval', cmd).then((productResult) => {
            //     if (productResult.id) {
            //         this.successfulCreationMessage = "Product ownership has been changed"
            //     }
            // })
            const { BrowserWindow } = window.specialRequire('electron').remote

            const browserWindow = BrowserWindow.getFocusedWindow()
            if (browserWindow.isMaximized()) {
                browserWindow.unmaximize()
            } else {
                browserWindow.maximize()
            }
        },
        minimizeWindow() {
            const { BrowserWindow } = window.specialRequire('electron').remote
            const browserWindow = BrowserWindow.getFocusedWindow()
            browserWindow.minimize()
        },
        selectCurrency(currency) {
            this.account.currency = currency
            this.$store.commit('application/updateState')

            const fractionCountMap = {
                'BTC': 6,
                'ETH': 6,
                'DAI': 2
            }

            this.$CurrencyFilter.setConfig({
                symbol: currency.symbol,
                thousandsSeparator: ',',
                fractionCount: fractionCountMap[currency.code] || 2,
                fractionSeparator: '.',
                symbolPosition: 'front',
                symbolSpacing: true
            })
        },
        selectLanguages(lang) {
            this.account.language = lang
            this.$store.commit('application/updateState')
        }
    }
}
</script>

<style>
    .draggable {
        -webkit-app-region: drag;
    }

    .undraggable {
        -webkit-app-region: no-drag;
    }
</style>

<style lang="scss" scoped>

    .header-menu {
        border-radius: 5px;
        border: 1px solid rgba(255, 255, 255, 0.07);
        background: #1C2032;
        padding: 10px;
        margin: 0 0 15px;
        box-shadow: 0 3px 6px rgba(0, 0, 0, .16);
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        position: absolute;
        width: 170px;
        z-index: 100;
        top: 32px;
        right: 0;

        > p {
            color: #fff;
        }

        > a {
            display: block;
            margin-left: 10px;
            margin-bottom: 5px;
        }

        hr {
            border-top: 1px solid #fff !important;
            width: 100%;
            margin: 10px 0;
        }
    }

    .icon-letter-circle {
        background: #3f87b8;
        border-radius: 20px;
        color: #fff;
        font-weight: bold;
        font-size: 11px;
    }

    .btn-block {
        position: relative;
        display: inline-block;
        width: 100px;
        height: 100px;
        margin-top: -19px !important;
        background: transparent !important;
        text-transform: uppercase;
        border: 0;
        font-weight: bold;
        font-size: 13px;
        text-align: center !important;

        img {
            position: absolute;
            top: 0;
            left: -50px;
            z-index: 10;
        }

        p {
            z-index: 12;
            position: relative;
            display: inline-block;
        }

        .fa {
            z-index: 12;
            position: relative;
            margin-right: 6px;
        }

        &:hover, &:focus, &:active {
            background: transparent !important;
            color: #f8d553;
        }

        &.exit-btn {
            padding-left: 36px;
        }

        &.edit-btn {
            margin-top: -8px !important;
            margin-right: 30px;

            img {
                pointer-events: none;
            }
        }
    }

    .app-header {
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background: none;
        padding: 0;
        z-index: 100;
        filter: drop-shadow(0 0px 15px rgba(48, 49, 76, 1));
        user-select: none;

        a {
            color: #fff;

            &:hover {
                text-decoration: none;
            }
        }

        i {
            display: inline-block;
            margin-right: 10px;
        }

        .horizontal-navigation > ul > li > a {
            padding: 0;
            margin: 0 0 0 17px;
            color: #fff;

            span.text {
                font-size: 16px;
            }

            &:hover span, .icon:hover {
                color: #f8d553;
            }
        }

        .horizontal-navigation > ul .icon {
            color: #fff;
            &.fa::before{
                font-size: 16px;
            }
        }
    }

    .app-header__loading {
        height: 6px;
        width: 100vw;
        display: block;
        background: #eee;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 15;
        opacity: 0;

        body.screen-loading & {
            opacity: 1;
        }
    }

    .app-header__create-account-btn, .app-header__download-btn {
        position: relative;
        margin: 0 20px;
        a{
            margin: 0 15px!important;
        }

        &:before {
            position: absolute;
            top: -10px;
            left: 0;
            border-radius: 0 0 5px 5px;
            height: 40px;
            z-index: 10;
            content: '';
        }

        span.text {
            font-size: 14px;
            font-weight: bold;
        }

        .fa {
            margin-left: 10px;
            font-size: 14px;
            font-weight: bold;
        }
    }

    .app-header__create-account-btn:before {
        width: 100%;
        background: #43C981;
    }

    .app-header__download-btn:before {
        width: 100%;
        background: #4395c9;
    }

    .app-header__top-bar {
        max-height: 60px;
        min-height: 15px;
        padding-bottom: 10px;
        height: auto;
        width: 100vw;
        display: block;
        background: #fff;
        position: relative;
        z-index: 13;
        top: 0;
        left: 0;
        right: 0;
    }

    .app-header__buttons {
        padding-left: 8px;
        padding-top: 11px;
        float: left;
        line-height: 0px;
        text-align: center;

        a {
            display: block;
            width: 12px;
            height: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            visibility: hidden;
            cursor: default;
            font-weight: bold;

            span {
                display: block;
                width: 4px;
                height: 4px;
                margin-left: -4px;
            }
        }

        &:hover a {
            visibility: visible;
        }
    }

    .app-header__shadow {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 56px;
        pointer-events: none;
        /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#30314d+0,30314d+100&0.9+0,0+100 */
        background: linear-gradient(to bottom, rgb(29, 30, 47) 0%,rgba(48,49,77,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        z-index: 11;
        opacity: 0.7;
        animation: pulse-opacity ease-in-out 2s infinite alternate !important;
    }

    .app-header__options {
        position: absolute;
        top: 0px;
        right: 120px;
        width: 400px;
        text-align: right;
    }

    .app-header__nav-center {
        position: absolute;
        top: 20px;
        left: 40%;
        width: 250px;
        height: 50px;
        text-indent: -9999px;
        z-index: 13;
    }

    .app-header__bar-left {
        position: absolute;
        top: 0;
        left: 0;
        height: 30px;
        min-width: 35px;
        background: #fff;
        text-align: right;
        z-index: 13;
        padding: 4px 10px 4px 5px;
        border-radius: 0 0 13px 0;
        display: flex;
        align-items: center;
        /*justify-content: center;*/
        &:before {
            content: "";
            border-style: solid;
            border-width: 26px 26px 0 0;
            border-color: #ffffff transparent transparent transparent;
            position: absolute;
            right: -23px;
            top: 0px;
        }
    }

    a.app-header__bar-left-link {
        color:#30314C;
        display: inline-block;
        &:first-of-type{
            margin-right:15px;
        }
        &:last-of-type{
            margin-left:5px;
        }
        &:hover{
            color: #43B4C9;
            cursor: pointer;
        }
        .fa{
            line-height: 30px;
            font-size: 16px;
        }
    }

    .app-header__bar-center {
        display: block;
        position: relative;
        margin: 0 auto;
        height: 50px;
        width: 258px;
        padding: 0px 55px 0px;
        background: url(../../assets/SVG/center-bar.svg) no-repeat top left;
        z-index: 14;
    }

    .app-header__bar-right {
        position: absolute;
        top: 0;
        right: 0;
        height: 30px;
        min-width: 35px;
        background: #fff;
        text-align: right;
        z-index: 13;
        padding: 4px 5px 4px 10px;
        border-radius: 0 0 0 13px;
        display: flex;
        align-items: center;
        /*justify-content: center;*/
        &:before {
            content: "";
            border-style: solid;
            border-width: 0 26px 26px 0;
            border-color: transparent #ffffff transparent transparent;
            position: absolute;
            left: -22px;
            top: 0px;
        }
    }

    .app-header__nav {
        position: absolute;
        top: 20px;
        width: 100%;
        font-size: 15px;

        ul {
            padding: 0;
            display: flex;
            align-items: center;
            list-style: none;
        }

        a {
            z-index: 12;
            position: relative;
        }
    }

    .app-header__nav-left {
        float: left;
        max-width: calc(50% - 100px);
        height: 20px;
        margin: 0 0 0 100px;

        ul {
            height: 20px;
        }
    }

    .app-header__nav-right {
        float: right;
        max-width: calc(50% - 90px);
        height: 32px;
        margin: 0 90px 0 0;

        ul {
            height: 32px;
        }
    }

    .app-header__nav-item {
        display: inline-block;
        padding: 0;
        margin-right: 20px;
        font-weight: 100;
    }

    .token {
        .fa {
            color: #333 !important;
        }

        .text {
            float: none;
            color: #fce893;
            margin-left: 3px;
            font-weight: bold;
            vertical-align: super;
        }

        .token__count {
            height: 24px;
            min-width: 40px;

            &.token__count--loading {
                padding-top: 4px;
            }
        }

        &:hover .token__count {
            background: #f8d553;
            color: #000 !important;
        }

        &:hover {
            .token__count:before {
                animation: badgeGlimmer ease-out infinite;
                animation-fill-mode: forwards;
                animation-duration: 1s;
                animation-delay: .2s;
            }
        }
    }

    .token__count {
        display: inline-block;
        background: #fce488;
        border-radius: 10px;
        padding: 1px 8px;
        font-size: 16px;
        color: #333;
        font-weight: bold;
        overflow: hidden;
        position: relative;

        &:before {
            content: "";
            display: block;
            position: absolute;
            background: rgba(255,170,50,.5);
            background: linear-gradient(to right,rgba(255,245,214,0) 0,rgba(255,251,240,.61) 85%,rgba(255,252,244,0) 100%);
            width: 20px;
            height: 200%;
            top: -10px;
            left: -20px;
            transform: rotate(45deg);
        }
    }
    .account-menu{
        .__title{
            cursor: pointer;
            i{
                font-size: 16px;
            }
            &:hover{
                color: #f9da5d!important;
            }
        }
        .item-dropdown {
            padding: 0 4px;
            margin: 0;
            min-width: auto;
            background: transparent;
            position: relative;
            display: inline-block!important;
            left: 0;
            width: 100%;
            border: none;
            hr {
                margin: 5px 0;
                border-color: rgba(0, 0, 0, .2);
            }
            li {
                display: flex;
                align-items: center;
                width: 100%;
                font-size: 15px;
                color: #2e3546;
                padding: 4px 0;
                background: transparent;
                border: none;
                float: unset;
                a {
                    cursor: pointer;
                    color: #000;
                    padding: 0;
                    font-size: 15px;
                    border: none;
                    &:hover{
                        text-decoration: none;
                    }
                }
                i {
                    width: 17px;
                    color: #4f5079;
                }
            }
        }
    }
    .windows-icons{
        //colors
        $color_1: #383838;
        $color_2: #222;
        %extend_1 {
            top: 20%;
            right: 20%;
            bottom: 20%;
            left: 20%;
            content: " ";
            position: absolute;
            border-color: $color_1;
            border-style: solid;
            border-width: 0 0 2px 0;
        }
        a {
            position: relative;
            float: left;
            width: 20px;
            height: 20px;
            margin: 0 1px;
            -webkit-app-region: no-drag;
            &:before {
                @extend %extend_1;
            }
            &:after {
                @extend %extend_1;
            }
            &:hover {
                &:after {
                    border-color: $color_2;
                }
                &:before {
                    border-color: $color_2;
                }
            }
            &.close_w {
                &:before {
                    bottom: 50%;
                    top: 50%;
                    //Instead of the line below you could use @include transform($scale, $rotate, $transx, $transy, $skewx, $skewy, $originx, $originy)
                    transform: rotate(45deg);
                    opacity: 1;
                }
                &:after {
                    bottom: 50%;
                    top: 50%;
                    //Instead of the line below you could use @include transform($scale, $rotate, $transx, $transy, $skewx, $skewy, $originx, $originy)
                    transform: rotate(-45deg);
                }
            }
            &.minimize{
                &:before {
                    border-bottom-width: 2px;
                }
            }
            &.maximize{
                &:before {
                    border-width: 1px 1px 2px 1px;
                }
            }
        }
    }
    .mac-icons{
        //colors
        $color_1: #383838;
        $color_2: #222;
        %extend_1 {
            top: 25%;
            right: 25%;
            bottom: 25%;
            left: 25%;
            content: " ";
            position: absolute;
            border-color: $color_1;
            border-style: solid;
            border-width: 0 0 1px 0;
        }
        a {
            position: relative;
            float: left;
            width: 18px;
            height: 18px;
            margin: 0 2px;
            min-height: 15px!important;
            &:hover {
                &:after {
                    border-color: $color_2;
                }
                &:before {
                    border-color: $color_2;
                }
            }
            &.close_w {
                background: #ff6159;
                border-radius: 100%;
                &:before {
                    @extend %extend_1;
                    opacity: 0;
                    bottom: 55%;
                    top: 45%;
                    //Instead of the line below you could use @include transform($scale, $rotate, $transx, $transy, $skewx, $skewy, $originx, $originy)
                    transform: rotate(45deg);
                    width: 8px;
                    left: 25%;
                }
                &:after {
                    @extend %extend_1;
                    opacity: 0;
                    bottom: 55%;
                    top: 45%;
                    //Instead of the line below you could use @include transform($scale, $rotate, $transx, $transy, $skewx, $skewy, $originx, $originy)
                    transform: rotate(-45deg);
                    width: 8px;
                    left: 25%;
                }
            }
            &.minimize{
                background: #ffc434;
                border-radius: 100%;
                &:before {
                    @extend %extend_1;
                    opacity: 0;
                    bottom: 40%;
                    border-bottom-width: 2px;
                }
                &:after{
                    @extend %extend_1;
                    opacity: 0;
                    display: none;
                }
            }
            &.maximize{
                background: #2dd04a;
                border-radius: 100%;

                &:before {
                    content: '';
                    position: absolute;
                    border-radius: 1px;
                    left: 0;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    margin: auto;
                    opacity: 0;
                    background-color: #006500;
                    width: 7px;
                    height: 7px;
                }
                &:after {
                    content: '';
                    position: absolute;
                    border-radius: 1px;
                    left: 0;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    margin: auto;
                    opacity: 0;
                    background-color: #28c941;
                    width: 10px;
                    height: 2px;
                    transform: rotate(45deg);
                }
                &:active:hover:before {
                    background-color: #003200;
                }
                &:active:hover:after {
                    background-color: #1d9730;
                }
            }
        }
        &:hover{
            a{
                &:before {
                    opacity: 1;
                }
                &:after {
                    opacity: 1;
                }
            }
        }
    }
    .linux-icons{
        //colors
        $color_1: #383838;
        $color_2: #222;
        %extend_1 {
            top: 25%;
            right: 25%;
            bottom: 25%;
            left: 25%;
            content: " ";
            position: absolute;
            border-color: $color_1;
            border-style: solid;
            border-width: 0 0 1px 0;
        }
        a {
            position: relative;
            float: left;
            width: 18px;
            height: 18px;
            margin: 0 2px;
            min-height: 15px!important;
            &:hover {
                &:after {
                    border-color: $color_2;
                }
                &:before {
                    border-color: $color_2;
                }
            }
            &.close_w {
                background: #ff6159;
                border-radius: 100%;
                &:before {
                    @extend %extend_1;
                    opacity: 0;
                    bottom: 55%;
                    top: 45%;
                    //Instead of the line below you could use @include transform($scale, $rotate, $transx, $transy, $skewx, $skewy, $originx, $originy)
                    transform: rotate(45deg);
                    width: 8px;
                    left: 25%;
                }
                &:after {
                    @extend %extend_1;
                    opacity: 0;
                    bottom: 55%;
                    top: 45%;
                    //Instead of the line below you could use @include transform($scale, $rotate, $transx, $transy, $skewx, $skewy, $originx, $originy)
                    transform: rotate(-45deg);
                    width: 8px;
                    left: 25%;
                }
            }
            &.minimize{
                background: #999;
                border-radius: 100%;
                &:before {
                    @extend %extend_1;
                    opacity: 0;
                    bottom: 40%;
                    border-bottom-width: 2px;
                }
                &:after{
                    @extend %extend_1;
                    opacity: 0;
                    display: none;
                }
            }
            &.maximize{
                background: #999;
                border-radius: 100%;

                &:before {
                    content: '';
                    position: absolute;
                    border-radius: 1px;
                    left: 0;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    margin: auto;
                    opacity: 0;
                    background-color: #383838;
                    width: 7px;
                    height: 7px;
                }
                &:after {
                    content: '';
                    position: absolute;
                    border-radius: 1px;
                    left: 0;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    margin: auto;
                    opacity: 0;
                    background-color: #383838;
                    width: 10px;
                    height: 2px;
                    transform: rotate(45deg);
                }
                &:active:hover:before {
                    background-color: #183838;
                }
                &:active:hover:after {
                    background-color: #183838;
                }
            }
        }
        &:hover{
            a{
                &:before {
                    opacity: 1;
                }
                &:after {
                    opacity: 1;
                }
            }
        }
    }


    @media screen and (max-width: 1140px) {
        .app-header__nav-item span {
            display: none;
        }
    }
    @media screen and (max-width: 767px) {
        .hide-on-mobile {
            display: none !important;
        }
    }
    .invert .horizontal-navigation > ul li {
         background: transparent;
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

</style>
