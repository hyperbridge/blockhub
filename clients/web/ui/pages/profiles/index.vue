<template>
    <div>todo</div>
</template>

<script>
export default {
    head() {
        return {
            title: `Profiles | BlockHub`,
            meta: [
                { hid: 'description', name: 'description', content: 'BlockHub profiles own everything associated with them on the Ethereum blockchain' },
                { hid: 'keywords', name: 'keywords', content: 'profiles, Ethereum, blockchain, game, indie, developer' }
            ]
        }
    },
    components: {
    },
    data: () => ({
        wallets: []
    })
}
</script>

<style lang="scss" scoped>

</style>
