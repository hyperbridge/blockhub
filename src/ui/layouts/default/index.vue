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
        <div class="page__content page-aside--hidden" id="page-content">
            
            <!-- PAGE ASIDE PANEL -->
            <div class="page-aside invert" id="page-aside">
                <c-navigation />
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
            
        </div>
        <!-- //END PAGE CONTENT -->
        
    </div>
    <!-- //END PAGE WRAPPER -->
    
</template>


<script>
export default {
    components: {
        'c-navigation': () => import('@/ui/components/navigation/wallet-navigation'),
        'c-header': () => import('@/ui/components/headers/basic')
    },
    mounted() {
        initBlockHubSettings()
    }
}
</script>

<style lang="scss" scoped>

</style>