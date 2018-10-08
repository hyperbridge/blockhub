<template>
    <c-layout navigationKey="project">
        <div class="content" id="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12" v-if="!project">
                        Project not found
                    </div>
                </div>
                <div class="row" v-if="project">
                    <div class="col-lg-4">
                        <div class="editor-container">
                            <div class="editor" v-if="editing">
                                <button class="btn btn-secondary btn--icon btn--icon-stacked btn--icon-right"
                                        @click="activateElement('name')" v-if="!activeElement['name']">Change
                                    Project Name <span class="fa fa-edit"></span></button>

                                <div class="form-control-element form-control-element--right"
                                     v-if="activeElement['name']">
                                    <input ref="name" name="name" type="text" class="form-control"
                                           placeholder="Project name..." v-model="project.name"/>
                                    <div
                                        class="form-control-element__box form-control-element__box--pretify bg-secondary">
                                        <span class="fa fa-check" @click="deactivateElement('name')"></span>
                                    </div>
                                </div>
                            </div>
                            <h1 class="title margin-top-10 margin-bottom-15">{{ project.name }}</h1>
                        </div>

                        <div class="editor-container">
                            <div class="editor" v-if="editing">
                                <button class="btn btn-secondary btn--icon btn--icon-stacked btn--icon-right"
                                        @click="activateElement('developer_tags')"
                                        v-if="!activeElement['developer_tags']" style="margin-bottom: 20px">Change
                                    Tags <span class="fa fa-edit"></span></button>
                                <div class="form-control-element form-control-element--right"
                                     v-if="activeElement['developer_tags']">
                                    <select id="tag-editor" class="form-control" multiple="multiple">
                                        <option v-for="(tag, index) in author_tag_options" :key="index"
                                                :selected="project.developer_tags.includes(tag)">{{ tag }}
                                        </option>
                                    </select>
                                    <div
                                        class="form-control-element__box form-control-element__box--pretify bg-secondary"
                                        style="">
                                                <span class="fa fa-check"
                                                      @click="deactivateElement('developer_tags')"></span>
                                    </div>
                                </div>
                            </div>
                            <c-tags-list :tags="project.developer_tags"
                                         v-if="!editing || !activeElement['developer_tags']"></c-tags-list>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <c-badges :icons="['trophy','gem']" />
                    </div>
                    <div class="col-lg-4">
                        <div class="editor text-right" v-if="editing" style="margin-bottom: 30px">
                            <button class="btn btn-secondary btn--icon btn--icon-stacked btn--icon-right"
                                    @click="activateElement('background_image')"
                                    v-if="!activeElement['background_image']">Change Background Image <span
                                class="fa fa-edit"></span></button>

                            <div class="" v-if="activeElement['background_image']">
                                <div class="form-control-element form-control-element--right">
                                    <input ref="background_image" name="background_image" type="text"
                                           class="form-control" placeholder="Background image URL..."
                                           v-model="project.images.header"/>
                                    <div
                                        class="form-control-element__box form-control-element__box--pretify bg-secondary">
                                                <span class="fa fa-check"
                                                      @click="deactivateElement('background_image')"></span>
                                    </div>
                                </div>
                            </div>
                            <label style="display: block">RECOMMENDED SIZE: 1120 x 524px</label>
                        </div>
                        <div class="editor text-right" v-if="editing">
                            <button class="btn btn-secondary btn--icon btn--icon-stacked btn--icon-right"
                                    @click="activateElement('store_image')"
                                    v-if="!activeElement['store_image']">Change Store Image <span
                                class="fa fa-edit"></span></button>

                            <div class="" v-if="activeElement['store_image']">
                                <div class="form-control-element form-control-element--right">
                                    <input ref="store_image" name="store_image" type="text" class="form-control"
                                           placeholder="Background image URL..."
                                           v-model="project.images.header"/>
                                    <div
                                        class="form-control-element__box form-control-element__box--pretify bg-secondary">
                                                <span class="fa fa-check"
                                                      @click="deactivateElement('store_image')"></span>
                                    </div>
                                </div>
                            </div>
                            <label style="display: block">RECOMMENDED SIZE: 2140 x 680px</label>
                        </div>
                    </div>
                    <div class="col-12">

                        <ul class="nav nav-tabs margin-bottom-50 justify-content-between">
                            <li class="nav-item">
                                <router-link :to="`/project/${project.id}`" class="nav-link">Overview</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="`/project/${project.id}/community`" class="nav-link">Community</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="`/project/${project.id}/bounties`" class="nav-link">Bounties</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="`/project/${project.id}/updates`" class="nav-link">Updates</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="`/project/${project.id}/milestones`" class="nav-link active">Milestones</router-link>
                            </li>
                        </ul>
                        <div class="timeline-blk position-relative">
                            <div class="progress main_timeline" style="height: 15px;">
                                <c-progress-bar :percentages="project.milestones.overall_progress"/>
                            </div>
                            <div class="period-container" v-if="milestones">
                                <div v-for="(milestone, index) in milestones" :key="index" class="period">
                                    <div class="number">{{ milestone.step_number }}</div>
                                    <div class="info">
                                        <div class="title">
                                            {{ milestone.short_description }}
                                        </div>
                                        <div class="progress_line">
                                            <i class="fas fa-clock icon"></i>
                                            <c-progress-bar :percentages="milestone.progress['percent_days']"/>
                                            {{ milestone.progress['days_left'] }} days left
                                        </div>
                                        <div class="progress_line">
                                            <i class="fas fa-check icon"></i>
                                            <c-progress-bar :percentages="milestone.progress['percent_done']"/>
                                            {{ milestone.progress['percent_done'] }}% Done
                                        </div>
                                        <div class="progress_line">
                                            <i class="fas fa-dollar-sign icon"></i>
                                            <c-progress-bar :percentages="milestone.progress['percent_spent']"/>
                                            {{ milestone.progress['percent_spent'] }}% Spent
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="milestones-list">
                            <c-milestone
                                v-for="(milestone, index) in milestones"
                                :key="index"
                                :milestone="milestone"
                            />
                        </div>
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
            window.document.getElementById('header-bg').style['background-image'] = 'url(' + project.images.header + ')'

        return project
    }
    export default {
        props: ['id'],
        components: {
            'c-layout': (resolve) => require(['@/ui/layouts/default'], resolve),
            'c-tags-list': (resolve) => require(['@/ui/components/tags'], resolve),
            'c-milestone': (resolve) => require(['@/ui/components/project/milestone'], resolve),
            'c-progress-bar': (resolve) => require(['@/ui/components/progress-bar'], resolve),
            'c-badges': (resolve) => require(['@/ui/components/project/badges.vue'], resolve)
        },
        computed: {
            project: updateProject,
            milestones(){
                let arr = this.project.milestones.items;
                return arr.sort() ;
            }
        },
        beforeDestroy() {
            window.document.getElementById('header-bg').style['background-image'] = 'url(/static/img/backgrounds/1.jpg)'
        }
    }
