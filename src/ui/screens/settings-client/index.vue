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
                                    <button class="btn btn-outline-secondary" v-if="selected.length" @click="deploySelected">Deploy selected</button>
                                    <button class="btn btn-outline-secondary" @click="deployAll">Deploy all</button>
                                </div>
                            </div>
                            <div class="">
                                <div class="table-responsive">
                                    <table class="table table-dark margin-bottom-0">
                                        <thead>
                                            <tr>
                                                <th scope="col" width="40">
                                                    <label class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" v-model="selectAll" />
                                                        <span class="custom-control-label"></span>
                                                    </label>
                                                </th>
                                                <th scope="col">Name</th>
                                                <th scope="col" width="160">Status</th>
                                                <th scope="col">Address</th>
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
                                                <tr v-for="contract in protocol.contracts" :key="contract.name">
                                                    <td>
                                                        <label class="custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" v-model="selected" :value="`${protocol.id}.${contract.name}`" number />
                                                            <span class="custom-control-label"></span>
                                                        </label>
                                                    </td>
                                                    <td>
                                                        <a :href="contract.link">{{ contract.name }}</a>
                                                        <br />
                                                        <p v-if="contract.links && contract.links.length"><strong>Dependencies:</strong> <em v-for="link in contract.links" :key="link.name">{{ link.name }} </em></p>
                                                    </td>
                                                    <td>
                                                        <span class="badge badge-success" v-if="contract.created_at">Deployed</span>
                                                        <span class="badge badge-warning" v-if="!contract.created_at">Undeployed</span>
                                                        <div v-if="contract.created_at">
                                                            <strong>{{ contract.created_at | formatDate }}</strong><br>
                                                            <span class="text-muted">{{ contract.created_at | formatTime }}</span>
                                                        </div>
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
        'c-layout': (resolve) => require(['@/ui/layouts/default'], resolve),
        'c-switch': (resolve) => require(['@/ui/components/switch'], resolve)
    },
    data() {
        return {
            selected: []
        }
    },
    computed: {
        selectAll: {
            get: function () {
                return this.selected.length == this.protocols.map((protocol) => protocol.contracts.length).reduce((prev, cur) => prev + cur)
            },
            set: function (value) {
                if (!value) {
                    this.selected = []
                    return
                }

                this.selected = this.protocols.map((protocol) => protocol.contracts.map((contract) => protocol.id + '.' + contract.name)).reduce((prev, cur) => prev.concat(cur))
            }
        },
        protocols() {
            return [
                {
                    id: 'application',
                    name: 'Token',
                    link: 'https://github.com/hyperbridge/token',
                    contracts: [
                        {
                            name: 'Token',
                            link: 'https://github.com/hyperbridge/token/blob/master/smart-contracts/ethereum/contracts/Token.sol',
                            created_at: this.$store.state.application.ethereum[this.$store.state.application.current_ethereum_network].contracts.Token.created_at,
                            address: this.$store.state.application.ethereum[this.$store.state.application.current_ethereum_network].contracts.Token.address,
                            links: []
                        },
                        {
                            name: 'TokenDelegate',
                            link: 'https://github.com/hyperbridge/token/blob/master/smart-contracts/ethereum/contracts/TokenDelegate.sol',
                            created_at: this.$store.state.application.ethereum[this.$store.state.application.current_ethereum_network].contracts.TokenDelegate.created_at,
                            address: this.$store.state.application.ethereum[this.$store.state.application.current_ethereum_network].contracts.TokenDelegate.address,
                            links: []
                        },
                        {
                            name: 'EternalStorage',
                            link: 'https://github.com/hyperbridge/token/blob/master/smart-contracts/ethereum/contracts/EternalStorage.sol',
                            created_at: this.$store.state.application.ethereum[this.$store.state.application.current_ethereum_network].contracts.EternalStorage.created_at,
                            address: this.$store.state.application.ethereum[this.$store.state.application.current_ethereum_network].contracts.EternalStorage.address,
                            links: []
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
                            address: this.$store.state.marketplace.ethereum[this.$store.state.marketplace.current_ethereum_network].contracts.Marketplace.address,
                            links: []
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
                            address: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.FundingStorage.address,
                            links: [] //FundingProtocol.api.ethereum.state.contracts.FundingStorage.links
                        },
                        {
                            name: 'DeveloperStorageAccess',
                            link: 'https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/DeveloperStorageAccess.sol',
                            created_at: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.DeveloperStorageAccess.created_at,
                            address: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.DeveloperStorageAccess.address,
                            links: [] //FundingProtocol.api.ethereum.state.contracts.DeveloperStorageAccess.links
                        },
                        {
                            name: 'ContributionStorageAccess',
                            link: 'https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/ContributionStorageAccess.sol',
                            created_at: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ContributionStorageAccess.created_at,
                            address: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ContributionStorageAccess.address,
                            links: [] //FundingProtocol.api.ethereum.state.contracts.ContributionStorageAccess.links
                        },
                        {
                            name: 'ProjectStorageAccess',
                            link: 'https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/ProjectStorageAccess.sol',
                            created_at: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectStorageAccess.created_at,
                            address: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectStorageAccess.address,
                            links: [] //FundingProtocol.api.ethereum.state.contracts.ProjectStorageAccess.links
                        },
                        {
                            name: 'CurationStorageAccess',
                            link: 'https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/CurationStorageAccess.sol',
                            created_at: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.CurationStorageAccess.created_at,
                            address: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.CurationStorageAccess.address,
                            links: [] //FundingProtocol.api.ethereum.state.contracts.CurationStorageAccess.links
                        },
                        {
                            name: 'FundingVault',
                            link: 'https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/FundingVault.sol',
                            created_at: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.FundingVault.created_at,
                            address: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.FundingVault.address,
                            links: [] //FundingProtocol.api.ethereum.state.contracts.FundingVault.links
                        },
                        {
                            name: 'Developer',
                            link: 'https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/Developer.sol',
                            created_at: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.Developer.created_at,
                            address: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.Developer.address,
                            links: [] //FundingProtocol.api.ethereum.state.contracts.Developer.links
                        },
                        {
                            name: 'Contribution',
                            link: 'https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/Contribution.sol',
                            created_at: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.Contribution.created_at,
                            address: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.Contribution.address,
                            links: [] //FundingProtocol.api.ethereum.state.contracts.Contribution.links
                        },
                        {
                            name: 'ProjectTimeline',
                            link: 'https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/ProjectTimeline.sol',
                            created_at: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectTimeline.created_at,
                            address: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectTimeline.address,
                            links: [] //FundingProtocol.api.ethereum.state.contracts.ProjectTimeline.links
                        },
                        {
                            name: 'ProjectTimelineHelpersLibrary',
                            link: 'https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/libraries/ProjectTimelineHelpersLibrary.sol',
                            created_at: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectTimelineHelpersLibrary.created_at,
                            address: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectTimelineHelpersLibrary.address,
                            links: [] //FundingProtocol.api.ethereum.state.contracts.ProjectTimelineHelpersLibrary.links
                        },
                        {
                            name: 'ProjectTimelineProposal',
                            link: 'https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/ProjectTimelineProposal.sol',
                            created_at: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectTimelineProposal.created_at,
                            address: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectTimelineProposal.address,
                            links: [] //FundingProtocol.api.ethereum.state.contracts.ProjectTimelineProposal.links
                        },
                        {
                            name: 'ProjectContributionTierHelpersLibrary',
                            link: 'https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/libraries/ProjectContributionTierHelpersLibrary.sol',
                            created_at: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectContributionTierHelpersLibrary.created_at,
                            address: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectContributionTierHelpersLibrary.address,
                            links: [] //FundingProtocol.api.ethereum.state.contracts.ProjectContributionTierHelpersLibrary.links
                        },
                        {
                            name: 'ProjectMilestoneCompletion',
                            link: 'https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/libraries/ProjectMilestoneCompletion.sol',
                            created_at: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectMilestoneCompletion.created_at,
                            address: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectMilestoneCompletion.address,
                            links: [] //FundingProtocol.api.ethereum.state.contracts.ProjectMilestoneCompletion.links
                        },
                        {
                            name: 'ProjectRegistrationHelpersLibrary',
                            link: 'https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/ProjectRegistrationHelpersLibrary.sol',
                            created_at: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectRegistrationHelpersLibrary.created_at,
                            address: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectRegistrationHelpersLibrary.address,
                            links: [] //FundingProtocol.api.ethereum.state.contracts.ProjectRegistrationHelpersLibrary.links
                        },
                        {
                            name: 'ProjectRegistration',
                            link: 'https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/ProjectRegistration.sol',
                            created_at: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectRegistration.created_at,
                            address: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectRegistration.address,
                            links: [] //FundingProtocol.api.ethereum.state.contracts.ProjectRegistration.links
                        },
                        {
                            name: 'Curation',
                            link: 'https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/Curation.sol',
                            created_at: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.Curation.created_at,
                            address: this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.Curation.address,
                            links: [] //FundingProtocol.api.ethereum.state.contracts.Curation.links
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
        deployContract(protocolId, contractName) {
            this.$store.dispatch(protocolId + '/deployContract', { contractName })
        },
        async deployAll() {
            for (let i in this.protocols) {
                const protocol = this.protocols[i]

                for (let j in protocol.contracts) {
                    const contract = this.protocols[i].contracts[j]

                    try {
                        let _ = await this.$store.dispatch(protocol.id + '/deployContract', { contractName: contract.name })
                    } catch(e) {

                    }
                }
            }
        },
        async deploySelected() {
            for (let i in this.selected) {
                const protocolId = this.selected[i].split('.')[0]
                const contractName = this.selected[i].split('.')[1]

                await this.$store.dispatch(protocolId + '/deployContract', { contractName })
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
