<template>
    <div class="currency-dropdown">
        <div
            class="currency-dropdown__current"
            @click="toggleList">
            <c-country-flag
                v-if="currentCurrency.country"
                :country="currentCurrency.country"
                size="small" />
            <c-crypto-icon
                v-else
                :name="currentCurrency.code" />
            <span class="currency-name">
                {{ currentCurrency.code }}
            </span>
            <i
                class="fas "
                :class="showList ? 'fa-angle-up' : 'fa-angle-down' " />
        </div>
        <transition name="slide-in-top">
            <div
                v-if="showList"
                v-click-outside.bool="showList"
                class="currency-dropdown__list">
                <ul :class="{'d-block' : showList}">
                    <li
                        v-for="(currency, index) in currencies"
                        :key="index"
                        class="currency-dropdown__list-item"
                        @click="changeCurrency(currency)">
                        <c-country-flag
                            v-if="currency.country"
                            :country="currency.country"
                            size="small" />
                        <c-crypto-icon
                            v-else
                            :name="currency.code" />
                        <span class="currency-name">
                            {{ currency.code }}
                        </span>
                    </li>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'CurrencyDropdown',
    components: {
        'c-crypto-icon': () => import('~/components/icon/crypto').then(m => m.default || m)
    },
    props: {
        currentCurrency: Object,
        currencies: Array
    },
    data() {
        return {
            showList: false
        }
    },
    methods: {
        toggleList() {
            this.showList = !this.showList
        },
        changeCurrency(currency) {
            this.$emit('change', currency)
            this.toggleList()
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
