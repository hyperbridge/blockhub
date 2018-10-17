<template>
    <c-layout navigationKey="project" :showRightPanel="false">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12" v-if="!project">
                        Project not found
                    </div>
                    <div class="col-12 tab-content" v-else>
                        <p class="errors" v-if="errors.length">
                            <strong>Please correct the following error(s):</strong>
                            <ul>
                                <li v-for="error in errors" :key="error">{{ error }}</li>
                            </ul>
                        </p>

                        <div class="row justify-content-between">
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
                        </div>

                        <ul class="nav nav-tabs margin-bottom-50 justify-content-between">
                            <li class="nav-item">
                                <router-link :to="`/project/${project.id}`" class="nav-link active">Overview</router-link>
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
                                <router-link :to="`/project/${project.id}/milestones`" class="nav-link">Milestones</router-link>
                            </li>
                            <li class="nav-item" v-if="editing">
                                <a class="nav-link" data-toggle="pill" href="#configure" role="tab"
                                   aria-controls="configure" aria-selected="true">Configure</a>
                            </li>
                        </ul>

                        <div class="row tab-pane fade" id="configure" role="tabpanel" aria-labelledby="configure-tab">
                            <c-block title="Campaign">
                                <form>

                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group row">
                                                <label class="switch switch-sm col-sm-3">
                                                    <label>Minimum Contribution Goal</label>
                                                </label>
                                                <div class="col-sm-9">
                                                    <input type="text" class="form-control" placeholder="Example: 0">
                                                    <span class="form-text">Projects with Overflow Enabled will accept more than the funding goal (over-contribution)</span>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="switch switch-sm col-sm-3">
                                                    <label>Maximum Contribution Goal</label>
                                                </label>
                                                <div class="col-sm-9">

                                                    <input type="text" class="form-control" placeholder="Example: 1000">
                                                    <span class="form-text">Projects with Overflow Enabled will accept more than the funding goal (over-contribution)</span>
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <div class="col-sm-3">
                                                    <label>Support Email</label>
                                                </div>
                                                <div class="col-sm-9">
                                                    <input type="email" class="form-control" placeholder="Example: example@domain.com">
                                                    <span class="form-text">Projects with Overflow Enabled will accept more than the funding goal (over-contribution)</span>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <div class="col-sm-3">
                                                    <label>Twitter Username</label>
                                                </div>
                                                <div class="col-sm-9">
                                                    <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text">@</span>
                                                        </div>
                                                        <input type="text" class="form-control" placeholder="Example: @example">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <div class="col-sm-3">
                                                    <label>Share Text</label>
                                                </div>
                                                <div class="col-sm-9">
                                                    <input type="text" class="form-control" placeholder="Example: Join our crowdfund on BlockHub today!">
                                                    <span class="form-text">Projects with Overflow Enabled will accept more than the funding goal (over-contribution)</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">

                                            <div class="form-group row">
                                                <label class="switch switch-sm col-sm-1">
                                                    <input type="checkbox" name="switch_8" checked="" value="0">
                                                    <span></span>
                                                </label>
                                                <div class="col-sm-11">
                                                    <label>Overflow</label>
                                                    <span class="form-text">Projects with Overflow enabled will accept more than the funding goal (over-contribution)</span>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="switch switch-sm col-sm-1">
                                                    <input type="checkbox" name="switch_8" checked="" value="0">
                                                    <span></span>
                                                </label>
                                                <div class="col-sm-11">
                                                    <label>Timeline</label>
                                                    <span class="form-text">Projects with Timeline enabled will have a current timeline with associated milestones.</span>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="switch switch-sm col-sm-1">
                                                    <input type="checkbox" name="switch_8" checked="" value="0">
                                                    <span></span>
                                                </label>
                                                <div class="col-sm-11">
                                                    <label>Refunds</label>
                                                    <span class="form-text">Projects with Refunds enabled will allow contributors to get partial or full refund if the project is deemed not successful (by community vote).</span>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="switch switch-sm col-sm-1">
                                                    <input type="checkbox" name="switch_8" checked="" value="0">
                                                    <span></span>
                                                </label>
                                                <div class="col-sm-11">
                                                    <label>Curation</label>
                                                    <span class="form-text">Projects with Curation enabled will allow the community to curate the project and earn reputation for their actions.</span>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="switch switch-sm col-sm-1">
                                                </label>
                                                <div class="col-sm-11">
                                                    <input type="text" id="ise_default" name="ise_default" value="">
                                                    <label>Contribution Period</label>
                                                    <span class="form-text">Projects with Curation Enabled will allow the community to curate the project and earn reputation for their actions.</span>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="switch switch-sm col-sm-1">
                                                    <input type="checkbox" name="switch_8" checked="" value="0">
                                                    <span></span>
                                                </label>
                                                <div class="col-sm-11">
                                                    <label>No Contribution Period</label>
                                                    <span class="form-text">Projects with No Contribution Period will be open for contribution until the project is completed, allowing for contributions during the project.</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </c-block>
                        </div>

                        <div class="row tab-pane fade active show" id="overview" role="tabpanel"
                             aria-labelledby="overview-tab">
                            <div class="col-md-7 col-xl-8">
                                <c-screen-gallery :items="project.images.preview"></c-screen-gallery>

                                <div class="editor-container">
                                    <div class="editor" v-if="editing">
                                        <button class="btn btn-secondary btn--icon btn--icon-stacked btn--icon-right"
                                                @click="activateElement('description')"
                                                v-if="!activeElement['description']">Change Description <span
                                            class="fa fa-edit"></span></button>

                                        <div class="form-control-element form-control-element--right"
                                             v-if="activeElement['description']">
                                            <input ref="description" name="name" type="text" class="form-control"
                                                   placeholder="Project description..." v-model="project.description"/>
                                            <div
                                                class="form-control-element__box form-control-element__box--pretify bg-secondary">
                                                <span class="fa fa-check"
                                                      @click="deactivateElement('description')"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <p class="project__description">{{ project.description }}</p>
                                </div>

                                <div class="main-content" v-html="project.content" v-if="!editing">
                                    {{ project.content }}
                                </div>

                                <div class="content-editor" v-if="editing">
                                    <div id="summernote" v-html="project.content">{{ project.content }}</div>
                                </div>
                            </div>
                            <div class="col-md-5 col-xl-4">

                                <div class="card invert" v-if="project.funding">
                                    <div class="card-body">
                                        <a class="nav-link editor-container editor-container--style-2"
                                           href="javascript:;" v-if="editing && !activeElement['campaign']"
                                           @click="showTab('configure')">
                                            <i class="fas fa-cog"></i>
                                            <span>Configure Campaign</span>
                                        </a>
                                        <h2 class="title">Crowndfunding campaign</h2>
                                        <div class="project">
                                            <div class="project__progress">
                                                <div v-for="(stage, index) in project.funding.stages" :key="index"
                                                     :class="stage.status"
                                                     class="project__progress-stage">
                                                    <i class="fas fa-check" v-if="stage.status === 'done'"></i>
                                                    <i class="fas fa-clock" v-if="stage.status === 'in_progress'"></i>
                                                    <span class="stage_line"></span>
                                                    <span class="name">{{ stage.text}}</span>
                                                </div>
                                            </div>
                                            <div class="project__info">
                                                <div class="funded">
                                                    <div class="text">114% Funded</div>
                                                    {{ project.funding.funded_amount }} USD
                                                </div>
                                                <div class="goal">
                                                    <div class="text">Goal</div>
                                                    {{ project.funding.goal_amount }} USD
                                                </div>
                                                <div
                                                    v-for="(prop, index) in crowdfunding_props"
                                                    :key="index"
                                                    :class="prop"
                                                >
                                                    <div class="progress-bar-vertical">
                                                        <c-progress-bar
                                                            :values="{
                                                                reached: project.funding[prop + '_amount'],
                                                                goal: project.funding.goal_amount
                                                            }"
                                                            direction="vertical"
                                                        />
                                                    </div>
                                                    <div>
                                                        <p class="text"><strong>{{ prop | upperFirstChar }}</strong></p>
                                                        {{ project.funding[prop + '_amount'] }} USD
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="project__action">
                                                <c-button status="share" swap_direction>Share</c-button>
                                                <c-button status="info" icon="check" swap_direction>Follow</c-button>
                                                <c-button status="support" swap_direction>Support</c-button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card invert milestones" v-if="project.milestones">
                                    <div class="card-body">
                                        <a href="#" class="editor-container editor-container--style-2"
                                           v-if="editing && !activeElement['milestones']">
                                            <i class="fas fa-cog"></i>
                                            <span>Set Up Milestones</span>
                                        </a>
                                        <h2 class="title">Milestones</h2>
                                        <ul class="milestones__list">
                                            <li v-for="(item, index) in project.milestones.items"
                                                v-bind:class="{ done: item.status === 'done' }" :key="index">
                                                <div class="step_number" v-if="item.status === 'done'">
                                                    <i class="fas fa-check"></i>
                                                </div>
                                                <div class="step_number" v-else>
                                                    {{ item.step_number }}
                                                </div>
                                                <div class="text">
                                                    {{ item.title }}
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <c-community-spotlight :discussions="project.community.discussions"
                                                       :community_url="`/#/project/${project.id}`" :editing="editing"
                                                       :activeElement="activeElement['milestones']"
                                                        class="margin-bottom-30"/>

                                <c-block title="Contribute" class="margin-bottom-30">
                                    <c-contribute-form @click="showContributeModal" />
                                </c-block>
                                
                                <c-contribute-pledge @click="showContributeModal" v-for="(pledge, index) in project.pledges" :key="index" :pledge="pledge" />

                            </div>
                        </div>

                    </div>
                </div>
            </div>
    </c-layout>
