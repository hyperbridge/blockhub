<template>
    <div class="c-contributor-box">
        <div class="c-contributor-box__title">
            Become a product Hunt contributor
        </div>
        <div class="c-contributor-box__description">
            <div class="text-white margin-bottom-15">
                Becoming a Product Hunt contributor allows you to hunt products.
            </div>
            <div class="margin-bottom-10">
                4 steps left!
            </div>
            <c-progress-bar :values="{ reached: '1', goal: '4'}"/>
            <div class="text-right margin-top-15">
                <c-button status="second-info" @click=" showDetails = !showDetails ">
                    Learn More
                </c-button>
            </div>
        </div>
        <div class="c-contributor-box__details"
             :class="{'is-active': showDetails}"
             v-if="showDetails">
            <div class="c-contributor-box__details-item margin-right-40"
                 v-for="(step, idx) in steps"
                 :key="`step-${idx}`">
                <div class="d-flex flex-column">
                    <c-checkbox :value="step.value">
                        {{ step.label }}
                    </c-checkbox>
                    <div class="margin-left-20 padding-left-5 margin-top-5" v-if="step.description">
                        {{ step.description }}
                    </div>
                </div>
                <c-button status="second-success">
                    Completed
                </c-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            steps: Array
        },
        components: {
            'c-progress-bar': (resolve) => require(['@/ui/components/progress-bar'], resolve),
            'c-checkbox': (resolve) => require(['@/ui/components/checkbox'], resolve)
        },
        data(){
            return{
                showDetails: true
            }
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
    .c-contributor-box__details{
        height: 0;
        overflow: hidden;
        transition: all 200ms ease-in-out;
        &.is-active{
            height: auto;
        }
    }
    .c-contributor-box__details-item{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin: 15px 0 0;
        padding-bottom: 15px;
        border-bottom: 1px solid rgba(255, 255, 255, .05);
        &:last-child{
            border-bottom: 0;
            padding-bottom: 0;
        }
    }
</style>


