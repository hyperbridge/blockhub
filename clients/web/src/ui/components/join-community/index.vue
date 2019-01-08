<template>
    <div class="join-community" v-if="!signedIn">
        <div class="join-community__wrapper">
            <c-img src="../../../../static/img/logo.fw.png" />
            <div class="h5 font-weight-bold">
                Join the BlockHub community!
            </div>
            <div>
                Discover the best games before they're mainstream.
            </div>
            <c-button status="outline-white" @click="$store.commit('application/activateModal', 'register')">
                Sign Up
            </c-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'c-join-community',
        computed:{
            signedIn() {
                return this.$store.state.application.signedIn
            }
        }
    }
</script>

<style lang="scss" scoped>
    .join-community__wrapper{
        padding: 20px 10px;
        border-radius: 5px;
        background: rgba(93, 95, 136, 0.5);
        display: flex;
        flex-direction: column;
        text-align: center;
        img{
            max-width: 90%;
            height: auto;
            margin: 0 auto 15px;
            display: block;
        }
        .c-button{
            margin: 20px auto auto;
        }
    }
</style>

