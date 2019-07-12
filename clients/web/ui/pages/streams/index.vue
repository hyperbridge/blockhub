<template>
    <c-layout navigationKey="store">
        <div class="row">
            <div class="col-12 text-center mb-5">
                <h2 class="mb-4">
                    Streams
                </h2>
                <div class="h4 font-weight-light">
                    Aliquam fringilla nisl id viverra luctus. Donec nulla ipsum, aliquam eget condimentum at, lobortis
                    eu nibh. Donec sollicitudin libero in mauris pharetra ultrices. Integer vitae arcu nec sapien
                    condimentum iaculis.
                </div>
            </div>
            <div
                v-for="stream in streams"
                :key="stream.id"
                class="col-12 col-md-6 col-lg-4">
                <c-stream-item
                    :streamName="stream.userName"
                    :streamAvatar="stream.userAvatar"
                    :streamImg="stream.previews"
                    :streamLink="stream.link"
                    :streamId="stream.id"
                    :streamViews="stream.views" />
            </div>
            <div class="col-12 mt-5">
                <c-stream-carousel
                    title="HOT streams"
                    :showBackground="false"
                    :streams="streams" />
            </div>
        </div>
    </c-layout>
</template>

<script>
export default {
    head() {
        return {
            title: `Streams | BlockHub`,
            meta: [
                { hid: 'description', name: 'description', content: `BlockHub streams` },
                { hid: 'keywords', name: 'keywords', content: 'streams, twitch, youtube, blockchain, game, indie, developer' }
            ]
        }
    },
    components: {
        'c-stream-item': () => import('~/components/stream').then(m => m.default || m),
        'c-stream-carousel': () => import('~/components/stream/carousel').then(m => m.default || m)
    },
    data() {
        return {
            streams: [
                {
                    'id': 1,
                    'game': 'Dota II',
                    'userName': 'GodOfDota',
                    'userAvatar': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVIOE5IdK4MWeI-iEphf-BhZh2XsXBrBn_fcsGXbFGSF-xwH8h',
                    'previews': 'http://dota2-videos.com/wp-content/uploads/2018/07/jx3Oj0O-G8Ihqdefault.jpg',
                    'src': '#',
                    'views': 10,
                    'link': '/stream'
                },
                {
                    'id': 2,
                    'game': 'Dota II',
                    'userName': 'GodOfDota',
                    'userAvatar': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVIOE5IdK4MWeI-iEphf-BhZh2XsXBrBn_fcsGXbFGSF-xwH8h',
                    'previews': 'https://i.ytimg.com/vi/9LpiYnkuqMw/maxresdefault.jpg',
                    'src': '#',
                    'views': 10,
                    'link': '/stream'
                },
                {
                    'id': 3,
                    'game': 'Dota II',
                    'userName': 'GodOfDota',
                    'userAvatar': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVIOE5IdK4MWeI-iEphf-BhZh2XsXBrBn_fcsGXbFGSF-xwH8h',
                    'previews': 'https://via.placeholder.com/350x300',
                    'src': '#',
                    'views': 10,
                    'link': '/stream'
                },
                {
                    'id': 4,
                    'game': 'Dota II',
                    'userName': 'GodOfDota',
                    'userAvatar': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVIOE5IdK4MWeI-iEphf-BhZh2XsXBrBn_fcsGXbFGSF-xwH8h',
                    'previews': 'https://i.ytimg.com/vi/HF03DrMXg0U/maxresdefault.jpg',
                    'src': '#',
                    'views': 10,
                    'link': '/stream'
                },
                {
                    'id': 5,
                    'game': 'Dota II',
                    'userName': 'GodOfDota',
                    'userAvatar': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVIOE5IdK4MWeI-iEphf-BhZh2XsXBrBn_fcsGXbFGSF-xwH8h',
                    'previews': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7f3yGSordUGjVLcQbUU6X6uGW6zuN-aBZM2GVt9d3J8NHASt2',
                    'src': '#',
                    'views': 10,
                    'link': '/stream'
                },
                {
                    'id': 6,
                    'game': 'Dota II',
                    'userName': 'GodOfDota',
                    'userAvatar': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVIOE5IdK4MWeI-iEphf-BhZh2XsXBrBn_fcsGXbFGSF-xwH8h',
                    'previews': 'http://www.logicalincrements.com/assets/img/articles/streaming/wagamamatv-dota2.jpg',
                    'src': '#',
                    'views': 10,
                    'link': '/stream'
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
