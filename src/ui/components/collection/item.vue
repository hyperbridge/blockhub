<template>
    <div class="collection-item" v-bind:style="{ 'background-image': 'url(' + item.background + ')' }">
        <div class="collection-item__items-container">
                <router-link v-for="(asset, index) in getAsset" :to="{ name: 'Asset', params: {id: asset.id } }" :key="index" v-if="index < 4">
                    <c-img :src="asset.image"/>
                </router-link>
        </div>
        <div class="collection-item__info">
            <router-link :to="{ name: 'Collection Page', params: {id: item.id } }">
                <h4>{{ item.name }}</h4>
            </router-link>
            <h6>by {{ item.author }}</h6>
            <div class="count">
                <i class="fas fa-box"></i>
                {{ item.assets.length }} {{ item.assets.length | count_label }}
            </div>
        </div>
    </div>
</template>

<script>
 export default {
     name: 'c-collection-item',
     props:['item'],
     data(){
         return{
             label: ''
         }
     },
     computed:{
         getAsset(){
             let ids = this.item.assets,
                 list = this.$store.state.marketplace.assets,
                 arr = [];
             if (ids)
                 ids.forEach( (id, i) => {
                     if (list[id])
                         arr.push(list[id])
                 });
                return arr;
         }
     },
     filters: {
         count_label(label) {
             switch(label) {
                 case label = 1:
                     return 'Item'
                 default:
                     return 'Items'
             }
         }
     }
 }
</script>

<style lang="scss" scoped>
    .collection-item{
        color: #fff;
        display: flex;
        width: 100%;
        overflow: hidden;
        border-radius: 8px;
        padding: 15px;
        justify-content: center;
        position: relative;
        flex-direction: column;
        box-shadow: 1px 2px 6px rgba(0, 0 , 0, .3);
        z-index: 10;
        background-color: rgba(0, 0, 0, .2);
        background-repeat: no-repeat;
        background-size: cover;
        -webkit-transition: all 200ms ease-in;
        -webkit-transform: scale(1);
        -ms-transition: all 200ms ease-in;
        -ms-transform: scale(1);
        -moz-transition: all 200ms ease-in;
        -moz-transform: scale(1);
        transition: all 200ms ease-in;
        transform: scale(1);
        &:hover {
            -webkit-transition: all 200ms ease-in;
            -webkit-transform: scale(1.05);
            -ms-transition: all 200ms ease-in;
            -ms-transform: scale(1.05);
            -moz-transition: all 200ms ease-in;
            -moz-transform: scale(1.05);
            transition: all 200ms ease-in;
            transform: scale(1.05);
            z-index: 20;
        }
        &:before{
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background: rgba(48, 49, 76, .83);
        }
    }
    .collection-item__items-container{
        display: flex;
        justify-content: center;
        margin-bottom: 10px;
        z-index: 3;
        a{
            width: 20%;
            background: rgba(255, 255, 255, .15);
            padding: 5px;
            margin: 5px;
            position: relative;
            border-radius: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            &:before{
                content: "";
                padding-top: 100%;
                float: left;
            }
            img{
                width: auto;
                height: auto;
                max-height: 100%;
                max-width: 100%;
            }
            &:hover{
                cursor: pointer;
                background: rgba(255, 255, 255, .3);
                text-decoration: none;
            }
        }
    }
    .collection-item__info{
        text-align: center;
        z-index: 3;
        a{
            text-decoration: none;
        }
        h4{
            font-size: 15px;
            font-weight: bold;
            color: #fff;
            padding: 0;
            margin: 0;
        }
        h6{
            color: #fff;
            font-weight: normal;
            font-size: 12px;
        }
        .count{
            font-size: 15px;
            i{
                margin-right: 5px;
            }
        }
    }
</style>
