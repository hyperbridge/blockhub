<template>
    <c-layout navigationKey="idea" :showRightPanel="false" :breadcrumbLinks="breadcrumbLinks" class="idea-single-page">
        <div class="row" v-if="!idea">
            <!-- <div class="col-12">
                Project not found
            </div> -->
            <c-loading :enabled="!idea" />
        </div>
        <div class="row" v-if="idea">
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
                                    Idea Name <span class="fa fa-edit"></span></button>

                                <div class="form-control-element form-control-element--right"
                                        v-if="activeElement['name']">
                                    <input ref="name" name="name" type="text" class="form-control"
                                            placeholder="Idea name..." v-model="idea.name"/>
                                    <div
                                        class="form-control-element__box form-control-element__box--pretify bg-secondary">
                                        <span class="fa fa-check" @click="deactivateElement('name')"></span>
                                    </div>
                                </div>
                            </div>
                            <h1 class="title margin-top-10 margin-bottom-15">{{ idea.name }}</h1>
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
                                        <!--<option v-for="(tag, index) in tagOptions" :key="index"-->
                                                <!--:selected="idea.tags.includes(tag)">{{ tag }}-->
                                        <!--</option>-->
                                    <!--</select>-->

                                    <multiselect v-model="idea.tags"
                                                    class="dark-mode"
                                                    :multiple="true"
                                                    :taggable="true"
                                                    :options="tagOptions">
                                    </multiselect>
                                    <div
                                        class="form-control-element__box form-control-element__box--pretify bg-secondary"
                                        style="">
                                            <span class="fa fa-check"
                                                    @click="deactivateElement('tags')"></span>
                                    </div>
                                </div>
                            </div>

                            <c-tags :tags="idea.tags.map(t => t.value)"
                                            v-if="!editing || !activeElement['tags']"></c-tags>
                        </div>
                    </div>
                    <div class="col-12 col-md-4">
                        <c-badges :icons="idea.meta.badges || []" />
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
                                            v-model="idea.images.header"/>
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
                                    v-if="!activeElement['storeImage']">Change Idea Image <span
                                class="fa fa-edit"></span></button>

                            <div class="" v-if="activeElement['storeImage']">
                                <div class="form-control-element form-control-element--right">
                                    <input ref="storeImage" name="storeImage" type="text" class="form-control"
                                            placeholder="Background image URL..."
                                            v-model="idea.images.header" />
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
                <c-button status="dark" class="w-100 d-flex d-md-none justify-content-center my-4" size="lg" data-toggle="collapse" data-target="#idea_nav" aria-expanded="false" aria-controls="idea_nav">
                    Menu
                </c-button>
                <div class="collapse show idea_nav" id="idea_nav">
                    <ul class="nav nav-tabs margin-bottom-40 justify-content-between">
                        <li class="nav-item" @click="section='overview'">
                            <router-link :to="`/idea/${idea.id}`" class="nav-link" :class="{ 'active': section === 'overview' }">
                                Overview
                            </router-link>
                        </li>
                        <li class="nav-item" @click="section='community'" v-darklaunch="'COMMUNITY'">
                            <router-link :to="`/idea/${idea.id}/community`" class="nav-link" :class="{ 'active': section === 'community' }">
                                Community
                                <c-updates-count v-darklaunch="'UPDATE-COUNTER'">
                                    0
                                </c-updates-count>
                            </router-link>
                        </li>
                        <li class="nav-item" v-if="editing">
                            <a class="nav-link" :class="{ 'active': section === 'configure' }" @click="section='configure'">Configure</a>
                        </li>
                    </ul>
                </div>

                <div class="row" id="configure" v-if="section === 'configure'" :editing="editing">
                    <c-block title="Campaign">

                    </c-block>
                </div>

            </div>

            <div class="col-12" id="overview">
                <transition name="page" mode="out-in">
                    <c-idea-overview :idea="idea" v-if="section === 'overview'" :editing="editing" />
                    <c-idea-community :idea="idea" v-if="section === 'community'" :editing="editing" />
                </transition>
            </div>
        </div>
    </c-layout>
</template>

<script>
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
            'c-badges': (resolve) => require(['@/ui/components/idea/badges'], resolve),
            'c-rating-block': (resolve) => require(['@/ui/components/rating-block'], resolve),
            'c-idea-overview': (resolve) => require(['@/ui/screens/idea-overview'], resolve),
            'c-idea-community': (resolve) => require(['@/ui/screens/idea-community'], resolve),
            'c-updates-count': (resolve) => require(['@/ui/components/idea/updates-count'], resolve),
            'multiselect': (resolve) => require(['vue-multiselect'], resolve),
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
                tagOptions: [
                    'game',
                    'mod',
                    'item',
                    'other'
                ]
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
                    this.$store.dispatch('funding/updateIdea', this.idea)
                    this.$store.dispatch('application/setEditorMode', 'publishing')
                }
            },
            checkForm() {
                this.errors = []

                if (this.idea.name && this.idea.description) {
                    return true
                }

                if (!this.idea.name) {
                    this.errors.push('Idea name required.')
                }
                if (!this.idea.description) {
                    this.errors.push('Idea description required.')
                }
            },
            updateSection() {
                if (!this.section) {
                    this.section = this.$route.meta.section
                }
            },
        },
        computed: {
            idea() {
                let idea = null

                if (this.id === 'new') {
                    idea = this.$store.state.funding.defaultProject

                    this.$store.state.application.developerMode = true
                    this.$store.dispatch('application/setEditorMode', 'editing')
                }

                if (!idea) {
                    idea = this.$store.getters['ideas/get'](this.id)
                }

                if (idea && idea.images && idea.images.header) {
                    window.document.getElementById('header-bg').style['background-image'] = 'url(' + idea.images.header + ')'
                }

                if (idea && !idea.community) {
                    idea.community = {
                        discussions: []
                    }
                }

                return idea
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
                    { to: { path: '/idea/' + (this.idea ? this.idea.id : 0) }, title: (this.idea ? this.idea.name : 'Loading') }
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
                this.$store.dispatch('ideas/find', {
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
                        Vue.set(this.idea, 'content', $('#summernote').summernote('code'))
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
        .idea_nav{
            display: block!important;
        }
    }
    @media (max-width: 767px) {
        .tags{
            justify-content: center;
            margin-bottom: 5px;
        }
        .idea_nav{
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
