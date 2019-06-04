<template>
    <div class="recommendation-block">
        <div class="recommendation-block__title">
            Looking for recommendations?
        </div>
        <div class="recommendation-block__body">
            <p>Sign in to view personalized recommendations</p>
            <c-button status="second-info"
                      class="mb-4 mt-2"
                      size="lg"
                      @click="$store.commit('application/activateModal', 'login')">
                Sign In
            </c-button>
            <p>
                or <c-button status="underline"
                             @click="$store.commit('application/activateModal', 'register')">
                    sign up
                </c-button> and join BlockHub for free
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .recommendation-block{
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 15px 0;
        overflow: hidden;
    }
    .recommendation-block__title{
        font-size: 24px;
        color: #fff;
        position: relative;
        margin: 0 auto 30px;
        padding: 0 25px;
        width: auto;
        &:before,
        &:after{
            content: "";
            position: absolute;
            height: 1px;
            background: #fff;
            top: 50%;
            transform: translateX(-100%);
            left: 0;
            width: 800px;
        }
        &:after{
            left: unset;
            right: 0;
            transform: translateX(100%);
        }
    }
    .recommendation-block__body{
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        p, a{
            margin: 0;
            padding: 0;
            font-size: 16px !important;
        }
    }
</style>
