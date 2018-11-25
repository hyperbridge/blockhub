<template>
    <c-layout navigationKey="project">
            <div class="container-fluid">
                <div class="row" v-if="post">
                    <div class="col-12">
                        <h2>
                            {{ post.title }}
                        </h2>
                        <div v-html="post.text" />
                    </div>
                </div>
                <div class="row" v-else>
                    <div class="col-12">
                        <h4>
                            Something went wrong
                        </h4>
                    </div>
                </div>
            </div>
    </c-layout>
</template>

<script>
    const updateProject = function () {
        let project = null

        if (this.id === 'new') {
            project = this.$store.state.funding.defaultProject
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
        props: ['projectID', 'postID'],
        components: {
            'c-tags-list': (resolve) => require(['@/ui/components/tags'], resolve),
            'c-badges': (resolve) => require(['@/ui/components/project/badges'], resolve)
        },
        data(){
            return{
                id: this.projectID
            }
        },
        computed:{
            project: updateProject,
            post(){
                return this.project.updates.find( (obj) => {
                    if ( obj['id'] === Number(this.postID) )
                        return obj
                    else
                        return false;
                });
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
