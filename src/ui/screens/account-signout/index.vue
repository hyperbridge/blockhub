<template>
    <c-layout navigationKey="account">
            <div class="container">
                <div class="row" style="text-align: center">
                    <div class="col">
                        <p hidden>The only way to do this right now is to delete your account. Are you sure?</p>
                        <p>Are you sure?</p>
                        
                        <c-button @click="deleteAccount" hidden>Delete Account</c-button>
                        <c-button @click="signOut">Sign Out</c-button>
                    </div>
                </div>
            </div>
    </c-layout>
</template>

<script>
    import * as Bridge from '@/framework/desktop-bridge'
    import { mapMutations, mapActions } from 'vuex'

    export default {
        methods: {
            deleteAccount() {
                Bridge.sendCommand('deleteAccountRequest')
            },
            signOut() {
                this.$store.state.application.signed_in = false
                this.logout()
                this.$router.replace({ name: 'Home' })
            },
            ...mapActions('auth', ['logout'])
        }
    }
</script>

<style lang="scss" scoped>

</style>
