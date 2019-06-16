<template>
    <!--<c-business-layout title="Release history">-->
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <c-buttons-group>
                        <c-button :status="ifList" size="md" @click="listType = 'list'" :shadow="false" iconHide>
                            Releases
                        </c-button>
                        <c-button :status="ifTags" size="md" @click="listType = 'tags'" :shadow="false" iconHide>
                            Tags
                        </c-button>
                    </c-buttons-group>
                    <c-button status="success" icon="plus" class="float-right" size="md" @click="$router.push({ path: '/business/new-release' })">
                        Draft a new release
                    </c-button>
                </div>
                <div class="col-12">
                    <div class="history-list">

                        <c-release-list-item  v-for="(release, index) in sortedList"
                                              :version="release.version"
                                              :date="release.date"
                                              :author="release.author"
                                              :size="release.size"
                                              :files="release.files"
                                              :text="release.text"
                                              :id="release.id"
                                              :latest_release="release.latest_release"
                                              v-if="listType == 'list'"
                        />
                        <div class="history-list__tags-title" v-if="listType == 'tags'" >
                            <i class="fas fa-tag mr-2"></i> Tags
                        </div>
                        <c-release-tag-item  v-for="release in sortedList"
                                            :version="release.version"
                                            :id="release.id"
                                            :date="release.date"
                                            :author="release.author"
                                            v-if="listType == 'tags'" />
                    </div>
                </div>
            </div>
        </div>
    <!--</c-business-layout>-->
</template>

<script>
    export default {
        components: {
            'c-buttons-group': (resolve) => require(['@/ui/components/buttons/group'], resolve),
            'c-release-tag-item': (resolve) => require(['@/ui/components/business/release-history/tag-item'], resolve),
            'c-release-list-item': (resolve) => require(['@/ui/components/business/release-history/list-item'], resolve),
        },
        data() {
            return {
                listType: 'list',
                releases_list:[
                    {
                        id: "987",
                        date: '2018-03-09T18:31:42+03:30',
                        latest_release: false,
                        version: '0.5.1',
                        author: 'Josh Doel',
                        text: 'In this update:<ul><li>Simplify sign up</li><li>Hold ALT and click to give feedback!</li></ul>',
                        files: [
                            {
                                name: 'BlockHub-0.3.1-mac.zip',
                                src: '#',
                                size: 234214324
                            },
                            {
                                name: 'BlockHub-0.3.1-Win86.zip',
                                src: '#',
                                size: 2342324324
                            },
                            {
                                name: 'BlockHub-0.3.1-Linux.zip',
                                src: '#',
                                size: 942324324
                            }
                        ]
                    },
                    {
                        id: "23413",
                        date: '2018-08-09T18:31:42+03:30',
                        latest_release: true,
                        version: '0.2.1',
                        author: 'Josh Doel',
                        text: 'In this update:<ul><li>Token purchase flow</li><li>Copy to address works</li><li>Account recovery</li></ul>',
                        files: [
                            {
                                name: 'BlockHub-0.2.1-mac.zip',
                                src: '#',
                                size: 234214324
                            },
                            {
                                name: 'BlockHub-0.2.1-Win86.zip',
                                src: '#',
                                size: 2342324324
                            },
                            {
                                name: 'BlockHub-0.2.1-Linux.zip',
                                src: '#',
                                size: 942324324
                            }
                        ]
                    },
                    {
                        id: "12",
                        date: '2013-12-09T18:31:42+03:30',
                        latest_release: false,
                        version: '0.0.1',
                        author: 'Josh Doel',
                        text: 'Add version for MacOs',
                        files: [
                            {
                                name: 'BlockHub-0.0.1-mac.zip',
                                src: '#',
                                size: 234214324
                            }
                        ]
                    },
                    {
                        id: "243",
                        date: '2013-08-09T18:31:42+03:30',
                        latest_release: false,
                        version: '0.0.1',
                        author: 'Josh Doel',
                        text: 'First release',
                        files: [
                            {
                                name: 'BlockHub-0.0.1-Win86.zip',
                                src: '#',
                                size: 2342324324
                            },
                            {
                                name: 'BlockHub-0.0.1-Win64.zip',
                                src: '#',
                                size: 2342324324
                            },
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
            },
            sortedList(){
                let arr = this.releases_list;
                arr.sort(function(a,b){
                    console.log(new Date(b.date) - new Date(a.date))
                    return new Date(b.date) - new Date(a.date);
                });
                return arr;
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
        border-top: 1px solid #e7e7e7;
    }
    .history-list__tags-title{
        display: flex;
        padding: 10px 15px;
        background: #e7e7e7;
        align-items: center;
        i{
            font-size: 14px;
        }
    }
</style>
