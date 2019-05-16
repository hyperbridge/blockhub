<template>
    <div class="milestones-list__item">
        <div class="thumb">
            <c-img :src="milestone.img"/>
        </div>
        <div class="info">
            <div class="head">
                <div class="description">
                    <h4>{{ milestone.title }}</h4>
                    <p>{{ milestone.shortDescription }}</p>
                </div>
                <div class="milestones_progress">
                    <div class="progress_line">
                        <i class="fas fa-clock icon"></i>
                        <c-progress-bar :percentages="milestone.progress['percentDays']"/>
                        <span class="ml-auto">
                            {{ milestone.progress['daysLeft'] }} days left
                        </span>
                    </div>
                    <div class="progress_line">
                        <i class="fas fa-check icon"></i>
                        <c-progress-bar :percentages="milestone.progress['percentDone']"/>
                        <span class="ml-auto">
                            {{ milestone.progress['percentDone'] }}% Done
                        </span>
                    </div>
                    <div class="progress_line">
                        <i class="fas fa-dollar-sign icon"></i>
                        <c-progress-bar :percentages="milestone.progress['percentSpent']"/>
                        <span class="ml-auto">
                            {{ milestone.progress['percentSpent'] }}% Spent
                        </span>
                    </div>
                </div>
            </div>
            <p class="text">{{ milestone.text }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'project-milestone',
    props: {
        milestone: {
            type: Object,
            required: true
        }
    },
    components: {
        'c-progress-bar': (resolve) => require(['@/components/progress-bar'], resolve)
    }
}
</script>

<style lang="scss" scoped>
    .milestones-list__item{
        background: #2b2b41;
        padding: 25px;
        border: 1px solid #36364e;
        border-radius: 5px;
        margin-bottom: 50px;
        display: inline-block;
        float: left;
        width: 100%;
        color: #fff;
        @media (max-width: 767px) {
            margin-bottom: 20px;
        }
        .thumb{
            display: inline-block;
            float: left;
            width: 25%;
            img{
                width: 100%;
                height: auto;
            }
            @media (max-width: 767px) {
                width: 100%;
            }
        }
        .info{
            display: inline-block;
            float: right;
            width: 73%;
            @media (max-width: 767px) {
                width: 100%;
                margin-top: 15px;
            }
            .head{
                display: flex;
                flex-wrap: nowrap;
                width: 100%;
                justify-content: space-between;
                margin-bottom: 30px;
                @media (max-width: 767px) {
                    flex-direction: column-reverse;
                }
                .description{
                    width: 68%;
                    @media (max-width: 767px) {
                        width: 100%;
                    }
                    h4{
                        font-size: 26px;
                        font-weight: bold;
                        margin-bottom: 15px;
                        line-height: 28px;
                        color: #fff;
                    }
                    p{
                        font-size: 16px;
                        font-weight: bold;
                    }
                }
                .milestones_progress {
                    width: 30%;
                    @media (max-width: 767px) {
                        width: 100%;
                        margin-bottom: 15px;
                    }
                    .progress_line {
                        display: flex;
                        align-items: center;
                        white-space: nowrap;
                        &:not(:last-child) {
                            margin-bottom: 10px;
                        }
                        .icon {
                            font-size: 20px;
                            margin-right: 15px;
                            min-width: 20px;
                        }
                        .progress {
                            margin-right: 15px;
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
