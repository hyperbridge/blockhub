<template>
    <c-layout navigationKey="project">
        <div
            v-if="update"
            class="row">
            <div class="col-12">
                <h2>
                    {{ update.title }}
                </h2>
                <div v-html="update.text" />
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
    },
    data() {
        return {
            id: this.projectID
        }
    },
    computed: {
        project: updateProject,
        update() {
            return this.project.updates.find(obj => {
                if (obj.id === Number(this.$route.params.id)) { return obj }
                return false
            })
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
