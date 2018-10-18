<template>
    <c-layout :showRightPanel="false" :showLeftPanel="false">
        <div class="business-page">
            <div class="business-page__header">
                <div class="business-page__logo">

                </div>
            </div>
            <div class="business-page__left-side">
                <div class="user-avatar">
                    <c-img src="https://adrianperez.codes/logos/logo-1024.png" />
                </div>
                <div class="text-center h3 mt-3 mb-1 p-0">
                    Josh Merson
                </div>
                <div class="text-center mb-3">
                    Global administrator
                </div>
                <c-button status="outline-info" size="md" class="my-1 justify-content-center" icon_hide>
                    Our Clients
                </c-button>
                <c-button status="outline-info" size="md" class="my-1 justify-content-center" icon_hide>
                    Recent projects
                </c-button>
                <c-button status="outline-info" size="md" class="my-1 justify-content-center" icon_hide>
                    Company operators
                </c-button>

                <div class="projects-progress__list">
                    <h4 class="text-uppercase font-weight-bold">
                        Current Projects Progress
                    </h4>
                    <ul>

                    </ul>
                </div>
                <c-button status="outline-danger" style="margin-top: auto" size="md" class="mb-0 justify-content-center" icon_hide>
                    Change account / Log off
                </c-button>
            </div>
            <div class="business-page__main-content">
                <div>
                    <div class="h2 p-0 m-0">
                        Recent Project
                    </div>
                    <div class="small">
                        Welcome to BlockHub Business Manager
                    </div>
                    <hr />
                </div>
                <div class="d-flex align-items-center my-4">
                    <c-icon-block icon="window-maximize" class="stat-block-bg mr-4">
                        <div class="h6 p-0 m-0 text-white font-weight-bold">
                            81
                        </div>
                        Count of active projects
                    </c-icon-block>
                    <c-icon-block icon="headset" class="stat-block-bg mr-4">
                        <div class="h6 p-0 m-0 text-white font-weight-bold">
                            12
                        </div>
                        Online operators
                    </c-icon-block>
                    <c-icon-block icon="dollar-sign" class="stat-block-bg mr-4">
                        <div class="h6 p-0 m-0 text-white font-weight-bold">
                            $ 37, 903
                        </div>
                        Payments summary
                    </c-icon-block>
                    <c-icon-block icon="life-ring" class="stat-block-bg mr-4">
                        <div class="h6 p-0 m-0 text-white font-weight-bold">
                            10 of 403
                        </div>
                        Count of opened tickets
                    </c-icon-block>
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
    export default {
        name: 'business-screen',
        components:{
            'c-icon-block': (resolve) => require(['@/ui/components/block/with-icon'], resolve)
        }
    }
</script>

<style lang="scss" scoped>
    .business-page{
        display: flex;
        align-items: stretch;
        flex-wrap: nowrap;
    }
    .business-page__header{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        padding: 10px;
        background: rgba(0, 0, 0, .25);
        z-index: 5;
    }
    .business-page__left-side{
        width: 300px;
        padding: 30px;
        display: flex;
        flex-direction: column;
        background: rgba(0, 0, 0, .16);
        min-height: calc(100vh - 150px);
        .user-avatar{
            width: 180px;
            max-width: 100%;
            margin: 0 auto;
            img{
                width: 100%;
            }
        }
    }
    .business-page__main-content{
        width: calc(100% - 250px);
        padding: 30px;
        display: flex;
        flex-direction: column;
    }

    .projects-progress__list{
        padding-top: 25px;
        margin-top: 25px;
        height: 230px;
        border-top: 1px solid rgba(255, 255, 255, .1);
    }
    .stat-block-bg{
        background: rgba(0, 0, 0, .2);
        border-radius: 5px;
        padding: 15px;
        border: 1px solid rgba(0, 0, 0, .4)
    }
</style>
