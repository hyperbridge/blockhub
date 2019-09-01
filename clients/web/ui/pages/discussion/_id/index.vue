<template>
    <Layout navigationKey="store">
        <div class="container-fluid">
            <Block
                :noGutter="true"
                :onlyContentBg="true">
                <HeadingBar
                    slot="title"
                    class="mb-0"
                    :headingTabs="[
                        { title: 'General', category: 'general_forum' },
                        { title: 'Game Forums', category: 'game_forums_forum' },
                        { title: 'Support', category: 'support_forum' }
                    ]"
                    @changeTab="category = $event" />

                <div class="discussions-list" />
            </Block>
        </div>
    </Layout>
</template>

<script>
import moment from 'moment'

export default {
    head() {
        return {
            title: `Discussion | BlockHub`,
            meta: [
                { hid: 'description', name: 'description', content: `BlockHub discussion` },
                { hid: 'keywords', name: 'keywords', content: 'discussion, community, social, blockchain, game, indie, developer' }
            ]
        }
    },
    components: {
        'HeadingBar': () => import('@ericmuyser/hyper-ui').then(m => m.HeadingBar)
    },
    data() {
        return {
            posts: [
                {
                    title: 'New to BlockHub',
                    rate: '43',
                    commentsCount: '8234',
                    author: {
                        name: 'Alan Walker'
                    }
                },
                {
                    title: 'New to BlockHub',
                    rate: '43',
                    commentsCount: '8234',
                    author: {
                        name: 'Alan Walker'
                    }
                },
                {
                    title: 'New to BlockHub',
                    rate: '43',
                    commentsCount: '8234',
                    author: {
                        name: 'Alan Walker'
                    }
                },
                {
                    title: 'New to BlockHub',
                    rate: '43',
                    commentsCount: '8234',
                    author: {
                        name: 'Alan Walker'
                    }
                }
            ]
        }
    },
    created() {
        this.$store.commit('application/activeModal', 'comingSoon')
    }
}
</script>

<style lang="scss" scoped>
    .discussions-list {
        border-radius: 5px;
        overflow: hidden;
    }

    .discussions-list__item {
        padding: 20px 10px;
        display: flex;
        width: 100%;
        align-items: center;
        color: #fff;
        background: rgb(44, 45, 71); /* Old browsers */
        background: linear-gradient(to bottom, rgba(44, 45, 71, 1) 0%, rgb(51, 51, 78) 50%, rgba(44, 45, 71, 1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        border-bottom: 1px solid #1f1f32;
        &:hover {
            background: #33334E;
            cursor: pointer;
        }
        .icon {
            font-size: 24px;
            color: #fff;
            width: 40px;
            text-align: center;
        }
        .title {
            width: calc(50% - 40px);
        }
        .last-post,
        .discussion {
            width: 25%;
            text-align: right;
        }
    }

    .community-item__header {
        color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        background: rgba(255, 255, 255, .05);
        border-bottom: 1px solid rgba(0, 0, 0, .5);
        &:hover{
            background: rgba(255, 255, 255, .1);
            cursor: pointer;
        }
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
            .commentsCount {
                width: 60px;
                text-align: left;
                i {
                    margin-right: 5px;
                }
            }
        }
    }
</style>
