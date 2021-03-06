<template>
    <div
        class="launcher"
        :style=" `background-image: url(${bgImage})`">
        <div
            v-if="overlay"
            class="launcher__overlay"
            :style="`opacity: ${overlayOpacity}; background-color: ${overlayColor}`" />
        <div class="launcher__top-bar">
            <nuxt-link
                class="app-header__bar-center margin-right-50"
                :to="isLocked ? '#' : '/'">
                <LoadingLogo :isLoading="isLoader" />
            </nuxt-link>
            <nav class="launcher__top-bar-left">
                <ul>
                    <li
                        v-if="desktopMode && !signedIn && !isLocked"
                        class="app-header__create-account-btn">
                        <nuxt-link
                            to="/account/signup"
                            class="">
                            CREATE ACCOUNT
                        </nuxt-link>
                    </li>
                    <li
                        v-if="!desktopMode"
                        class="app-header__download-btn">
                        <nuxt-link
                            to="/download"
                            class="">
                            DOWNLOAD
                        </nuxt-link>
                    </li>
                    <li v-if="signedIn">
                        <nuxt-link to="/">
                            Store
                        </nuxt-link>
                    </li>
                </ul>
            </nav>
            <slot name="header" />
            <div class="launcher__top-bar-right ml-auto">
                <nav>
                    <ul>
                        <li
                            v-if="!isLocked"
                            hidden>
                            <QuickLaunch
                                class="quick-launch"
                                style="margin-top: -7px;" />
                        </li>
                        <li
                            v-if="signedIn"
                            class="token">
                            <nuxt-link
                                class="mt-1"
                                to="/token">
                                <span
                                    v-if="tokenCount === null"
                                    class="token__count token__count--loading">
                                    <Loading :enabled="true" />
                                </span>
                                <span
                                    v-if="tokenCount !== null"
                                    class="token__count">
                                    {{ tokenCount }} <span class="icon fa fa-coins" />
                                </span>
                                <span class="text">Tokens</span>
                            </nuxt-link>
                        </li>
                        <li v-if="signedIn">
                            <Dropdown
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
                                        <Button
                                            status="none"
                                            to="/account">
                                            <i class="fas fa-user" />
                                            Account Info
                                        </Button>
                                    </li>
                                    <li v-access="'wallet.read'">
                                        <Button
                                            status="none"
                                            to="/account/wallets">
                                            <i class="fas fa-credit-card" />
                                            My Wallets
                                        </Button>
                                    </li>
                                    <li v-if="activeProfile">
                                        <Button
                                            status="none"
                                            :to="`/profile/${activeProfile.id}`">
                                            <i class="fas fa-user" />
                                            View Public Profile
                                        </Button>
                                    </li>
                                    <li
                                        v-if="signedIn && activeProfile"
                                        v-access="'contact'">
                                        <Button
                                            status="none"
                                            :to="`/profile/${activeProfile.id}/contacts`">
                                            <i class="fas fa-users" />
                                            Contacts
                                        </Button>
                                    </li>
                                    <li>
                                        <Button
                                            status="none"
                                            to="/account/profiles">
                                            <i class="fas fa-users-cog" />
                                            Profile Manager
                                        </Button>
                                    </li>
                                    <li>
                                        <Button
                                            status="none"
                                            @click="$store.commit('application/showProfileChooser', true)">
                                            <i class="fas fa-user-edit" />
                                            Switch Profile
                                        </Button>
                                    </li>
                                    <li>
                                        <Button
                                            status="none"
                                            to="/account/signout">
                                            <i class="fa fa-sign-out-alt" />
                                            Sign Out
                                        </Button>
                                    </li>
                                    <hr>
                                    <li v-access="'chat'">
                                        <Button
                                            status="none"
                                            to="/settings/chat">
                                            <i class="fas fa-comments" />
                                            Chat Settings
                                        </Button>
                                    </li>
                                    <li>
                                        <Button
                                            status="none"
                                            to="/help">
                                            <i class="fas fa-info-circle" />
                                            FAQ
                                        </Button>
                                    </li>
                                </ul>
                            </Dropdown>
                        </li>
                        <li v-if="!signedIn && !isLocked">
                            <nuxt-link @click="$store.commit('application/activeModal', 'login')">
                                Sign In
                            </nuxt-link>
                        </li>
                        <li v-if="!isLocked">
                            <nuxt-link to="/help">
                                Help
                            </nuxt-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="game-shortcuts">
            <div class="game-shortcuts__wrapper">
                <div
                    v-for="game in gamesShortcuts"
                    class="game-shortcuts__item">
                    <img :src="game.image">
                </div>
            </div>
        </div>
        <div class="launcher__main-content">
            <slot />
        </div>
    </div>
</template>

<script>

