<template>
    <div class="stream-item">
        <div class="stream-item__wrapper">
            <div class="stream-item__img">
                <c-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQirZ7XcXSa1fX6SLff2k21LqAcfF-2uNUwlPKtl93ZSdm-Rw6UWQ" />
                <a href="#3" class="stream-item__run-btn">
                    <i class="far fa-play-circle"></i>
                </a>
            </div>
            <div class="stream-item__info">
                <div>
                    <c-img src="https://static.planetminecraft.com/files/resource_media/screenshot/1648/gsggnxg10685537_lrg.png" />
                </div>
                <div>
                    <div class="h5 p-0 m-0 font-weight-bold">
                        GodOfWarCraft
                    </div>
                    <p class="m-0 p-0 text-muted">
                        WarCraft
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

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
        border-radius: 5px;
    }
    .stream-item__img{
        position: relative;
        width: 100%;
        img{
            width: 100%;
            height: calc(100% - 80px);
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
        font-size: 28px;
    }
    .stream-item__info{
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        margin-top: 15px;
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
    }
</style>
