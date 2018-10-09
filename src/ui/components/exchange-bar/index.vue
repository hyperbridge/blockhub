<template>
    <div class="transaction__exchange">
        <div class="exchange__data">
            <p>Sell {{ yours }} assets for</p>
            <span class="data__price">{{ price.yours }}$</span>
        </div>
        <div class="exchange__sum">
            <div class="sum__circle">
                <span
                    v-show="price.sum || price.yours || price.their"
                    class="circle__price"
                    :class="[ price.sum > 0
                        ? 'positive'
                        : price.sum < 0
                            ? 'negative'
                            : ''
                    ]"
                >{{ price.sum > 0 ? '+' : '' }}{{ price.sum }}$</span>
                <c-icon
                    name="exchange-alt"
                    class="circle__icon"
                    :class="{ 'circle__icon--small': price.sum || price.yours || price.their }"
                />
            </div>
        </div>
        <div class="exchange__data">
            <p>Buy {{ their }} assets for</p>
            <span class="data__price">{{ price.their }}$</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'exchange-bar',
        props: {
            price: {
                type: Object,
                required: true
            },
            yours: Number,
            their: Number
        }
    }
</script>

<style lang="scss" scoped>
    .transaction__exchange {
        padding: 10px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 50px 0;
        border-radius: 5px;
        border: 1px solid rgba(255,255,255,.15);
        background: rgba(255,255,255,.05);
        background-image: radial-gradient(#2c2e47, #404363);
    }
    .exchange__data {
        text-align: center;
        font-size: 12px;
        width: 90px;
        p { margin-bottom: 7px; }
        .data__price {
            font-size: 20px;
        }
    }
    .exchange__sum {
        width: 100px;
        height: 35px;
        position: relative;
        .sum__circle {
            position: absolute;
            width: 100px;
            height: 100px;
            top: calc(-50% - 25px / 2);
            left: -25px / 2;
            background: rgb(50, 52, 78);
            box-shadow: 0 0 40px -1px rgb(31, 32, 51);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            .circle {
                &__price {
                    font-size: 22px;
                    transform: translateY(10px);
                    animation: slideIn .2s ease;
                }
                &__icon {
                    font-size: 35px;
                    transition: transform .2s ease;
                }
                &__icon--small {
                    transform: translateY(10px) scale(0.5);
                }
                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(10px);
                    }
                }
            }
        }
        .sum__icon {
            font-size: 35px;
        }
    }
</style>
