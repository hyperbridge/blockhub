<template>
    <div class="banner" :style="{ 'background-image' : 'url(' + imgSrc + ')' }">
        <c-button status="none" :to="to" :href="link" class="block-link">
            <div class="banner__text">
                <slot />
            </div>
        </c-button>
    </div>
</template>

<script>
    export default {
        name: 'simple-banner',
        props: {
            imgSrc: String,
            link: String,
            to: String
        }
    }
</script>

<style lang="scss" scoped>
    .banner{
        display: flex;
        transition: transform .3s ease;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        overflow: hidden;
        position: relative;
        text-shadow: 0 0 2px rgba(0, 0, 0, .2);
        align-items: center;
        background-size: cover;
        backdrop-filter: blur(2px);
        opacity: 0.9;
        &:hover{
            cursor: pointer;
            will-change: transform;
            transform: perspective(300px) rotateX(0deg) rotateY(0deg) scale(1.03);
            box-shadow: 0 0 35px rgba(0, 0, 0, .2);
            transition: transform 200ms cubic-bezier(0.34, 1.01, 0.8, 0.24);
        }
    }
    .block-link{
        width: 100%;
        text-decoration: none;
        display: flex;
        height: 100%;
        padding: 25px !important;
    }
    .banner__text{
        display: flex;
        color: #fff;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        p{
            font-size: 1.5em;
            padding: 0;
            margin: 0;
        }
    }
</style>
