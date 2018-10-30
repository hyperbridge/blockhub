<template>
    <div class="project-card__item" :class="customClass">
        <div class="head" v-if="parentName">
            <div class="img" v-if="parentImage">
                <c-img :src="parentImage" />
            </div>
            <div class="text">
                <h4>{{ parentName }}</h4>
                <p v-if="parentDeveloper">{{ parentDeveloper }}</p>
            </div>
        </div>
        <c-img :src="image"/>
        <div class="description">{{ description }}</div>
        <c-money-info label="Obtained Funds"
            :percent="goal_progress"
            :amount="funds.obtained"
            :goal="funds.goal"
        />
        <div class="item-action">
            <c-button status="info" :href="`/#/project/${id}`" icon_hide>Participate</c-button>
            <c-button status="success" href="/#/project/1" icon_hide hidden>Donate Funds</c-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'c-project-card',
    components: {
        'c-money-info': (resolve) => require(['@/ui/components/money-info'], resolve),
    },
    props: {
        image: String,
        description: String,
        funds: {
            obtained: Number,
            goal: Number
        },
        parentImage: String,
        parentName: String,
        parentDeveloper: String,
        id: Number,
        customClass: {
            type: String,
        }
    },
    computed: {
        goal_progress() {
            const { obtained, goal } = this.funds;
            return Math.round(obtained / goal * 100);
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
    .project-card__item {
        padding: 15px;
        border-radius: 5px;
        width: 100%;
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
            margin-top: 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
</style>
