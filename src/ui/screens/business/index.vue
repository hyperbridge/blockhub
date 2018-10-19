<template>
    <!--<c-layout :showRightPanel="false" :showLeftPanel="false">-->
    <div class="business-page">
        <div class="business-page__header">
            <div class="business-page__logo">
                <c-img src="/static/img/logo-white.svg" alt="Logo" />
            </div>
            <h2 class="text-white p-0 mb-0 ml-5 text-uppercase">
                Business Manager
            </h2>

            <div class="mr-0">
                <h3></h3>
            </div>
        </div>
        <div class="business-page__left-side">
            <div class="user-avatar">
                <c-img src="https://adrianperez.codes/logos/logo-1024.png"/>
            </div>
            <div class="text-center h3 mt-3 mb-1 p-0">
                Josh Merson
            </div>
            <div class="text-center mb-3">
                Global administrator
            </div>
            <c-button status="outline-info" size="md" class="my-2 justify-content-center" icon_hide>
                Our Clients
            </c-button>
            <c-button status="outline-info" size="md" class="my-2 justify-content-center" icon_hide>
                Recent projects
            </c-button>
            <c-button status="outline-info" size="md" class="my-2 justify-content-center" icon_hide>
                Company operators
            </c-button>

            <div class="projects-progress__list">
                <h5 class="text-uppercase font-weight-bold">
                    Current Projects Progress
                </h5>
                <ul>

                </ul>
            </div>
            <c-button status="outline-danger" style="margin-top: auto" size="md" class="mb-0 justify-content-center"
                      icon_hide>
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
                <hr/>
            </div>
            <div class="business-page__stats-row mt-2 mb-4">
                <c-icon-block icon="window-maximize" size="lg" class="stat-block-bg w-50">
                    <div class="h4 p-0 m-0 text-white font-weight-bold">
                        81
                    </div>
                    Count of active projects
                </c-icon-block>
                <c-icon-block icon="headset" size="lg" class="stat-block-bg w-50">
                    <div class="h4 p-0 m-0 text-white font-weight-bold">
                        12
                    </div>
                    Online operators
                </c-icon-block>
                <c-icon-block icon="dollar-sign" size="lg" class="stat-block-bg w-50">
                    <div class="h4 p-0 m-0 text-white font-weight-bold">
                        $ 37, 903
                    </div>
                    Payments summary
                </c-icon-block>
                <c-icon-block icon="life-ring" size="lg" class="stat-block-bg w-50">
                    <div class="h4 p-0 m-0 text-white font-weight-bold">
                        10 of 403
                    </div>
                    Count of opened tickets
                </c-icon-block>
            </div>
            <div class="mt-2">
                <table class="table invert table-striped table-bordered margin-bottom-20" style="min-width: 800px">
                    <thead>
                    <tr>
                        <th width="30"><label class="custom-control custom-checkbox"><input type="checkbox"
                                                                                            class="custom-control-input">
                            <span class="custom-control-label"></span></label></th>
                        <th width="100">ID</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Manager</th>
                        <th>Operators</th>
                        <th>Price</th>
                        <th width="100">Status</th>
                        <th width="30"></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><label class="custom-control custom-checkbox"><input type="checkbox"
                                                                                 class="custom-control-input"> <span
                            class="custom-control-label"></span></label></td>
                        <td>1442</td>
                        <td><a href="#" class="text-bold">Logo design for Company</a></td>
                        <td>10.04.18</td>
                        <td>
                            <div class="user user--bordered"><img src="assets/img/users/user_1.jpg">
                                <div class="user__name"><strong>Dmitry Ivaniuk</strong></div>
                            </div>
                        </td>
                        <td>
                            <div class="user-group user-group--bordered">
                                <div class="user"><img src="assets/img/users/user_2.jpg"></div>
                                <div class="user"><img src="assets/img/users/user_3.jpg"></div>
                                <div class="user"><img src="assets/img/users/user_4.jpg"></div>
                            </div>
                        </td>
                        <td>$200.00</td>
                        <td>
                            <button class="btn btn-outline-success btn-block btn-sm">New</button>
                        </td>
                        <td>
                            <button class="btn btn-secondary btn-icon btn-sm">
                                <i class="fas fa-pencil-alt"></i>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td><label class="custom-control custom-checkbox"><input type="checkbox"
                                                                                 class="custom-control-input"> <span
                            class="custom-control-label"></span></label></td>
                        <td>1441</td>
                        <td><a href="#" class="text-bold">Website development</a></td>
                        <td>09.04.18</td>
                        <td>
                            <div class="user user--bordered"><img src="assets/img/users/user_3.jpg">
                                <div class="user__name"><strong>Francisco Dero</strong></div>
                            </div>
                        </td>
                        <td>
                            <div class="user-group user-group--bordered">
                                <div class="user"><img src="assets/img/users/user_5.jpg"></div>
                                <div class="user"><img src="assets/img/users/user_6.jpg"></div>
                                <div class="user"><img src="assets/img/users/user_7.jpg"></div>
                            </div>
                        </td>
                        <td>$1,850.00</td>
                        <td>
                            <button class="btn btn-light btn-block btn-sm">Active</button>
                        </td>
                        <td>
                            <button class="btn btn-secondary btn-icon btn-sm">
                                <i class="fas fa-pencil-alt"></i>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td><label class="custom-control custom-checkbox"><input type="checkbox"
                                                                                 class="custom-control-input"> <span
                            class="custom-control-label"></span></label></td>
                        <td>1440</td>
                        <td><a href="#" class="text-bold">UI/UX design for backend panel</a></td>
                        <td>09.04.18</td>
                        <td>
                            <div class="user user--bordered"><img src="assets/img/users/user_1.jpg">
                                <div class="user__name"><strong>Dmitry Ivaniuk</strong></div>
                            </div>
                        </td>
                        <td>
                            <div class="user-group user-group--bordered">
                                <div class="user"><img src="assets/img/users/user_1.jpg"></div>
                                <div class="user"><img src="assets/img/users/user_2.jpg"></div>
                            </div>
                        </td>
                        <td>$990.00</td>
                        <td>
                            <button class="btn btn-light btn-block btn-sm">Active</button>
                        </td>
                        <td>
                            <button class="btn btn-secondary btn-icon btn-sm">
                                <i class="fas fa-pencil-alt"></i>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td><label class="custom-control custom-checkbox"><input type="checkbox"
                                                                                 class="custom-control-input"> <span
                            class="custom-control-label"></span></label></td>
                        <td>1438</td>
                        <td><a href="#" class="text-bold">Texts for personal website</a></td>
                        <td>08.04.18</td>
                        <td>
                            <div class="user user--bordered"><img src="assets/img/users/user_4.jpg">
                                <div class="user__name"><strong>Julia Comporova</strong></div>
                            </div>
                        </td>
                        <td>
                            <div class="user-group user-group--bordered">
                                <div class="user"><img src="assets/img/users/user_6.jpg"></div>
                            </div>
                        </td>
                        <td>$437.30</td>
                        <td>
                            <button class="btn btn-outline-secondary btn-block btn-sm">Finished</button>
                        </td>
                        <td>
                            <button class="btn btn-secondary btn-icon btn-sm">
                                <i class="fas fa-pencil-alt"></i>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td><label class="custom-control custom-checkbox"><input type="checkbox"
                                                                                 class="custom-control-input"> <span
                            class="custom-control-label"></span></label></td>
                        <td>1435</td>
                        <td><a href="#" class="text-bold">Content menagement</a></td>
                        <td>08.04.18</td>
                        <td>
                            <div class="user user--bordered"><img src="assets/img/users/user_7.jpg">
                                <div class="user__name"><strong>Andrew Conor</strong></div>
                            </div>
                        </td>
                        <td>
                            <div class="user-group user-group--bordered">
                                <div class="user"><img src="assets/img/users/user_7.jpg"></div>
                                <div class="user"><img src="assets/img/users/user_5.jpg"></div>
                            </div>
                        </td>
                        <td>$1,600.00</td>
                        <td>
                            <button class="btn btn-outline-warning btn-block btn-sm">Denied</button>
                        </td>
                        <td>
                            <button class="btn btn-secondary btn-icon btn-sm">
                                <i class="fas fa-pencil-alt"></i>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td><label class="custom-control custom-checkbox"><input type="checkbox"
                                                                                 class="custom-control-input"> <span
                            class="custom-control-label"></span></label></td>
                        <td>1433</td>
                        <td><a href="#" class="text-bold">Marketing strategy</a></td>
                        <td>05.04.18</td>
                        <td>
                            <div class="user user--bordered"><img src="assets/img/users/user_1.jpg">
                                <div class="user__name"><strong>Dmitry Ivaniuk</strong></div>
                            </div>
                        </td>
                        <td>
                            <div class="user-group user-group--bordered">
                                <div class="user"><img src="assets/img/users/user_2.jpg"></div>
                                <div class="user"><img src="assets/img/users/user_3.jpg"></div>
                                <div class="user"><img src="assets/img/users/user_4.jpg"></div>
                                <div class="user"><img src="assets/img/users/user_5.jpg"></div>
                            </div>
                        </td>
                        <td>$8,000.00</td>
                        <td>
                            <button class="btn btn-outline-secondary btn-block btn-sm">Finished</button>
                        </td>
                        <td>
                            <button class="btn btn-secondary btn-icon btn-sm">
                                <i class="fas fa-pencil-alt"></i>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td><label class="custom-control custom-checkbox"><input type="checkbox"
                                                                                 class="custom-control-input"> <span
                            class="custom-control-label"></span></label></td>
                        <td>1431</td>
                        <td><a href="#" class="text-bold">Website markup</a></td>
                        <td>03.04.18</td>
                        <td>
                            <div class="user user--bordered"><img src="assets/img/users/user_7.jpg">
                                <div class="user__name"><strong>Alex Donorsky</strong></div>
                            </div>
                        </td>
                        <td>
                            <div class="user-group user-group--bordered">
                                <div class="user"><img src="assets/img/users/user_8.jpg"></div>
                            </div>
                        </td>
                        <td>$510.00</td>
                        <td>
                            <button class="btn btn-outline-danger btn-block btn-sm">Closed</button>
                        </td>
                        <td>
                            <button class="btn btn-secondary btn-icon btn-sm">
                                <i class="fas fa-pencil-alt"></i>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td><label class="custom-control custom-checkbox"><input type="checkbox"
                                                                                 class="custom-control-input"> <span
                            class="custom-control-label"></span></label></td>
                        <td>1429</td>
                        <td><a href="#" class="text-bold">Adsense adv company</a></td>
                        <td>03.04.18</td>
                        <td>
                            <div class="user user--bordered"><img src="assets/img/users/user_1.jpg">
                                <div class="user__name"><strong>Dmitry Ivaniuk</strong></div>
                            </div>
                        </td>
                        <td>
                            <div class="user-group user-group--bordered">
                                <div class="user"><img src="assets/img/users/user_3.jpg"></div>
                                <div class="user"><img src="assets/img/users/user_4.jpg"></div>
                            </div>
                        </td>
                        <td>$1000.00</td>
                        <td>
                            <button class="btn btn-outline-success btn-block btn-sm">Done</button>
                        </td>
                        <td>
                            <button class="btn btn-secondary btn-icon btn-sm">
                                <i class="fas fa-pencil-alt"></i>
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <!--</c-layout>-->
</template>

