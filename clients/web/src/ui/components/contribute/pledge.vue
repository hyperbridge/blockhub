<template>
    <div class="pledge-item" @mouseover=" showToggle = true" @mouseleave=" showToggle = false ">
        <transition name="fade">
            <div class="pledge-form-toggle" v-if="showToggle && !form " @click="showFrom" style="animation-duration: 0.5s">
                Select this reward
            </div>
        </transition>
        <h3>Pledge US {{ pledge.minPrice | convertCurrency }} or more</h3>
        <h4 v-if="pledge.title">{{ pledge.title }}</h4>
        <div class="pledge-item__text">
            {{ pledge.description }}
        </div>
        <div class="pledge-item__includes" v-if="!form && pledge.includes.length > 0">
            <h6>Includes</h6>
            <ul>
                <li v-for="(itm, index) in pledge.includes" :key="index">
                    {{ itm.text }}
                </li>
            </ul>
        </div>
        <div class="pledge-item__info">
            <div v-if="pledge.deliveryDate">
                <span class="h6">Estimated delivery</span>
                {{ date }}
            </div>
            <div v-if="pledge.shipsTo">
                <span class="h6">Ships to</span>
                {{ pledge.shipsTo }}
            </div>
            <div class="w-100 mt-5" v-if="pledge.backers">
                <span class="h6">
                    {{ pledge.backers }} backers
                </span>
            </div>
        </div>
        <transition name="fade" v-if="form">
            <div class="mt-5">
                <div class="h6 font-weight-bold text-uppercase mb-3">
                    Pledge amount
                </div>
                <c-contribute-form v-model="toBePaid" :defaultValue="pledge.minPrice" :currency="currency" :active="true" @click="$emit('click')" />
            </div>
        </transition>
    </div>
</template>

<script>
    import ContributeForm from '@/ui/components/contribute/form.vue'
    import moment from 'moment'

    export default {
        name: 'pledge',
        props: ['pledge', 'currency'],
        components: {
            'c-contribute-form': ContributeForm
        },
        data() {
            return {
                form: false,
                showToggle: false,
                toBePaid: ''
            }
        },
        methods: {
            showFrom() {
                this.form = true;
                this.showToggle = false;
            }
        },
        computed: {
            date() {
                return moment(this.pledge.deliveryDate).format('DD MMMM, YYYY')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .pledge-item{
        padding: 15px;
        border-radius: 5px;
        position: relative;
        overflow: hidden;
        color: #fff;
        background: rgba(0, 0, 0, .13);
        margin-bottom: 30px;
        h3, h4{
            font-size: 24px;
            text-transform: uppercase;
            color: #fff;
            padding: 0;
            margin-bottom: 25px;
        }
        h4{
            font-size: 16px;
            margin: 5px 0;
        }
    }
    .pledge-item__text{
        font-size: 14px;
        margin: 15px 0;
    }
    .pledge-item__includes{
        font-size: 14px;
        margin: 30px 0;
        h6{
            font-size: 14px;
            text-transform: uppercase;
            color: #fff;
            font-weight: bold;
        }
        ul{
            padding: 0;
            li{
                display: block;
                width: 100%;
                margin: 10px 0;
                position: relative;
                padding-left: 20px;
                &:before{
                    width: 5px;
                    height: 5px;
                    border-radius: 100%;
                    background: #fff;
                    position: absolute;
                    top: 8px;
                    left: 5px;
                    content: "";
                }
            }
        }
    }
    .pledge-item__info{
        display: flex;
        justify-content: space-between;
        text-align: left;
        flex-wrap: wrap;
        width: 100%;
        .h6{
            font-size: 14px;
            text-transform: uppercase;
            color: #fff;
            font-weight: bold;
            display: block;
        }
        div{
            width: 48%;
        }
    }
    .pledge-form-toggle{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(93, 117, 247, .95);
        z-index: 20;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        text-transform: uppercase;
        font-size: 1.5rem;
        cursor: pointer;
    }
</style>
