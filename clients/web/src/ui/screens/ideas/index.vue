<template>
    <c-layout navigationKey="funding">
        <div class="row">
            <div class="crowdfund-notice col-12 col-md-6 offset-md-3" v-if="!$store.state.application.account.settings.client.hide_crowdfund_game_notice" style="text-align: center; width: 100%; margin-top: 30px; margin-bottom: 30px; padding:20px;border: 3px dashed rgba(0,0,0,0.1); border-radius: 7px;background: rgba(0,0,0,0.2)">
                <c-button class="btn-close" @click="$store.commit('application/updateClientSettings', 'hide_crowdfund_game_notice', true)">
                    <i class="fas fa-times"></i>
                </c-button>

                <h2>Submit Idea</h2>
                <div style="text-align: left">
                    <p>Are you looking to crowdfund that game you've been working hard on? We're here to help.</p>
                    <p>Maybe you just have an awesome idea, or want to inspire your favourite dev studio to continue a series (*cough* half-life).</p>
                </div>
                <br />
                <p v-if="$store.state.application.developerMode"><c-button class="c-btn-lg outline-white" href="#/business/idea/new">Get Started</c-button></p>
                <p v-if="!$store.state.application.developerMode"><c-button class="c-btn-lg outline-white" href="#/developer/apply">Get Started</c-button></p>
                <!-- <p v-if="!$store.state.application.desktopMode"><c-button class="c-btn-lg outline-white" @click="$store.commit('application/activateModal', 'welcome')">Get Started</c-button></p> -->
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
        'c-idea-card': (resolve) => require(['@/ui/components/idea/card'], resolve),
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
                type: 'trendingProjects_row',
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
                    ideas: this.$store.state.funding.trendingProjects || []
                }
            })

            result.push({
                type: 'trendingProjects_row',
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
                    ideas: this.$store.state.funding.trendingProjects || []
                }
            })

            result.push({
                type: 'trendingProjects_row',
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
                    ideas: this.$store.state.funding.top_game_ideas || []
                }
            })

            result.push({
                type: 'trendingProjects_row',
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
                    ideas: this.$store.state.funding.top_content_suggestions || []
                }
            })

            result.push({
                type: 'trendingProjects_row',
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
                    ideas: this.$store.state.funding.top_item_suggestions || []
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
