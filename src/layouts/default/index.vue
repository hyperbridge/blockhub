<template>

    <!-- PAGE WRAPPER -->
    <div class="page page--w-header page--w-container">
        
        <!-- PAGE HEADER -->
        <header class="page__header invert">
            <c-example-banking />
        </header>
        <!-- //END PAGE HEADER -->
        
        <!-- PAGE CONTAINER -->
        <div class="page__container invert">
            <nav class="horizontal-navigation">
                <button class="btn btn-light btn--icon" data-action="horizontal-show"><span class="fa fa-bars"></span> Toggle navigation</button>
                
                <ul>                        
                    <li>
                        <a href="solutions-banking-main.html">
                            <span class="icon li-man"></span>
                            <span class="text">Account</span>
                        </a>
                    </li>
                    <li>
                        <a href="solutions-banking-cards.html">
                            <span class="icon li-credit-card"></span>
                            <span class="text">Cards</span>
                        </a>
                    </li>
                    <li>
                        <a href="solutions-banking-activity.html">
                            <span class="icon li-sync"></span>
                            <span class="text">Activity</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span class="icon li-wallet"></span>
                            <span class="text">Deposits</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span class="icon li-cog"></span>
                            <span class="text">Settings</span>
                        </a>
                    </li>
                </ul>
                
            </nav>
        </div>
        <!-- //END PAGE CONTAINER -->
        
        <!-- PAGE CONTENT WRAPPER -->
        <div class="page__content page-aside--hidden" id="page-content">
            
            <!-- PAGE ASIDE PANEL -->
            <div class="page-aside page-aside--hidden invert" id="page-aside">
                <c-default-w-user />
            </div>
            <!-- //END PAGE ASIDE PANEL -->
            
            <slot></slot>

        </div>
        <!-- //END PAGE CONTENT -->
        
    </div>
    <!-- //END PAGE WRAPPER -->
    
</template>


<script>
export default {
    components: {
        'c-default-w-user': () => import('@/components/navigation/default_w_user'),
        'c-example-banking': () => import('@/components/headers/example_banking')
    },
    created() {
        initBlockHubSettings()
    }
}
</script>

<style>

</style>