<template>
    <div class="image-overlay">
        <div class="image-overlay__title" v-if="title">
            {{ title }}
        </div>
        <div class="image-overlay__subtitle" v-if="subtitle">
            {{ subtitle }}
        </div>
        <div class="image-overlay__text" v-if="text">
            {{ text }}
        </div>
    </div>
</template>

<script>
    export default {
        props: ['title', 'subtitle', 'text']
    }
</script>

<style lang="scss">
    .image-overlay{
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        color: #fff;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 20px;
        min-height: 70%;
        background: -webkit-linear-gradient(bottom, rgba(28, 32, 50, 1) 8%, rgba(28, 32, 50, 0.75) 50%, rgba(28, 32, 50, 0) 100%);
        z-index: 10;
    }
    .image-overlay__title{
        font-weight: bolder;
        font-size: 23px;
        margin-bottom: 10px;
    }
    .image-overlay__subtitle{
        font-weight: bolder;
        font-size: 16px;
        margin-bottom: 10px;
    }
    .image-overlay__text{
        font-size: 14px;
        opacity: .8;
    }
</style>
