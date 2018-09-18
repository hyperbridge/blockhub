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
                        <div class="badges-list">
                            <div class="item">
                                <i class="fas fa-trophy"></i>
                            </div>
                            <div class="item">
                            </div>
                            <div class="item">
                            </div>
                        </div>
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
                        <div class="posts-timeline">
                            <div class="posts-timeline__post-item left-side">
                                <div class="posts-timeline__post--content">
                                    <a href="#3">
                                        <h3>Thank you, friends!</h3>
                                    </a>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in diam eu sapien tempor
                                        feugiat. Nulla quis sagittis eros, at placerat nisl. Nulla arcu ex,
                                        laoreet ut nunc eget, placerat molestie leo.</p>
                                    <div class="d-flex align-items-center justify-content-between mt-4 w-100">
                                        <div class="post-date">
                                            September 12, 2018
                                        </div>
                                        <c-button status="info" icon_hide >Read more</c-button>
                                    </div>
                                </div>
                            </div>
                            <div class="posts-timeline__post-item right-side">
                                <div class="posts-timeline__post--content">
                                    <a href="#3">
                                        <h3>Thank you, friends!</h3>
                                    </a>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in diam eu sapien tempor
                                        feugiat. Nulla quis sagittis eros, at placerat nisl. Nulla arcu ex,
                                        laoreet ut nunc eget, placerat molestie leo.</p>
                                    <div class="d-flex align-items-center justify-content-between mt-4 w-100">
                                        <c-button status="info" icon_hide >Read more</c-button>
                                        <div class="post-date">
                                            September 11, 2018
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="post-timeline__year">
                                2018
                            </div>
                            <div class="posts-timeline__post-item left-side">
                                <div class="posts-timeline__post--content">
                                    <a href="#3">
                                        <h3>Thank you, friends!</h3>
                                    </a>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in diam eu sapien tempor
                                        feugiat. Nulla quis sagittis eros, at placerat nisl. Nulla arcu ex,
                                        laoreet ut nunc eget, placerat molestie leo.</p>
                                    <div class="d-flex align-items-center justify-content-between mt-4 w-100">
                                        <div class="post-date">
                                            September 12, 2018
                                        </div>
                                        <c-button status="info" icon_hide >Read more</c-button>
                                    </div>
                                </div>
                            </div>
                            <div class="posts-timeline__post-item right-side">
                                <div class="posts-timeline__post--content">
                                    <a href="#3">
                                        <h3>Thank you, friends!</h3>
                                    </a>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in diam eu sapien tempor
                                        feugiat. Nulla quis sagittis eros, at placerat nisl. Nulla arcu ex,
                                        laoreet ut nunc eget, placerat molestie leo.</p>
                                    <div class="d-flex align-items-center justify-content-between mt-4 w-100">
                                        <c-button status="info" icon_hide >Read more</c-button>
                                        <div class="post-date">
                                            September 11, 2018
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="posts-timeline__post-item centered">
                                <div class="posts-timeline__post--content" style="background: #43C981">
                                    <div class="post-date">
                                        September 7, 2018
                                    </div>
                                    <h3>Project launched</h3>
                                </div>
                            </div>
                        </div>
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
            'c-layout': () => import('@/ui/layouts/default'),
            'c-block': () => import('@/ui/components/block'),
            'c-tags-list': () => import('@/ui/components/tags'),
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
                ],
                review: {
                    author: {
                        name: 'Satoshi San',
                        img: 'https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1'
                    },
                    title: 'Good game with very nice graphics made by very smart people.',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut luctus ante, a volutpat velit. Cras in arcu a sem ultrices id luctus sem. Cras a venenatis mauris. Nullam non tortor nec neque accumsan euismod. Fusce tempus nunc ac varius gravida. Fusce at lacus pharetra, elementum risus a, bibendum ante. Morbi velit est, tincidunt id auctor sit amet, varius non nunc. Vestibulum elementum nulla et condimentum vulputate. Nullam id eleifend velit, quis aliquam elit. In maximus non orci eget maximus.',
                    date: '2018-08-19T04:09:00.000Z',
                    rating: 4.5,
                    minutes_played: 1938,
                    setup: { system: 'Windows 10', gpu: 'GTX 1080', cpu: 'Core i7 7980x', ram: '8 GB', storage: 'HyperX 1TB SSD' }
                },
                crowdfunding_props: ['spent', 'locked', 'overflow']
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
                    this.$store.dispatch('marketplace/setEditorMode', 'editing')

                    return
                }

                if (this.id === 'new') {
                    this.$store.commit('funding/createProject', this.project)
                    this.$store.dispatch('marketplace/setEditorMode', 'viewing')
                } else {
                    this.$store.dispatch('funding/updateProject', this.project)
                    this.$store.dispatch('marketplace/setEditorMode', 'viewing')
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
                if (!this.$store.state.marketplace.editor_mode) {
                    for (let key in this.activeElement) {
                        this.activeElement[key] = false
                    }
                }

                return this.$store.state.marketplace.editor_mode === 'editing'
            }
        },
        watch: {
            editing(newVal, oldVal) {
                if (this.$store.state.marketplace.editor_mode === 'publishing') {
                    this.save()
                }
            }
        },
        created() {
            //this.$store.dispatch('marketplace/setEditorMode', 'editing')
        },
        beforeDestroy() {
            window.document.getElementById('header-bg').style['background-image'] = 'url(/static/img/products/default.png)'
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
    .posts-timeline{
        display: flex;
        flex-direction: column;
    }
    .post-timeline__year{
        padding: 3px 20px;
        border-radius: 5px;
        background: #fff;
        text-align: center;
        color: #30304B;
        margin: 20px auto;
        font-weight: bold;
        position: relative;
        display: inline-flex;
        &:after,
        &:before{
            content: "";
            position: absolute;
            left: 50%;
            margin-left: -1px;
            display: inline-block;
            width: 2px;
            background: rgba(255, 255, 255, .2);
            height: 30px;
            top: -20px;
        }
        &:after{
            top: unset;
            bottom: -20px;
        }
    }
    .posts-timeline__post-item{
        width: 50%;
        display: flex;
        flex-direction: column;
        position: relative;
        .post-date{
            font-size: 13px;
            font-weight: bold;
            color: #fff;
        }
        h3{
            font-size: 22px;
        }
        &:after{
            content: "";
            position: absolute;
            top: 30px;
            width: 20px;
            height: 20px;
            background: #fff;
            border-radius: 100%;
            display: inline-block;
        }
        &:before{
            content: "";
            position: absolute;
            top: 0px;
            width: 2px;
            bottom: 0;
            background: rgba(255, 255, 255, .2);
            border-radius: 0;
            display: inline-block;
        }
        &.left-side{
            text-align: right;
            padding-right: 50px;
            margin-right: -1px;
            .c-btn{
                margin-right: 0;
            }
            &:after{
                right: -10px;
            }
            &:before{
                right: -1px;
            }
        }
        &.right-side{
            text-align: left;
            align-self: flex-end;
            padding-left: 50px;
            .c-btn{
                margin-left: 0;
            }
            &:after{
                left: -10px;
            }
            &:before{
                left: -1px;
            }
        }
        &.centered{
            align-self: center;
            padding: 40px;
            text-align: center;
            &:after{
                left: calc(50% - 10px);
            }
            &:before{
                content: "";
                top: 0px;
                left: calc( 50% - 1px);
                height: 30px;
                background: rgba(255, 255, 255, .2);
                width: 2px;
                position: absolute;
                border-radius: 0;
            }
            .posts-timeline__post--content{
                padding: 25px;
                h3{
                    padding: 15px 0 0;
                }
            }
        }
        a:hover{
            text-decoration: none;
        }
        &:hover{
            &:after{
                background-color: rgb(67, 201, 129);
            }
        }
    }
    .posts-timeline__post--content{
        padding: 15px;
        background: rgba(0, 0, 0, .13);
        border-radius: 5px;
        box-shadow: 0 3px 6px rgba(0, 0, 0, .2);
        &:hover{
            background: rgba(0, 0, 0, .2);
        }
    }
</style>
