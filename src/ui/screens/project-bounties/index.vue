<template>
    <c-layout navigationKey="project-navigation">
        <div class="content" id="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12" v-if="!project">
                        Project not found
                    </div>
                    <div class="col-12" v-if="project">
                        <h1 class="title margin-top-10 margin-bottom-15">{{ project.name }}</h1>

                        <c-tags-list :tags="project.author_tags"></c-tags-list>

                        <ul class="nav nav-tabs margin-bottom-50 justify-content-between">
                            <li class="nav-item">
                                <a class="nav-link" :href="`/#/project/${project.id}`">Overview</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" :href="`/#/project/${project.id}/community`">Community</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" :href="`/#/project/${project.id}/bounties`">Bounties</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" :href="`/#/project/${project.id}/updates`">Updates</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" :href="`/#/project/${project.id}/milestones`">Milestones</a>
                            </li>
                        </ul>

                        <div v-for="(item, index) in bounties" :key="index" class="bounties_item">
                            <div class="head d-flex justify-content-between align-items-center margin-bottom-15">
                                <div class="col-md-6">
                                    <h4>{{ item.title }}</h4>
                                </div>
                                <div class="col-auto info">
                                    <h4>Submited</h4>
                                    <span>{{ item.submited }}</span>
                                </div>
                                <div class="col-auto info">
                                    <h4>Approved</h4>
                                    <span>{{ item.approved }}</span>
                                </div>
                                <div class="col-auto info">
                                    <h4>Prize</h4>
                                    <span>{{ item.prize }} hbx</span>
                                </div>
                            </div>
                            <div class="text padding-left-15 padding-right-15">
                                <p>{{ item.text }}</p>
                            </div>
                            <div class="bottom padding-left-15 padding-right-15 margin-top-30">
                                    <div class="file_upload">
                                        <i class="fas fa-download"></i>
                                        Select a Dossier File
                                    </div>
                                    <span>or</span>
                                    <input v-model="item.explain_text" class="explain_input" type="text" placeholder="Explain your findings"/>
                                    <button class="btn btn-sm btn-success">submit <i class="fas fa-arrow-right"></i></button>
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

                    }
                ]
            }
        },
        components: {
            'c-tags-list': () => import('@/ui/components/tags'),
            'c-layout': () => import('@/ui/layouts/default')
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
            window.document.getElementById('header-bg').style['background-image'] = 'url(/static/img/products/default.png)'
        }
    }
</script>

<style lang="scss" scoped>
    .bounties_item {
        background: rgba(0, 0, 0, 0.13);
        padding: 30px 15px;
        border-radius: 5px;
        border: 1px solid rgba(255, 255, 255, 0.07);
        overflow: hidden;
        color: #fff;
        margin-bottom: 25px;
        display: block;
        .head {
            font-size: 18px;
            font-weight: bold;
            text-align: left;
            h4{
                padding: 0;
                margin: 0;
            }
            .info {
                text-transform: uppercase;
                text-align: right;
                font-size: 20px;
                h4 {
                    font-size: 13px;
                    font-weight: normal;
                }
            }
        }
        .bottom{
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
            button{
                float: right;
                width: 110px;
                background: #3bc276;
                text-transform: uppercase;
                font-weight: bold;
                font-size: 15px;
                i{
                    margin-left: 5px;
                }
            }
        }
    }
</style>
