<template>
    <Layout
        :showLeftPanel="false"
        :showRightPanel="false">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 mb-4 text-center">
                    <h2>
                        <img
                            src="/img/success.png"
                            style="max-width: 40px;"> Verification Sent
                    </h2>
                    <p>We're working to verify your address and will email you when completed. You can now close this browser tab.</p>
                    <br>
                    <p>
                        <Button
                            class="Button--lg"
                            to="/token">
                            Back to Token Sale
                        </Button>
                    </p>
                </div>
            </div>
        </div>
    </Layout>
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
