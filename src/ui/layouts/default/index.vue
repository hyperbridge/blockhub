<template>
    <!-- PAGE WRAPPER -->
    <div class="page page--w-header page--w-container">
        <!-- PAGE HEADER -->
            <c-header />
        <!-- //END PAGE HEADER -->
        
        <!-- PAGE CONTENT WRAPPER -->
        <div class="page__content page__content-invert invert" id="page-content">
            <div class="loading loading--w-spinner" v-if="!is_connected">
                <div>
                    <div>
                        <div class="loading-spinner"></div>
                        <p class="loading__message">{{ user_submitted_connection_message.message }}</p>
                        <p class="loading__user">Submitted by <a :href="`/#/identity/${user_submitted_connection_message.user.id}`">@{{ user_submitted_connection_message.user.name }}</a></p>
                    </div>

                    <h1 class="loading__status-code" v-if="connection_status.code">ERROR {{ connection_status.code }}</h1>
                    
                    <p class="loading__status-message">{{ connection_status.message }}</p>
                    
                    <div class="loading__links">
                        <p>Connection problems? Let us know!</p>
                        <a href="https://twitter.com/hyperbridge"><span class="fab fa-twitter"></span> Tweet Us</a>
                        <a href="https://hyperbridge.org/status"><span class="fas fa-globe-americas"></span> Server Status</a>
                    </div>
                </div>
            </div>
            
            <!-- PAGE ASIDE PANEL -->
            <div class="page-aside invert" id="page-aside">
                <component v-if="navigationComponent" v-bind:is="`c-${navigationComponent}`"></component>
            </div>
            <!-- //END PAGE ASIDE PANEL -->

            <slot></slot>

            <!-- SIDEPANEL -->
            <div class="page-sidepanel invert" id="page-sidepanel">
                <div class="page-sidepanel__content">
                    <h3>TOP LISTS</h3>

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
                        </ul>
                    </div>
                </div>
                <div class="page-sidepanel__button page-sidepanel__button--lower" data-action="sidepanel-hide"><div></div></div>
            </div>
            <!-- //END SIDEPANEL -->

            <div class="status-bar" hidden>
                {{ connection_status.message }}
            </div>
        </div>
        <!-- //END PAGE CONTENT -->
        
    </div>
    <!-- //END PAGE WRAPPER -->
</template>


<script>
export default {
    props: [
        'navigationKey'
    ],
    components: {
        'c-header': () => import('@/ui/components/headers/basic'),
        'c-wallet-navigation': () => import('@/ui/components/navigation/wallet'),
        'c-account-navigation': () => import('@/ui/components/navigation/account'),
        'c-settings-navigation': () => import('@/ui/components/navigation/settings'),
        'c-help-navigation': () => import('@/ui/components/navigation/help'),
        'c-funding-navigation': () => import('@/ui/components/navigation/funding'),
        'c-store-navigation': () => import('@/ui/components/navigation/store'),
        'c-asset-navigation': () => import('@/ui/components/navigation/asset'),
        'c-product-navigation': () => import('@/ui/components/navigation/product'),
        'c-project-navigation': () => import('@/ui/components/navigation/project')
    },
    computed: {
        is_connected() {
            return this.$store.state.network.connection.datasource
        },
        connection_status() {
            return this.$store.state.network.connection.status
        },
        user_submitted_connection_message() {
            return this.$store.state.network.user_submitted_connection_messages[0]
        }
    },
    data() {
        return {
            navigationComponent: this.navigationKey || false
        }
    }
}
</script>

<style lang="scss" scoped>

    .page-sidepanel {
        text-align: right;
        padding-right: 30px;
    }

    .navigation .text {
        float: right;
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

    .loading > div {
        width: 100%;
        height: 100%;
        position: relative;
        text-align: center;
        padding-top: 100px;
        font-size: 14px;
    }

    .loading--w-spinner > div .loading-spinner {
        position: relative;
        zoom: 4;
        margin: 0 auto;
    }

    .loading__message {
        color: #fff;
        font-size: 20px;
        font-style: italic;
        text-transform: uppercase;
        margin-top: 40px;
    }

    .loading__user {
        color: #999;
        text-transform: uppercase;

        a {
            color: #ddd;
            font-weight: bold;
        }
    }

    .loading__status-code {
        margin-top: 80px;
    }

    .loading__status-message {
        color: #ddd;
        font-size: 16px;
        margin-top: 30px;
        text-transform: uppercase;
    }

    .loading__links {
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
</style>
