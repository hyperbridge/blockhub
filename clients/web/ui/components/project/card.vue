<template>
    <div
        class="project-card__item"
        :class="customClass"
        @mouseover="hovering = true"
        @mouseout="hovering = false">
        <div
            v-if="parentName"
            class="head">
            <div
                v-if="parentImage"
                class="img">
                <c-img :src="parentImage" />
            </div>
            <div class="text">
                <h4>{{ parentName }}</h4>
                <p v-if="parentDeveloper">
                    {{ parentDeveloper }}
                </p>
            </div>
        </div>
        <c-button
            status="none"
            :to="`/project/${id}`">
            <c-img :src="image" />
            <div class="description">
                {{ description }}
            </div>
        </c-button>
        <c-money-info
            label="Obtained Funds"
            :percent="goalProgress"
            :amount="funds ? funds.obtained : 0"
            :goal="funds ? funds.goal : 0" />
        <div class="item-action">
            <c-button
                status="info"
                :to="`/project/${id}`"
                iconHide>
                Check it out
            </c-button>
            <c-button
                status="success"
                :to="`/project/${id}`"
                iconHide
                hidden>
                Donate Funds
            </c-button>
        </div>

        <c-simple-vote
            v-if="hovering"
            v-darklaunch="'RATINGS'"
            :votes="rating" />
    </div>
</template>

<script>
export default {
    components: {
        'c-money-info': () => import('~/components/money-info').then(m => m.default || m)
    },
    filters: {
        currencySign(cur_name) {
            switch (cur_name) {
            case 'EUR':
                return '€'
            case 'GBP':
                return '£'
            default:
                return '$'
            }
        }
    },
    props: {
        image: {
            type: String,
            default: null
        },
        description: {
            type: String,
            default: null
        },
        rating: Object,
        funds: {
            obtained: Number,
            goal: Number
        },
        parentImage: {
            type: String,
            default: null
        },
        parentName: {
            type: String,
            default: null
        },
        parentDeveloper: {
            type: String,
            default: null
        },
        id: Number,
        customClass: {
            type: String,
            default: null
        }
    },
    data() {
        return {
            hovering: false
        }
    },
    computed: {
        goalProgress() {
            if (!this.funds) return 0

            const { obtained, goal } = this.funds

            return Math.round(obtained / goal * 100)
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
