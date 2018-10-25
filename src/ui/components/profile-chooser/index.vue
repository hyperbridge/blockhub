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
                            v-for="identity in identities"
                            :key="identity.id">
                            <a href="#3" class="user-card__container-link" @click="setDefault(identity)">
                                <c-user-card
                                    :user="identity"
                                    :previewMode="!identity.edit"
                                    :type="identity.developer_id ? 'developer' : 'user'"
                                    :class="{ 'default': identity.id == (defaultIdentity && defaultIdentity.id) }"
                                />
                            </a>
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
                    slidesPerView: 3,
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
            identities() {
                for(let i in this.$store.state.application.account.identities) {
                    if (!this.$store.state.application.account.identities[i].name)
                        this.$store.state.application.account.identities[i].name = 'Default'
                }

                return this.$store.state.application.account.identities
            },
            defaultIdentity() {
                return this.identities.find(identity => this.$store.state.application.account.current_identity ? identity.id == this.$store.state.application.account.current_identity.id : null)
            }
        },
        methods:{
            closeProfileChooser() {
                this.$store.commit('application/showProfileChooser', false)
            },
            setDefault(identity) {
                this.$store.state.application.account.current_identity = identity
                this.$store.state.application.developer_mode = !!identity.developer_id
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
        background: rgba(0, 0, 0, 0.85);
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
                .identity-block{
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
