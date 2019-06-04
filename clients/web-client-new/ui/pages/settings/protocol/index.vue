<template>
    <c-layout navigationKey="settings">
        <c-block class="margin-bottom-30"
                 title="Protocol Settings"
                 :noGutter="true"
                 :noPadding="true"
                 :onlyContentBg="true"
                 :bgGradient="true">
            <div class="page-heading">
                <div class="page-heading__container">
                    <!-- <h1 class="title">Protocols</h1> -->
                    <p class="caption">
                        Select protocol contracts to deploy
                    </p>
                </div>
                <div class="page-heading__container float-right d-none d-md-block">
                    <button v-if="selected.length"
                            class="btn btn-outline-secondary"
                            @click="deploySelected">
                        Deploy selected
                    </button>
                </div>
            </div>
            <div class="">
                <div class="table-responsive">
                    <table class="table table-dark margin-bottom-0">
                        <thead>
                            <tr>
                                <th scope="col"
                                    width="40">
                                    <label class="custom-control custom-checkbox">
                                        <input v-model="selectAll"
                                               type="checkbox"
                                               class="custom-control-input">
                                        <span class="custom-control-label" />
                                    </label>
                                </th>
                                <th scope="col">
                                    Name
                                </th>
                                <th scope="col"
                                    width="160">
                                    Status
                                </th>
                                <th scope="col">
                                    Address
                                </th>
                                <th scope="col" />
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="protocol in protocols">
                                <tr :key="protocol.id">
                                    <td class="margin-top-0 margin-bottom-0"
                                        colspan="4"
                                        style="background: rgba(255, 255, 255, 0.01);">
                                        <a :href="protocol.link"><strong>{{ protocol.name }}</strong></a>
                                        <div v-if="protocolData[protocol.id].visible"
                                             class="row">
                                            <div class="col-12">
                                                <textarea v-model="protocolData[protocol.id].data"
                                                          style="width: 100%; height: 300px;" />
                                                <c-button v-if="protocolData[protocol.id].visible"
                                                          @click="saveRawData(protocol.id)">
                                                    Save
                                                </c-button>
                                                <c-button v-if="protocolData[protocol.id].visible"
                                                          @click="toggleRawData(protocol.id)">
                                                    Hide
                                                </c-button>
                                            </div>
                                        </div>
                                    </td>
                                    <td style="background: rgba(255, 255, 255, 0.01);">
                                        <c-button v-if="!protocolData[protocol.id].visible"
                                                  @click="toggleRawData(protocol.id)">
                                            Raw
                                        </c-button>
                                    </td>
                                </tr>
                                <tr v-for="(contract) in protocol.contracts"
                                    :key="`${protocol.id}-${contract.name}`">
                                    <td>
                                        <label class="custom-control custom-checkbox">
                                            <input v-model="selected"
                                                   type="checkbox"
                                                   class="custom-control-input"
                                                   :value="`${protocol.id}.${contract.name}`"
                                                   number>
                                            <span class="custom-control-label" />
                                        </label>
                                    </td>
                                    <td>
                                        <a :href="contract.link">{{ contract.name }}</a>
                                        <br>
                                        <p v-if="contract.links && contract.links.length">
                                            <strong>Dependencies:</strong> <em v-for="link in contract.links"
                                                                               :key="link.name">{{ link.name }} </em>
                                        </p>
                                    </td>
                                    <td>
                                        <span v-if="contract.createdAt"
                                              class="badge badge-success">Deployed</span>
                                        <span v-if="!contract.createdAt"
                                              class="badge badge-warning">Undeployed</span>
                                        <div v-if="contract.createdAt">
                                            <strong>{{ contract.createdAt | formatDate }}</strong><br>
                                            <span class="text-muted">{{ contract.createdAt | formatTime }}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="input-group">
                                            <input v-model="contract.address"
                                                   type="text"
                                                   class="form-control">
                                            <span class="input-group-append">
                                                <button class="btn btn-light"
                                                        type="button"
                                                        @click.prevent="$store.dispatch('application/sendCommand', { key: 'writeToClipboard', data: contract.address })">Copy</button>
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <button class="btn btn-light btn-sm"
                                                @click.prevent="deployContract(protocol.id, contract.name, contract.address)">
                                            Deploy
                                        </button>
                                        <button class="btn btn-light btn-sm"
                                                @click.prevent="$store.dispatch('application/sendCommand', { key: 'setContractAddress', data: { protocolName: protocol.id, contractName: contract.name, address: contract.address }})">
                                            Update
                                        </button>
                                    </td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
            </div>
        </c-block>
    </c-layout>
