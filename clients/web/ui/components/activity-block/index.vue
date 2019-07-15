<template>
    <div class="activity-block">
        <div class="activity-block__head">
            <span>
                <i
                    class="fas "
                    :class="[ 'fa-' + labelIcon]" />
                <slot name="label" />
            </span>
            <slot name="title" />
        </div>
        <div class="activity-block__body align-items-center">
            <div>
                <c-button
                    status="second-info"
                    size="md"
                    class="mr-3"
                    @click="$emit('install')">
                    Install BlockHub
                </c-button>
                <c-button
                    status="second-info"
                    size="md"
                    class="mr-3"
                    @click="$emit('play')">
                    Play Now
                </c-button>
                <c-button
                    status="second-info"
                    size="md"
                    class="mr-3"
                    @click="$emit('help')">
                    Get Help
                </c-button>
            </div>
            <div class="d-flex flex-column text-center">
                <div style="font-size: 14px;line-height: 15px;opacity: .6">
                    <slot name="description" />
                </div>
                <div class="d-flex justify-content-between">
                    <c-button
                        status="plain"
                        size="sm"
                        class="p-0"
                        style="min-height: 20px; line-height: 14px">
                        View your stats
                    </c-button>
                    <c-button
                        status="plain"
                        size="sm"
                        class="p-0"
                        style="min-height: 20px; line-height: 14px">
                        View global stats
                    </c-button>
                </div>
            </div>
            <div
                style="width: 240px"
                class="d-flex flex-column ml-auto">
                <div class="mb-1">
                    {{ earnedAchievements }} of {{ totalAchievements }}({{ getPercent }}%) achievements earned:
                </div>
                <c-progress-bar :percentages="getPercent" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        'c-progress-bar': () => import('~/components/progress-bar/').then(m => m.default || m)
    },
    props: {
        labelIcon: {
            type: String,
            default: null
        },
        totalAchievements: {
            type: [String, Number],
            default: 1
        },
        earnedAchievements: {
            type: [String, Number],
            default: 0
        }
    },
    computed: {
        getPercent() {
            let percent
            percent = Math.round((Number(this.earnedAchievements) * 100) / Number(this.totalAchievements))
            return percent >= 100 ? '100' : percent
        }
    }
}
</script>

<style lang="scss" scoped>
    .activity-block{
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .activity-block__head{
        padding: 8px 10px;
        border-bottom: 1px solid rgba(0, 0, 0, .4);
        background: linear-gradient(45deg, rgb(57, 147, 53) 0%, rgba(57,130,53, .5) 100%);
        color: rgba( 255, 255, 255, .85);
        font-size: 17px;
        font-weight: 500;
        position: relative;
        display: flex;
        align-items: center;
        span{
            margin: 0 15px 0 -20px;
            display: flex;
            padding: 3px 7px;
            color: #fff;
            align-items: center;
            background: rgb(57, 147, 53);
            z-index: 2;
            box-shadow: 1px 1px 4px #000;
            font-size: 12px;
            i{
                margin-right: 8px;
            }
        }
    }
    .activity-block__body{
        padding: 15px;
        background: linear-gradient(45deg, rgba(61,62,93,1) 0%, rgba(76,75,114,1) 100%);
        display: flex;
        align-items: center;
        color: #fff;
    }
</style>
