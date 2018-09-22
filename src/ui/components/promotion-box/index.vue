<template>
    <div class="promotion-box invert">
        <h5 class="promotion-box__title" v-if="title">
            {{ title }}
        </h5>
        <c-button
            :href="link"
            status="success"
            data-toggle="modal"
            data-target="#purchase-modal"
            icon_hide
        ><span v-if="price">Get it for ${{ price }}</span><span v-else>Free Download</span></c-button>
    </div>
</template>

<script>
export default {
    name: 'promotion-box',
    props: {
        title: {
            type: String
        },
        price: {
            type: String
        }
    }
}
</script>

<style lang="scss" scoped>
    .promotion-box {
        border: 2px solid #fbe17d;
        border-radius: 5px;
        padding: 12px 20px;
        margin-bottom: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .promotion-box__title {
        font-size: 21px;
        font-weight: bold;
        padding: 0;
        margin: 0;
    }
    .c-btn {
        font-size: 16px;
        padding: 8px 13px !important;
    }
</style>
