<template>
    <c-layout>
        <div class="row margin-bottom-20">
            <div class="col-12">
                <div class="margin-bottom-0">
                    <div class="">

                        <div class="form-row">
                            <div class="col-6 col-lg-2">

                                <select class="form-control actionWithSelected" tabindex="-1" aria-hidden="true" hidden>
                                    <option></option>
                                    <option value="1">Set as readed</option>
                                    <option value="2">Remove</option>
                                </select>

                            </div>
                            <div class="col-6 col-lg-4 d-none d-md-block">

                            </div>
                            <div class="col-6 col-lg-2">

                                <select class="form-control orderByStatus" tabindex="-1" aria-hidden="true" hidden>
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
                                    <th>Funding Obtained</th>
                                    <th>Funding Goal</th>
                                    <th width="100">Status</th>
                                    <th width="30"></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="project in projects" :key="project.id">
                                    <td>
                                        <label class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input">
                                            <span class="custom-control-label"></span>
                                        </label>
                                    </td>
                                    <td>{{ project.id }}</td>
                                    <td><c-button status="none" :to="`/business/project/${project.id}`" class="text-secondary text-bold">{{ project.name }}</c-button></td>
                                    <td>{{ project.meta.created }}</td>
                                    <td>
                                        <div class="user user--bordered">
                                            <img src="http://via.placeholder.com/128x128">
                                            <div class="user__name">
                                                <strong>{{ project.owner ? project.owner.name : 'Unknown' }}</strong>
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
                                        {{ project.meta.funds.obtained }}
                                    </td>
                                    <td>
                                        {{ project.meta.funds.goal }}
                                    </td>
                                    <td>
                                        <button class="btn btn-outline-success btn-block btn-sm">{{ project.status }}</button>
                                    </td>
                                    <td>
                                        <c-button status="dark" class="btn btn-secondary btn-icon" size="sm" :to="`/business/project/${project.id}`" style="color: #fff"><i class="fas fa-pencil-alt" /></c-button>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <template slot="menu">
            <div class="row">
                <div class="col-12 text-right">
                    <c-button to="/business/project/new" status="dark" icon="plus" size="lg">
                        New Crowdfund
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
            projects() { return this.$store.getters['projects/list'] }
        },
        created() {
            this.$store.dispatch('projects/find', {
                query: {
                    $sort: {
                        createdAt: -1
                    },
                    $limit: 25
                }
            })
        },
        mounted() {
        },
    }
</script>

<style lang="scss" scoped>
</style>
