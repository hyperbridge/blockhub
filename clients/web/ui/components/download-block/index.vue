<template>
    <div class="download-block">
        <div class="download-block__body">
            <div
                v-if="!minimal"
                class="sub-bg position-relative">
                <c-img
                    src="/img/logo-white-text.png"
                    alt="Logo" />
                <c-img
                    v-if="showPreview"
                    src="static/img/download-block-bg.png"
                    class="absolute_img"
                    alt="Logo" />
            </div>
            <div class="info">
                <h3
                    v-if="!minimal"
                    class="text-bold text-uppercase">
                    OWN WHAT YOU PWN
                </h3>
                <h4 v-if="!minimal">
                    Blockchain Based Creations for the Masses
                </h4>
                <div class="action d-flex align-items-center">
                    <c-button
                        v-if="!downloading"
                        status="none"
                        :to="defaultDownload.to"
                        class="btn btn-outline-success"
                        @click="startDownload(defaultDownload)">
                        <strong>Download Now</strong>
                        <small>for {{ defaultDownload.text }}</small>
                    </c-button>
                    <div v-if="downloading">
                        Downloading now. <c-button
                            status="none"
                            :href="downloading.to">
                            Click here
                        </c-button> if it doesn't start in 10 seconds.
                    </div>
                    <div
                        class="downloadInfo"
                        @click="showAllPlatforms">
                        <h6>Using another OS?</h6>
                        <p>Download for Mac, Windows and Linux</p>
                        <i class="fab fa-apple" />
                        <i class="fab fa-linux" />
                        <i class="fab fa-windows" />
                    </div>
                </div>
            </div>
            <div
                v-if="showAll"
                class="otherOptions">
                <div
                    v-for="(item, index) in downloads"
                    :key="index">
                    <c-button
                        v-for="(item, index) in item"
                        :key="index"
                        status="none"
                        :to="item.to"
                        class="btn">
                        <strong>{{ item.text }}</strong>
                        <small>{{ item.subtext }}</small>
                    </c-button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    props: {
        showPreview: {
            type: Boolean,
            default: true
        },
        minimal: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            userAgent: '',
            showAll: false,
            downloading: null,
            defaultDownload: null,
            downloads: {
                'node': {
                    default: {
                        text: 'Windows',
                        subtext: '64-bit',
                        to: '/download/desktop/windows'
                    },
                    generic32: {
                        text: 'Windows',
                        subtext: '32-bit',
                        to: '/download/desktop/windows-32bit'
                    }
                },
                'macos': {
                    default: {
                        text: 'MacOS',
                        subtext: '64-bit',
                        to: '/download/desktop/mac'
                    }
                },
                'windows': {
                    default: {
                        text: 'Windows',
                        subtext: '64-bit',
                        to: '/download/desktop/windows'
                    },
                    generic32: {
                        text: 'Windows',
                        subtext: '32-bit',
                        to: '/download/desktop/windows-32bit'
                    }
                },
                'linux': {
                    default: {
                        text: 'Linux',
                        subtext: '64-bit',
                        to: '/download/desktop/linux'
                    },
                    generic32: {
                        text: 'Linux',
                        subtext: '32-bit',
                        to: '/download/desktop/linux-32bit'
                    },
                    debian64: {
                        text: 'Linux',
                        subtext: '64-bit Debian',
                        to: '/download/desktop/linux-64bit-debian'
                    },
                    debian32: {
                        text: 'Linux',
                        subtext: '32-bit Debian',
                        to: '/download/desktop/linux-32bit-debian'
                    }
                }
            }
        }
    },
    created() {
        this.getOS()

        this.defaultDownload = this.downloads[this.userAgent].default
    },
    methods: {
        getOS() {
            if (!process.client) {
                this.userAgent = 'node'
                return
            }

            const { userAgent } = window.navigator
            const { platform } = window.navigator
            const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K']
            const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE']
            const iosPlatforms = ['iPhone', 'iPad', 'iPod']
            const os = null

            if (macosPlatforms.indexOf(platform) !== -1) {
                this.userAgent = 'macos'
            } else if (iosPlatforms.indexOf(platform) !== -1) {
                this.userAgent = 'ios'
            } else if (windowsPlatforms.indexOf(platform) !== -1) {
                this.userAgent = 'windows'
            } else if (/Android/.test(userAgent)) {
                this.userAgent = 'android'
            } else if (!os && /Linux/.test(platform)) {
                this.userAgent = 'linux'
            }
        },
        showAllPlatforms() {
            this.showAll = !this.showAll
        },
        startDownload(item) {
            this.downloading = item
        }
    }
}
</script>

<style lang="scss" scoped>
    .download-block{
        padding: 0px;
        border-radius: 5px;
        border: 1px solid rgba(255, 255, 255, 0.07);
        background: rgba(0, 0, 0, 0.13);
        .download-block__body{
            padding: 12px;
            .sub-bg{
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
                    filter: contrast(1.2) brightness(1.2);
                    &.absolute_img{
                        position: absolute;
                        top: -25%;
                        right: 3%;
                        max-width: calc( 40% );
                    }
                }
            }
            .info{
                padding: 0 10px 10px;
                text-align: left;
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
                    .downloadInfo{
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
            .otherOptions {
                text-align: left;
            }
        }
    }
    @media (max-width: 767px){
        .download-block{
            .action{
                margin-top: 20px;
                flex-direction: column;
                .btn{
                    margin-bottom: 20px;
                }
                .downloadInfo{
                    text-align: center;
                    margin-left: 0!important;
                }
            }
        }
    }
</style>
