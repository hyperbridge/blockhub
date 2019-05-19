<template>
    <div class="launcher" :style=" `background-image: url(${bgImage})`">
        <div class="launcher__overlay" :style="`opacity: ${overlayOpacity}; background-color: ${overlayColor}`" v-if="overlay"></div>
        <div class="launcher__top-bar">
            <router-link class="app-header__bar-center margin-right-50" :to="isLocked ? '#' : '/'">
                <c-loading-logo :isLoading="isLoader" />
            </router-link>
            <nav class="launcher__top-bar-left">
                <ul>
                    <li class="app-header__create-account-btn" v-if="desktopMode && !signedIn && !isLocked">
                        <router-link to="/account/signup" class="">
                            CREATE ACCOUNT
                        </router-link>
                    </li>
                    <li class="app-header__download-btn" v-if="!desktopMode">
                        <router-link to="/download" class="">
                            DOWNLOAD
                        </router-link>
                    </li>
                    <li v-if="signedIn">
                        <router-link to="/">
                            Store
                        </router-link>
                    </li>
                </ul>
            </nav>
            <slot name="header" />
            <div class="launcher__top-bar-right ml-auto">
                <nav>
                    <ul>
                        <li v-if="!isLocked" hidden>
                            <c-quick-launch class="quick-launch" style="margin-top: -7px;" />
                        </li>
                        <li v-if="signedIn" class="token">
                            <router-link class="mt-1" to="/token">
                                <span class="token__count token__count--loading" v-if="tokenCount === null">
                                    <c-loading :enabled="true" />
                                </span>
                                <span class="token__count" v-if="tokenCount !== null">
                                    {{ tokenCount }} <span class="icon fa fa-coins"></span>
                                </span>
                                <span class="text">Tokens</span>
                            </router-link>
                        </li>
                        <li v-if="signedIn">
                            <c-dropdown class="ml-4 account-menu mt-1" style="z-index: 12" @show="onShowMenu" @hide="onHideMenu">
                                <template slot="title">
                                    <div class="__title">
                                        <i class="fa fa-user"></i>
                                        {{ activeProfile && activeProfile.name }}
                                    </div>
                                </template>
                                <ul class="item-dropdown">
                                    <li>
                                        <c-button status="none" to="/account">
                                            <i class="fas fa-user"></i>
                                            Account Info
                                        </c-button>
                                    </li>
                                    <li v-darklaunch="'WALLETS'">
                                        <c-button status="none" to="/account/wallets">
                                            <i class="fas fa-credit-card"></i>
                                            My Wallets
                                        </c-button>
                                    </li>
                                    <li v-if="activeProfile">
                                        <c-button status="none" :to="`/profile/${activeProfile.id}`">
                                            <i class="fas fa-user"></i>
                                            View Public Profile
                                        </c-button>
                                    </li>
                                    <li v-if="signedIn && activeProfile" v-darklaunch="'CONTACTS'">
                                        <c-button status="none" :to="`/profile/${activeProfile.id}/contacts`">
                                            <i class="fas fa-users"></i>
                                            Contacts
                                        </c-button>
                                    </li>
                                    <li>
                                        <c-button status="none" to="/account/profiles">
                                            <i class="fas fa-users-cog"></i>
                                            Profile Manager
                                        </c-button>
                                    </li>
                                    <li>
                                        <c-button status="none" @click="$store.commit('application/showProfileChooser', true)">
                                            <i class="fas fa-user-edit"></i>
                                            Switch Profile
                                        </c-button>
                                    </li>
                                    <li>
                                        <c-button status="none" to="/account/signout">
                                            <i class="fa fa-sign-out-alt"></i>
                                            Sign Out
                                        </c-button>
                                    </li>
                                    <hr>
                                    <li v-darklaunch="'CHAT'">
                                        <c-button status="none" to="/settings/chat">
                                            <i class="fas fa-comments"></i>
                                            Chat Settings
                                        </c-button>
                                    </li>
                                    <li>
                                        <c-button status="none" to="/help">
                                            <i class="fas fa-info-circle"></i>
                                            FAQ
                                        </c-button>
                                    </li>
                                </ul>

                            </c-dropdown>
                        </li>
                        <li v-if="!signedIn && !isLocked">
                            <router-link @click="$store.commit('application/activateModal', 'login')">
                                Sign In
                            </router-link>
                        </li>
                        <li v-if="!isLocked">
                            <router-link to="/help">
                                Help
                            </router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="game-shortcuts">
            <div class="game-shortcuts__wrapper">
                <div class="game-shortcuts__item" v-for="game in gamesShortcuts">
                    <img :src="game.image"/>
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
        props: {
            bgImage: String,
            overlay: {
                type: Boolean,
                default: true
            },
            overlayOpacity:{
                type: [ String, Number ],
                default: 0.4
            },
            overlayColor:{
                type: String,
                default: '#000'
            }
        },
        components:{
            'c-loading-logo': () => import('~/components/loading-bar/logo-loader').then(m => m.default || m),
            'c-quick-launch': () => import('~/components/quick-launch').then(m => m.default || m),
            'c-dropdown': () => import('~/components/dropdown-menu/type-4').then(m => m.default || m),
        },
        data(){
            return{
                gamesShortcuts: [
                    {
                        "image": "http://www.transparentpng.com/download/doom/tml22U-doom-game-free-cut-out.png",
                    },
                    {
                        "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/46b63d3c-ae67-464c-9a37-670829b2a157/datt5yp-68d54e82-58e1-44f4-92e9-9a615ff30c63.png",
                    },
                    {
                        "image": "http://icons.iconarchive.com/icons/3xhumed/mega-games-pack-38/256/Silent-Hunter-5-Battle-of-the-Atlantic-1-icon.png",
                    },
                    {
                        "image": "http://bestgames4all.ru/uploads/images/e/a/_/ea_metro_2033_redux.jpg",
                    },
                    {
                        "image": "https://steamuserimages-a.akamaihd.net/ugc/862861700716666132/4906F3679ACA4FAA7BAFBE194B6EBEE00D8ACA90/",
                    },
                    {
                        "image": "http://pluspng.com/img-png/tom-clancys-ghost-recon-png-tom-clancys-ghost-recon-logo-png-picture-512.png",
                    },
                    {
                        "image": "https://cdn.wccftech.com/wp-content/uploads/2014/05/Watch-Dogs-Logo4.png",
                    },
                    {
                        "image": "https://www.digiseller.ru/preview/403777/p1_2208863_988b90bd.png",
                    },
                    {
                        "image": "https://www.digiseller.ru/preview/403777/p1_2208863_35bf7488.png",
                    },
                    {
                        "image": "https://www.digiseller.ru/preview/403777/p1_2208863_02419b9c.png",
                    },
                    {
                        "image": "http://icons.iconarchive.com/icons/3xhumed/mega-games-pack-28/256/Rogue-Trooper-1-icon.png",
                    },
                    {
                        "image": "http://icons.iconarchive.com/icons/3xhumed/mega-games-pack-38/256/Sniper-Ghost-Worrior-3-icon.png",
                    }
                ],
            }
        },
        computed:{
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
        },
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
