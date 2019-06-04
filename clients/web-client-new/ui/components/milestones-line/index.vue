<template>
    <div>
        <div class="stages-line">
            <div
                v-for="(milestone, index) in milestones"
                :key="index"
                :class="milestone.status"
                class="stages-line__stage">
                <i
                    v-if="milestone.status === 'Done'"
                    class="fas fa-check" />
                <i
                    v-if="milestone.status === 'InProgress'"
                    class="fas fa-clock" />
                <div class="stage_progress">
                    <span />
                    <span />
                </div>
                <div class="name">
                    {{ milestone.text }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'milestones'
    ],
    mounted() {
        const finished_el = document.getElementsByClassName('Done')

        if (!finished_el.length) return

        const last_el = finished_el[finished_el.length - 1]
        last_el.className += ' last-done-el'
    }
}
</script>

<style lang="scss" scoped>
    .stages-line {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        flex-wrap: nowrap;
        overflow: hidden;
        margin: 10px -6%;
    }
    .stages-line__stage {
        width: 50%;
        text-align: center;
        div {
            display: inline-block;
            width: 100%;
            position: relative;
            text-transform: uppercase;
            font-weight: bold;
            /*overflow: hidden;*/
            &.stage_progress {
                background: #3D691F;
                height: 15px;
                float: left;
                position: relative;
                overflow: hidden;
                span{
                    display: inline-block;
                    width: 50%;
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    &:nth-child(1){
                        left: 0;
                    }
                    &:nth-child(2){
                        right: 0;
                    }
                }
            }
            &.name {
                padding-top: 15px;
                color: #fff;
                &:after {
                    position: absolute;
                    top: 5px;
                    width: 2px;
                    content: "";
                    height: 8px;
                    left: calc(50% - 1px);
                    display: inline-block;
                    background: #fff;
                }
            }
        }
        i {
            margin-bottom: 7px;
            font-size: 10px;
            display: block;
            width: 100%;
        }
        &:first-child {
            .stage_progress {
                border-radius: 5px 0 0 5px;
                width: 65%;
                float: right;
            }
            &.InProgress {
                .stage_progress {
                    &:after {
                        left: 25%;
                    }
                }
            }
            &.last-done-el{
                 .stage_progress{
                     span{
                         &:last-child{
                             width: 75%;
                         }
                     }
                 }
             }
        }
        &:last-child {
            .stage_progress {
                border-radius: 0 5px 5px 0;
                width: 65%;
                float: left;
            }
            &.InProgress {
                .stage_progress {
                    &:after {
                        left: 75%;
                    }
                }
            }
            &.done{
                .stage_progress{
                    span{
                        background: #3D691F!important;
                    }
                }
            }
        }
        &.done {
            span{
                background: #5EA72B;
            }
            .stage_progress {
                &:before {
                    background: #3D691F!important;
                }
            }
            i {
                color: #5EA72B;
            }
            &.last-done-el{
                .stage_progress{
                    span{
                        &:last-child{
                            background: #5EA72B;
                        }
                    }
                }
            }
        }
        &.InProgress {
            .stage_progress {
                span{
                    background: #5EA72B;
                    &:last-child{
                        background: transparent;
                    }
                }
                &:after {
                    /*position: absolute;*/
                    /*background: #5EA72B;*/
                    /*height: 100%;*/
                    /*left: 0%;*/
                    /*right: 0;*/
                    /*content: "";*/
                    /*display: inline-block;*/
                }
            }
            i {
                color: #FADC72;
            }
        }
        &.awaiting {
            .stage_progress {
                background: #3D691F;
            }
        }
    }
</style>
