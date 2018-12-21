<template>
    <div class="games-list">
        <div class="col-3 p-0">
            <c-games-navigation :list="games" :activeId="currentID" @choose="getGame" />
        </div>
        <div class="col-9 p-0">
            <c-game-tab :game="game" />
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            games: [ Array, Object ]
        },
        components:{
            'c-game-tab': (resolve) => require(['@/ui/components/games-list/list-item'], resolve),
            'c-games-navigation': (resolve) => require(['@/ui/components/games-list/list-navigation'], resolve)
        },
        data(){
            return{
                game: {},
                currentID: ''
            }
        },
        created(){
            this.game = this.games[0]
        },
        methods:{
            getGame(id){
                this.games.forEach( (el) => {
                    if ( el.id == id ){
                        console.log(el)
                        this.game = el
                    }
                })
            }
        },
        watch:{
            game(){
                this.currentID = this.game.id
            }
        }
    }
</script>

<style lang="scss" scoped>
    .games-list{
        display: flex;
        width: 100%;
    }
</style>
