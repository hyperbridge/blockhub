<template>
    <c-layout navigationKey="store">
        <div class="row">
            <div class="col-12 text-center mb-5">
                <h2 class="mb-4">Streams</h2>
                <div class="h4 font-weight-light">
                    Aliquam fringilla nisl id viverra luctus. Donec nulla ipsum, aliquam eget condimentum at, lobortis
                    eu nibh. Donec sollicitudin libero in mauris pharetra ultrices. Integer vitae arcu nec sapien
                    condimentum iaculis.
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4" v-for="stream in streams">
                <c-stream-item
                    :streamName="stream.userName"
                    :streamAvatar="stream.userAvatar"
                    :streamImg="stream.previews"
                    :streamSrc="stream.src"
                    :streamViews="stream.views"
                />
            </div>
            <div class="col-12 mt-5">
                <c-stream-carousel :streams="streams" />
            </div>
        </div>
    </c-layout>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'

    export default {
        components: {
            'c-stream-item': (resolve) => require(['@/ui/components/stream'], resolve),
            'c-stream-carousel': (resolve) => require(['@/ui/components/stream/carousel'], resolve),
        },
        data() {
            return {
                streams: [
                    {
                        "game": "Dota II",
                        "userName": "GodOfDota",
                        "userAvatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVIOE5IdK4MWeI-iEphf-BhZh2XsXBrBn_fcsGXbFGSF-xwH8h",
                        "previews": "http://dota2-videos.com/wp-content/uploads/2018/07/jx3Oj0O-G8Ihqdefault.jpg",
                        "src": "#",
                        "views": 10
                    },
                    {
                        "game": "Dota II",
                        "userName": "GodOfDota",
                        "userAvatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVIOE5IdK4MWeI-iEphf-BhZh2XsXBrBn_fcsGXbFGSF-xwH8h",
                        "previews": "http://dota2-videos.com/wp-content/uploads/2018/07/jx3Oj0O-G8Ihqdefault.jpg",
                        "src": "#",
                        "views": 10
                    },
                    {
                        "game": "Dota II",
                        "userName": "GodOfDota",
                        "userAvatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVIOE5IdK4MWeI-iEphf-BhZh2XsXBrBn_fcsGXbFGSF-xwH8h",
                        "previews": "http://dota2-videos.com/wp-content/uploads/2018/07/jx3Oj0O-G8Ihqdefault.jpg",
                        "src": "#",
                        "views": 10
                    }
                ]
            }
        }
        // created() {
        //     this.$store.commit('application/activateModal', 'coming-soon')
        // }
    }
</script>

<style lang="scss" scoped>

</style>
