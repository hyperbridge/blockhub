<template>
    <div>
        <div class="community-item__comment" :class="{ is_reply: reply }">
            <comment-rate
                :rate="comment.rate"
            />
            <div class="comment-container">
                <dropdown-menu
                    :dropPosition="right"
                    :style="{ right: '0px', top: '5px' }"
                />
                <div class="comment-content">
                    <div class="user_info">
                        <img :src="comment.author.img"/>
                        <div class="user_i">
                            <h6>{{ comment.author.name }}</h6>
                            <span class="time">3 years Ago</span>
                        </div>
                    </div>
                    <div class="text">{{ comment.text }}</div>
                </div>
                <div class="sub_comments_list">
                    <slot />
                </div>
            </div>
        </div>

        <transition name="slide-top">
            <div class="community-item__post-reply" v-if="reply">
                <h4 class="mt-4 mb-2 text-left">Your Reply:</h4>
                <div class="form-group">
                    <textarea class="form-control" rows="6"></textarea>
                </div>
            </div>
        </transition>


        <div class="community-item__action text-right">
            <template v-if="reply">
                <a href="#3" class="btn btn-sm btn-danger" @click="reply = false">
                    Cancel
                </a>
                <a href="#3" class="btn btn-sm btn-info" @click="reply = false">
                    Submit
                </a>
            </template>
            <template v-else>
                <a href="#3" class="btn btn-sm btn-info" @click="reply = true">
                    Reply
                </a>
            </template>
        </div>

    </div>
</template>

<script>

    import DropdownMenu from '../dropdown-menu/index'
    import CommentRate from '../product-community/comment-rate'

export default {
    props: {
        comment: {
            type: Object,
            required: true
        }
    },
    components: {
        'dropdown-menu': DropdownMenu,
        'comment-rate': CommentRate
    },
    data() {
        return {
            reply: false
        }
    }
}
</script>


<style lang="scss">
.is_reply {
    background: rgba(255, 255, 255, .05);
}

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
            .user_info {
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
        .sub_comments_list {
            display: block;
            width: 100%;
            border-top: 1px solid rgba(255, 255, 255, .1);
        }
    }
}

.community-item__action {
    margin: 10px 7px;
    .btn {
        padding: 0px 7px;
        text-transform: uppercase;
        font-weight: bold;
        margin: 0 3px;
    }
    .btn-icon {
        color: #F75D5D;
        font-size: 16px;
    }
    .btn-info {
        background: #5D75F7;
    }
    .btn-danger {
        background: #F75D5D;
    }
}

.community-item__post-reply {
    margin: 0 10px;
    box-sizing: border-box;
    width: calc(100% - 20px);
    h4 {
        font-weight: bold;
    }
    textarea {
        background: rgba(0, 0, 0, .1);
    }
}

.slide-top-enter-active, .slide-top-leave-active {
    transition-property: opacity, transform;
    transition-duration: .5s;
    transition-timing-function: ease;
}
.slide-top-enter, .slide-top-leave-to {
    opacity: 0;
    transform: translateY(-50%);
}
.slide-top-leave-active {
    position: absolute;
    transition-duration: .25s;
}
</style>

