<template>
    <c-layout navigationKey="project" :showRightPanel="false" :breadcrumbLinks="breadcrumbLinks" class="project-single-page">
        <div class="row" v-if="!project">
            <!-- <div class="col-12">
                Project not found
            </div> -->
            <c-loading :enabled="!project" />
        </div>
        <div class="row" v-if="project">
            <div class="col-12">

                <div class="errors" v-if="errors.length">
                    <strong>Please correct the following error(s):</strong>
                    <ul>
                        <li v-for="error in errors" :key="error">{{ error }}</li>
                    </ul>
                </div>

                <div class="row justify-content-between">
                    <div class="col-12 col-md-4 text-center text-md-left">
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
                                        @click="activateElement('tags')"
                                        v-if="!activeElement['tags']" style="margin-bottom: 20px">Change
                                    Tags <span class="fa fa-edit"></span></button>
                                <div class="form-control-element tag-editor form-control-element--right"
                                        v-if="activeElement['tags']">
                                    <!--<select id="tag-editor" class="form-control" multiple="multiple">-->
                                        <!--<option v-for="(tag, index) in authorTagOptions" :key="index"-->
                                                <!--:selected="project.tags.includes(tag)">{{ tag }}-->
                                        <!--</option>-->
                                    <!--</select>-->

                                    <multiselect v-model="project.tags"
                                                    class="dark-mode"
                                                    :multiple="true"
                                                    :taggable="true"
                                                    :options="authorTagOptions">
                                    </multiselect>
                                    <div
                                        class="form-control-element__box form-control-element__box--pretify bg-secondary"
                                        style="">
                                            <span class="fa fa-check"
                                                    @click="deactivateElement('tags')"></span>
                                    </div>
                                </div>
                            </div>

                            <c-tags :tags="project.tags.map(t => t.value)"
                                            v-if="!editing || !activeElement['tags']"></c-tags>
                        </div>
                    </div>
                    <div class="col-12 col-md-4">
                        <c-badges :icons="project.meta.badges || []" />
                    </div>
                    <div class="col-12 col-md-4">
                        <div class="editor text-right" v-if="editing" style="margin-bottom: 30px">
                            <button class="btn btn-secondary btn--icon btn--icon-stacked btn--icon-right"
                                    @click="activateElement('backgroundImage')"
                                    v-if="!activeElement['backgroundImage']">Change Background Image <span
                                class="fa fa-edit"></span></button>

                            <div class="" v-if="activeElement['backgroundImage']">
                                <div class="form-control-element form-control-element--right">
                                    <input ref="backgroundImage" name="backgroundImage" type="text"
                                            class="form-control" placeholder="Background image URL..."
                                            v-model="project.images.header"/>
                                    <div
                                        class="form-control-element__box form-control-element__box--pretify bg-secondary">
                                            <span class="fa fa-check"
                                                    @click="deactivateElement('backgroundImage')"></span>
                                    </div>
                                </div>
                            </div>
                            <label style="display: block">RECOMMENDED SIZE: 1120 x 524px</label>
                        </div>
                        <div class="editor text-right" v-if="editing">
                            <button class="btn btn-secondary btn--icon btn--icon-stacked btn--icon-right"
                                    @click="activateElement('storeImage')"
                                    v-if="!activeElement['storeImage']">Change Project Image <span
                                class="fa fa-edit"></span></button>

                            <div class="" v-if="activeElement['storeImage']">
                                <div class="form-control-element form-control-element--right">
                                    <input ref="storeImage" name="storeImage" type="text" class="form-control"
                                            placeholder="Background image URL..."
                                            v-model="project.images.header" />
                                    <div
                                        class="form-control-element__box form-control-element__box--pretify bg-secondary">
                                            <span class="fa fa-check"
                                                    @click="deactivateElement('storeImage')"></span>
                                    </div>
                                </div>
                            </div>
                            <label style="display: block">RECOMMENDED SIZE: 2140 x 680px</label>
                        </div>
                    </div>
                </div>
                <c-button status="dark" class="w-100 d-flex d-md-none justify-content-center my-4" size="lg" data-toggle="collapse" data-target="#project_nav" aria-expanded="false" aria-controls="project_nav">
                    Menu
                </c-button>
                <div class="collapse show project_nav" id="project_nav">
                    <ul class="nav nav-tabs margin-bottom-40 justify-content-between">
                        <li class="nav-item" @click="section='overview'">
                            <router-link :to="`/project/${project.id}`" class="nav-link" :class="{ 'active': section === 'overview' }">
                                Overview
                            </router-link>
                        </li>
                        <li class="nav-item" @click="section='community'" v-darklaunch="'COMMUNITY'">
                            <router-link :to="`/project/${project.id}/community`" class="nav-link" :class="{ 'active': section === 'community' }">
                                Community
                                <c-updates-count v-darklaunch="'UPDATE-COUNTER'">
                                    0
                                </c-updates-count>
                            </router-link>
                        </li>
                        <li class="nav-item" @click="section='bounties'">
                            <router-link :to="`/project/${project.id}/bounties`" class="nav-link" :class="{ 'active': section === 'bounties' }">
                                Bounties
                            </router-link>
                        </li>
                        <li class="nav-item" @click="section='updates'">
                            <router-link :to="`/project/${project.id}/updates`" class="nav-link" :class="{ 'active': section === 'updates' }">
                                Updates
                                <c-updates-count v-darklaunch="'UPDATE-COUNTER'">
                                    0
                                </c-updates-count>
                            </router-link>
                        </li>
                        <li class="nav-item" @click="section='milestones'">
                            <router-link :to="`/project/${project.id}/milestones`" class="nav-link" :class="{ 'active': section === 'milestones' }">
                                Milestones
                            </router-link>
                        </li>
                        <li class="nav-item" v-if="editing">
                            <a class="nav-link" :class="{ 'active': section === 'configure' }" @click="section='configure'">Configure</a>
                        </li>
                    </ul>
                </div>

                <div class="row" id="configure" v-if="section === 'configure'" :editing="editing">
                    <c-block title="Campaign">

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

                        <div class="row" v-darklaunch="'GOVERNANCE'">
                            <div class="col-12">
                                Choose your governance system
                            </div>
                            <div class="col-4">
                                <i class="fas first-order" />
                            </div>
                        </div>
                    </c-block>
                </div>

            </div>

            <div class="col-12" id="overview">
                <transition name="page" mode="out-in">
                    <c-project-overview :project="project" v-if="section === 'overview'" :editing="editing" />
                    <c-project-community :project="project" v-if="section === 'community'" :editing="editing" />
                    <c-project-bounties :project="project" v-if="section === 'bounties'" :editing="editing" />
                    <c-project-contributors :project="project" v-if="section === 'contributors'" :editing="editing" />
                    <c-project-discussion :project="project" v-if="section === 'discussion'" :editing="editing" />
                    <c-project-milestones :project="project" v-if="section === 'milestones'" :editing="editing" />
                    <c-project-updates :project="project" v-if="section === 'updates'" :editing="editing" />
                </transition>
            </div>
        </div>
    </c-layout>
