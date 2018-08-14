<template>

    <div class="plans-list invert">
        <div class="plans-list__container">
            <div v-for="(plan, index) in items" v-bind:key="index" class="plans-list__item">
                <h6>{{ plan.title}}</h6>
                <a :href="plan.link" v-if="plan.price" data-toggle="modal" data-target="#purchase-modal">
                    <i class="fas fa-shopping-bag"></i> Buy for ${{ plan.price }}
                </a>
                <a :href="plan.link" v-else data-toggle="modal" data-target="#purchase-modal">
                    <i class="fas fa-check"></i> Free Game
                </a>
            </div>
        </div>
    </div>

</template>


<script>
    export default {
        props: ['items']
    }
</script>


<style lang="scss" scoped>

    .plans-list{
        overflow: hidden;
    }

    .plans-list__item{
        padding: 10px;
        border-radius: 5px;
        box-shadow: 0 3px 6px rgba(0, 0, 0, .2);
        width: 100%;
        float: left;
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
        a{
            width: 115px;
            border-radius: 5px;
            background: #5EA72B;
            color: #fff;
            font-weight: bold;
            text-transform: uppercase;
            text-decoration: none;
            line-height: 25px;
            font-size: 13px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, .15);
            display: inline-block;
            float: right;
            text-align: left;
            padding: 0 5px;
            &:hover{
                background: #508e25
            }
        }
        i{
            font-size: 15px;
            margin-right: 8px;
        }
    }

</style>
