<template>
    <c-layout navigationKey="funding">
        <div class="row">
            <div
                v-if="!$store.state.application.settings.client.hideCrowdfundGameNotice"
                class="crowdfund-notice col-12 col-md-6 offset-md-3"
                style="text-align: center; width: 100%; margin-top: 30px; margin-bottom: 30px; padding:20px;border: 3px dashed rgba(0,0,0,0.1); border-radius: 7px;background: rgba(0,0,0,0.2)">
                <c-button
                    class="btn-close"
                    @click="$store.commit('application/updateClientSettings', { key: 'hideCrowdfundGameNotice', value: true })">
                    <i class="fas fa-times" />
                </c-button>

                <h2>Crowdfund Games</h2>
                <div style="text-align: left">
                    <p>Are you looking to crowdfund that game you've been working hard on? We're here to help.</p>
                    <p>Maybe you just have an awesome idea, or want to inspire your favourite dev studio to continue a series (*cough* half-life).</p>
                </div>
                <br>
                <p v-if="$store.state.application.developerMode">
                    <c-button
                        class="c-button--lg outline-white"
                        to="/business/project/new">
                        Get Started
                    </c-button>
                </p>
                <p v-if="!$store.state.application.developerMode">
                    <c-button
                        class="c-button--lg outline-white"
                        to="/developer/apply">
                        Get Started
                    </c-button>
                </p>
                <!-- <p v-if="!$store.state.application.desktopMode"><c-button class="c-button--lg outline-white" @click="$store.commit('application/activeModal', 'welcome')">Get Started</c-button></p> -->
            </div>
        </div>

        <c-block
            :noGutter="true"
            :bgGradient="true"
            :onlyContentBg="true">
            <c-heading-bar
                slot="title"
                class="mb-0"
                name="Browse All Projects" />
            <div class="row">
                <c-loading
                    :enabled="loading"
                    size="lg" />
                <p v-if="!loading && !projects.length">
                    Nothing could be found. Want to <c-button
                        status="plain"
                        @click="$store.commit('application/activeModal', 'comingSoon')">
                        Check for updates
                    </c-button>?
                </p>
                <c-project-card
                    v-for="(project, index) in projects"
                    v-if="projects.length"
                    :id="project.id"
                    :key="index"
                    class="p-2 col-3"
                    :description="project.description"
                    :image="project.meta && project.meta.images.mediumTile"
                    :funds="project.meta && project.meta.funds"
                    :parentName="project.product && project.product.name"
                    :parentDeveloper="project.product && project.product.owner"
                    :parentImage="project.product && project.product.meta && project.product.meta.images.mediumTile" />
            </div>
        </c-block>

        <c-infinite-content :list="list" />
    </c-layout>
</template>

<script>
export default {
    head() {
        return {
            title: `Projects | BlockHub`,
            meta: [
                { hid: 'description', name: 'description', content: 'BlockHub projects are crowdfunded by the community on the blockchain' },
                { hid: 'keywords', name: 'keywords', content: 'crowdfunding, blockchain, game, indie, developer' }
            ]
        }
    },
    components: {
        'c-project-card': () => import('~/components/project/card').then(m => m.default || m)
    },
    data() {
        return {
            loading: false
        }
    },
    computed: {
        list() {
            const result = []

            result.push({
                type: 'trendingProjectsRow',
                data: {
                    title: 'Trending Crowdfunds',
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
                    title: 'Most Popular Projects',
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
                    projects: this.$store.state.funding.most_popular_games || []
                }
            })


            result.push({
                type: 'trendingProjectsRow',
                data: {
                    title: 'Top Content Proposals',
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
                    projects: this.$store.state.funding.topContentIdeas || []
                }
            })

            result.push({
                type: 'trendingProjectsRow',
                data: {
                    title: 'Top Item Proposals',
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
    async asyncData({ params, store }) {
        await store.dispatch('projects/find', {
            query: {
                $sort: {
                    createdAt: -1
                },
                $limit: 25
            }
        })

        const projects = store.getters['projects/list']

        return {
            projects,
            breadcrumbLinks: [
                { to: { path: '/' }, title: 'Home' },
                { to: { path: '/projects' }, title: 'Projects' }
            ]
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
