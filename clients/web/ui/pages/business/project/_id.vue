<template>
    <c-layout>
        <div
            v-if="project"
            class="row margin-bottom-40">
            <div
                v-if="notice"
                class="col-md-12">
                <p class="alert alert-info">
                    {{ notice }}
                </p>
                <br><br>
            </div>
            <div class="col-md-6">
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
            <div class="col-md-6">
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

            <div class="col-12 margin-top-10">
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
                        :value="projectJson"
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
                    v-darklaunch="'GOVERNANCE'"
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
                        size="lg"
                        :href="`/project/${project.id}`"
                        target="_blank"
                        icon="eye">
                        View Page
                    </c-button>
                    <c-button
                        status="success"
                        size="lg"
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
                        size="lg"
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
import beautify from 'json-beautify'

export default {
    components: {
        'c-layout': () => import('~/components/business-layout').then(m => m.default || m),
        'c-html-editor': () => import('~/components/html-editor').then(m => m.default || m),
        'c-json-editor': () => import('~/components/json-editor').then(m => m.default || m),
        'c-multiselect': () => import('vue-multiselect').then(m => m.default || m)
    },
    props: {
    },
    data() {
        return {
            loadingState: true,
            notice: '',
            project: this.$route.params.id === 'new' ? this.$store.state.funding.defaultProject : this.$store.getters['projects/get'](this.$route.params.id),
            advanced: false,
            blockchain: false,
            tagOptions: []
        }
    },
    computed: {
        savedProject() {
            return this.$store.getters['projects/get'](this.$route.params.id)
        },
        projectJson() {
            return beautify(this.project, null, 2, 100)
        }
    },
    watch: {
        savedProject() {
            this.project = { ...this.project, ...this.savedProject }
        }
    },
    created() {
        if (this.$route.params.id !== 'new') {
            this.$store.dispatch('projects/find', {
                query: {
                    id: Number(this.$route.params.id),
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
        createBlockchain() {
            const run = function(
                local,
                DB,
                Bridge,
                FundingAPI,
                MarketplaceAPI,
                TokenAPI,
                ReserveAPI,
                BABEL_PROMISE,
                BABEL_GENERATOR,
                BABEL_REGENERATOR,
                params
            ) {
                const { project, profile } = params

                return new Promise(async (resolve, reject) => {
                    const projectRegistrationContract = FundingAPI.api.ethereum.state.contracts.ProjectRegistration.deployed

                    let created = false

                    const watcher = projectRegistrationContract.ProjectCreated().watch((err, res) => {
                        if (created) return

                        created = true

                        if (err) {
                            console.warn('[BlockHub][Marketplace] Error', err)

                            return reject(err)
                        }

                        project.$loki = undefined
                        project.id = res.args.projectId.toNumber()

                        try {
                            DB.funding.projects.insert(project)
                            console.log('after', project.id)
                        } catch (e) {
                            try {
                                DB.funding.projects.update(project)
                            } catch (e) {
                                reject(e)
                            }
                        }

                        DB.save()

                        this.$desktop.sendCommand('updateState', {
                            module: 'funding',
                            state: {
                                projects: DB.funding.projects.data
                            }
                        })

                        console.log('Project created')

                        resolve(project)
                    })

                    await projectRegistrationContract.createProject(
                        project.name,
                        project.description,
                        project.content,
                        { from: profile.address }
                    )

                    watcher.stopWatching(() => {
                        // Must be async or tries to launch nasty process
                    })
                })
            }

            const cmd = {
                key: run.toString(),
                params: {
                    profile: this.$store.state.application.activeProfile,
                    project: this.project
                }
            }

            this.$desktop.sendCommand('eval', cmd).then(projectResult => {
                if (projectResult.id) {
                    this.project.id = projectResult.id
                    this.successfulCreationMessage = 'Congratulations, your project has been created!'

                    this.funding.projects[this.project.id] = this.project

                    this.$router.push(`/business/project/${this.project.id}`)
                }
            })
        },
        updateBlockchain() {
            const run = function(
                local,
                DB,
                Bridge,
                FundingAPI,
                MarketplaceAPI,
                TokenAPI,
                ReserveAPI,
                BABEL_PROMISE,
                BABEL_GENERATOR,
                BABEL_REGENERATOR,
                params
            ) {
                return new Promise(async () => {
                    const project = {
                        title: 'test',
                        description: 'test',
                        about: 'test',
                        minContributionGoal: 1000,
                        maxContributionGoal: 10000,
                        contributionPeriod: 4,
                        noRefunds: false,
                        noTimeline: true
                    }

                    const projectRegistrationContract = FundingAPI.api.ethereum.state.contracts.ProjectRegistration.deployed

                    let resprojectId = null
                    const getprojectId = new Promise(res => {
                        resprojectId = res
                    })

                    const watcher = projectRegistrationContract.ProjectCreated().watch((err, res) => {
                        if (err) {
                            console.warn('[BlockHub][Funding] Error', err)

                            return reject(err)
                        }

                        project.$loki = undefined
                        project.id = res.args.projectId.toNumber()

                        try {
                            DB.funding.projects.insert(project)
                        } catch (e) {
                            try {
                                DB.funding.projects.update(project)
                            } catch (e) {
                                reject(e)
                            }
                        }

                        resprojectId(project.id)
                    })

                    await projectRegistrationContract.createProject(
                        project.title,
                        project.description,
                        project.about,
                    )

                    watcher.stopWatching()

                    const projectId = await getprojectId

                    await projectRegistrationContract.setProjectContributionGoals(projectId, project.minContributionGoal, project.maxContributionGoal, project.contributionPeriod, { from: developerAccount })
                    await projectRegistrationContract.setProjectTerms(projectId, project.noRefunds, project.noTimeline, { from: developerAccount })

                    const remoteProject = await projectRegistrationContract.getProject(projectId)

                    console.log(remoteProject)
                })
            }

            this.$desktop.sendCommand('eval', run.toString())
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

            window.scrollTo(0, 0)
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
