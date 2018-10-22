<template>
    <c-layout navigationKey="account">
            <div class="container">
                <div class="row" style="text-align: center">
                    <div class="col">
                        <p>The only way to do this right now is to delete your account. Are you sure?</p>
                        
                        <c-button @click="deleteAccount">Delete Account</c-button>
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
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
