<template>
    <c-layout>
        <div class="row">
            <div
                v-if="notice"
                class="col-md-12">
                <p class="alert alert-info">
                    {{ notice }}
                </p>
                <br><br>
            </div>
            <div class="col-md-7">
                <div class="form-group row">
                    <label class="switch switch-sm col-sm-3">
                        <label>Title</label>
                    </label>
                    <div class="col-sm-9">
                        <input
                            v-model="project.name"
                            type="text"
                            class="form-control"
                            placeholder="">
                        <span class="form-text" />
                    </div>
                </div>
                <div class="form-group row">
                    <label class="switch switch-sm col-sm-3">
                        <label>Description</label>
                    </label>
                    <div class="col-sm-9">
                        <input
                            v-model="project.description"
                            type="text"
                            class="form-control"
                            placeholder="">
                        <span class="form-text" />
                    </div>
                </div>
            </div>
            <div class="col-md-5">
                <div class="form-group row">
                    <label class="switch switch-sm col-sm-4">
                        <label>Tags</label>
                    </label>
                    <div class="col-sm-8">
                        <c-multiselect
                            v-model="project.tags"
                            tag-placeholder="Add this as new tag"
                            placeholder="Search or add a tag"
                            label="value"
                            track-by="key"
                            :options="tagOptions"
                            :multiple="true"
                            :taggable="true"
                            @tag="addTag" />
                        <span class="form-text" />
                    </div>
                </div>
                <div class="form-group row">
                    <label class="switch switch-sm col-sm-4">
                        <label>Minimum Contribution Goal</label>
                    </label>
                    <div class="col-sm-8">
                        <input
                            v-model="project.meta.funds.goal"
                            type="text"
                            class="form-control"
                            placeholder="Example: 0">
                        <span class="form-text" />
                    </div>
                </div>
                <div class="form-group row">
                    <label class="switch switch-sm col-sm-4">
                        <label>Maximum Contribution Goal</label>
                    </label>
                    <div class="col-sm-8">
                        <input
                            v-model="project.meta.funds.cap"
                            type="text"
                            class="form-control"
                            placeholder="Example: 1000">
                        <span class="form-text" />
                    </div>
                </div>
            </div>

            <div class="col-12">
                <c-html-editor
                    height="200"
                    :model.sync="project.value" />

                <span class="form-text" />
            </div>

            <div class="col-12">
                <c-heading-bar-color
                    class="mt-4 mb-4"
                    colorCode="#444"
                    textAlign="center"
                    hidden>
                    Advanced Options
                </c-heading-bar-color>

                <div @click="toggleAdvanced">
                    <i
                        class="mr-2 fas"
                        :class="advanced ? 'fa-angle-up' : 'fa-angle-down'" />
                    {{ advanced ? 'Hide' : 'Show' }} Advanced
                </div>
            </div>

            <div
                v-if="advanced"
                class="col-12">
                <hr>
            </div>

            <div
                v-if="advanced"
                class="col-md-6">
                <div class="form-group row">
                    <div class="col-sm-3">
                        <label>Support Email</label>
                    </div>
                    <div class="col-sm-9">
                        <input
                            v-model="project.meta.supportEmail"
                            type="email"
                            class="form-control"
                            placeholder="Example: example@domain.com">
                        <span class="form-text" />
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-3">
                        <label>Twitter Username</label>
                    </div>
                    <div class="col-sm-9">
                        <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                            <div class="input-group-prepend">
                                <span class="input-group-text">@</span>
                            </div>
                            <input
                                v-model="project.meta.twitterUsername"
                                type="text"
                                class="form-control"
                                placeholder="Example: @example">
                        </div>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-3">
                        <label>Share Text</label>
                    </div>
                    <div class="col-sm-9">
                        <input
                            v-model="project.meta.shareText"
                            type="text"
                            class="form-control"
                            placeholder="Example: Join our crowdfund on BlockHub today!">
                        <span class="form-text" />
                    </div>
                </div>
            </div>

            <div
                v-if="advanced"
                class="col-md-6">
                <div class="form-group row">
                    <div class="col-sm-1">
                        <c-switch
                            class="switch-sm"
                            :checked="project.meta.overflowEnabled"
                            @change="val => project.meta.overflowEnabled = val" />
                    </div>
                    <div class="col-sm-11">
                        <label>Overflow</label>
                        <span class="form-text">Projects with Overflow enabled will accept more than the funding goal (over-contribution)</span>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-1">
                        <c-switch
                            class="switch-sm"
                            :checked="project.meta.timelineEnabled"
                            @change="val => project.meta.timelineEnabled = val" />
                    </div>
                    <div class="col-sm-11">
                        <label>Timeline</label>
                        <span class="form-text">Projects with Timeline enabled will have a current timeline with associated milestones.</span>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-1">
                        <c-switch
                            class="switch-sm"
                            :checked="project.meta.refundsEnabled"
                            @change="val => project.meta.refundsEnabled = val" />
                    </div>
                    <div class="col-sm-11">
                        <label>Refunds</label>
                        <span class="form-text">Projects with Refunds enabled will allow contributors to get partial or full refund if the project is deemed not successful (by community vote).</span>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-1">
                        <c-switch
                            class="switch-sm"
                            :checked="project.meta.curationEnabled"
                            @change="val => project.meta.curationEnabled = val" />
                    </div>
                    <div class="col-sm-11">
                        <label>Curation</label>
                        <span class="form-text">Projects with Curation enabled will allow the community to curate the project and earn reputation for their actions.</span>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="switch switch-sm col-sm-1" />
                    <div class="col-sm-11">
                        <input
                            id="ise_default"
                            type="text"
                            name="ise_default"
                            value="">
                        <label>Contribution Period</label>
                        <span class="form-text">Projects with Curation Enabled will allow the community to curate the project and earn reputation for their actions.</span>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-1">
                        <c-switch
                            class="switch-sm"
                            :checked="project.meta.contributionPeriodEnabled"
                            @change="val => project.meta.contributionPeriodEnabled = val" />
                    </div>
                    <div class="col-sm-11">
                        <label>No Contribution Period</label>
                        <span class="form-text">Projects with No Contribution Period will be open for contribution until the project is completed, allowing for contributions during the project.</span>
                    </div>
                </div>
            </div>

            <div
                v-if="advanced"
                class="col-md-12">
                <div
                    class="form-group row"
                    style="text-align: center">
                    <br>
                    <h3 style="width: 100%">
                        Raw Data Editor
                    </h3>
                    <br><br>
                    <textarea
                        :value="JSON.stringify(project)"
                        rows="10"
                        cols="50"
                        @input="updateProjectRaw($event.target.value)" />
                    <br><br>
                    <span class="form-text" />
                    <c-json-editor
                        v-model="project"
                        :objData="project"
                        style="margin: 0 auto" />
                </div>
            </div>

            <div
                class="col-12"
                hidden>
                <div
                    v-access="'governance'"
                    class="row">
                    <div class="col-12">
                        Choose your governance system
                    </div>
                    <div class="col-4">
                        <i class="fas first-order" />
                    </div>
                </div>
            </div>

            <div class="col-12">
                <c-heading-bar-color
                    class="mt-4 mb-4"
                    colorCode="#444"
                    textAlign="center">
                    Blockchain Options
                </c-heading-bar-color>

                <div v-if="blockchain">
                    <p>Project found. ID: {{ blockchain.id }}</p>

                    <c-button
                        status="outline-info"
                        @click="updateBlockchain">
                        Update
                    </c-button>
                </div>

                <div v-if="!blockchain">
                    <strong>Project not found within Funding Protocol.</strong>
                    <c-button
                        status="outline-info"
                        size="sm"
                        @click="syncBlockchain">
                        Sync
                    </c-button>
                    <c-button
                        status="outline-info"
                        size="sm"
                        @click="createBlockchain">
                        Deploy
                    </c-button>
                </div>
            </div>
        </div>

        <template slot="menu">
            <div class="row">
                <div
                    v-if="project.id"
                    class="col-12 text-right">
                    <c-button
                        status="info"
                        :href="`/project/${project.id}`"
                        target="_blank"
                        icon="open">
                        View Page
                    </c-button>
                    <c-button
                        status="success"
                        icon="save"
                        @click="save">
                        Save
                    </c-button>
                </div>
                <div
                    v-if="!project.id"
                    class="col-12 text-right">
                    <c-button
                        status="success"
                        size="md"
                        icon="plus"
                        @click="create">
                        Create
                    </c-button>
                </div>
            </div>
        </template>
    </c-layout>
