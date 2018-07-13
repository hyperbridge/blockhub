<template>
    <div class="screen-gallery">
        <div class="screen-gallery__main-img">
            <img :src="main" />
        </div>
        <div class="screen-gallery__thumb-nav">
            <ul>
                <li v-for="(url, index) in items" :key="index">
                    <img :src="url" />
                </li>
            </ul>
        </div>
    </div>
</template>


<script>
    export default {
        props: ['main', 'items']
    }
</script>


<style lang="scss" scoped>

    .screen-gallery{
        display: flex;
        justify-content: space-between;
        align-items: stretch;
    }
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

</style>