</script>

<style lang="scss" scoped>
    .timeline-blk {
        margin-bottom: 50px;
        .main_timeline {
            position: absolute;
            top: 20px;
            left: 0px;
            right: 0px;
            border-radius: 10px;
            background: #ffffff;
            z-index: 10;
        }
        .period-container {
            display: flex;
            flex-wrap: nowrap;
            justify-content: space-between;
            margin: 0 -20px;
            position: relative;
            z-index: 7;
            .period {
                width: 50%;
                display: inline-block;
                position: relative;
                text-align: center;
                margin: 0 20px;
                z-index: 9;
                .number {
                    font-size: 22px;
                    font-weight: bold;
                    margin-bottom: 20px;
                    display: inline-block;
                    width: 100%;
                    float: left;
                }
                .info {
                    background: #28283d;
                    border-radius: 5px;
                    padding: 20px;
                    box-shadow: 0 3px 6px rgba(0, 0, 0, .16);
                    margin-top: 40px;
                    position: relative;
                    display: inline-block;
                    width: 100%;
                    float: left;
                    &:before {
                        position: absolute;
                        left: 50%;
                        top: -40px;
                        background: #fff;
                        width: 1px;
                        height: 40px;
                        display: inline-block;
                        content: "";
                        z-index: 8;
                    }
                    .title {
                        font-weight: bold;
                        text-align: left;
                        margin-bottom: 20px;
                        font-size: 15px;
                    }
                    .progress_line {
                        display: flex;
                        align-items: center;
                        &:not(:last-child) {
                            margin-bottom: 10px;
                        }
                        .icon {
                            min-width: 20px;
                            font-size: 20px;
                            margin-right: 15px;
                        }
                        .progress-bar {
                            margin-right: 15px;
                        }
                    }
                }
            }
        }
    }
</style>
