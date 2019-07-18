<template>
    <div class="article-list-item">
        <c-button
            status="none"
            :to="to"
            :href="link">
            <slot />
        </c-button>
    </div>
</template>

<script>
export default {
    name: 'ArticleListItem',
    props: ['to', 'link']
}
</script>

<style lang="scss" scoped>
    .article-list-item{
        padding: 0;
        margin-bottom: 15px;
        display: block;
        .c-button{
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #fff;
            padding: 10px 15px 10px 40px;;
            border-radius: 5px;
            box-shadow: 0 3px 6px rgba(0, 0, 0, .3);
            line-height: 30px;
            background: url("./../../assets/SVG/aticle-icon.svg") rgba(0, 0, 0, .13) no-repeat;
            background-position: 6px;
            background-size: 21px;
            &:hover{
                text-decoration: none;
                background-color: rgba(0, 0, 0, .3);
            }
        }
    }
</style>
