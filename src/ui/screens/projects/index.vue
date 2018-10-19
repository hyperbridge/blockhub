<template>
    <c-layout navigationKey="funding">
            <div class="container-fluid">
                <c-infinite-content :list="list" />

                <div class="row">
                    <div class="col-6 offset-3" style="text-align: center; width: 100%; margin-top: 30px; margin-bottom: 30px; padding:20px;border: 3px dashed rgba(0,0,0,0.1); border-radius: 7px;background: rgba(0,0,0,0.2)">
                        <h2>Crowdfund Your Game</h2>
                        <p>Are you looking to crowdfund that game you've been working hard on? We're here to help.</p>
                        <p>Maybe you just have an awesome idea, or want to inspire your favourite dev studio to continue a series (*cough* half-life).</p>
                        <br />
                        <p><c-button class="c-btn-lg outline-white" href="/#/project/new">Get Started</c-button></p>
                    </div>
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
