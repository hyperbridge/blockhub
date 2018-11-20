<template>
    <c-business-layout title="Crowdfund Creation">
        <div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-6">
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
                        <div class="form-group row">
                            <label class="switch switch-sm col-sm-3">
                                <label>About</label>
                            </label>
                            <div class="col-sm-9">
                                <c-html-editor height="200" :model.sync="project.content" />

                                <span class="form-text"></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group row">
                            <label class="switch switch-sm col-sm-3">
                                <label>Tags</label>
                            </label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" placeholder="">
                                <span class="form-text"></span>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="switch switch-sm col-sm-3">
                                <label>Minimum Contribution Goal</label>
                            </label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" placeholder="Example: 0">
                                <span class="form-text">Projects with Overflow Enabled will accept more than the funding goal (over-contribution)</span>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="switch switch-sm col-sm-3">
                                <label>Maximum Contribution Goal</label>
                            </label>
                            <div class="col-sm-9">

                                <input type="text" class="form-control" placeholder="Example: 1000">
                                <span class="form-text">Projects with Overflow Enabled will accept more than the funding goal (over-contribution)</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="page-heading">
                    <div class="page-heading__container" style="float: none">
                        <a class="title" href="#" style="float: left'" @click="toggleAdvanced">{{ advanced ? 'Hide' : 'Show' }} Advanced</a>
                    </div>
                </div>

                <div class="row" v-if="advanced">
                    <div class="col-md-6">

                        <div class="form-group row">
                            <div class="col-sm-3">
                                <label>Support Email</label>
                            </div>
                            <div class="col-sm-9">
                                <input type="email" class="form-control" placeholder="Example: example@domain.com">
                                <span class="form-text">Projects with Overflow Enabled will accept more than the funding goal (over-contribution)</span>
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
                                    <input type="text" class="form-control" placeholder="Example: @example">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-sm-3">
                                <label>Share Text</label>
                            </div>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" placeholder="Example: Join our crowdfund on BlockHub today!">
                                <span class="form-text">Projects with Overflow Enabled will accept more than the funding goal (over-contribution)</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">

                        <div class="form-group row">
                            <label class="switch switch-sm col-sm-1">
                                <input type="checkbox" name="switch_8" checked="" value="0">
                                <span></span>
                            </label>
                            <div class="col-sm-11">
                                <label>Overflow</label>
                                <span class="form-text">Projects with Overflow enabled will accept more than the funding goal (over-contribution)</span>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="switch switch-sm col-sm-1">
                                <input type="checkbox" name="switch_8" checked="" value="0">
                                <span></span>
                            </label>
                            <div class="col-sm-11">
                                <label>Timeline</label>
                                <span class="form-text">Projects with Timeline enabled will have a current timeline with associated milestones.</span>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="switch switch-sm col-sm-1">
                                <input type="checkbox" name="switch_8" checked="" value="0">
                                <span></span>
                            </label>
                            <div class="col-sm-11">
                                <label>Refunds</label>
                                <span class="form-text">Projects with Refunds enabled will allow contributors to get partial or full refund if the project is deemed not successful (by community vote).</span>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="switch switch-sm col-sm-1">
                                <input type="checkbox" name="switch_8" checked="" value="0">
                                <span></span>
                            </label>
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
                            <label class="switch switch-sm col-sm-1">
                                <input type="checkbox" name="switch_8" checked="" value="0">
                                <span></span>
                            </label>
                            <div class="col-sm-11">
                                <label>No Contribution Period</label>
                                <span class="form-text">Projects with No Contribution Period will be open for contribution until the project is completed, allowing for contributions during the project.</span>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div class="row" v-darklaunch="'GOVERNANCE'">
                    <div class="col-12">
                        Choose your governance system
                    </div>
                    <div class="col-4">
                        <i class="fas first-order" />
                    </div>
                </div>

                <div class="row">
                    <div class="col-2 offset-10" v-if="project.id">
                        <a href="#" target="_blank" class="btn btn-primary" @click.prevent="save">SAVE</a>
                    </div>
                    <div class="col-2 offset-10" v-if="!project.id">
                        <a href="#" target="_blank" class="btn btn-primary" @click.prevent="create">CREATE</a>
                    </div>
                </div>
            </div>
        </div>
    </c-business-layout>
</template>

<script>
    export default {
        props: {
            id: [String, Number]
        },
        components: {
            'c-business-layout': (resolve) => require(['@/ui/layouts/business'], resolve),
            'c-html-editor': (resolve) => require(['@/ui/components/html-editor'], resolve)
        },
        data() {
            return {
                loadingState: true,
                advanced: false
            }
        },
        computed: {
            funding() {
                return this.$store.state.funding
            },
            project() {
                return this.id === 'new' ? this.funding.default_project : this.funding.projects[this.id]
            }
        },
        methods: {
            toggleAdvanced() {
                this.advanced = !this.advanced
            },
            create() {

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
                            { from: profile.public_address }
                        )

                        watcher.stopWatching(() => {
                            // Must be async or tries to launch nasty process
                        })
                    })
                }

                const cmd = {
                    code: run.toString(),
                    params: {
                        profile: this.$store.state.application.account.current_identity,
                        project: this.project
                    }
                }

                BlockHub.Bridge.sendCommand('eval', cmd).then((projectResult) => {
                    if (projectResult.id) {
                        this.project.id = projectResult.id
                        this.successfulCreationMessage = "Congratulations, your project has been created!"

                        this.funding.projects[this.project.id] = this.project

                        this.$router.push('/business/project/' + this.project.id)
                    }
                })

            },
            save() {
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

                BlockHub.Bridge.sendCommand('eval', run.toString())
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.loadingState = false
                document.getElementById('startup-loader').style.display = 'none'
            })
        },
    }
</script>

<style lang="scss" scoped>
</style>
