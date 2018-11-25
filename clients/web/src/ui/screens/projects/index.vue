<template>
    <c-layout navigationKey="funding">
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
                <p v-if="$store.state.application.desktopMode && $store.state.application.developerMode"><c-button class="c-btn-lg outline-white" href="#/business/project/new">Get Started</c-button></p>
                <p v-if="$store.state.application.desktopMode && !$store.state.application.developerMode"><c-button class="c-btn-lg outline-white" href="#/developer/apply">Get Started</c-button></p>
                <p v-if="!$store.state.application.desktopMode"><c-button class="c-btn-lg outline-white" @click="$store.commit('application/activateModal', 'welcome')">Get Started</c-button></p>
            </div>
        </div>

        <c-infinite-content :list="list" />

        <c-block :noGutter="true" :bgGradient="true" :onlyContentBg="true">
            <c-heading-bar
                slot="title"
                class="mb-0"
                :name="Projects"
            />
            <div class="row">
                <c-project-card
                    class="p-2 col-3"
                    :image="project.images.medium_tile" 
                    :description="project.description" 
                    :funds="project.funds" 
                    :parentName="project.product && project.product.name" 
                    :parentDeveloper="project.product && project.product.developer" 
                    :parentImage="project.product && project.product.images.medium_tile"
                    :id="project.id"
                    v-for="(project, index) in projects" :key="index"
                />
            </div>
        </c-block>
    </c-layout>
</template>

<script>
import Vue from 'vue'

export default {
    components: {
        'c-project-card': (resolve) => require(['@/ui/components/project/card'], resolve),
    },
    watch: {
        '$store.state.application.initialized'(newVal, oldVal) {
            this.$store.dispatch('projects/find', {
                query: {
                    $sort: {
                        createdAt: -1
                    },
                    $limit: 25
                }
            })
        }
    },
    computed: {
        projects() {
            return this.$store.getters['projects/list'] // Object.values(this.$store.state.funding.projects)//this.$store.getters['projects/list']
                //.filter(trx => trx.you.id == this.profileId);
        },
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
