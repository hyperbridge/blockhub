<template>
    <div>
        <div class="community-item__comment" :class="{ 'is-reply': reply }">
            <c-rate-item
                :rate="comment.rate"
            />
            <div class="comment-container">
                <c-dropdown-menu
                    :dropPosition="right"
                    :style="{ right: '0px', top: '5px' }"
                />
                <div class="comment-content">
                    <div class="user-info">
                        <img :src="comment.author.img"/>
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
export default {
    name: 'comment',
    props: {
        comment: {
            type: Object,
            required: true
        }
    },
    components: {
        'c-dropdown-menu': () => import('@/ui/components/dropdown-menu'),
        'c-rate-item': () => import('@/ui/components/product-community/rate-item'),
        'c-reply': () => import('@/ui/components/product-community/reply')
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
        .comment-content{
            padding: 15px 20px;
            display: flex;
            justify-content: space-between;
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
}
</style>

