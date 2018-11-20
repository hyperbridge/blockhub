<template>
    <!-- PAGE WRAPPER -->
    <div id="business-app" class="page page--w-header page--w-container">

        <transition name="slideDown">
            <div class="page-top-bar draggable" :class="{'invert' : darkMode}">
                <a class="logo-holder undraggable" href="#/">
                    <c-img src="/static/img/logo-white.svg" alt="Logo" v-if="darkMode" />
                    <c-img src="/static/img/logo.svg" alt="Logo" style="height: 90%; margin-top: 2%" v-else />
                </a>
                <div class="h2 ml-4 mb-0 pl-4 text-uppercase border-left">
                    Business Manager
                </div>
                <div class="mb-0 float-right h5" style="margin-left: auto">
                    {{ current_identity.name }}
                </div>
            </div>
        </transition>

        <!-- PAGE LEFT PANEL -->
        <transition name="slideDown">
            <sidebar-menu width="250px" :menu="menu" :class="{'light-v' : !darkMode}" @collapse="minimized = !minimized" />
        </transition>
        <!---->

        <!-- PAGE CONTENT -->
        <transition name="fade">
            <div class="content" id="content" :class="{'left-sidebar': showLeftPanel, 'right-sidebar': showRightPanel, 'invert' : darkMode, 'is-minimized' : minimized }">
                <!-- PAGE HEADING -->
                <div class="page-heading">
                    <div class="page-heading__container">
                        <div>
                            <h3 class="page-heading__title p-0 m-0">
                                {{ page_title }}
                            </h3>
                        </div>
                        <div>
                            <slot name="action" />
                        </div>
                    </div>

                    <nav aria-label="breadcrumb" role="navigation">
                        <ul class="breadcrumb" v-if="breadcrumbLinksData.length">
                            <li v-for="(link, index) in breadcrumbLinksData" class="breadcrumb-item" :class="{ 'active': index == breadcrumbLinksData.length-1 }" :key="index">
                                <router-link :to="link.to" v-if="link.to">{{ link.title }}</router-link>
                                <template v-else>
                                    {{ link.title }}
                                </template>
                            </li>
                        </ul>
                    </nav>
                </div>
                <!-- //END PAGE HEADING -->
                <slot />
            </div>
        </transition>
        <!---->

        <!-- PAGE RIGHT PANEL -->
        <transition name="slideRight">
            <div class="page-sidepanel text-right" id="page-sidepanel" v-if="showRightPanel" :class="{'invert' : darkMode}">
                <div class="page-sidepanel__content">
                    <slot name="right" />
                </div>
            </div>
        </transition>
        <!---->
    </div>
</template>


<script>
    import { SidebarMenu } from 'vue-sidebar-menu'

    export default {
        name: 'business',
        props: {
            showLeftPanel: {
                type: Boolean,
                default: true
            },
            showRightPanel: {
                type: Boolean,
                default: false
            },
            title: String
        },
        components: {
            SidebarMenu,
            'c-page-heading': (resolve) => require(['@/ui/components/business/page_heading'], resolve),
        },
        data() {
            return {
                loadingState: true,
                darkMode: false,
                minimized: false,
                breadcrumbLinksData: [],
                page_title: '',
                menu: [
                    {
                        title: 'Marketplace',
                        icon: 'fas fa-home',
                        child: [
                            {
                                title: 'Products',
                                // icon: 'fas fa-square-full icon-sm',
                                child: [
                                    {
                                        href: '/business/products',
                                        title: 'All Products',
                                        icon: 'fas fa-square-full icon-sm',
                                    },
                                    {
                                        href: '/business/product/new',
                                        title: 'New Product',
                                        icon: 'fas fa-square-full icon-sm'
                                    }
                                ]
                            },
                            {
                                title: 'Crowdfunds',
                                child: [
                                    {
                                        href: '/business/project/new',
                                        title: 'New Crowdfunds',
                                        icon: 'fas fa-square-full icon-sm'
                                    },
                                ]
                            }
                        ]
                    },
                    {
                        header: true,
                        title: 'Setting',
                    },
                    {
                        title: 'Release manager',
                        icon: 'fas fa-cog',
                        child: [
                            {
                                href: '/business/release-history',
                                title: 'History',
                                icon: 'fas fa-square-full icon-sm'
                            }
                        ]
                    }
                ]
            }
        },
        computed: {
            current_identity() {
                return this.$store.state.application.account && this.$store.state.application.account.current_identity
            },
        },
        methods:{
            updateBreadcrumbLinks() {
                console.log('updateBreadcrumbLinks')
                console.log(this.$route.meta.breadcrumb)
                this.breadcrumbLinksData = this.$route.meta.breadcrumb
            },
        },
        mounted() {
            this.$nextTick(() => {
                this.loadingState = false
                document.getElementById('startup-loader').style.display = 'none'
            })

            let body = document.body;
            body.classList.add("light");
            this.updateBreadcrumbLinks();
            console.log('layout mounted')
        },
        beforeDestroy(){
            let body = document.body;
            body.classList.remove("light");
            console.log('layout all most destroyed')
        },
        watch:{
            '$route'(to, from) {
                this.updateBreadcrumbLinks();
                this.page_title = to.meta.title || 'Dashboard';
            },
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

<style lang="scss">
    body{
        &.light{
            background: #f7f6f7!important;
            font-size: 14px;
            #header-bg,
            #right-bg,
            #left-bg{
                display: none!important;
            }
            #business-app {
                ::-webkit-scrollbar-track {
                    /* background: rgba(0, 0, 0, .3);
                    border-radius: 0 4px 4px 0; */
                }

                ::-webkit-scrollbar-thumb {
                    background: #cccccc;
                    border-radius: 8px;
                    border: unset;
                }

                ::-webkit-scrollbar {
                    width: 7px;
                    height: 4px;
                }
            }
        }
    }

    .v-sidebar-menu.light-v{
        padding-top: 70px;
        background-color: #fff!important;
        border-right: 1px solid rgba(0, 0, 0, 0.1);
        z-index: 20;
        .vsm-header{
            color: #323c47!important;
        }
        .vsm-item{
            .vsm-link{
                padding: 5px 10px;
                .vsm-icon{
                    background: none!important;
                    color: #323c47!important;
                    font-size: 20px;
                }
                .vsm-link,
                .vsm-title,
                .vsm-arrow{
                    color: #323c47!important;
                    font-size: 14px;
                }
                &:hover{
                    background: rgba(0, 0, 0, .03)!important;
                }
            }
            &.active-item{
                .vsm-link{
                    font-weight: normal;
                }
            }
        }
        .vsm-dropdown {
            .vsm-list {
                background: #f2f2f2 !important;
                padding: 0px;
            }
            .vsm-link{
                display: flex;
                align-items: center;
                .icon-sm{
                    height: 30px;
                    line-height: 30px;
                    width: 30px;
                    text-align: center;
                    font-size: 5px;
                }
                &.is-active{
                    .vsm-icon{
                        color: #f50!important;
                    }
                }
            }
        }
        .vsm-item.first-item.open-item>.vsm-link{
            background: #f2f2f2!important;
        }
        .collapse-btn{
            background: rgba(0, 0, 0, .03)!important;
            color: #323c47!important;
            &:focus{
                user-select: none!important;
                box-shadow: none!important;
                outline: none;
            }
        }
    }
