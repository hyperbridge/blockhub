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
        <div class="text">{{ label }}</div>
        {{ currency_symbol }} {{ amount }} {{ currency }}
    </div>
</template>

<script>
    export default {
        props: {
            percent: { required: true },
            amount : { required: true },
            currency : { default: 'USD' },
            currency_symbol : { default: '$' },
            label: { default: false }
        }
    }
</script>

<style lang="scss" scoped>
    .money-info {
        width: 32%;
        margin-top: 10px;
        font-size: 15px;
        position: relative;
        color: #fff;
        .text {
            font-weight: bold;
            margin-bottom: 4px;
        }
        .progress-bar-vertical {
            width: 5px;
            min-height: calc(100% - 7px);
            display: flex;
            align-items: flex-end;
            margin: 4px 8px 3px 0;
            float: left;
            border-radius: 0;
            background: #fff;
            .progress-bar {
                width: 100%;
                height: 0;
                -webkit-transition: height 0.6s ease;
                -o-transition: height 0.6s ease;
                transition: height 0.6s ease;
            }
        }
    }
</style>
