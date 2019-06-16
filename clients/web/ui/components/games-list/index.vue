<template>
    <div class="games-list">
        <div class="col-3 p-0">
            <c-games-navigation
                :list="games"
                :activeId="currentID"
                @choose="getGame" />
        </div>
        <div class="col-9 p-0">
            <c-game-tab :game="game" />
        </div>
    </div>
</template>

<script>
export default {
    components: {
        'c-game-tab': () => import('~/components/games-list/list-item').then(m => m.default || m),
        'c-games-navigation': () => import('~/components/games-list/list-navigation').then(m => m.default || m)
    },
    props: {
        games: [Array, Object]
    },
    data() {
        return {
            game: {},
            currentID: ''
        }
    },
    watch: {
        game() {
            this.currentID = this.game.id
        }
    },
    created() {
        this.game = this.games[0]
    },
    methods: {
        getGame(id) {
            this.games.forEach(el => {
                if (el.id == id) {
                    console.log(el)
                    this.game = el
                }
            })
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
