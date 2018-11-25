<template>
    <div class="plans-list__item invert">
        <h6>{{ plan.title }}</h6>
        <c-button
            status="success"
            :icon="plan.price ? 'shopping-bag': '' "
            :href="plan.link"
            data-toggle="modal"
            data-target="#purchase-modal"
        >
            <span class="margin-left-5" v-if="plan.price">
                {{ plan.price | convertCurrency }}
            </span>
            <span class="margin-left-5" v-else>
                <template v-if="plan.link_text">
                    {{ plan.link_text }}
                </template>
                <template v-else>
                    Play Now
                </template>
            </span>
        </c-button>
    </div>
</template>


<script>
    export default {
        name: 'game-plan',
        props: {
            plan: {
                type: Object,
                required: true
            }
        }
    }
</script>


<style lang="scss" scoped>

    .plans-list__item{
        padding: 10px;
        border-radius: 5px;
        box-shadow: 0 3px 6px rgba(0, 0, 0, .2);
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
        background: #343555;
        &:hover{
            background: #1C2032;
        }
        h6{
            text-align: left;
            line-height: 25px;
            font-size: 21px;
            margin: 0;
            padding: 0;
            max-width: calc( 100% - 115px );
            display: inline-block;
        }
        .c-btn {
            min-width: 90px;
            height: 24px;
        }
    }

</style>
