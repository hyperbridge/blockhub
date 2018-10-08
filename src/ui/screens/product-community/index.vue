<template>
    <c-layout navigationKey="product">
        <div class="content" id="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12" v-if="!product">
                        Product not found
                    </div>
                    <div class="col-12" v-if="product">
                        <h1 class="title margin-top-10">{{ product.name }}</h1>

                        <c-tags-list :tags="product.developer_tags" v-if="!editing || product.developer_tags"></c-tags-list>

                        <ul class="nav nav-tabs margin-bottom-50 justify-content-between">
                            <li class="nav-item">
                                <router-link :to="`/product/${product.id}`" class="nav-link">Overview</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="`/product/${product.id}/community`" class="nav-link active">Community</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="`/product/${product.id}/projects`" class="nav-link">Crowdfunding</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="`/product/${product.id}/assets`" class="nav-link">Assets</router-link>
                            </li>
                        </ul>

                        <div v-if="community_1">
                            <c-item
                                v-for="(post, index) in posts"
                                :key="index"
                                :post="post"
                            />
                        </div>

                        <div v-if="community_2">
                            <div class="community-wrapper">

                                <c-item :post="post"/>

                                <c-post-comment
                                    v-for="(comment, index) in post.content.comments"
                                    :key="index"
                                    :comment="comment"
                                >
                                    <c-post-comment
                                        v-for="(subcomment, index) in comment.replies"
                                        :key="index"
                                        :comment="subcomment"
                                    />
                                </c-post-comment>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
    const updateProduct = function () {
        if (!this.$store.state.marketplace.products)
            return

        const product = this.$store.state.marketplace.products[this.id]

        if (!product)
            return

        if (product.images.preview && product.images.preview.length) {
            const header = window.document.getElementById('header-bg');
            header.style['background-image'] = 'url(' + product.images.preview[0] + ')';
            header.style['background-size'] = 'cover';
        }

        return product
    }

    export default {
        props: ['id'],
        components: {
            'c-layout': (resolve) => require(['@/ui/layouts/default'], resolve),
            'c-tags-list': (resolve) => require(['@/ui/components/tags'], resolve),
            'c-item': (resolve) => require(['@/ui/components/community/post-item'], resolve),
            'c-post-comment': (resolve) => require(['@/ui/components/community/comment'], resolve)
        },
        data() {
            const authors = [
                { name: 'Nakatochi', img: 'https://www.shareicon.net/data/128x128/2015/09/20/104335_avatar_512x512.png' },
                { name: 'Nakatochi', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaeGUxfoKhj7XC5BMdwz8dQ9QbavjCMgk6ZXkn2biteSN1c7nL' },
                { name: 'SatoshiSan', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaeGUxfoKhj7XC5BMdwz8dQ9QbavjCMgk6ZXkn2biteSN1c7nL' },
            ];
            const dates = [
                '2018-07-24T04:09:00.000Z',
                '2017-07-24T04:09:00.000Z',
                '2018-08-12T04:09:00.000Z',
                '2018-08-14T04:09:00.000Z',
                '2018-04-14T04:09:00.000Z',
                '2018-04-17T04:09:00.000Z',
            ];
            const placeholderText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non maximus tellus, eu lacinia justo. Cras semper vestibulum est. Donec a massa vitae nibh consectetur efficitur non in erat. Morbi id dapibus tortor. Praesent sit amet vulputate leo, eu posuere neque. In id ante scelerisque, commodo nisi non, eleifend mauris. Pellentesque massa elit, semper non libero nec, interdum aliquet dolor.';
            return {
                community_1: false,
                community_2: true,
                posts: [
                    {
                        title: 'This post has been pinned and the title is a single line of text',
                        date: dates[0],
                        rate: -319,
                        comments_count: 3019,
                        status: 'pinned',
                        author: authors[0],
                    },
                    {
                        title: `The previous title doesn't have it's single line aligned vertically because XD does not have this functionality.`,
                        date: dates[1],
                        rate: 232,
                        comments_count: 3019,
                        status: 'locked',
                        author: authors[1]
                    },
                    {
                        title: `The previous title doesn't have it's single line aligned vertically because XD does not have this functionality.`,
                        date: dates[2],
                        rate: 103,
                        comments_count: 894391,
                        status: 'starred',
                        author: authors[1],
                        content: {
                            img: 'http://memesbams.com/wp-content/uploads/2017/08/2.3-Delightful-cheer-up-cat-meme.jpg',
                            text: placeholderText
                        }
                    },
                    {
                        title: 'Actually all the boxes with the titles here are the same size',
                        date: dates[3],
                        rate: 103,
                        comments_count: 894391,
                        author: authors[0]
                    }
                ],
                post: {
                    objectId: '192u81i218j2812j8',
                    title: `The previous title doesn't have it's single line aligned vertically because XD does not have this functionality.`,
                    date: dates[3],
                    rate: 1391,
                    comments_count: 894391,
                    status: 'starred',
                    author: authors[0],
                    content: {
                        img: 'http://memesbams.com/wp-content/uploads/2017/08/2.3-Delightful-cheer-up-cat-meme.jpg',
                        text: placeholderText,
                        comments: [
                            { author: authors[1], text: placeholderText, rate: 319, date: dates[4] },
                            { author: authors[0], text: placeholderText, rate: 932, date: dates[1], replies: [
                                { author: authors[1], text: placeholderText, rate: 318, date: dates[0] },
                                { author: authors[0], text: placeholderText, rate: -49, date: dates[2] },
                                { author: authors[1], text: placeholderText, rate: 442, date: dates[1] },
                                { author: authors[0], text: placeholderText, rate: 1239, date: dates[5] }
                            ]},
                            { author: authors[0], text: placeholderText, rate: -51, date: dates[2] }
                        ]
                    }
                }
            }
        },
        methods: {
            save() {
                this.$store.dispatch('marketplace/updateProduct', this.product)
            }
        },
        computed: {
            product: updateProduct,
            editing() {
                if (!this.$store.state.application.editor_mode) {
                    for (let key in this.activeElement) {
                        this.activeElement[key] = false
                    }
                }
                return this.$store.state.application.editor_mode === 'editing'
            },
            first_product(){
                return this.$store.state.marketplace.first_product
            }
        },
        mounted: updateProduct,
        created: updateProduct,
        beforeDestroy() {
            window.document.getElementById('header-bg').style['background-image'] = 'url(/static/img/backgrounds/1.jpg)'
        }
    }
</script>

<style lang="scss">
.community-wrapper {
    background-color: rgba(0, 0, 0, 0.13);
    border: 1px solid rgba(112, 112, 112, .2);
    margin-bottom: 15px;
    border-radius: 5px;
}

.is-reply {
    transition: background-color .3s ease;
    background: rgba(255, 255, 255, .1);
}
</style>
