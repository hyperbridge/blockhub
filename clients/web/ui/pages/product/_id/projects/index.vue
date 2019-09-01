<template>
    <div class="row">
        <div class="col-12">
            <div class="filter d-flex justify-content-between">
                <div class="form-group">
                    <div class="input-group input-group-sm">
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Search"
                            aria-label="Search">
                        <div class="input-group-append">
                            <span class="input-group-text">
                                <i class="fas fa-search" />
                            </span>
                        </div>
                    </div>
                </div>
                <div>
                    <Button
                        status="info"
                        iconHide
                        @click="$store.commit('application/activeModal', 'proposeIdea')">
                        Submit Idea
                    </Button>
                </div>
            </div>
        </div>

        <div class="col-12">
            <Block
                title="Top 3 Ideas"
                :noGutter="true"
                :bgGradient="true"
                :onlyContentBg="true">
                <div class="row">
                    <div
                        v-if="projects.length"
                        class="col-12 col-md-6 col-lg-3">
                        <ProjectCard
                            v-for="(project, index) in projects"
                            :key="index"
                            :id="project.id"
                            :name="project.name"
                            :image="project.meta.images.mediumTile"
                            :description="project.meta.description"
                            :funds="project.meta.funds"
                            :developer="product.meta.developer"
                            :showGame="false"
                            class="margin-0 w-100" />
                    </div>
                    <div
                        v-else
                        class="col-12">
                        Nothing could be found. Want to <Button
                            status="plain"
                            @click="$store.commit('application/activeModal', 'comingSoon')">
                            Check for updates
                        </Button>?
                    </div>
                </div>
            </Block>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        'Tags': () => import('@ericmuyser/hyper-ui').then(m => m.Tags),
        'ProjectCard': () => import('@ericmuyser/hyper-ui').then(m => m.ProjectCard)
    },
    props: ['product'],
    computed: {
        projects() {
            return [] //this.$db.funding.projects.find({ 'targetId': { '$eq': this.product.id } }) || []
        }
    }
}
</script>

<style lang="scss" scoped>
    .filter {
        margin-bottom: 10px;
        .input-group {
            border-color: rgba(0, 0, 0, .7);
            border-radius: 5px;
            overflow: hidden;
            .input-group-append {
                margin: 0;
                .input-group-text {
                    border: none;
                }
            }
            input {
                border: none;
                &:active,
                &:focus {
                    border: unset;
                    box-shadow: none;
                }
            }
        }
    }

    .progress-container {
        position: relative;
        padding-left: 20px;
        .progress-bar-vertical {
            width: 5px;
            position: absolute;
            left: 0;
            top: 4px;
            bottom: 4px;
            display: flex;
            align-items: flex-end;
            margin: 0;
            float: left;
            border-radius: 0;
            background: #fff;
            height: auto;
            .progress-bar {
                width: 100%;
                height: 0;
                -webkit-transition: height 0.6s ease;
                -o-transition: height 0.6s ease;
                transition: height 0.6s ease;
            }
        }
        .progress-info{
            font-size: 14px;
            strong{
                display: inline-block;
                width: 100%;
            }
        }
    }

    .project-card__container {
        background: rgba(0, 0, 0, .13);
        padding: 5px;
        border-radius: 5px;
        display: flex;
        align-items: stretch;
        flex-wrap: wrap;
        margin-bottom: 30px;
        border: 1px solid rgba(255, 255, 255, .1);
        h3{
            width: 100%;
            font-size: 21px;
            margin: 5px 10px 10px;
        }
    }
    .project-card__item {
        padding: 15px;
        border-radius: 5px;
        width: calc(100%/3 - 20px);
        margin: 10px;
        img {
            width: 100%;
            height: 170px;
            object-fit: cover;
            border-radius: 5px;
        }
        .description {
            margin: 15px 0;
            font-weight: bold;
            font-size: 16px;
        }
        .item-action{
            display: flex;
            justify-content: flex-end;
            align-items: center;
            flex-wrap: wrap;
            margin-top: 15px;
            a{
                margin-left: 10px;
                font-weight: bold;
                text-transform: uppercase;
            }
        }
    }
</style>