</style>

<style lang="scss" scoped>
    $light_color_1: #fff;
    $dark_color_1: #30304d;
    $dark_color_2: #202133;

    .page{
        display: flex;
        width: 100%;
        flex-wrap: nowrap;
        flex-direction: unset;
    }
    .page-heading{
        border-bottom: 1px solid rgba(0, 0, 0, 0.1)!important;
        margin-bottom: 15px!important;
        display: flex;
        width: 100%;
        flex-direction: column;
        padding-top: 5px;
    }
    .page-heading__container{
        align-items: center;
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
    .page-heading__title{
        font-weight: 500;
    }
    .page-top-bar{
        display: flex;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        padding: 5px 25px;
        z-index: 21;
        height: 60px;
        background: #fff;
        color: #c3c3d6;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        box-shadow: 0 0 10px rgba(0, 0, 0, .4), 0 0 10px rgba(0, 0, 0, .4);
        .logo-holder{
            height: 50px;
            width: auto;
            img{
                height: 50px;
            }
        }
        &.invert{
            background: $dark_color_2;
            color: #fff;
            box-shadow: unset;
        }
    }
    .page-sidepanel,
    .page-aside{
        top: 0;
        width: 250px;
        padding: 80px 10px 20px;
        display: flex;
        flex-direction: column;
        background: #fff;
        transition: all 200ms ease-in-out;
        .divider{
            opacity: .3;
        }
        &.invert{
            background: $dark_color_2;
            color: #fff;
            .text-secondary{
                color: #5D75F7!important;
            }
        }
        &.is-minimized{
            width: 60px;
        }
    }
    .page-aside .navigation,
    .page-sidepanel .navigation{
        padding: 0;
    }
    .content{
        width: 100%;
        padding-top: 60px;
        border-left: 1px solid rgba(0, 0, 0, 0.1);
        border-right: 1px solid rgba(0, 0, 0, 0.1);
        transition: all 200ms ease-in-out;
        position: relative;
        z-index: 10;
        &.left-sidebar{
            padding: 60px 0 0 250px;
        }
        &.left-sidebar.right-sidebar{
            padding: 60px 250px 0;
        }
        &.invert{
            background: $dark_color_1;
            color: #fff;
            .page-heading{
                background: transparent!important;
            }
            .widget{
                background: rgba(0, 0, 0, .1);
                color: #fff!important;
            }
            .card{
                background: rgba(0, 0, 0, .1);
            }
            .text-secondary{
                color: #5D75F7!important;
            }
        }
        &.is-minimized{
            padding-left: 50px;
        }
    }
    .left-sidebar__option{
        margin: -2px -10px 20px;
        display: flex;
        padding: 0 10px 10px;
        border-bottom: 1px solid rgba(0, 0, 0, .1);
        text-align: right;
        button{
            font-size: 15px;
            background: #f5f6f5;
            border: none;
            color: #666666;
            width: 25px;
            height: 25px;
            line-height: 20px;
            text-align: center;
            border-radius: 3px;
            padding: 0;
            margin-left: auto;
            &:active,
            &:focus{
                user-select: none;
                box-shadow: none;
                outline: none;
            }
        }
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
        opacity: 0;
    }
</style>
