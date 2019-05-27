<template>
    <c-layout navigationKey="store" :showBreadcrumbs="false" :showRightPanel="false">
        <div class="single-stream">
            <div class="single-stream__wrapper">
                <div class="row">
                    <div class="col-12 col-lg-9 position-relative">
                        <div class="single-stream__nav">
                            <c-button status="dark" class="w-100 d-flex d-md-none justify-content-center my-4" size="lg" data-toggle="collapse" data-target="#product_nav" aria-expanded="false" aria-controls="product_nav">
                                Menu
                            </c-button>
                            <div class="collapse show product_nav" id="product_nav">
                                <ul class="nav nav-tabs margin-bottom-30 justify-content-between">
                                    <li class="nav-item active">
                                        <a class="nav-link active" href="#">Online</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Videos</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Clips</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Followers</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Events</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Followers</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Following</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <template v-if="section == 'online'">
                            <c-video src="https://www.w3schools.com/tags/mov_bbb.mp4" width="100%" :controls="true" />
                        </template>
                    </div>
                    <div class="col-12 col-lg-3 pl-0">
                        <c-chat :messages="messages" />
                    </div>
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
    export default {
        components: {
            'c-video': () => import('~/components/video').then(m => m.default || m),
            'c-chat': () => import('~/components/chat/chat').then(m => m.default || m)
        },
        data(){
            return{
                section: 'online',
                messages: [
                    {
                        "id": 1,
                        "author": 1,
                        "content": "Hello",
                        "createdAt": ""
                    },
                    {
                        "id": 2,
                        "author": 2,
                        "content": "Is it a good offer?",
                        "createdAt": ""
                    },
                    {
                        "id": 3,
                        "author": 3,
                        "content": "Looks good",
                        "createdAt": ""
                    },
                    {
                        "id": 4,
                        "author": 3,
                        "content": "Hi, what do you think about this offer?",
                        "createdAt": ""
                    },
                    {
                        "id": 4,
                        "author": 1,
                        "content": "Hi, what do you think about this offer?",
                        "createdAt": ""
                    },
                    {
                        "id": 5,
                        "author": 1,
                        "content": "Ok",
                        "createdAt": ""
                    },
                    {
                        "id": 6,
                        "author": 1,
                        "content": "Yes",
                        "createdAt": ""
                    },
                    {
                        "id": 7,
                        "author": 2,
                        "content": "Looks good",
                        "createdAt": ""
                    },
                    {
                        "id": 8,
                        "author": 3,
                        "content": "Hello",
                        "createdAt": ""
                    },
                    {
                        "id": 9,
                        "author": 1,
                        "content": "Is it a good offer?",
                        "createdAt": ""
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .single-stream__wrapper{
        max-height: calc( 100vh - 200px );
        overflow-y: auto;
        overflow-x: hidden;
    }
</style>
