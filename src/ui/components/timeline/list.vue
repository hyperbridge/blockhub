<template>
    <div class="posts-timeline">
        <div class="posts-timeline__period-container" v-for="(month, index) in items" :key="index">
            <c-timeline-item v-for="(item, index) in month.posts" :item="item" :index="index" :key="index" />
            <div class="post-timeline__period">
                Sep 2018
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'timeline-list',
        props: ['items'],
        components:{
            'c-timeline-item': () => import('@/ui/components/timeline/item.vue')
        }
    }
</script>

<style lang="scss">
    .posts-timeline{
        display: flex;
        flex-direction: column;
    }
    .posts-timeline__period-container{
        display: flex;
        flex-direction: column;
    }
    .post-timeline__period{
        padding: 3px 20px;
        border-radius: 5px;
        background: #fff;
        text-align: center;
        color: #30304B;
        margin: 20px auto;
        font-weight: bold;
        position: relative;
        display: inline-flex;
        &:after,
        &:before{
            content: "";
            position: absolute;
            left: 50%;
            margin-left: -1px;
            display: inline-block;
            width: 2px;
            background: rgba(255, 255, 255, .2);
            height: 30px;
            top: -20px;
        }
        &:after{
            top: unset;
            bottom: -20px;
        }
    }
</style>
