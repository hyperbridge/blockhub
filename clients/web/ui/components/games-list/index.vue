<template>
    <div class="games-list">
        <div class="col-3 p-0">
            <c-games-navigation
                :list="games"
                :activeId="currentId"
                @choose="getGame" />
        </div>
        <div class="col-9 p-0">
            <c-game-tab :name="game.name"
                        :subTitle="game.meta.subTitle"
                        :image="game.meta.images.mediumTile"
                        :friends="game.meta.friends"
                        :achievements="game.meta.achievements"
                        :downloadContent="game.meta.downloadContent"
                        :news="game.meta.news" />
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
        games: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            game: {},
            currentId: ''
        }
    },
    watch: {
        game() {
            this.currentId = this.game.id
        }
    },
    mounted() {
        this.game = this.games[1]
    },
    methods: {
        getGame(id) {
            this.games.forEach(el => {
                if (el.id == id) {
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
