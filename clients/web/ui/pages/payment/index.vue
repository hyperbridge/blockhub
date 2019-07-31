<template>
    <Layout>
        <div class="row">
            <div class="col-12">
                <Block title="Payment method">
                    <Tabs :tabNames="['Payment information', 'Billing information']"
                            styled>
                        <Tab name="Payment information" :tabId="1">
                            <div class="row align-items-stretch">
                                <div class="col-12 h5 margin-top-10 margin-bottom-20">
                                    Payment Information
                                </div>
                                <div class="col-12">
                                    <div class="form-group margin-bottom-20">
                                        <label>
                                            Choose payment system
                                        </label>
                                        <Multiselect
                                            v-model="paymentSystem"
                                            class="dark-mode"
                                            label="label"
                                            :options="paymentSystems" />
                                    </div>
                                </div>
                                <div class="col-12 col-lg-6 card-container">
                                    <div id="card" class="creditcard">
                                        <div class="front">
                                            <svg
                                                id="cardfront"
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                x="0px"
                                                y="0px"
                                                viewBox="0 0 750 471"
                                                style="enable-background:new 0 0 750 471;"
                                                xml:space="preserve">
                                                <g id="Front">
                                                    <g id="CardBackground">
                                                        <g id="Page-1_1_">
                                                            <g id="amex_1_">
                                                                <path
                                                                    id="Rectangle-1_1_"
                                                                    class="lightcolor"
                                                                    d="M40,0h670c22.1,0,40,17.9,40,40v391c0,22.1-17.9,40-40,40H40c-22.1,0-40-17.9-40-40V40
                            C0,17.9,17.9,0,40,0z" />
                                                            </g>
                                                        </g>
                                                        <path class="darkcolor" d="M750,431V193.2c-217.6-57.5-556.4-13.5-750,24.9V431c0,22.1,17.9,40,40,40h670C732.1,471,750,453.1,750,431z" />
                                                    </g>
                                                    <text id="svgnumber" transform="matrix(1 0 0 1 60.106 295.0121)" class="st2 st3 st4">
                                                        {{ card.cardNumber }}
                                                    </text>
                                                    <text id="svgname" transform="matrix(1 0 0 1 54.1064 428.1723)" class="st2 st5 st6">{{ card.cardHolder }}</text>
                                                    <text transform="matrix(1 0 0 1 54.1074 389.8793)" class="st7 st5 st8">cardholder name</text>
                                                    <text transform="matrix(1 0 0 1 479.7754 388.8793)" class="st7 st5 st8">expiration</text>
                                                    <text transform="matrix(1 0 0 1 65.1054 241.5)" class="st7 st5 st8">card number</text>
                                                    <g>
                                                        <text id="svgexpire" transform="matrix(1 0 0 1 574.4219 433.8095)" class="st2 st5 st9">{{ card.expiration }}</text>
                                                        <text transform="matrix(1 0 0 1 479.3848 417.0097)" class="st2 st10 st11">VALID</text>
                                                        <text transform="matrix(1 0 0 1 479.3848 435.6762)" class="st2 st10 st11">THRU</text>
                                                        <polygon class="st2" points="554.5,421 540.4,414.2 540.4,427.9 		" />
                                                    </g>
                                                    <g id="cchip">
                                                        <g>
                                                            <path
                                                                class="st2"
                                                                d="M168.1,143.6H82.9c-10.2,0-18.5-8.3-18.5-18.5V74.9c0-10.2,8.3-18.5,18.5-18.5h85.3
                        c10.2,0,18.5,8.3,18.5,18.5v50.2C186.6,135.3,178.3,143.6,168.1,143.6z" />
                                                        </g>
                                                        <g>
                                                            <g>
                                                                <rect x="82" y="70" class="st12" width="1.5" height="60" />
                                                            </g>
                                                            <g>
                                                                <rect x="167.4" y="70" class="st12" width="1.5" height="60" />
                                                            </g>
                                                            <g>
                                                                <path
                                                                    class="st12"
                                                                    d="M125.5,130.8c-10.2,0-18.5-8.3-18.5-18.5c0-4.6,1.7-8.9,4.7-12.3c-3-3.4-4.7-7.7-4.7-12.3
                            c0-10.2,8.3-18.5,18.5-18.5s18.5,8.3,18.5,18.5c0,4.6-1.7,8.9-4.7,12.3c3,3.4,4.7,7.7,4.7,12.3
                            C143.9,122.5,135.7,130.8,125.5,130.8z M125.5,70.8c-9.3,0-16.9,7.6-16.9,16.9c0,4.4,1.7,8.6,4.8,11.8l0.5,0.5l-0.5,0.5
                            c-3.1,3.2-4.8,7.4-4.8,11.8c0,9.3,7.6,16.9,16.9,16.9s16.9-7.6,16.9-16.9c0-4.4-1.7-8.6-4.8-11.8l-0.5-0.5l0.5-0.5
                            c3.1-3.2,4.8-7.4,4.8-11.8C142.4,78.4,134.8,70.8,125.5,70.8z" />
                                                            </g>
                                                            <g>
                                                                <rect x="82.8" y="82.1" class="st12" width="25.8" height="1.5" />
                                                            </g>
                                                            <g>
                                                                <rect x="82.8" y="117.9" class="st12" width="26.1" height="1.5" />
                                                            </g>
                                                            <g>
                                                                <rect x="142.4" y="82.1" class="st12" width="25.8" height="1.5" />
                                                            </g>
                                                            <g>
                                                                <rect x="142" y="117.9" class="st12" width="26.2" height="1.5" />
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                                <g id="Back" />
                                            </svg>
                                        </div>
                                        <div class="back">
                                            <svg
                                                id="cardback"
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                x="0px"
                                                y="0px"
                                                viewBox="0 0 750 471"
                                                style="enable-background:new 0 0 750 471;"
                                                xml:space="preserve">
                                                <g id="Front">
                                                    <line class="st0" x1="35.3" y1="10.4" x2="36.7" y2="11" />
                                                </g>
                                                <g id="Back">
                                                    <g id="Page-1_2_">
                                                        <g id="amex_2_">
                                                            <path
                                                                id="Rectangle-1_2_"
                                                                class="darkcolor greydark"
                                                                d="M40,0h670c22.1,0,40,17.9,40,40v391c0,22.1-17.9,40-40,40H40c-22.1,0-40-17.9-40-40V40
                        C0,17.9,17.9,0,40,0z" />
                                                        </g>
                                                    </g>
                                                    <rect y="61.6" class="st2" width="750" height="78" />
                                                    <g>
                                                        <path
                                                            class="st3"
                                                            d="M701.1,249.1H48.9c-3.3,0-6-2.7-6-6v-52.5c0-3.3,2.7-6,6-6h652.1c3.3,0,6,2.7,6,6v52.5
                    C707.1,246.4,704.4,249.1,701.1,249.1z" />
                                                        <rect x="42.9" y="198.6" class="st4" width="664.1" height="10.5" />
                                                        <rect x="42.9" y="224.5" class="st4" width="664.1" height="10.5" />
                                                        <path class="st5" d="M701.1,184.6H618h-8h-10v64.5h10h8h83.1c3.3,0,6-2.7,6-6v-52.5C707.1,187.3,704.4,184.6,701.1,184.6z" />
                                                    </g>
                                                    <text id="svgsecurity" transform="matrix(1 0 0 1 621.999 227.2734)" class="st6 st7">{{ card.securityCode }}</text>
                                                    <g class="st8">
                                                        <text transform="matrix(1 0 0 1 518.083 280.0879)" class="st9 st6 st10">security code</text>
                                                    </g>
                                                    <rect x="58.1" y="378.6" class="st11" width="375.5" height="13.5" />
                                                    <rect x="58.1" y="405.6" class="st11" width="421.7" height="13.5" />
                                                    <text id="svgnameback" transform="matrix(1 0 0 1 59.5073 228.6099)" class="st12 st13">{{ card.cardHolder }}</text>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-lg-6 form-container margin-bottom-5">
                                    <div class="field-container margin-bottom-10">
                                        <label>Name</label>
                                        <!--<input id="name" maxlength="20" type="text">-->
                                        <Input v-model="card.cardHolder" maxlength="20" @focus="flippCard('show-front')" />
                                    </div>
                                    <div class="field-container margin-bottom-10">
                                        <label>Card Number</label>
                                        <!--<input id="cardnumber" type="text" pattern="[0-9]*" inputmode="numeric">-->
                                        <Input
                                            v-model="card.cardNumber"
                                            v-mask="'9999 9999 9999 9999'"
                                            pattern="[0-9]*"
                                            maxlength="20"
                                            inputmode="numeric"
                                            @focus="flippCard('show-front')" />
                                    </div>
                                    <div class="field-container half-width">
                                        <label>Expiration (mm/yy)</label>
                                        <!--<input id="expirationdate" type="text" pattern="[0-9]*" inputmode="numeric">-->
                                        <Input v-model="card.expiration" v-mask="'99/99'" pattern="[0-9]*" inputmode="numeric" @focus="flippCard('show-front')" />
                                    </div>
                                    <div class="field-container half-width">
                                        <label>Security Code</label>
                                        <!--<input id="securitycode" type="text" pattern="[0-9]*" inputmode="numeric">-->
                                        <Input v-model="card.securityCode" v-mask="'999'" pattern="[0-9]*" inputmode="numeric" @focus="flippCard" />
                                    </div>
                                    <div class="w-100 margin-top-10 text-right">
                                        <Button status="second-success">
                                            Save
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab name="Billing information" :tabId="2">
                            <div class="row align-items-stretch">
                                <div class="col-12 h5 margin-top-15 margin-bottom-20">
                                    Billing Information
                                </div>
                                <div class="col-12 col-lg-3">
                                    <div class="field-container margin-bottom-10">
                                        <label>
                                            First name
                                        </label>
                                        <Input v-model="billingInfo.first_name" placeholder="First name" />
                                    </div>
                                </div>
                                <div class="col-12 col-lg-3">
                                    <div class="field-container margin-bottom-10">
                                        <label>
                                            Last name
                                        </label>
                                        <Input v-model="billingInfo.last_name" placeholder="Last name" />
                                    </div>
                                </div>
                                <div class="col-12 col-lg-6">
                                    <div class="field-container margin-bottom-10">
                                        <label>
                                            City
                                        </label>
                                        <Input v-model="billingInfo.city" placeholder="City" />
                                    </div>
                                </div>
                                <div class="col-12 col-lg-6">
                                    <div class="field-container margin-bottom-10">
                                        <label>
                                            Billing address
                                        </label>
                                        <Input v-model="billingInfo.billing_address" placeholder="Billing address" />
                                    </div>
                                </div>
                                <div class="col-12 col-lg-6">
                                    <div class="field-container margin-bottom-10">
                                        <label>
                                            ZIP or postal code
                                        </label>
                                        <Input v-model="billingInfo.postal_code" placeholder="ZIP or postal code" />
                                    </div>
                                </div>
                                <div class="col-12 col-lg-6">
                                    <div class="field-container margin-bottom-10">
                                        <label>
                                            Billing address, line 2
                                        </label>
                                        <Input v-model="billingInfo.billing_address_line_2" placeholder="Billing address, line 2" />
                                    </div>
                                </div>
                                <div class="col-12 col-lg-6" />
                                <div class="col-12 col-lg-6">
                                    <div class="field-container margin-bottom-10">
                                        <label>
                                            Country
                                        </label>
                                        <Multiselect
                                            v-model="billingInfo.country"
                                            class="dark-mode"
                                            label="label"
                                            :options="countries" />
                                    </div>
                                </div>
                                <div class="col-12 col-lg-6">
                                    <div class="field-container margin-bottom-10">
                                        <label>
                                            Phone number
                                        </label>
                                        <Input v-model="billingInfo.phone_number" placeholder="Phone number" />
                                    </div>
                                </div>
                                <div class="col-12 text-right">
                                    <Button status="second-success">
                                        Save
                                    </Button>
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                </Block>
            </div>
        </div>
    </Layout>
