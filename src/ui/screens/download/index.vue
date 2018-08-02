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
                                    <h3 class="text-bold text-uppercase">Own what you pwn</h3>
                                    <h4>Blockchain Based Content Listening for the Masses</h4>
                                    <div class="action d-flex align-items-center">
                                        <div>
                                            <a href="#3" class="btn btn-outline-success">
                                                <strong>Download Now</strong>
                                                <small>Windows 64-bit</small>
                                            </a>
                                        </div>
                                        <div class="download_info">
                                            <h6>Using another OS?</h6>
                                            <p>Download for Mac, Windows and Linux</p>
                                            <i class="fab fa-apple"></i>
                                            <i class="fab fa-linux"></i>
                                            <i class="fab fa-windows"></i>
                                        </div>
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
            'c-layout': () => import('@/ui/layouts/default')
        },
        data() {
            return {
            }
        },
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
                    a{
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
