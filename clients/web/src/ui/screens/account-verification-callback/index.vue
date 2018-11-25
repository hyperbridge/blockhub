<template>
    <c-layout :showLeftPanel="false" :showRightPanel="false">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 mb-4 text-center">
                        <h2><img src="/static/img/success.png" style="max-width: 40px;" /> Verification Sent</h2>
                        <p>We're working to verify your address and will email you when completed. You can now close this browser tab.</p>
                        <br />
                        <p><c-button class="c-btn-lg" href="#/token">Back to Token Sale</c-button></p>
                    </div>
                </div>
            </div>
    </c-layout>
</template>

<script>
    export default {
        components: {
        },
        mounted() {
            window.location = 'blockhub://account/verification'
        }
    }
</script>

<style lang="scss" scoped>

</style>
