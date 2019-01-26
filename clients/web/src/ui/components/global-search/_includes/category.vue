<template>
    <div class="search-category">
        <div class="search-category__head" @click="chosenCategory()">
            <div>
                {{ category.name }}
            </div>
            <div class="count">
                {{ category.items.length }}
            </div>
            <c-button status="plain" size="sm" class="p-0 ml-auto">
                MORE
            </c-button>
        </div>
        <div class="search-category__body">
            <div class="search-item" v-for="(item, index) in category.items" v-if="index < 4">
                <div class="search-item__img" v-if="item.image">
                    <img :src="item.image">
                </div>
                <div class="search-item__info">
                    <span class="h6 font-weight-bold mb-1 p-0" v-if="item.name">{{ item.name }}</span>
                    <span class="text-muted" style="font-size: 12px" v-if="item.description">{{ item.description }}</span>
                    <div class="search-item__item-tags" v-if="item.tags">
                        <span v-for="tag in item.tags">{{ tag }}</span>
                    </div>
                </div>
            </div>
        </div>

        <!--Full list block-->
        <transition name="fade">
            <div class="category-full" v-if="showDetails">
                <div class="search-category__head">
                    <c-button status="plain" size="sm" class="p-0 mr-3" @click="closeCategory">
                        <i class="fas fa-angle-left"></i>
                    </c-button>
                    <div>
                        {{ category.name }}
                    </div>
                </div>
                <div class="search-item" v-for="(item, index) in category.items">
                    <div class="search-item__img" v-if="item.image">
                        <img :src="item.image">
                    </div>
                    <div class="search-item__info">
                        <span class="h6 font-weight-bold mb-1 p-0" v-if="item.name">{{ item.name }}</span>
                        <span class="text-muted" style="font-size: 12px" v-if="item.description">{{ item.description }}</span>
                        <div class="search-item__item-tags" v-if="item.tags">
                            <span v-for="tag in item.tags">{{ tag }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        props:{
            category: {
                type: Object
            }
        },
        data(){
            return{
                showDetails: false
            }
        },
        methods:{
            chosenCategory(){
                this.showDetails = true;
                this.$emit('categorySelect', this.category)
            },
            closeCategory(){
                this.showDetails = false;
                this.$emit('categoryClose')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .search-category{
        display: flex;
        flex-direction: column;
        width: 100%;
        flex: 1;
    }
    .search-category__head{
        display: flex;
        background: rgba(255, 255, 255, .1);
        padding: 1px 10px;
        align-items: center;
        text-transform: uppercase;
        font-size: 13px;
        margin: 0 0 5px 0;
        .count{
            padding: 0 5px;
            font-size: 12px;
            background: #0194ef;
            height: 15px;
            line-height: 16px;
            border-radius: 3px;
            margin-left: 10px;
        }
    }
    .search-category__body{
        display: flex;
        flex-direction: column;
        padding-bottom: 5px;
    }
    .search-item{
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        padding: 5px 10px;
        &:hover{
            background: rgba(0, 0, 0, .1);
            cursor: pointer;
        }
    }
    .search-item__img{
        width: 50px;
        height: 100%;
        margin-right: 10px;
        img{
            width: 100%;
            height: 55px;
            object-fit: cover;
            border-radius: 3px;
        }
    }
    .search-item__info{
        display: flex;
        flex-direction: column;
    }
    .search-item__item-tags{
        display: flex;
        flex-wrap: wrap;
        span{
            background: rgba(255, 255, 255, .1);
            padding: 0px 8px;
            border-radius: 3px;
            color: #fff;
            font-size: 12px;
            margin: 5px 5px 0 0;
            opacity: .7;
        }
    }
    .category-full{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 10;
        background: #1a1d2e;
        display: flex;
        flex-direction: column;
    }
</style>
