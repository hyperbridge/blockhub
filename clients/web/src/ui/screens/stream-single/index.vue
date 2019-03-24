<template>
    <c-layout navigationKey="store" :showBreadcrumbs="false" :showRightPanel="false">
        <div class="single-stream">
            <div class="single-stream__wrapper">
                <div class="row align-items-stretch">
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
                    <div class="col-12 col-lg-3 pl-0 flex-column align-items-end">
                        <div class="messages-title">
                            <div class="h3">
                                Chat
                            </div>
                        </div>
                        <div class="messages-list">
                            <c-scrollable-content>
                                <c-message-small v-for="msg in messages"
                                                 :author="msg.author"
                                                 :color="msg.color"
                                                 :content="msg.content"
                                />
                            </c-scrollable-content>
                        </div>
                        <c-chat-answer class="mt-auto" :showAttachment="false"/>
                    </div>
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
    export default {
        components: {
            'c-video': (resolve) => require(['@/ui/components/video'], resolve),
            'c-chat': (resolve) => require(['@/ui/components/chat/chat'], resolve),
            'c-chat-answer': (resolve) => require(['@/ui/components/chat-new/answer-field/field'], resolve),
            'c-message-small': (resolve) => require(['@/ui/components/chat-new/message-small'], resolve),
            'c-scrollable-content': (resolve) => require(['@/ui/components/chat-new/content/scrollable-content'], resolve)
        },
        data(){
            return{
                section: 'online',
                messages: [
                    {
                        "author": "Joseph",
                        "content": "Hello",
                        "createdAt": "",
                        "color": "green"
                    },
                    {
                        "author": "killer",
                        "content": "Is it a good offer?",
                        "createdAt": "",
                        "color": "green"
                    },
                    {
                        "author": "Mort",
                        "content": "Looks good",
                        "createdAt": "",
                        "color": "red"
                    },
                    {
                        "author": "Poll",
                        "content": "Hi, what do you think about this offer?",
                        "createdAt": "",
                        "color": "blue"
                    },
                    {
                        "author": "Alan",
                        "content": "Hi, what do you think about this offer?",
                        "createdAt": "",
                        "color": "purple"
                    },
                    {
                        "author": "klon",
                        "content": "Ok",
                        "createdAt": "",
                        "color": "yellow"
                    },
                    {
                        "author": "dorat",
                        "content": "Yes",
                        "createdAt": "",
                        "color": "darkblue"
                    },
                    {
                        "author": "Walter",
                        "content": "Looks good",
                        "createdAt": "",
                    },
                    {
                        "author": "iglan",
                        "content": "Hello",
                        "createdAt": "",
                        "color": "green"
                    },
                    {
                        "author": "weltor",
                        "content": "Is it a good offer?",
                        "createdAt": "",
                        "color": "green"
                    },
                    {
                        "author": "Joseph",
                        "content": "Hello",
                        "createdAt": "",
                        "color": "green"
                    },
                    {
                        "author": "killer",
                        "content": "Is it a good offer?",
                        "createdAt": "",
                        "color": "green"
                    },
                    {
                        "author": "Mort",
                        "content": "Looks good",
                        "createdAt": "",
                        "color": "red"
                    },
                    {
                        "author": "Poll",
                        "content": "Hi, what do you think about this offer?",
                        "createdAt": "",
                        "color": "blue"
                    },
                    {
                        "author": "Alan",
                        "content": "Hi, what do you think about this offer?",
                        "createdAt": "",
                        "color": "purple"
                    },
                    {
                        "author": "klon",
                        "content": "Ok",
                        "createdAt": "",
                        "color": "yellow"
                    },
                    {
                        "author": "dorat",
                        "content": "Yes",
                        "createdAt": "",
                        "color": "darkblue"
                    },
                    {
                        "author": "Walter",
                        "content": "Looks good",
                        "createdAt": "",
                    },
                    {
                        "author": "iglan",
                        "content": "Hello",
                        "createdAt": "",
                        "color": "green"
                    },
                    {
                        "author": "weltor",
                        "content": "Is it a good offer?",
                        "createdAt": "",
                        "color": "green"
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
    .messages-title{
        padding: 4px 0;
        margin: 0;
        font-size: 21px;
        border-bottom: 1px solid #dee2e6;
    }
    .messages-list{
        height: 400px;
        margin-top: 10px;
    }
</style>
