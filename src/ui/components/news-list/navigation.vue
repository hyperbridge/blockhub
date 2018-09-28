<template>
    <ul class="nav custom-tabs w-100" id="myTab" role="tablist">
        <li class="nav-item" v-for="(item, index) in news" :key="index" v-if="index <= 3">
            <a
                class="nav-link"
                :class="[ index === 0 ? 'active' : '' ]"
                :id="`step${index}-tab`"
                :href="`#tab_${index}`"
                :aria-controls="`step${index}-tab`"
                aria-expanded="true"
                data-toggle="tab"
            >
                <div class="img">
                    <img :src="item.game.img"/>
                </div>
                <div class="text">
                    <h4>{{ item.game.title }}</h4>
                    <p>{{ item.game.developer }}</p>
                </div>
            </a>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'c-news-list-navigation',
    props: {
        news : Array
    }
}
</script>

<style lang="scss" scoped>
    .custom-tabs {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        overflow-x: auto;
        overflow-y: hidden;
        white-space: nowrap;
        li {
            width: 25%;
            min-width: 200px;
            a {
                display: flex;
                width: 100%;
                padding: 15px;
                justify-content: space-between;
                align-items: center;
                color: #fff;
                .img {
                    width: 50px;
                    img {
                        width: 100%;
                        height: auto;
                    }
                }
                .text {
                    width: calc(100% - 65px);
                    color: #fff;
                    h4 {
                        font-weight: bold;
                        padding: 0;
                        margin: 0 0 4px;
                        color: #fff;
                    }
                    p {
                        padding: 0;
                        margin: 0;
                    }
                }
                &.active {
                    background: #3D3E5D;
                }
            }
        }
    }
</style>
