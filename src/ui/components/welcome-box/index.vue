<template>
    <div class="welcome-block">
        <div class="welcome-block__header">
            <c-img src="/static/img/logo-white.svg" alt="Logo" />
        </div>
        <div class="welcome-block__download-block">
            <div class="info">
                <h4 class="font-weight-bold text-uppercase h3" v-if="prompt">This requires our desktop version</h4>
                <p class="h4" v-if="prompt">
                    Some actions are not safe within a browser,
                    so we built BlockHub it's own fortress,
                    a safer environment for you to do much more!
                </p>
                <h4 class="font-weight-bold text-uppercase h3" v-if="!prompt">DO MORE WITH OUR DESKTOP CLIENT</h4>
                <p class="h4" v-if="!prompt">
                    Some actions are not safe within a browser, so we built BlockHub it's own fortress, a safer environment for you to do much more!
                </p>
                <div class="action d-flex align-items-center">
                    <a :href="defaultDownload.link"
                       class="btn btn-outline-success"
                       @click="startDownload(defaultDownload)"
                       v-if="!downloading">
                        <strong>Download Now</strong>
                        <small>for {{ defaultDownload.text }}</small>
                    </a>
                    <div v-if="downloading">
                        Downloading now. <a :href="downloading.link">Click here</a><br> if it doesn't start in 10 seconds.
                    </div>
                    <div class="download_info" @click="showAllPlatforms">
                        <h6>Using another OS?</h6>
                        <p>We are multiplatform, enjoy!</p>
                        <i class="fab fa-apple"></i>
                        <i class="fab fa-linux"></i>
                        <i class="fab fa-windows"></i>
                    </div>
                </div>
            </div>
            <div class="other_options" v-if="showAll">
                <div v-for="(item, index) in downloads" :key="index">
                    <a :href="item.link"
                       class="btn"
                       v-for="(item, index) in item" :key="index">
                        <strong>{{ item.text }}</strong>
                        <small>{{ item.subtext }}</small>
                    </a>
                </div>
            </div>
        </div>
        <div class="welcome-block__screen">
            <c-img src="/static/img/welcome-box.png" />
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            prompt: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                user_agent: '',
                showAll: false,
                downloading: null,
                defaultDownload: null,
                downloads: {
                    'macos': {
                        default: {
                            text: 'MacOS',
                            subtext: '64-bit',
                            link: '#/download/desktop/mac'
                        }
                    },
                    'windows': {
                        default: {
                            text: 'Windows',
                            subtext: '64-bit',
                            link: '#/download/desktop/windows'
                        },
                        generic32: {
                            text: 'Windows',
                            subtext: '32-bit',
                            link: '#/download/desktop/windows-32bit'
                        },
                    },
                    'linux': {
                        default: {
                            text: 'Linux',
                            subtext: '64-bit',
                            link: '#/download/desktop/linux'
                        },
                        generic32: {
                            text: 'Linux',
                            subtext: '32-bit',
                            link: '#/download/desktop/linux-32bit'
                        },
                        debian64: {
                            text: 'Linux',
                            subtext: '64-bit Debian',
                            link: '#/download/desktop/linux-64bit-debian'
                        },
                        debian32: {
                            text: 'Linux',
                            subtext: '32-bit Debian',
                            link: '#/download/desktop/linux-32bit-debian'
                        }
                    }
                }
            }
        },
        created(){
            this.getOS()
        },
        methods:{
            getOS() {
                let userAgent = window.navigator.userAgent,
                    platform = window.navigator.platform,
                    macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
                    windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
                    iosPlatforms = ['iPhone', 'iPad', 'iPod'],
                    os = null;

                if (macosPlatforms.indexOf(platform) !== -1) {
                    this.user_agent = 'macos';
                } else if (iosPlatforms.indexOf(platform) !== -1) {
                    this.user_agent = 'ios';
                } else if (windowsPlatforms.indexOf(platform) !== -1) {
                    this.user_agent = 'windows';
                } else if (/Android/.test(userAgent)) {
                    this.user_agent = 'android';
                } else if (!os && /Linux/.test(platform)) {
                    this.user_agent = 'linux';
                }

                this.defaultDownload = this.downloads[this.user_agent].default
            },
            showAllPlatforms(){
                this.showAll = !this.showAll;
            },
            startDownload(item) {
                this.downloading = item
            }
        }
    }
</script>

<style lang="scss" scoped>
    .welcome-block{
        display: flex;
        flex-direction: column;
        position: relative;
    }
    .welcome-block__header{
        background: url('/static/img/welcome-header-bg.png') no-repeat;
        background-size: cover;
        padding: 15px 30px;
        border-radius: 5px 5px 0 0;
        text-align: left;
        img{
            width: 300px;
            max-width: 40%;
        }
    }
    .welcome-block__download-block{
        border-radius: 0 0 5px 5px;
        overflow: hidden;
        .info{
            text-align: left;
            background: #3E415C;
            padding: 30px 50% 30px 30px;
            h3{
                font-weight: bold;
                font-size: 28px;
            }
            h4{
                font-size: 24px;
                font-weight: 300;
                line-height: 30px;
            }
            .action{
                margin-top: 30px;
                .download_info{
                    margin-left: 30px;
                    font-size: 14px;
                    cursor: pointer;

                    h6{
                        font-weight: bold;
                        font-size: 14px;
                        margin: 0;
                    }
                    p{
                        padding: 0;
                    }
                    i{
                        font-size: 16px;
                        margin-right: 5px;
                    }
                }
                .btn-outline-success{
                    padding: 15px;
                    width: 200px;
                    color: #fff;
                    text-align: center;
                    border: 2px solid #37A56A;
                    &:hover{
                        background: #37A56A;
                    }
                    strong{
                        display: block;
                        font-size: 21px;
                    }
                }
            }
        }
        .other_options {
            text-align: left;
            background: #393b54;
            padding: 20px;
        }
    }
    .welcome-block__screen{
        position: absolute;
        top: 0;
        right: -50px;
        padding: 20px 0 20px 20px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        max-height: 370px;
        max-width: 510px;
        img{
            width: 100%;
            height: 100%;
        }
    }
    @media (max-width: 768px){
        .welcome-block__download-block{
            .info{
                padding: 30px;
            }
        }
        .welcome-block__screen{
            display: none;
        }
    }
    @media (max-width: 512px){
        .welcome-block__download-block{
            .action{
                margin-top: 20px;
                flex-direction: column;
                .btn{
                    margin-bottom: 20px;
                }
                .download_info{
                    text-align: center;
                    margin-left: 0!important;
                }
            }
        }
    }
</style>
