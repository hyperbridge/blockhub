<template>
    <div>
        <div class="activity-chart">
            <c-heading-bar :name="title" :showArrows="false" :showBackground="false" />
            <div class="activity-chart__head">
                <div>
                    Jan
                </div>
                <div>
                    Fev
                </div>
                <div>
                    Mar
                </div>
                <div>
                    Apr
                </div>
                <div>
                    May
                </div>
                <div>
                    Jun
                </div>
                <div>
                    Jul
                </div>
                <div>
                    Aug
                </div>
                <div>
                    Set
                </div>
                <div>
                    Oct
                </div>
                <div>
                    Nov
                </div>
                <div>
                    Dec
                </div>
            </div>
            <div class="activity-chart__grid">
                <div class="activity-chart__item" v-for="(year, index) in years" :key="index">
                    <div class="year">{{ year.title }}</div>
                    <div class="year_row">
                        <div class="year_month" v-for="(month, index) in year.months" :key="index">
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" :style="{ width: + month.percent +'%'}" :aria-valuenow="month.percent" aria-valuemin="0" aria-valuemax="100"></div>
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
    </div>
</template>

<script>
    import HeadingBar from '../heading-bar/index.vue'

    export default {
        components:{
            'c-heading-bar': HeadingBar
        },
        props: {
            title: {
                type: String
            },
            years:{
                required: true
            }
        },
        data() {
            return {
            };
        },
        methods: {
        }
    }
</script>

<style lang="scss" scoped>
    .activity-chart{
        width: 540px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .activity-chart__head{
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        color: #fff;
        font-size: 14px;
        padding: 0 5px 5px 45px;
        justify-content: space-between;
        order: 1;
        align-self: flex-start;
        div{
            width: calc( 100% / 12 );
            text-align: center;
            text-transform: uppercase;
        }
    }
    .activity-chart__grid{
        display: flex;
        width: 100%;
        padding: 5px;
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
    }
</style>
