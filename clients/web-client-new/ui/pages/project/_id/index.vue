<template>
    <c-layout
        navigationKey="project"
        :showLeftPanel="false"
        :showRightPanel="false"
        :breadcrumbLinks="breadcrumbLinks"
        class="project-single-page">
        <div
            v-if="!project"
            class="row">
            <!-- <div class="col-12">
                Project not found
            </div> -->
            <c-loading
                :enabled="!project"
                size="lg" />
        </div>
        <div
            v-if="project"
            class="row">
            <div class="col-12">
                <div
                    v-if="errors.length"
                    class="errors">
                    <strong>Please correct the following error(s):</strong>
                    <ul>
                        <li
                            v-for="error in errors"
                            :key="error">
                            {{ error }}
                        </li>
                    </ul>
                </div>

                <div class="row justify-content-between">
                    <div class="col-12 col-md-4 text-center text-md-left">
                        <div class="editor-container">
                            <div
                                v-if="editing"
                                class="editor">
                                <button
                                    v-if="!activeElement['name']"
                                    class="btn btn-secondary btn--icon btn--icon-stacked btn--icon-right"
                                    @click="activateElement('name')">
                                    Change
                                    Project Name <span class="fa fa-edit" />
                                </button>

                                <div
                                    v-if="activeElement['name']"
                                    class="form-control-element form-control-element--right">
                                    <input
                                        ref="name"
                                        v-model="project.name"
                                        name="name"
                                        type="text"
                                        class="form-control"
                                        placeholder="Project name...">
                                    <div
                                        class="form-control-element__box form-control-element__box--pretify bg-secondary">
                                        <span
                                            class="fa fa-check"
                                            @click="deactivateElement('name')" />
                                    </div>
                                </div>
                            </div>
                            <h1 class="title margin-top-10 margin-bottom-15">
                                {{ project.name }}
                            </h1>
                        </div>
                        <div class="editor-container">
                            <div
                                v-if="editing"
                                class="editor">
                                <button
                                    v-if="!activeElement['tags']"
                                    class="btn btn-secondary btn--icon btn--icon-stacked btn--icon-right"
                                    style="margin-bottom: 20px"
                                    @click="activateElement('tags')">
                                    Change
                                    Tags <span class="fa fa-edit" />
                                </button>
                                <div
                                    v-if="activeElement['tags']"
                                    class="form-control-element tag-editor form-control-element--right">
                                    <!--<select id="tag-editor" class="form-control" multiple="multiple">-->
                                    <!--<option v-for="(tag, index) in authorTagOptions" :key="index"-->
                                    <!--:selected="project.tags.includes(tag)">{{ tag }}-->
                                    <!--</option>-->
                                    <!--</select>-->

                                    <c-multiselect
                                        v-model="project.tags"
                                        class="dark-mode"
                                        :multiple="true"
                                        :taggable="true"
                                        :options="authorTagOptions" />
                                    <div
                                        class="form-control-element__box form-control-element__box--pretify bg-secondary"
                                        style="">
                                        <span
                                            class="fa fa-check"
                                            @click="deactivateElement('tags')" />
                                    </div>
                                </div>
                            </div>

                            <c-tags
                                v-if="project.tags && (!editing || !activeElement['tags'])"
                                :tags="project.tags.map(t => t.value)" />
                        </div>
                    </div>
                    <div class="col-12 col-md-4">
                        <c-badges :icons="project.meta.badges || []" />
                    </div>
                    <div class="col-12 col-md-4">
                        <div
                            v-if="editing"
                            class="editor text-right"
                            style="margin-bottom: 30px">
                            <button
                                v-if="!activeElement['backgroundImage']"
                                class="btn btn-secondary btn--icon btn--icon-stacked btn--icon-right"
                                @click="activateElement('backgroundImage')">
                                Change Background Image <span
                                    class="fa fa-edit" />
                            </button>

                            <div
                                v-if="activeElement['backgroundImage']"
                                class="">
                                <div class="form-control-element form-control-element--right">
                                    <input
                                        ref="backgroundImage"
                                        v-model="project.images.header"
                                        name="backgroundImage"
                                        type="text"
                                        class="form-control"
                                        placeholder="Background image URL...">
                                    <div
                                        class="form-control-element__box form-control-element__box--pretify bg-secondary">
                                        <span
                                            class="fa fa-check"
                                            @click="deactivateElement('backgroundImage')" />
                                    </div>
                                </div>
                            </div>
                            <label style="display: block">RECOMMENDED SIZE: 1120 x 524px</label>
                        </div>
                        <div
                            v-if="editing"
                            class="editor text-right">
                            <button
                                v-if="!activeElement['storeImage']"
                                class="btn btn-secondary btn--icon btn--icon-stacked btn--icon-right"
                                @click="activateElement('storeImage')">
                                Change Project Image <span
                                    class="fa fa-edit" />
                            </button>

                            <div
                                v-if="activeElement['storeImage']"
                                class="">
                                <div class="form-control-element form-control-element--right">
                                    <input
                                        ref="storeImage"
                                        v-model="project.images.header"
                                        name="storeImage"
                                        type="text"
                                        class="form-control"
                                        placeholder="Background image URL...">
                                    <div
                                        class="form-control-element__box form-control-element__box--pretify bg-secondary">
                                        <span
                                            class="fa fa-check"
                                            @click="deactivateElement('storeImage')" />
                                    </div>
                                </div>
                            </div>
                            <label style="display: block">RECOMMENDED SIZE: 2140 x 680px</label>
                        </div>
                    </div>
                </div>
                <c-button
                    status="dark"
                    class="w-100 d-flex d-md-none justify-content-center my-4"
                    size="lg"
                    data-toggle="collapse"
                    data-target="#project_nav"
                    aria-expanded="false"
                    aria-controls="project_nav">
                    Menu
                </c-button>
                <div
                    id="project_nav"
                    class="collapse show project_nav">
                    <ul class="nav nav-tabs margin-bottom-40">
                        <li
                            class="nav-item"
                            @click="section='overview'">
                            <router-link
                                :to="`/project/${project.id}`"
                                class="nav-link"
                                :class="{ 'active': section === 'overview' }">
                                Overview
                            </router-link>
                        </li>
                        <li
                            v-darklaunch="'COMMUNITY'"
                            class="nav-item"
                            @click="section='community'">
                            <router-link
                                :to="`/project/${project.id}/community`"
                                class="nav-link"
                                :class="{ 'active': section === 'community' }">
                                Community
                                <c-updates-count v-darklaunch="'UPDATE-COUNTER'">
                                    0
                                </c-updates-count>
                            </router-link>
                        </li>
                        <li
                            v-if="project.bounties"
                            class="nav-item"
                            @click="section='bounties'">
                            <router-link
                                :to="`/project/${project.id}/bounties`"
                                class="nav-link"
                                :class="{ 'active': section === 'bounties' }">
                                Bounties
                            </router-link>
                        </li>
                        <li
                            class="nav-item"
                            @click="section='updates'">
                            <router-link
                                :to="`/project/${project.id}/updates`"
                                class="nav-link"
                                :class="{ 'active': section === 'updates' }">
                                Updates
                                <c-updates-count v-darklaunch="'UPDATE-COUNTER'">
                                    0
                                </c-updates-count>
                            </router-link>
                        </li>
                        <li
                            class="nav-item"
                            @click="section='milestones'">
                            <router-link
                                :to="`/project/${project.id}/milestones`"
                                class="nav-link"
                                :class="{ 'active': section === 'milestones' }">
                                Milestones
                            </router-link>
                        </li>
                        <li
                            v-if="editing"
                            class="nav-item">
                            <a
                                class="nav-link"
                                :class="{ 'active': section === 'configure' }"
                                @click="section='configure'">Configure</a>
                        </li>
                    </ul>
                </div>

                <div
                    v-if="section === 'configure'"
                    id="configure"
                    class="row"
                    :editing="editing">
                    <c-block title="Campaign">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group row">
                                    <label class="switch switch-sm col-sm-3">
                                        <label>Minimum Contribution Goal</label>
                                    </label>
                                    <div class="col-sm-9">
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Example: 0">
                                        <span class="form-text">Projects with Overflow Enabled will accept more than the funding goal (over-contribution)</span>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="switch switch-sm col-sm-3">
                                        <label>Maximum Contribution Goal</label>
                                    </label>
                                    <div class="col-sm-9">
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Example: 1000">
                                        <span class="form-text">Projects with Overflow Enabled will accept more than the funding goal (over-contribution)</span>
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <div class="col-sm-3">
                                        <label>Support Email</label>
                                    </div>
                                    <div class="col-sm-9">
                                        <input
                                            type="email"
                                            class="form-control"
                                            placeholder="Example: example@domain.com">
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
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="Example: @example">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-sm-3">
                                        <label>Share Text</label>
                                    </div>
                                    <div class="col-sm-9">
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Example: Join our crowdfund on BlockHub today!">
                                        <span class="form-text">Projects with Overflow Enabled will accept more than the funding goal (over-contribution)</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group row">
                                    <label class="switch switch-sm col-sm-1">
                                        <input
                                            type="checkbox"
                                            name="switch_8"
                                            checked=""
                                            value="0">
                                        <span />
                                    </label>
                                    <div class="col-sm-11">
                                        <label>Overflow</label>
                                        <span class="form-text">Projects with Overflow enabled will accept more than the funding goal (over-contribution)</span>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="switch switch-sm col-sm-1">
                                        <input
                                            type="checkbox"
                                            name="switch_8"
                                            checked=""
                                            value="0">
                                        <span />
                                    </label>
                                    <div class="col-sm-11">
                                        <label>Timeline</label>
                                        <span class="form-text">Projects with Timeline enabled will have a current timeline with associated milestones.</span>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="switch switch-sm col-sm-1">
                                        <input
                                            type="checkbox"
                                            name="switch_8"
                                            checked=""
                                            value="0">
                                        <span />
                                    </label>
                                    <div class="col-sm-11">
                                        <label>Refunds</label>
                                        <span class="form-text">Projects with Refunds enabled will allow contributors to get partial or full refund if the project is deemed not successful (by community vote).</span>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="switch switch-sm col-sm-1">
                                        <input
                                            type="checkbox"
                                            name="switch_8"
                                            checked=""
                                            value="0">
                                        <span />
                                    </label>
                                    <div class="col-sm-11">
                                        <label>Curation</label>
                                        <span class="form-text">Projects with Curation enabled will allow the community to curate the project and earn reputation for their actions.</span>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="switch switch-sm col-sm-1" />
                                    <div class="col-sm-11">
                                        <input
                                            id="ise_default"
                                            type="text"
                                            name="ise_default"
                                            value="">
                                        <label>Contribution Period</label>
                                        <span class="form-text">Projects with Curation Enabled will allow the community to curate the project and earn reputation for their actions.</span>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="switch switch-sm col-sm-1">
                                        <input
                                            type="checkbox"
                                            name="switch_8"
                                            checked=""
                                            value="0">
                                        <span />
                                    </label>
                                    <div class="col-sm-11">
                                        <label>No Contribution Period</label>
                                        <span class="form-text">Projects with No Contribution Period will be open for contribution until the project is completed, allowing for contributions during the project.</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            v-darklaunch="'GOVERNANCE'"
                            class="row">
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

            <div id="overview">
                <transition
                    name="page"
                    mode="out-in">
                    <c-project-overview
                        v-if="section === 'overview'"
                        :project="project"
                        :editing="editing" />
                    <c-project-community
                        v-if="section === 'community'"
                        :project="project"
                        :editing="editing" />
                    <c-project-bounties
                        v-if="section === 'bounties'"
                        :project="project"
                        :editing="editing" />
                    <c-project-contributors
                        v-if="section === 'contributors'"
                        :project="project"
                        :editing="editing" />
                    <c-project-discussion
                        v-if="section === 'discussion'"
                        :project="project"
                        :editing="editing" />
                    <c-project-milestones
                        v-if="section === 'milestones'"
                        :project="project"
                        :editing="editing" />
                    <c-project-updates
                        v-if="section === 'updates'"
                        :project="project"
                        :editing="editing" />
                </transition>
            </div>
        </div>
    </c-layout>
