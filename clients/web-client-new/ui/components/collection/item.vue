<template>
    <div class="collection-item" v-bind:style="{ 'background-image': 'url(' + image + ')' }">
        <div class="collection-item__items-container">
            <router-link v-for="(asset, index) in getAsset" :to="{ name: 'asset-id', params: { id: asset.id } }" :key="index" v-if="index < 4">
                <c-img :src="asset.image" />
            </router-link>
        </div>
        <div class="collection-item__info">
            <router-link :to="{ name: 'collection-id', params: { id: id } }">
                <h4>{{ name }}</h4>
            </router-link>
            <h6>by {{ author }}</h6>
            <div class="count">
                <i class="fas fa-box"></i>
                {{ assets.length }} {{ assets.length | countLabel }}
            </div>
        </div>
    </div>
</template>

<script>
 export default {
    name: 'c-collection-item',
    props: {
        id: Number,
        name: String,
        author: String,
        assets: Array,
        background: String
    },
    data() {
        return {
            label: ''
        }
    },
    computed: {
        getAsset() {
            let ids = this.assets,
                list = this.$store.state.marketplace.assets || {},
                arr = []
                
            if (ids)
                ids.forEach((id, i) => {
                    if (list[id])
                        arr.push(list[id])
                })
            
            return arr
        },
        image() {
            return this.background || "/img/collection-bg-1.jpeg"
        }
    },
    filters: {
        countLabel(label) {
            switch (label) {
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
        transition: all 200ms ease-in;
        transform: scale(1);
        &:hover {
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

            overflow: hidden;
            position: relative;
            
            &:hover {
                &:after {
                    animation: badgeGlimmer ease-out infinite;
                    animation-fill-mode: forwards;
                    animation-duration: 0.8s;
                    animation-delay: .2s
                }
            }

            &:after {
                content: "";
                display: block;
                position: absolute;
                background: rgba(255,170,50,.5);
                background: linear-gradient(to right,rgba(255,245,214,0) 0,rgba(255,251,240,.41) 85%,rgba(255,252,244,0) 100%);
                width: 20px;
                height: 200%;
                top: -50%;
                left: -100%;
                transform: rotate(45deg);
            }

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


    @keyframes badgeGlimmer {
        0% {
            left: -100%;
            opacity: .3
        }

        100% {
            left: 200%;
            opacity: 1
        }
    }
</style>
