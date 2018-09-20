<template>
    <div class="posts-timeline">
        <!--<div class="posts-timeline__year-container" v-for="(year, index) in sortedByNumber(items)" :key="index">-->
            <!--<div class="posts-timeline__period-container"  v-for="(month, index) in year.months" :key="index">-->
                <!--<c-timeline-item v-for="(item, index) in sortedByDate(month.posts)" :item="item" :index="index" :key="index" />-->
                <!--<div class="post-timeline__period-info">-->
                    <!--{{ monthNumber(month.id) }} {{ year.year }}-->
                <!--</div>-->
            <!--</div>-->
        <!--</div>-->
        <template  v-for="(item, index) in sortedItems" >
            <c-timeline-item :item="item" :index="index" :key="index" v-if="item.type == 'post'" />
            <div class="post-timeline__period-info" v-if="item.new_period">
            {{ item.new_period }}
            </div>
        </template>
    </div>
</template>

<script>
    import moment from 'moment';

    export default {
        name: 'timeline-list',
        props: ['items'],
        data(){
            return{
                dateM: ''
            }
        },
        components:{
            'c-timeline-item': (resolve) => require(['@/ui/components/timeline/item.vue'], resolve)
        },
        methods:{
            monthNumber(month){
                return moment(month, 'MM').format('MMMM');
            }
        },
        computed: {
            sortedItems: function() {
                let arr = this.items;
                arr.sort( ( a, b) => {
                    return new Date(a.date) - new Date(b.date);
                });
                return arr.reverse();
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
