<template>
    <div class="gift-box">
        <div class="gift-box__img">
            <img src="https://cdn3.whatculture.com/images/2016/01/6T9nCbiI.jpg"/>
        </div>
        <div class="gift-box__divider"></div>
        <div class="gift-box__content">
            <div class="h2 text-white margin-bottom-20">
                Lorem ipsum dolor sit amet, consectetur adipiscing
            </div>
            <p>
                In eget massa a mauris ultricies finibus a nec nunc. In faucibus consectetur diam id fermentum. Aenean
                dapibus massa quis venenatis porta. Curabitur non tempor dolor. Proin pulvinar ipsum turpis, vel auctor
                elit laoreet ac. Duis consectetur sem magna.
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {}
    }
</script>

<style lang="scss" scoped>
    .gift-box {
        display: inline-flex;
        width: 400px;
        max-width: 100%;
        background: #26263d;
        padding: 15px;
        border-radius: 5px;
        color: #fff;
        flex-direction: column;
        border: 1px solid rgba(0, 0, 0, .1);
    }

    .gift-box__divider {
        width: 90%;
        margin: 40px 5%;
        height: 4px;
        border-radius: 100%;
        background: #00aeff;
        filter: blur(3px);
    }

    .gift-box__img {
        width: 100%;
        img {
            width: 100%;
            height: auto;
            max-height: 250px;
            object-fit: cover;
        }
    }
</style>