</template>

<script>
import 'vue-multiselect/dist/vue-multiselect.min.css'

export default {
    components: {
        'Multiselect': () => import('vue-multiselect').then(m => m.default),
        'Input': () => import('@ericmuyser/hyper-ui').then(m => m.Input),
    },
    data() {
        return {
            paymentSystem: null,
            paymentSystems: [
                {
                    label: 'Vise',
                    key: 'visa'
                },
                {
                    label: 'MasterCard',
                    key: 'mastercard'
                },
                {
                    label: 'Bank USA',
                    key: 'bank-usa'
                }
            ],
            countries: [
                {
                    label: 'USA',
                    key: 'usa'
                },
                {
                    label: 'Germany',
                    key: 'germany'
                },
                {
                    label: 'China',
                    key: 'china'
                }
            ],
            card: {
                cardHolder: '',
                cardNumber: '',
                expiration: '',
                securityCode: ''
            },
            billingInfo: {
                first_name: '',
                last_name: '',
                city: '',
                billing_address: '',
                billing_address_line_2: '',
                postal_code: '',
                phone_number: '',
                country: ''
            }
        }
    },
    methods: {
        flippCard(type) {
            const card = document.getElementById('card')
            if (type === 'show-front') {
                card.classList.remove('flipped')
            } else {
                card.classList.add('flipped')
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .card-container{
        $cardcolor_1: #909090;
        $cardcolor_2: #4C4C4C;
        $cardcolor_3: #F2F2F2;
        $cardcolor_4: #D8D2DB;
        $cardcolor_5: #C4C4C4;

        #ccsingle {
            position: absolute;
            right: 15px;
            top: 20px;
        }

        #ccsingle svg {
            width: 100px;
            max-height: 60px;
        }

        .creditcard svg#cardfront,
        .creditcard svg#cardback {
            width: 100%;
            box-shadow: 1px 5px 6px 0px rgba(0, 0, 0, .3);
            border-radius: 20px;
        }

        #generatecard{
            font-size: 12px;
            color: #fff;
            padding: 2px 4px;
            background-color: $cardcolor_1;
            border-radius: 4px;
            cursor: pointer;
            float:right;
        }

        /* CHANGEABLE CARD ELEMENTS */
        .creditcard .lightcolor,
        .creditcard .darkcolor {
            -webkit-transition: fill .5s;
            transition: fill .5s;
        }
        .lightcolor{
            fill: #2c2c46;
        }
        .darkcolor{
            fill: #1a1c29;
        }

        /* FRONT OF CARD */
        #svgname {
            text-transform: uppercase;
        }

        #cardfront .st2 {
            fill: #FFFFFF;
        }

        #cardfront .st3 {
            font-family: 'Source Code Pro', monospace;
            font-weight: 600;
        }

        #cardfront .st4 {
            font-size: 54.7817px;
        }

        #cardfront .st5 {
            font-family: 'Source Code Pro', monospace;
            font-weight: 400;
        }

        #cardfront .st6 {
            font-size: 33.1112px;
        }

        #cardfront .st7 {
            opacity: 0.6;
            fill: #FFFFFF;
        }

        #cardfront .st8 {
            font-size: 24px;
        }

        #cardfront .st9 {
            font-size: 36.5498px;
        }

        #cardfront .st10 {
            font-family: 'Source Code Pro', monospace;
            font-weight: 300;
        }

        #cardfront .st11 {
            font-size: 16.1716px;
        }

        #cardfront .st12 {
            fill: $cardcolor_2;
        }

        /* BACK OF CARD */
        #cardback .st0 {
            fill: none;
            stroke: #0F0F0F;
            stroke-miterlimit: 10;
        }

        #cardback .st2 {
            fill: #111111;
        }

        #cardback .st3 {
            fill: $cardcolor_3;
        }

        #cardback .st4 {
            fill: $cardcolor_4;
        }

        #cardback .st5 {
            fill: $cardcolor_5;
        }

        #cardback .st6 {
            font-family: 'Source Code Pro', monospace;
            font-weight: 400;
        }

        #cardback .st7 {
            font-size: 27px;
        }

        #cardback .st8 {
            opacity: 0.6;
        }

        #cardback .st9 {
            fill: #FFFFFF;
        }

        #cardback .st10 {
            font-size: 24px;
        }

        #cardback .st11 {
            fill: #EAEAEA;
        }

        #cardback .st12 {
            font-family: 'Rock Salt', cursive;
        }

        #cardback .st13 {
            font-size: 37.769px;
        }

        /* FLIP ANIMATION */
        .container {
            perspective: 1000px;
        }

        .creditcard {
            width: 100%;
            max-width: 400px;
            display: inline-flex;
            /*position: relative;*/
            height: 100%;
            -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
            transition: -webkit-transform 0.6s;
            -webkit-transition: -webkit-transform 0.6s;
            transition: transform 0.6s;
            transition: transform 0.6s, -webkit-transform 0.6s;
            cursor: pointer;
        }

        .creditcard .front,
        .creditcard .back {
            position: absolute;
            /*width: 100%;*/
            /*max-width: 400px;*/
            left: 0;
            right: 0;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            -webkit-font-smoothing: antialiased;
            color: #47525d;
        }

        .creditcard .back {
            -webkit-transform: rotateY(180deg);
            transform: rotateY(180deg);
        }

        .creditcard.flipped {
            -webkit-transform: rotateY(180deg);
            transform: rotateY(180deg);
        }
    }

    .form-container{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .field-container{
        margin-bottom: 5px;
        width: 100%;
        label{
            font-size: 12px;
            width: 100%;
        }
        input{
            width: 100%;
            border-radius: 5px;
            border: 1px solid #1b1c2a;
            background: #1b1c2a;
            height: 40px;
            line-height: 40px;
            padding: 0 10px;
        }
        &.half-width{
            width: calc( 50% - 15px );
        }
    }
</style>

