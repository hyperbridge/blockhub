<template>
    <c-layout navigationKey="account">
        <div class="container">
            <div
                class="row"
                style="text-align: center">
                <div class="col">
                    <p hidden>
                        The only way to do this right now is to delete your account. Are you sure?
                    </p>
                    <p>Are you sure?</p>

                    <c-button
                        hidden
                        @click="deleteAccount()">
                        Delete Account
                    </c-button>
                    <c-button @click="signOut()">
                        Sign Out
                    </c-button>
                </div>
            </div>
        </div>
    </c-layout>
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
