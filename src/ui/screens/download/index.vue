<template>
    <c-layout>
        <div class="content" id="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 mb-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="card-sub-bg position-relative">
                                    <img src="/static/img/logo-white-text.png" alt="Logo" />
                                    <img src="../../../assets/img/monitor_temp.png" class="absolute_img" alt="Logo" />
                                </div>
                                <div class="info">
                                    <h3 class="text-bold text-uppercase">OWN WHAT YOU PWN</h3>
                                    <h4>Blockchain Based Content Listening for the Masses</h4>
                                    <div class="action d-flex align-items-center">
                                        <a :href="defaultDownload.link"
                                            class="btn btn-outline-success"
                                            @click="startDownload(defaultDownload)"
                                            v-if="!downloading">
                                            <strong>Download Now</strong>
                                            <small>for {{ defaultDownload.text }}</small>
                                        </a>
                                        <div v-if="downloading">
                                            Downloading now. <a :href="downloading.link">Click here</a> if it doesn't start in 10 seconds.
                                        </div>
                                        <div class="download_info" @click="showAllPlatforms">
                                            <h6>Using another OS?</h6>
                                            <p>Download for Mac, Windows and Linux</p>
                                            <i class="fab fa-apple"></i>
                                            <i class="fab fa-linux"></i>
                                            <i class="fab fa-windows"></i>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="showAll">
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
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card py-3">
                            <div class="card-body text-center">
                                <h4 class="text-uppercase">
                                    Inter-Game Trading
                                </h4>
                                <p>
                                    Trade your favorite FPS
                                    Uniform for the Sword on
                                    your favorite MMORPG
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card py-3">
                            <div class="card-body text-center">
                                <h4 class="text-uppercase">
                                    Empower Creators
                                </h4>
                                <p>
                                    Know a nice game project?<br>
                                    Have the development crowdfunded
                                    on BlockHub
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card py-3">
                            <div class="card-body text-center">
                                <h4 class="text-uppercase">
                                    New Economies
                                </h4>
                                <p>
                                    Participate in new
                                    microeconomies using
                                    blockchain technology
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
    export default {
        components: {
            'c-layout': (resolve) => require(['@/ui/layouts/default'], resolve)
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
                            link: '/#/download/desktop/mac'
                        }
                    },
                    'windows': {
                        default: {
                            text: 'Windows',
                            subtext: '64-bit',
                            link: '/#/download/desktop/windows'
                        }
                    },
                    'linux': {
                        default: {
                            text: 'Linux',
                            subtext: '64-bit',
                            link: '/#/download/desktop/linux'
                        },
                        generic64: {
                            text: 'Linux',
                            subtext: '64-bit Generic',
                            link: '/#/download/desktop/linux'
                        },
                        generic32: {
                            text: 'Linux',
                            subtext: '32-bit Generic',
                            link: '/#/download/desktop/linux'
                        },
                        debian32: {
                            text: 'Linux',
                            subtext: '32-bit Debian',
                            link: '/#/download/desktop/linux'
                        },
                        debian64: {
                            text: 'Linux',
                            subtext: '64-bit Debian',
                            link: '/#/download/desktop/linux'
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
        },
        mounted() {
            window.document.getElementById('header-bg').style['background-image'] = 'url(/static/img/download-bg.png)'
        }
    }
</script>

<style lang="scss" scoped>
    .card{
        padding: 0px;
        border-radius: 5px;
        border: 1px solid rgba(255, 255, 255, 0.07);
        background: rgba(0, 0, 0, 0.13);
        .card-body{
            padding: 12px;
            .card-sub-bg{
                padding: 7% 15px;
                border-radius: 5px;
                border: 1px solid rgba(255, 255, 255, 0.07);
                background: rgba(0, 0, 0, 0.13);
                position: relative;
                margin-bottom: 3%;
                img{
                    max-width: calc( 47% );
                    height: auto;
                    width: auto;
                    &.absolute_img{
                        position: absolute;
                        top: -30%;
                        right: 3%;
                    }
                }
            }
            .info{
                padding: 0 10px 10px;
                h3{
                    font-weight: bold;
                    font-size: 28px;
                }
                h4{
                    max-width: 420px;
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
        }
    }
</style>
