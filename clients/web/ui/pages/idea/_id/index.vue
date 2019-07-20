<template>
    <c-layout
        navigationKey="idea"
        :showRightPanel="false"
        :breadcrumbLinks="breadcrumbLinks">
        <div
            v-if="!idea && id !== 'new'"
            class="row">
            <!-- <div class="col-12">
                Idea not found
            </div> -->
            <c-loading
                :enabled="true"
                size="lg" />
        </div>
        <div
            v-if="idea || id === 'new'"
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
                                    Idea Name <span class="fa fa-edit" />
                                </button>

                                <div
                                    v-if="activeElement['name']"
                                    class="form-control-element form-control-element--right">
                                    <input
                                        ref="name"
                                        v-model="idea.name"
                                        name="name"
                                        type="text"
                                        class="form-control"
                                        placeholder="Idea name...">
                                    <div
                                        class="form-control-element__box form-control-element__box--pretify bg-secondary">
                                        <span
                                            class="fa fa-check"
                                            @click="deactivateElement('name')" />
                                    </div>
                                </div>
                            </div>
                            <h1 class="title margin-top-10 margin-bottom-15">
                                {{ idea.name }}
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
                                    <!--<option v-for="(tag, index) in tagOptions" :key="index"-->
                                    <!--:selected="idea.tags.includes(tag)">{{ tag }}-->
                                    <!--</option>-->
                                    <!--</select>-->

                                    <c-multiselect
                                        v-model="idea.tags"
                                        class="dark-mode"
                                        label="value"
                                        track-by="key"
                                        :multiple="true"
                                        :taggable="false"
                                        :options="tagOptions" />
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
                                v-if="!editing || !activeElement['tags']"
                                :tags="idea.tags ? idea.tags.map(t => t.value) : []" />
                        </div>
                    </div>
                    <div class="col-12 col-md-4">
                        <c-badges :icons="idea.meta.badges || []" />
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
                                        v-model="idea.meta.images.header"
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
                                Change Idea Image <span
                                    class="fa fa-edit" />
                            </button>

                            <div
                                v-if="activeElement['storeImage']"
                                class="">
                                <div class="form-control-element form-control-element--right">
                                    <input
                                        ref="storeImage"
                                        v-model="idea.meta.images.header"
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
                    data-target="#c-nav"
                    aria-expanded="false"
                    aria-controls="c-nav">
                    Menu
                </c-button>
                <div
                    id="c-nav"
                    class="collapse show c-nav">
                    <ul class="nav nav-tabs justify-content-between">
                        <li
                            class="nav-item"
                            @click="section='overview'">
                            <nuxt-link
                                :to="`/idea/${idea.id || 'new'}`"
                                class="nav-link"
                                :class="{ 'active': section === 'overview' }">
                                Overview
                            </nuxt-link>
                        </li>
                        <li
                            v-access="'community'"
                            class="nav-item"
                            @click="section='community'">
                            <nuxt-link
                                :to="`/idea/${idea.id || 'new'}/community`"
                                class="nav-link"
                                :class="{ 'active': section === 'community' }">
                                Community
                                <c-updates-count v-access="'updateCounter'">
                                    0
                                </c-updates-count>
                            </nuxt-link>
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
                    <div class="col-12">
                        <c-block title="Settings">
                            No settings yet
                        </c-block>
                    </div>
                </div>
            </div>

            <div
                id="overview"
                class="col-12 margin-top-40 ">
                <transition
                    name="page"
                    mode="out-in">
                    <c-idea-overview
                        v-if="section === 'overview'"
                        :idea="idea"
                        :editing="editing"
                        :activeElement="activeElement"
                        @activateElement="activateElement"
                        @deactivateElement="deactivateElement" />
                    <c-idea-community
                        v-if="section === 'community'"
                        :idea="idea"
                        :editing="editing"
                        :activeElement="activeElement" />
                </transition>
            </div>
        </div>
    </c-layout>
</template>

<script>
import Vue from 'vue'

