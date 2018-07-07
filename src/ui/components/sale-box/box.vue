<template>

    <div class="sale-box">
        <h5 class="sale-box__title">
            {{ sale_box.title }}
        </h5>
        <a :href="sale_box.link" class="sale-box__link">
            Get for ${{ sale_box.price }}
        </a>
    </div>

</template>

<script>
    export default {
        props: ['sale_box']
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
        .sale-box__title{
            font-size: 21px;
            font-weight: bold;
            padding: 0;
            margin: 0;
        }
        .sale-box__link{
            background: #5EA72B;
            color: #fff;
            font-size: 16px;
            font-weight: bold;
            border-radius: 5px;
            padding: 8px 13px;
            text-decoration: none;
            &:hover{
                background: #508e25
            }
        }
    }
</style>
