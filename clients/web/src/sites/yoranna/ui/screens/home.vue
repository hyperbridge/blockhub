<template>
    <c-layout>
        Testttt
    </c-layout>
</template>

<script>
    import * as DB from '@/db'


    export default {
        components: {
        },
        data() {
            return {
            }
        }
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

<style lang="scss" scoped>
</style>
