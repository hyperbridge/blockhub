<template>
    <div>
        <div class="container-fluid">
            <h3>Choose Action</h3>
            <br />
            <select ref="action">
                <option value="approveTokens">Approve tokens</option>
                <option value="transferTokens">Transfer tokens</option>
            </select>
            <br />

            <input type="text" ref="walletIndex" placeholder="Wallet index to send from" />
            <br />

            <textarea ref="body1" style="width: 100%; height: 300px"></textarea>
            <br />
            <p>For multiple addresses, enter one on each line. If you want to override the amount, specify the address and the amount with a tab between: 0x7312c5f03dac383b0e371263851b14dc8e1e0089 10 to send 10 to 0x7312c5f03dac383b0e371263851b14dc8e1e0089</p>

            <br />
            <input type="text" ref="amount" placeholder="Amount to send" />
            <br />

            <c-button @click="submit()">Go</c-button>
            <br />
        </div>
    </div>
</template>

<script>
    import * as Bridge from '@/framework/desktop-bridge'

    export default {
        components: {
        },
        data() {
            return {
            }
        },
        methods: {
            async submit() {
                const action = this.$refs.action.value
                const body1 = this.$refs.body1.value
                const walletIndex = Number(this.$refs.walletIndex.value)

                if (action === 'approveTokens') {
                     
                } else if (action === 'transferTokens') {
                    const lines = body1.split('\n')
                    const batch = []

                    for (let line of lines) {
                        let destinationAddress = null
                        let amount = null

                        if (this.$refs.amount.value) {
                            destinationAddress = line
                            amount = Number(this.$refs.amount.value)
                        } else {
                            destinationAddress = line.split(' ')[0]
                            amount = Number(line.split(' ')[1])
                        }

                        if (amount) {
                            batch.push({
                                destinationAddress,
                                amount
                            })
                        }
                    }

                    await Bridge.sendCommand('transferTokenBatch', {
                        batch,
                        walletIndex
                    }).then(() => {
                        console.log('Done')
                    })
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>
