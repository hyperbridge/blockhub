<template>
    <div class="datepicker-wrapper">
        <div class="input-group">
            <label class="sr-only">{{ label }}</label>
            <datepicker
                v-model="model"
                :placeholder="placeholder"
                input-class="form-control form-calendar__text"
                calendar-class="form-calendar"
                :minimumView="minimumView"
                :maximumView="maximumView"
                :initialView="initialView"
                :format="formater" />
            <div class="input-group-append">
                <span class="input-group-text">
                    <i class="fas fa-calendar-alt" />
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    import Datepicker from '@hokify/vuejs-datepicker';

    export default {
        props: {
            model: String,
            label: String,
            minimumView: String,
            maximumView: String,
            placeholder: String,
            initialView: String,
            formater: Function
        },
        components: {
            Datepicker
        }
    }
</script>

<style lang="scss">

    $color_1: #ddd;
    $color_2: #a3a3a3;
    $color_3: #888;
    $color_4: #999;
    .input-group {
        flex-wrap: nowrap;
    }
    .datepicker-wrapper{
        .rtl {
            direction: rtl;
        }
        .vdp-datepicker {
            position: relative;
            text-align: left;
            * {
                box-sizing: border-box;
            }
        }
        .vdp-datepicker__calendar {
            position: absolute;
            z-index: 100;
            background: #fff;
            width: 300px;
            border: 1px solid #ccc;
            header {
                display: block;
                line-height: 40px;
                span {
                    display: inline-block;
                    text-align: center;
                    width: 71.42857142857143%;
                    float: left;
                }
                .next {
                    width: 14.285714285714286%;
                    float: left;
                    text-indent: -10000px;
                    position: relative;
                    &:after {
                        content: '';
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translateX(-50%) translateY(-50%);
                        border: 6px solid transparent;
                        border-left: 10px solid #000;
                        margin-left: 5px;
                    }
                    &:not(.disabled) {
                        cursor: pointer;
                        &:hover {
                            background: #eee;
                        }
                    }
                }
                .prev {
                    width: 14.285714285714286%;
                    float: left;
                    text-indent: -10000px;
                    position: relative;
                    &:after {
                        content: '';
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translateX(-50%) translateY(-50%);
                        border: 6px solid transparent;
                        border-right: 10px solid #000;
                        margin-left: -5px;
                    }
                    &:not(.disabled) {
                        cursor: pointer;
                        &:hover {
                            background: #eee;
                        }
                    }
                }
                .prev.disabled {
                    &:after {
                        border-right: 10px solid #ddd;
                    }
                }
                .next.disabled {
                    &:after {
                        border-left: 10px solid #ddd;
                    }
                }
                .up {
                    &:not(.disabled) {
                        cursor: pointer;
                        &:hover {
                            background: #eee;
                        }
                    }
                }
            }
            .disabled {
                color: $color_1;
                cursor: default;
            }
            .flex-rtl {
                display: flex;
                width: inherit;
                flex-wrap: wrap;
            }
            .cell {
                display: inline-block;
                padding: 0 5px;
                width: 14.285714285714286%;
                height: 40px;
                line-height: 40px;
                text-align: center;
                vertical-align: middle;
                border: 1px solid transparent;
                &:not(.blank) {
                    &:not(.disabled).day {
                        cursor: pointer;
                        &:hover {
                            border: 1px solid #4bd;
                        }
                    }
                    &:not(.disabled).month {
                        cursor: pointer;
                        &:hover {
                            border: 1px solid #4bd;
                        }
                    }
                    &:not(.disabled).year {
                        cursor: pointer;
                        &:hover {
                            border: 1px solid #4bd;
                        }
                    }
                }
            }
            .cell.selected {
                background: #4bd;
                &:hover {
                    background: #4bd;
                }
            }
            .cell.selected.highlighted {
                background: #4bd;
            }
            .cell.highlighted {
                background: #cae5ed;
            }
            .cell.highlighted.disabled {
                color: $color_2;
            }
            .cell.grey {
                color: $color_3;
                &:hover {
                    background: inherit;
                }
            }
            .cell.day-header {
                font-size: 75%;
                white-space: nowrap;
                cursor: inherit;
                &:hover {
                    background: inherit;
                }
            }
            .month {
                width: 33.333%;
            }
            .year {
                width: 33.333%;
            }
        }
        .vdp-datepicker__calendar-button {
            cursor: pointer;
            font-style: normal;
        }
        .vdp-datepicker__clear-button {
            cursor: pointer;
            font-style: normal;
        }
        .vdp-datepicker__calendar-button.disabled {
            color: $color_4;
            cursor: default;
        }
        .vdp-datepicker__clear-button.disabled {
            color: $color_4;
            cursor: default;
        }
    }

</style>
