<template>
    <Layout
        bgImage="https://www.numerama.com/content/uploads/2016/08/skyrim.jpeg"
        :overlay="true"
        overlayOpacity="0.3">
        <MetroGrid class="w-100">
            <MetroItem
                v-for="(item, index) in items"
                :key="item.title"
                :image="item.image"
                width="25%"
                :fullImage=" index == 1 ? true : false">
                <div class="h4 font-weight-bold">
                    {{ item.title }}
                </div>
                <div>
                    {{ item.text }}
                </div>
            </MetroItem>
        </MetroGrid>
    </Layout>
</template>

<script>
export default {
    components: {
        'Layout': () => import('@ericmuyser/hyper-ui').then(m => m.Layout),
        'MetroGrid': () => import('@ericmuyser/hyper-ui').then(m => m.MetroGrid),
        'MetroItem': () => import('@ericmuyser/hyper-ui').then(m => m.MetroItem)
    },
    data() {
        return {
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
                },
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
                },
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
                },
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
                },
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
