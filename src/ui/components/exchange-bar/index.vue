<template>
    <div class="transaction__exchange">
        <div class="exchange__data">
            <p>Sell {{ assetsLength }} assets for</p>
            <span class="data__price">{{ sumTransaction }}$</span>
        </div>
        <div class="exchange__sum">
            <div class="sum__circle">
                <span
                    v-show="sumTransaction"
                    class="circle__price"
                    :class="[ sumTransaction - 400 ? 'positive' : 'negative' ]"
                >{{ sumTransaction && '+' }}{{ sumTransaction }}$</span>
                <c-icon
                    name="exchange-alt"
                    class="circle__icon"
                    :class="{ 'circle__icon--small': sumTransaction }"
                />
            </div>
        </div>
        <div class="exchange__data">
            <p>Buy {{ assetsLength }} assets for</p>
            <span class="data__price">{{ sumTransaction }}$</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'exchange-bar',
        props: ['assetsLength', 'sumTransaction']
    }
</script>

<style lang="scss" scoped>
    .transaction__exchange {
        padding: 10px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .exchange__data {
            text-align: center;
            font-size: 12px;
            p { margin-bottom: 7px; }
            .data__price {
                font-size: 20px;
            }
        }
        .exchange__sum {
            width: 35px;
            height: 35px;
            position: relative;
            .sum__circle {
                position: absolute;
                width: 100px;
                height: 100px;
                top: calc(-50% - 25px / 2);
                left: -25px;
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
        margin: 20px 0;
        border-radius: 5px;
        border: 1px solid rgba(255,255,255,.15);
        background: rgba(255,255,255,.05);
        background-image: radial-gradient(#2c2e47, #404363);
    }
</style>