</template>

<script>
import * as DB from '@/db'

export default {
    components: {
        'c-tags': () => import('~/components/tags').then(m => m.default || m),
        'c-badges': () => import('~/components/project/badges').then(m => m.default || m),
        'c-rating-block': () => import('~/components/rating-block').then(m => m.default || m),
        'c-project-overview': () => import('~/pages/project/_id/overview').then(m => m.default || m),
        'c-project-milestones': () => import('~/pages/project/_id/milestones').then(m => m.default || m),
        'c-project-discussion': () => import('~/pages/project/_id/discussion').then(m => m.default || m),
        'c-project-contributors': () => import('~/pages/project/_id/contributors').then(m => m.default || m),
        'c-project-community': () => import('~/pages/project/_id/community').then(m => m.default || m),
        'c-project-bounties': () => import('~/pages/project/_id/bounties').then(m => m.default || m),
        'c-project-updates': () => import('~/pages/project/_id/updates').then(m => m.default || m),
        'c-updates-count': () => import('~/components/project/updates-count').then(m => m.default || m),
        'c-multiselect': resolve => require(['vue-multiselect'], resolve)
    },
    props: {
        id: [String, Number],
        section: {
            type: String,
            default: 'overview'
        }
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
    computed: {
        project() {
            let project = null

            if (this.id === 'new') {
                project = { ...this.$store.state.funding.defaultProject }

                this.$store.state.application.developerMode = true
                this.$store.dispatch('application/setEditorMode', 'editing')
            }

            if (!project) {
                project = this.$store.getters['projects/get'](this.id)
            }

            if (!project) {
                project = DB.funding.projects.findOne({ 'id': Number(this.id) })
            }

            if (!project) {
                return
            }

            if (project.images && project.images.header) {
                window.document.getElementById('header-bg').style['background-image'] = `url(${project.images.header})`
            }

            if (!project.community) {
                project.community = {
                    discussions: []
                }
            }

            return project
        },
        editing() {
            if (!this.$store.state.application.editorMode) {
                for (const key in this.activeElement) {
                    this.activeElement[key] = false
                }
            }

            return this.$store.state.application.editorMode === 'editing'
        },
        breadcrumbLinks() {
            if (!this.project) {
                return []
            }

            const links = [
                { to: { path: '/' }, title: 'Store' },
                { to: { path: `/project/${this.project ? this.project.id : 0}` }, title: this.project ? this.project.name : 'Loading' }
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
        '$store.state.projects.list'() {
            this.project = this.$store.getters['projects/get'](this.id)
        },
        editing() {
            if (this.$store.state.application.editorMode === 'publishing') {
                this.save()
            }
        }
    },
    created() {
        this.updateSection()
    },
    mounted() {
        if (this.id !== 'new') {
            this.$store.dispatch('projects/find', {
                query: {
                    id: Number(this.id),
                    $eager: 'tags'
                }
            })
        }
    },
    beforeDestroy() {
        if (process.client) {
            window.document.getElementById('header-bg').style['background-image'] = 'url(/img/backgrounds/1.jpg)'
        }
    },
    updated() {
        if (process.client) {
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
    },
    methods: {
        showTab(name) {
            $(`.nav-tabs a[href="#${name}"]`).tab('show')
        },
        deactivateElement(key) {
            this.activeElement[key] = false
        },
        activateElement(key) {
            for (const key in this.activeElement) {
                this.activeElement[key] = false
            }

            this.activeElement[key] = true

            setTimeout(() => {
                if (this.$refs[key]) { this.$refs[key].focus() }
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
        }
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
    .nav-tabs {
        justify-content: flex-start;

        a {
            min-height: 45px;
        }
    }
    .nav-tabs .nav-item {
        margin-right: 40px;
    }
</style>
