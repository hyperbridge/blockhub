<template>
    <c-layout navigationKey="project">
        <div v-if="post"
             class="row">
            <div class="col-12">
                <h2>
                    {{ post.title }}
                </h2>
                <div v-html="post.text" />
            </div>
        </div>
        <div v-else
             class="row">
            <div class="col-12">
                <h4>
                    Something went wrong
                </h4>
            </div>
        </div>
    </c-layout>
</template>

<script>
const updateProject = function() {
    let project = null

    if (this.id === 'new') {
        project = this.$store.state.funding.defaultProject
    }

    if (this.$store.state.funding.projects && this.$store.state.funding.projects[this.id]) {
        project = this.$store.state.funding.projects[this.id]
    }

    if (project && project.images && project.images.header) {
        window.document.getElementById('header-bg').style['background-image'] = `url(${project.images.header})`
    }

    return project
}

export default {
    components: {
        'c-tags': () => import('~/components/tags').then(m => m.default || m),
        'c-badges': () => import('~/components/project/badges').then(m => m.default || m)
    },
    props: ['projectID', 'postID'],
    data() {
        return {
            id: this.projectID
        }
    },
    computed: {
        project: updateProject,
        post() {
            return this.project.updates.find(obj => {
                if (obj.id === Number(this.postID)) { return obj }
                return false
            })
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
