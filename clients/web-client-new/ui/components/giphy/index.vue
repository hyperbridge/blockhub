<template>
    <div class="c-giphy">
        <div class="c-giphy__input-container">
            <c-input v-model="query" @input="getGifs()" placeholder="Type to search" />
        </div>
        <div class="c-giphy__is-loading" v-if="isLoading">
            <c-loading-bar-circle />
        </div>
        <div class="c-giphy__list" v-if="gifs.length">
            <div class="c-giphy__list-scroll">
                <img v-for="gif in gifs" :src="gif" :key="gif.id" @click="choseGif(gif)">
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        props:{},
        components:{
            'c-input' : (resolve) => require(['@/components/inputs/'], resolve),
            'c-loading-bar-circle' : (resolve) => require(['@/components/loading-bar/circle'], resolve),
        },
        data(){
            return{
                query: '',
                gifs: [],
                isLoading: false
            }
        },
        methods:{
            getGifs() {
                this.isLoading = true;
                let apiKey = "lNEkB2sK699JdsX5IzoC2YupclkkGpsL";
                let searchEndPoint = "http://api.giphy.com/v1/gifs/search?";
                let limit = 15;
                let url = `${searchEndPoint}q=${this.query}&api_key=${apiKey}&limit=${limit}`;
                fetch(url)
                    .then(response => {
                        return response.json();
                    })
                    .then(json => {
                        console.log(json)
                        this.buildGifs(json);
                    })
                    .catch(err => console.log(err));
                this.isLoading = false
            },
            buildGifs(json) {
                this.gifs = json.data.map(gif => gif.id).map(gifId => {
                    return `https://media.giphy.com/media/${gifId}/giphy.gif`;
                });
            },
            choseGif(gif){
                this.$emit('choose', gif)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .c-giphy__input-container{
        padding: 5px;
        background: rgba(0, 0, 0, .1);
        border: 1px solid rgba(0, 0, 0, .3);
    }
    .c-giphy__is-loading{
        width: 100%;
        height: 100px;
        position: relative;
        background: rgba(0, 0, 0, .2);
        border-radius: 0 0 5px 5px;
    }
    .c-giphy__list{
        display: flex;
        flex-wrap: wrap;
        padding: 5px;
        background: rgba(0, 0, 0, .2);
        border-radius: 0 0 5px 5px;
        img{
            width: 100%;
            height: auto;
            margin-bottom: 5px;
            &:last-child{
                margin-bottom: 0;
            }
            &:hover{
                cursor: pointer;
            }
        }
    }
    .c-giphy__list-scroll{
        max-height: 300px;
        overflow-y: auto;
        overflow-x: hidden;
        display: block;
        &::-webkit-scrollbar-thumb {
            background: rgba(0, 0, 0, .5) !important;
            border: 0 none !important;
            border-radius: 2px!important;
        }
    }
</style>
