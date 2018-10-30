<template>
    <div class="join-community" v-if="!signed_in">
        <div class="join-community__wrapper">
            <c-img src="../../../../static/img/logo.fw.png" />
            <div class="h5 font-weight-bold">
                Join the BlockHub community!
            </div>
            <div>
                Discover the best games before they're mainstream.
            </div>
            <c-button status="outline-info" href="/#/account/signup">
                Sign Up
            </c-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'c-join-community',
        computed:{
            signed_in() {
                return this.$store.state.application.signed_in
            }
        }
    }
</script>

<style lang="scss" scoped>
    .join-community__wrapper{
        padding: 20px 10px;
        border-radius: 5px;
        background: #3D3E5D;
        display: flex;
        flex-direction: column;
        text-align: center;
        img{
            max-width: 90%;
            height: auto;
            margin: 0 auto 15px;
            display: block;
        }
        .c-btn{
            margin: 20px auto auto;
        }
    }
</style>