<script>
    export default {
        name: 'business-screen',
        components: {
            'c-icon-block': (resolve) => require(['@/ui/components/block/with-icon'], resolve)
        },
        data(){
            return{
                loadingState: true,
            }
        },
        mounted(){
            this.$nextTick(() => {
                this.loadingState = false
            })
        }
    }
</script>

<style lang="scss" scoped>
    .business-page {
        display: flex;
        align-items: stretch;
        flex-wrap: nowrap;
        color: #fff;
    }

    .business-page__header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        padding: 5px 30px;
        height: 60px;
        background: rgba(0, 0, 0, .55);
        z-index: 5;
        display: flex;
        align-items: center;
    }
    .business-page__logo{
        img{
            height: 50px;
            width: auto;
        }
    }

    .business-page__left-side {
        width: 270px;
        padding: 90px 30px 30px;
        display: flex;
        flex-direction: column;
        background: rgba(0, 0, 0, .16);
        min-height: 100vh;
        color: #fff;
        .user-avatar {
            width: 180px;
            max-width: 100%;
            margin: 0 auto;
            img {
                width: 100%;
            }
        }
    }

    .business-page__main-content {
        width: calc(100% - 250px);
        padding: 90px 30px 30px;
        display: flex;
        flex-direction: column;
    }

    .business-page__stats-row{
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
        .block-icon{
            margin-right: 30px;
            width: 25%;
            &:last-child{
                margin-right: 0;
            }
        }
    }

    .projects-progress__list {
        padding-top: 25px;
        margin-top: 25px;
        height: 230px;
        border-top: 1px solid rgba(255, 255, 255, .1);
    }

    .stat-block-bg {
        background: rgba(0, 0, 0, .2);
        border-radius: 5px;
        padding: 15px;
        border: 1px solid rgba(0, 0, 0, .4)
    }

    .table{
        border-color: #505169;
        thead{
            th{
                color: #fff;
                font-weight: bold;
            }
        }
        td, tr, th{
            border-color: #505169;
        }
        tr{
            background: rgba(255, 255, 255, .05);
        }
    }
</style>
