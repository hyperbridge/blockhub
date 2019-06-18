<template>
    <div class="row">
        <div
            v-if="!project.milestones"
            class="col-12">
            <c-block>
                <h3>
                    There is no milestones defined.
                </h3>
            </c-block>
        </div>
        <div
            v-if="project.milestones"
            class="col-12">
            <div class="milestones-header margin-bottom-20">
                <div class="milestones-header__info">
                    <div class="h3 text-white font-weight-bold mb-0">
                        {{ project.milestones.overallProgress }}% Project Completion
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
                        {{ project.funding.spentAmount | convertCurrency }}
                    </c-icon-block>
                    <c-icon-block icon="hand-holding-usd">
                        <div class="h6 p-0 m-0 text-white font-weight-bold">
                            Project Budget
                        </div>
                        {{ project.funding.fundedAmount | convertCurrency }}
                    </c-icon-block>
                </div>
            </div>
            <div class="timeline-block position-relative">
                <div
                    class="progress main_timeline"
                    style="height: 15px;">
                    <c-progress-bar :percentages="project.milestones.overallProgress" />
                </div>
                <div
                    v-if="milestones"
                    class="period-container">
                    <div
                        v-for="(milestone, index) in milestones"
                        :key="index"
                        class="period">
                        <div class="number">
                            {{ milestone.stepNumber }}
                        </div>
                        <div class="info">
                            <div class="title">
                                {{ milestone.shortDescription }}
                            </div>
                            <div class="progress_line">
                                <i class="fas fa-clock icon" />
                                <c-progress-bar :percentages="milestone.progress['percentDays']" />
                                {{ milestone.progress['daysLeft'] }} days left
                            </div>
                            <div class="progress_line">
                                <i class="fas fa-check icon" />
                                <c-progress-bar :percentages="milestone.progress['percentDone']" />
                                {{ milestone.progress['percentDone'] }}% Done
                            </div>
                            <div class="progress_line">
                                <i class="fas fa-dollar-sign icon" />
                                <c-progress-bar :percentages="milestone.progress['percentSpent']" />
                                {{ milestone.progress['percentSpent'] }}% Spent
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="milestones-list">
                <c-milestone
                    v-for="(milestone, index) in milestones"
                    :key="index"
                    :milestone="milestone" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        'c-milestone': () => import('~/components/project/milestone').then(m => m.default || m),
        'c-icon-block': () => import('~/components/block/with-icon').then(m => m.default || m),
        'c-progress-bar': () => import('~/components/progress-bar').then(m => m.default || m)
    },
    props: ['project', 'editing'],
    computed: {
        milestones() {
            const arr = this.project.milestones.items
            return arr.sort()
        },
        doneMilestones() {
            const arr = this.project.milestones.items
            let count = 0

            arr.forEach((obj, i) => {
                if (obj.status === 'Done') { count += 1 }
            })

            return count
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
    .timeline-block {
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