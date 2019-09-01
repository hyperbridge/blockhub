<template>
    <Layout title="Release history">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <ButtonsGroup>
                        <Button
                            :status="ifList"
                            size="md"
                            :shadow="false"
                            iconHide
                            @click="listType = 'list'">
                            Releases
                        </Button>
                        <Button
                            :status="ifTags"
                            size="md"
                            :shadow="false"
                            iconHide
                            @click="listType = 'tags'">
                            Tags
                        </Button>
                    </ButtonsGroup>
                    <Button
                        status="success"
                        icon="plus"
                        class="float-right"
                        size="md"
                        @click="$router.push({ path: '/business/new-release' })">
                        Draft a new release
                    </Button>
                </div>
                <div class="col-12">
                    <div class="history-list">
                        <div v-if="listType == 'list'">
                            <ReleaseListItem
                                v-for="(release) in sortedList"
                                :id="release.id"
                                :key="release.id"
                                :version="release.version"
                                :date="release.date"
                                :author="release.author"
                                :size="release.size"
                                :files="release.files"
                                :text="release.text"
                                :latestRelease="release.latestRelease" />
                        </div>
                        <div
                            v-if="listType == 'tags'"
                            class="history-list__tags-title">
                            <i class="fas fa-tag mr-2" /> Tags
                        </div>
                        <div v-if="listType == 'tags'">
                            <ReleaseTagItem
                                v-for="release in sortedList"
                                :id="release.id"
                                :key="release.id"
                                :version="release.version"
                                :date="release.date"
                                :author="release.author" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script>
export default {
    components: {
        'Layout': () => import('@ericmuyser/hyper-ui').then(m => m.Layout),
        'ButtonsGroup': () => import('@ericmuyser/hyper-ui').then(m => m.ButtonsGroup),
        'ReleaseTagItem': () => import('@ericmuyser/hyper-ui').then(m => m.ReleaseTagItem),
        'ReleaseListItem': () => import('@ericmuyser/hyper-ui').then(m => m.ReleaseListItem)
    },
    data() {
        return {
            listType: 'list',
            releaseList: [
                {
                    id: '987',
                    date: '2018-03-09T18:31:42+03:30',
                    latestRelease: false,
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
                    id: '23413',
                    date: '2018-08-09T18:31:42+03:30',
                    latestRelease: true,
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
                    id: '12',
                    date: '2013-12-09T18:31:42+03:30',
                    latestRelease: false,
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
                    id: '243',
                    date: '2013-08-09T18:31:42+03:30',
                    latestRelease: false,
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
                        }
                    ]
                }
            ]
        }
    },
    computed: {
        ifList() {
            switch (this.listType) {
            case 'list':
                return 'success'
            default:
                return 'outline-success'
            }
        },
        ifTags() {
            switch (this.listType) {
            case 'tags':
                return 'success'
            default:
                return 'outline-success'
            }
        },
        sortedList() {
            const arr = this.releaseList
            arr.sort((a, b) => {
                console.log(new Date(b.date) - new Date(a.date))
                return new Date(b.date) - new Date(a.date)
            })
            return arr
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
