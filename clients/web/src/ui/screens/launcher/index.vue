<template>
    <c-layout :showLeftPanel="false"
              :showRightPanel="false"
              bgImage="https://www.gamekings.tv/wp-content/uploads/20170227_shadowofwar.jpg"
              :showBreadcrumbs="false"
              :customShortcuts="gamesShortcuts">
        <c-metro-grid class="w-100">
            <c-metro-item v-for="(item, index) in items" :image="item.image" width="25%" :fullImage=" index == 1 ? true : false">
                <div class="h4 font-weight-bold">
                    {{ item.title }}
                </div>
                <div>
                    {{ item.text }}
                </div>
            </c-metro-item>
        </c-metro-grid>
        <center class="w-100 margin-top-50">
            <c-button status="second-info" size="xl">
                Play Now
            </c-button>
        </center>
    </c-layout>
</template>

<script>
    export default {
        components:{
            'c-metro-grid': (resolve) => require(['@/ui/components/metro/grid'], resolve),
            'c-metro-item': (resolve) => require(['@/ui/components/metro/metro-item'], resolve),
        },
        data(){
            return{
                gamesShortcuts: [
                    {
                        "r": null,
                        "g": null,
                        "b": null,
                        "image": "https://i.pinimg.com/564x/08/f0/79/08f079b6aefc47ab8c894009e30a60ef.jpg",
                        "eventKey": "application/activateModal",
                        "eventValue": "connect-network",
                        "unread": false,
                        "text": "Go to Twitch",
                        "sort": 1,
                        "removable": false
                    },
                    {
                        "r": null,
                        "g": null,
                        "b": null,
                        "image": "https://i.pinimg.com/564x/76/27/c3/7627c3c285ee472fc8d58a828572ad5e.jpg",
                        "eventKey": "application/activateModal",
                        "eventValue": "connect-network",
                        "unread": false,
                        "text": "Go to Discord",
                        "sort": 2,
                        "removable": false
                    },
                    {
                        "r": null,
                        "g": null,
                        "b": null,
                        "image": "https://i.pinimg.com/564x/d7/ad/19/d7ad19e707765e4f977057507f8a0593.jpg",
                        "eventKey": "application/activateModal",
                        "eventValue": "connect-network",
                        "unread": false,
                        "text": "Go to Steam",
                        "sort": 3,
                        "removable": false
                    },
                    {
                        "r": null,
                        "g": null,
                        "b": null,
                        "image": "https://i.pinimg.com/564x/41/91/88/4191888f472dc3351107dbb26283abf5.jpg",
                        "eventKey": "application/activateModal",
                        "eventValue": "connect-network",
                        "unread": false,
                        "text": "Go to Instagram",
                        "sort": 5,
                        "removable": false
                    },
                    {
                        "r": null,
                        "g": null,
                        "b": null,
                        "image": "https://i.pinimg.com/564x/e8/55/bf/e855bf14c4cc4cf452e38948b0d0689f.jpg",
                        "eventKey": "application/activateModal",
                        "eventValue": "connect-network",
                        "unread": false,
                        "text": "Go to Youtube",
                        "sort": 6,
                        "removable": false
                    }
                ],
                items: [
                    {
                        image: 'https://cdn.images.dailystar.co.uk/dynamic/184/photos/532000/620x/Days-Gone-PS4-Release-Date-gameplay-trailers-E3-2018-news-updates-for-new-zombie-games-677269.jpg',
                        title: 'Nam euismod tincidunt sapien',
                        text: 'Sed id accumsan diam, ac elementum nulla. Nullam dictum, diam at interdum ullamcorper, nisl arcu ornare felis, bibendum porttitor urna elit at ligula. Nulla eget orci fringilla, eleifend nisi id, consectetur urna.'
                    },
                    {
                        image: 'https://cdn.images.dailystar.co.uk/dynamic/184/photos/532000/620x/Days-Gone-PS4-Release-Date-gameplay-trailers-E3-2018-news-updates-for-new-zombie-games-677269.jpg',
                        title: 'Nunc tempor purus eget tellus tincidunt, sed eleifend ligula tempor',
                        text: 'Dibendum porttitor urna elit at ligula. Nulla eget orci fringilla, eleifend nisi id, consectetur urna.'
                    },
                    {
                        image: 'https://cdn.images.dailystar.co.uk/dynamic/184/photos/532000/620x/Days-Gone-PS4-Release-Date-gameplay-trailers-E3-2018-news-updates-for-new-zombie-games-677269.jpg',
                        title: 'Cras varius est at dolor porttitor',
                        text: 'lobortis velit laoreet nec. Integer mollis dolor mattis ligula consequat faucibus. Praesent suscipit, risus at elementum blandit, lacus risus interdum risus, non elementum elit turpis id nibh'
                    },
                    {
                        image: 'https://cdn.images.dailystar.co.uk/dynamic/184/photos/532000/620x/Days-Gone-PS4-Release-Date-gameplay-trailers-E3-2018-news-updates-for-new-zombie-games-677269.jpg',
                        title: 'Sed purus risus, ornare pretium pretium',
                        text: 'Nam sit amet egestas tellus. Nunc tempor purus eget tellus tincidunt, sed eleifend ligula tempor. Vivamus vestibulum consequat tempor.'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
