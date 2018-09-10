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
                                <a class="nav-link" :href="`/#/project/${project.id}/bounties`">Bounties</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" :href="`/#/project/${project.id}/updates`">Updates</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" :href="`/#/project/${project.id}/milestones`">Milestones</a>
                            </li>
                        </ul>
                        <div class="timeline-blk position-relative" v-if="timeline">
                            <div class="progress main_timeline" style="height: 15px;">
                                <c-progress-bar :percentages="timeline.timeline_progress"/>
                            </div>
                            <div class="period-container" v-if="timeline">
                                <div v-for="(period, index) in timeline.timeline_periods" :key="index" class="period">
                                    <div class="number">{{ period.number }}</div>
                                    <div class="info">
                                        <div class="title">
                                            {{ period.description }}
                                        </div>
                                        <div class="progress_line">
                                            <i class="fas fa-clock icon"></i>
                                            <c-progress-bar :percentages="period.progress['days_percent']"/>
                                            {{ period.progress['days_amouth'] }} days left
                                        </div>
                                        <div class="progress_line">
                                            <i class="fas fa-check icon"></i>
                                            <c-progress-bar :percentages="period.progress['done_percent']"/>
                                            {{ period.progress['done_percent'] }}% Done
                                        </div>
                                        <div class="progress_line">
                                            <i class="fas fa-dollar-sign icon"></i>
                                            <c-progress-bar :percentages="period.progress['spent_percent']"/>
                                            {{ period.progress['spent_percent'] }}% Spent
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="milestones-list">
                            <c-milestone
                                v-for="(milestone, index) in milestones"
                                :key="index"
                                :milestone="milestone"
                            />
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
            return {
                timeline: {
                    timeline_progress: 24,
                    timeline_periods: [
                        {
                            number: "1",
                            description: "some text about this period",
                            progress: {
                                days_amouth: "97",
                                days_percent: 15,
                                done_percent: 38,
                                spent_percent: 25
                            }
                        },
                        {
                            number: "2",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                            "Proin efficitur consequat turpis, ac tincidunt turpis " +
                            "venenatis fermentum. Suspendisse dignissim scelerisque nisi et rutrum.",
                            progress: {
                                days_amouth: "133",
                                days_percent: 94,
                                done_percent: 8,
                                spent_percent: 95
                            }
                        },
                        {
                            number: "3",
                            description: "Curabitur eget felis nulla. Aliquam erat volutpat. Suspendisse dictum sed nisi quis placerat.",
                            progress: {
                                days_amouth: "92",
                                days_percent: 29,
                                done_percent: 58,
                                spent_percent: 75
                            }
                        }
                    ]
                },
                milestones:[
                    {
                        img: 'http://via.placeholder.com/350x250',
                        title: 'Milestone 1',
                        short_description: 'For far away, behind the word mountains, far from the countries Vokalia\n' +
                        '                                                and Consonatia, there live.',
                        full_text: 'Aenean eu tellus vel tortor tincidunt pharetra. Aenean mattis, sapien vel\n' +
                        '                                            lacinia accumsan, justo mi venenatis justo, ut accumsan diam mauris sit amet\n' +
                        '                                            ipsum. Vivamus iaculis lectus vel egestas vehicula. Phasellus in lacus nunc.\n' +
                        '                                            Curabitur lobortis arcu neque, non rutrum elit placerat eget.',
                        progress: {
                            days_amouth: "133",
                            days_percent: 94,
                            done_percent: 8,
                            spent_percent: 95
                        }

                    },
                    {
                        img: 'http://via.placeholder.com/350x250',
                        title: 'Milestone 2',
                        short_description: 'For far away, behind the word mountains, far from the countries Vokalia\n' +
                        '                                                and Consonatia, there live.',
                        full_text: 'Aenean eu tellus vel tortor tincidunt pharetra. Aenean mattis, sapien vel\n' +
                        '                                            lacinia accumsan, justo mi venenatis justo, ut accumsan diam mauris sit amet\n' +
                        '                                            ipsum. Vivamus iaculis lectus vel egestas vehicula. Phasellus in lacus nunc.\n' +
                        '                                            Curabitur lobortis arcu neque, non rutrum elit placerat eget.',
                        progress: {
                            days_amouth: "171",
                            days_percent: 4,
                            done_percent: 38,
                            spent_percent: 61
                        }

                    }
                ]
            }
        },
        components: {
            'c-layout': () => import('@/ui/layouts/default'),
            'c-milestone': () => import('@/ui/components/projects/milestone'),
            'c-progress-bar': () => import('@/ui/components/progress-bar'),
        },
        computed: {
            project: updateProject
        },
        beforeDestroy() {
            window.document.getElementById('header-bg').style['background-image'] = 'url(/static/img/products/default.png)'
        }
    }
</script>

<style lang="scss" scoped>
    .timeline-blk {
        margin-bottom: 50px;
        .main_timeline {
            position: absolute;
            top: 20px;
            left: 0px;
            right: 0px;
            border-radius: 10px;
            background: #ffffff;
            z-index: 10;
        }
        .period-container {
            display: flex;
            flex-wrap: nowrap;
            justify-content: space-between;
            margin: 0 -20px;
            position: relative;
            z-index: 7;
            .period {
                width: 50%;
                display: inline-block;
                position: relative;
                text-align: center;
                margin: 0 20px;
                z-index: 9;
                .number {
                    font-size: 22px;
                    font-weight: bold;
                    margin-bottom: 20px;
                    display: inline-block;
                    width: 100%;
                    float: left;
                }
                .info {
                    background: #28283d;
                    border-radius: 5px;
                    padding: 20px;
                    box-shadow: 0 3px 6px rgba(0, 0, 0, .16);
                    margin-top: 40px;
                    position: relative;
                    display: inline-block;
                    width: 100%;
                    float: left;
                    &:before {
                        position: absolute;
                        left: 50%;
                        top: -40px;
                        background: #fff;
                        width: 1px;
                        height: 40px;
                        display: inline-block;
                        content: "";
                        z-index: 8;
                    }
                    .title {
                        font-weight: bold;
                        text-align: left;
                        margin-bottom: 20px;
                        font-size: 15px;
                    }
                    .progress_line {
                        display: flex;
                        align-items: center;
                        &:not(:last-child) {
                            margin-bottom: 10px;
                        }
                        .icon {
                            min-width: 20px;
                            font-size: 20px;
                            margin-right: 15px;
                        }
                        .progress-bar {
                            margin-right: 15px;
                        }
                    }
                }
            }
        }
    }
</style>
