<template>
    <c-layout navigationKey="funding">
            <div class="container-fluid">
                <div class="row">
                    <div class="crowdfund-notice col-12 col-md-6 offset-md-3" v-if="!$store.state.application.account.settings.client.hide_crowdfund_game_notice" style="text-align: center; width: 100%; margin-top: 30px; margin-bottom: 30px; padding:20px;border: 3px dashed rgba(0,0,0,0.1); border-radius: 7px;background: rgba(0,0,0,0.2)">
                        <c-button class="btn-close" @click="$store.commit('application/UPDATE_CLIENT_SETTINGS', 'hide_crowdfund_game_notice', true)">
                            <i class="fas fa-times"></i>
                        </c-button>

                        <h2>Crowdfund Your Game</h2>
                        <div style="text-align: left">
                            <p>Are you looking to crowdfund that game you've been working hard on? We're here to help.</p>
                            <p>Maybe you just have an awesome idea, or want to inspire your favourite dev studio to continue a series (*cough* half-life).</p>
                        </div>
                        <br />
                        <p v-if="$store.state.application.desktop_mode"><c-button class="c-btn-lg outline-white" href="/#/project/new">Get Started</c-button></p>
                        <p v-if="!$store.state.application.desktop_mode"><c-button class="c-btn-lg outline-white" @click="$store.commit('application/activateModal', 'welcome')">Get Started</c-button></p>
                    </div>
                </div>

                <c-infinite-content :list="list" />
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
                        breakpoints: {
                            768: {
                                slidesPerView: 1,
                                spaceBetween: 0
                            },
                        }
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
                        breakpoints: {
                            768: {
                                slidesPerView: 1,
                                spaceBetween: 0
                            },
                        }
                    },
                    projects: this.$store.state.funding.top_game_ideas || []
                }
            })

            result.push({
                type: 'trending_projects_row',
                data: {
                    title: 'Top Content Proposals',
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
                    projects: this.$store.state.funding.top_content_suggestions || []
                }
            })

            result.push({
                type: 'trending_projects_row',
                data: {
                    title: 'Top Item Proposals',
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
                        breakpoints: {
                            768: {
                                slidesPerView: 1,
                                spaceBetween: 0
                            },
                        }
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
