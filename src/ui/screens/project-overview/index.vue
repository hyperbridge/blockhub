<template>
    <c-layout navigationKey="project-navigation">
        <div class="content" id="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12" v-if="!project">
                        Project not found
                    </div>
                    <div class="col-12" v-if="project">
                        <h1 class="title margin-top-10 margin-bottom-15">{{ project.name }}</h1>

                        <c-tags-list :tags="project.author_tags"></c-tags-list>

                        <ul class="nav nav-tabs margin-bottom-50 justify-content-between">
                            <li class="nav-item">
                                <a class="nav-link active" :href="`/#/project/${project.id}`">Overview</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" :href="`/#/project/${project.id}/community`">Community</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" :href="`/#/project/${project.id}/bounties`">Bounties</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" :href="`/#/project/${project.id}/suggestions`">Suggestions</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" :href="`/#/project/${project.id}/updates`">Updates</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" :href="`/#/project/${project.id}/milestones`">Milestones</a>
                            </li>
                        </ul>

                        <div class="row">
                            <div class="col-7">
                                <c-screen-gallery></c-screen-gallery>

                                <div class="main-content" v-html="project.content">
                                    {{ project.content }}
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="card invert" v-if="project.funding">
                                    <div class="card-body">
                                        <h2 class="title">Crowndfunding campaign</h2>
                                        <div class="crowndfunding-campaign">
                                            <div class="crowndfunding-campaign__progress">
                                                <div v-for="(stage, index) in project.funding.stages" :key="index"
                                                     :class="stage.status"
                                                     class="crowndfunding-campaign__progress-stage">
                                                    <i class="fas fa-check" v-if="stage.status === 'done'"></i>
                                                    <i class="fas fa-clock" v-if="stage.status === 'in_progress'"></i>
                                                    <span class="stage_line"></span>
                                                    <span class="name">{{ stage.text}}</span>
                                                </div>
                                            </div>
                                            <div class="crowndfunding-campaign__info">
                                                <div class="funded">
                                                    <div class="text">114% Funded</div>
                                                    {{ project.funding.funded_amount }} USD
                                                </div>
                                                <div class="goal">
                                                    <div class="text">Goal</div>
                                                    {{ project.funding.goal_amount }} USD
                                                </div>
                                                <div class="spent">
                                                    <div class="progress progress-bar-vertical">
                                                        <div class="progress-bar bg-success" role="progressbar"
                                                             :aria-valuenow="project.funding.spent_amount['percent']"
                                                             aria-valuemin="0" aria-valuemax="100"
                                                             :style="{ height: project.funding.spent_amount['percent'] + '%' }">
                                                            <span class="sr-only">{{ project.funding.spent_amount['percent'] }}% Complete</span>
                                                        </div>
                                                    </div>
                                                    <div class="text">Spent</div>
                                                    {{ project.funding.spent_amount['amount'] }} USD
                                                </div>
                                                <div class="locked">
                                                    <div class="progress progress-bar-vertical">
                                                        <div class="progress-bar bg-success" role="progressbar"
                                                             :aria-valuenow="project.funding.locked_amount['percent']"
                                                             aria-valuemin="0" aria-valuemax="100"
                                                             :style="{ height: project.funding.locked_amount['percent'] + '%' }">
                                                            <span class="sr-only">{{ project.funding.locked_amount['percent'] }}% Complete</span>
                                                        </div>
                                                    </div>
                                                    <div class="text">Locked</div>
                                                    {{ project.funding.locked_amount['amount'] }} USD
                                                </div>
                                                <div class="overflow">
                                                    <div class="progress progress-bar-vertical">
                                                        <div class="progress-bar bg-success" role="progressbar"
                                                             :aria-valuenow="project.funding.overflow_amount['percent']"
                                                             aria-valuemin="0" aria-valuemax="100"
                                                             :style="{ height: project.funding.overflow_amount['percent'] + '%' }">
                                                            <span class="sr-only">{{ project.funding.overflow_amount['percent'] }}% Complete</span>
                                                        </div>
                                                    </div>
                                                    <div class="text">Overflow</div>
                                                    {{ project.funding.overflow_amount['amount'] }} USD
                                                </div>
                                            </div>
                                            <div class="crowndfunding-campaign__action">
                                                <a href="#3" class="follow_link">
                                                    <i class="fas fa-check"></i>
                                                    Follow
                                                </a>
                                                <a href="#3" class="share_link">
                                                    <i class="fas fa-share"></i>
                                                    Share
                                                </a>
                                                <a href="#3" class="support_link">
                                                    <i class="fas fa-life-ring"></i>
                                                    Support
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card invert milestones" v-if="project.milestones">
                                    <div class="card-body">
                                        <h2 class="title">Milestones</h2>
                                        <ul class="milestones__list">
                                            <li v-for="(item, index) in project.milestones"
                                                v-bind:class="{ done: item.status }" :key="index">
                                                <div class="step_number" v-if="item.step_number">
                                                    {{ item.step_number }}
                                                </div>
                                                <div class="status_done" v-else>
                                                    <i class="fas fa-check"></i>
                                                </div>
                                                <div class="text">
                                                    {{ item.text }}
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <c-rating-block :items="project.rating" :parent_url="`/#/project/${project.id}`" />

                                <c-frequently-traded-assets :items="project.frequently_traded_assets" :assets_url="`/#/project/${project.id}`" />

                                <c-community-spotlight :discussions="project.community.discussions" :community_url="`/#/project/${project.id}`"/>

                            </div>
                        </div>

                        <input type="text" name="name" v-model.lazy="project.name"/>

                        <button class="btn" @click="save()">Save</button>
                    </div>
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
    const updateProject = function () {
        if (!this.$store.state.funding.projects)
            return

        const project = this.$store.state.funding.projects[this.id]

        if (!project)
            return

        if (project.images && project.images.header)
            window.document.body.style['background-image'] = 'url(' + project.images.header + ')'

        return project
    }

    export default {
        props: ['id'],
        components: {
            'c-layout': () => import('@/ui/layouts/default'),
            'c-plan-list': () => import('@/ui/components/game-plans/list'),
            'c-screen-gallery': () => import('@/ui/components/screen-gallery/gallery'),
            'c-tags-list': () => import('@/ui/components/product-tags'),
            'c-rating-block': () => import('@/ui/components/rating-block'),
            'c-frequently-traded-assets': () => import('@/ui/components/frequently-traded-assets'),
            'c-community-spotlight': () => import('@/ui/components/community-spotlight')
        },
        methods: {
            save() {
                this.$store.dispatch('funding/updateProject', this.product)
            }
        },
        computed: {
            project: updateProject
        },
        mounted: updateProject,
        created: updateProject,
        beforeDestroy() {
            window.document.body.style['background-image'] = 'url(/static/img/products/default.png)'
        }
    }
