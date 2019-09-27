<template>
    <Layout>
        <div class="row">
            <div class="row margin-top-50">
                <div class="col-12 col-xl-4">
                    <div class="h2 p-0 m-0">
                        Chest
                    </div>
                    <div>
                        <strong>{{ games.length }}</strong>
                        games in your chest
                    </div>
                </div>
                <div class="col-12 col-lg-8">
                    <div class="filter-block d-flex align-items-center">
                        <DropdownMenu
                            class="margin-right-10 dark-bg"
                            title="FILTER BY CATEGORY">
                            <List
                                :items="selectableCategory"
                                @click="item => item.selected = !item.selected" />
                        </DropdownMenu>
                        <DropdownMenu
                            class="margin-right-10 dark-bg"
                            title="FILTER BY RATING">
                            <List
                                :items="selectableRating"
                                @click="item => item.selected = !item.selected" />
                        </DropdownMenu>
                        <InputSearcher
                            v-model="phrase"
                            class="assets-explorer__input-searcher" />
                    </div>
                </div>
            </div>
            <div class="row align-items-stretch margin-top-30" style="width: 100%">
                <div
                    v-for="(game, index) in games"
                    :key="index"
                    class="col-12 col-md-6 col-lg-4 col-xl-3 py-3">
                    <GameCard
                        :name="game.name"
                        :image="game.meta.images.mediumTile"
                        :online="online"
                        :favorites="favorites"
                        :isLoading="(index == 2 ) ? true : false" />
                </div>
            </div>
            <div class="row align-items-stretch margin-top-30" style="width: 100%">
                <div class="col-12 games-list">
                    <GameList
                        v-for="(game, index) in games"
                        :key="index"
                        :online="online"
                        :favorites="favorites"
                        :game="game"
                        :isLoading="(index == 2 ) ? true : false" />
                </div>
            </div>
        </div>
    </Layout>
</template>

<script>
export default {
    components: {
        'InputSearcher': () => import('@ericmuyser/hyper-ui').then(m => m.InputSearcher),
        'DropdownMenu': () => import('@ericmuyser/hyper-ui').then(m => m.DropdownMenu),
        'List': () => import('@ericmuyser/hyper-ui').then(m => m.List),
        'GameCard': () => import('@ericmuyser/hyper-ui').then(m => m.GameCard),
        'GameList': () => import('@ericmuyser/hyper-ui').then(m => m.GameList)
    },
    data() {
        return {
            online: [
                {
                    'name': 'Sally Hamilton',
                    'img': 'http://placehold.it/32x32'
                },
                {
                    'name': 'Poole Wise',
                    'img': 'http://placehold.it/32x32'
                },
                {
                    'name': 'Frye Nash',
                    'img': 'http://placehold.it/32x32'
                }
            ],
            favorites: [
                {
                    'name': 'Nixon Love',
                    'img': 'http://placehold.it/32x32'
                },
                {
                    'name': 'Richards Langley',
                    'img': 'http://placehold.it/32x32'
                },
                {
                    'name': 'Jill Medina',
                    'img': 'http://placehold.it/32x32'
                },
                {
                    'name': 'Callahan Ballard',
                    'img': 'http://placehold.it/32x32'
                },
                {
                    'name': 'Zamora Simmons',
                    'img': 'http://placehold.it/32x32'
                },
                {
                    'name': 'Jenkins Ruiz',
                    'img': 'http://placehold.it/32x32'
                },
                {
                    'name': 'Kemp Christian',
                    'img': 'http://placehold.it/32x32'
                }
            ],
            phrase: ''
        }
    },
    computed: {
        selectableCategory() {
        },
        selectableRating() {
        },
        games() {
            return this.$store.state.application.activeProfile.ownedProducts
        }
    }
}
</script>

<style lang="scss" scoped>
    .games-list {
        display: flex;
        flex-direction: column;
        .game-library__item {
            background: rgba(0, 0, 0, .25);
            &:nth-child(even) {
                background: rgba(0, 0, 0, .15);
            }
            &:first-child{
                border-radius: 5px 5px 0 0;
            }
            &:last-child{
                border-radius: 0 0 5px 5px;
            }
        }
    }
</style>
