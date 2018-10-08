<template>
    <c-layout>
        <div class="content" id="content">
            <div class="container-fluid">
                <c-user-head />
                <div class="row margin-top-50">
                    <div class="col-12 col-xl-4">
                        <div class="h2 p-0 m-0">Game Library</div>
                        <div>
                            <strong>482</strong>
                            games in your inventory
                        </div>
                    </div>
                    <div class="col-12 col-lg-8">
                        <div class="filter-blk d-flex align-items-center">
                            <c-dropdown-menu
                                class="margin-right-10 dark-bg"
                                title="FILTER BY CATEGORY"
                            >
                                <c-list
                                    :items="selectableCategory"
                                    @click="item => item.selected = !item.selected"
                                />
                            </c-dropdown-menu>
                            <c-dropdown-menu
                                class="margin-right-10 dark-bg"
                                title="FILTER BY RATING"
                            >
                                <c-list
                                    :items="selectableRating"
                                    @click="item => item.selected = !item.selected"
                                />
                            </c-dropdown-menu>
                            <c-input-searcher
                                class="assets-explorer__input-searcher"
                                v-model="phrase"
                            />
                        </div>
                    </div>
                </div>
                <div class="row align-items-stretch">
                    <div class="col-12 col-xl-3 py-3" v-for="(game, index) in games" :key="index" >
                        <c-game :game="game" />
                    </div>
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        components: {
            'c-layout': (resolve) => require(['@/ui/layouts/default'], resolve),
            'c-block': (resolve) => require(['@/ui/components/block'], resolve),
            'c-dropdown': (resolve) => require(['@/ui/components/dropdown-menu/type-2'], resolve),
            'c-input-searcher': (resolve) => require(['@/ui/components/inputs/searcher'], resolve),
            'c-dropdown-menu': (resolve) => require(['@/ui/components/dropdown-menu/type-3'], resolve),
            'c-list': (resolve) => require(['@/ui/components/list'], resolve),
            'c-user-head': (resolve) => require(['@/ui/components/user/header'], resolve),
            'c-game': (resolve) => require(['@/ui/components/game-library/item'], resolve)
        },
        computed:{
            selectableCategory(){
            },
            selectableRating(){
            },
            games(){
                return this.$store.state.marketplace.products
            }
        },
    }
</script>

<style lang="scss" scoped>
</style>
