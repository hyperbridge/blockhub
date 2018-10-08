<template>
    <c-layout navigationKey="funding">
        <div class="content" id="content">
            <div class="container-fluid">
                <c-infinite-content :list="list" />

                <!-- <div class="row game-grid">
                    <div class="col-12">
                        <h3>Top Projects</h3>
                        <div class="sl_nav">
                            <a href="#3" class="nav-prev">
                                <i class="fas fa-arrow-left"></i>
                            </a>
                            <a href="#3" class="nav-next">
                                <i class="fas fa-arrow-right"></i>
                            </a>
                        </div>
                        <div class="line"></div>
                    </div>
                    <div class="col-12 col-lg-4" v-for="(item, index) in projects" v-bind:key="index">
                        <div class="card invert game-grid__item">
                            <div class="card-body padding-0">
                                <a :href="`/#/project/${item.id}`"><c-img class="card-img-top" :src="item.images.medium_tile" /></a>
                                <h4><a :href="`/#/project/${item.id}`">{{ item.name }}</a></h4>
                                <p class="card-text">{{ item.short_description }} </p>

                                <c-tags :tags="item.developer_tags"></c-tags>
                            </div>
                        </div>
                    </div>
                    <div class="card invert game-grid__item">
                        <div class="card-body padding-0">
                            <h4><a :href="`/#/project/new`">NEW PROJECT</a></h4>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
    </c-layout>
</template>

<script>
export default {
    components: {
        'c-layout': (resolve) => require(['@/ui/layouts/default'], resolve),
        'c-infinite-content': (resolve) => require(['@/ui/components/infinite-content'], resolve),
    },
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
                    projects: this.$store.state.funding.projects
                }
            })

            return result
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