export default {
    components: {
        'LoadingLogo': () => import('@ericmuyser/hyper-ui').then(m => m.LoadingLogo),
        'QuickLaunch': () => import('@ericmuyser/hyper-ui').then(m => m.QuickLaunch),
        'Dropdown': () => import('@ericmuyser/hyper-ui').then(m => m.Dropdown)
    },
    props: {
        bgImage: {
            type: String,
            default: null
        },
        overlay: {
            type: Boolean,
            default: true
        },
        overlayOpacity: {
            type: [String, Number],
            default: 0.4
        },
        overlayColor: {
            type: String,
            default: '#000'
        }
    },
    data() {
        return {
            gamesShortcuts: [
                {
                    'image': 'http://www.transparentpng.com/download/doom/tml22U-doom-game-free-cut-out.png'
                },
                {
                    'image': 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/46b63d3c-ae67-464c-9a37-670829b2a157/datt5yp-68d54e82-58e1-44f4-92e9-9a615ff30c63.png'
                },
                {
                    'image': 'http://icons.iconarchive.com/icons/3xhumed/mega-games-pack-38/256/Silent-Hunter-5-Battle-of-the-Atlantic-1-icon.png'
                },
                {
                    'image': 'http://bestgames4all.ru/uploads/images/e/a/_/ea_metro_2033_redux.jpg'
                },
                {
                    'image': 'https://steamuserimages-a.akamaihd.net/ugc/862861700716666132/4906F3679ACA4FAA7BAFBE194B6EBEE00D8ACA90/'
                },
                {
                    'image': 'http://pluspng.com/img-png/tom-clancys-ghost-recon-png-tom-clancys-ghost-recon-logo-png-picture-512.png'
                },
                {
                    'image': 'https://cdn.wccftech.com/wp-content/uploads/2014/05/Watch-Dogs-Logo4.png'
                },
                {
                    'image': 'https://www.digiseller.ru/preview/403777/p1_2208863_988b90bd.png'
                },
                {
                    'image': 'https://www.digiseller.ru/preview/403777/p1_2208863_35bf7488.png'
                },
                {
                    'image': 'https://www.digiseller.ru/preview/403777/p1_2208863_02419b9c.png'
                },
                {
                    'image': 'http://icons.iconarchive.com/icons/3xhumed/mega-games-pack-28/256/Rogue-Trooper-1-icon.png'
                },
                {
                    'image': 'http://icons.iconarchive.com/icons/3xhumed/mega-games-pack-38/256/Sniper-Ghost-Worrior-3-icon.png'
                }
            ]
        }
    },
    computed: {
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
    mounted() {
        document.getElementById('startup-loader').style.display = 'none'
    }
}
</script>

<style lang="scss" scoped>
    .launcher{
        display: flex;
        flex-wrap: wrap;
        position: relative;
        min-height: 100vh;
        width: 100%;
        padding-left: 100px;
        padding-top: 60px;
        background-size: cover;
        background: fixed no-repeat top center;
    }
    .launcher__overlay{
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: rgba( 0, 0, 0, .3 );
        z-index: 3;
    }
    .launcher__top-bar{
        position: fixed;
        z-index: 11;
        top: 0;
        left: 0;
        right: 0;
        height: 60px;
        display: flex;
        align-items: center;
        background: rgba(255, 255, 255, .4);
        border-bottom: 1px solid rgba( 255, 255, 255, .6);
        padding: 10px;
    }
    .launcher__top-bar-left,
    .launcher__top-bar-right{
        display: flex;
        ul{
            padding: 0;
            margin: 0;
            display: flex;
            align-items: center;
            li{
                list-style: none;
                margin: 0 10px;
                a{
                    text-transform: uppercase;
                    font-size: 20px;
                    font-weight: 500;
                    color: #fff;
                    opacity: .7;
                    text-shadow: 0 0 10px rgba(0, 0, 0, .7);
                    &:hover{
                        opacity: 1;
                        text-shadow: 0 0 10px #fff;
                        text-decoration: none;
                    }
                }
            }
        }
    }
    .game-shortcuts{
        position: fixed;
        top: 60px;
        bottom: 0;
        left: 0;
        /*padding: 5px;*/
        background: rgba(0, 0, 0, .7);
        border-right: 1px solid rgba(0, 0, 0, .9);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        overflow-x: hidden;
        overflow-y: auto;
        z-index: 10;
        &::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0) !important;
            border: 0 none !important;
            display: none;
            width: 0!important;
        }
    }
    .game-shortcuts__wrapper{
        /*display: flex;*/
        /*flex-direction: column;*/
        /*justify-content: space-between;*/
        /*padding: 5px;*/
        /*width: 100px;*/
    }
    .game-shortcuts__item{
        width: 80px;
        min-height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
        margin-bottom: 5px;
        border: 1px solid transparent;
        -webkit-flex: 1 1 auto;
        transition: all 200ms ease-in-out;
        transform: scale(0.95);
        img{
            width: 100%;
        }
        &:hover{
            cursor: pointer;
            transform: scale(1.1);
        }
    }
    .launcher__main-content{
        width: 100%;
        height: auto;
        padding: 20px;
        position: relative;
        z-index: 5;
    }
</style>
