<template>
    <c-layout navigationKey="store">
        <c-block :noGutter="true" :bgGradient="true" :onlyContentBg="true">
            <c-heading-bar
                slot="title"
                class="mb-0"
                name="Browse All Games"
                :showArrows="games.length > 4"
            />
            <div class="row">
                <c-loading :enabled="loading" size="lg" />
                <p v-if="!loading && !games.length">Nothing could be found. Want to <c-button status="plain" @click="$store.commit('application/activateModal', 'coming-soon')">Check for updates</c-button>?</p>
                <c-game-card
                    class="p-2 col-3"
                    :image="game.meta.images.mediumTile" 
                    :description="game.description" 
                    :funds="game.meta.funds" 
                    :parentName="game.product && game.product.name" 
                    :parentDeveloper="game.product && game.product.developer" 
                    :parentImage="game.product && game.product.meta.images.mediumTile"
                    :id="game.id"
                    v-for="(game, index) in games" :key="index"
                />
            </div>
        </c-block>
        
        <c-infinite-content :list="list" />
    </c-layout>
</template>

<script>
export default {
    components: {
        'c-game-card': (resolve) => require(['@/components/game-card'], resolve),
    },
    data() {
        return {
            loading: true
        }
    },
    created() {
        this.$store.dispatch('products/find', {
            query: {
                $sort: {
                    createdAt: -1
                },
                $limit: 25
            }
        }).then(() => {
            this.loading = false
        })
    },
    computed: {
        games() {
            return this.$store.getters['products/list'] // Object.values(this.$store.state.funding.projects)//this.$store.getters['projects/list']
                //.filter(trx => trx.you.id == this.profileId);
        },
        list() {
            const result = []

            result.push({
                type: 'trendingProjectsRow',
                data: {
                    title: 'Trending Games',
                    options: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                        breakpoints: {
                            768: {
                                slidesPerView: 1,
                                spaceBetween: 0
                            },
                        }
                    },
                    projects: this.$store.state.funding.trendingProjects || []
                }
            })

            result.push({
                type: 'trendingProjectsRow',
                data: {
                    title: 'Top Games',
                    options: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                        breakpoints: {
                            768: {
                                slidesPerView: 1,
                                spaceBetween: 0
                            },
                        }
                    },
                    projects: this.$store.state.funding.topGameIdeas || []
                }
            })

            result.push({
                type: 'trendingProjectsRow',
                data: {
                    title: 'Top Independent Games',
                    options: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                        breakpoints: {
                            768: {
                                slidesPerView: 1,
                                spaceBetween: 0
                            },
                        }
                    },
                    projects: this.$store.state.funding.topItemIdeas || []
                }
            })

            return result
        }
    }
}
</script>

<style lang="scss" scoped>
    .crowdfund-notice {
        .btn-close {
            position: absolute;
            right: 0;
            top: 0;
            padding: 0px;
            background: #1C2032;
            border-radius: 5px 0 5px 5px;
            font-size: 16px;
            display: block;
            margin: 0;
            color: #C6C6D6;
            width: 26px;
            height: 26px;
            text-align: center;
            line-height: 24px;
        }
    }
</style>
