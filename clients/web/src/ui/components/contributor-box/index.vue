<template>
    <div class="c-contributor-box">
        <div class="c-contributor-box__title">
            Become a product Hunt contributor
        </div>
        <div class="c-contributor-box__description">
            <div class="text-white margin-bottom-15">
                Becoming a Product Hunt contributor allows you to hunt products.
            </div>
            <div class="margin-bottom-5">
                4 steps left!
            </div>
            <c-progress-bar :values="{ reached: '1', goal: '4'}"/>
            <div class="text-right margin-top-10">
                <c-button status="second-info">
                    Learn More
                </c-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {},
        components: {
            'c-progress-bar': (resolve) => require(['@/ui/components/progress-bar'], resolve)
        }
    }
</script>

<style lang="scss" scoped>
    .c-contributor-box{
        background: #26263d;
        padding: 25px;
        border-radius: 5px;
        display: inline-flex;
        max-width: 100%;
        color: #fff;
        flex-direction: column;
    }
    .c-contributor-box__title{
        padding-bottom: 15px;
        margin-bottom: 15px;
        border-bottom: 1px solid rgba(255, 255, 255, .1);
        color: #fff;
        font-size: 22px;
        font-weight: 500;
        display: flex;
        width: 100%;
    }
</style>


