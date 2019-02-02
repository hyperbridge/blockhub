<template>
    <c-layout navigationKey="store">
        <div class="row">
            <div class="col-12 col-lg-6" v-if="!quickImport && !integrateLocally">
                <c-block title="Quick import" bgGradient noGutter onlyContentBg>
                    <div class="text-center pb-4">
                        <p>Sed posuere varius ex id ullamcorper. Donec et aliquet mi, in tincidunt massa. Maecenas ornare, elit nec condimentum semper</p>
                        <c-button status="second-info" size="md" class="mt-3 px-5" @click=" quickImport = true">
                            Continue
                        </c-button>
                        <small class="text-muted d-block text-center mt-2">
                            <i class="fas fa-lock mr-2"></i>Authentication required
                        </small>
                    </div>
                </c-block>
            </div>
            <div class="col-12 col-lg-6" v-if="!quickImport && !integrateLocally">
                <c-block title="Integrate locally" bgGradient noGutter onlyContentBg>
                    <div class="text-center pb-4">
                        <p>Sed posuere varius ex id ullamcorper. Donec et aliquet mi, in tincidunt massa. Maecenas ornare, elit nec condimentum semper</p>
                        <c-button status="second-info" size="md" class="mt-3 px-5" @click=" integrateLocally = true">
                            View Guide
                        </c-button>
                        <small class="text-success d-block text-center mt-2">
                            <i class="fas fa-eye-slash mr-2"></i> No Auth / Code Access
                        </small>
                    </div>
                </c-block>
            </div>
            <div class="col-12" v-if="signedIn && quickImport">
                <c-block title="Quick import" bgGradient noGutter onlyContentBg>
                    <p class="mb-3">
                        Automatically analyze from code host for easy initial result.
                    </p>
                    <c-icon-block icon="gem" size="md">
                        Aliquam erat volutpat
                    </c-icon-block>
                </c-block>
            </div>
            <div class="col-12" v-if="!signedIn && quickImport">
                <div class="h6">
                    You are not signed in. Please
                    <c-button status="plain" @click="$store.commit('application/activateModal', 'login')">
                        Sign In
                    </c-button>
                    to continue.
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
    export default {
        components: {
            'c-icon-block': (resolve) => require(['@/ui/components/block/with-icon'], resolve)
        },
        data(){
            return{
                quickImport: false,
                integrateLocally: false
            }
        },
        computed: {
            signedIn() {
                return this.$store.state.application.signedIn
            },
        }
    }
</script>

<style lang="scss" scoped>
    .block-icon__icon{
        border: 1px solid rgba( 255, 255, 255, .2);
        padding: 15px;
        border-radius: 5px;
    }
</style>
