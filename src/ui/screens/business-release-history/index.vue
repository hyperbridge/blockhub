<template>
    <!--<c-business-layout title="Release history">-->
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <c-buttons-group>
                        <c-button :status="ifList" size="md" @click="listType = 'list'" :shadow="false" icon_hide>
                            Releases
                        </c-button>
                        <c-button :status="ifTags" size="md" @click="listType = 'tags'" :shadow="false" icon_hide>
                            Tags
                        </c-button>
                    </c-buttons-group>
                    <c-button status="success" icon="plus" class="float-right" size="md" @click="$router.push({ path: '/business/new-release' })">
                        Draft a new release
                    </c-button>
                </div>
                <div class="col-12">
                    <div class="history-list" v-if="listType == 'list'">
                        <div class="history-list__list-item" v-for="release in releases_list">
                            <div class="history-list__item-info">
                                <div class="latest-badge" v-if="release.latest_release">
                                    Latest Release
                                </div>
                                <span>
                                    {{ release.date | timeAgo }}
                                </span>
                                        <span>
                                    <i class="fas fa-tag mr-2"></i> v.0.7.1
                                </span>
                            </div>
                            <div class="history-list__item-description">
                                <div class="h1">
                                    {{ release.version }}
                                </div>
                                <div>
                                    {{ release.author }} released this this version {{ release.date | timeAgo }}
                                </div>
                                <div class="release-text padding-top-15" v-html="release.text">
                                </div>
                                <div class="assets-list__wrapper" v-if="release.files">
                                    <div class="assets-list__button" @click="showList = !showList">
                                        <div class="icon">
                                            <i class="fas" :class="[ showList ? 'fa-angle-up' : 'fa-angle-down']"></i>
                                        </div>
                                        <div class="text">
                                            Assets ({{ release.files.length }})
                                        </div>
                                    </div>
                                    <div class="assets-list" v-if="showList">
                                        <div class="assets-list__item" @click="" v-for="file in release.files">
                                            <div class="icon">
                                                <i class="fas fa-file-download"></i>
                                            </div>
                                            <div class="title">
                                                <a :href="file.src" target="_blank">
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
                    </div>
                    <div class="history-list" v-if="listType == 'tags'">
                        <div class="history-list__tag-item" v-for="release in releases_list">
                            <div class="h3">
                                {{ release.version }}
                            </div>
                            <div class="sub-info">
                                <div>
                                    <i class="fas fa-clock"></i> {{ release.date | timeAgo }}
                                </div>
                                <div>
                                    <i class="fas fa-file-archive"></i> .zip
                                </div>
                                <div>
                                    <i class="fas fa-file-archive"></i> .tar.gz
                                </div>
                                <div>
                                    <i class="fas fa-file-alt"></i> Notes
                                </div>
                                <div>
                                    <i class="fas fa-file-download"></i> Download
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <!--</c-business-layout>-->
</template>

<script>
    export default {
        components: {
            'c-business-layout': (resolve) => require(['@/ui/layouts/business'], resolve),
            'c-buttons-group': (resolve) => require(['@/ui/components/buttons/group'], resolve),
        },
        data() {
            return {
                showList: false,
                listType: 'list',
                releases_list:[
                    {
                        date: '2005-08-09T18:31:42+03:30',
                        latest_release: false,
                        version: '0.7.1',
                        author: 'Josh Doel',
                        text: 'In this update:<ul><li>Token purchase flow\n</li><li>Copy to address works</li><li>Account recovery</li><li>Simplify sign up</li><li>Hold ALT and click to give feedback!</li></ul>',
                        files: [
                            {
                                name: 'BlockHub-0.7.1-mac.zip',
                                src: '#',
                                size: 234214324
                            },
                            {
                                name: 'BlockHub-0.7.1-Win86.zip',
                                src: '#',
                                size: 2342324324
                            },
                            {
                                name: 'BlockHub-0.7.1-Linux.zip',
                                src: '#',
                                size: 942324324
                            }
                        ]
                    }
                ]
            }
        },
        computed:{
            ifList(){
                switch (this.listType) {
                    case "list":
                        return 'success'
                    default:
                        return 'outline-success'
                }
            },
            ifTags(){
                switch (this.listType) {
                    case "tags":
                        return 'success'
                    default:
                        return 'outline-success'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .history-list {
        display: flex;
        flex-direction: column;
        margin: 20px 0 0;
        background: #fff;
        border: 1px solid #d4d4d4;
    }

    .history-list__list-item {
        display: flex;
        align-items: stretch;
        flex-wrap: nowrap;
        padding: 0 15px;
    }
    .history-list__tag-item{
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid #d4d4d4;
        padding: 15px;
        background: #fff;
        &:last-child{
            border-bottom: none;
        }
        .sub-info{
            display: flex;
            font-size: 14px;
            align-items: center;
            div{
                margin-right: 20px;
                i{
                    opacity: .7;
                    font-size: 13px;
                    margin-right: 3px;
                }
                &:hover{
                    color: #237cc1;
                    cursor: pointer;
                    opacity: 1;
                }
            }
        }
    }

    .history-list__item-info {
        display: flex;
        flex-direction: column;
        text-align: right;
        padding: 20px 20px 20px 0;
        margin-right: 20px;
        width: 150px;
        font-size: 14px;
        border-right: 2px solid #d4d4d4;
        position: relative;
        &:after{
            position: absolute;
            top: 25px;
            right: -6px;
            width: 10px;
            height: 10px;
            border-radius: 100%;
            background: #d4d4d4;
            content: "";
        }
    }

    .history-list__item-description {
        padding: 10px 0;
        width: calc(100% - 170px);
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
        align-items: center;
        padding: 5px 0;
        font-weight: 500;
        margin-top: 5px;
        font-size: 15px;
        .icon{
            font-size: 15px;
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
