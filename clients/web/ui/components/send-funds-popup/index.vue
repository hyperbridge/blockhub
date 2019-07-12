<template>
    <c-popup
        ref="modal"
        :activated="activated"
        type="custom"
        title=""
        width="650"
        @close="$emit('close')">
        <div
            slot="customContent"
            class="send-funds-modal">
            <c-tabs>
                <c-tab
                    name="Agreement"
                    :selected="agreement"
                    :showFooter="true">
                    <div>
                        <div class="d-flex justify-content-between align-items-center">
                            <h4>Crowdfunding Campaign Agreement</h4>
                        </div>
                        <div class="termsBlock">
                            <slot name="agreementText" />
                        </div>
                    </div>
                    <div
                        slot="footer"
                        class="d-flex justify-content-between align-items-center">
                        <div>
                            <c-switch
                                size="sm"
                                :value="true"
                                label="I agree with the terms" />
                        </div>
                        <div>
                            <c-button
                                status="outline-white"
                                class="mx-1"
                                @click="">
                                Cancel
                            </c-button>
                            <c-button
                                status="outline-white"
                                class="mx-1"
                                icon="arrow-right"
                                @click="toggleSteps">
                                Next
                            </c-button>
                        </div>
                    </div>
                </c-tab>
                <c-tab
                    name="Sending"
                    :selected="sending"
                    :showFooter="true">
                    <div class="sending-block">
                        <div class="clmn-1">
                            <div class="grid">
                                <div class="grid-item">
                                    <div>
                                        <c-img src="https://www.touchtapplay.com/wp-content/uploads/2017/12/bitcoin-game-cheats-ketchapp.jpg" />
                                    </div>
                                </div>
                                <div class="grid-item">
                                    <div />
                                </div>
                                <div class="grid-item">
                                    <div />
                                </div>
                                <div class="grid-item">
                                    <div />
                                </div>
                                <div class="grid-item">
                                    <div />
                                </div>
                                <div class="grid-item">
                                    <div />
                                </div>
                                <div class="grid-item">
                                    <div />
                                </div>
                                <div class="grid-item">
                                    <div />
                                </div>
                                <div class="grid-item">
                                    <div />
                                </div>
                                <div class="grid-item">
                                    <div />
                                </div>
                                <div class="grid-item">
                                    <div />
                                </div>
                                <div class="grid-item">
                                    <div />
                                </div>
                            </div>
                            <div class="info text-left">
                                <strong>SatoSama</strong>
                                <span class="float-right down">-$14.00</span>
                            </div>
                        </div>
                        <div class="clmn-2">
                            <div class="directions">
                                <div class="right-arrow">
                                    <div class="progress" />
                                </div>
                                <div class="left-arrow">
                                    <div
                                        class="progress"
                                        style="width: 45%" />
                                </div>
                            </div>
                            <div class="time">
                                <i class="fas fa-clock" />
                                15 seconds
                            </div>
                            <div class="info text-center">
                                1 <strong>hbx</strong> - 0.02 <strong>usd</strong>
                            </div>
                        </div>
                        <div class="clmn-3">
                            <div class="grid">
                                <div class="grid-item">
                                    <div />
                                </div>
                                <div class="grid-item">
                                    <div />
                                </div>
                                <div class="grid-item">
                                    <div />
                                </div>
                                <div class="grid-item">
                                    <div />
                                </div>
                                <div class="grid-item">
                                    <div />
                                </div>
                                <div class="grid-item">
                                    <div />
                                </div>
                                <div class="grid-item">
                                    <div />
                                </div>
                                <div class="grid-item">
                                    <div />
                                </div>
                                <div class="grid-item">
                                    <div />
                                </div>
                                <div class="grid-item">
                                    <div />
                                </div>
                                <div class="grid-item">
                                    <div />
                                </div>
                                <div class="grid-item">
                                    <div />
                                </div>
                            </div>
                            <div class="info text-left">
                                <strong>SatoshiStudios</strong>
                                <span class="float-right up">+$14.00</span>
                            </div>
                        </div>
                    </div>
                    <div
                        slot="footer"
                        class="d-flex align-items-center justify-content-end">
                        <div>
                            <c-button
                                status="outline-danger"
                                class="mx-1"
                                @click="">
                                Cancel
                            </c-button>
                            <c-button
                                status="outline-success"
                                class="mx-1"
                                icon="check"
                                @click="toggleSteps">
                                Complete
                            </c-button>
                        </div>
                    </div>
                </c-tab>
            </c-tabs>
        </div>
    </c-popup>
