<template>
    <div>
        <div class="stages-line" v-if="type_1">
            <div v-for="(stage, index) in stages" :key="index"
                 :class="stage.status"
                 class="stages-line__stage">
                <i class="fas fa-check" v-if="stage.status === 'done'"></i>
                <i class="fas fa-clock" v-if="stage.status === 'in_progress'"></i>
                <span class="stage_line"></span>
                <span class="name">{{ stage.text }}</span>
            </div>
        </div>
        <div class="stages-line" v-if="type_2">
            <div v-for="(stage, index) in stages" :key="index"
                 :class="stage.status"
                 class="stages-line__stage">
                <i class="fas fa-check" v-if="stage.status === 'done'"></i>
                <i class="fas fa-clock" v-if="stage.status === 'in_progress'"></i>
                <span class="stage_line"></span>
                <span class="name">{{ stage.text }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'stages'
        ]
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
        span {
            display: inline-block;
            width: 100%;
            position: relative;
            text-transform: uppercase;
            font-weight: bold;
            overflow: hidden;
            &.stage_line {
                background: #3D691F;
                height: 15px;
                float: left;
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
            .stage_line {
                border-radius: 5px 0 0 5px;
                width: 65%;
                float: right;
            }
            &.in_progress {
                .stage_line {
                    &:after {
                        left: 25%;
                    }
                }
            }
        }
        &:last-child {
            .stage_line {
                border-radius: 0 5px 5px 0;
                width: 65%;
                float: left;
            }
            &.in_progress {
                .stage_line {
                    &:after {
                        left: 75%;
                    }
                }
            }
        }
        &.done {
            span {
                &:before {
                    background: #3D691F;
                }
            }
            i {
                color: #3D691F;
            }
        }
        &.in_progress {
            .stage_line {
                &:after {
                    position: absolute;
                    background: #5EA72B;
                    height: 100%;
                    left: 0%;
                    right: 0;
                    content: "";
                    display: inline-block;
                }
            }
            i {
                color: #FADC72;
            }
        }
        &.awaiting {
            .stage_line {
                background: #5EA72B;
            }
        }
    }
</style>