</template>

<script>

    import Multiselect from 'vue-multiselect'
    import 'vue-multiselect/dist/vue-multiselect.min.css'

    export default {
        props: {
            id: [String, Number],
            section: {
                type: String,
                default: 'overview'
            }
        },
        components: {
            'c-tags': (resolve) => require(['@/ui/components/tags'], resolve),
            'c-badges': (resolve) => require(['@/ui/components/project/badges'], resolve),
            'c-rating-block': (resolve) => require(['@/ui/components/rating-block'], resolve),
            'c-project-overview': (resolve) => require(['@/ui/screens/project-overview'], resolve),
            'c-project-milestones': (resolve) => require(['@/ui/screens/project-milestones'], resolve),
            'c-project-discussion': (resolve) => require(['@/ui/screens/project-discussion'], resolve),
            'c-project-contributors': (resolve) => require(['@/ui/screens/project-contributors'], resolve),
            'c-project-community': (resolve) => require(['@/ui/screens/project-community'], resolve),
            'c-project-bounties': (resolve) => require(['@/ui/screens/project-bounties'], resolve),
            'c-project-updates': (resolve) => require(['@/ui/screens/project-updates'], resolve),
            'c-updates-count': (resolve) => require(['@/ui/components/project/updates-count'], resolve),
            Multiselect
        },
        data() {
            return {
                errors: [],
                activeElement: {
                    name: false,
                    backgroundImage: false,
                    storeImage: false,
                    tags: false,
                    description: false,
                    content: false
                },
                authorTagOptions: [
                    'game',
                    'mod',
                    'other'
                ],
                crowdfundingProps: ['spent', 'locked', 'overflow']
            }
        },
        methods: {
            showTab(name) {
                $('.nav-tabs a[href="#' + name + '"]').tab('show')
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
                    this.$store.dispatch('application/setEditorMode', 'publishing')

                    // API: CREATE PROJECT
                } else {
                    this.$store.dispatch('funding/updateProject', this.project)
                    this.$store.dispatch('application/setEditorMode', 'publishing')
                }
            },
            checkForm() {
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
            },
            updateSection() {
                if (!this.section) {
                    this.section = this.$route.meta.section
                }
            },
        },
        computed: {
            project() {
                let project = null

                if (this.id === 'new') {
                    project = this.$store.state.funding.defaultProject

                    this.$store.state.application.developerMode = true
                    this.$store.dispatch('application/setEditorMode', 'editing')
                }

                if (!project) {
                    project = this.$store.getters['projects/get'](this.id)
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
            },
            editing() {
                if (!this.$store.state.application.editorMode) {
                    for (let key in this.activeElement) {
                        this.activeElement[key] = false
                    }
                }

                return this.$store.state.application.editorMode === 'editing'
            },
            breadcrumbLinks() {
                const links = [
                    { to: { path: '/' }, title: 'Store' },
                    { to: { path: '/project/' + (this.project ? this.project.id : 0) }, title: (this.project ? this.project.name : 'Loading') }
                ]

                if (this.section === 'community') {
                    links.push({ to: { path: '' }, title: 'Community' })
                } else if (this.section === 'bounties') {
                    links.push({ to: { path: '' }, title: 'Bounties' })
                } else if (this.section === 'updates') {
                    links.push({ to: { path: '' }, title: 'Updates' })
                } else if (this.section === 'milestones') {
                    links.push({ to: { path: '' }, title: 'Milestones' })
                }

                return links
            }
        },
        watch: {
            '$route'() {
                this.updateSection()
            },
            editing() {
                if (this.$store.state.application.editorMode === 'publishing') {
                    this.save()
                }
            },
        },
        created() {
            if (this.id !== 'new') {
                this.$store.dispatch('projects/find', {
                    query: {
                        id: Number(this.id),
                        $eager: 'tags'
                    }
                })
            }

            this.updateSection()
        },
        beforeDestroy() {
            window.document.getElementById('header-bg').style['background-image'] = 'url(/static/img/backgrounds/1.jpg)'
        },
        updated() {
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

            // $('#ise_default').ionRangeSlider({
            //     from: 15
            // })
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
    @media (min-width: 768px){
        .project_nav{
            display: block!important;
        }
    }
    @media (max-width: 767px) {
        .tags{
            justify-content: center;
            margin-bottom: 5px;
        }
        .project_nav{
            ul{
                flex-direction: column;
                li{
                    margin-right: auto;
                }
            }
        }
    }
    .nav-tabs{
        a{
            min-height: 45px;
        }
    }
</style>
