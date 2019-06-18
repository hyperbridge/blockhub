<template>
    <div class="row">
        <div
            class="col-12"
            style="text-align: center">
            <br><br><br><br><br><br><br><br><br>
            <h1 v-if="error.statusCode === 404">
                <strong>GG.</strong> Page not found.
            </h1>
            <h1 v-else>
                <strong>GG.</strong> You broke it.
            </h1>
            <h3>Maybe there was an error in the spacetime continuum. <br>You better get home quick.</h3>
            <br><br>
            <c-button
                class="c-button--xl"
                status="gradient-info"
                @click="goHome">
                Go Home
            </c-button>
        </div>
    </div>
</template>


<script>
export default {
    props: {
        error: {
            type: Object,
            default: () => ({})
        }
    },
    created() {
        if (process.client) {
            this.$('body').addClass('screen--not-found')
        }
    },
    mounted() {
        this.$ga.page({
            page: '/404',
            title: 'Not Found',
            location: window.location.href
        })
    },
    beforeDestroy() {
        if (process.client) {
            this.$('body').removeClass('screen--not-found')
        }
    },
    methods: {
        goHome() {
            // Dont use route, reload because there might be an error
            window.location.href = '/'
        }
    }
}
</script>


<style lang="scss">
    body.screen--not-found {
        .app-header {
            transform: rotate(-20deg) translateX(-5%) translateY(-70%) !important;
            width: 140%;
            overflow: hidden;

            &:before {
                position: absolute;
                top: 0;
                left: 0;
                content: " ";
                z-index: 120;
                background: url("/img/cracked-glass.png") no-repeat 0% 30%;
                width: 1000px;
                height: 1000px;
                background-size: contain;
                /*filter: drop-shadow(0 0 0px #fff);*/
                opacity: 0.5;
            }
        }
        .app-header__top-bar {
            height: 600px !important;
            max-height: 600px !important;
            width: 100%;
        }
        .quick-launch {
            display: none;
        }
    }
</style>
