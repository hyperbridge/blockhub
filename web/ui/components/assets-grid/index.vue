<template>
    <div class="assets-grid">
        <h4 v-if="list && list.length === 0">
            There is no assets yet.
        </h4>
        <div
            v-for="(item, index) in list"
            v-else
            :key="index"
            class="assets-grid__item-container">
            <div class="assets-grid__item">
                <c-img :src="item.image" />
                <div class="assets-grid__item-info">
                    <div class="assets-grid__item-thumb">
                        <c-img :src="item.image" />
                    </div>
                    <div class="assets-grid__item-tooltip">
                        <h5>{{ item.name }}</h5>
                        <span v-if="item.price" class="float-left price">
                            {{ item.price['current'] | convertCurrency }}
                        </span>
                        <span class="float-right box">
                            <i class="fas fa-box" />
                            {{ item.count }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['list']
}
</script>

<style lang="scss" scoped>
    .assets-grid{
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        width: 100%;
    }
    .assets-grid__item-container{
        padding: 4px;
        width: calc(100%/8);
        @media only screen and (min-width: 1400px){
            width: calc(100%/11);
        }
        @media only screen and (min-width: 1600px){
            width: calc(100%/14);
        }
    }
    .assets-grid__item{
        border: 1px solid #A2A3BE;
        border-radius: 5px;
        width: 100%;
        height: 100%;
        position: relative;
        display: inline-block;
        float: left;
        padding: 10px;
        color: #fff;
        &:before{
            content: "";
            padding-top: 100%;
            float: left;
        }
        &:hover .assets-grid__item-info{
            display: flex;
        }
        > img {
            width: 100%;
        }
    }
    .assets-grid__item-info{
        border-radius: 5px;
        background: #3D3E5D;
        padding: 5px 10px 5px 5px;
        box-shadow: 0 0 25px rgba(0, 0, 0, .6);
        justify-content: space-between;
        align-items: center;
        position: absolute;
        min-width: 230px;
        width: auto;
        max-width: 300px;
        left: calc( 50% + 15px );
        z-index: 100;
        height: 70px;
        top: calc( 50% - 35px );
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
        img{
            z-index: 100;
            position: relative;
        }
    }
    .assets-grid__item-thumb{
        display: inline-block;
        float: left;
        width: 30%;
        img{
            width: 100%;
            height: auto;
        }
    }
    .assets-grid__item-tooltip{
        display: inline-block;
        width: 67%;
        float: right;
        h5{
            color: #fff;
        }
        span{
            i{
                margin-right: 5px;
            }
        }
    }
</style>
