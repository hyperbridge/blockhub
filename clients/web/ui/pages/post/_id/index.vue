<template>
    <Layout navigationKey="project">
        <div
            v-if="post"
            class="row">
            <div class="col-12">
                <h2>
                    {{ post.title }}
                </h2>
                <div v-html="post.text" />
            </div>
        </div>
        <div
            v-else
            class="row">
            <div class="col-12">
                <h4>
                    Something went wrong
                </h4>
            </div>
        </div>
    </Layout>
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
    head() {
        return {
            title: `Post | BlockHub`,
            meta: [
                { hid: 'description', name: 'description', content: `BlockHub post` },
                { hid: 'keywords', name: 'keywords', content: 'post, blockchain, game, indie, developer' }
            ]
        }
    },
    components: {
        'Tags': () => import('@ericmuyser/hyper-ui').then(m => m.Tags),
        'Badges': () => import('@ericmuyser/hyper-ui').then(m => m.Badges)
    },
    props: ['projectId', 'postId'],
    data() {
        return {
            id: this.projectId
        }
    },
    computed: {
        project: updateProject,
        post() {
            return this.project.updates.find(obj => {
                if (obj.id === Number(this.postId)) { return obj }
                return false
            })
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