export default {
    components: {
        'c-tags': () => import('~/components/tags').then(m => m.default || m),
        'c-badges': () => import('~/components/project/badges').then(m => m.default || m),
        'c-rating-block': () => import('~/components/rating-block').then(m => m.default || m),
        'c-idea-overview': () => import('~/pages/idea/_id/overview').then(m => m.default || m),
        'c-idea-community': () => import('~/pages/idea/_id/community').then(m => m.default || m),
        'c-updates-count': () => import('~/components/project/updates-count').then(m => m.default || m),
        'c-multiselect': () => import('vue-multiselect').then(m => m.default || m)
    },
    data() {
        return {
            errors: [],
            notice: '',
            section: 'overview',
            activeElement: {
                name: false,
                backgroundImage: false,
                storeImage: false,
                tags: false,
                description: false,
                content: false
            },
            tagOptions: [
                { key: 'game', value: 'Game' },
                { key: 'mod', value: 'Mod' },
                { key: 'item', value: 'Item' },
                { key: 'other', value: 'Other' }
            ]
        }
    },
    computed: {
        idea() {
            let idea = null

            if (this.id === 'new') {
                idea = { ...this.$store.state.marketplace.defaultIdea }

                this.$store.state.application.developerMode = true
                this.$store.dispatch('application/setEditorMode', 'editing')
            }

            if (!idea) {
                idea = this.$store.getters['ideas/get'](this.id)
            }

            // if (!idea && this.$store.state.ideas.keyedById && this.$store.state.ideas.keyedById[this.id]) {
            //     idea = this.$store.state.ideas.keyedById[this.id]
            // }

            if (!idea) {
                return
            }

            if (!idea.meta) {
                idea.meta = {}
            }

            if (process.client && idea.meta.images && idea.meta.images.header) {
                window.document.getElementById('header-bg').style['background-image'] = `url(${idea.meta.images.header})`
            }

            return idea
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
            if (!this.idea) {
                return []
            }

            const links = [
                { to: { path: '/' }, title: 'Store' },
                { to: { path: `/idea/${this.idea ? this.idea.id : 0}` }, title: this.idea ? this.idea.name : 'Loading' }
            ]

            if (this.section === 'community') {
                links.push({ to: { path: '' }, title: 'Community' })
            } else if (this.section === 'updates') {
                links.push({ to: { path: '' }, title: 'Updates' })
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
            } else if (this.$store.state.application.editorMode === 'removing') {
                this.remove()
            }
        }
    },
    created() {
        if (this.id !== 'new') {
            this.$store.dispatch('ideas/find', {
                query: {
                    id: Number(this.id),
                    $eager: '[tags, community, rating]'
                }
            })
        }

        this.updateSection()
    },
    beforeDestroy() {
        if (process.client) {
            window.document.getElementById('header-bg').style['background-image'] = 'url(/img/backgrounds/1.jpg)'
        }
    },
    updated() {
        if (!process.client) return
        this.$('#summernote').summernote({
            placeholder: 'Type in your text',
            tabsize: 2,
            height: 300,
            callbacks: {
                onBlur: () => {
                    Vue.set(this.idea, 'value', $('#summernote').summernote('code'))
                }
            }
        })
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
        remove() {
            this.$store.dispatch('ideas/remove', this.idea.id).then(res => {
                this.notice = 'Idea has been removed.'

                this.$store.dispatch('application/setEditorMode', 'viewing')

                this.$router.push('/ideas')
            })
        },
        async save() {
            if (!this.checkForm()) {
                this.$store.dispatch('application/setEditorMode', 'editing')
                return
            }

            if (!this.$store.state.application.signedIn) {
                return this.$store.commit('application/activeModal', 'login')
            }

            if (this.id === 'new') {
                this.$store.dispatch('application/setEditorMode', 'publishing')

                this.idea.ownerId = this.$store.state.application.activeProfile.id
                this.idea.meta.owner = this.$store.state.application.activeProfile

                this.$store.dispatch('ideas/create', [this.idea, {
                    query: {
                        $eager: '[owner, tags, community, rating]'
                    }
                }]).then(res => {
                    this.idea.id = res.id
                    this.notice = 'Congratulations, your idea has been created!'

                    this.$store.dispatch('application/setEditorMode', 'viewing')

                    this.$router.push(`/idea/${this.idea.id}`)
                })
            } else {
                this.$store.dispatch('application/setEditorMode', 'publishing')

                this.idea.ownerId = this.$store.state.application.activeProfile.id
                this.idea.meta.owner = this.$store.state.application.activeProfile

                await this.$store.dispatch('ideas/update', [this.idea.id, this.idea, {
                    query: {
                        $eager: '[tags, community, rating]'
                    }
                }])

                this.notice = 'Idea has been saved.'

                this.$store.dispatch('application/setEditorMode', 'viewing')
            }
        },
        checkForm() {
            this.errors = []

            if (this.idea.name && this.idea.meta.description) {
                return true
            }

            if (!this.idea.name) {
                this.errors.push('Idea name required.')
            }
            if (!this.idea.meta.description) {
                this.errors.push('Idea description required.')
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
        .c-nav{
            display: block!important;
        }
    }
    @media (max-width: 767px) {
        .tags{
            justify-content: center;
            margin-bottom: 5px;
        }
        .c-nav{
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
