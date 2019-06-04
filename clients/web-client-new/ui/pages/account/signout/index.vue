<template>
    <c-layout navigationKey="account">
        <div class="container">
            <div class="row"
                 style="text-align: center">
                <div class="col">
                    <p hidden>
                        The only way to do this right now is to delete your account. Are you sure?
                    </p>
                    <p>Are you sure?</p>

                    <c-button hidden
                              @click="deleteAccount">
                        Delete Account
                    </c-button>
                    <c-button @click="signOut">
                        Sign Out
                    </c-button>
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
import * as Bridge from '@/framework/desktop-bridge'

export default {
    methods: {
        deleteAccount() {
            Bridge.sendCommand('deleteAccountRequest')
        },
        signOut() {
            this.$store.state.application.signedIn = false
            this.$store.dispatch('auth/logout')
            this.$router.push({ path: '/' })
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
