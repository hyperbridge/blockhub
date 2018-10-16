<template>
    <c-layout navigationKey="funding">
        <div class="content" id="content">
            <div class="container-fluid">
                <c-infinite-content :list="list" />
            </div>
        </div>
    </c-layout>
</template>

<script>
export default {
    computed: {
        list() {
            const result = []

            result.push({
                type: 'trending_projects_row',
                data: {
                    title: 'Trending Crowdfunds',
                    options: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    projects: this.$store.state.funding.trending_projects || []
                }
            })

            result.push({
                type: 'trending_projects_row',
                data: {
                    title: 'Top Game Ideas',
                    options: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    projects: this.$store.state.funding.top_game_ideas || []
                }
            })

            result.push({
                type: 'trending_projects_row',
                data: {
                    title: 'Top Content Suggestions',
                    options: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    projects: this.$store.state.funding.top_content_suggestions || []
                }
            })

            result.push({
                type: 'trending_projects_row',
                data: {
                    title: 'Top Item Suggestions',
                    options: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    projects: this.$store.state.funding.top_item_suggestions || []
                }
            })

            result.push({
                type: 'trending_projects_row',
                data: {
                    title: 'Most Popular Games',
                    options: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    projects: this.$store.state.funding.most_popular_games || []
                }
            })

            return result
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
