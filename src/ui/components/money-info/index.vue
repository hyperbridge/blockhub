<template>
    <div class="money-info">
        <div class="progress progress-bar-vertical">
            <div class="progress-bar bg-success" role="progressbar"
                 :aria-valuenow="percent"
                 aria-valuemin="0" aria-valuemax="100"
                 :style="{ height: percent + '%' }">
                <span class="sr-only">{{ percent }}% Complete</span>
            </div>
        </div>
        <div class="money-info__detail">
            <div class="text">{{ label }}</div>
            <div class="amount-detail">
                {{ currency | currency_sign }}{{ amount }}
                <span v-if="goal"> of {{ currency | currency_sign }}{{ goal }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            percent: { required: true },
            amount : { required: true },
            currency : { default: 'USD' },
            label: { default: false },
            goal : {}
        },
        filters: {
            currency_sign(cur_name) {
                switch(cur_name) {
                    case 'EUR':
                        return '€'
                    case 'GBP':
                        return '£'
                    default:
                        return '$'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .money-info {
        margin-top: 10px;
        font-size: 15px;
        position: relative;
        color: #fff;
        display: flex;
        justify-content: space-between;
        .progress-bar-vertical {
            width: 5px;
            display: flex;
            align-items: flex-end;
            height: auto;
            margin: 0;
            float: left;
            border-radius: 0;
            background: #fff;
            position: absolute;
            top: 4px;
            left: 0;
            bottom: 3px;
            .progress-bar {
                width: 100%;
                height: 0;
                -webkit-transition: height 0.6s ease;
                -o-transition: height 0.6s ease;
                transition: height 0.6s ease;
            }
        }
    }
    .money-info__detail{
        width: 100%;
        padding-left: 15px;
        .text {
            font-weight: bold;
            margin-bottom: 4px;
        }
    }
</style>
