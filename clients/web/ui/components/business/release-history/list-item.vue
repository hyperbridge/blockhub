<template>
    <div class="history-list__list-item">
        <div class="history-list__item-info">
            <div
                v-if="latestRelease"
                class="latest-badge">
                Latest Release
            </div>
            <span>
                {{ date | timeAgo }}
            </span>
            <span>
                <!--<nuxt-link :to="{ name: 'Release page', params: {id: id } }">-->
                <i class="fas fa-tag mr-2" />
                {{ version }}
                <!--</nuxt-link>-->
            </span>
        </div>
        <div class="history-list__item-description">
            <div class="h1">
                <nuxt-link :to="{ name: 'Release page', params: {id: id } }">
                    {{ version }}
                </nuxt-link>
            </div>
            <div style="font-size: 14px">
                {{ author }} released this this version {{ date | timeAgo }}
            </div>
            <div
                class="release-text padding-top-15"
                v-html="text" />
            <div
                v-if="files"
                class="assets-list__wrapper">
                <div
                    class="assets-list__button"
                    @click="showList = !showList">
                    <div class="icon">
                        <i
                            class="fas"
                            :class="[ showList ? 'fa-angle-up' : 'fa-angle-down']" />
                    </div>
                    <div class="text">
                        Assets ({{ files.length }})
                    </div>
                </div>
                <div
                    v-if="showList"
                    class="assets-list">
                    <div
                        v-for="file in files"
                        class="assets-list__item"
                        @click="">
                        <div class="icon">
                            <i class="fas fa-file-download" />
                        </div>
                        <div class="title">
                            <a
                                :href="file.src"
                                target="_blank">
                                {{ file.name }}
                            </a>
                        </div>
                        <div class="size">
                            {{ file.size | numeralFormat('0.00b') }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ReleaseListItem',
    props: {
        id: String,
        version: String,
        date: String,
        author: String,
        size: String,
        text: String,
        latestRelease: {
            type: Boolean,
            default: false
        },
        files: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            showList: false
        }
    }
}
</script>

<style lang="scss" scoped>
    .history-list__list-item {
        display: flex;
        align-items: stretch;
        flex-wrap: nowrap;
        padding: 0 15px;
    }
    .history-list__item-info {
        display: flex;
        flex-direction: column;
        text-align: right;
        padding: 30px 20px 30px 0;
        margin-right: 20px;
        width: 150px;
        font-size: 14px;
        border-right: 2px solid #e7e7e7;
        position: relative;
        &:after{
            position: absolute;
            top: 33px;
            right: -8px;
            width: 15px;
            height: 15px;
            border-radius: 100%;
            background: #d4d4d4;
            content: "";
            border: 3px solid #fff;
        }
    }
    .history-list__item-description {
        padding: 20px 0 30px;
        width: calc(100% - 170px);
        ul{
            margin-bottom: 0;
        }
    }
    .latest-badge {
        border: 1px solid #28a745;
        color: #28a745;
        padding: 0px 7px;
        border-radius: 2px;
        font-size: 10px;
        font-weight: 500;
        margin-bottom: 10px;
        text-transform: uppercase;
        margin-left: auto;
    }
    .assets-list__wrapper{
        margin-top: 15px;
    }
    .assets-list__wrapper,
    .assets-list{
        display: flex;
        width: 100%;
        flex-direction: column;
    }
    .assets-list{
        padding-top: 10px;
    }
    .assets-list__button{
        display: flex;
        align-items: center;
        font-size: 20px;
        cursor: pointer;
        .icon{
            font-size: 24px;
        }
    }
    .assets-list__item{
        display: flex;
        /*align-items: center;*/
        font-weight: 500;
        margin-top: 5px;
        font-size: 15px;
        .icon{
            font-size: 14px;
            margin-right: 5px;
        }
        .size{
            margin-left: auto;
            font-weight: normal;
        }
        a{
            color: #237cc1;
        }
    }
</style>
