<template>
    <c-layout navigationKey="settings">
        <div class="content" id="content">
            <c-block class="margin-bottom-30" title="Protocol Settings" :noGutter="true" :onlyContentBg="true" :bgGradient="true">
                <div class="row">
                    <div class="col-12" style="padding: 0;">
                        <div class="">
                            <div class="page-heading">
                                <div class="page-heading__container">
                                    <!-- <h1 class="title">Protocols</h1> -->
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
                    </div>
                </div>
            </c-block>
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
                    link: 'https://github.com/hyperbridge/protocol/tree/master/packages/token',
                    contracts: Object.values(this.$store.state.application.ethereum[this.$store.state.application.current_ethereum_network].contracts)
                },
                {
                    id: 'marketplace',
                    name: 'Marketplace Protocol',
                    link: 'https://github.com/hyperbridge/protocol/tree/master/packages/marketplace',
                    contracts: Object.values(this.$store.state.marketplace.ethereum[this.$store.state.marketplace.current_ethereum_network].contracts)
                },
                {
                    id: 'funding',
                    name: 'Funding Protocol',
                    link: 'https://github.com/hyperbridge/protocol/tree/master/packages/funding',
                    contracts: Object.values(this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts)
                }
            ]
        }
    },
    methods: {
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
