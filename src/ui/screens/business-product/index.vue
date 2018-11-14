<template>
    <c-business-layout>
        <div>
            <!-- PAGE HEADING -->
            <div class="page-heading">
                <div class="page-heading__container">
                    <h1 class="title">Product Creation</h1>
                    <p class="caption"></p>
                </div>

                <nav aria-label="breadcrumb" role="navigation">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/#/business">Dashboard</a></li>
                        <li class="breadcrumb-item active">Product</li>
                    </ol>
                </nav>
            </div>
            <!-- //END PAGE HEADING -->

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
                    </div>
                    <div class="col-md-6">

                    </div>
                </div>

                <div class="row">
                    <div class="col-2 offset-10">
                        <a href="#" target="_blank" class="btn btn-primary" @click.prevent="save">SAVE</a>
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
            'c-business-layout': (resolve) => require(['@/ui/layouts/business'], resolve)
        },
        data() {
            return {
                loadingState: true
            }
        },
        computed: {
            funding() {
                return this.$store.state.funding
            },
            project() {
                return this.id === 'new' ? this.funding.default_project : this.funding.projects[this.id]
            },
        },
        methods: {
            save() {
                const run = function(
                    local, 
                    DB, 
                    FundingAPI, 
                    MarketplaceAPI, 
                    TokenAPI, 
                    ReserveAPI, 
                    BABEL_PROMISE,
                    BABEL_GENERATOR,
                    BABEL_REGENERATOR
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
