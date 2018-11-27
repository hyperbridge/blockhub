<template>
    <c-layout navigationKey="account" :showLeftPanel="false" :showRightPanel="false">
        <c-login-popup :activated="true" @close="closePopup" ref="login_modal_active"></c-login-popup>

    </c-layout>
</template>


<script>
export default {
    components: {
        'c-login-popup': (resolve) => require(['@/ui/components/login-popup/index.vue'], resolve),
    },
    watch: {
        '$store.state.auth.user'(newVal) {
            if (newVal) {
                this.$router.replace({ name: 'Home' })
            }
        }
    }
}
</script>


<style lang="scss" scoped>
    .chosen-box{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .chosen-box__container {
        background: #3D3E5D;
        border-radius: 5px;
        padding: 40px;
        border: 1px solid #373752;
        margin-bottom: 15px;
        text-align: center;
        box-shadow: 0 0 10px rgba(0, 0, 0, .16);
        &:last-child {
            margin: 0;
        }
    }

</style>

<style lang="scss">
</style>
