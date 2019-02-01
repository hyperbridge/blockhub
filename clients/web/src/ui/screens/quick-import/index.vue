<template>
    <c-layout navigationKey="store">
        <div class="row">
            <div class="col-12">
                <div class="h2 text-center margin-bottom-30">
                    Add projects
                </div>
            </div>
            <div class="col-12 col-lg-6">
                <c-block title="Quick import" bgGradient noGutter onlyContentBg>
                    <div class="text-center pb-4">
                        <p>Sed posuere varius ex id ullamcorper. Donec et aliquet mi, in tincidunt massa. Maecenas ornare, elit nec condimentum semper</p>
                        <c-button status="second-info" size="md" class="mt-3 px-5">
                            Continue
                        </c-button>
                        <small class="text-muted d-block text-center mt-2">
                            <i class="fas fa-lock mr-2"></i>Authentication required
                        </small>
                    </div>
                </c-block>
            </div>
            <div class="col-12 col-lg-6">
                <c-block title="Integrate locally" bgGradient noGutter onlyContentBg>
                    <div class="text-center pb-4">
                        <p>Sed posuere varius ex id ullamcorper. Donec et aliquet mi, in tincidunt massa. Maecenas ornare, elit nec condimentum semper</p>
                        <c-button status="second-info" size="md" class="mt-3 px-5">
                            View Guide
                        </c-button>
                        <small class="text-success d-block text-center mt-2">
                            <i class="fas fa-eye-slash mr-2"></i> No Auth / Code Access
                        </small>
                    </div>
                </c-block>
            </div>
        </div>
    </c-layout>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>

</style>
