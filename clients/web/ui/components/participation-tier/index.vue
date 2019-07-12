<template>
    <div
        class="participation-tier"
        :class="{'in-the-list' : inList}">
        <div class="participation-tier__stat">
            <div class="font-weight-bold h5 p-0 m-0">
                {{ price | convertCurrency }}
            </div>
            <div class="p-0 my-1">
                {{ sold }} Sold
            </div>
            <div class="font-weight-bold p-0 m-0">
                {{ left }} Left
            </div>
        </div>
        <div class="participation-tier__info">
            <div class="small text-uppercase">
                {{ tag }}
            </div>
            <div class="h5 font-weight-bold mb-1-0 p-0">
                {{ title }}
            </div>
            <c-button
                status="success"
                icon="hand-holding-usd"
                @click="purchase">
                Participate
            </c-button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        id: Number,
        price: {
            type: Number,
            default: 0
        },
        sold: {
            type: Number,
            default: 0
        },
        left: {
            type: Number,
            default: 0
        },
        tag: {
            type: String,
            default: null
        },
        title: {
            type: String,
            default: 'Title'
        },
        inList: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        purchase() {
            this.$store.commit('application/activateModal', 'project-participate')
        }
    }
}
</script>

<style lang="scss" scoped>
    .participation-tier{
        display: flex;
        align-items: center;
        color: #fff;
        &.in-the-list{
            padding-bottom: 10px;
            margin-bottom: 10px;
            border-bottom: 1px solid rgba(255, 255, 255, .1);
        }
    }
    .participation-tier__stat{
        width: 100px;
        text-align: left;
        flex-direction: column;
    }
    .participation-tier__info{
        width: calc(100% - 115px);
        margin-left: 15px;
        display: inline-flex;
        flex-direction: column;
    }
    .c-button{
        margin-right: auto;
    }
</style>
