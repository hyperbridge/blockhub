<template>
    <div class="sale-box invert">
        <h5 class="sale-box__title">
            {{ sale_box.title }}
        </h5>
        <c-button
            :href="sale_box.link"
            status="success"
            data-toggle="modal"
            data-target="#purchase-modal"
            icon_hide
        >Get for ${{ sale_box.price }}</c-button>
    </div>
</template>

<script>
export default {
    name: 'sale-box',
    props: {
        sale_box: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
    .sale-box{
        border: 2px solid #fbe17d;
        border-radius: 5px;
        padding: 12px 20px;
        margin-bottom: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .sale-box__title{
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