</template>

<script>
    import Vue from 'vue'

    const updateProject = function () {
        let project = null

        if (this.id === 'new') {
            project = this.$store.state.funding.default_project
        }

        if (this.$store.state.funding.projects && this.$store.state.funding.projects[this.id]) {
            project = this.$store.state.funding.projects[this.id]
        }

        if (project && project.images && project.images.header) {
            window.document.getElementById('header-bg').style['background-image'] = 'url(' + project.images.header + ')'
        }

        if (project && !project.community) {
            project.community = {
                discussions: []
            }
        }

        return project
    }

    export default {
        props: ['id'],
        components: {
            'c-game-plan': (resolve) => require(['@/ui/components/game-plans/plan'], resolve),
            'c-screen-gallery': (resolve) => require(['@/ui/components/screen-gallery/gallery'], resolve),
            'c-tags-list': (resolve) => require(['@/ui/components/tags'], resolve),
            'c-rating-block': (resolve) => require(['@/ui/components/rating-block'], resolve),
            'c-frequently-traded-assets': (resolve) => require(['@/ui/components/frequently-traded-assets'], resolve),
            'c-community-spotlight': (resolve) => require(['@/ui/components/community-spotlight'], resolve),
            'c-heading-bar': (resolve) => require(['@/ui/components/heading-bar'], resolve),
            'c-progress-bar': (resolve) => require(['@/ui/components/progress-bar'], resolve),
            'c-contribute-form': (resolve) => require(['@/ui/components/contribute/form.vue'], resolve),
            'c-contribute-pledge': (resolve) => require(['@/ui/components/contribute/pledge.vue'], resolve),
            'c-badges': (resolve) => require(['@/ui/components/project/badges.vue'], resolve)
        },
        data() {
            return {
                errors: [],
                activeElement: {
                    name: false,
                    background_image: false,
                    store_image: false,
                    developer_tags: false,
                    description: false,
                    content: false
                },
                author_tag_options: [
                    'game',
                    'mod',
                    'other'
                ],
                crowdfunding_props: ['spent', 'locked', 'overflow']
            }
        },
        methods: {
            showTab(name) {
                $('.nav-tabs a[href="#' + name + '"]').tab('show')
            },
            showContributeModal() {
                this.$store.dispatch('application/activateModal', 'send-funds')
            },
            deactivateElement(key) {
                this.activeElement[key] = false
            },
            activateElement(key) {
                for (let key in this.activeElement) {
                    this.activeElement[key] = false
                }

                this.activeElement[key] = true

                setTimeout(() => {
                    if (this.$refs[key])
                        this.$refs[key].focus()
                }, 10)
            },
            save() {
                if (!this.checkForm()) {
                    this.$store.dispatch('application/setEditorMode', 'editing')

                    return
                }

                if (this.id === 'new') {
                    this.$store.commit('funding/createProject', this.project)
                    this.$store.dispatch('application/setEditorMode', 'viewing')
                } else {
                    this.$store.dispatch('funding/updateProject', this.project)
                    this.$store.dispatch('application/setEditorMode', 'viewing')
                }
            },
            checkForm(e) {
                this.errors = []

                if (this.project.name && this.project.description) {
                    return true
                }

                if (!this.project.name) {
                    this.errors.push('Project name required.')
                }
                if (!this.project.description) {
                    this.errors.push('Project description required.')
                }
            }
        },
        computed: {
            project: updateProject,
            editing() {
                if (!this.$store.state.application.editor_mode) {
                    for (let key in this.activeElement) {
                        this.activeElement[key] = false
                    }
                }

                return this.$store.state.application.editor_mode === 'editing'
            }
        },
        watch: {
            editing(newVal, oldVal) {
                if (this.$store.state.application.editor_mode === 'publishing') {
                    this.save()
                }
            }
        },
        created() {
            //this.$store.dispatch('application/setEditorMode', 'editing')
        },
        beforeDestroy() {
            window.document.getElementById('header-bg').style['background-image'] = 'url(/static/img/backgrounds/1.jpg)'
        },
        updated() {
            $('#tag-editor').select2()
                .on('select2:select', (e) => {
                    let data = e.params.data

                    if (!this.project.developer_tags.includes(data.text)) {
                        this.project.developer_tags.push(data.text)
                    }

                    Vue.set(this.project, 'developer_tags', this.project.developer_tags)
                })
                .on('select2:unselect', (e) => {
                    let data = e.params.data

                    this.project.developer_tags = this.project.developer_tags.filter(e => e !== data.text)

                    Vue.set(this.project, 'developer_tags', this.project.developer_tags)
                })

            $('#summernote').summernote({
                placeholder: 'Type in your text',
                tabsize: 2,
                height: 300,
                callbacks: {
                    onBlur: () => {
                        Vue.set(this.project, 'content', $('#summernote').summernote('code'))
                    }
                }
            })

            $('#ise_default').ionRangeSlider({
                from: 15
            })
        }
    }
