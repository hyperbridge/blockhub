<template>
    <div class="activity-chart"
         :class="[ 'size-' + size ]">
        <c-heading-bar v-if="size != 'xs'"
                       :name="title"
                       :showArrows="false"
                       :showBackground="false" />
        <h4 v-if="size == 'xs'"
            class="activity-chart-title">
            {{ title }}
        </h4>
        <div class="activity-chart__head"
             :class="[ 'size-' + size ]">
            <div v-for="month in 12"
                 :key="month">
                <span v-if="size == 'xs'">{{ month }}</span>
                <span v-else>{{ month | monthName | cutLength }}</span>
            </div>
        </div>
        <div class="activity-chart__grid"
             :class="[ 'size-' + size ]">
            <div v-for="(year, index) in years"
                 :key="index"
                 class="activity-chart__item"
                 :class="[ 'size-' + size ]">
                <div class="year">
                    {{ year.title }}
                </div>
                <div class="year_row">
                    <div v-for="(month, index) in year.months"
                         :key="index"
                         class="year_month">
                        <div class="progress">
                            <div v-if="size == 'lg'"
                                 class="progress-bar"
                                 role="progressbar"
                                 :style="{ width: + month.percent +'%'}"
                                 :aria-valuenow="month.percent"
                                 aria-valuemin="0"
                                 aria-valuemax="100" />
                            <div v-else
                                 class="progress-bar"
                                 role="progressbar"
                                 :style="[ month.percent >= 50 ? {'width' : '100%' } : {'width' : '0%'} ]"
                                 :aria-valuenow="month.percent"
                                 aria-valuemin="0"
                                 aria-valuemax="100" />
                        </div>
                        <div class="tooltips-info">
                            <strong>{{ month.month }} {{ year.title }}</strong>
                            <span>{{ month.text }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ActivityChart',
    components: {
        'c-heading-bar': () => import('~/components/heading-bar').then(m => m.default || m)
    },
    filters: {
        monthName(number) {
            switch (number) {
            case 1: return 'January'
            case 2: return 'February'
            case 3: return 'March'
            case 4: return 'April'
            case 5: return 'May'
            case 6: return 'June'
            case 7: return 'July'
            case 8: return 'August'
            case 9: return 'September'
            case 10: return 'October'
            case 11: return 'November'
            case 12: return 'December'
            }
        },
        cutLength(value) {
            return value.substring(0, 3)
        }
    },
    props: {
        title: {
            type: String
        },
        years: {
            required: true
        },
        size: {
            type: String,
            default: 'lg'
        }
    }
}
</script>

<style lang="scss" scoped>
    .activity-chart{
        width: 540px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        background: rgba(0, 0, 0, .1);
        border: 1px solid rgba(255, 255, 255, .1);
        padding: 0 10px 5px;
        border-radius: 5px;
        &.size-md{
            width: 365px;
        }
        &.size-sm{
            width: 315px;
        }
        &.size-xs{
            width: 235px;
            .activity-chart-title{
                font-size: 14px;
                font-weight: bold;
                margin: 5px 0;
                color: #fff;
            }
        }
    }
    .activity-chart__head{
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        color: #fff;
        font-size: 14px;
        padding: 0 5px 0px 45px;
        justify-content: space-between;
        order: 1;
        align-self: flex-start;
        div{
            width: calc( 100% / 12 );
            text-align: center;
            text-transform: uppercase;
        }
        &.size-md,
        &.size-sm{
            padding: 0 5px 10px 45px;
            div{
                -ms-transform: rotate(90deg); /* IE 9 */
                -webkit-transform: rotate(90deg); /* Safari */
                transform: rotate(90deg);
            }
        }
        &.size-xs{
            padding-bottom: 0;
        }
    }
    .activity-chart__grid{
        display: flex;
        width: 100%;
        padding: 5px 0;
        order: 3;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: space-between;
    }
    .activity-chart__item{
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        .year{
            width: 40px;
            color: #fff;
            line-height: 26px;
        }
        .year_row{
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            width: calc( 100% - 40px );
            height: 26px;
            align-items: center;
            padding: 5px;
            background: rgba(0, 0, 0, .13);
            border-left: 1px solid rgba(255, 255, 255, .1);
            border-right: 1px solid rgba(255, 255, 255, .1);
            .year_month{
                padding: 3px;
                width: calc( 100% / 12 );
                position: relative;
                .progress{
                    margin: 0;
                    height: 15px;
                    border-radius: 10px;
                    overflow: hidden;
                    border: 1px solid #5D75F7;
                    background: #1C2032;
                    .progress-bar{
                        background: #5D75F7;
                    }
                }
                .tooltips-info{
                    position: absolute;
                    top: -55px;
                    border-radius: 5px;
                    padding: 10px 20px;
                    width: auto;
                    box-shadow: 0 0 1px rgba(0, 0, 0, .7);
                    background: rgba(0, 0, 0, .85);
                    color: #fff;
                    z-index: 20;
                    text-align: center;
                    left: 50%;
                    transform: translateX(-50%);
                    display: none;
                    height: 60px;
                    strong{
                        white-space: nowrap;
                        font-weight: bold;
                        font-size: 14px;
                    }
                    span{
                        white-space: nowrap;
                    }
                    &:before{
                        display: inline-block;
                        width: 10px;
                        height: 10px;
                        background: rgba(0, 0, 0, .85);
                        content: "";
                        position: absolute;
                        bottom: -5px;
                        left: calc( 50% - 5px );
                        -webkit-transform: rotate(45deg);
                        -moz-transform: rotate(45deg);
                        -o-transform: rotate(45deg);
                        -ms-transform: rotate(45deg);
                        transform: rotate(45deg);
                    }
                }
                &:hover{
                    .tooltips-info{
                        display: inline-block;
                    }
                }
            }
        }
        &:first-child{
            .year_row{
                border-top: 1px solid rgba(255, 255, 255, .1);
                border-radius: 5px 5px 0 0;
                padding-top: 10px;
            }
        }
        &:last-child{
            .year_row{
                border-bottom: 1px solid rgba(255, 255, 255, .1);
                border-radius: 0 0 5px 5px;
                padding-bottom: 10px;
            }
        }
        &:only-child{
            .year_row{
                border: 1px solid rgba(255, 255, 255, .1)!important;
                border-radius: 5px;
            }
        }
        &.size-md,
        &.size-sm{
            .year_month{
                text-align: center;
                .progress{
                    width: 15px;
                    margin: auto;
                }
            }
        }
        &.size-xs{
            .year{
                line-height: 20px;
            }
            .year_row{
                height: 21px;
            }
            .year_month{
                padding: 1px;
                .progress{
                    width: 11px;
                    height: 11px;
                    margin: auto;
                }
                .tooltips-info{
                    top: -58px;
                }
            }
            &:last-child{
                .year_row{
                    padding-bottom: 5px
                }
            }
            &:first-child{
                .year_row{
                    padding-top: 5px
                }
            }
        }
    }
</style>
