<template>
    <!--<c-business-layout>-->
    <div>
        <div class="container-fluid">
            <div class="row margin-bottom-20">
                <div class="col-12 col-lg-3">
                    <div class="widget">
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
                                <div class="widget__informer">{{ products.length }} products</div>
                            </div>
                        </div>
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

            <div class="card margin-bottom-0">
                <div class="card-body">

                    <div class="form-row">
                        <div class="col-6 col-lg-2" hidden>

                            <select class="form-control actionWithSelected" tabindex="-1" aria-hidden="true">
                                <option></option>
                                <option value="1">Set as readed</option>
                                <option value="2">Remove</option>
                            </select>

                        </div>
                        <div class="col-6 col-lg-4 d-none d-md-block">

                        </div>
                        <div class="col-6 col-lg-2" hidden>

                            <select class="form-control orderByStatus" tabindex="-1" aria-hidden="true">
                                <option></option>
                                <option value="1">New</option>
                                <option value="2">Active</option>
                                <option value="3">Closed</option>
                                <option value="3">Denied</option>
                            </select>

                        </div>
                        <div class="col-6 col-lg-2 d-none d-md-block">
                            <c-button href="#/business/product/new" status="dark" icon="plus" size="mg"
                                      class="w-100 justify-content-center h-100">
                                New Product
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
                                    <th>Owner</th>
                                    <th hidden>Operators</th>
                                    <th>Price</th>
                                    <th width="100">Status</th>
                                    <th width="30"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="product in products" :key="product.id" v-if="products">
                                    <td>
                                        <label class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input">
                                            <span class="custom-control-label"></span>
                                        </label>
                                    </td>
                                    <td>{{ product.id }}</td>
                                    <td><a :href="`#/business/product/${product.id}`" class="text-secondary text-bold">{{
                                        product.name }}</a></td>
                                    <td>{{ product.meta.created }}</td>
                                    <td>
                                        <div class="user user--bordered">
                                            <img src="http://via.placeholder.com/128x128">
                                            <div class="user__name">
                                                <strong>{{ product.developer_id }}</strong>
                                            </div>
                                        </div>
                                    </td>
                                    <td hidden>
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
                                        {{ product.price }}
                                    </td>
                                    <td>
                                        <button class="btn btn-outline-success btn-block btn-sm">{{ product.status }}
                                        </button>
                                    </td>
                                    <td>
                                        <button class="btn btn-secondary btn-icon btn-sm"><i class="fa fa-pencil"/></button>
                                    </td>
                                </tr>
                                <tr v-else>
                                    <td colspan="12">
                                        Nothing found.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--</c-business-layout>-->
</template>

<script>
    export default {
        components: {
            'c-business-layout': (resolve) => require(['@/ui/layouts/business'], resolve)
        },
        data() {
            return {
                loadingState: true,
            }
        },
        computed: {
            products() {
                return this.$store.state.marketplace.products
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.loadingState = false
                document.getElementById('startup-loader').style.display = 'none'
            })
        },
    }
</script>

<style lang="scss" scoped>
</style>
