<template>
    <c-layout navigationKey="store">
        <c-infinite-content :list="list" />

        <c-block :noGutter="true" :bgGradient="true" :onlyContentBg="true">
            <c-heading-bar
                slot="title"
                class="mb-0"
                name="Browse All Games"
                :showArrows="projects.length > 4"
            />
            <div class="row">
                <c-loading :enabled="!projects.length" />
                <c-project-card
                    class="p-2 col-3"
                    :image="project.meta.images.mediumTile" 
                    :description="project.description" 
                    :funds="project.meta.funds" 
                    :parentName="project.product && project.product.name" 
                    :parentDeveloper="project.product && project.product.developer" 
                    :parentImage="project.product && project.product.meta.images.mediumTile"
                    :id="project.id"
                    v-for="(project, index) in projects" :key="index"
                />
            </div>
        </c-block>
    </c-layout>
</template>

<script>
export default {
    components: {
        'c-project-card': (resolve) => require(['@/ui/components/project/card'], resolve),
    },
    created() {
        this.$store.dispatch('projects/find', {
            query: {
                $sort: {
                    createdAt: -1
                },
                $limit: 25
            }
        })
    },
    computed: {
        projects() {
            return this.$store.getters['projects/list'] // Object.values(this.$store.state.funding.projects)//this.$store.getters['projects/list']
                //.filter(trx => trx.you.id == this.profileId);
        },
        list() {
            const result = []

            result.push({
                type: 'trendingProjects_row',
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
                type: 'trendingProjects_row',
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
                type: 'trendingProjects_row',
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
