<template>
    <Layout navigationKey="account">
        <div class="container">
            <div
                class="row"
                style="text-align: center">
                <div class="col">
                    <p hidden>
                        The only way to do this right now is to delete your account. Are you sure?
                    </p>
                    <p>Are you sure?</p>

                    <Button
                        hidden
                        @click="deleteAccount()">
                        Delete Account
                    </Button>
                    <Button @click="signOut()">
                        Sign Out
                    </Button>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script>
export default {
    methods: {
        deleteAccount() {
            this.$desktop.sendCommand('deleteAccountRequest')
        },
        signOut() {
            this.$store.dispatch('logout')
            this.$router.push('/')
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
