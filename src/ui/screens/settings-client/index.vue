<template>
    <c-layout navigationKey="settings-navigation">
        <div class="content" id="content">
            <div class="container-fluid">  
                <div class="row">
                    <div class="col-12">
                        <h3>Client Settings</h3>

                        <div class="card invert">
                            <div class="page-heading">
                                <div class="page-heading__container">
                                    <h1 class="title">Protocol Settings</h1>
                                    <p class="caption">Select protocol contracts to deploy</p>
                                </div>
                                <div class="page-heading__container float-right d-none d-md-block">
                                    <button class="btn btn-outline-secondary">Deploy selected</button>
                                    <button class="btn btn-outline-secondary">Deploy all</button>
                                </div>
                            </div>
                            <div class="">
                                <div class="table-responsive">
                                    <table class="table table-dark margin-bottom-0">   
                                        <thead>
                                            <tr>
                                                <th scope="col" width="40">
                                                    <label class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input">
                                                        <span class="custom-control-label"></span>
                                                    </label>
                                                </th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Address</th>
                                                <th scope="col">Status</th>
                                                <th scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="margin-top-0 margin-bottom-0" colspan="5" style="background: rgba(255, 255, 255, 0.01);">
                                                    <a href="https://github.com/hyperbridge/token"><strong>Core</strong></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input">
                                                        <span class="custom-control-label"></span>
                                                    </label>
                                                </td>
                                                <td>
                                                    <a href="https://github.com/hyperbridge/marketplace-protocol/blob/master/smart-contracts/ethereum/contracts/MarketplaceService.sol">Token</a> 
                                                    <span class="badge badge-success">Deployed</span>
                                                </td>
                                                <td>
                                                    <div class="input-group">
                                                        <input type="text" class="form-control" value="0x7312c5f03dac383b0e371263851b14dc8e1e0089" />
                                                        <span class="input-group-append">
                                                            <button class="btn btn-light" type="button">Copy</button>
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <strong>21 June 2018</strong><br>
                                                    <span class="text-muted">12:23:15 GMT</span>
                                                </td>
                                                <td>
                                                    <button class="btn btn-light btn-sm">Deploy</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input">
                                                        <span class="custom-control-label"></span>
                                                    </label>
                                                </td>
                                                <td>
                                                    <a href="https://github.com/hyperbridge/marketplace-protocol/blob/master/smart-contracts/ethereum/contracts/MarketplaceService.sol">TokenDelegate</a> 
                                                    <span class="badge badge-success">Deployed</span>
                                                </td>
                                                <td>
                                                    <div class="input-group">
                                                        <input type="text" class="form-control" value="0x9453eD18535138Bd6037C31fd0EBCcba2b331961" />
                                                        <span class="input-group-append">
                                                            <button class="btn btn-light" type="button">Copy</button>
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <strong>21 June 2018</strong><br>
                                                    <span class="text-muted">12:23:15 GMT</span>
                                                </td>
                                                <td>
                                                    <button class="btn btn-light btn-sm">Deploy</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input">
                                                        <span class="custom-control-label"></span>
                                                    </label>
                                                </td>
                                                <td>
                                                    <a href="https://github.com/hyperbridge/marketplace-protocol/blob/master/smart-contracts/ethereum/contracts/MarketplaceService.sol">EternalStorage</a> 
                                                    <span class="badge badge-success">Deployed</span>
                                                </td>
                                                <td>
                                                    <div class="input-group">
                                                        <input type="text" class="form-control" value="0x23376381c5ea53fa7440e60fd94883e83f9bea83" />
                                                        <span class="input-group-append">
                                                            <button class="btn btn-light" type="button">Copy</button>
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <strong>21 June 2018</strong><br>
                                                    <span class="text-muted">12:23:15 GMT</span>
                                                </td>
                                                <td>
                                                    <button class="btn btn-light btn-sm">Deploy</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="margin-top-0 margin-bottom-0" colspan="5" style="background: rgba(255, 255, 255, 0.01);">
                                                    <a href="https://github.com/hyperbridge/marketplace-protocol"><strong>Marketplace Protocol</strong></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input">
                                                        <span class="custom-control-label"></span>
                                                    </label>
                                                </td>
                                                <td>
                                                    <a href="https://github.com/hyperbridge/marketplace-protocol/blob/master/smart-contracts/ethereum/contracts/Marketplace.sol">Marketplace</a> 
                                                    <span class="badge badge-success" v-if="contracts.marketplace.Marketplace.created_at">Deployed</span>
                                                    <span class="badge badge-warning" v-if="!contracts.marketplace.Marketplace.created_at">Undeployed</span>
                                                </td>
                                                <td>
                                                    <div class="input-group">
                                                        <input type="text" class="form-control" :value="contracts.marketplace.Marketplace.address" />
                                                        <span class="input-group-append">
                                                            <button class="btn btn-light" type="button">Copy</button>
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div v-if="contracts.marketplace.Marketplace.created_at">
                                                        <strong>{{ contracts.marketplace.Marketplace.created_at | formatDate }}</strong><br>
                                                        <span class="text-muted">{{ contracts.marketplace.Marketplace.created_at | formatTime }}</span>
                                                    </div>
                                                    <strong v-if="!contracts.marketplace.Marketplace.created_at">Undeployed</strong>
                                                </td>
                                                <td>
                                                    <button class="btn btn-light btn-sm" @click.prevent="deployContract('marketplace', 'Marketplace')">Deploy</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="margin-top-0 margin-bottom-0" colspan="5" style="background: rgba(255, 255, 255, 0.01);">
                                                    <a href="https://github.com/hyperbridge/funding-protocol"><strong>Funding Protocol</strong></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input">
                                                        <span class="custom-control-label"></span>
                                                    </label>
                                                </td>
                                                <td>
                                                    <a href="https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/FundingService.sol">FundingService</a> 
                                                    <span class="badge badge-success">Deployed</span>
                                                </td>
                                                <td>
                                                    <div class="input-group">
                                                        <input type="text" class="form-control" value="" />
                                                        <span class="input-group-append">
                                                            <button class="btn btn-light" type="button">Copy</button>
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <strong>Undeployed</strong><br>
                                                    <span class="text-muted"></span>
                                                </td>
                                                <td>
                                                    <button class="btn btn-light btn-sm">Deploy</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>


                        <div class="card invert">
                            <div class="page-heading">
                                <div class="page-heading__container">
                                    <h1 class="title">Database Settings</h1>
                                    <p class="caption"></p>
                                </div>
                                <div class="page-heading__container float-right d-none d-md-block">
                                    <button class="btn btn-outline-secondary" @click="cleanDatabase()">Clean</button>
                                    <button class="btn btn-outline-secondary" @click="reloadDatabase()">Reload initial data</button>
                                </div>
                            </div>
                            <div class="">
                                
                            </div>
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
        'c-layout': () => import('@/ui/layouts/default')
    },
    computed: {
        contracts() {
            return {
                marketplace: this.$store.state.marketplace.network[this.$store.state.marketplace.current_network].contracts
            }
        }
    },
    methods: {
        cleanDatabase() {
            this.$store.dispatch('database/clean')
        },
        reloadDatabase() {
            this.$store.dispatch('database/reload')
        },
        deployContract(moduleName, contractName) {
            this.$store.commit(moduleName + '/deployContract', { contractName })
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
