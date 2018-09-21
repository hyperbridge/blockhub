<template>
    <div class="posts-timeline">
        <template  v-for="(item, index) in sliced" >
            <c-timeline-item :item="item" :index="index" :key="index" :projectID="project_id" />
            <div class="post-timeline__period-info" v-if="item.period">
            {{ item.period }}
            </div>
        </template>
        <transition name="fade-slow">
            <div class="posts-timeline__end" v-if="end">
                <h3>No more resources!</h3>
            </div>
        </transition>
    </div>
</template>

<script>
    import moment from 'moment';

    export default {
        name: 'timeline-list',
        props: ['items', 'project_id'],
        data(){
            return{
                show   : false, // display content after API request
                offset : 3,     // items to display after scroll
                display: 5,     // initial items
                trigger: 150,   // how far from the bottom to trigger infinite scroll
                list  : [],    // server response data
                end    : false, // no more resources
            }
        },
        components:{
            'c-timeline-item': (resolve) => require(['@/ui/components/timeline/item.vue'], resolve)
        },
        methods:{
            scroll() {
                window.onscroll = ev => {
                    if (
                        window.innerHeight + window.scrollY >=
                        (document.body.offsetHeight - this.trigger)
                    ) {
                        if (this.display < this.list.length) {
                            this.display = this.display + this.offset;
                        }
                        else {
                            this.end = true;
                        }
                    }
                };
                console.log('done scroll')
            },
        },
        created() {
            let arr = this.items;
            arr.sort( ( a, b) => {
                return new Date(a.date) - new Date(b.date);
            }).forEach( (o, i) => {
                let d1 = moment(o.date).format('MMMM YYYY'),
                    d2 = arr[i-1] ? moment(arr[i-1].date).format('MMMM YYYY') : false;
                if ( !d2 || d1 != d2 ){
                    o.period = moment(d1).format('MMMM, YYYY');
                }
            });
            this.list = arr.reverse();
            this.show = true;
            console.log('done create')
        },
        computed:{
            // slice the array of data to display
            sliced() {
                console.log('done slice')
                return this.list.slice(0, this.display);
            },
        },
        mounted() {
            console.log('done mounted')
            this.scroll();
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
        &:last-child{

        }
    }
    .posts-timeline__end{
        width: auto;
        display: flex;
        flex-direction: column;
        position: relative;
        color: #fff;
        align-self: center;
        padding: 20px 30px;
        border-radius: 5px;
        text-align: center;
        background: rgba(0, 0, 0, .3);
        .post-date{
            font-size: 13px;
            font-weight: bold;
            color: #fff;
            margin-bottom: 10px;
        }
        h3{
            font-size: 18px;
            color: #fff;
            padding: 0;
            margin: 0;
        }
        &:after{
            content: "";
            position: absolute;
            top: -10px;
            width: 20px;
            height: 20px;
            background: #fff;
            border-radius: 100%;
            display: inline-block;
        }
        &:after{
            left: calc(50% - 10px);
        }
    }
</style>
