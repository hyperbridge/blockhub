<template>
    <!-- PAGE WRAPPER -->
    <div class="page page--w-header page--w-container">
        <div class="page-top-bar">
            <div class="logo-holder">
                <c-img src="/static/img/logo-white.svg" alt="Logo" />
            </div>
            <div class="h2 ml-4 mb-0 pl-4 text-uppercase text-white border-left">
                Business Manager
            </div>
            <div class="mb-0 float-right h5 text-white" style="margin-left: auto">
                User Name
            </div>
        </div>
        <!-- PAGE LEFT PANEL -->
        <div class="page-aside left-sidebar" id="page-aside" v-if="showLeftPanel">
            <div class="left-sidebar__content" id="scroll_sidebar" ref="scroll_sidebar">
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
        components:{},
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
    }
</script>
<style lang="scss">
    body{
        &.light{
            background: #f7f6f7!important;
        }
        #header-bg,
        #right-bg,
        #left-bg{
            display: none!important;
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
        background: #fff!important;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1)!important;;
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
        background: #222234;
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
        background: #30304B;
        color: #fff;
        display: flex;
        flex-direction: column;
        .divider{
            opacity: .3;
        }
    }
    .content{
        width: 100%;
        padding-top: 60px;
        &.left-sidebar,
        &.right-sidebar{
            width: calc( 100% - 250px );
        }
        &.left-sidebar.right-sidebar{
            width: calc( 100% - 500px );
        }
    }
</style>
