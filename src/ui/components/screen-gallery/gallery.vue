<template>
    <div class="screen-gallery">
        <div class="screen-gallery__main-img">
            <img :src="main_img" />
        </div>
        <div class="screen-gallery__thumb-nav">
            <ul>
                <li v-for="(img_src, index) in img_nav" :key="index">
                    <img :src="img_src" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return{
                main_img: 'https://i.ytimg.com/vi/np65Rm0DEqY/maxresdefault.jpg',
                img_nav:{
                    img_1_src: 'https://i.stack.imgur.com/1BN3t.png',
                    img_2_src: 'https://d-pt.ppstatic.pl/k/r/1/81/97/57c7f638eb00d_o.jpg?1472722587',
                    img_3_src: 'https://i.ytimg.com/vi/ByMsYrpQvtc/maxresdefault.jpg'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .screen-gallery{
        display: flex;
        justify-content: space-between;
        align-items: stretch;
        .screen-gallery__main-img{
            width: 70%;
            padding-right: 5px;
            img{
                width: 100%;
                height: 230px;
                object-fit: cover;
            }
        }
        .screen-gallery__thumb-nav{
            width: 30%;
            padding-left: 5px;
            ul{
                padding: 0;
                li{
                    list-style: none;
                    margin-bottom: 10px;
                    img{
                        width: 100%;
                        height: 70px;
                        object-fit: cover;
                    }
                    &:last-child{
                        margin-bottom: 0;
                    }
                }
            }
        }
    }
</style>
