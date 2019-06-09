<template>
    <div class="gift-box">
        <div class="gift-box__preview">
            <div class="gift-box__img">
                <img src="https://media01.gameloft.com/layout/support/revamp/assets/images/game-banner/banner_CC_Windows.jpg"/>
            </div>
            <div class="gift-box__divider"></div>
            <div class="gift-box__preview-content text-center">
                <div class="h3 text-white margin-bottom-20">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                </div>
                <p>
                    In eget massa a mauris ultricies finibus a nec nunc. In faucibus consectetur diam id fermentum.
                    Aenean
                    dapibus massa quis venenatis porta. Curabitur non tempor dolor. Proin pulvinar ipsum turpis, vel
                    auctor
                    elit laoreet ac. Duis consectetur sem magna.
                </p>
            </div>
        </div>
        <div class="gift-box__content">
            <div class="gift-box_msg">
                <c-block title="You have a gift">
                    <div v-html="text"></div>
                </c-block>
            </div>
            <div class="gift-box_action text-center text-white mt-auto mb-auto">
                <div class="h5">
                    From <strong>{{ user }}</strong> on 4 May
                </div>
                <div>
                    Status: {{ status }}
                </div>
                <c-button status="second-success" size="md" class="margin-top-10 mx-2">
                    Accept
                </c-button>
                <c-button status="second-warning" size="md" class="margin-top-10 mx-2">
                    Accept
                </c-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            status: String,
            user: String,
            date: String,
            text: String,
            gift: Object
        }
    }
</script>

<style lang="scss" scoped>
    .gift-box {
        display: flex;
        width: 100%;
    }
    .gift-box__preview {
        width: 35%;
        max-width: 100%;
        display: inline-flex;
        background: #26263d;
        padding: 15px;
        border-radius: 5px;
        color: #fff;
        flex-direction: column;
        border: 1px solid #00aeff;
    }

    .gift-box__divider {
        width: 90%;
        margin: 20px 5%;
        height: 2px;
        border-radius: 100%;
        background: #00aeff;
        filter: blur(3px);
    }

    .gift-box__img {
        width: 100%;
        img {
            width: 100%;
            height: auto;
            max-height: 200px;
            object-fit: cover;
        }
    }

    .gift-box__preview-content {
        display: inline-flex;
        flex-direction: column;
    }

    .gift-box__content {
        display: inline-flex;
        flex-direction: column;
        padding-left: 20px;
        width: 65%;
        flex-basis: content;
    }

    .gift-box_msg {
    }
</style>
