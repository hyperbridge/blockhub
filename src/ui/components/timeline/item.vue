<template>
    <div class="posts-timeline__post-item" :class="itemPosition">
        <div class="posts-timeline__post--content">
            <a href="#3">
                <h3>{{ item.title }}</h3>
            </a>
            <p>{{ item.text }}</p>
            <div class="d-flex align-items-center justify-content-between mt-4 w-100">
                <div class="post-date">
                    September 12, 2018
                </div>
                <c-button status="info" :href="['#link_' + item.id ]" icon_hide >Read more</c-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'timeline-item',
        props: ['item', 'index'],
        computed:{
            itemPosition(){
                if ( this.index % 2 ){
                    return 'right-side'
                } else {
                    return 'left-side'
                }
            }
        }
    }
</script>

<style lang="scss">
    .posts-timeline__post-item{
        width: 50%;
        display: flex;
        flex-direction: column;
        position: relative;
        color: #fff;
        .post-date{
            font-size: 13px;
            font-weight: bold;
            color: #fff;
        }
        h3{
            font-size: 22px;
            color: #fff;
        }
        &:after{
            content: "";
            position: absolute;
            top: 30px;
            width: 20px;
            height: 20px;
            background: #fff;
            border-radius: 100%;
            display: inline-block;
        }
        &:before{
            content: "";
            position: absolute;
            top: 0px;
            width: 2px;
            bottom: 0;
            background: rgba(255, 255, 255, .2);
            border-radius: 0;
            display: inline-block;
        }
        &.left-side{
            text-align: right;
            padding-right: 50px;
            margin-right: -1px;
            .c-btn{
                margin-right: 0;
            }
            &:after{
                right: -10px;
            }
            &:before{
                right: -1px;
            }
        }
        &.right-side{
            text-align: left;
            align-self: flex-end;
            padding-left: 50px;
            .c-btn{
                margin-left: 0;
            }
            &:after{
                left: -10px;
            }
            &:before{
                left: -1px;
            }
        }
        &.centered{
            align-self: center;
            padding: 40px;
            text-align: center;
            &:after{
                left: calc(50% - 10px);
            }
            &:before{
                content: "";
                top: 0px;
                left: calc( 50% - 1px);
                height: 30px;
                background: rgba(255, 255, 255, .2);
                width: 2px;
                position: absolute;
                border-radius: 0;
            }
            .posts-timeline__post--content{
                padding: 25px;
                h3{
                    padding: 15px 0 0;
                }
            }
        }
        a:hover{
            text-decoration: none;
        }
        &:hover{
            &:after{
                background-color: #5D75F7;
            }
        }
    }
    .posts-timeline__post--content{
        padding: 15px;
        background: rgba(0, 0, 0, .13);
        border-radius: 5px;
        box-shadow: 0 3px 6px rgba(0, 0, 0, .2);
        &:hover{
            background: rgba(0, 0, 0, .2);
        }
    }
</style>
