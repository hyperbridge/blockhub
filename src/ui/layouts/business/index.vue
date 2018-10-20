<template>
    <!-- PAGE WRAPPER -->
    <div class="page page--w-header page--w-container">
        <div class="page-top-bar">
            <div class="logo-holder">
                <c-img src="/static/img/logo.svg" alt="Logo" />
            </div>
            <div class="h2 ml-4 mb-0 pl-4 text-uppercase border-left">
                Business Manager
            </div>
            <div class="mb-0 float-right h5" style="margin-left: auto">
                User Name
            </div>
        </div>
        <!-- PAGE LEFT PANEL -->
        <div class="page-aside left-sidebar" id="page-aside" v-if="showLeftPanel">
            <div class="left-sidebar__content" id="scroll_sidebar" ref="scroll_sidebar">
                <c-business-sidebar />
                <slot name="left" />
            </div>
        </div>
        <!---->

        <!-- PAGE CONTENT -->
        <div class="content" id="content" :class="{'left-sidebar': showLeftPanel, 'right-sidebar': showRightPanel }">
            <slot />
        </div>
        <!---->

        <!-- PAGE RIGHT PANEL -->
        <div class="page-sidepanel text-right" id="page-sidepanel" v-if="showRightPanel">
            <div class="page-sidepanel__content">
                <slot name="right" />
            </div>
        </div>
        <!---->
    </div>
</template>

<script>
    export default {
        name: 'business',
        props:{
            showLeftPanel:{
                type: Boolean,
                default: true
            },
            showRightPanel:{
                type: Boolean,
                default: false
            }
        },
        components:{
            'c-business-sidebar': (resolve) => require(['@/ui/components/business/sidepanel'], resolve)
        },
        data(){
            return{
                loadingState: true,
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.loadingState = false
                document.getElementById('startup-loader').style.display = 'none'
            })
            let body = document.body;

            body.classList.add("light");
        },
        beforeDestroy(){
            let body = document.body;
            body.classList.remove("light");
        }
    }
</script>
<style lang="scss">
    body{
        &.light{
            background: #f7f6f7!important;
            #header-bg,
            #right-bg,
            #left-bg{
                display: none!important;
            }
        }
    }
</style>
<style lang="scss" scoped>
    body{
        background: #f7f6f7!important;
    }
    .page{
        display: flex;
        width: 100%;
        flex-wrap: nowrap;
        flex-direction: unset;
    }
    .page-heading{
        border-bottom: 1px solid rgba(0, 0, 0, 0.1)!important;
        background: #fff!important;
        margin-bottom: 15px!important;
    }
    .page-top-bar{
        display: flex;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        padding: 5px 25px;
        z-index: 10;
        height: 60px;
        background: #fff;
        color: #c3c3d6;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        box-shadow: 0 0 15px rgba(0, 0, 0, .4);
        .logo-holder{
            height: 50px;
            width: auto;
            img{
                height: 50px;
            }
        }
    }
    .page-sidepanel,
    .page-aside{
        top: 0;
        width: 250px;
        padding: 80px 20px 20px;
        display: flex;
        flex-direction: column;
        background: #fff;
        .divider{
            opacity: .3;
        }
    }
    .content{
        width: 100%;
        padding-top: 60px;
        border-left: 1px solid rgba(0, 0, 0, 0.1);
        border-right: 1px solid rgba(0, 0, 0, 0.1);
        &.left-sidebar,
        &.right-sidebar{
            width: calc( 100% - 250px );
        }
        &.left-sidebar.right-sidebar{
            width: calc( 100% - 500px );
        }
    }
</style>
