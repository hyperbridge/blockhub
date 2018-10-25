<template>
    <div class="profile-chooser">
        <div class="profile-chooser__overlay" @click="closeProfileChooser">
        </div>
        <div class="profile-chooser__wrapper">
            <div class="profile-chooser__content">
                <div class="h4 text-uppercase text-white text-left">
                    Choose your account
                </div>
                <hr />
                <div class="profile-slider">
                    <c-swiper :options="options">
                        <c-slide
                            v-for="identity in identities"
                            :key="identity.id">
                            <c-user-card
                                :user="identity"
                                :previewMode="!identity.edit"
                                :type="identity.developer_id ? 'developer' : 'user'"
                                :class="{ 'default': identity.id == (defaultIdentity && defaultIdentity.id) }"
                                @click.prevent="acceptIdentitiy"
                            />
                        </c-slide>
                    </c-swiper>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
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
            closeProfileChooser(){
                this.$store.state.application.profile_chooser = false
            },
            acceptIdentitiy(){
                console.log('selected identity')
                this.closeProfileChooser()
                this.$store.state.application.profile_chooser = false
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
        background: rgba(0, 0, 0, .7);
    }
    .profile-chooser__wrapper{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 30px 0 10px;
        background: #30314C;
        z-index: 130;
        display: flex;
        justify-content: center;
    }
    .profile-chooser__content{
        flex-direction: column;
        width: 90%;
        max-width: 1000px;
        .profile-slider{
            position: relative;
            padding: 0 40px;
            .swiper-slide{
                padding: 20px;
                .identity-block{
                    transition: transform .2s ease;
                    &:hover{
                        transform: scale(1.1);
                        cursor: pointer;
                    }
                }
            }
        }
    }
</style>
