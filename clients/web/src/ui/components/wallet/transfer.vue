<template>
    <div class="wallet-transfer">
        <div class="wallet-transfer__head">
            <div class="h2">
                Send ETH
            </div>
            <div>
                Only send ETH to an Ethereum address.
            </div>
        </div>
        <div class="wallet-transfer__body mt-auto">
            <div class="form-group row align-items-center">
                <div class="col-3">
                    <label>
                        From
                    </label>
                </div>
                <div class="col-9">
                    <c-multiselect v-model="value" :options="options" :show-labels="false">
                        <template slot="singleLabel" slot-scope="props">
                            <div class="d-flex flex-column">
                                <div class="font-weight-bold">{{ props.option.title }}</div>
                                <div class="small d-flex flex-column mt-1 small-select-info">
                                    <span>{{ props.option.eth }}</span>
                                    <span>${{ props.option.usd }}</span>
                                </div>
                            </div>
                        </template>
                        <template slot="option" slot-scope="props">
                            <div class="d-flex flex-column">
                                <div class="font-weight-bold">{{ props.option.title }}</div>
                                <div class="small d-flex flex-column mt-1 small-select-info">
                                    <span>{{ props.option.eth }}</span>
                                    <span>${{ props.option.usd }}</span>
                                </div>
                            </div>
                        </template>
                    </c-multiselect>
                </div>
            </div>
            <div class="form-group row align-items-center">
                <div class="col-3">
                    <label>
                        To
                    </label>
                </div>
                <div class="col-9 d-flex align-items-center justify-content-between">
                    <div style="width: calc(100% - 30px)">
                        <c-multiselect v-model="value2" :options="options2" @tag="addNew" :taggable="true" :show-labels="false">
                            <template slot="singleLabel" slot-scope="props">
                                <div class="text-ellipsis w-100">{{ props.option }}</div>
                            </template>
                        </c-multiselect>
                    </div>
                    <a href="#" class="qr-code-btn">
                        <i class="fas fa-qrcode"></i>
                    </a>
                </div>
            </div>
            <div class="form-group row align-items-center">
                <div class="col-3">
                    <label>
                        Amount
                    </label>
                </div>
                <div class="col-9">
                    <div class="input-group mb-0">
                        <div class="input-group-prepend">
                            <span class="input-group-text">ETH</span>
                        </div>
                        <input type="text" class="form-control" value="132.00" aria-label="Amount">
                        <div class="input-group-append">
                            <span class="input-group-text">$300.00</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-group row align-items-center has-error">
                <div class="col-3">
                    <label class="has-error">
                        Gas Fee
                    </label>
                </div>
                <div class="col-9">
                    <div class="input-group mb-0 has-error">
                        <div class="input-group-prepend">
                            <span class="input-group-text">ETH</span>
                        </div>
                        <input type="text" class="form-control" aria-label="Amount" value="0.00986" readonly>
                        <div class="input-group-append">
                            <span class="input-group-text">$0.87</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-between">
                <c-button status="outline-danger" size="lg">
                    Cancel
                </c-button>
                <c-button status="outline-success" size="lg">
                    Next
                </c-button>
            </div>
        </div>
    </div>
</template>

<script>
    import Multiselect from 'vue-multiselect'
    import 'vue-multiselect/dist/vue-multiselect.min.css'

    export default {
        components: {
            'c-dropdown': (resolve) => require(['@/ui/components/dropdown-menu/type-4'], resolve),
            'c-multiselect': Multiselect
        },
        data() {
            return {
                options: [
                    {
                        title: 'account 1',
                        eth: '1342.123',
                        usd: '13412'
                    },
                    {
                        title: 'account 2',
                        eth: '42.13',
                        usd: '92'
                    },
                    {
                        title: 'account 3',
                        eth: '132.123',
                        usd: '412'
                    }
                ],
                options2: ['0xs89d7f9ay8f98dfy', '0x0294u0hefoihwef0', '0x98weu023h0h09wef', '0xowefhoi2h3r922983'],
                value: {
                    title: 'account 3',
                    eth: '132.123',
                    usd: '412'
                },
                value2: '0x0294u0hefoihwef0'
            }
        },
        methods:{
            addNew(address){
                this.options2.push(address)
                this.value2 = address
            }
        }
    }
</script>

<style lang="scss" scoped>
    .wallet-transfer {
        display: flex;
        flex-direction: column;
        color: #fff;
        min-height: 100%;
    }
    .wallet-transfer__head {
        padding: 20px 0;
        border-bottom: 1px solid rgba(255, 255, 255, .1);
        color: #fff;
        margin-bottom: 15px;
    }
    .wallet-transfer__body{
        display: flex;
        flex-direction: column;
        color: #fff;
    }

    label {
        font-weight: bold;
        color: #fff;
    }
    .small-select-info{
        font-size: 12px;
        line-height: 15px;
        opacity: .7;
    }
    .qr-code-btn{
        height: 40px;
        text-align: center;
        line-height: 40px;
        font-size: 18px;
        border-radius: 5px;
        color: rgba(255, 255, 255, .6);
        margin-left: 15px;
        &:hover{
            color: #fff;
        }
    }
    .multiselect__tags{
        border-radius: 3px;
    }
    .text-ellipsis{
        text-overflow: ellipsis!important;
        overflow: hidden;
    }
    .input-group{
        border-radius: 4px;
    }
    label{
        margin: 0;
    }
    label.has-error{
        color: #f25b59;
    }
    .input-group.has-error,
    input.has-error{
        border: 2px solid #f25b59;
    }
</style>