</script>

<style lang="scss" scoped>
    .main-content {
        margin-top: 15px;
        padding: 15px;
        border-radius: 5px;
        border: 1px solid rgba(255, 255, 255, 0.07);
        overflow: hidden;
        color: #C6C6D6;
        font-size: 14px;
        h2 {
            font-size: 21px;
            margin-bottom: 30px;
        }
        p {
            margin-bottom: 20px;
        }
        img{
            max-width: 100%;
            height: auto;
        }
        &.with_bg{
            color: #1C2032;
            background: #FEEBCE;
        }
    }

    .crowndfunding-campaign__progress {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        flex-wrap: nowrap;
        overflow: hidden;
        margin: 10px -6%;
    }

    .crowndfunding-campaign__progress-stage {
        width: 50%;
        text-align: center;
        span {
            display: inline-block;
            width: 100%;
            position: relative;
            text-transform: uppercase;
            font-weight: bold;
            overflow: hidden;
            &.stage_line{
                background: #3D691F;
                height: 15px;
                float: left;
            }
            &.name{
                padding-top: 15px;
                &:after {
                    position: absolute;
                    top: 5px;
                    width: 2px;
                    content: "";
                    height: 8px;
                    left: calc( 50% - 1px );
                    display: inline-block;
                    background: #fff;
                }
            }
        }
        i {
            margin-bottom: 7px;
            font-size: 10px;
            display: block;
            width: 100%;
        }
        &:first-child {
            .stage_line {
                border-radius: 5px 0 0 5px;
                width: 65%;
                float: right;
            }
            &.in_progress {
                .stage_line {
                    &:after {
                        left: 25%;
                    }
                }
            }
        }
        &:last-child {
            .stage_line {
                border-radius: 0 5px 5px 0;
                width: 65%;
                float: left;
            }
            &.in_progress {
                .stage_line {
                    &:after {
                        left: 75%;
                    }
                }
            }
        }
        &.done {
            span {
                &:before {
                    background: #3D691F;
                }
            }
            i {
                color: #3D691F;
            }
        }
        &.in_progress {
            .stage_line {
                &:after {
                    position: absolute;
                    background: #5EA72B;
                    height: 100%;
                    left: 0%;
                    right: 0;
                    content: "";
                    display: inline-block;
                }
            }
            i {
                color: #FADC72;
            }
        }
        &.awaiting {
            .stage_line {
                background: #5EA72B;
            }
        }
    }

    .crowndfunding-campaign__info {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: 10px 0;
        .funded,
        .goal {
            background: rgba(0, 0, 0, 0.16);
            border-radius: 5px;
            width: calc(50% - 5px);
            padding: 10px;
            color: #fff;
            font-size: 18px;
            .text {
                font-size: 14px;
                font-weight: bold;
                margin-bottom: 5px;
                text-transform: uppercase;
            }
        }
        .spent,
        .locked,
        .overflow {
            width: 32%;
            margin-top: 10px;
            font-size: 15px;
            position: relative;
            .text {
                font-weight: bold;
                margin-bottom: 4px;
            }
            .progress-bar-vertical {
                width: 5px;
                min-height: calc( 100% - 7px );
                display: flex;
                align-items: flex-end;
                margin: 4px 8px 3px 0;
                float: left;
                border-radius: 0;
                background: #fff;
                .progress-bar {
                    width: 100%;
                    height: 0;
                    -webkit-transition: height 0.6s ease;
                    -o-transition: height 0.6s ease;
                    transition: height 0.6s ease;
                }
            }
        }
    }

    .crowndfunding-campaign__action{
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
        margin-top: 15px;
        a{
            width: 31%;
            border-radius: 5px;
            color: #fff;
            font-size: 13px;
            text-transform: uppercase;
            text-align: center;
            box-shadow: 0 1px 3px rgba(0, 0, 0, .16);
            line-height: 24px;
            font-weight: bold;
            text-decoration: none;
            i{
                margin-right: 5px;
                font-size: 16px;
            }
            &.follow_link{
                background: #436CC9;
                &:hover{
                    background: #314e92;
                }
            }
            &.share_link{
                background: #43B4C9;
                &:hover{
                    background: #348b9b;
                }
            }
            &.support_link{
                background: #43C981;
                &:hover{
                    background: #2e8b59;
                }
            }
        }
    }

    .card {
        background: transparent;
        border: 0 none;
    }

    .milestones__list {
        padding: 0;
        margin: 0;
        li {
            list-style: none;
            font-size: 14px;
            font-weight: bold;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 5px 5px 5px 0;
            border-radius: 5px;
            box-shadow: 0 3px 6px rgba(0, 0, 0, .16);
            background: #27283E;
            margin-bottom: 10px;
            &:last-child {
                margin-bottom: 0;
            }
            &.done {
                border: 2px solid #5EA72B;
            }
            .text {
                flex-basis: calc(100% - 40px);
                text-align: left;
            }
            .step_number {
                flex-basis: 40px;
                text-align: center;
                font-size: 22px;
            }
            .status_done {
                flex-basis: 40px;
                text-align: center;
                font-size: 22px;
                color: #5EA72B;
            }
        }
    }

</style>
