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
            <div class="d-flex align-items-center">
                <div class="text-center mr-5">
                    <div>
                        Token
                    </div>
                    <div>
                        <h2 class="font-weight-bold p-0 m-0">
                            HBX
                        </h2>
                    </div>
                </div>
                <div>
                    <c-button status="success" size="lg" style="border-radius: 20px" icon_hide >
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
                <div>
                    <strong>
                        Sold
                    </strong>
                    <span class="ml-4">
                        $ 1,845,245,05 USD
                    </span>
                    <span class="ml-3">
                        403,005,084 HBX
                    </span>
                </div>
                <div class="mt-3">
                    <c-progress-bar :percentages="45" />
                </div>
                <div class="token-sale-box__money-info">
                    <div>
                        <strong>
                            Volume
                        </strong>
                        <span>
                            1,000,000,000 HBX
                        </span>
                    </div>
                    <div>
                        <strong>
                            Hard Cap
                        </strong>
                        <span>
                            $ 18,500,000 HBX
                        </span>
                    </div>
                    <div>
                        <strong>
                            Soft Cup
                        </strong>
                        <span>
                            $ 7,500,000 HBX
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
                        <a href="#3">
                            Whitepaper
                            <i class="fas fa-file-alt"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#3">
                            Team
                            <i class="fas fa-users"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#3">
                            Corp. website
                            <i class="fas fa-home"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#3">
                            BlockHub
                            <i class="fas fa-gamepad"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="token-sale-box__body-media">
                <video controls >
                    <source src="../../../../static/video/mission_launch.mp4" type="video/mp4">
                    Your browser doesn't support HTML5 video tag.
                </video>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'token-sale',
        components:{
            'c-progress-bar': (resolve) => require(['@/ui/components/progress-bar'], resolve),
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
        background: #3D3E5D;
        align-items: stretch;
        justify-content: space-between;
    }
    .token-sale-box_body-info{
        width: 410px;
        display: inline-flex;
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
        width: 230px;
        margin: 0 30px 0 auto;
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
            &:first-child{
                border-left: none;
            }
        }
    }
    .token-sale-box__body-media{
        overflow: hidden;
        video{
            width: auto;
            height: 158px;
            border-radius: 10px;
        }
    }
</style>
