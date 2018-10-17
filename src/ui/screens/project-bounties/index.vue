<template>
    <c-layout navigationKey="project">
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

                        <ul class="nav nav-tabs margin-bottom-20 justify-content-between">
                            <li class="nav-item">
                                <router-link :to="`/project/${project.id}`" class="nav-link">Overview</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="`/project/${project.id}/community`" class="nav-link">Community</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="`/project/${project.id}/bounties`" class="nav-link active">Bounties</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="`/project/${project.id}/updates`" class="nav-link">Updates</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="`/project/${project.id}/milestones`" class="nav-link">Milestones</router-link>
                            </li>
                        </ul>

                        <div class="bounties-header margin-bottom-20">
                            <div class="bounties-header__info">
                                <div class="h3 text-white font-weight-bold mb-0">
                                    {{ bounties.length }} Bounties available
                                </div>
                            </div>
                            <div class="bounties-header__stat">
                                <c-icon-block icon="users" class="ml-5">
                                    <div class="h6 p-0 m-0 text-white font-weight-bold">
                                        81
                                    </div>
                                    Contributors
                                </c-icon-block>
                                <c-icon-block icon="arrow-right" class="ml-5">
                                    <div class="h6 p-0 m-0 text-white font-weight-bold">
                                        81
                                    </div>
                                    Submissions
                                </c-icon-block>
                            </div>
                            <div>
                                <c-button status="dark" icon_hide size="lg" fontSize="14" class="text-uppercase with-label">
                                    <span class="btn-label">
                                        <i class="fas fa-lock"></i>
                                    </span>
                                    Management
                                </c-button>
                                <c-button status="info" icon_hide size="lg" fontSize="14" class="text-uppercase ml-3">
                                    My bounties
                                </c-button>
                            </div>
                        </div>

                        <div v-for="(item, index) in bounties" :key="index" class="bounties_item margin-bottom-30">
                            <div class="bountie__head d-flex justify-content-between align-items-center">
                                <div class="bountie__head-stat">
                                    <div>
                                        <h4 class="mb-0">Prize</h4>
                                        <span>{{ item.prize | numeralFormat('0,0') }} HBX</span>
                                    </div>
                                    <div>
                                        <h4 class="mb-0">Submited</h4>
                                        <span>{{ item.submited }}</span>
                                    </div>
                                    <div>
                                        <h4 class="mb-0">Approved</h4>
                                        <span>{{ item.approved }}</span>
                                    </div>
                                </div>
                                <c-button status="success" fontSize="14" icon_hide @click=" showDownload = !showDownload " size="lg" class="text-uppercase">
                                    Claim Bounty
                                </c-button>
                            </div>
                            <div class="bountie__text padding-left-15 padding-right-15">
                                <h4>{{ item.title }}</h4>
                                <p>{{ item.text }}</p>
                            </div>
                            <transition name="fade">
                                <div class="bountie__bottom" v-if="showDownload">
                                    <div class="file_upload">
                                        <i class="fas fa-download"></i>
                                        Select a Dossier File
                                    </div>
                                    <span>or</span>
                                    <input v-model="item.explain_text" class="explain_input" type="text" placeholder="Explain your findings"/>
                                    <c-button status="success" icon="arrow-right" size="md">Submit</c-button>
                                </div>
                            </transition>
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
        data: function () {
            return{
                "bounties": [
                    {
                        "title": "Find a bug, behind the word mountains, far from the countries Vokalia and Consonantia, there live.",
                        "submited": "2851",
                        "approved": "408",
                        "prize": "30000",
                        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu nulla sed urna malesuada ornare nec ac risus. Nam vehicula mauris ac augue finibus finibus non et erat. Integer malesuada rutrum elit non hendrerit. Nam volutpat scelerisque magna, in lacinia nulla consectetur eget. Nunc feugiat egestas arcu id lobortis. Proin rhoncus viverra mi, ac bibendum ligula molestie eget. Vivamus a tempor ligula.",
                        "explain_text": "",
                        "file_src": ""

                    },
                    {
                        "title": "Find a bug, behind the word mountains, far from the countries Vokalia and Consonantia, there live.",
                        "submited": "2851",
                        "approved": "408",
                        "prize": "30000",
                        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu nulla sed urna malesuada ornare nec ac risus. Nam vehicula mauris ac augue finibus finibus non et erat. Integer malesuada rutrum elit non hendrerit. Nam volutpat scelerisque magna, in lacinia nulla consectetur eget. Nunc feugiat egestas arcu id lobortis. Proin rhoncus viverra mi, ac bibendum ligula molestie eget. Vivamus a tempor ligula.",
                        "explain_text": "",
                        "file_src": ""

                    }
                ],
                showDownload: false
            }
        },
        components: {
            'c-tags-list': (resolve) => require(['@/ui/components/tags'], resolve),
            'c-layout': (resolve) => require(['@/ui/layouts/default'], resolve),
            'c-badges': (resolve) => require(['@/ui/components/project/badges.vue'], resolve),
            'c-icon-block': (resolve) => require(['@/ui/components/block/with-icon'], resolve)
        },
        methods: {
            save() {
                this.$store.dispatch('funding/updateProject', this.product)
            }
        },
        computed: {
            project: updateProject
        },
        mounted: updateProject,
        created: updateProject,
        beforeDestroy() {
            window.document.getElementById('header-bg').style['background-image'] = 'url(/static/img/backgrounds/1.jpg)'
        }
    }
</script>

<style lang="scss" scoped>
    .bounties-header{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .bounties_item {
        border-radius: 5px;
        overflow: hidden;
        color: #fff;
        margin-bottom: 25px;
        display: block;
    }
    .bountie__head {
        font-size: 18px;
        font-weight: bold;
        text-align: left;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #222638;
        padding: 15px;
    }
    .bountie__head-stat{
        width: 60%;
        display: flex;
        align-items: center;
        div{
            margin-right: 35px;
        }
    }
    .bountie__text{
        background: #60617c;
        padding: 15px;
        h4{
            font-size: 18px;
            font-weight: bold;
        }
    }
    .bountie__bottom{
        background: #4e4f65;
        padding: 15px;
        .file_upload,
        input{
            display: inline-block;
            border: 1px solid #161722;
            background: #212135;
            padding: 5px 10px;
            border-radius: 5px;
        }
        .file_upload{
            width: 170px;
            i{
                margin-right: 10px;
                color: #526af6;
            }
        }
        input{
            width: calc( 100% - 340px );
        }
        span{
            width: 35px;
            text-align: center;
            display: inline-block;
        }
        .c-btn{
            float: right;
            width: 90px;
        }
    }
    .with-label{
        position: relative;
        .btn-label{
            position: absolute;
            top: 0px;
            left: 0px;
            width: 25px;
            padding: 2px;
            border-radius: 5px 0 0 0;
            font-size: 10px;
            background: #FADC72;
            height: 25px;
            color: #30304B;
            line-height: 10px;
            -webkit-clip-path: polygon(0 0, 0% 100%, 100% 0);
            clip-path: polygon(0 0, 0% 100%, 100% 0);
        }
    }
</style>
