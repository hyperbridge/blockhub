<template>
    <div class="community-item" :class="{ 'is-reply': reply, 'preview-mode': !(post.content && post.content.comments) }">
        <div class="community-item__header">
            <c-rate-item
                :rate="post.rate"
            />
            <div class="icon">
                <i class="fas" :class="post_icon"></i>
            </div>
            <div class="text">
                {{ post.title }}
            </div>
            <div class="statistic">
                <div class="rating" :class="[ post.rate < 0 ? 'down' : 'up' ]">
                    <i class="fas" :class="[ post.rate < 0 ? 'fa-chevron-down' : 'fa-chevron-up' ]"></i>
                    {{ post.rate < 0 ? post.rate * -1 : post.rate }}
                </div>
                <div class="user">
                    <span class="time">{{ post.date | timeAgo }}</span>
                    <img :src="post.author.img"/>
                    <span class="name">{{ post.author.name }}</span>
                </div>
                <div class="comments_count">
                    <i class="fas fa-comment"></i>
                    {{ post.comments_count }}
                </div>
            </div>
        </div>
        <template v-if="post.content">
            <div class="community-item__post">
                <c-dropdown-menu
                    class="community-item__post-menu"
                    :style="{ right: 0, top: '5px' }"
                />
                <p>{{ post.content.text }}</p>
                <img :src="post.content.img"/>
            </div>

            <c-reply
                @replyMode="reply=$event"
            />
        </template>
    </div>
</template>

<script>
export default {
    props: ['post'],
    components: {
        'c-post-comment': () => import('@/ui/components/product-community/comment'),
        'c-reply': () => import('@/ui/components/product-community/reply'),
        'c-dropdown-menu': () => import('@/ui/components/dropdown-menu'),
        'c-rate-item': () => import('@/ui/components/product-community/rate-item'),
    },
    data() {
        return {
            reply: false
        }
    },
    computed: {
        post_icon() {
            switch(this.post.status) {
                case 'pinned':
                    return 'fa-map-pin';
                case 'locked':
                    return 'fa-lock';
                case 'starred':
                    return 'fa-star';
                default:
                    return 'fa-comments';
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.community-item {
    margin-bottom: 15px;
    border-radius: 5px;
    &.preview-mode {
        background: rgba(0, 0, 0, .16);
        border: 1px solid rgba(112, 112, 112, .2);
    }
}

.community-item__header {
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    .icon {
        width: 40px;
        height: 40px;
        margin-right: 15px;
        line-height: 40px;
        text-align: center;
        background: rgba(0, 0, 0, .13);
        font-size: 18px;
        border-radius: 3px;
        .fa-map-pin {
            color: #5D75F7;
        }
        .fa-lock {
            color: #F75D5D;
        }
        .fa-star {
            color: #FADC72;
        }
        .fa-comments {
            color: #3D3E5D;
        }
    }
    .text {
        width: calc(70% - 70px);
        font-weight: bold;
        font-size: 16px;
    }
    .statistic {
        width: 30%;
        min-width: 250px;
        margin-left: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .rating {
            width: 50px;
            text-align: center;
            i {
                margin-right: 5px;
            }
            &.down {
                color: #F75D5D;
            }
            &.up {
                color: #43C981;
            }
        }
        .user {
            text-align: center;
            img {
                width: 20px;
                height: 20px;
                border-radius: 100%;
                margin: 0 5px;
                float: unset;
            }
        }
        .comments_count {
            width: 60px;
            text-align: left;
            i {
                margin-right: 5px;
            }
        }
    }
}

.community-item__post {
    background: rgba(0, 0, 0, .1);
    border: 1px solid rgba(112, 112, 112, .5);
    border-radius: 5px;
    margin: 21px 10px 10px;
    padding: 10px 30px 10px 10px;
    font-size: 14px;
    line-height: 16px;
    max-height: 350px;
    overflow-y: auto;
    position: relative;
    overflow-x: hidden;
    img {
        max-width: 100%;
        max-height: 300px;
    }
    &::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, .3);
        border-radius: 0;
    }
    &::-webkit-scrollbar {
        width: 4px;
        background: rgba(0, 0, 0, .3);
    }
    &::-webkit-scrollbar-thumb {
        background-color: #5D75F7;
        border-radius: 0;
        border: none;
    }
}

.community-item__post-menu {
    position: absolute;
    right: 0;
    top: 5px;
    width: 20px;
    height: 20px;
}
</style>
