<template>
    <div class="c-giphy">
        <div class="c-giphy__input-container">
            <c-input v-model="query"
                     placeholder="Type to search"
                     @input="getGifs()" />
        </div>
        <div v-if="isLoading"
             class="c-giphy__is-loading">
            <c-loading-bar-circle />
        </div>
        <div v-if="gifs.length"
             class="c-giphy__list">
            <div class="c-giphy__list-scroll">
                <img v-for="gif in gifs"
                     :key="gif.id"
                     :src="gif"
                     @click="choseGif(gif)">
            </div>
        </div>
    </div>
</template>

<script>

export default {
    components: {
        'c-input': () => import('~/components/inputs/').then(m => m.default || m),
        'c-loading-bar-circle': () => import('~/components/loading-bar/circle').then(m => m.default || m)
    },
    props: {},
    data() {
        return {
            query: '',
            gifs: [],
            isLoading: false
        }
    },
    methods: {
        getGifs() {
            this.isLoading = true
            const apiKey = 'lNEkB2sK699JdsX5IzoC2YupclkkGpsL'
            const searchEndPoint = 'http://api.giphy.com/v1/gifs/search?'
            const limit = 15
            const url = `${searchEndPoint}q=${this.query}&api_key=${apiKey}&limit=${limit}`
            fetch(url)
                .then(response => response.json())
                .then(json => {
                    console.log(json)
                    this.buildGifs(json)
                })
                .catch(err => console.log(err))
            this.isLoading = false
        },
        buildGifs(json) {
            this.gifs = json.data.map(gif => gif.id).map(gifId => `https://media.giphy.com/media/${gifId}/giphy.gif`)
        },
        choseGif(gif) {
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
