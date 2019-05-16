<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-8">
                <div class="form-group row align-items-center">
                    <div class="col-sm-3 col-lg-2">
                        <label>Version</label>
                    </div>
                    <div class="col-sm-9 col-lg-10">
                        <input type="text" class="form-control" placeholder="Example: v.0.0.7">
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-3 col-lg-2">
                        <label>Your text</label>
                    </div>
                    <div class="col-sm-9 col-lg-10">
                        <c-text-editor v-model="text" :editorToolbar="customToolbar" />
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-3 col-lg-2"></div>
                    <div class="col-sm-9 col-lg-10">
                        <div class="file-upload__wrapper">
                            <div v-show="$refs.upload && $refs.upload.dropActive" class="drop-active">
                                <h3>Drop files to upload</h3>
                            </div>
                            <c-file-upload ref="upload"
                                           v-model="files"
                                           :multiple="true"
                                           :drop="true"
                                           class="w-100"
                                           :drop-directory="true"
                                           @input-file="inputFile"
                                           @input-filter="inputFilter">

                                <div class="file-upload__select-file">
                                    Attach files by dragging & dropping or click here.
                                </div>
                            </c-file-upload>
                            <c-notification-inline type="danger" v-if="wrongFormat" class="my-3" size="sm">
                                Wrong file format
                            </c-notification-inline>
                            <ul class="file-upload__files-list" v-if="files.length">
                                <li v-for="(file, index) in files" :key="file.id">
                                    <span class="upload-status" v-if="file.error">{{file.error}}</span>
                                    <span class="upload-status" v-else-if="file.success">
                                        <i class="fas fa-check-circle" style="color: #43C981"></i>
                                    </span>
                                    <span class="upload-status" v-else-if="file.active">
                                        <c-loading-bar-circle />
                                    </span>
                                    <span class="file-name">{{file.name}}</span>
                                    <span class="file-size">
                                        {{file.size | numeralFormat('0.00b') }}
                                        <i class="fa fa-times ml-3" aria-hidden="true" v-if="!$refs.upload || !$refs.upload.active" @click.prevent="$refs.upload.remove(file)"></i>
                                    </span>
                                </li>
                                <hr />
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="form-group row align-items-center">
                    <div class="col-sm-3 col-lg-2">
                    </div>
                    <div class="col-sm-9 col-lg-10">
                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input">
                            <label class="form-check-label">This is pre-release</label>
                        </div>
                    </div>
                </div>
                <div class="form-group row align-items-center">
                    <div class="col-sm-3 col-lg-2">
                    </div>
                    <div class="col-sm-9 col-lg-10">
                        <c-button status="success" iconHide>
                            Publish release
                        </c-button>
                        <c-button status="danger" iconHide class="mx-3">
                            Save draft
                        </c-button>
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
            'c-business-layout': (resolve) => require(['@/layouts/business'], resolve),
            'c-loading-bar-circle': (resolve) => require(['@/components/loading-bar/circle'], resolve),
            'c-notification-inline': (resolve) => require(['@/components/notification/inline'], resolve),
            'c-text-editor': VueEditor,
            'c-file-upload': VueUploadComponent
        },
        data() {
            return {
                loadingState: true,
                text: '',
                customToolbar: [
                    ["bold", "italic", "underline"],
                    [{ list: "ordered" }, { list: "bullet" }],
                    [ "code-block"],
                    [{ 'size': ['small', false, 'large', 'huge'] }],
                    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                    [{ 'color': [] }, { 'background': [] }],
                    ['clean']
                ],
                files: [],
                wrongFormat: false
            }
        },
        methods:{
            inputFile: function (newFile, oldFile) {
                if (newFile && oldFile && !newFile.active && oldFile.active) {
                    // Get response data
                    console.log('response', newFile.response)
                    if (newFile.xhr) {
                        //  Get the response status code
                        console.log('status', newFile.xhr.status)
                    }
                }
            },
            inputFilter: function (newFile, oldFile, prevent) {
                if (newFile && !oldFile) {
                    // Filter non-image file
                    if (!/\.(jpeg|jpe|jpg|gif|png|webp)$/i.test(newFile.name)) {
                        // console.log('wrong file')
                        this.wrongFormat = true
                        return prevent()
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .form-group{
        label{
            font-size: 14px;
            text-align: right;
        }
    }
    .file-upload__select-file{
        border: 1px dashed #ccc;
        padding: 10px;
        text-align: center;
        color: #333;
        font-size: 14px;
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        &:hover{
            background: #e9e9e9;
            border-style: solid;
            cursor: pointer;
        }
    }
    .file-upload__wrapper {
        label.btn{
            margin-bottom: 0;
            margin-right: 1rem;
        }
        .drop-active {
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            position: fixed;
            z-index: 9999;
            opacity: .6;
            text-align: center;
            background: #52adfc;
            h3 {
                margin: -.5em 0 0;
                position: absolute;
                top: 50%;
                left: 0;
                right: 0;
                -webkit-transform: translateY(-50%);
                -ms-transform: translateY(-50%);
                transform: translateY(-50%);
                font-size: 40px;
                color: #fff;
                padding: 0;
            }
        }
    }
    .file-upload__files-list{
        padding: 0;
        margin: 10px 0 0;
        width: 100%;
        li{
            list-style: none;
            display: flex;
            padding: 5px 0;
            align-items: center;
            .upload-status{
                width: 15px;
                height: 15px;
                margin-right: 10px;
            }
            .file-name{
                max-width: calc(100% - 120px);
            }
            .file-size{
                margin-left: auto;
            }
        }
    }
</style>
