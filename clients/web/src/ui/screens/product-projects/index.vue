<template>
    <div class="row">
        <div class="col-12">
            <div class="filter d-flex justify-content-between">
                <div class="form-group">
                    <div class="input-group input-group-sm">
                        <input type="text" class="form-control" placeholder="Search" aria-label="Search">
                        <div class="input-group-append">
                            <span class="input-group-text">
                                <i class="fas fa-search"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div>
                    <c-button status="info" iconHide href="#/project/new" v-if="developerMode">Propose Idea</c-button>
                    <c-button status="info" iconHide @click="$store.commit('application/activateModal', 'propose-idea')" v-if="!developerMode">Propose Idea</c-button>
                </div>
            </div>
        </div>

        <div class="col-12">
            <c-block title="Top 3 Ideas" :noGutter="true" :bgGradient="true" :onlyContentBg="true">
                <div class="row">
                    <div class="col-12 col-md-6 col-lg-3" v-if="projects.length">
                        <c-project-card
                            v-for="(project, index) in projects"
                            :key="index"
                            :image="project.images.mediumTile"
                            :description="project.description"
                            :funds="project.funds"
                            :name="project.name"
                            :developer="product.developer"
                            :id="project.id"
                            :showGame="false"
                            class="margin-0 w-100"
                        />
                    </div>
                    <div class="col-12" v-else>
                        Nothing could be found. Want to <c-button status="plain" @click="$store.commit('application/activateModal', 'coming-soon')">Check for updates</c-button>?
                    </div>
                </div>
            </c-block>
        </div>
    </div>
</template>

<script>
export default {
    props: ['product'],
    components: {
        'c-tags-list': (resolve) => require(['@/ui/components/tags'], resolve),
        'c-project-card': (resolve) => require(['@/ui/components/project/card'], resolve)
    },
    computed: {
        projects() {
            return BlockHub.DB.funding.projects.find({ 'targetId': { '$eq': this.product.id } }) || []
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

