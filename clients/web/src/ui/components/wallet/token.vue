<template>
    <div class="token">
        <div class="token-nav">
            <span :class="{ 'active' : isSearch }" @click="activeSearch">
                Search
            </span>
            <span :class="{ 'active' : !isSearch }" @click="activeCustom">
                Add custom
            </span>
        </div>
        <div class="token-search" v-if="isSearch">
            <c-input v-model="query" placeholder="Type to search" class="w-100" />
            <div class="token-search__results">
                <ul v-if="results.length">
                    <li class="list-title">
                        Search result
                    </li>
                    <li v-for="item in results">
                        <c-img :src="item.img" />
                        {{ item.name }}({{ item.symbol.toUpperCase() }})
                    </li>
                </ul>
                <div class="no-results" v-else>
                    <i class="fas fa-search"></i>
                    No tokens found
                </div>
            </div>
            <div class="token-search__action">
                <c-button status="opacity-danger" size="lg">
                    Cancel
                </c-button>
                <c-button status="opacity-success" size="lg">
                    Next
                </c-button>
            </div>
        </div>
        <div class="token__custom-token" v-else>
            <div class="w-100">
                <div class="form-group">
                    <label>
                        Address
                    </label>
                    <input class="form-control" type="text" />
                </div>
                <div class="form-group">
                    <label>
                        Symbol
                    </label>
                    <input class="form-control" type="text" />
                </div>
                <div class="form-group">
                    <label>
                        Count
                    </label>
                    <input class="form-control" type="number" />
                </div>
            </div>
            <div class="token__custom-token-action">
                <c-button status="opacity-danger" size="lg">
                    Cancel
                </c-button>
                <c-button status="opacity-success" size="lg">
                    Next
                </c-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components:{
            'c-input' : (resolve) => require(['@/ui/components/inputs'], resolve),
        },
        data(){
            return{
                query: '',
                results: [
                    {
                        img: 'https://rivetz.com/img/logo/250px.png',
                        name: 'Rivetz',
                        symbol: 'RVT'
                    },
                    {
                        img: 'https://pbs.twimg.com/profile_images/902989409976442880/AOLxty97_400x400.jpg',
                        name: 'DIVI Exchange token',
                        symbol: 'divx'
                    },
                    {
                        img: 'https://assets.coingecko.com/coins/images/3508/large/5906667d95a2d43d31378ce7_60x60logo.png?1522119804',
                        name: 'Spectiv Signal Token',
                        symbol: 'sig'
                    },
                    {
                        img: 'https://rivetz.com/img/logo/250px.png',
                        name: 'Rivetz',
                        symbol: 'RVT'
                    },
                    {
                        img: 'https://pbs.twimg.com/profile_images/902989409976442880/AOLxty97_400x400.jpg',
                        name: 'DIVI Exchange token',
                        symbol: 'divx'
                    },
                    {
                        img: 'https://assets.coingecko.com/coins/images/3508/large/5906667d95a2d43d31378ce7_60x60logo.png?1522119804',
                        name: 'Spectiv Signal Token',
                        symbol: 'sig'
                    },
                    {
                        img: 'https://rivetz.com/img/logo/250px.png',
                        name: 'Rivetz',
                        symbol: 'RVT'
                    },
                    {
                        img: 'https://pbs.twimg.com/profile_images/902989409976442880/AOLxty97_400x400.jpg',
                        name: 'DIVI Exchange token',
                        symbol: 'divx'
                    },
                    {
                        img: 'https://assets.coingecko.com/coins/images/3508/large/5906667d95a2d43d31378ce7_60x60logo.png?1522119804',
                        name: 'Spectiv Signal Token',
                        symbol: 'sig'
                    }
                ],
                isSearch: true
            }
        },
        methods:{
            activeSearch(){
                this.isSearch = true
            },
            activeCustom(){
                this.isSearch = false
            }
        }
    }
</script>

<style lang="scss" scoped>
    .token{
        height: 100%;
        padding-top: 10px;
    }
    .token-nav{
        display: flex;
        padding-bottom: 15px;
        span{
            color: #fff;
            padding: 3px 7px;
            border-bottom: 2px solid transparent;
            opacity: .5;
            cursor: pointer;
            &.active{
                opacity: 1;
                border-color: #fff;
            }
            &:hover{
                text-decoration: none;
                opacity: .8;
            }
        }
    }
    .token-search__results,
    .token-search,
    .token__custom-token{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: calc( 100% - 50px );
    }
    .token-search__results{
        /*height: 100%;*/
        width: 100%;
        padding: 20px 0;
        ul{
            padding: 0;
            margin: 0;
            width: 100%;
            height: 100%;
            overflow-y: auto;
            overflow-x: hidden;
            li{
                list-style: none;
                display: flex;
                align-items: center;
                font-size: 14px;
                color: #fff;
                margin-bottom: 5px;
                padding: 8px;
                border-radius: 5px;
                img{
                    width: 35px;
                    height: 35px;
                    object-fit: cover;
                    border-radius: 100%;
                    margin-right: 15px;
                }
                &:last-child{
                    margin-bottom: 0;
                }
                &:hover{
                    background: rgba(255, 255, 255, .1);
                    cursor: pointer;
                }
                &.list-title{
                    padding: 0;
                    margin-bottom: 10px;
                    &:hover{
                        background: transparent!important;
                    }
                }
            }
        }
        .no-results{
            color: #fff;
            display: flex;
            flex-direction: column;
            margin: auto;
            text-align: center;
            opacity: .4;
            font-size: 16px;
            i{
                font-size: 25px;
                margin-bottom: 10px;
            }
        }
    }
    .token__custom-token{
        .form-group{
            width: 100%;
            label{
                color: #fff;
            }
        }
    }
    .token-search__action,
    .token__custom-token-action{
        margin-top: auto;
        display: flex;
        justify-content: space-between;
        width: 100%;
        .c-btn{
            width: 45%;
            justify-content: center;
        }
    }
</style>
