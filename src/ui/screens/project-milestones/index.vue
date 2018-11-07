<template>
    <div class="row">
    <div class="col-12" v-if="!project.milestones">

            <div class="posts-timeline__end no-updates">
                <h3>
                    There is no milestones defined.
                </h3>
            </div>
    </div>
    <div class="col-12" v-if="project.milestones">
            <div class="milestones-header margin-bottom-20">
                <div class="milestones-header__info">
                    <div class="h3 text-white font-weight-bold mb-0">
                        {{ project.milestones.overall_progress }}% Project Completion
                    </div>
                    {{ doneMilestones }} of {{ project.milestones.items.length }} Milestones Completed
                </div>
                <div class="milestones-header__stat">
                    <c-icon-block icon="check">
                        <div class="h6 p-0 m-0 text-white font-weight-bold">
                            Completed
                        </div>
                        {{ doneMilestones }} Milestones
                    </c-icon-block>
                    <c-icon-block icon="th">
                        <div class="h6 p-0 m-0 text-white font-weight-bold">
                            Total
                        </div>
                        {{ project.milestones.items.length }} Milestones
                    </c-icon-block>
                    <c-icon-block icon="file-alt">
                        <div class="h6 p-0 m-0 text-white font-weight-bold">
                            Total Spent
                        </div>
                        {{ project.funding.spent_amount | currency }}
                    </c-icon-block>
                    <c-icon-block icon="hand-holding-usd">
                        <div class="h6 p-0 m-0 text-white font-weight-bold">
                            Project Budget
                        </div>
                        {{ project.funding.funded_amount | currency  }}
                    </c-icon-block>
                </div>
            </div>
            <div class="timeline-blk position-relative">
                <div class="progress main_timeline" style="height: 15px;">
                    <c-progress-bar :percentages="project.milestones.overall_progress"/>
                </div>
                <div class="period-container" v-if="milestones">
                    <div v-for="(milestone, index) in milestones" :key="index" class="period">
                        <div class="number">{{ milestone.step_number }}</div>
                        <div class="info">
                            <div class="title">
                                {{ milestone.short_description }}
                            </div>
                            <div class="progress_line">
                                <i class="fas fa-clock icon"></i>
                                <c-progress-bar :percentages="milestone.progress['percent_days']"/>
                                {{ milestone.progress['days_left'] }} days left
                            </div>
                            <div class="progress_line">
                                <i class="fas fa-check icon"></i>
                                <c-progress-bar :percentages="milestone.progress['percent_done']"/>
                                {{ milestone.progress['percent_done'] }}% Done
                            </div>
                            <div class="progress_line">
                                <i class="fas fa-dollar-sign icon"></i>
                                <c-progress-bar :percentages="milestone.progress['percent_spent']"/>
                                {{ milestone.progress['percent_spent'] }}% Spent
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
</template>

<script>
    export default {
        props: ['project', 'editing'],
        components: {
            'c-milestone': (resolve) => require(['@/ui/components/project/milestone'], resolve),
            'c-icon-block': (resolve) => require(['@/ui/components/block/with-icon'], resolve),
            'c-progress-bar': (resolve) => require(['@/ui/components/progress-bar'], resolve)
        },
        computed: {
            milestones(){
                let arr = this.project.milestones.items;
                return arr.sort() ;
            },
            doneMilestones(){
                let arr = this.project.milestones.items,
                    count = 0;
                arr.forEach( (obj, i) => {
                    console.log(obj)
                    if (obj.status === 'done')
                        count += 1;
                });
                return count;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .milestones-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: nowrap;
        @media (max-width: 767px) {
            flex-wrap: wrap;
            .milestones-header__info{
                width: 100%;
                margin-bottom: 10px;
            }
            .milestones-header__stat{
                flex-wrap: wrap;
                width: 100%;
                justify-content: space-between;
                div{
                    width: 50%;
                    margin: 5px 0;
                }
            }
        }
    }
    .milestones-header__stat{
        display: flex;
        width: 65%;
        justify-content: space-between;
    }
    .timeline-blk {
        margin-bottom: 50px;
        @media (max-width: 767px) {
            display: none;
        }
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