</template>

<script>

export default {
    data() {
        return {
            selected: [],
            protocolData: {
                token: {
                    data: '',
                    visible: false
                },
                reserve: {
                    data: '',
                    visible: false
                },
                marketplace: {
                    data: '',
                    visible: false
                },
                funding: {
                    data: '',
                    visible: false
                }
            }
        }
    },
    computed: {
        selectAll: {
            get() {
                return this.selected.length == this.protocols.map(protocol => protocol.contracts.length).reduce((prev, cur) => prev + cur)
            },
            set(value) {
                if (!value) {
                    this.selected = []
                    return
                }

                this.selected = this.protocols.map(protocol => protocol.contracts.map(contract => `${protocol.id}.${contract.name}`)).reduce((prev, cur) => prev.concat(cur))
            }
        },
        protocols() {
            this.protocolData.token.data = JSON.stringify(this.$store.state.application.ethereum[this.$store.state.application.currentEthereumNetwork].packages.token)
            this.protocolData.reserve.data = JSON.stringify(this.$store.state.application.ethereum[this.$store.state.application.currentEthereumNetwork].packages.reserve)
            this.protocolData.marketplace.data = JSON.stringify(this.$store.state.application.ethereum[this.$store.state.application.currentEthereumNetwork].packages.marketplace)
            this.protocolData.funding.data = JSON.stringify(this.$store.state.application.ethereum[this.$store.state.application.currentEthereumNetwork].packages.funding)

            return [
                {
                    id: 'token',
                    name: 'Token',
                    link: 'https://github.com/hyperbridge/protocol/tree/master/packages/token',
                    contracts: Object.values(this.$store.state.application.ethereum[this.$store.state.application.currentEthereumNetwork].packages.token.contracts)
                },
                {
                    id: 'reserve',
                    name: 'Reserve',
                    link: 'https://github.com/hyperbridge/protocol/tree/master/packages/reserve',
                    contracts: Object.values(this.$store.state.application.ethereum[this.$store.state.application.currentEthereumNetwork].packages.reserve.contracts)
                },
                {
                    id: 'marketplace',
                    name: 'Marketplace',
                    link: 'https://github.com/hyperbridge/protocol/tree/master/packages/marketplace',
                    contracts: Object.values(this.$store.state.application.ethereum[this.$store.state.application.currentEthereumNetwork].packages.marketplace.contracts)
                },
                {
                    id: 'funding',
                    name: 'Funding',
                    link: 'https://github.com/hyperbridge/protocol/tree/master/packages/funding',
                    contracts: Object.values(this.$store.state.application.ethereum[this.$store.state.application.currentEthereumNetwork].packages.funding.contracts)
                }
            ]
        }
    },
    methods: {
        toggleRawData(protocolName) {
            this.protocolData[protocolName].visible = !this.protocolData[protocolName].visible
        },
        saveRawData(protocolName) {
            this.$store.state.application.ethereum[this.$store.state.application.currentEthereumNetwork].packages[protocolName] = JSON.parse(this.protocolData[protocolName].data)
        },
        deployContract(protocolName, contractName, oldContractAddress) {
            this.$store.dispatch('application/deployContract', { protocolName, contractName, oldContractAddress })
        },
        // async deployAll() {
        //     for (let i in this.protocols) {
        //         const protocol = this.protocols[i]

        //         for (let j in protocol.contracts) {
        //             const contract = this.protocols[i].contracts[j]

        //             try {
        //                 let _ = await this.$store.dispatch(protocol.id + '/deployContract', { contractName: contract.name })
        //             } catch(e) {

        //             }
        //         }
        //     }
        // },
        async deploySelected() {
            for (const i in this.selected) {
                const protocolName = this.selected[i].split('.')[0]
                const contractName = this.selected[i].split('.')[1]

                await this.$store.dispatch('application/deployContract', { protocolName, contractName })
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
