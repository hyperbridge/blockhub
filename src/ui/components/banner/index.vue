<template>
    <div class="main-banner text-white">
        <div class="main-banner__content">
            <div class="image-bg" :style="bannerImg" v-if="image" />
            <video autoplay playsinline loop muted v-if="video" class="video-bg">
                <source :src="video.src" type="video/mp4" />
            </video>
            <div class="main-banner__content--logo" :class="[ logo.size ? 'logo-size-' + logo.size : 'logo-size-md', logo.position ]" :style="logoPosition">
                <c-img :src="logo.src" alt="company-logo"/>
            </div>
        </div>
        <div class="main-banner__footer">
            <h4>
                Banner Headline or Game title
            </h4>
            <c-button status="success">Call To Action</c-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'main-banner',
        props: {
            image: Object,
            logo: Object,
            video: Object
        },
        components:{
            'c-button': (resolve) => require(['@/ui/components/buttons'], resolve),
        },
        computed:{
            bannerImg(){
                let img = this.image;
                return{
                    'background-image': 'url(' + img.src + ')',
                    'background-position' : img.position
                }
            },
            logoPosition(){
                let logo = this.logo;
                switch(logo.position){
                    // Top position
                    case 'left top':
                        return 'margin: 0 auto auto 0';
                    case 'center top':
                        return 'margin: 0 auto';
                    case 'right top':
                        return 'margin: 0 0 auto auto';
                    // Center position
                    case 'left center':
                        return 'margin: auto auto auto 0';
                    case 'center center':
                        return 'margin: auto';
                    case 'right center':
                        return 'margin: auto 0 auto auto'
                    // Bottom position
                    case 'left bottom':
                        return 'margin: auto auto 0 0';
                    case 'center bottom':
                        return 'margin: auto auto 0';
                    case 'right bottom':
                        return 'margin: auto 0 0 auto';
                }

            }
        }
    }
</script>

<style lang="scss" scoped>
    .main-banner{
        background: rgba(0, 0, 0, .13);
        padding: 10px;
        border-radius: 5px;
        width: 100%;
    }
    .main-banner__content{
        position: relative;
        overflow: hidden;
        border-radius: 5px;
        min-height: 300px;
        display: flex;
        .image-bg{
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            background-size: cover;
            z-index: 6;
        }
        .video-bg{
            position: absolute;
            top: 50%;
            left: 50%;
            min-width: 100%;
            min-height: 100%;
            width: auto;
            height: auto;
            z-index: 4;
            transform: translateX(-50%) translateY(-50%);
            background-size: cover;
        }
    }
    .main-banner__content--logo{
        padding: 25px;
        position: relative;
        z-index: 10;
        &.logo-size-xs{
            img{
                max-height: 50px;
                max-width: 100%;
            }
        }
        &.logo-size-sm{
            img{
                max-height: 100px;
                max-width: 100%;
            }
        }
        &.logo-size-md{
            img{
                max-height: 150px;
                max-width: 100%;
            }
        }
        &.logo-size-lg{
            img{
                max-height: 200px;
                max-width: 100%;
            }
        }
        &.logo-size-xl{
            img{
                max-height: 250px;
                max-width: 100%;
            }
        }
    }
    .main-banner__footer{
        display: flex;
        padding: 12px 0 7px;
        align-items: center;
        justify-content: space-between;
        flex-wrap: nowrap;
        h4{
            color: #fff;
            font-size: 22px;
            font-weight: bold;
            margin: 0;
        }
    }
</style>
