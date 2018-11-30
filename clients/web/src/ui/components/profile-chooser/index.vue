<template>
    <div class="profile-chooser">
        <div class="profile-chooser__overlay" @click="closeProfileChooser">
        </div>
        <div class="profile-chooser__wrapper">
            <div class="profile-chooser__content">
                <c-heading-bar
                    slot="title"
                    class="mb-0"
                    name="Choose Profile"
                    :showBackground="false"
                />
                <div class="profile-slider">
                    <c-swiper :options="options">
                        <c-slide
                            v-for="profile in profiles"
                            :key="profile.id"
                        >
                            <div
                                class="user-card__container-link"
                                @click="setDefault(profile)"
                            >
                                <c-user-card
                                    :user="profile"
                                    :previewMode="!profile.edit"
                                    :class="{
                                        'default': activeProfile && profile.id == activeProfile.id
                                    }"
                                />
                            </div>
                        </c-slide>
                    </c-swiper>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </div>
                <c-heading-bar
                    slot="title"
                    class="mb-0"
                    name=""
                    :showBackground="false"
                />
                <div class="profile-chooser__actions">
                    <c-button class="profile-chooser__back-button c-btn-lg outline-white" @click="closeProfileChooser">Back</c-button>
                    <c-button class="profile-chooser__ok-button c-btn-lg outline-white" @click="closeProfileChooser">OK</c-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import * as Bridge from '@/framework/desktop-bridge'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import 'swiper/dist/css/swiper.css'

    export default {
        components: {
            'c-swiper': swiper,
            'c-slide': swiperSlide,
            'c-user-card': (resolve) => require(['@/ui/components/user-card'], resolve),
        },
        data(){
            return{
                options: {
                    slidesPerView: 4,
                    spaceBetween: 0,
                    navigation: {
                        nextEl: '.profile-chooser__wrapper .swiper-button-next',
                        prevEl: '.profile-chooser__wrapper .swiper-button-prev'
                    },
                    breakpoints: {
                        1024: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 0
                        },
                    }
                },
            }
        },
        computed: {
            profiles() {
                return this.$store.state.application.account.profiles
            },
            activeProfile() {
                return this.$store.state.application.account.activeProfile
            }
        },
        methods: {
            closeProfileChooser() {
                this.$store.commit('application/showProfileChooser', false)
            },
            setDefault(profile) {
                this.$store.commit(
                    'updateSingle',
                    ['application/account', { activeProfile: profile }]
                )

                this.$store.state.application.developerMode = !!profile.developerId
            }
        }
    }
</script>

<style lang="scss" scoped>
    .profile-chooser__overlay{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 99;
        background: rgba(0, 0, 0, 0.2);
    }
    .profile-chooser__wrapper{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: #30314c;
        z-index: 130;
        display: flex;
        justify-content: center;
        padding: 20px 30px;
    }
    .profile-chooser__content{
        width: 100%;
        .profile-slider{
            position: relative;
            padding: 0 40px;
            .swiper-slide{
                padding: 15px;
                .profile-block{
                    transition: transform .2s ease;
                    z-index: 8;
                    &.default{
                        width: calc( 100% - 22px );
                        float: right;
                    }
                    &:hover{
                        transform: scale(1.05);
                        cursor: pointer;
                        z-index: 9;
                    }
                }
            }
        }
    }
    .profile-chooser__actions {
        height: 50px;
        padding: 20px 0;
    }
    .profile-chooser__back-button {
        float: left;
    }
    .profile-chooser__ok-button {
        float: right;
    }
    .user-card__container-link{
        text-decoration: none;
        color: #fff;
    }
    .swiper-button-prev, .swiper-button-next {
        filter: brightness(10) grayscale(1);
    }
</style>
