<template>
    <div>
        <div class="community-item__comment" :class="{ 'is-reply': reply }">
            <c-button-arrows size="xl" colored>
                <span :class="{
                    'up': comment.rate > 400,
                    'down': comment.rate < 0
                }">{{ comment.rate }}</span>
            </c-button-arrows>
            <div class="comment-container">
                <c-dropdown-menu
                    dropPosition="right"
                    style="right: 5px; top: 10px;"
                />
                <div class="comment-content">
                    <div class="user-info">
                        <c-img :src="comment.author.img"/>
                        <div>
                            <h6>{{ comment.author.name }}</h6>
                            <span class="time">{{ comment.date | timeAgoShort }}</span>
                        </div>
                    </div>
                    <div class="text">{{ comment.text }}</div>
                </div>
                <div class="sub-comments-list">
                    <slot/>
                </div>
            </div>
        </div>

        <c-reply
            @replyMode="reply = $event"
        />

    </div>
</template>

<script>
    import moment from 'moment'

    export default {
        name: 'comment',
        props: {
            comment: {
                type: Object,
                required: true
            }
        },
        components: {
            'c-dropdown-menu': (resolve) => require(['@/ui/components/dropdown-menu'], resolve),
            'c-reply': (resolve) => require(['@/ui/components/community/reply'], resolve),
            'c-button-arrows': (resolve) => require(['@/ui/components/buttons/arrows'], resolve)
        },
        data() {
            return {
                reply: false
            }
        }
    }
</script>


<style lang="scss" scoped>
.community-item__comment {
    display: flex;
    justify-content: space-between;
    align-items: self-start;
    padding: 0 10px;
    margin: 30px 0 10px;
    transition: background-color .3s ease;
    .comment-container {
        width: calc(100% - 65px);
        background: rgba(0, 0, 0, .16);
        border: 1px solid rgba(112, 112, 112, .4);
        position: relative;
        @media (max-width: 767px) {
            width: 100%;
            margin-left: 15px;
            flex-direction: column;
        }
        .comment-content{
            padding: 15px 20px;
            display: flex;
            justify-content: space-between;
            @media (max-width: 767px) {
                flex-direction: column;
            }
            .user-info {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: auto;
                max-width: 30%;
                margin-right: 20px;
                img {
                    width: 30px;
                    height: 30px;
                    object-fit: cover;
                    border-radius: 100%;
                    margin-right: 10px;
                }
                h6 {
                    padding: 0;
                    margin: 0;
                    font-weight: bold;
                    font-size: 14px;
                    color: #fff;
                }
                .time {
                    float: right;
                }
                @media (max-width: 767px) {
                    margin-bottom: 10px;
                }
            }
            .text {
                width: auto;
                font-size: 14px;
                line-height: 17px;
            }
        }
        .sub-comments-list {
            border-top: 1px solid rgba(255, 255, 255, .1);
        }
    }
    .up {
        color: #43C981;
    }
    .down {
        color: #F75D5D;
    }
}
</style>

