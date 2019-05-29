<template>
    <c-layout>
        <div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 col-lg-3">
                        <div class="widget">
                            <c-button to="/business/products" status="none" style="display: block">
                                <div class="widget__icon_layer widget__icon_layer--right">
                                    <span class="li-window"></span>
                                </div>
                                <div class="widget__container">
                                    <div class="widget__line">
                                        <div class="widget__icon">
                                            <span class="li-window"></span>
                                        </div>
                                        <div class="widget__title">Products</div>
                                        <div class="widget__subtitle"></div>
                                    </div>
                                    <div class="widget__box widget__box--left">
                                        <div class="widget__informer">{{ products.length }} active</div>
                                    </div>
                                </div>
                            </c-button>
                        </div>
                    </div>
                    <div class="col-12 col-lg-3">
                        <div class="widget">
                            <c-button to="/business/projects" status="none" style="display: block">
                                <div class="widget__icon_layer widget__icon_layer--right">
                                    <span class="li-window"></span>
                                </div>
                                <div class="widget__container">
                                    <div class="widget__line">
                                        <div class="widget__icon">
                                            <span class="li-window"></span>
                                        </div>
                                        <div class="widget__title">Crowdfunds</div>
                                        <div class="widget__subtitle"></div>
                                    </div>
                                    <div class="widget__box widget__box--left">
                                        <div class="widget__informer">{{ projects.length }} active</div>
                                    </div>
                                </div>
                            </c-button>
                        </div>
                    </div>
                    <div class="col-12 col-lg-3" hidden>
                        <div class="widget">
                            <div class="widget__icon_layer widget__icon_layer--right">
                                <span class="li-users"></span>
                            </div>
                            <div class="widget__container">
                                <div class="widget__line">
                                    <div class="widget__icon">
                                        <span class="li-users"></span>
                                    </div>
                                    <div class="widget__title">Users activity</div>
                                    <div class="widget__subtitle">Online operators</div>
                                </div>
                                <div class="widget__box widget__box--left">
                                    <div class="widget__informer">12 operators</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-3" hidden>
                        <div class="widget">
                            <div class="widget__icon_layer widget__icon_layer--right">
                                <span class="li-receipt"></span>
                            </div>
                            <div class="widget__container">
                                <div class="widget__line">
                                    <div class="widget__icon">
                                        <span class="li-receipt"></span>
                                    </div>
                                    <div class="widget__title">Open payments</div>
                                    <div class="widget__subtitle">Payments summary</div>
                                </div>
                                <div class="widget__box widget__box--left">
                                    <div class="widget__informer">6 payments for $2,485.00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-3" hidden>
                        <div class="widget">
                            <div class="widget__icon_layer widget__icon_layer--right">
                                <span class="li-lifebuoy"></span>
                            </div>
                            <div class="widget__container">
                                <div class="widget__line">
                                    <div class="widget__icon">
                                        <span class="li-lifebuoy"></span>
                                    </div>
                                    <div class="widget__title">Support tickets</div>
                                    <div class="widget__subtitle">Count of opened tickets</div>
                                </div>
                                <div class="widget__box widget__box--left">
                                    <div class="widget__informer">5 of 2,133</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card margin-bottom-0" hidden>
                    <div class="card-body">

                        <div class="form-row">
                            <div class="col-6 col-lg-2">

                                <select class="form-control actionWithSelected" tabindex="-1" aria-hidden="true">
                                    <option></option>
                                    <option value="1">Set as readed</option>
                                    <option value="2">Remove</option>
                                </select>

                            </div>
                            <div class="col-6 col-lg-2 d-none d-md-block">

                                <select class="form-control customPeriod" tabindex="-1" aria-hidden="true">
                                    <option></option>
                                    <option value="1">This month</option>
                                    <option value="2">Prev month</option>
                                    <option value="3">Other</option>
                                </select>

                            </div>
                            <div class="col-6 col-lg-4 d-none d-md-block">

                            </div>
                            <div class="col-6 col-lg-2">

                                <select class="form-control orderByStatus" tabindex="-1" aria-hidden="true">
                                    <option></option>
                                    <option value="1">New</option>
                                    <option value="2">Active</option>
                                    <option value="3">Closed</option>
                                    <option value="3">Denied</option>
                                </select>

                            </div>
                            <div class="col-6 col-lg-2 d-none d-md-block">
                                <c-button status="dark" icon="plus" size="mg" class="w-100 justify-content-center h-100">
                                    New project
                                </c-button>
                            </div>
                        </div>

                        <div class="table-responsive margin-top-20 margin-bottom-0">
                            <table class="table table-striped table-bordered margin-bottom-0" style="min-width: 800px;">
                                <thead>
                                <tr>
                                    <th width="30">
                                        <label class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input">
                                            <span class="custom-control-label"></span>
                                        </label>
                                    </th>
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
                                    <td>
                                        <label class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input">
                                            <span class="custom-control-label"></span>
                                        </label>
                                    </td>
                                    <td>1442</td>
                                    <td><a href="#" class="text-secondary text-bold">Logo design for Company</a></td>
                                    <td>10.04.18</td>
                                    <td>
                                        <div class="user user--bordered">
                                            <img src="http://via.placeholder.com/128x128">
                                            <div class="user__name">
                                                <strong>Dmitry Ivaniuk</strong>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="user-group user-group--bordered">
                                            <div class="user">
                                                <img src="http://via.placeholder.com/128x128">
                                            </div>
                                            <div class="user">
                                                <img src="http://via.placeholder.com/128x128">
                                            </div>
                                            <div class="user">
                                                <img src="http://via.placeholder.com/128x128">
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        $200.00
                                    </td>
                                    <td>
                                        <button class="btn btn-outline-success btn-block btn-sm">New</button>
                                    </td>
                                    <td>
                                        <button class="btn btn-secondary btn-icon btn-sm"><span class="fa fa-pencil"></span></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input">
                                            <span class="custom-control-label"></span>
                                        </label>
                                    </td>
                                    <td>1441</td>
                                    <td><a href="#" class="text-secondary text-bold">Website development</a></td>
                                    <td>09.04.18</td>
                                    <td>
                                        <div class="user user--bordered">
                                            <img src="http://via.placeholder.com/128x128">
                                            <div class="user__name">
                                                <strong>Francisco Dero</strong>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="user-group user-group--bordered">
                                            <div class="user">
                                                <img src="http://via.placeholder.com/128x128">
                                            </div>
                                            <div class="user">
                                                <img src="http://via.placeholder.com/128x128">
                                            </div>
                                            <div class="user">
                                                <img src="http://via.placeholder.com/128x128">
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        $1,850.00
                                    </td>
                                    <td>
                                        <button class="btn btn-light btn-block btn-sm">Active</button>
                                    </td>
                                    <td>
                                        <button class="btn btn-secondary btn-icon btn-sm"><span class="fa fa-pencil"></span></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input">
                                            <span class="custom-control-label"></span>
                                        </label>
                                    </td>
                                    <td>1440</td>
                                    <td><a href="#" class="text-secondary text-bold">UI/UX design for backend panel</a></td>
                                    <td>09.04.18</td>
                                    <td>
                                        <div class="user user--bordered">
                                            <img src="http://via.placeholder.com/128x128">
                                            <div class="user__name">
                                                <strong>Dmitry Ivaniuk</strong>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="user-group user-group--bordered">
                                            <div class="user">
                                                <img src="http://via.placeholder.com/128x128">
                                            </div>
                                            <div class="user">
                                                <img src="http://via.placeholder.com/128x128">
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        $990.00
                                    </td>
                                    <td>
                                        <button class="btn btn-light btn-block btn-sm">Active</button>
                                    </td>
                                    <td>
                                        <button class="btn btn-secondary btn-icon btn-sm"><span class="fa fa-pencil"></span></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input">
                                            <span class="custom-control-label"></span>
                                        </label>
                                    </td>
                                    <td>1438</td>
                                    <td><a href="#" class="text-secondary text-bold">Texts for personal website</a></td>
                                    <td>08.04.18</td>
                                    <td>
                                        <div class="user user--bordered">
                                            <img src="http://via.placeholder.com/128x128">
                                            <div class="user__name">
                                                <strong>Julia Comporova</strong>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="user-group user-group--bordered">
                                            <div class="user">
                                                <img src="http://via.placeholder.com/128x128">
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        $437.30
                                    </td>
                                    <td>
                                        <button class="btn btn-outline-secondary btn-block btn-sm">Finished</button>
                                    </td>
                                    <td>
                                        <button class="btn btn-secondary btn-icon btn-sm"><span class="fa fa-pencil"></span></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input">
                                            <span class="custom-control-label"></span>
                                        </label>
                                    </td>
                                    <td>1435</td>
                                    <td><a href="#" class="text-secondary text-bold">Content menagement</a></td>
                                    <td>08.04.18</td>
                                    <td>
                                        <div class="user user--bordered">
                                            <img src="http://via.placeholder.com/128x128">
                                            <div class="user__name">
                                                <strong>Andrew Conor</strong>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="user-group user-group--bordered">
                                            <div class="user">
                                                <img src="http://via.placeholder.com/128x128">
                                            </div>
                                            <div class="user">
                                                <img src="http://via.placeholder.com/128x128">
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        $1,600.00
                                    </td>
                                    <td>
                                        <button class="btn btn-outline-warning btn-block btn-sm">Denied</button>
                                    </td>
                                    <td>
                                        <button class="btn btn-secondary btn-icon btn-sm"><span class="fa fa-pencil"></span></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input">
                                            <span class="custom-control-label"></span>
                                        </label>
                                    </td>
                                    <td>1433</td>
                                    <td><a href="#" class="text-secondary text-bold">Marketing strategy</a></td>
                                    <td>05.04.18</td>
                                    <td>
                                        <div class="user user--bordered">
                                            <img src="http://via.placeholder.com/128x128">
                                            <div class="user__name">
                                                <strong>Dmitry Ivaniuk</strong>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="user-group user-group--bordered">
                                            <div class="user">
                                                <img src="http://via.placeholder.com/128x128">
                                            </div>
                                            <div class="user">
                                                <img src="http://via.placeholder.com/128x128">
                                            </div>
                                            <div class="user">
                                                <img src="http://via.placeholder.com/128x128">
                                            </div>
                                            <div class="user">
                                                <img src="http://via.placeholder.com/128x128">
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        $8,000.00
                                    </td>
                                    <td>
                                        <button class="btn btn-outline-secondary btn-block btn-sm">Finished</button>
                                    </td>
                                    <td>
                                        <button class="btn btn-secondary btn-icon btn-sm"><span class="fa fa-pencil"></span></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input">
                                            <span class="custom-control-label"></span>
                                        </label>
                                    </td>
                                    <td>1431</td>
                                    <td><a href="#" class="text-secondary text-bold">Website markup</a></td>
                                    <td>03.04.18</td>
                                    <td>
                                        <div class="user user--bordered">
                                            <img src="http://via.placeholder.com/128x128">
                                            <div class="user__name">
                                                <strong>Alex Donorsky</strong>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="user-group user-group--bordered">
                                            <div class="user">
                                                <img src="http://via.placeholder.com/128x128">
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        $510.00
                                    </td>
                                    <td>
                                        <button class="btn btn-outline-danger btn-block btn-sm">Closed</button>
                                    </td>
                                    <td>
                                        <button class="btn btn-secondary btn-icon btn-sm"><span class="fa fa-pencil"></span></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input">
                                            <span class="custom-control-label"></span>
                                        </label>
                                    </td>
                                    <td>1429</td>
                                    <td><a href="#" class="text-secondary text-bold">Adsense adv company</a></td>
                                    <td>03.04.18</td>
                                    <td>
                                        <div class="user user--bordered">
                                            <img src="http://via.placeholder.com/128x128">
                                            <div class="user__name">
                                                <strong>Dmitry Ivaniuk</strong>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="user-group user-group--bordered">
                                            <div class="user">
                                                <img src="http://via.placeholder.com/128x128">
                                            </div>
                                            <div class="user">
                                                <img src="http://via.placeholder.com/128x128">
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        $1000.00
                                    </td>
                                    <td>
                                        <button class="btn btn-outline-success btn-block btn-sm">Done</button>
                                    </td>
                                    <td>
                                        <button class="btn btn-secondary btn-icon btn-sm"><span class="fa fa-pencil"></span></button>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </c-layout>
</template>

<script>
    export default {
        components: {
            'c-layout': () => import('~/components/business-layout').then(m => m.default || m)
        },
        data() {
            return {
                loadingState: true,
            }
        },
        computed: {
            projects() { return this.$store.getters['projects/list'] },
            products() { return this.$store.getters['products/list'] }
        },
        created() {
        },
        mounted() {
            this.$store.dispatch('projects/find', {
                query: {
                    $sort: {
                        createdAt: -1
                    },
                    $limit: 25
                }
            })
            this.$store.dispatch('products/find', {
                query: {
                    $sort: {
                        createdAt: -1
                    },
                    $limit: 25
                }
            })
            
            this.$nextTick(() => {
                this.loadingState = false

                if (process.client) {
                    document.getElementById('startup-loader').style.display = 'none'
                }
            })
        },
    }
</script>

<style lang="scss" scoped>
</style>