</template>

<script>
export default {
    components: {
        'c-layout': () => import('~/components/business-layout').then(m => m.default || m),
        'c-html-editor': () => import('~/components/html-editor').then(m => m.default || m),
        'c-json-editor': () => import('~/components/json-editor').then(m => m.default || m),
        'c-multiselect': () => import('vue-multiselect').then(m => m.default || m)
    },
    props: {
        id: [String, Number]
    },
    data() {
        let project = this.id === 'new' ? this.$store.state.funding.defaultProject : this.$store.getters['projects/get'](this.id)

        if (!project) {
            project = this.$store.state.funding.defaultProject
        }

        return {
            loadingState: true,
            notice: '',
            advanced: false,
            project,
            blockchain: false,
            tagOptions: []
        }
    },
    computed: {
        originalProject() {
            return this.id === 'new' ? this.$store.state.funding.defaultProject : this.$store.getters['projects/get'](this.id)
        }
    },
    watch: {
        originalProject() {
            this.project = { ...this.project, ...this.originalProject }
        }
    },
    created() {
        if (this.id !== 'new') {
            this.$store.dispatch('projects/find', {
                query: {
                    id: Number(this.id),
                    $eager: 'tags'
                }
            })
        }
    },
    methods: {
        updateProjectRaw(project) {
            this.project = JSON.parse(project)
        },
        syncBlockchain() {

        },
        addTag(newTag) {
            const tag = {
                key: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
                value: newTag
            }

            this.tagOptions.push(tag)
            this.project.tags.push(tag)
        },
        viewPage() {

        },
        toggleAdvanced() {
            this.advanced = !this.advanced
        },
        create() {
            this.project.ownerId = this.$store.state.application.activeProfile.id

            this.$store.dispatch('projects/create', this.project).then(res => {
                this.project.id = res.id
                this.notice = 'Congratulations, your project has been created!'

                this.$router.push(`/business/project/${this.project.id}`)
            })
        },
        async save() {
            this.project.ownerId = this.$store.state.application.activeProfile.id

            await this.$store.dispatch('projects/update', [this.project.id, this.project, {
                query: {
                    $eager: 'tags'
                }
            }])

            this.notice = 'Project has been saved.'
            // this.project.id = projectResult.id
            // this.successfulCreationMessage = "Congratulations, your project has been created!"

            // this.$router.push('/business/project/' + this.project.id)
        }
    }
}
</script>

<style lang="scss">
.note-editor.note-frame .note-editing-area .note-editable {
    background: #30314d !important;
    color: #fff;
}
</style>
