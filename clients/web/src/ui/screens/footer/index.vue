<template>
    <c-layout :showLeftPanel="false" :showRightPanel="false">
        <div class="row justify-content-center">
            <div class="col-12 py-5 text-center margin-bottom-30">
                <c-button status="second-info" size="lg">
                    Go to Blog
                </c-button>
            </div>
            <div class="col-12 col-lg-2">
                <c-sidebar-menu sub_title="Tools" mClass="margin-bottom-20">
                    <c-sidebar-menu-link to="/">Bridge</c-sidebar-menu-link>
                    <c-sidebar-menu-link to="/">Mixer</c-sidebar-menu-link>
                    <c-sidebar-menu-link to="/">Suite</c-sidebar-menu-link>
                </c-sidebar-menu>
            </div>
            <div class="col-12 col-lg-2">
                <c-sidebar-menu sub_title="Company" mClass="margin-bottom-20">
                    <c-sidebar-menu-link to="/">Press</c-sidebar-menu-link>
                    <c-sidebar-menu-link to="/">Jobs</c-sidebar-menu-link>
                    <c-sidebar-menu-link to="/">Pricing</c-sidebar-menu-link>
                </c-sidebar-menu>
            </div>
            <div class="col-12 col-lg-2">
                <c-sidebar-menu sub_title="Inspiration & Learning" mClass="margin-bottom-20">
                    <c-sidebar-menu-link to="/">Blog</c-sidebar-menu-link>
                    <c-sidebar-menu-link to="/">Gallery</c-sidebar-menu-link>
                    <c-sidebar-menu-link to="/">Tutorials</c-sidebar-menu-link>
                </c-sidebar-menu>
            </div>
            <div class="col-12 col-lg-2">
                <c-sidebar-menu sub_title="Community & Support" mClass="margin-bottom-20">
                    <c-sidebar-menu-link to="/">Artist Community</c-sidebar-menu-link>
                    <c-sidebar-menu-link to="/">Get Help</c-sidebar-menu-link>
                    <c-sidebar-menu-link to="/">FAQ</c-sidebar-menu-link>
                </c-sidebar-menu>
            </div>
            <div class="col-12 col-lg-4">
                <div class="h5 text-uppercase text-white font-weight-bold p-0 margin-bottom-10 margin-top-10">
                    Connect
                </div>
                <div class="d-flex justify-content-between align-items-stretch mt-3 mb-4">
                    <c-input placeholder="Join our mailing list" />
                    <c-button status="second-info" size="sm" class="ml-3 px-4">
                        Join
                    </c-button>
                </div>
                <div class="social-list d-flex justify-content-between mt-3">
                    <c-social-link size="xl" icon="facebook" />
                    <c-social-link size="xl" icon="twitter" />
                    <c-social-link size="xl" icon="slack" />
                    <c-social-link size="xl" icon="instagram" />
                    <c-social-link size="xl" icon="youtube" />
                    <c-social-link size="xl" icon="discord" />
                    <c-social-link size="xl" icon="linkedin" />
                </div>
            </div>
            <div class="col-12 logos-slider">
                <c-swiper :options="sliderOptions" class="padding-bottom-30 margin-bottom-30 padding-top-40 margin-top-50 border-top border-bottom ">
                    <c-slide v-for="logo in logos">
                        <img :src="logo" alt="" class="img-fluid image-white" />
                    </c-slide>
                </c-swiper>
            </div>
            <div class="col-12 col-md-6">
                <ul class="list-unstyled d-flex align-items-center">
                    <li class="px-3 border-right">
                        <a href="#3" class="text-white">
                            Legal
                        </a>
                    </li>
                    <li class="px-3 border-right">
                        <a href="#3" class="text-white">
                            Privacy
                        </a>
                    </li>
                    <li class="px-3">
                        <a href="#3" class="text-white">
                            Cookies
                        </a>
                    </li>
                </ul>
            </div>
            <div class="col-12 col-md-6 text-right">
                <span class="text-muted">
                    2018 BlockHub. All rights reserved.
                </span>
            </div>
        </div>
    </c-layout>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'

    export default {
        components:{
            'c-sidebar-menu-link': (resolve) => require(['@/ui/components/sidebar-menu/menu_item'], resolve),
            'c-sidebar-menu': (resolve) => require(['@/ui/components/sidebar-menu/index'], resolve),
            'c-social-link': (resolve) => require(['@/ui/components/buttons/social-icon'], resolve),
            'c-swiper': swiper,
            'c-slide': swiperSlide,
        },
        data(){
            return{
                sliderOptions: {
                    slidesPerView: 8,
                    spaceBetween: 40,
                    // autoHeight: true,
                    loop: true,
                    breakpoints: {
                        1920: {
                            slidesPerView: 10,
                            spaceBetween: 40
                        },
                        1440: {
                            slidesPerView: 8,
                            spaceBetween: 40
                        },
                        1368: {
                            slidesPerView: 6,
                            spaceBetween: 30
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 20
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 10
                        },
                    }
                },
                logos: [
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Teradata_logo_2018.png/1600px-Teradata_logo_2018.png',
                    'http://www.pngpix.com/wp-content/uploads/2016/07/PNGPIX-COM-Southern-Company-Logo-PNG-Transparent.png',
                    'http://arckpack.com.br/assets/images/arckpack-logo.gif',
                    'https://vignette.wikia.nocookie.net/logopedia/images/7/79/TVS_Motor_Company_Logo.png/revision/latest/scale-to-width-down/640?cb=20121212235421',
                    'http://www.s3infotech.in/images/portfolio/2000px-Fujitsu-Logo.svg.png',
                    'http://www.s3infotech.in/images/portfolio/sd-logo.png',
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Komatsu_company_logos.svg/1280px-Komatsu_company_logos.svg.png',
                    'https://agrobiz.net/static-files/img/goods/0a/d7/prokladka-87553152-107783.png',
                    'http://skladtechnika.ru/pics/images/informations/articles/Mitsubishi_logo.gif'
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .logos-slider{
        .swiper-slide{
            height: auto;
            display: flex;
            align-items: center;
        }
    }
    .image-white{
        filter: brightness(0) invert(1);
    }
</style>
