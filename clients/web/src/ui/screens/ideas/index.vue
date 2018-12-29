<template>
    <c-layout navigationKey="idea">
        <div class="row">
            <div class="crowdfund-notice col-12 col-md-6 offset-md-3" v-if="!$store.state.application.settings.client.hide_crowdfund_game_notice" style="text-align: center; width: 100%; margin-top: 30px; margin-bottom: 30px; padding:20px;border: 3px dashed rgba(0,0,0,0.1); border-radius: 7px;background: rgba(0,0,0,0.2)">
                <c-button class="btn-close" @click="$store.commit('application/updateClientSettings', { key: 'hide_crowdfund_game_notice', value: true })">
                    <i class="fas fa-times"></i>
                </c-button>

                <h2>Submit Idea</h2>
                <div style="text-align: left">
                    <p>Looking to suggest ideas for your favorite game? We're here to help.</p>
                    <p>Maybe you just have an awesome idea, or want to inspire your favourite dev studio to continue a series (*cough* half-life).</p>
                </div>
                <br />
                <p><c-button class="c-button--lg outline-white" href="#/idea/new">Get Started</c-button></p>
            </div>
        </div>

        <c-infinite-content :list="list" />

        <c-block :noGutter="true" :bgGradient="true" :onlyContentBg="true">
            <c-heading-bar
                slot="title"
                class="mb-0"
                name="Browse All Ideas"
            />
            <div class="row">
                <c-loading :enabled="!ideas.length" />
                <c-idea-card
                    class="p-2 col-3"
                    :description="idea.description" 
                    :parentName="idea.product && idea.product.name" 
                    :parentDeveloper="idea.product && idea.product.developer" 
                    :id="idea.id"
                    v-for="(idea, index) in ideas" :key="index"
                />
            </div>
        </c-block>
    </c-layout>
</template>

<script>
export default {
    components: {
        'c-idea-card': (resolve) => require(['@/ui/components/idea-card'], resolve),
    },
    created() {
        this.$store.dispatch('ideas/find', {
            query: {
                $sort: {
                    createdAt: -1
                },
                $limit: 25
            }
        })
    },
    computed: {
        ideas() {
            return this.$store.getters['ideas/list']
        },
        list() {
            const result = []

            result.push({
                type: 'trendingProjectsRow',
                data: {
                    title: 'Trending Ideas',
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
                    title: 'Most Popular Ideas',
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
                    projects: this.$store.state.funding.topGameIdeas || []
                }
            })

            result.push({
                type: 'trendingProjectsRow',
                data: {
                    title: 'Top Content Ideas',
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
                    projects: this.$store.state.funding.topContentIdeas || []
                }
            })

            result.push({
                type: 'trendingProjectsRow',
                data: {
                    title: 'Top Item Ideas',
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
