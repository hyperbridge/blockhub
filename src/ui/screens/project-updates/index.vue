<template>
    <c-layout navigationKey="project-navigation">
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
                                        @click="activateElement('author_tags')"
                                        v-if="!activeElement['author_tags']" style="margin-bottom: 20px">Change
                                    Tags <span class="fa fa-edit"></span></button>
                                <div class="form-control-element form-control-element--right"
                                     v-if="activeElement['author_tags']">
                                    <select id="tag-editor" class="form-control" multiple="multiple">
                                        <option v-for="(tag, index) in author_tag_options" :key="index"
                                                :selected="project.author_tags.includes(tag)">{{ tag }}
                                        </option>
                                    </select>
                                    <div
                                        class="form-control-element__box form-control-element__box--pretify bg-secondary"
                                        style="">
                                                <span class="fa fa-check"
                                                      @click="deactivateElement('author_tags')"></span>
                                    </div>
                                </div>
                            </div>
                            <c-tags-list :tags="project.author_tags"
                                         v-if="!editing || !activeElement['author_tags']"></c-tags-list>
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
                                <router-link :to="`/project/${project.id}/updates`" class="nav-link active">Updates</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="`/project/${project.id}/milestones`" class="nav-link">Milestones</router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="col-12">
                        <c-timeline :items="project.updates" :project_id="project.id" />
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
        }

        if (this.$store.state.funding.projects && this.$store.state.funding.projects[this.id]) {
            project = this.$store.state.funding.projects[this.id]
        }

        if (project && project.images && project.images.header) {
            window.document.getElementById('header-bg').style['background-image'] = 'url(' + project.images.header + ')'
        }

        return project
    }

    export default {
        props: ['id'],
        components: {
            'c-layout': (resolve) => require(['@/ui/layouts/default'], resolve),
            'c-block': (resolve) => require(['@/ui/components/block'], resolve),
            'c-tags-list': (resolve) => require(['@/ui/components/tags'], resolve),
            'c-badges': (resolve) => require(['@/ui/components/project/badges'], resolve),
            'c-timeline': (resolve) => require(['@/ui/components/timeline/list'], resolve)
        },
        data() {
            return {
                errors: [],
                activeElement: {
                    name: false,
                    background_image: false,
                    store_image: false,
                    author_tags: false,
                    description: false,
                    content: false
                },
                author_tag_options: [
                    'game',
                    'mod',
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

                    if (!this.project.author_tags.includes(data.text)) {
                        this.project.author_tags.push(data.text)
                    }

                    Vue.set(this.project, 'author_tags', this.project.author_tags)
                })
                .on('select2:unselect', (e) => {
                    let data = e.params.data

                    this.project.author_tags = this.project.author_tags.filter(e => e !== data.text)

                    Vue.set(this.project, 'author_tags', this.project.author_tags)
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
        }
    }
</script>

<style lang="scss" scoped>
</style>
