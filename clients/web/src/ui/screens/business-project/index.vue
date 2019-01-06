<template>
    <div class="row" v-if="project">
        <div class="col-12 mb-4" v-if="project.id">
            <c-button :to="`/project/${project.id}`" target="_blank" status="info" icon="open">
                View Page
            </c-button>
        </div>
        <div class="col-md-12" v-if="notice">
            <p class="alert alert-info">{{ notice }}</p>
            <br /><br />
        </div>
        <div class="col-md-7">
            <div class="form-group row">
                <label class="switch switch-sm col-sm-3">
                    <label>Title</label>
                </label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" placeholder="" v-model="project.name">
                    <span class="form-text"></span>
                </div>
            </div>
            <div class="form-group row">
                <label class="switch switch-sm col-sm-3">
                    <label>Description</label>
                </label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" placeholder="" v-model="project.description">
                    <span class="form-text"></span>
                </div>
            </div>
        </div>
        <div class="col-md-5">
            <div class="form-group row">
                <label class="switch switch-sm col-sm-4">
                    <label>Tags</label>
                </label>
                <div class="col-sm-8">
                    <c-multiselect v-model="project.tags"
                                tag-placeholder="Add this as new tag"
                                placeholder="Search or add a tag"
                                label="value"
                                track-by="key"
                                :options="tagOptions"
                                :multiple="true"
                                :taggable="true"
                                @tag="addTag">
                    </c-multiselect>
                    <span class="form-text"></span>
                </div>
            </div>
            <div class="form-group row">
                <label class="switch switch-sm col-sm-4">
                    <label>Minimum Contribution Goal</label>
                </label>
                <div class="col-sm-8">
                    <input type="text" class="form-control" placeholder="Example: 0" v-model="project.meta.funds.goal">
                    <span class="form-text"></span>
                </div>
            </div>
            <div class="form-group row">
                <label class="switch switch-sm col-sm-4">
                    <label>Maximum Contribution Goal</label>
                </label>
                <div class="col-sm-8">

                    <input type="text" class="form-control" placeholder="Example: 1000" v-model="project.meta.funds.cap">
                    <span class="form-text"></span>
                </div>
            </div>
        </div>

        <div class="col-12">
            <c-html-editor height="200" :model.sync="project.value" />

            <span class="form-text"></span>
        </div>

        <div class="col-12">
            <c-heading-bar-color class="mt-4 mb-4" colorCode="#444" textAlign="center" hidden>Advanced Options</c-heading-bar-color>

            <div @click="toggleAdvanced">
                <i class="mr-2 fas" :class="advanced ? 'fa-angle-up' : 'fa-angle-down'"></i>
                {{ advanced ? 'Hide' : 'Show' }} Advanced
            </div>
        </div>

        <div class="col-12" v-if="advanced">
            <hr />
        </div>

        <div class="col-md-6" v-if="advanced">
            <div class="form-group row">
                <div class="col-sm-3">
                    <label>Support Email</label>
                </div>
                <div class="col-sm-9">
                    <input type="email" class="form-control" placeholder="Example: example@domain.com" v-model="project.meta.supportEmail">
                    <span class="form-text"></span>
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
                        <input type="text" class="form-control" placeholder="Example: @example" v-model="project.meta.twitterUsername">
                    </div>
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-3">
                    <label>Share Text</label>
                </div>
                <div class="col-sm-9">
                    <input type="text" class="form-control" placeholder="Example: Join our crowdfund on BlockHub today!" v-model="project.meta.shareText">
                    <span class="form-text"></span>
                </div>
            </div>
        </div>

        <div class="col-md-6" v-if="advanced">
            <div class="form-group row">
                <div class="col-sm-1">
                    <c-switch
                        class="switch-sm"
                        :checked="project.meta.overflowEnabled"
                        @change="val => project.meta.overflowEnabled = val"
                    />
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
                        @change="val => project.meta.timelineEnabled = val"
                    />
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
                        @change="val => project.meta.refundsEnabled = val"
                    />
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
                        @change="val => project.meta.curationEnabled = val"
                    />
                </div>
                <div class="col-sm-11">
                    <label>Curation</label>
                    <span class="form-text">Projects with Curation enabled will allow the community to curate the project and earn reputation for their actions.</span>
                </div>
            </div>
            <div class="form-group row">
                <label class="switch switch-sm col-sm-1">
                </label>
                <div class="col-sm-11">
                    <input type="text" id="ise_default" name="ise_default" value="">
                    <label>Contribution Period</label>
                    <span class="form-text">Projects with Curation Enabled will allow the community to curate the project and earn reputation for their actions.</span>
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-1">
                    <c-switch
                        class="switch-sm"
                        :checked="project.meta.contributionPeriodEnabled"
                        @change="val => project.meta.contributionPeriodEnabled = val"
                    />
                </div>
                <div class="col-sm-11">
                    <label>No Contribution Period</label>
                    <span class="form-text">Projects with No Contribution Period will be open for contribution until the project is completed, allowing for contributions during the project.</span>
                </div>
            </div>
        </div>

        <div class="col-md-12" v-if="advanced">
            <div class="form-group row" style="text-align: center">
                <br />
                <h3 style="width: 100%">Raw Data Editor</h3>
                <br /><br />
                <span class="form-text"></span>
                <c-json-editor :objData="project" v-model="project" style="margin: 0 auto"></c-json-editor>
            </div>
        </div>

        <div class="col-12" hidden>
            <div class="row" v-darklaunch="'GOVERNANCE'">
                <div class="col-12">
                    Choose your governance system
                </div>
                <div class="col-4">
                    <i class="fas first-order" />
                </div>
            </div>
        </div>

        <div class="col-12">
            <c-heading-bar-color class="mt-4 mb-4" colorCode="#444" textAlign="center">Blockchain Options</c-heading-bar-color>

            <div v-if="blockchain">
                <p>Project found. ID: {{ blockchain.id }}</p>

                <c-button status="outline-info" @click="updateBlockchain">
                    Update
                </c-button>
            </div>

            <div v-if="!blockchain">
                <strong>Project not found within Funding Protocol.</strong>
                <c-button status="outline-info" size="sm" @click="syncBlockchain">
                    Sync
                </c-button> 
                <c-button status="outline-info" size="sm" @click="createBlockchain">
                    Deploy
                </c-button>
            </div>
        </div>

        <div class="col-12">
            <hr />
        
            <div class="row">
                <div class="col-12 text-right" v-if="project.id">
                    <c-button status="success" @click="save" icon="save">
                        Save
                    </c-button>
                </div>
                <div class="col-12 text-right" v-if="!project.id">
                    <c-button status="success" @click="create" icon="plus">
                        Create
                    </c-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import 'vue-multiselect/dist/vue-multiselect.min.css'

    export default {
        props: {
            id: [String, Number]
        },
        components: {
            'c-html-editor': (resolve) => require(['@/ui/components/html-editor'], resolve),
            'c-json-editor': (resolve) => require(['@/ui/components/json-editor'], resolve),
            'c-multiselect': (resolve) => require(['vue-multiselect'], resolve),
        },
        data() {
            const project = this.id === 'new' ? this.$store.state.funding.defaultProject : this.$store.getters['projects/get'](this.id)

            return {
                loadingState: true,
                notice: "",
                advanced: false,
                project: project,
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
                        $eager: 'tags',
                    }
                })
            }
        },
        methods: {
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

                            Bridge.sendCommand('updateState', {
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

                window.BlockHub.Bridge.sendCommand('eval', cmd).then((projectResult) => {
                    if (projectResult.id) {
                        this.project.id = projectResult.id
                        this.successfulCreationMessage = "Congratulations, your project has been created!"

                        this.funding.projects[this.project.id] = this.project

                        this.$router.push('/business/project/' + this.project.id)
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
                            noTimeline: true,
                        }

                        const projectRegistrationContract = FundingAPI.api.ethereum.state.contracts.ProjectRegistration.deployed

                        let resProjectId = null
                        const getProjectId = new Promise((res) => {
                            resProjectId = res
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

                            resProjectId(project.id)
                        })

                        await projectRegistrationContract.createProject(
                            project.title,
                            project.description,
                            project.about,
                        )

                        watcher.stopWatching()

                        const projectId = await getProjectId

                        await projectRegistrationContract.setProjectContributionGoals(projectId, project.minContributionGoal, project.maxContributionGoal, project.contributionPeriod, { from: developerAccount });
                        await projectRegistrationContract.setProjectTerms(projectId, project.noRefunds, project.noTimeline, { from: developerAccount });

                        const remoteProject = await projectRegistrationContract.getProject(projectId);

                        console.log(remoteProject)
                    })
                }

                window.BlockHub.Bridge.sendCommand('eval', run.toString())
            },
            addTag (newTag) {
                const tag = {
                    key: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000)),
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

                this.$store.dispatch('projects/create', this.project).then((res) => {
                    this.project.id = res.id
                    this.notice = "Congratulations, your project has been created!"

                    this.$router.push('/business/project/' + this.project.id)
                })

            },
            save() {
                this.$store.dispatch('projects/update', [this.project.id, this.project, {
                    query: {
                        $eager: 'tags'
                    }
                }]).then(() => {
                    this.notice = "Project has been saved."
                    //this.project.id = projectResult.id
                    //this.successfulCreationMessage = "Congratulations, your project has been created!"

                    //this.$router.push('/business/project/' + this.project.id)
                })
            }
        },
    }
</script>

<style lang="scss">
.note-editor.note-frame .note-editing-area .note-editable {
    background: #30314d !important;
    color: #fff;
}
</style>
