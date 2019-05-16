<template>
    <div class="wallet-deposit">
        <div class="wallet-deposit__head">
            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta vel quam in hendrerit.
            </div>
        </div>
        <div class="wallet-deposit__body mt-auto">
            <div class="wallet-deposit__item">
                <div class="h4">
                    Proin porta vel quam in hendrerit.
                </div>
                <p>
                    Vestibulum magna nisl, vehicula eu orci sed, viverra venenatis nisi.
                    Vivamus nulla metus, tempus id rhoncus ac, ullamcorper eget felis.
                </p>
                <c-button status="opacity-info" size="lg">
                    Buy
                </c-button>
            </div>
            <div class="wallet-deposit__item">
                <div class="h4">
                    Proin porta vel quam in hendrerit.
                </div>
                <p>
                    Vestibulum magna nisl, vehicula eu orci sed, viverra venenatis nisi.
                    Vivamus nulla metus, tempus id rhoncus ac, ullamcorper eget felis.
                </p>
                <c-button status="opacity-info" size="lg">
                    Buy
                </c-button>
            </div>
            <div class="wallet-deposit__item">
                <div class="h4">
                    Proin porta vel quam in hendrerit.
                </div>
                <p>
                    Vestibulum magna nisl, vehicula eu orci sed, viverra venenatis nisi.
                    Vivamus nulla metus, tempus id rhoncus ac, ullamcorper eget felis.
                </p>
                <c-button status="opacity-info" size="lg">
                    Buy
                </c-button>
            </div>
            <div class="wallet-deposit__item">
                <div class="h4">
                    Proin porta vel quam in hendrerit.
                </div>
                <p>
                    Vestibulum magna nisl, vehicula eu orci sed, viverra venenatis nisi.
                    Vivamus nulla metus, tempus id rhoncus ac, ullamcorper eget felis.
                </p>
                <c-button status="opacity-info" size="lg">
                    Buy
                </c-button>
            </div>
        </div>
    </div>
</template>

<script>
    import 'vue-multiselect/dist/vue-multiselect.min.css'

    export default {
        components: {
            'c-dropdown': (resolve) => require(['@/components/dropdown-menu/type-4'], resolve),
            'c-multiselect': (resolve) => require(['vue-multiselect'], resolve),
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
    .wallet-deposit {
        display: flex;
        flex-direction: column;
        color: #fff;
    }
    .wallet-deposit__head {
        padding: 20px 0;
        border-bottom: 1px solid rgba(255, 255, 255, .1);
        color: #fff;
        margin-bottom: 15px;
    }
    .wallet-deposit__body{
        display: flex;
        flex-direction: column;
        color: #fff;
        overflow-y: auto;
        overflow-x: hidden;
    }
    .wallet-deposit__item{
        padding: 20px 0;
        border-bottom: 1px solid rgba(255, 255, 255, .1);
        text-align: center;
        &:last-child{
            border-bottom: 0;
            padding-bottom: 0;
        }
        .c-button{
            margin-top: 15px;
        }
    }
</style>
