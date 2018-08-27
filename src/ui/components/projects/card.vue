<template>
    <div class="project-card__item" :class="customClass">
        <div class="head" v-if="project.game">
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
        <c-money-info label="Obtained Funds" :percent="goal_progress" :amount="project.funds.obtained"
                      :goal="project.funds.goal"/>
        <div class="item-action">
            <a href="#3" class="btn btn-sm btn-info">Participate</a>
            <a href="#3" class="btn btn-sm btn-success">Donate Funds</a>
        </div>
    </div>
</template>

<script>
    import MoneyInfo from '../money-info/index.vue'

    export default {
        name: 'c-projects-card',
        components: {
            'c-money-info': MoneyInfo
        },
        props: ['project', 'customClass'],
        computed: {
            goal_progress() {
                const {obtained, goal} = this.project.funds;
                return Math.floor(obtained / goal * 100);
            }
        },
        filters: {
            currency_sign(cur_name) {
                switch (cur_name) {
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
    .project-card__item {
        background: rgba(0, 0, 0, .13);
        padding: 15px;
        border-radius: 5px;
        width: 100%;
        border: 1px solid rgba(255, 255, 255, .1);
        color: #fff;
        .head {
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
                    color: #fff;
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
