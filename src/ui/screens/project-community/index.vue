<template>
    <c-layout navigationKey="project-navigation">
        <div class="content" id="content">
            <div class="container-fluid">
                <div class="row" v-if="!project">
                    <div class="col-12">
                        Project not found
                    </div>
                </div>
                <div class="row" v-else>
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
                    <div class="col-12 tab-content">
                        <ul class="nav nav-tabs margin-bottom-50 justify-content-between">
                            <li class="nav-item">
                                <router-link :to="`/project/${project.id}`" class="nav-link">Overview</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="`/project/${project.id}/community`" class="nav-link active">Community</router-link>
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

                        <div v-if="community_1">
                            <c-item
                                v-for="(post, index) in posts"
                                :key="index"
                                :post="post"
                            />
                        </div>

                        <div v-else-if="community_2">
                            <c-item :post="post"/>
                        </div>


                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="invertFormExampleModal" tabindex="-1" role="dialog"
             aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content invert">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Set Up Campaign</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">


                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-light" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Submit</button>
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
            'c-tags-list': (resolve) => require(['@/ui/components/tags'], resolve),
            'c-badges': (resolve) => require(['@/ui/components/project/badges.vue'], resolve),
            'c-item': (resolve) => require(['@/ui/components/community/post-item'], resolve),
            'c-post-comment': (resolve) => require(['@/ui/components/community/comment'], resolve)
        },
        data() {
            const authors = [
                { name: 'Nakatochi', img: 'https://www.shareicon.net/data/128x128/2015/09/20/104335_avatar_512x512.png' },
                { name: 'Nakatochi', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaeGUxfoKhj7XC5BMdwz8dQ9QbavjCMgk6ZXkn2biteSN1c7nL' },
                { name: 'SatoshiSan', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaeGUxfoKhj7XC5BMdwz8dQ9QbavjCMgk6ZXkn2biteSN1c7nL' },
            ];
            const dates = [
                '2018-07-24T04:09:00.000Z',
                '2017-07-24T04:09:00.000Z',
                '2018-08-12T04:09:00.000Z',
                '2018-08-14T04:09:00.000Z',
                '2018-04-14T04:09:00.000Z',
                '2018-04-17T04:09:00.000Z',
            ];
            const placeholderText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non maximus tellus, eu lacinia justo. Cras semper vestibulum est. Donec a massa vitae nibh consectetur efficitur non in erat. Morbi id dapibus tortor. Praesent sit amet vulputate leo, eu posuere neque. In id ante scelerisque, commodo nisi non, eleifend mauris. Pellentesque massa elit, semper non libero nec, interdum aliquet dolor.';
            return {
                errors: [],
                community_1: false,
                community_2: true,
                posts: [
                    {
                        title: 'This post has been pinned and the title is a single line of text',
                        date: dates[0],
                        rate: -319,
                        comments_count: 3019,
                        status: 'pinned',
                        author: authors[0],
                    },
                    {
                        title: `The previous title doesn't have it's single line aligned vertically because XD does not have this functionality.`,
                        date: dates[1],
                        rate: 232,
                        comments_count: 3019,
                        status: 'locked',
                        author: authors[1]
                    },
                    {
                        title: `The previous title doesn't have it's single line aligned vertically because XD does not have this functionality.`,
                        date: dates[2],
                        rate: 103,
                        comments_count: 894391,
                        status: 'starred',
                        author: authors[1],
                        content: {
                            img: 'http://memesbams.com/wp-content/uploads/2017/08/2.3-Delightful-cheer-up-cat-meme.jpg',
                            text: placeholderText
                        }
                    },
                    {
                        title: 'Actually all the boxes with the titles here are the same size',
                        date: dates[3],
                        rate: 103,
                        comments_count: 894391,
                        author: authors[0]
                    }
                ],
                post: {
                    title: `The previous title doesn't have it's single line aligned vertically because XD does not have this functionality.`,
                    date: dates[3],
                    rate: 1391,
                    comments_count: 894391,
                    status: 'starred',
                    author: authors[0],
                    content: {
                        img: 'http://memesbams.com/wp-content/uploads/2017/08/2.3-Delightful-cheer-up-cat-meme.jpg',
                        text: placeholderText,
                        comments: [
                            { author: authors[1], text: placeholderText, rate: 319, date: dates[4] },
                            { author: authors[0], text: placeholderText, rate: 932, date: dates[1], replies: [
                                    { author: authors[1], text: placeholderText, rate: 318, date: dates[0] },
                                    { author: authors[0], text: placeholderText, rate: -49, date: dates[2] },
                                    { author: authors[1], text: placeholderText, rate: 442, date: dates[1] },
                                    { author: authors[0], text: placeholderText, rate: 1239, date: dates[5] }
                                ]},
                            { author: authors[0], text: placeholderText, rate: -51, date: dates[2] }
                        ]
                    }
                }
            }
        },
        methods: {
        },
        computed: {
            project: updateProject,
        },
        watch: {
        },
        created() {
            //this.$store.dispatch('application/setEditorMode', 'editing')
        },
        beforeDestroy() {
            window.document.getElementById('header-bg').style['background-image'] = 'url(/static/img/backgrounds/1.jpg)'
        },
        updated() {
        }
    }
</script>

<style lang="scss" scoped>

</style>
