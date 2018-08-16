<template>
    <div class="item">
        <div class="project-card__item">
            <div class="head">
                <div class="img">
                    <img :src="project.game.img"/>
                </div>
                <div class="text">
                    <h4>{{ project.game.title }}</h4>
                    <p>{{ project.game.developer }}</p>
                </div>
            </div>
            <img :src="project.img"/>
            <div class="description">{{ project.description }}</div>
            <div class="progress-container">
                <div class="progress progress-bar-vertical">
                    <div class="progress-bar bg-success" role="progressbar"
                            aria-valuenow="40"
                            aria-valuemin="0" aria-valuemax="100"
                            :style="`height: ${goal_progress}%`">
                        <span class="sr-only">{{ goal_progress }}% Complete</span>
                    </div>
                </div>
                <div class="progress-info">
                    <strong class="w-100">Obtained Funds</strong>
                    <span>
                        {{ project.funds.currency | currency_sign }} {{ project.funds.obtained }} of
                        {{ project.funds.currency | currency_sign }} {{ project.funds.goal }}
                    </span>
                </div>
            </div>
            <div class="item-action">
                <a href="#3" class="btn btn-sm btn-info">Participate</a>
                <a href="#3" class="btn btn-sm btn-success">Donate Funds</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'c-projects-card',
    props: ['project'],
    computed: {
        goal_progress() {
            const { obtained, goal } = this.project.funds;
            return Math.floor(obtained / goal * 100);
        }
    },
    filters: {
        currency_sign(cur_name) {
            switch(cur_name) {
                case 'EUR':
                    return '€'
                case 'GBP':
                    return '£'
                default:
                    return '$'
            }
        }
    }
}
</script>

<style lang="scss">
.progress-container {
    position: relative;
    padding-left: 20px;
    .progress-bar-vertical {
        width: 5px;
        position: absolute;
        left: 0;
        top: 4px;
        bottom: 4px;
        display: flex;
        align-items: flex-end;
        margin: 0;
        float: left;
        border-radius: 0;
        background: #fff;
        height: auto;
        .progress-bar {
            width: 100%;
            height: 0;
            -webkit-transition: height 0.6s ease;
            -o-transition: height 0.6s ease;
            transition: height 0.6s ease;
        }
    }
    .progress-info {
        font-size: 14px;
        strong{
            display: inline-block;
            width: 100%;
        }
    }
}
.project-card__item {
    background: rgba(0, 0, 0, .13);
    padding: 15px;
    border-radius: 5px;
    width: 100%;
    border: 1px solid rgba(255, 255, 255, .1);
    .head{
        display: flex;
        width: 100%;
        padding: 0px;
        margin-bottom: 15px;
        justify-content: space-between;
        align-items: center;
        .img {
            width: 50px;
            img {
                width: 100%;
                height: auto;
            }
        }
        .text {
            width: calc(100% - 65px);
            color: #fff;
            h4 {
                font-weight: bold;
                padding: 0;
                margin: 0 0 4px;
            }
            p {
                padding: 0;
                margin: 0;
            }
        }
    }
    img {
        width: 100%;
        height: 170px;
        object-fit: cover;
        border-radius: 5px;
    }
    .description {
        margin: 15px 0;
        font-weight: bold;
        font-size: 16px;
    }
    .item-action {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 15px;
        a {
            margin-left: 10px;
            font-weight: bold;
            text-transform: uppercase;
        }
    }
}
</style>
