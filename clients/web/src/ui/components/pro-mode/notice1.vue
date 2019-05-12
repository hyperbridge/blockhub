<template>
    <div class="pro-mode-notice-1">
        <div class="pro-mode-notice-1__wrapper">
            <div class="pro-mode-notice-1__img">
                <img src="./../../../../static/img/ungrade-icon.svg"/>
            </div>
            <div class="pro-mode-notice-1__content">
                Hey {{ name }}, you're on a Basic account. Unlock more space and sharing controls!
                <div class="margin-top-15">
                    <c-button status="second-success" class="margin-right-15">
                        Upgrade now
                    </c-button>
                    <c-button status="second-warning">
                        No, thanks
                    </c-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            name: String
        }
    }
</script>

<style lang="scss" scoped>
    .pro-mode-notice-1__wrapper{
        padding: 15px;
        background: #222235;
        border: 1px solid rgba(0, 0, 0, .3);
        border-radius: 5px;
        display: inline-flex;
        color: #fff;
        max-width: 300px;
        align-items: center;
    }
    .pro-mode-notice-1__img{
        width: 80px;
        margin-right: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        img, svg{
            max-width: 100%;
            max-height: 100%;
        }
    }
</style>
