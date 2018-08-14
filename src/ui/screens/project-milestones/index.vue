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
                                <div class="progress-bar" role="progressbar"
                                     :style="{ width: timeline.timeline_progress + '%' }"
                                     :aria-valuenow="timeline.timeline_progress"
                                     aria-valuemin="0"
                                     aria-valuemax="100"></div>
                            </div>
                            <div class="period-container" v-if="timeline">
                                <div v-for="(period, index) in timeline.timeline_periods" :key="index" class="period">
                                    <div class="number">{{ period.number }}</div>
                                    <div class="info">
                                        <div class="title">
                                            {{ period.description }}
                                        </div>
                                        <div class="progress_line">
                                            <div class="icon">
                                                <i class="fas fa-clock"></i>
                                            </div>
                                            <div class="progress">
                                                <div class="progress-bar" role="progressbar"
                                                     :style="{ width: period.progress['days_percent'] + '%' }"
                                                     :aria-valuenow="period.progress['days_percent']"
                                                     aria-valuemin="0"
                                                     aria-valuemax="100"></div>
                                            </div>
                                            <div class="description">
                                                {{ period.progress['days_amouth'] }} days left
                                            </div>
                                        </div>
                                        <div class="progress_line">
                                            <div class="icon">
                                                <i class="fas fa-check"></i>
                                            </div>
                                            <div class="progress">
                                                <div class="progress-bar" role="progressbar"
                                                     :style="{ width: period.progress['done_percent'] + '%' }"
                                                     :aria-valuenow="period.progress['done_percent']"
                                                     aria-valuemin="0"
                                                     aria-valuemax="100"></div>
                                            </div>
                                            <div class="description">
                                                {{ period.progress['done_percent'] }}% Done
                                            </div>
                                        </div>
                                        <div class="progress_line">
                                            <div class="icon">
                                                <i class="fas fa-dollar-sign"></i>
                                            </div>
                                            <div class="progress">
                                                <div class="progress-bar" role="progressbar"
                                                     :style="{ width: period.progress['spent_percent'] + '%' }"
                                                     :aria-valuenow="period.progress['spent_percent']"
                                                     aria-valuemin="0"
                                                     aria-valuemax="100"></div>
                                            </div>
                                            <div class="description">
                                                {{ period.progress['spent_percent'] }}% Spent
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="milestones-list">
                            <div class="milestones-list__item"
                                 v-for="(milestone, index) in milestones"
                                 :key="index"
                            >
                                <div class="thumb">
                                    <img :src="milestone.img"/>
                                </div>
                                <div class="info">
                                    <div class="head">
                                        <div class="description">
                                            <h4>{{ milestone.title }}</h4>
                                            <p>{{ milestone.short_description}}</p>
                                        </div>
                                        <div class="milestones_progress">
                                            <div class="progress_line">
                                                <div class="icon">
                                                    <i class="fas fa-clock"></i>
                                                </div>
                                                <div class="progress">
                                                    <div class="progress-bar" role="progressbar"
                                                         :style="{ width: milestone.progress['days_percent'] + '%' }"
                                                         :aria-valuenow="milestone.progress['days_percent']"
                                                         aria-valuemin="0"
                                                         aria-valuemax="100"></div>
                                                </div>
                                                <div class="description">
                                                    {{ milestone.progress['days_amouth'] }} days left
                                                </div>
                                            </div>
                                            <div class="progress_line">
                                                <div class="icon">
                                                    <i class="fas fa-check"></i>
                                                </div>
                                                <div class="progress">
                                                    <div class="progress-bar" role="progressbar"
                                                         :style="{ width: milestone.progress['done_percent'] + '%' }"
                                                         :aria-valuenow="milestone.progress['done_percent']"
                                                         aria-valuemin="0"
                                                         aria-valuemax="100"></div>
                                                </div>
                                                <div class="description">
                                                    {{ milestone.progress['done_percent'] }}% Done
                                                </div>
                                            </div>
                                            <div class="progress_line">
                                                <div class="icon">
                                                    <i class="fas fa-dollar-sign"></i>
                                                </div>
                                                <div class="progress">
                                                    <div class="progress-bar" role="progressbar"
                                                         :style="{ width: milestone.progress['spent_percent'] + '%' }"
                                                         :aria-valuenow="milestone.progress['spent_percent']"
                                                         aria-valuemin="0"
                                                         aria-valuemax="100"></div>
                                                </div>
                                                <div class="description">
                                                    {{ milestone.progress['spent_percent'] }}% Spent
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text">
                                        <p>{{ milestone.full_text}}</p>
                                    </div>
                                </div>
                            </div>
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
            window.document.body.style['background-image'] = 'url(' + project.images.header + ')'

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
            'c-layout': () => import('@/ui/layouts/default')
        },
        computed: {
            project: updateProject
        },
        beforeDestroy() {
            window.document.body.style['background-image'] = 'url(/static/img/products/default.png)'
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
            .progress-bar {
                height: 15px;
                border-radius: 10px;
                background: #2abaf3; /* Old browsers */
                background: -moz-linear-gradient(left, #2abaf3 0%, #63ec48 100%); /* FF3.6-15 */
                background: -webkit-linear-gradient(left, #2abaf3 0%, #63ec48 100%); /* Chrome10-25,Safari5.1-6 */
                background: linear-gradient(to right, #2abaf3 0%, #63ec48 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
                filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#2abaf3', endColorstr='#63ec48', GradientType=1); /* IE6-9 */
            }
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
                        margin: 10px 0;
                        &:last-child {
                            margin-bottom: 0;
                        }
                        .icon {
                            display: inline-block;
                            width: 20px;
                            float: left;
                            font-size: 20px;
                            color: #fff;
                            margin-right: 5px;
                        }
                        .progress {
                            display: inline-block;
                            width: calc(100% - 150px);
                            background: #3e3e5c;
                            border-radius: 4px;
                            margin: 7px 0;
                            height: 7px;
                            .progress-bar {
                                height: 7px;
                                border-radius: 4px;
                                background: #2abaf3; /* Old browsers */
                                background: -moz-linear-gradient(left, #2abaf3 0%, #63ec48 100%); /* FF3.6-15 */
                                background: -webkit-linear-gradient(left, #2abaf3 0%, #63ec48 100%); /* Chrome10-25,Safari5.1-6 */
                                background: linear-gradient(to right, #2abaf3 0%, #63ec48 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
                                filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#2abaf3', endColorstr='#63ec48', GradientType=1); /* IE6-9 */
                            }
                        }
                        .description {
                            display: inline-block;
                            float: right;
                            width: 100px;
                            text-align: left;
                        }

                    }
                }
            }
        }
    }
    .milestones-list__item{
        background: #2b2b41;
        padding: 25px;
        border: 1px solid #36364e;
        border-radius: 5px;
        margin-bottom: 50px;
        display: inline-block;
        float: left;
        width: 100%;
        &:last-child{
            margin-bottom: 0;
        }
        .thumb{
            display: inline-block;
            float: left;
            width: 25%;
            img{
                width: 100%;
                height: auto;
            }
        }
        .info{
            display: inline-block;
            float: right;
            width: 73%;
            .head{
                display: flex;
                flex-wrap: nowrap;
                width: 100%;
                justify-content: space-between;
                margin-bottom: 30px;
                .description{
                    width: 68%;
                    h4{
                        font-size: 26px;
                        font-weight: bold;
                        margin-bottom: 15px;
                    }
                    p{
                        font-size: 16px;
                        font-weight: bold;
                    }
                }
                .milestones_progress{
                    width: 30%;
                    .progress_line {
                        margin: 0 0 5px 0;
                        &:last-child {
                            margin-bottom: 0;
                        }
                        .icon {
                            display: inline-block;
                            width: 20px;
                            float: left;
                            font-size: 18px;
                            color: #fff;
                            margin-right: 10px;
                        }
                        .progress {
                            display: inline-block;
                            width: calc(100% - 150px);
                            background: #3e3e5c;
                            border-radius: 4px;
                            margin: 7px 0;
                            height: 7px;
                            .progress-bar {
                                height: 7px;
                                border-radius: 4px;
                                background: #2abaf3; /* Old browsers */
                                background: -moz-linear-gradient(left, #2abaf3 0%, #63ec48 100%); /* FF3.6-15 */
                                background: -webkit-linear-gradient(left, #2abaf3 0%, #63ec48 100%); /* Chrome10-25,Safari5.1-6 */
                                background: linear-gradient(to right, #2abaf3 0%, #63ec48 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
                                filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#2abaf3', endColorstr='#63ec48', GradientType=1); /* IE6-9 */
                            }
                        }
                        .description {
                            display: inline-block;
                            float: right;
                            width: 100px;
                            text-align: left;
                        }

                    }
                }
            }
            .text{
                font-size: 15px;
            }
        }
    }
</style>
