<template>
    <div class="currency-dropdown">
        <div class="currency-dropdown__current" @click="toggleList">
            <c-country-flag :country='current_currency.country' size='small' />
            <span class="currency-name">
                {{ current_currency.name }}
            </span>
            <i class="fas " :class="showList ? 'fa-angle-up' : 'fa-angle-down' "></i>
        </div>
        <transition name="slide-in-top">
            <div class="currency-dropdown__list" v-if="showList" v-click-outside.bool="showList">
                <ul :class="{'d-block' : showList}">
                    <li class="currency-dropdown__list-item" v-for="(currency, index) in currencies" @click="changeCurrency(currency)">
                        <c-country-flag :country='currency.country' size='small' />
                        <span class="currency-name">
                        {{ currency.name }}
                    </span>
                    </li>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script>
    import CountryFlag from 'vue-country-flag'

    export default {
        name: 'currency-dropdown',
        components: {
            'c-country-flag' : CountryFlag
        },
        data(){
            return{
                current_currency:{
                    country: 'us',
                    symbol: '$',
                    name: 'USD'

                },
                currencies:[
                    {
                        country: 'ua',
                        symbol: '',
                        name: 'UAH'

                    },
                    {
                        country: 'us',
                        symbol: '$',
                        name: 'USD'

                    },
                    {
                        country: 'ru',
                        symbol: '',
                        name: 'RUB'

                    }
                ],
                showList: false
            }
        },
        methods:{
            toggleList(){
                this.showList = !this.showList
            },
            changeCurrency(currency){
                this.current_currency = currency
            }
        }
    }
</script>

<style lang="scss" scoped>
    .currency-dropdown{
        position: relative;
        height: 22px;
        z-index: 99;
    }
    .currency-dropdown__current{
        display: inline-flex;
        align-items: center;
        color: #fff;
        width: 80px;
        padding: 5px;
        height: 22px;
        font-size: 14px;
        cursor: pointer;
        .currency-name{
            margin-left: 8px;
        }
        i{
            margin-left: auto;
        }
    }
    .currency-dropdown__list{
        position: absolute;
        overflow: hidden;
        left: 0;
        right: 0;
        top: 100%;
        background: rgba(255, 255, 255, .75);
        border-radius: 10px;
        ul{
            padding: 0;
            margin: 0;
            left: 0;
            right: 0;
            min-width: unset;
            position: relative;
        }
    }
    .currency-dropdown__list-item{
        list-style: none;
        display: flex;
        align-items: center;
        color: #2e3546;
        height: 25px;
        padding: 0 8px;
        font-size: 12px;
        background: transparent;
        &:last-child{
            border-bottom: none;
        }
        .currency-name{
            margin-left: 8px;
        }
        &:hover{
            cursor: pointer;
            background: rgba(0, 0, 0, .05);
        }
    }
</style>
