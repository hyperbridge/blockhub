<template>
    <transition name="fadeIn">
        <div class="share-block" v-if="show">
            <c-searcher
                class="margin-bottom-10"
            />
            <div class="share-block__users margin-top-20">
                <div class="list">
                    <h5>
                        Favorites
                    </h5>
                    <c-author v-for="(author, index) in favoritesList" :author="author" :key="index" />
                </div>
                <div class="list">
                    <h5>
                        Online
                    </h5>
                    <c-author v-for="(author, index) in onlineList" :author="author" :key="index" />
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'share-list',
        props: ['onlineList', 'favoritesList', 'show'],
        components:{
            'c-searcher': (resolve) => require(['@/ui/components/searcher'], resolve),
            'c-author': (resolve) => require(['@/ui/components/author'], resolve)
        },
        data(){
            return{
                show: this.show
            }
        },
        methods:{
            toggleList(){
                this.show = !this.show
            }
        }
    }
</script>

<style lang="scss" scoped>
    .c-input{
        background: rgba(0, 0 ,0, .3);
    }
    .share-block{
        position: absolute;
        width: 200px;
        top: 0;
        transform: translateY(-48%);
        right: -220px;
        padding: 15px;
        background: rgba(0, 0, 0, .85);
        color: #fff;
        border-radius: 5px;
        z-index: 8;
        &:before{
            content: "";
            position: absolute;
            transform: rotate(-90deg);
            top: calc( 50%);
            left: -20px;
            z-index: 7;
            border-style: solid;
            border-width: 0 15px 15px 15px;
            border-color: transparent transparent rgba(0, 0, 0, .85) transparent;
        }
    }
    .share-block__users{
        height: auto;
        max-height: calc( 100% - 50px);
        overflow-x: hidden;
        overflow-y: auto;
        h5{
            font-weight: bold;
            color: #fff;
            text-transform: uppercase;
        }
        .author{
            margin: 6px 0;
            display: flex;
            &:last-child{
                margin-bottom: 0;
            }
        }
        .list{
            margin-bottom: 15px;
            &:last-child{
                margin: 0;
            }
        }
    }
</style>
