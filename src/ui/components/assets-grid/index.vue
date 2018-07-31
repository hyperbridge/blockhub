<template>
    <div class="assets-grid">
        <div class="item_container">
            <div class="item">
                <div class="item_info">
                    <div class="thumb">
                        <img src="https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png" />
                    </div>
                    <div class="info">
                        <h5>Magic Plate Armor</h5>
                        <span class="float-left price">
                                        <i class="fas fa-dollar-sign"></i>
                                        1.99
                                    </span>
                        <span class="float-right box">
                                        <i class="fas fa-box"></i>
                                        350. 000
                                    </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['assets']
    }
</script>

<style lang="scss" scoped>
    .assets-grid{
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        width: 100%;
        .item_container{
            padding: 4px;
            width: calc(100%/9);
            @media only screen and (min-width: 1400px){
                width: calc(100%/12);
            }
            @media only screen and (min-width: 1600px){
                width: calc(100%/14);
            }
            .item{
                border: 1px solid rgba(255, 255, 255, .8);
                border-radius: 5px;
                width: 100%;
                position: relative;
                display: inline-block;
                float: left;
                &:before{
                    content: "";
                    padding-top: 100%;
                    float: left;
                }
                .item_info{
                    border-radius: 5px;
                    background: #3D3E5D;
                    padding: 10px;
                    box-shadow: 0 0 25px rgba(0, 0, 0, .6);
                    justify-content: space-between;
                    align-items: center;
                    position: absolute;
                    width: 230px;
                    left: calc( 50% + 15px );
                    z-index: 100;
                    height: 80px;
                    top: calc( 50% - 40px );
                    display: none;
                    &:before{
                        display: flex;
                        width: 30px;
                        height: 30px;
                        position: absolute;
                        left: -15px;
                        top: calc( 50% - 15px );
                        content: "";
                        background: #3D3E5D;
                        transform: rotate(45deg);
                        box-shadow: -7px 7px 14px rgba(0, 0, 0, .2);
                    }
                    .thumb{
                        display: inline-block;
                        float: left;
                        width: 25%;
                        img{
                            width: 100%;
                            height: auto;
                        }
                    }
                    .info{
                        display: inline-block;
                        width: 70%;
                        float: right;
                        span{
                            i{
                                margin-right: 5px;
                            }
                        }
                    }
                }
                &:hover{
                    .item_info{
                        display: flex;
                    }
                }
            }
        }
    }
</style>
