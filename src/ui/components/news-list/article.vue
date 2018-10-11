<template>
    <div class="article-item" :style="{ width: 'calc( 100% / ' + itemInRow + ')'}">
        <h4>{{ heading }}</h4>
        <div class="published_date mb-3">
            Published {{ date | parse_date }}
        </div>
        <p>{{ content }}</p>
        <a :href="`/${url}`" class="btn btn-link">
            Read More
        </a>
    </div>
</template>

<script>
    import moment from 'moment';
    export default {
        props: {
            heading: String,
            date: String,
            content: String,
            url: String,
            itemInRow: {
                default: 3
            }
        },
        filters: {
            parse_date(date) {
                return moment(date).fromNow();
            }
        }
    }
</script>

<style lang="scss">
    .article-item{
        color: #fff;
        list-style: none;
        padding: 10px;
        h4 {
            font-weight: bold;
            font-size: 18px;
            margin: 0;
            padding: 0;
            color: #fff;
        }
        a {
            padding: 0;
            margin-top: auto;
            color: #fff;
            font-weight: bold;
            text-transform: uppercase;
        }

    }
</style>
