<template>
    <Layout navigationKey="idea">
        <div class="row">
            <div
                v-if="!$store.state.application.settings.client.hideCrowdfundGameNotice"
                class="crowdfund-notice col-12 col-md-6 offset-md-3"
                style="text-align: center; width: 100%; margin-top: 30px; margin-bottom: 30px; padding:20px;border: 3px dashed rgba(0,0,0,0.1); border-radius: 7px;background: rgba(0,0,0,0.2)">
                <Button
                    class="btn-close"
                    @click="$store.commit('application/updateClientSettings', { key: 'hideCrowdfundGameNotice', value: true })">
                    <i class="fas fa-times" />
                </Button>

                <h2>Create Idea</h2>
                <div style="text-align: left">
                    <p>Got ideas for your favorite game? We're here to help.</p>
                    <p>Want to inspire your favourite dev studio to continue a series? Let's do it.</p>
                    <p>Maybe some day we'll get a Half-life 3 or HL2 Episode 3.</p>
                </div>
                <br>
                <p>
                    <Button
                        class="Button--lg outline-white"
                        to="/idea/new">
                        Get Started
                    </Button>
                </p>
            </div>
        </div>

        <Block
            :noGutter="true"
            :bgGradient="true"
            :onlyContentBg="true">
            <HeadingBar
                slot="title"
                class="mb-0"
                name="Browse All Ideas" />
            <div class="row">
                <Loading
                    :enabled="!ideas.length"
                    size="lg" />
                <IdeaCard
                    v-for="(idea, index) in ideas"
                    :id="idea.id"
                    :key="index"
                    class="p-2 col-3"
                    :description="idea.description"
                    :parentName="idea.name"
                    :parentDeveloperId="idea.meta && idea.meta.owner && idea.meta.owner.id"
                    :parentDeveloperName="idea.meta && idea.meta.owner && idea.meta.owner.name" />
            </div>
        </Block>

        <InfiniteContent :list="list" />
    </Layout>
</template>

<script>
export default {
    head() {
        return {
            title: `Ideas | BlockHub`,
            meta: [
                { hid: 'description', name: 'description', content: `BlockHub ideas are where the next best thing in gaming start` },
                { hid: 'keywords', name: 'keywords', content: 'ideas, blockchain, game, indie, developer' }
            ]
        }
    },
    components: {
        'Button': () => import('@ericmuyser/hyper-ui').then(m => m.Button),
        'Block': () => import('@ericmuyser/hyper-ui').then(m => m.Block),
        'Loading': () => import('@ericmuyser/hyper-ui').then(m => m.Loading),
        'HeadingBar': () => import('@ericmuyser/hyper-ui').then(m => m.HeadingBar),
        'IdeaCard': () => import('@ericmuyser/hyper-ui').then(m => m.IdeaCard)
    },
    data() {
        return {
            ideas: [],
            topGameIdeas: []
        }
    },
    computed: {
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
                            }
                        }
                    },
                    projects: this.$store.getters['funding/trendingProjects'] || []
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
                            }
                        }
                    },
                    projects: this.$store.getters['funding/trendingProjects'] || []
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
                            }
                        }
                    },
                    projects: this.topGameIdeas
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
                            }
                        }
                    },
                    projects: this.$store.getters['funding/topContentIdeas'] || []
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
                            }
                        }
                    },
                    projects: this.$store.getters['funding/topItemIdeas'] || []
                }
            })

            return result
        }
    },
    async asyncData({ params, store }) {
        await store.dispatch('ideas/find', {
            query: {
                $sort: {
                    createdAt: -1
                },
                $limit: 25
            }
        })

        const topGameIdeas = [] // (await store.dispatch('getTopGameIdeas/find')).data

        const ideas = store.getters['ideas/list']

        return {
            ideas,
            topGameIdeas,
            breadcrumbLinks: [
                { to: { path: '/' }, title: 'Home' },
                { to: { path: '/ideas' }, title: 'Ideas' }
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
