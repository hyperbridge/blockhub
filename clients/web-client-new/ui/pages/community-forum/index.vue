<template>
    <c-layout navigationKey="store" :defaultBreadcrumb="false">
            <div class="container-fluid">
                <div class="row margin-bottom-50">
                    <div class="col-12 col-lg-8 col-xl-9">
                        <c-block title="General" :noGutter="true" :onlyContentBg="true">
                            <div class="community-list">
                                <c-community-item v-for="(post, index) in posts" :key="index" :post="post" />
                            </div>
                        </c-block>
                    </div>
                    <div class="col-12 col-lg-4 col-xl-3">
                        <c-block title="Links & Resources" :noGutter="true" :onlyContentBg="true">
                            <div class="d-flex flex-column">
                                <c-search class="mb-2" />
                                <c-button status="plain" class="my-1">
                                    <i class="fas fa-info-circle"></i> View Discussion Guidelines
                                </c-button>
                                <c-button status="plain" class="my-1">
                                    <i class="fas fa-info-circle"></i> Discussion Rules
                                </c-button>
                                <c-button status="plain" class="my-1">
                                    <i class="fas fa-question-circle"></i> FAQ
                                </c-button>
                                <c-button status="success" icon="plus" class="margin-top-20" style="margin-right: auto">
                                    New discussion
                                </c-button>
                            </div>
                        </c-block>
                    </div>
                </div>
            </div>
    </c-layout>
</template>

<script>
    import moment from 'moment';

    export default {
        components: {
            'c-heading-bar': () => import('~/components/heading-bar').then(m => m.default || m),
            'c-community-item': () => import('~/components/community/post-item').then(m => m.default || m),
            'c-search': () => import('~/components/searcher').then(m => m.default || m)
        },
        data() {
            return {
                posts: [
                    {
                        id: 1,
                        title: "New to BlockHub",
                        rate: "43",
                        comments_count: "8234",
                        status: "pinned",
                        author: {
                            name: "Alan Walker"
                        }
                    },
                    {
                        id: 2,
                        title: "New to BlockHub",
                        rate: "43",
                        comments_count: "8234",
                        status: "locked",
                        author: {
                            name: "Alan Walker"
                        }
                    },
                    {
                        id: 3,
                        title: "New to BlockHub",
                        rate: "43",
                        comments_count: "8234",
                        status: "starred",
                        author: {
                            name: "Alan Walker"
                        }
                    },
                    {
                        id: 4,
                        title: "New to BlockHub",
                        rate: "43",
                        comments_count: "8234",
                        author: {
                            name: "Alan Walker"
                        }
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .community-list {
        border-radius: 5px;
        .c-input{
            padding: 8px;
        }
        .community-item{
            border-radius: 0;
            border-bottom: 0;
            transition: transform 200ms ease-in-out;
            background: rgba(0, 0, 0, .1);
            &:first-child{
                border-radius: 5px 5px 0 0;
            }
            &:last-child{
                border-bottom: 1px solid rgba(112, 112, 112, .2);
                border-radius: 0 0 5px 5px;
            }
            &:nth-child(even){
                background: rgba(0, 0, 0, .2);
            }
            &:hover{
                background: rgba(0, 0, 0, .25);
                transform: scale(1.02);
            }
        }
    }
</style>
