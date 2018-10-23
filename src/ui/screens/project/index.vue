<template>
    <c-layout navigationKey="project" :showRightPanel="false" :breadcrumbLinks="breadcrumbLinks">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12" v-if="!project">
                    Project not found
                </div>
                <div class="col-12 tab-content" v-else>
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
                        <div class="col-12 col-md-4">
                            <c-badges :icons="['trophy','gem']" />
                        </div>
                        <div class="col-12 col-md-4">
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
                                        v-if="!activeElement['store_image']">Change Project Image <span
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
                            <router-link :to="`/project/${project.id}`" class="nav-link" :class="{ 'active': section === 'overview' }">Overview</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="`/project/${project.id}/community`" class="nav-link" :class="{ 'active': section === 'community' }">Community</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="`/project/${project.id}/bounties`" class="nav-link" :class="{ 'active': section === 'bounties' }">Bounties</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="`/project/${project.id}/updates`" class="nav-link" :class="{ 'active': section === 'updates' }">Updates</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="`/project/${project.id}/milestones`" class="nav-link" :class="{ 'active': section === 'milestones' }">Milestones</router-link>
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

                                <div class="row">
                                    <div class="col-12">
                                        Choose your governance system
                                    </div>
                                    <div class="col-4">
                                        <i class="fas first-order" />
                                    </div>
                                </div>
                            </form>
                        </c-block>
                    </div>

                    <div class="row tab-pane fade active show" id="overview" role="tabpanel"
                         aria-labelledby="overview-tab">
                        <c-project-overview :project="project" v-if="section === 'overview'" :editing="editing" />
                        <c-project-community :project="project" v-if="section === 'community'" :editing="editing" />
                        <c-project-bounties :project="project" v-if="section === 'bounties'" :editing="editing" />
                        <c-project-contributors :project="project" v-if="section === 'contributors'" :editing="editing" />
                        <c-project-discussion :project="project" v-if="section === 'discussion'" :editing="editing" />
                        <c-project-milestones :project="project" v-if="section === 'milestones'" :editing="editing" />
                        <c-project-updates :project="project" v-if="section === 'updates'" :editing="editing" />
                    </div>

                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>

    const updateProject = function () {
        let project = null

        if (this.id === 'new') {
            project = this.$store.state.funding.default_project

            this.$store.state.application.developer_mode = true
            this.$store.dispatch('application/setEditorMode', 'editing')
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
        props: ['id', 'section'],
        components: {
            'c-tags-list': (resolve) => require(['@/ui/components/tags'], resolve),
            'c-badges': (resolve) => require(['@/ui/components/project/badges'], resolve),
            'c-rating-block': (resolve) => require(['@/ui/components/rating-block'], resolve),
            'c-project-overview': (resolve) => require(['@/ui/screens/project-overview'], resolve),
            'c-project-milestones': (resolve) => require(['@/ui/screens/project-milestones'], resolve),
            'c-project-discussion': (resolve) => require(['@/ui/screens/project-discussion'], resolve),
            'c-project-contributors': (resolve) => require(['@/ui/screens/project-contributors'], resolve),
            'c-project-community': (resolve) => require(['@/ui/screens/project-community'], resolve),
            'c-project-bounties': (resolve) => require(['@/ui/screens/project-bounties'], resolve),
            'c-project-updates': (resolve) => require(['@/ui/screens/project-updates'], resolve),
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
                    this.$store.dispatch('application/setEditorMode', 'publishing')

                    BlockHub.DesktopBridge
                        .createFundingProject({ title: this.project.name, description: this.project.description, about: this.project.content })
                        .then((project) => {
                            store.state.projects[project.id] = project

                            store.dispatch('updateState')

                            this.$store.dispatch('application/setEditorMode', 'viewing')
                        })
                } else {
                    this.$store.dispatch('funding/updateProject', this.project)
                    this.$store.dispatch('application/setEditorMode', 'publishing')
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
            },
            updateSection() {
                if (!this.section) {
                    this.section = this.$route.meta.section
                }
            },
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
            },
            breadcrumbLinks() {
                const links = [
                    { to: { path: '/' }, title: 'Store' },
                    { to: { path: '/project/' + this.project.id }, title: this.project.name }
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
            editing(newVal, oldVal) {
                if (this.$store.state.application.editor_mode === 'publishing') {
                    this.save()
                }
            },
            '$route'() {
                this.updateSection()
            }
        },
        created() {
            //this.$store.dispatch('application/setEditorMode', 'editing')

            this.updateSection()
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
    @media (max-width: 767px) {
        .tags{
            justify-content: center;
            margin-bottom: 5px;
        }
    }
</style>