</template>

<script>
import Switch from '../switch'
import Buttons from '../buttons'
import PopUp from '../popups'

export default {
    components: {
        'c-switch': Switch,
        'c-button': Buttons,
        'c-popup': PopUp
    },
    props: ['activated'],
    data() {
        return {
            agreement: true,
            sending: false
        }
    },
    methods: {
        toggleSteps() {
            this.agreement = false
            this.sending = false
            console.log('toggle step', this.agreement, this.sending)
        }
    }
}

</script>

<style lang="scss">
    .send-funds-modal{
        background: transparent;
        color: #fff;
        h4{
            color: #fff;
        }
        h3{
            font-size: 30px;
            color: #C6C6D6;
            margin-bottom: 40px;
        }
        .termsBlock {
            background: #46466a;
            color: #C6C6D6;
            box-shadow: 0 0 3px rgba(0, 0, 0, .5) inset;
            padding: 15px;
            border-radius: 5px;
            max-height: 250px;
            overflow-y: auto;
            h1, h2, h3, h4, h5 {
                font-size: 18px;
                color: #C6C6D6;
            }
        }

        .sending-block{
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            .clmn-1,
            .clmn-3{
                width: 35%;
                padding: 0 5px;
                .grid{
                    border: 1px solid rgba(255, 255, 255, .1);
                    border-radius: 5px;
                    margin-bottom: 15px;
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    padding: 5px;
                    .grid-item{
                        width: 33.3%;
                        padding: 5px;
                        position: relative;
                        div{
                            border: 1px solid #30304B;
                            background: rgba(255, 255, 255, .07);
                            border-radius: 5px;
                            position: relative;
                            display: inline-block;
                            width: 100%;
                            float: left;
                            overflow: hidden;
                            img{
                                display: block;
                                position: absolute;
                                top: 50%;
                                left: 50%;
                                height: 100%;
                                width: 100%;
                                object-fit: cover;
                                transform: translate(-50%, -50%);
                            }
                            &:before{
                                content: "";
                                padding-top: 100%;
                                float: left;
                            }
                            &:hover{
                                cursor: pointer;
                                background-size: 16px;
                                background: url('./../../assets/SVG/plus-icon.svg') no-repeat center;
                            }
                        }
                    }
                }
                .info{
                    span{
                        &.down{
                            color: #F75D5D
                        }
                        &.up{
                            color: #43C981
                        }
                    }
                }
            }
            .clmn-2{
                width: 30%;
                padding: 0 5px;
                text-align: center;
                .time{
                    padding: 20px 0 30px;
                    i{
                        display: block;
                        font-size: 18px;
                        margin-bottom: 4px;
                    }
                }
                .directions{
                    width: 100px;
                    display: block;
                    margin: auto auto 20px;
                    .right-arrow{
                        width: 100%;
                        height: 35px;
                        position: relative;
                        -webkit-clip-path: polygon(0% 35%, 70% 35%, 70% 0%, 100% 50%, 70% 100%, 70% 65%, 0% 65%);
                        clip-path: polygon(0% 35%, 70% 35%, 70% 0%, 100% 50%, 70% 100%, 70% 65%, 0% 65%);
                        background: #30304B;
                        margin-bottom: 4px;
                        .progress{
                            left: 0;
                        }
                    }
                    .left-arrow{
                        width: 100%;
                        height: 35px;
                        position: relative;
                        -webkit-clip-path: polygon(0% 35%, 70% 35%, 70% 0%, 100% 50%, 70% 100%, 70% 65%, 0% 65%);
                        clip-path: polygon(0% 35%, 70% 35%, 70% 0%, 100% 50%, 70% 100%, 70% 65%, 0% 65%);
                        background: #30304B;
                        transform: rotate(180deg);
                        .progress{
                            left: 0;
                        }
                    }
                    .progress{
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        background: #5EA72B;
                        margin: 0;
                        padding: 0;
                        border-radius: 0;
                        height: 100%;
                    }
                }
            }
            .clmn-1,
            .clmn-2,
            .clmn-3{
                .info{
                    border: 1px solid rgba(255, 255, 255, .1);
                    border-radius: 5px;
                    padding: 5px;
                    width: 100%;
                }
            }
        }

    }
</style>
