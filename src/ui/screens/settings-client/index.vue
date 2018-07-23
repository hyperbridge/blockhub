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
                                            <template v-for="protocol in protocols">
                                                <tr v-bind:key="protocol.id">
                                                    <td class="margin-top-0 margin-bottom-0" colspan="5" style="background: rgba(255, 255, 255, 0.01);">
                                                        <a :href="protocol.link"><strong>{{ protocol.name }}</strong></a>
                                                    </td>
                                                </tr>
                                                <tr v-for="contract in protocol.contracts" v-bind:key="contract.name">
                                                    <td>
                                                        <label class="custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input">
                                                            <span class="custom-control-label"></span>
                                                        </label>
                                                    </td>
                                                    <td>
                                                        <a :href="contract.link">{{ contract.name }}</a> 
                                                        <span class="badge badge-success" v-if="contract.created_at">Deployed</span>
                                                        <span class="badge badge-warning" v-if="!contract.created_at">Undeployed</span>
                                                    </td>
                                                    <td>
                                                        <div class="input-group">
                                                            <input type="text" class="form-control" :value="contract.address" />
                                                            <span class="input-group-append">
                                                                <button class="btn btn-light" type="button">Copy</button>
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div v-if="contract.created_at">
                                                            <strong>{{ contract.created_at | formatDate }}</strong><br>
                                                            <span class="text-muted">{{ contract.created_at | formatTime }}</span>
                                                        </div>
                                                        <strong v-if="!contract.created_at">Undeployed</strong>
                                                    </td>
                                                    <td>
                                                        <button class="btn btn-light btn-sm" @click.prevent="deployContract(protocol.id, contract.name)">Deploy</button>
                                                    </td>
                                                </tr>
                                            </template>
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
        protocols() {
            return [
                {
                    id: 'network',
                    name: 'Token',
                    link: 'https://github.com/hyperbridge/token',
                    contracts: [
                        {
                            name: 'Token',
                            link: 'https://github.com/hyperbridge/token/blob/master/smart-contracts/ethereum/contracts/Token.sol',
                            created_at: this.$store.state.network.ethereum[this.$store.state.network.current_ethereum_network].contracts.Token.created_at,
                            address: this.$store.state.network.ethereum[this.$store.state.network.current_ethereum_network].contracts.Token.address
                        },
                        {
                            name: 'TokenDelegate',
                            link: 'https://github.com/hyperbridge/token/blob/master/smart-contracts/ethereum/contracts/TokenDelegate.sol',
                            created_at: this.$store.state.network.ethereum[this.$store.state.network.current_ethereum_network].contracts.TokenDelegate.created_at,
                            address: this.$store.state.network.ethereum[this.$store.state.network.current_ethereum_network].contracts.TokenDelegate.address
                        },
                        {
                            name: 'EternalStorage',
                            link: 'https://github.com/hyperbridge/token/blob/master/smart-contracts/ethereum/contracts/EternalStorage.sol',
                            created_at: this.$store.state.network.ethereum[this.$store.state.network.current_ethereum_network].contracts.EternalStorage.created_at,
                            address: this.$store.state.network.ethereum[this.$store.state.network.current_ethereum_network].contracts.EternalStorage.address
                        }
                    ]
                },
                {
                    id: 'marketplace',
                    name: 'Marketplace Protocol',
                    link: 'https://github.com/hyperbridge/marketplace-protocol',
                    contracts: [
                        {
                            name: 'Marketplace',
                            link: 'https://github.com/hyperbridge/marketplace-protocol/blob/master/smart-contracts/ethereum/contracts/Marketplace.sol',
                            created_at: this.$store.state.marketplace.ethereum[this.$store.state.marketplace.current_ethereum_network].contracts.Marketplace.created_at,
                            address: this.$store.state.marketplace.ethereum[this.$store.state.marketplace.current_ethereum_network].contracts.Marketplace.address
                        }
                    ]
                },
                {
                    id: 'funding',
                    name: 'Funding Protocol',
                    link: 'https://github.com/hyperbridge/funding-protocol',
                    contracts: [
                        {
                            name: 'FundingStorage',
                            link: 'https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/FundingStorage.sol',
                            created_at: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.FundingStorage.created_at,
                            address: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.FundingStorage.address
                        },
                        {
                            name: 'DeveloperStorageAccess',
                            link: 'https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/DeveloperStorageAccess.sol',
                            created_at: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.DeveloperStorageAccess.created_at,
                            address: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.DeveloperStorageAccess.address
                        },
                        {
                            name: 'ContributionStorageAccess',
                            link: 'https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/ContributionStorageAccess.sol',
                            created_at: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ContributionStorageAccess.created_at,
                            address: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ContributionStorageAccess.address
                        },
                        {
                            name: 'ProjectStorageAccess',
                            link: 'https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/ProjectStorageAccess.sol',
                            created_at: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectStorageAccess.created_at,
                            address: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectStorageAccess.address
                        },
                        {
                            name: 'CurationStorageAccess',
                            link: 'https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/CurationStorageAccess.sol',
                            created_at: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.CurationStorageAccess.created_at,
                            address: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.CurationStorageAccess.address
                        },
                        {
                            name: 'FundingVault',
                            link: 'https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/FundingVault.sol',
                            created_at: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.FundingVault.created_at,
                            address: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.FundingVault.address
                        },
                        {
                            name: 'Developer',
                            link: 'https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/Developer.sol',
                            created_at: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.Developer.created_at,
                            address: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.Developer.address
                        },
                        {
                            name: 'Contribution',
                            link: 'https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/Contribution.sol',
                            created_at: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.Contribution.created_at,
                            address: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.Contribution.address
                        },
                        {
                            name: 'ProjectBase',
                            link: 'https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/ProjectBase.sol',
                            created_at: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectBase.created_at,
                            address: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectBase.address
                        },
                        {
                            name: 'ProjectTimeline',
                            link: 'https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/ProjectTimeline.sol',
                            created_at: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectTimeline.created_at,
                            address: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectTimeline.address
                        },
                        {
                            name: 'ProjectTimelineHelpersLibrary',
                            link: 'https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/libraries/ProjectTimelineHelpersLibrary.sol',
                            created_at: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectTimelineHelpersLibrary.created_at,
                            address: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectTimelineHelpersLibrary.address
                        },
                        {
                            name: 'ProjectTimelineProposal',
                            link: 'https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/ProjectTimelineProposal.sol',
                            created_at: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectTimelineProposal.created_at,
                            address: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectTimelineProposal.address
                        },
                        {
                            name: 'ProjectContributionTierHelpersLibrary',
                            link: 'https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/libraries/ProjectContributionTierHelpersLibrary.sol',
                            created_at: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectContributionTierHelpersLibrary.created_at,
                            address: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectContributionTierHelpersLibrary.address
                        },
                        {
                            name: 'ProjectMilestoneCompletion',
                            link: 'https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/libraries/ProjectMilestoneCompletion.sol',
                            created_at: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectMilestoneCompletion.created_at,
                            address: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectMilestoneCompletion.address
                        },
                        {
                            name: 'ProjectRegistration',
                            link: 'https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/ProjectRegistration.sol',
                            created_at: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectRegistration.created_at,
                            address: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectRegistration.address
                        },
                        {
                            name: 'Curation',
                            link: 'https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/Curation.sol',
                            created_at: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.Curation.created_at,
                            address: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.Curation.address
                        },
                    ]
                }
            ]
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
