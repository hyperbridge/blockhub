<template>
    <div class="stream-item" :class="{'stream-item-bg': background}">
        <div class="stream-item__wrapper">
            <div class="stream-item__img">
                <c-img :src="streamImg" />
                <div class="stream-item__run-container">
                    <a :href="streamSrc" class="stream-item__run-btn">
                        <i class="fas fa-play"></i>
                    </a>
                </div>
            </div>
            <div class="stream-item__info">
                <div>
                    <c-img :src="streamAvatar" />
                </div>
                <div class="w-100">
                    <div class="h6 p-0 m-0 font-weight-bold user-name">
                        {{ streamName }}
                    </div>
                    <div class="m-0 p-0 text-muted product-name">
                        <a href="#3" class="text-muted">
                            {{ streamGame }}
                        </a>
                    </div>
                </div>
                <!--<div class="stream-item__viewers">-->
                    <!--<i class="fas fa-eye"></i>-->
                    <!--{{ streamViews }}-->
                <!--</div>-->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            streamGame: String,
            streamName: String,
            streamAvatar: String,
            streamImg: String,
            streamSrc: String,
            streamViews: {
                type: [ String, Number ],
                default: 0
            },
            background:{
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang="scss" scoped>
    .stream-item{
        width: 100%;
        transition: all 200ms ease-in-out;
        &:hover{
            &.stream-item-bg{
                background: rgba(255, 255, 255, .2);
            }
            .stream-item__img{
                border-color: #71bce8;
            }
        }
    }
    .stream-item__wrapper{
        display: flex;
        flex-direction: column;
        color: #fff;
        border-radius: 5px;
        &.stream-item-bg{
            background: rgba(0, 0, 0, .1);
            border: 1px solid rgba(0, 0, 0, .1);
            padding: 10px;
        }
    }
    .stream-item__img{
        position: relative;
        width: 100%;
        /*border: 5px solid rgba(255, 255, 255, .1);*/
        transition: all 200ms ease-in-out;
        img{
            width: 100%;
            height: 200px;
            object-fit: cover;
        }
        &:before{
            content: "";
            padding-top: 100%;
        }
    }
    .stream-item__run-container{
        position: absolute;
        top: 10px;
        right: 10px;
        bottom: 10px;
        left: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .stream-item__run-btn{
        color: #fff;
        font-size: 18px;
        transition: all .25s ease;
        height: 32px;
        width: 50px;
        text-align: center;
        line-height: 32px;
        border-radius: 3px;
        /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#5ebbf1+0,16a5f1+100 */
        background: rgb(94,187,241); /* Old browsers */
        background: -moz-linear-gradient(top, rgba(94,187,241,1) 0%, rgba(22,165,241,1) 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(top, rgba(94,187,241,1) 0%,rgba(22,165,241,1) 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to bottom, rgba(94,187,241,1) 0%,rgba(22,165,241,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#5ebbf1', endColorstr='#16a5f1',GradientType=0 ); /* IE6-9 */
        &:hover{
            transform: scale(1.2);
        }
    }
    .stream-item__info{
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        position: relative;
        padding: 10px 10px 10px 10px;
        overflow: hidden;
        img{
            width: 40px;
            height: 40px;
            object-fit: cover;
            border-radius: 5px;
            margin-right: 10px;
        }
        .text-muted{
            color: #fff!important;
            opacity: .7;
        }
        .product-name{
            text-overflow: ellipsis;
            overflow: hidden;
            width: 100%;
            white-space: nowrap;
        }
        .stream-item__viewers{
            position: absolute;
            right: 10px;
            bottom: 12px;
            color: #fff;
            font-size: 12px;
            opacity: .4;
            i{
                margin-right: 5px;
            }
        }
    }
</style>
