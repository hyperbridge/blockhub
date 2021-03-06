<template>
    <Layout navigationKey="store">
        <Block
            :noGutter="true"
            :bgGradient="true"
            :onlyContentBg="true">
            <HeadingBar
                slot="title"
                class="mb-0"
                name="Browse All Games"
                :showArrows="games.length > 4" />
            <div class="row">
                <Loading
                    :enabled="loading"
                    size="lg" />
                <p v-if="!loading && !games.length">
                    Nothing could be found. Want to <Button
                        status="plain"
                        @click="$store.commit('application/activeModal', 'comingSoon')">
                        Check for updates
                    </Button>?
                </p>
                <GameCard
                    v-for="(game, index) in games"
                    :id="game.id"
                    :key="index"
                    class="p-2 col-3"
                    :image="game.meta && game.meta.images && game.meta.images.mediumTile"
                    :description="game.description"
                    :funds="game.meta && game.meta.funds"
                    :parentName="game.product && game.product.name"
                    :parentDeveloper="game.product && game.product.developer"
                    :parentImage="game.product && game.product.meta && game.product.meta.images && game.product.meta.images.mediumTile" />
            </div>
        </Block>

        <InfiniteContent :list="list" />
    </Layout>
</template>

<script>
export default {
    components: {
    },
    data() {
        return {
            loading: true
        }
    },
    computed: {
        games() {
            return this.$store.getters['products/list']
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
                            }
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
                            }
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
                            }
                        }
                    },
                    projects: this.$store.state.funding.topItemIdeas || []
                }
            })

            return result
        }
    },
    async created() {
        await this.$store.dispatch('products/find', {
            query: {
                $sort: {
                    createdAt: -1
                },
                $limit: 25
            }
        })

        this.loading = false
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
