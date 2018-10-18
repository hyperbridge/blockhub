<template>
    <div class="logo-loader">
        <img src="/static/img/blockhub-logotype-color.png" />
    </div>
</template>

<script>
    export default {
        name: 'c-loading-logo',
        props: {
            isLoading:{
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang="scss" scoped>
    .logo-loader{
        display: inline-block;
        width: 100%;
        -webkit-app-region: no-drag;
        img {
            width: 147px;
            filter: brightness(1.2);
        }
        svg{
            width: 100%;
            .fadeIn{
                -webkit-animation: fadeIn 2s infinite linear;
                -moz-animation: fadeIn 2s infinite linear;
                -o-animation: fadeIn 2s infinite linear;
                -ms-animation: fadeIn 2s infinite linear;
                animation: fadeIn 2s infinite linear;
            }
        }
    }
    @keyframes spin {
        from {transform:rotate(0deg);}
        to {transform:rotate(360deg);}
    }

    @keyframes fadeIn {
        0%{
            opacity: .2;
        }
        10%{
            opacity: .4;
        }
        20%{
            opacity: .6;
        }
        30%{
            opacity: .8;
        }
        50%{
            opacity: .1;
        }
        70%{
            opacity: .8;
        }
        80%{
            opacity: .6;
        }
        90%{
            opacity: .4;
        }
        100%{
            opacity: .2;
        }
    }
</style>
