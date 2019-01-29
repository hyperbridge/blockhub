<template>
    <c-launcher bgImage="https://i.pinimg.com/originals/59/2e/02/592e024359dcda92e84c1c8e809e0026.jpg"
                :overlay="true"
                overlayOpacity="0.6"
    >
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
    </c-launcher>
</template>

<script>
    export default {
        components:{
            'c-launcher': (resolve) => require(['@/ui/layouts/launcher'], resolve),
            'c-metro-grid': (resolve) => require(['@/ui/components/metro/grid'], resolve),
            'c-metro-item': (resolve) => require(['@/ui/components/metro/metro-item'], resolve),
        },
        data(){
            return{
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
