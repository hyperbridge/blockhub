<template>
    <c-layout>
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
                        <c-dropdown-menu
                            class="margin-right-10 dark-bg"
                            title="FILTER BY CATEGORY">
                            <c-list
                                :items="selectableCategory"
                                @click="item => item.selected = !item.selected" />
                        </c-dropdown-menu>
                        <c-dropdown-menu
                            class="margin-right-10 dark-bg"
                            title="FILTER BY RATING">
                            <c-list
                                :items="selectableRating"
                                @click="item => item.selected = !item.selected" />
                        </c-dropdown-menu>
                        <c-input-searcher
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
                    <c-game-card
                        :name="game.name"
                        :image="game.meta.images.mediumTile"
                        :online="online"
                        :favorites="favorites"
                        :isLoading="(index == 2 ) ? true : false" />
                </div>
            </div>
            <div class="row align-items-stretch margin-top-30" style="width: 100%">
                <div class="col-12 games-list">
                    <c-game-list
                        v-for="(game, index) in games"
                        :key="index"
                        :online="online"
                        :favorites="favorites"
                        :game="game"
                        :isLoading="(index == 2 ) ? true : false" />
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
export default {
    components: {
        'c-dropdown': () => import('~/components/dropdown-menu/type-2').then(m => m.default || m),
        'c-input-searcher': () => import('~/components/inputs/searcher').then(m => m.default || m),
        'c-dropdown-menu': () => import('~/components/dropdown-menu/type-3').then(m => m.default || m),
        'c-list': () => import('~/components/list').then(m => m.default || m),
        'c-user-head': () => import('~/components/user/header').then(m => m.default || m),
        'c-game-card': () => import('~/components/game-library/card-item').then(m => m.default || m),
        'c-game-list': () => import('~/components/game-library/list-item').then(m => m.default || m)
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
