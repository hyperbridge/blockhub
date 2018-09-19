<template>
    <div class="posts-timeline">
        <div class="posts-timeline__year-container" v-for="(year, index) in sortedByNumber(items)" :key="index">
            <div class="posts-timeline__period-container"  v-for="(month, index) in year.months" :key="index">
                <c-timeline-item v-for="(item, index) in sortedByDate(month.posts)" :item="item" :index="index" :key="index" />
                <div class="post-timeline__period-info">
                    {{ monthNumber(month.id) }} {{ year.year }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment';

    export default {
        name: 'timeline-list',
        props: ['items'],
        components:{
            'c-timeline-item': () => import('@/ui/components/timeline/item.vue')
        },
        methods:{
            monthNumber(month){
                return moment(month, 'MM').format('MMMM');
            },
            sortedByDate(arr) {
                arr.sort( ( a, b) => {
                    return new Date(a.date) - new Date(b.date);
                });
                return arr;
            },
            sortedByNumber(arr){
                arr.sort( ( a, b) => {
                    return new Date(a.date) - new Date(b.date);
                });
                return arr;
            }
        }
    }
</script>

<style lang="scss">
    .posts-timeline,
    .posts-timeline__period-container{
        display: flex;
        flex-direction: column;
    }
    .post-timeline__period-info{
        padding: 3px 20px;
        border-radius: 5px;
        background: #fff;
        text-align: center;
        color: #30304B;
        margin: 30px auto;
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
            top: -30px;
        }
        &:after{
            top: unset;
            bottom: -30px;
        }
    }
</style>
