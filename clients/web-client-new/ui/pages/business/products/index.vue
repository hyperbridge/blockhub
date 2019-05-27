<template>
    <c-layout>
        <div class="row margin-bottom-20">
            <div class="col-12">
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
                                <th width="100">History</th>
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
                                <td><c-button status="none" :to="`/business/product/${product.id}`" class="text-secondary text-bold">{{ product.name }}</c-button></td>
                                <td>{{ product.meta.created }}</td>
                                <td>
                                    <div class="user user--bordered">
                                        <img src="http://via.placeholder.com/128x128">
                                        <div class="user__name">
                                            <strong>{{ product.owner ? product.owner.name : '' }}</strong>
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
                                    <!--<button class="btn btn-outline-success btn-block btn-sm">{{ product.status }}-->
                                    <!--</button>-->
                                </td>
                                <td>
                                    <router-link :to="{ name: 'Release History', params: {id: product.id } }">
                                        View
                                    </router-link>
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

        <template slot="menu">
            <div class="row">
                <div class="col-12 text-right">
                    <c-button to="/business/product/new" status="dark" icon="plus" size="lg">
                        New Product
                    </c-button>
                </div>
            </div>
        </template>
    </c-layout>
</template>

<script>
    export default {
        components: {
            'c-layout': () => import('~/components/business-layout').then(m => m.default || m),
        },
        data() {
            return {
                loadingState: true,
            }
        },
        computed: {
            products() { return this.$store.getters['products/list'] }
        },
        created() {
            this.$store.dispatch('products/find', {
                query: {
                    $sort: {
                        createdAt: -1
                    },
                    $limit: 25
                }
            })
        }
    }
</script>

<style lang="scss" scoped>
</style>
