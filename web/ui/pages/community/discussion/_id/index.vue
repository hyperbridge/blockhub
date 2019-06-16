<template>
    <c-layout navigationKey="store" :breadcrumbLinks="breadcrumbLinks">
        <div class="row">
            <div class="col-12">
                <div class="community-wrapper">
                    <c-item
                        :id="discussion.id"
                        :title="discussion.name"
                        :content="discussion.value"
                        :comments="discussion.messages"
                        :actionStatus="discussion.meta.actionStatus"
                        :rate="discussion.meta.rate"
                        :commentsCount="discussion.meta.commentsCount"
                        :author="discussion.meta.author" />

                    <c-post-comment
                        v-for="(comment, index) in discussion.messages"
                        :key="index"
                        :date="comment.createdAt"
                        :text="comment.value"
                        :author="comment.meta.author"
                        :rate="comment.meta.rate">
                        <c-post-comment
                            v-for="(subcomment, index) in comment.replies"
                            :key="index"
                            :date="subcomment.createdAt"
                            :text="subcomment.value"
                            :author="comment.meta.author"
                            :rate="subcomment.meta.rate" />
                    </c-post-comment>
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
import moment from 'moment'

export default {
    components: {
        'c-item': () => import('~/components/community/post-item').then(m => m.default || m),
        'c-post-comment': () => import('~/components/community/comment').then(m => m.default || m)
    },
    data() {
        const authors = [
            { name: 'Nakatochi', img: 'https://www.shareicon.net/data/128x128/2015/09/20/104335_avatar_512x512.png' },
            { name: 'Nakatochi', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaeGUxfoKhj7XC5BMdwz8dQ9QbavjCMgk6ZXkn2biteSN1c7nL' },
            { name: 'SatoshiSan', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaeGUxfoKhj7XC5BMdwz8dQ9QbavjCMgk6ZXkn2biteSN1c7nL' }
        ]
        const dates = [
            '2018-07-24T04:09:00.000Z',
            '2017-07-24T04:09:00.000Z',
            '2018-08-12T04:09:00.000Z',
            '2018-08-14T04:09:00.000Z',
            '2018-04-14T04:09:00.000Z',
            '2018-04-17T04:09:00.000Z'
        ]
        const placeholderText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non maximus tellus, eu lacinia justo. Cras semper vestibulum est. Donec a massa vitae nibh consectetur efficitur non in erat. Morbi id dapibus tortor. Praesent sit amet vulputate leo, eu posuere neque. In id ante scelerisque, commodo nisi non, eleifend mauris. Pellentesque massa elit, semper non libero nec, interdum aliquet dolor.'

        return {
            post: {
                objectId: '192u81i218j2812j8',
                title: `The previous title doesn't have it's single line aligned vertically because XD does not have this functionality.`,
                date: dates[3],
                rate: 1391,
                commentsCount: 894391,
                status: 'starred',
                author: authors[0],
                content: {
                    img: 'http://memesbams.com/wp-content/uploads/2017/08/2.3-Delightful-cheer-up-cat-meme.jpg',
                    text: placeholderText,
                    comments: [
                        { author: authors[1], text: placeholderText, rate: 319, date: dates[4] },
                        {
                            author: authors[0], text: placeholderText, rate: 932, date: dates[1], replies: [
                                { author: authors[1], text: placeholderText, rate: 318, date: dates[0] },
                                { author: authors[0], text: placeholderText, rate: -49, date: dates[2] },
                                { author: authors[1], text: placeholderText, rate: 442, date: dates[1] },
                                { author: authors[0], text: placeholderText, rate: 1239, date: dates[5] }
                            ]
                        },
                        { author: authors[0], text: placeholderText, rate: -51, date: dates[2] }
                    ]
                }
            }
        }
    },
    async asyncData({ params, store }) {
        await store.dispatch('discussions/find', {
            query: {
                id: params.id,
                $eager: '[community, messages.^, messages.replies.^]'
            }
        })

        const discussion = store.getters['discussions/get'](params.id)
        const forum = discussion.community // store.getters['community/get'](discussion.communityId)

        return {
            discussion,
            breadcrumbLinks: [
                { to: { path: '/' }, title: 'Home' },
                { to: { path: '/community' }, title: 'Community' },
                { to: { path: '/community/forums' }, title: 'Forums' },
                { to: { path: `/community/forum/${forum.id}` }, title: forum.name },
                { to: { path: `/discussion/${discussion.id}` }, title: discussion.name }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .community-list {
        border-radius: 5px;
        .c-input {
            padding: 8px;
        }
        .community-item {
            border-radius: 0;
            border-bottom: 0;
            transition: transform 400ms ease-in-out;
            &:first-child {
                border-radius: 5px 5px 0 0;
            }
            &:last-child {
                border-bottom: 1px solid rgba(112, 112, 112, .2);
                border-radius: 0 0 5px 5px;
            }
            &:nth-child(even) {
                background: rgba(0, 0, 0, .26);
            }
            &:hover {
                background: rgba(0, 0, 0, .25);
                transform: scale(1.02);
            }
        }
    }
</style>
