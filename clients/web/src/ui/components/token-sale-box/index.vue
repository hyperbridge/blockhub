<template>
    <div class="token-sale-box">
        <div class="token-sale-box__head">
            <div class="d-flex align-items-center">
                <div class="coin-img">
                    <img src="../../../../static/img/icons/token-icon.png" />
                </div>
                <div class="box-title">
                    <h1 class="text-uppercase p-0 m-0">
                        HBX
                    </h1>
                    <h3 class="text-uppercase p-0 m-0">
                        token sale
                    </h3>
                </div>
            </div>
            <div class="d-flex align-items-center" hidden>
                <div class="text-center mr-5" hidden>
                    <div>
                        Token
                    </div>
                    <div>
                        <h2 class="font-weight-bold p-0 m-0">
                            HBX
                        </h2>
                    </div>
                </div>
                <div hidden>
                    <c-button status="success" size="lg" iconHide @click="$emit('purchase')">
                        Purchase HBX
                    </c-button>
                </div>
            </div>
        </div>
        <div class="token-sale-box__body">
            <div class="token-sale-box_body-info">
                <h2 class="p-0 mb-2">
                    Sale status
                </h2>
                <div style="margin-top: 20px;">
                    <strong>
                        Sold
                    </strong>
                    <span class="ml-4">
                        {{ soldDollars | convertCurrency }} USD
                    </span>
                    <span class="ml-3">
                        {{ soldTokens | numeralFormat(0,0) }} HBX
                    </span>
                </div>
                <div class="mt-3">
                    <c-progress-bar :percentages="percentProgress" />
                </div>
                <div class="token-sale-box__money-info">
                    <div>
                        <strong>
                            Supply
                        </strong>
                        <span>
                            {{ volume | numeralFormat(0,0) }} HBX
                        </span>
                    </div>
                    <div>
                        <strong>
                            Hard Cap
                        </strong>
                        <span>
                            {{ hardCap | convertCurrency }} USD
                        </span>
                    </div>
                    <div>
                        <strong>
                            Soft Cap
                        </strong>
                        <span>
                            {{ softCap | convertCurrency }} USD
                        </span>
                    </div>
                </div>
            </div>
            <div class="token-sale-box_body-links">
                <h3 class="text-right">
                    More on HBX
                </h3>
                <ul>
                    <li>
                        <a href="https://hyperbridge.org/downloads/whitepaper.pdf" target="_blank">
                            White Paper
                            <i class="fas fa-file-alt"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://hyperbridge.org/team" target="_blank">
                            Team
                            <i class="fas fa-users"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://hyperbridge.org/roadmap" target="_blank">
                            Roadmap
                            <i class="fas fa-gamepad"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://hyperbridge.org/" target="_blank">
                            Corp. website
                            <i class="fas fa-home"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="token-sale-box__body-media">
                <iframe width="380" height="220" src="https://www.youtube.com/embed/-QEdXZWMe-M" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'token-sale',
        components:{
            'c-progress-bar': (resolve) => require(['@/ui/components/progress-bar'], resolve),
        },
        props:{
            hardCap: [ Number, String ],
            softCap: [ Number, String ],
            volume: [ Number, String ],
            soldDollars: [ Number, String ],
            soldTokens: [ Number, String ]
        },
        computed:{
            percentProgress() {
                return (this.soldTokens + 5000000) / this.volume * 100
            }
        }
    }
</script>

<style lang="scss" scoped>
    .token-sale-box{
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        overflow: hidden;
        color: #fff;
        box-shadow: 0 0 3px rgba(0, 0, 0, .3);
        backdrop-filter: blur(2px);
    }
    .token-sale-box__head{
        background: rgba(0, 0, 0, .45);
        padding: 10px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        h1, h2, h3, h4, h5{
            color: #fff;
        }
        h1{
            font-size: 28px;
            font-weight: 900;
        }
        h3{
            font-size: 18px;
            font-weight: 100;
        }
        .coin-img{
            height: 60px;
            width: 60px;
            margin-right: 20px;
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
    .token-sale-box__body{
        padding: 20px;
        display: flex;
        background: rgba(61, 62, 93, 0.45);
        align-items: stretch;
        justify-content: space-between;
    }
    .token-sale-box_body-info{
        display: flex;
        flex-direction: column;
        .progress.progress-bar-horizontal{
            height: 15px;
            border-radius: 10px;
            .progress-bar{
                border-radius: 10px;
            }
        }
    }
    .token-sale-box_body-links{
        padding-left: 80px;
        position: relative;
        width: 240px;
        margin: 20px 30px 0 auto;
        &:before{
            content: "";
            position: absolute;
            opacity: .7;
            top: 0;
            bottom: 0;
            left: 45px;
            width: 2px;
            border-radius: 50%;
            /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffffff+50,ffffff+50,ffffff+50&0+0,0.15+15,0.15+86,0+100 */
            background: -moz-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(255,255,255,0.15) 15%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 86%, rgba(255,255,255,0) 100%); /* FF3.6-15 */
            background: -webkit-linear-gradient(top, rgba(255,255,255,0) 0%,rgba(255,255,255,0.15) 15%,rgba(255,255,255,0.15) 50%,rgba(255,255,255,0.15) 86%,rgba(255,255,255,0) 100%); /* Chrome10-25,Safari5.1-6 */
            background: linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(255,255,255,0.15) 15%,rgba(255,255,255,0.15) 50%,rgba(255,255,255,0.15) 86%,rgba(255,255,255,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#00ffffff',GradientType=0 ); /* IE6-9 */
        }
        h3{
            color: #fff;
            padding: 0;
            margin: 0 0 15px 0;
        }
        ul{
            padding: 0;
            margin: 0;
            li{
                list-style: none;
                text-align: right;
                display: flex;
                align-items: center;
                padding: 5px 0;
                justify-content: flex-end;
                a{
                    color: #FFFFFF;
                    text-decoration: none;
                    i{
                        width: 25px;
                        color: #FADC72;
                        text-align: center;
                        margin-left: 5px;
                        font-size: 18px;
                        transition: all 200ms ease-in-out;
                    }
                    &:hover{
                        i{
                            margin-left: 15px;
                        }
                    }
                }
            }
        }
    }
    .token-sale-box__money-info{
        background: rgba(0, 0, 0, .3);
        border-radius: 10px;
        overflow: hidden;
        display: flex;
        margin-top: auto;
        div{
            text-align: left;
            display: flex;
            padding: 10px;
            flex-direction: column;
            white-space: nowrap;
            border-left: 3px solid #3D3E5D;
            min-width: 140px;
            &:first-child{
                border-left: none;
            }
        }
    }
    .token-sale-box__body-media{
        overflow: hidden;
        border-radius: 10px;
        width: 440px;
        height: 248px;
        video{
            width: auto;
            height: 158px;
            border-radius: 10px;
        }
        iframe{
            border-radius: 10px;
            overflow: hidden;
            height: 100%;
            width: 100%;
        }
    }
</style>
