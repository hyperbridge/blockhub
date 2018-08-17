<template>
    <div class="community-item">
        <div class="community-item__header">
            <div class="icon">
                <i class="fas fa-map-pin"></i>
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
                    <span class="time">25 min</span>
                    <img :src="post.author.img"/>
                    <span class="name">{{ post.author.name }}</span>
                </div>
                <div class="comments_count">
                    <i class="fas fa-comment"></i>
                    320
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['post']
}
</script>

<style lang="scss" scoped>
    .community-item {
        background: rgba(0, 0, 0, .16);
        border: 1px solid rgba(112, 112, 112, .2);
        margin-bottom: 15px;
        border-radius: 5px;
        &.is_reply {
            background: rgba(255, 255, 255, .1);
        }
    }

    .community-item__header {
        color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        .position {
            width: 50px;
            text-align: center;
            padding: 13px 0 15px;
            position: relative;
            margin-right: 10px;
            span {
                display: block;
                position: relative;
                z-index: 4;
                &.up {
                    color: #43C981;
                }
                &.down {
                    color: #F75D5D;
                }
            }
            i {
                font-size: 26px;
                position: absolute;
                left: 0;
                right: 0;
                z-index: 3;
                cursor: pointer;
                color: #C6C6D6;
                &.fa-sort-up {
                    top: 0;
                    &:hover {
                        color: #43C981;
                    }
                }
                &.fa-sort-down {
                    bottom: 0;
                    &:hover {
                        color: #F75D5D;
                    }
                }
            }
        }
        .icon {
            width: 40px;
            height: 40px;
            margin-right: 15px;
            line-height: 40px;
            text-align: center;
            background: rgba(0, 0, 0, .13);
            font-size: 18px;
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
                width: 40px;
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
</style>
