<template>
    <c-popup :activated="activated" type="custom" ref="modal" title="" width="650"  @close="$emit('close')">
        <div class="send-funds-modal" slot="customContent">
            <c-tabs>
                <c-tab name="Agreement" :selected="agreement" :showFooter="true">
                    <div>
                        <div class="d-flex justify-content-between align-items-center">
                            <h4>Crowdfunding Campaign Agreement</h4>
                        </div>
                        <div class="termsBlock">
                            <slot name="agreementText"></slot>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between align-items-center" slot="footer">
                        <div>
                            <c-switch size="sm" :value="true" label="I agree with the terms" />
                        </div>
                        <div>
                            <c-button status="outline-white" @click="" class="mx-1">
                                Cancel
                            </c-button>
                            <c-button status="outline-white" @click="toggleSteps" class="mx-1" icon="arrow-right">
                                Next
                            </c-button>
                        </div>
                    </div>
                </c-tab>
                <c-tab name="Sending" :selected="sending" :showFooter="true">
                    <div class="sending-block">
                        <div class="clmn-1">
                            <div class="grid">
                                <div class="grid-item">
                                    <div>
                                        <c-img src="https://www.touchtapplay.com/wp-content/uploads/2017/12/bitcoin-game-cheats-ketchapp.jpg"/>
                                    </div>
                                </div>
                                <div class="grid-item">
                                    <div></div>
                                </div>
                                <div class="grid-item">
                                    <div></div>
                                </div>
                                <div class="grid-item">
                                    <div></div>
                                </div>
                                <div class="grid-item">
                                    <div></div>
                                </div>
                                <div class="grid-item">
                                    <div></div>
                                </div>
                                <div class="grid-item">
                                    <div></div>
                                </div>
                                <div class="grid-item">
                                    <div></div>
                                </div>
                                <div class="grid-item">
                                    <div></div>
                                </div>
                                <div class="grid-item">
                                    <div></div>
                                </div>
                                <div class="grid-item">
                                    <div></div>
                                </div>
                                <div class="grid-item">
                                    <div></div>
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
                                    <div class="progress"></div>
                                </div>
                                <div class="left-arrow">
                                    <div class="progress" style="width: 45%"></div>
                                </div>
                            </div>
                            <div class="time">
                                <i class="fas fa-clock"></i>
                                15 seconds
                            </div>
                            <div class="info text-center">
                                1 <strong>hbx</strong> - 0.02 <strong>usd</strong>
                            </div>
                        </div>
                        <div class="clmn-3">
                            <div class="grid">
                                <div class="grid-item">
                                    <div></div>
                                </div>
                                <div class="grid-item">
                                    <div></div>
                                </div>
                                <div class="grid-item">
                                    <div></div>
                                </div>
                                <div class="grid-item">
                                    <div></div>
                                </div>
                                <div class="grid-item">
                                    <div></div>
                                </div>
                                <div class="grid-item">
                                    <div></div>
                                </div>
                                <div class="grid-item">
                                    <div></div>
                                </div>
                                <div class="grid-item">
                                    <div></div>
                                </div>
                                <div class="grid-item">
                                    <div></div>
                                </div>
                                <div class="grid-item">
                                    <div></div>
                                </div>
                                <div class="grid-item">
                                    <div></div>
                                </div>
                                <div class="grid-item">
                                    <div></div>
                                </div>
                            </div>
                            <div class="info text-left">
                                <strong>SatoshiStudios</strong>
                                <span class="float-right up">+$14.00</span>
                            </div>
                        </div>
                    </div>
                    <div slot="footer" class="d-flex align-items-center justify-content-end">
                        <div>
                            <c-button status="outline-danger" @click="" class="mx-1">
                                Cancel
                            </c-button>
                            <c-button status="outline-success" @click="toggleSteps" class="mx-1" icon="check">
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
    import Tabs from '../tab/tabs'
    import Tab from '../tab/tab'
    import Switch from '../switch'
    import Buttons from '../buttons'
    import PopUp from '../popups'

    export default {
        props: ['activated'],
        components: {
            'c-tab': Tab,
            'c-tabs': Tabs,
            'c-switch': Switch,
            'c-button': Buttons,
            'c-popup': PopUp,
        },
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
                                background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQyIDQyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MiA0MjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiPgo8cGF0aCBkPSJNMzcuMDU5LDE2SDI2VjQuOTQxQzI2LDIuMjI0LDIzLjcxOCwwLDIxLDBzLTUsMi4yMjQtNSw0Ljk0MVYxNkg0Ljk0MUMyLjIyNCwxNiwwLDE4LjI4MiwwLDIxczIuMjI0LDUsNC45NDEsNUgxNnYxMS4wNTkgIEMxNiwzOS43NzYsMTguMjgyLDQyLDIxLDQyczUtMi4yMjQsNS00Ljk0MVYyNmgxMS4wNTlDMzkuNzc2LDI2LDQyLDIzLjcxOCw0MiwyMVMzOS43NzYsMTYsMzcuMDU5LDE2eiIgZmlsbD0iIzJhMzA0ZCIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K);
                                background-position: center;
                                background-size: 16px;
                                background-repeat: no-repeat;
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
