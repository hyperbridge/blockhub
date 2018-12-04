<template>
    <c-layout navigationKey="help">
        <div class="row">
            <div class="col-12" style="text-align: center">
                <br /><br /><br /><br /><br /><br /><br /><br /><br />
                <h1><strong>GG.</strong> You broke it.</h1>
                <h3>That page wasn't found or there's an error in the spacetime continuum. <br />Either way, you better start sprinting home.</h3>
                <br /><br />
                <c-button class="c-btn-xl" status="gradient-info" @click="goHome">Go Home</c-button>
            </div>
        </div>
        <!-- <div class="not-found__404" /> -->
    </c-layout>
</template>


<script>
export default {
    components: {
    },
    methods: {
        goHome() {
            window.location.href = '/'
        }
    }
}
</script>


<style lang="scss">
    .not-found__404 {
        position: fixed;
        top: 30px;
        left: 30px;
        background: url(/static/img/404.png) no-repeat 0 0;
        z-index: 120;
        width: 400px;
        height: 200px;
        filter: invert(1);
    }
    .app-header {
        rotate: -20deg !important;
        transform: translateX(-80px) translateY(-450px) !important;
        overflow: hidden;

        &:before {
            position: absolute;
            top: 0;
            left: 0;
            content: " ";
            z-index: 120;
            background: url("/static/img/cracked-glass.png") no-repeat 0% 30%;
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
    }
    .quick-launch {
        display: none;
    }
</style>
