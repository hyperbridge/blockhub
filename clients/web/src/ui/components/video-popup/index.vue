<template>
    <c-popup :activated="activated" width="1100" @close="$emit('close')">
        <div class="video-popup" slot="custom_content">
            <div class="video-popup__video-container">
                <c-youtube :video-id="youtube" :player-vars="playerVars" fitParent="true" height="450" width="800" :resize="true" v-if="youtube"></c-youtube>
                <c-twitch :channel="twitch" height="450" width="800" v-else-if="twitch"></c-twitch>
                <video controls v-else-if="video">
                    <template v-for="item in video">
                        <source :src="item.src" :type="['video/' + item.format ]">
                    </template>
                    Your browser does not support the video tag.
                </video>
                <slot name="video" v-else />
            </div>
            <div class="video-popup__video-comments" v-if="showComments">
                <c-heading-bar name="Comments" :bgColor="false" />
                <div class="comments__wrapper">
                    <slot />
                </div>
                <div class="comments__form">
                    <div class="input-group p-0 m-0">
                        <input type="text" class="form-control" placeholder="Your comment">
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button" id="button-addon2">
                                <i class="fas fa-paper-plane"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </c-popup>
</template>

<script>

    export default {
        name: 'video-popup',
        components:{
            'c-popup': (resolve) => require(['@/ui/components/popups'], resolve),
            'c-heading-bar': (resolve) => require(['@/ui/components/heading-bar'], resolve),
            'c-youtube': (resolve) => require(['@/ui/components/youtube'], resolve),
            'c-twitch': (resolve) => require(['@/ui/components/twitch'], resolve)
        },
        props:{
            activated:{
                type: Boolean,
                default: false
            },
            video: [ Object, Array ],
            youtube: String,
            twitch: String,
            showComments:{
                type: Boolean,
                default: true
            },
        },
        data(){
            return {
                playerVars: {
                    autoplay: 0
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .video-popup{
        display: flex;
        align-items: stretch;
        width: 100%;
        justify-content: space-between;
    }
    .video-popup__video-container{
        width: auto;
        display: flex;
        video{
            width: 800px;
        }
    }
    .video-popup__video-comments{
        width: 300px;
        height: 450px;
    }
    .video-popup__video-comments{
        display: flex;
        flex-direction: column;
        background: #3D3E5D;
        padding: 10px 20px 10px;
    }
    .comments__wrapper{
        height: 70%;
        overflow-y: auto;
        color: #fff;
        display: flex;
        flex-direction: column;
        padding-right: 14px;
    }
    .comments__form{
        margin-top: 15px;
        input{
            background: transparent;
            border: none;
            color: #fff;
            border-bottom: 1px solid #5e5e90;
            padding-right: 0;
            padding-left: 0;
            border-radius: 0;
        }
        .btn{
            border: none;
            border-bottom: 1px solid #5e5e90;
            color: #fff;
            border-radius: 0;
        }
    }
</style>
