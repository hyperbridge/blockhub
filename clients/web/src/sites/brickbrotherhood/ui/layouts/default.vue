<template>
    <div class="layout">
        <div class="layout__topdisplay"></div>
        <div class="layout__content">
            <slot />
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            showLeftPanel: {
                type: Boolean,
                default: true
            },
            showRightPanel: {
                type: Boolean,
                default: false
            },
            title: String,
            data: Object
        },
        data() {
            return {
            }
        },
        mounted() {
            document.getElementById('startup-loader').style.display = 'none'
            document.body.classList.add('light')
        },
    }
</script>

<style lang="scss" scoped>
    body {
        font-family: 'sofia-pro', sans-serif;
        font-weight: normal;
        font-style: normal;
        font-size: 16px;
        line-height: 24px;
        color: #666666;
        overflow-x: hidden;
        background: #e0e6ea !important;
    }
    #left-bg, #right-bg, #header-bg {
        display: none;
    }

    .layout {
        padding: 180px 30px 50px;
        margin: -30px;
        min-height: 100vh;
    }

    .layout__topdisplay {
        position: absolute;
        z-index: -1;
        top: 0;
        display: inline-block;
        width: 100vw;
        height: 1000px;
        background: url("https://bitcoin-btc.review/Apps/Site/Projects/cryptoreviews/Assets/Other/images/banner-header.png") top center no-repeat #e0e6ea;
        background-size: contain;
    }

    .layout__content {
        max-width: 1200px;
        margin: 0 auto;
    }


    .section {
        position: relative;
        width: 100%;
        display: block;
        margin: 0 auto;
        box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        margin-bottom: 20px;
        background: #fff;
        h1 {
            font-size: 5.2em;
            font-weight: 600;
        }
    }

    .section--main {
        margin-top: 180px;
        padding: 80px 0 0;
        background: url(https://ak3.picdn.net/shutterstock/videos/24705143/thumb/1.jpg);
        background-size: cover;
    }

    .section--overview {
        padding: 80px 0;
    }


    .heading-title {
        margin-bottom: 60px;
        text-align: center;
    }
    .heading-title .title {
        position: relative;
        padding-bottom: 15px;
        font-size: 40px;
        line-height: 50px;
    }
    .heading-title .title a {
        outline: medium none !important;
        color: #666;
    }
    .heading-title .title:before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        margin-left: -40px;
        width: 80px;
        height: 3px;
        background: #f9b707;
        display: inline-block;
    }


    .heading-title .title:before, .heading-left .title:before {
        background: #f9b707;
    }
</style>
