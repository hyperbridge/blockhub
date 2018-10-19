<template>
    <c-layout :showLeftPanel="false" :showRightPanel="false" :breadcrumbLinks="[]">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 mb-4 text-center">
                        <h2><img src="/static/img/success.png" style="max-width: 40px;" /> Account Verification Requested</h2>
                        <p>Account verification complete. You can now close this browser tab.</p>
                    </div>
                </div>
            </div>
    </c-layout>
</template>

<script>
    export default {
        components: {
            'c-layout': (resolve) => require(['@/ui/layouts/default'], resolve)
        },
        mounted() {
            window.location = 'blockhub://account/verification'
        }
    }
</script>

<style lang="scss" scoped>

</style>
