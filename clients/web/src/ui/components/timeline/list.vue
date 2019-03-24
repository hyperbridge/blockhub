<template>
    <div class="posts-timeline">
        <template  v-for="(item, index) in sliced" v-if="items">
            <c-timeline-item :item="item" :index="index" :key="index" :projectID="project_id" />
            <div class="post-timeline__period-info" v-if="item.period">
            {{ item.period }}
            </div>
        </template>
        <transition name="fade-slow">
            <div class="posts-timeline__end" v-if="end">
                <h3>End of updates</h3>
            </div>
            <c-block v-if="!items">
                <h3>
                    There is no updates yet.
                </h3>
            </c-block>
        </transition>
    </div>
</template>

<script>
    import moment from 'moment'

    export default {
        name: 'timeline-list',
        props: ['items', 'project_id'],
        data() {
            return {
                show   : false, // display content after API request
                offset : 3,     // items to display after scroll
                display: 5,     // initial items
                trigger: 150,   // how far from the bottom to trigger infinite scroll
                list  : [],    // server response data
                end    : false, // no more updates
            }
        },
        components: {
            'c-timeline-item': (resolve) => require(['@/ui/components/timeline/item.vue'], resolve)
        },
        methods: {
            scroll() {
                window.onscroll = ev => {
                    if (
                        window.innerHeight + window.scrollY >=
                        (document.body.offsetHeight - this.trigger)
                    ) {
                        if (this.display < this.list.length) {
                            this.display = this.display + this.offset
                        }
                        else {
                            this.end = true
                        }
                    }
                }
                console.log('done scroll')
            },
        },
        created() {
            if (this.items){
                let arr = this.items
                arr.sort( ( a, b) => {
                    return new Date(a.date) - new Date(b.date)
                }).forEach( (o, i) => {
                    let d1 = moment(o.date).format('MMMM YYYY'),
                        d2 = arr[i-1] ? moment(arr[i-1].date).format('MMMM YYYY') : false
                    if ( !d2 || d1 != d2 ){
                        o.period = moment(d1).format('MMMM, YYYY')
                    }
                })
                this.list = arr.reverse()
                this.show = true
            } else {
                return false
            }
            console.log('done create')
        },
        computed: {
            // slice the array of data to display
            sliced() {
                return this.list.slice(0, this.display)
            },
        },
        mounted() {
            console.log('done mounted')
            this.scroll()
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
        @media (max-width: 767px) {
            text-align: right;
            margin-left: auto;
            margin-right: 0;
            &:after,
            &:before{
                right: 9px;
                left: unset;
            }
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
        &.no-updates{
            &:after{
                display: none;
            }
        }
        @media (max-width: 767px) {
            text-align: right;
            margin-left: auto;
            margin-right: 0;
            &:after{
                right: 0px;
                left: unset;
            }
        }
    }
</style>
