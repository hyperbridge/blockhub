<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="h2">
                    {{ release.version }}
                </div>
                <div class="d-flex">
                    <div class="latest-badge mr-3" v-if="release.latest_release">
                        Latest Release
                    </div>
                    <div>
                        {{ release.date | timeAgo }}
                    </div>
                </div>
                <div class="my-3" v-html="release.text">
                </div>
                <hr />
                <div class="assets-list">
                    <div class="assets-list__item" v-for="file in release.files">
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
</template>

<script>
    import { VueEditor } from "vue2-editor";
    import VueUploadComponent from 'vue-upload-component'

    export default {
        components: {
            'c-layout': () => import('~/components/business-layout').then(m => m.default || m),
            'c-loading-bar-circle': () => import('~/components/loading-bar/circle').then(m => m.default || m),
            'c-notification-inline': () => import('~/components/notification/inline').then(m => m.default || m),
            'c-text-editor': VueEditor,
            'c-file-upload': VueUploadComponent
        },
        data() {
            return {
                release: {
                    date: '2005-08-09T18:31:42+03:30',
                    latest_release: true,
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
            }
        },
        created(){
            console.log('this', this)
            console.log('root', this.$root)
            this.$root.pageTitle = this.release.version;
        }
    }
</script>

<style lang="scss" scoped>

    .latest-badge {
        border: 1px solid #28a745;
        color: #28a745;
        padding: 0px 7px;
        border-radius: 2px;
        font-size: 10px;
        font-weight: 500;
        text-transform: uppercase;
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
