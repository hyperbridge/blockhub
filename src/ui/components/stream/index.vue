<template>
    <div class="stream-item">
        <div class="stream-item__wrapper">
            <div class="stream-item__img">
                <c-img :src="streamImg" />
                <a :href="streamSrc" class="stream-item__run-btn">
                    <i class="fas fa-play-circle"></i>
                </a>
            </div>
            <div class="stream-item__info">
                <div>
                    <c-img :src="streamAvatar" />
                </div>
                <div>
                    <div class="h6 p-0 m-0 font-weight-bold user-name">
                        {{ streamName }}
                    </div>
                    <div class="m-0 p-0 text-muted product-name">
                        <a href="#3" class="text-muted">
                            {{ streamGame }}
                        </a>
                    </div>
                </div>
                <div class="stream-item__viewers">
                    <i class="fas fa-eye"></i>
                    {{ streamViews }}
                </div>
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
            }
        }
    }
</script>

<style lang="scss" scoped>
    .stream-item{
        width: 100%;
    }
    .stream-item__wrapper{
        display: flex;
        flex-direction: column;
        padding: 10px;
        color: #fff;
        background: rgba(0, 0, 0, .2);
        border: 1px solid rgba(0, 0, 0, .2);
        border-radius: 5px;
    }
    .stream-item__img{
        position: relative;
        width: 100%;
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
    .stream-item__run-btn{
        position: absolute;
        top: 10px;
        right: 10px;
        color: #fff;
        font-size: 3rem;
        transition: all .25s ease;
        &:hover{
            transform: scale(1.3);
        }
    }
    .stream-item__info{
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        margin-top: 15px;
        position: relative;
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
        .stream-item__viewers{
            position: absolute;
            right: 0;
            bottom: 0;
            color: #fff;
            font-size: 12px;
            opacity: .4;
            i{
                margin-right: 5px;
            }
        }
    }
</style>