</script>


<style lang="scss">
    .content-editor .note-editor.note-frame .note-editing-area .note-editable {
        background-color: transparent;
        color: inherit;
    }

    .content-editor .card {
        background: rgba(0, 0, 0, 0.13);
        color: #dfdfe9;
        border: 1px solid rgba(70, 70, 70, 0.5);
    }

    .content-editor .note-editor.note-frame .note-statusbar {
        background: transparent;
        border: 0 none;
    }

    #content > .container-fluid {
        padding-top: 0;
    }
</style>

<style lang="scss" scoped>
    .page__content > .content {
        width: calc(100% - 250px);
        padding-top: 0;
        margin: 0 0 0 auto;
    }

    .tab-content > .row.active {
        display: flex;
    }

    .errors {
        margin-bottom: 60px;
    }

    .form-group label {
        font-size: 18px;
        color: #C6C6D6;
    }

    .form-group .form-text {
        font-size: 14px;
        color: #A2A3BE;
    }

    .switch.switch-sm {
        margin: 0;
    }

    .editor {
        .btn, input {
            border-color: #1b1c2b;
            background: #1B1C2B;
            border-radius: 6px;
            box-shadow: 1px 1px 0px #101010;
            font-size: 17px;
            padding-top: 8px;

            span {
                font-size: 17px;
            }
        }
        .form-control-element .form-control-element__box--pretify {
            line-height: 11px;
        }
    }

    .editor.editor--offset-above {
        position: absolute;
        top: -45px;
        left: -5px;
        z-index: 10;
        text-align: right;
    }

    .editor-container {
        position: relative;
    }

    .editor-container--style-2 {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
        background: rgba(0, 0, 0, 0.4);
        width: 100%;
        height: 100%;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-flow: column;
        text-align: center;
        font-weight: bold;
        color: #fff;

        i {
            font-size: 50px;
            margin-bottom: 20px;
        }

        span {
            font-size: 18px;
        }

        &:hover {
            text-decoration: none;
        }
    }

    .editor-container--style-2 ~ * {
        opacity: 0.3;
    }

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
        img {
            max-width: 100%;
            height: auto;
        }
        &.with_bg {
            color: #1C2032;
            background: #FEEBCE;
        }
    }

    .project__description {
        padding: 15px;
        font-size: 16px;
    }

    .project__progress {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        flex-wrap: nowrap;
        overflow: hidden;
        margin: 10px -6%;
    }

    .project__progress-stage {
        width: 50%;
        text-align: center;
        span {
            display: inline-block;
            width: 100%;
            position: relative;
            text-transform: uppercase;
            font-weight: bold;
            overflow: hidden;
            &.stage_line {
                background: #3D691F;
                height: 15px;
                float: left;
            }
            &.name {
                padding-top: 15px;
                &:after {
                    position: absolute;
                    top: 5px;
                    width: 2px;
                    content: "";
                    height: 8px;
                    left: calc(50% - 1px);
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

    .project__info {
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
            display: flex;
            .text {
                margin-bottom: 4px;
            }
            .progress-bar-vertical {
                width: 7px;
                min-height: calc(100% - 7px);
                display: flex;
                border-radius: 4px;
                align-items: flex-end;
                margin-right: 8px;
                border-radius: 4px;
                background-color: rgba(255,255,255,.3);
                overflow: hidden;
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

    .project__action {
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
        margin-top: 15px;
        a {
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
            i {
                margin-right: 5px;
                font-size: 16px;
            }
            &.follow_link {
                background: #436CC9;
                &:hover {
                    background: #314e92;
                }
            }
            &.share_link {
                background: #43B4C9;
                &:hover {
                    background: #348b9b;
                }
            }
            &.support_link {
                background: #43C981;
                &:hover {
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
                i{
                    color: #5EA72B;
                }
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
