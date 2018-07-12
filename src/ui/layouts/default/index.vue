<template>
    <!-- PAGE WRAPPER -->
    <div class="page page--w-header page--w-container">
        <!-- PAGE HEADER -->
            <c-header />
        <!-- //END PAGE HEADER -->
        
        <!-- PAGE CONTAINER -->
        <div class="page__container invert">

        </div>
        <!-- //END PAGE CONTAINER -->
        
        <!-- PAGE CONTENT WRAPPER -->
        <div class="page__content page__content-invert invert page-aside--hidden" id="page-content">
            
            <!-- PAGE ASIDE PANEL -->
            <div class="page-aside invert" id="page-aside">
                <component v-if="navigationComponent" v-bind:is="`c-${navigationComponent}`"></component>
            </div>
            <!-- //END PAGE ASIDE PANEL -->

            <slot></slot>

            <!-- SIDEPANEL -->
            <div class="page-sidepanel invert" id="page-sidepanel">
                <div class="page-sidepanel__content">
                    
                </div>
                <div class="page-sidepanel__button page-sidepanel__button--lower" data-action="sidepanel-hide"><div></div></div>
            </div>
            <!-- //END SIDEPANEL -->

            <div class="status-bar" v-if="!isConnected">
                {{ connectionMessage }}
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
        'c-store-navigation': () => import('@/ui/components/navigation/store'),
        'c-product-navigation': () => import('@/ui/components/navigation/product'),
        'c-project-navigation': () => import('@/ui/components/navigation/project')
    },
    computed: {
        isConnected() {
            return this.$store.state.network.connection.internet
        },
        connectionMessage() {
            return this.$store.state.network.connectionMessage
        }
    },
    data() {
        return {
            navigationComponent: this.navigationKey || false
        }
    },
    mounted() {
    }
}
</script>

<style lang="scss" scoped>
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
</style>